# Uitrollen naar ZAD

De website draait op ZAD (Zelfservice Applicatie Deployment) op
`nerds.digitaledienst.overheid.nl`, als rootless nginx-container met de
gebouwde site erin.

## Hoe het werkt

`.github/workflows/main.yml` draait bij elke push naar `main`.
De workflow bouwt de site met `mkdocs build`, bouwt daar met
`deploy/Dockerfile` een image omheen en pusht dat naar
`ghcr.io/nederlandsedigitaledienst/nerds:<build>`. Daarna rolt de
action `RijksICTGilde/zad-actions/deploy` dat image uit op de deployment
`productie`.

De eerste job van de workflow is release-please. Die houdt een release-PR bij
met het volgende versienummer en de changelog. Is die PR net gemerged, dan
maakt de job de tag en de GitHub-release, en pas daarna start de build. Een
release ontstaat alleen zo: de workflow reageert niet op een tag die iemand
met de hand pusht. Hoe het team een versie uitbrengt staat in
`CONTRIBUTING.md`.

De image-tag is de uitvoer van `git describe --tags`, dezelfde build die op de
pagina "Huidige versie" staat: `v0.3.1` in de run die een release uitbrengt,
`v0.3.1-4-gabc1234` voor een latere commit op `main`. Een nieuwe tag verandert
de pod-spec, en alleen dan start ZAD een nieuwe pod; met `latest` gebeurt dat
niet.

De laatste stap van de workflow vergelijkt het adres dat ZAD teruggeeft met
`site_url`. MkDocs zet dat adres in de canonical van elke pagina, dus een site
die ergens anders uitkomt hoort de workflow te laten falen.

De GitHub-environment `productie` laat alleen de branch `main` toe. De workflow is ook handmatig te starten, en vanaf een andere branch
weigert GitHub dan de uitrol-job. Die regel staat onder Settings,
Environments en niet in de workflow, omdat een branch de workflow zelf kan
aanpassen.

Dit beschermt tegen een vergissing. Wie schrijfrechten op de repository heeft,
kan in een eigen workflow nog steeds bij het secret `ZAD_API_KEY`; dat is nodig
voor de previews.

## Preview per pull request

`.github/workflows/preview.yml` zet elke pull request op een eigen
ZAD-deployment `pr-<nummer>`, met hetzelfde image, dezelfde nginx-config en
dezelfde CSP als productie. De link komt in een reactie op de PR. Het adres
heeft het ZAD-formaat `deployment-project`:

```text
pr-<nummer>-nerds-9sr.rig.prd1.gn2.quattro.rijksapps.nl
```

De workflow bouwt de site met dat adres als `site_url` en faalt als ZAD een
ander adres teruggeeft. In het image staat een `robots.txt` die zoekmachines
weert.

Een pull request uit een fork of van Dependabot krijgt geen preview: die heeft
geen toegang tot de secrets. De site wordt dan wel gebouwd en gecontroleerd, en
staat als artifact bij de run.

Bij het sluiten van de PR gaan de deployment, de reactie en de images
`pr-<nummer>-<sha>` weg.

## Het image

- `nginx.conf` serveert de site op poort 8080, met de 404-pagina uit de build
  en `/healthz` voor de health check. Bestandsnamen hebben geen hash, daarom
  staat alles op `Cache-Control: no-cache` en hervalideert de browser met de
  ETag.
- `security-headers.conf` zet HSTS, de Content-Security-Policy en de overige
  beveiligingsheaders.

De CSP bepaalt wat een pagina mag laden, en de browser handhaaft dat zonder
melding op de pagina. Twee dingen werken daardoor lokaal met `mkdocs serve` en
niet op de site:

- Een `<script>` met code erin of een `onclick` in de HTML. Zet code in een
  bestand onder `src/theme/assets/`.
- Een afbeelding, video of iframe van een ander adres. Zet het bestand in de
  repository, of voeg de herkomst toe aan de CSP in `security-headers.conf`.

`scripts/check_csp.py` leest dezelfde policy en legt de gebouwde site ernaast.
De check draait mee in `just check`, in pre-commit en in CI, en faalt op alles
wat de browser zou blokkeren.

Lokaal testen:

```sh
just image-run      # bouwt site en image, serveert op http://localhost:8081
```

Open daarbij de site in een browser met de console erbij. Een CSP-overtreding
zie je daar en niet met `curl`.

## ZAD-configuratie

- Project `nerds-9sr`, deployment `productie`, component `website` op poort
  8080 met de service `publish-on-web`.
- Health check op de component: `http`, poort 8080, liveness en readiness
  allebei op `/healthz`. Gezet met
  `zadctl service config set health-check --component website`.
- Webadres: formaat `subdomain`, subdomein `nerds`, basisdomein
  `digitaledienst.overheid.nl`. De workflow geeft die drie bij elke uitrol mee.
- Een eigen domein moet per project door het ZAD-team worden goedgekeurd. Tot
  die tijd is de deployment bereikbaar op
  `website-productie-nerds-9sr.rig.prd1.gn2.quattro.rijksapps.nl`.

Bekijken wat er draait:

```sh
zadctl project use nerds-9sr
zadctl deployment describe productie
zadctl logs productie -c website
```

`zadctl project use` schrijft de API-key naar `.env.zadctl` in de map waar je
het commando draait. Dat bestand staat in `.gitignore`.

## GitHub-instellingen voor de workflow

| Naam | Soort | Inhoud |
| --- | --- | --- |
| `ZAD_API_KEY` | secret | API-key van het ZAD-project |
| `ZAD_PROJECT_ID` | variable | `nerds-9sr` |

Het GHCR-package `nerds` is openbaar, zodat ZAD het image zonder inloggegevens
kan ophalen.
