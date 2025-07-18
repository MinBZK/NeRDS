[![Built with Material for MkDocs](https://img.shields.io/badge/Material_for_MkDocs-brightgreen?logo=MaterialForMkDocs&logoColor=white)](https://squidfunk.github.io/mkdocs-material/)

# Nederlandse Richtlijn Digitale Systemen

Het [Ministerie van Binnenlandse Zaken en Koninkrijksrelaties](https://github.com/MinBZK) ontwikkelt de Nederlandse
Richtlijn Digitale Systemen (NeRDS) op een open manier via Github.
De Nederlandse Richtlijn Digitale Systemen is een set standaarden, richtlijnen en praktische hulpmiddelen (tools) voor het
verantwoord ontwikkelen, inkopen en gebruiken van digitale systemen binnen de Nederlandse overheid.

In deze repository ontwikkelen wij de Nederlandse Richtlijn Digitale Systemen. De informatie van de Nederlandse
Richtlijn Digitale Systemen wordt uitgewerkt in verschillende Markdown bestanden (een bestandsformaat voor platte
tekstbestanden), welke je terug kan vinden in de map
[docs](docs).
Deze bestanden worden inzichtelijk gemaakt met behulp van [MkDocs](https://www.mkdocs.org/)
en [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/).

De Nederlandse Richtlijn Digitale Systemen kun je bekijken op
[https://minbzk.github.io/NeRDS](https://minbzk.github.io/NeRDS/).

## Hoe kun je bijdragen?

Dat kan op verschillende manieren. Zie onze
[Contributing Guidelines](CONTRIBUTING.md) voor meer uitleg over hoe je kan bijdragen aan de Nederlandse Richtlijn
Digitale Systemen.

### Lokaal ontwikkelen

Het Nederlandse Richtlijn Digitale Systemen project kan lokaal met behulp van [Python](https://www.python.org/) worden
gedraaid. Installeer hiervoor de benodigde packages met [uv](https://github.com/astral-sh/uv):

```bash
uv pip install -r requirements.txt
```

Als je onderdeel bent van de [MinBZK organisatie](https://github.com/orgs/MinBZK/people) op GitHub, dan kun je ook de
productie versie installeren:

```bash
uv pip install -r requirements-prod.txt
```

Vervolgens kun je een preview van de Nederlandse Richtlijn Digitale Systemen bekijken:

```bash
uv run mkdocs serve
```

Het verschil tussen de twee versies is dat de Nederlandse Richtlijn Digitale Systemen gebruik maakt van de
[insiders versie](https://squidfunk.github.io/mkdocs-material/insiders/) van
[Material for MkDocs](https://squidfunk.github.io/mkdocs-material/). De insiders versie is een gesponsorde versie en
bevat een aantal extra functionaliteiten. Hoewel deze versie onder een open source licentie beschikbaar is, vragen de
ontwikkelaars van Material for MkDocs in de aanvullende
[fair use policy](https://squidfunk.github.io/mkdocs-material/insiders/license/#fair-use-policy) om het niet publiek
te delen. Wij realiseren ons dat hierdoor niet iedereen de versie van de Nederlandse Richtlijn Digitale Systemen,
inclusief alle functionaliteiten, op een eigen omgeving kan draaien. Om lokaal testen van mensen die geen toegang hebben
tot de betaalde versie mogelijk te maken, zit in `requirements.txt` de publiek
toegangelijke [mkdocs-material](https://pypi.org/project/mkdocs-material/) Python package met beperkte functionaliteit.
In deze versie werken de navigatie broodkruimels niet.

## Vragen?

Maak een [Issue](https://github.com/MinBZK/NeRDS/issues) aan op GitHub. Of stuur een e-mail naar
[bureau.architectuur@minbzk.nl](mailto:bureau.architectuur@minbzk.nl).
