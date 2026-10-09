<!-- Gegenereerd uit docs/richtlijnen/open-source/fases.md. Wijzig dat bestand en draai: just plugin -->

## Wanneer doe je wat?

Open source werken vraagt om gefaseerd handelen: van het verkennen van bestaande oplossingen tot het actief onderhouden van open source gemeenschappen. Deze pagina beschrijft per fase van ontwerpen, ontwikkelen en inkopen welke stappen je zet en welke uitkomsten je mag verwachten.

### 1. Verkenningsfase

**Doel**

Onderzoek of open source past bij je project en verken beschikbare oplossingen.

**Direct aan de slag**

- [Ambitieladder opensourcewerken](https://minvws.opensourcewerken.nl/open-source-ambitieladder-voor-opensourcewerken-in-projecten/): Helpt projectteams concrete afspraken te maken over opensourcewerken
- [Open Stad](https://openstad.org/): Open source platform voor participatie en samenwerking
- [Opensourcewerken](https://opensourcewerken.nl): Kennis en community voor open source werken bij de overheid
- [Opensourcewerken](https://developer.overheid.nl/communities/open-source-werken): Community of practice omtrent open source werken (status: ontwikkeling)

**Gewenste uitkomsten:**

- [ ] Je hebt onderzocht welke open source alternatieven er bestaan
- [ ] Je hebt total cost of ownership en vendor lock-in risico geëvalueerd
- [ ] Je begrijpt het open-tenzij beleid en hoe dit op jouw project van toepassing is
- [ ] Je hebt contact gelegd met relevante open source gemeenschappen

**Aanvullend (indien passend):**

- Onderzoek hergebruik door andere overheidsorganisaties
- Voer een security assessment uit op kandidaat-oplossingen
- Bouw kleine prototypes om technische aannames te testen

---

### 2. Ontwerpfase (Alpha)

**Doel**

Maak beslissingen over het gebruiken en publiceren van open-source code

**Direct aan de slag**

- [Ambitieladder opensourcewerken](https://minvws.opensourcewerken.nl/open-source-ambitieladder-voor-opensourcewerken-in-projecten/): Helpt projectteams concrete afspraken te maken over opensourcewerken
- [Opensourcewerken](https://opensourcewerken.nl): Kennis en community voor open source werken bij de overheid
- [Standaard voor publieke code](https://www.standaardvoorpubliekecode.nl/): Richtlijnen voor het ontwikkelen en beheren van software en beleid
- [Handreiking publieke waarde bij ICT-aanbesteding](https://www.pianoo.nl/nl/handreiking-publieke-waarden-en-rechten-bij-aanbesteden-van-ict): Stappenplan voor het maken van bewuste keuzes rondom publieke waarde en rechten
- [Licentieadvies](https://opensourcewerken.nl/page/view/677bb847-79b5-42b2-8a63-e7bb2e074530/softwarelicenties): Copyleft: CC BY-SA, GPLv3, AGPLv3 of EUPL-1.2. Permissive: Apache 2.0, MIT, BSD-0-clause

**Gewenste uitkomsten:**

- [ ] Je hebt bepaald of je project onder het [open-tenzij beleid](https://www.digitaleoverheid.nl/overzicht-van-alle-onderwerpen/open-source/beleid/) valt (uitgangspunt: ja, tenzij het gaat om onaangekondigde beleidsmaatregelen, beveiligingsfuncties zoals fraudepreventie, of staatsgeheimen, en je hebt dit goed gemotiveerd)
- [ ] Je hebt een publieke repository aangemaakt
- [ ] Je hebt een open source licentie gekozen (bij voorkeur EUPL-1.2)
- [ ] Je hebt een secrets management systeem ingericht (nooit wachtwoorden/API-keys in code)
- [ ] Je hebt een keuze gemaakt hoe te documenteren en dit gekoppeld aan je publieke repository
- [ ] Afspraken over opensourcewerken zijn gemaakt binnen het team (gebruik de Ambitieladder)

**Aanvullend (indien passend):**

- Stel een governance-model op voor bijdragen en onderhoud
- Maak een CONTRIBUTING.md en Code of Conduct
- Identificeer uitzonderingen: code die gesloten moet blijven
- Stel vast hoe beslissingen worden gemaakt en vastgelegd (bijvoorbeeld [Architectural Decision Records (ADR)](https://github.com/adr/madr/blob/develop/template/adr-template-minimal.md))

---

### 3. Bouwfase (Beta)

**Doel**

Bouw de dienst in de open repository en zorg dat code klaar is voor hergebruik door anderen.

**Direct aan de slag**

- [Standaard voor publieke code](https://www.standaardvoorpubliekecode.nl/): Richtlijnen voor het ontwikkelen en beheren van software en beleid

**Gewenste uitkomsten:**

- [ ] Je hebt een README.md met installatie-instructies
- [ ] Je hebt bestaande code gereviewd op kwetsbaarheden en hard-coded secrets
- [ ] De code is getest op installeerbaarheid door externe developers
- [ ] CI/CD pipelines zijn ingericht voor automatisch testen

**Aanvullend (indien passend):**

- Voeg documentatie toe over architectuur en ontwerpbeslissingen
- Richt dependency management in met automatische security updates
- Gebruik [Semantic Versioning](https://semver.org/) voor releases

---

### 4. Productie

**Doel**

Onderhoud de code en gemeenschap actief en zorg voor snelle security responses.

**Direct aan de slag**

- [Opensourcewerken](https://developer.overheid.nl/communities/open-source-werken): Community of practice omtrent open source werken (status: ontwikkeling)

**Gewenste uitkomsten:**

- [ ] Je code is gepubliceerd op een publiek platform (code.overheid.nl zodra beschikbaar)
- [ ] Je hebt een onderhoudsniveau gecommuniceerd
- [ ] Je implementeert security fixes snel (doelstelling: binnen 24-48 uur voor kritieke kwetsbaarheden)
- [ ] Je monitort security advisories voor je dependencies
- [ ] Je reageert tijdig op issues en pull requests
- [ ] Inzichten en learnings worden gedeeld met de opensourcewerken community

**Aanvullend (indien passend):**

- Onderhoud een publieke issue list voor transparantie
- Draag bij aan upstream projecten
- Organiseer of participeer in community meetings
