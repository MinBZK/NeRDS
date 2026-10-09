# Uitrollen naar ZAD

De website draait op ZAD (Zelfservice Applicatie Deployment) op
`nerds.digitaledienst.overheid.nl`, als rootless nginx-container met de
gebouwde site erin.

## Hoe het werkt

`.github/workflows/main.yml` draait bij elke push naar `main` en bij elke tag.
De workflow bouwt de site met `mkdocs build`, bouwt daar met
`deploy/Dockerfile` een image omheen en pusht dat naar
`ghcr.io/nederlandsedigitaledienst/nerds:<versie>`. Daarna rolt de
action `RijksICTGilde/zad-actions/deploy` dat image uit op de deployment
`productie`.

De image-tag is de uitvoer van `git describe --tags`, dezelfde versie die op de
pagina "Huidige versie" staat: `v0.2.0-7-g6767e213` voor een commit op `main`,
`v0.3.0` voor een release. Een nieuwe tag verandert de pod-spec, en alleen dan
start ZAD een nieuwe pod; met `latest` gebeurt dat niet. Een commit-hash als
tag zou bij een release niets uitrollen, omdat de release-tag op een commit
staat die al draait.

De laatste stap van de workflow vergelijkt het adres dat ZAD teruggeeft met
`site_url`. MkDocs zet dat adres in de canonical van elke pagina, dus een site
die ergens anders uitkomt hoort de workflow te laten falen.

## Het image

- `nginx.conf` serveert de site op poort 8080, met de 404-pagina uit de build
  en `/healthz` voor de health check. Bestandsnamen hebben geen hash, daarom
  staat alles op `Cache-Control: no-cache` en hervalideert de browser met de
  ETag.
- `security-headers.conf` zet HSTS, de Content-Security-Policy en de overige
  beveiligingsheaders.

De CSP staat geen inline scripts toe. Een `<script>` met code erin, of een
`onclick` in de HTML, werkt lokaal met `mkdocs serve` en doet op de site niets.
Zet code in een bestand onder `src/theme/assets/`.

Lokaal testen:

```sh
just image-run      # bouwt site en image, serveert op http://localhost:8081
```

Open daarbij de site in een browser met de console erbij. Een CSP-overtreding
zie je daar en niet met `curl`.

## ZAD-configuratie

- Project `nerds-9sr`, deployment `productie`, component `website` op poort
  8080 met de service `publish-on-web`.
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
