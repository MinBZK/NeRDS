---
title: "Wanneer doe je wat?"
summary: Per fase concrete acties en hulpmiddelen voor open source werken
hide:
    - navigation
---

!!! warning "Work in progress"
    Deze pagina is nog in ontwikkeling.

# Wanneer doe je wat bij open source en transparant werken?

Open source werken vraagt om gefaseerd handelen: van het verkennen van bestaande oplossingen tot het actief onderhouden van open source gemeenschappen. Deze pagina helpt je per fase de juiste stappen te zetten.

## De vier fases

### 1. Verkenningsfase

Onderzoek of open source software past bij je project en verken beschikbare oplossingen. Test assumpties met prototypes voordat je grote commitments maakt.

<div class="direct-aan-de-slag">
    <h3>Methoden en hulpmiddelen</h3>
    <div class="action-cards" data-richtlijn="open-source" data-fase="verkenning"></div>
</div>

**Gewenste uitkomsten:**

- [ ] Je hebt onderzocht welke open source alternatieven er bestaan
- [ ] Je hebt **total cost of ownership** en **vendor lock-in risico** geëvalueerd
- [ ] Je hebt kleine **prototypes** gebouwd om technische aannames te testen

**Aanbevelingen (indien van toepassing):**

- Leg contact met open source gemeenschappen
- Onderzoek hergebruik door andere overheidsorganisaties
- Voer een security assessment uit op kandidaat-oplossingen

### 2. Ontwerpfase (Alpha)

Maak beslissingen over het gebruik en publiceren van open source. **Werk open vanaf dag 1** - begin met een publieke repository vanaf het begin van het project.

<div class="direct-aan-de-slag">
    <h3>Methoden en hulpmiddelen</h3>
    <div class="action-cards" data-richtlijn="open-source" data-fase="ontwerp"></div>
</div>

**Gewenste uitkomsten:**

- [ ] Je hebt bepaald of je project onder het [**open-tenzij beleid**](https://www.digitaleoverheid.nl/overzicht-van-alle-onderwerpen/open-source/beleid/) valt (uitgangspunt: ja, tenzij het gaat om onaangekondigde beleidsmaatregelen, beveiligingsfuncties zoals fraudepreventie, of staatsgeheimen - en je hebt dit goed gemotiveerd)
- [ ] Je hebt een **publieke repository** aangemaakt
- [ ] Je hebt een **open source licentie** gekozen (bij voorkeur EUPL-1.2)
- [ ] Je hebt een **secrets management systeem** ingericht (nooit wachtwoorden/API-keys in code)
- [ ] Je architectuur ondersteunt **open standaarden**

**Aanbevelingen (indien van toepassing):**

- Maak afspraken over opensourcewerken in het team (gebruik de Ambitieladder)
- Stel een governance-model op voor bijdragen en onderhoud
- Maak een CONTRIBUTING.md en Code of Conduct
- Identificeer uitzonderingen: code die gesloten moet blijven

### 3. Bouwfase (Beta)

Bouw de dienst in de open repository. Zorg dat code klaar is voor hergebruik door anderen.

<div class="direct-aan-de-slag">
    <h3>Methoden en hulpmiddelen</h3>
    <div class="action-cards" data-richtlijn="open-source" data-fase="bouw"></div>
</div>

**Gewenste uitkomsten:**

- [ ] Je **gebruikt een secrets management systeem** (nooit credentials in code)
- [ ] Je hebt een **README.md** met installatie-instructies
- [ ] Je hebt bestaande code gereviewd op kwetsbaarheden en hard-coded secrets

**Aanbevelingen (indien van toepassing):**

- Voeg documentatie toe over architectuur en ontwerpbeslissingen
- Richt dependency management in met automatische security updates
- Gebruik Semantic Versioning voor releases
- Zet CI/CD pipelines op voor automatisch testen
- Test dat het project installeerbaar is door externe developers

### 4. Livefase (Productie)

Onderhoud de code en gemeenschap actief. Zorg voor snelle security responses. Open source publiceren betekent een langetermijncommitment - wees transparant over beschikbare resources voor onderhoud.

<div class="direct-aan-de-slag">
    <h3>Methoden en hulpmiddelen</h3>
    <div class="action-cards" data-richtlijn="open-source" data-fase="live"></div>
</div>

**Gewenste uitkomsten:**

- [ ] Je code is gepubliceerd op een publiek platform
- [ ] Je hebt een **onderhoudsniveau gecommuniceerd**
- [ ] Je implementeert **security fixes snel**
- [ ] Je monitort security advisories voor je dependencies

**Aanbevelingen (indien van toepassing):**

- Registreer je project op Code.gov.nl (zodra beschikbaar)
- Reageer tijdig op issues en pull requests
- Onderhoud een publieke issue list voor transparantie
- Deel learnings met de opensourcewerken community
- Draag bij aan upstream projecten

## Terugkerende activiteiten

Ongeacht de fase waarin je project zich bevindt:

- **Monitor security**: Volg security advisories voor gebruikte componenten en reageer snel
- **Evalueer flexibiliteit**: Vermijd beslissingen die toekomstige opties beperken
- **Documenteer beslissingen**: Leg technologiekeuzes vast met motivatie
- **Maak herbruikbaar**: Denk na hoe jouw werk hergebruikt kan worden door andere overheidsorganisaties
