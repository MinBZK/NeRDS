---
title: "Fases en gewenste uitkomsten 3. Werk transparant en gebruik open source"
summary: Open source werken is een doorlopend proces. Hieronder staat per fase wat je doet.
relations:
  - open-source
---

!!! warning "Work in progress"
    Deze pagina is nog in ontwikkeling.

## Wanneer doe je wat?

Open source werken vraagt om gefaseerd handelen: van het verkennen van bestaande oplossingen tot het actief onderhouden van open source gemeenschappen. Deze pagina beschrijft per fase van ontwerpen, ontwikkelen en inkopen welke stappen je zet en welke uitkomsten je mag verwachten.

### 1. Verkenningsfase

!!! info "Doel"
    Onderzoek of open source past bij je project en verken beschikbare oplossingen.

<div class="direct-aan-de-slag">
    <h3>Direct aan de slag</h3>
    <div class="action-cards" data-richtlijn="open-source" data-fase="verkenning"></div>
</div>

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

!!! info "Doel"
    Maak beslissingen over het gebruiken en publiceren van open-source code

<div class="direct-aan-de-slag">
    <h3>Direct aan de slag</h3>
    <div class="action-cards" data-richtlijn="open-source" data-fase="ontwerp"></div>
</div>

**Gewenste uitkomsten:**

- [ ] Je hebt bepaald of je project onder het [open-tenzij beleid](https://www.digitaleoverheid.nl/overzicht-van-alle-onderwerpen/open-source/beleid/) valt (uitgangspunt: ja, tenzij het gaat om onaangekondigde beleidsmaatregelen, beveiligingsfuncties zoals fraudepreventie, of staatsgeheimen - en je hebt dit goed gemotiveerd)
- [ ] Je hebt een publieke repository aangemaakt
- [ ] Je hebt een open source licentie gekozen (bij voorkeur EUPL-1.2)
- [ ] Je hebt een secrets management systeem ingericht (nooit wachtwoorden/API-keys in code)
- [ ] Je architectuur ondersteunt open standaarden
- [ ] Afspraken over opensourcewerken zijn gemaakt binnen het team (gebruik de Ambitieladder)

**Aanvullend (indien passend):**

- Stel een governance-model op voor bijdragen en onderhoud
- Maak een CONTRIBUTING.md en Code of Conduct
- Identificeer uitzonderingen: code die gesloten moet blijven

---

### 3. Bouwfase (Beta)

!!! info "Doel"
    Bouw de dienst in de open repository en zorg dat code klaar is voor hergebruik door anderen.

<div class="direct-aan-de-slag">
    <h3>Direct aan de slag</h3>
    <div class="action-cards" data-richtlijn="open-source" data-fase="bouw"></div>
</div>

**Gewenste uitkomsten:**

- [ ] Je hebt een README.md met installatie-instructies
- [ ] Je hebt bestaande code gereviewd op kwetsbaarheden en hard-coded secrets
- [ ] De code is getest op installeerbaarheid door externe developers
- [ ] CI/CD pipelines zijn ingericht voor automatisch testen

**Aanvullend (indien passend):**

- Voeg documentatie toe over architectuur en ontwerpbeslissingen
- Richt dependency management in met automatische security updates
- Gebruik Semantic Versioning voor releases

---

### 4. Productie

!!! info "Doel"
    Onderhoud de code en gemeenschap actief en zorg voor snelle security responses.

<div class="direct-aan-de-slag">
    <h3>Direct aan de slag</h3>
    <div class="action-cards" data-richtlijn="open-source" data-fase="productie"></div>
</div>

**Gewenste uitkomsten:**

- [ ] Je code is gepubliceerd op een publiek platform
- [ ] Je hebt een onderhoudsniveau gecommuniceerd
- [ ] Je implementeert security fixes snel (doelstelling: binnen 24-48 uur voor kritieke kwetsbaarheden)
- [ ] Je monitort security advisories voor je dependencies
- [ ] Je reageert tijdig op issues en pull requests
- [ ] Inzichten en learnings worden gedeeld met de opensourcewerken community

**Aanvullend (indien passend):**

- Registreer je project op code.overheid.nl (zodra beschikbaar)
- Onderhoud een publieke issue list voor transparantie
- Draag bij aan upstream projecten
- Organiseer of participeer in community meetings
