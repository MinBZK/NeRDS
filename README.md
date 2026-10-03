# Nederlandse Richtlijn Digitale Systemen

Het [Ministerie van Binnenlandse Zaken en Koninkrijksrelaties](https://github.com/MinBZK) ontwikkelt de Nederlandse
Richtlijn Digitale Systemen (NeRDS) op een open manier via Github.
De Nederlandse Richtlijn Digitale Systemen is een set standaarden, richtlijnen en praktische hulpmiddelen (tools) voor het
verantwoord ontwerpen, ontwikkelen en inkopen van digitale systemen binnen de Nederlandse overheid.

In deze repository ontwikkelen wij de Nederlandse Richtlijn Digitale Systemen. De informatie van de Nederlandse
Richtlijn Digitale Systemen wordt uitgewerkt in verschillende Markdown bestanden (een bestandsformaat voor platte
tekstbestanden), welke je terug kan vinden in de map
[docs](docs).
Deze bestanden worden inzichtelijk gemaakt met behulp van [MkDocs](https://www.mkdocs.org/)
en vormgegeven met het [NLDD Designsysteem](https://github.com/NederlandseDigitaleDienst/design-system) in de Rijkshuisstijl.

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

Vervolgens kun je een preview van de Nederlandse Richtlijn Digitale Systemen bekijken:

```bash
uv run mkdocs serve
```

De website gebruikt de web components van het NLDD Designsysteem. De versie staat vast in
`nldd-design-system.json`. Bij de eerste build wordt dat pakket eenmalig gedownload naar `.cache/nldd/`.

Controleer een wijziging aan het thema of aan de inhoud met:

```bash
uv run python scripts/check_site.py
```

Dit bouwt de website en controleert of elk component, attribuut, icoon en elke CSS-variabele bestaat in het
designsysteem, en of er niets is verdwenen uit wat een pagina kan (links, formuliervelden, knoppen).
Heb je bewust iets weggehaald of toegevoegd, leg dat dan vast met `uv run python scripts/check_site.py --update`.

## Vragen?

Maak een [Issue](https://github.com/MinBZK/NeRDS/issues) aan op GitHub. Of stuur een e-mail naar
[bureau.architectuur@minbzk.nl](mailto:bureau.architectuur@minbzk.nl).
