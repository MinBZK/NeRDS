---
title: "2. Zorg voor toegankelijkheid en inclusie"
summary: Zorg ervoor dat je technologie, infrastructuur en systemen toegankelijk en inclusief zijn voor alle gebruikers.
relations:
  - gebruikersbehoeften
  - open-standaarden
---

# 2. Zorg voor toegankelijkheid en inclusie

Toegankelijkheid gaat over het maken van digitale systemen die door iedereen kunnen worden gebruikt, inclusief mensen met handicaps of specifieke behoeften. Deze richtlijn zorgt ervoor dat alle burgers gelijke toegang hebben tot overheidsdiensten.

## Waarom is het belangrijk?

- **Gelijkheid en inclusie**: Iedereen heeft recht op gelijke toegang tot overheidsdiensten.
- **Maatschappelijke verantwoordelijkheid**: Als overheid heb je de plicht om niemand uit te sluiten en om digitale systemen te leveren die voor iedereen bruikbaar zijn. Toegankelijkheid gaat verder dan alleen mensen met een beperking, het helpt ook ouderen, mensen met tijdelijke beperkingen, en mensen in verschillende contexten.
- **Wettelijke verplichting**: Overheidsorganisaties zijn wettelijk verplicht om hun digitale systemen toegankelijk te maken. Voorkom potentiële juridische problemen door niet-toegankelijke technologie.
- **Kosteneffectiviteit**: Toegankelijkheid vanaf het begin inbouwen is goedkoper dan achteraf aanpassen. 

Door toegankelijkheid vanaf het begin in te bouwen in je digitale systemen, zorg je ervoor dat je digitale systemen voor iedereen bruikbaar zijn, ongeacht hun capaciteiten of beperkingen.

## Hoe pas je het toe?

<div class="direct-aan-de-slag">
    <h3>Direct aan de slag</h3>

    <div class="warning-banner" style="background-color: #fff3e0; padding: 0.5rem; border-left: 3px solid #ff9800; margin-bottom: 0.8rem;">
        <strong>Work in Progress:</strong> De onderstaande functionaliteit is nog in ontwikkeling.
    </div>

    <div class="action-cards" data-richtlijn="toegankelijkheid"></div>
</div>

## Beste praktijken

### 1. Begrijpen

Maak toegankelijkheid een fundamenteel onderdeel van goed ontwerp. Denk vanaf het eerste schetsje aan mensen met verschillende capaciteiten (visuele, auditieve, motorische en cognitieve beperkingen) en werk samen met diverse gebruikersgroepen om hun perspectief mee te nemen in elk ontwerpbesluit.

??? expander "Praktische tips"
    - **Begin in de verkenningsfase** – Neem inclusie en toegankelijkheid mee vanaf het begin van de ontwikkeling van het digitale systeem.
    - **Start met onderzoek** – Betrek gebruikers met verschillende beperkingen vanaf het begin bij je gebruikersonderzoek.
    - **Denk breed** – Toegankelijkheid gaat verder dan screenreaders: denk aan kleurcontrast, eenvoudige taal, toetsenbordnavigatie en verschillende invoermethoden.
    - **Maak het concreet** – Gebruik inclusieve persona’s om ontwerpkeuzes te toetsen.
    - **Werk samen** – Betrek toegankelijkheidsexperts vroeg in het ontwerpproces.
    - **Toon gebruikerservaringen** – Deel video’s, interviews en presentaties met mensen met beperkingen om bewustzijn te creëren binnen teams.

### 2. Ontwikkelen, ontwerpen en inkopen

Implementeer toegankelijkheid volgens erkende standaarden en richtlijnen. De WCAG 2.2 (minimaal niveau AA) en EN 301 549 bieden concrete criteria voor toegankelijke digitale systemen. Dit is niet alleen een wettelijke verplichting, maar maakt digitale systemen ook robuust en toekomstbestendig.

Ontwikkelen & ontwerpen
??? expander "Praktische tips"
    - **Volg WCAG 2.2 AA** – Gebruik dit als minimumstandaard voor alle digitale systemen
    - **Gebruik semantische HTML** – Een correcte structuur verbetert toegankelijkheid voor hulptechnologieën
    - **Zorg voor toetsenbordtoegankelijkheid** – Alle functionaliteit moet zonder muis bruikbaar zijn
    - **Ondersteun meerdere invoermethoden** – Denk aan toetsenbord, muis, touch en spraak
    - **Let op kleurcontrast** – Minimaal 4,5:1 voor normale tekst; test met [contrasttools](https://webaim.org/resources/contrastchecker/)
    - **Schrijf alternatieve teksten** – Beschrijf afbeeldingen en iconen voor screenreaders
    - **Zorg voor ondertiteling en transcripties** – Voor alle audio- en video-inhoud
    - **Bouw compatibel met hulpapparatuur** – Test met screenreaders zoals [NVDA](https://webaim.org/resources/shortcuts/nvda), [JAWS](https://webaim.org/resources/shortcuts/jaws) en [VoiceOver (Mac)](https://webaim.org/articles/voiceover/)
    - **Gebruik het [NL Design System](https://nldesignsystem.nl/)** – Componenten zijn al getest op toegankelijkheid
    - **Vermijd PDF’s** – Gebruik bij voorkeur HTML; zijn PDF’s onvermijdelijk, gebruik dan toegankelijke standaarden (bijv. [NLDoc](https://nldoc.nl))

Inkopen van toegankelijke technologie
??? expander "Praktische tips"
    - **Gebruik EN 301 549 in aanbestedingen** – Neem toegankelijkheid expliciet op als eis
    - **Kies leveranciers met ervaring** – Vraag naar eerdere toegankelijke projecten
    - **Vraag om bewijs van testen** – Bijvoorbeeld auditrapporten of gebruikers­testen
    - **Borg toegankelijkheid bij updates** – Zorg dat toekomstige releases toegankelijk blijven

### 3. Testen, meten en verbeteren

Test systemen met echte gebruikers, inclusief mensen met verschillende beperkingen. Geautomatiseerde tools vinden slechts een deel van de problemen: menselijke evaluatie blijft essentieel. Toegankelijkheid is een continu proces van leren en verbeteren.

??? expander "Praktische tips"
    - **Test met echte gebruikers** – Betrek mensen die hulptechnologie gebruiken
    - **Combineer testmethoden** – Gebruik geautomatiseerde tools (Axe, WAVE) én handmatige tests
    - **Test zelf bewust** – Gebruik je systeem zonder muis, met screenreader of met verlaagd contrast
    - **Test op verschillende apparaten** – Denk aan mobiel, tablet, desktop en verschillende schermformaten
    - **Maak het structureel** – Integreer toegankelijkheidstests in je ontwikkelproces en CI/CD-pipeline
    - **Bied feedbackkanalen** – Maak het eenvoudig om toegankelijkheidsproblemen te melden
    - **Investeer in kennis** – Bied training aan voor ontwerpers, ontwikkelaars, testers en contentmakers
    - **Blijf leren en delen** – Documenteer inzichten en deel ze binnen en buiten je organisatie

## Gerelateerde hulpmiddelen

#### Methodes

- [Overlay factsheet](https://overlayfactsheet.com/nl/) - Een factsheet van technologieën die bedoeld zijn om de toegankelijkheid van een website te verbeteren. Ze passen externe broncode toe (meestal JavaScript) om verbeteringen aan te brengen in de front-endcode van de website.
- [Inclusive Components](https://inclusive-components.design/#components) - Een patronen bibliotheek met een focus op inclusief design. In aanvulling op [NLDS Componenten](https://nldesignsystem.nl/componenten/).
- [Basistoegankelijk](https://basistoegankelijk.nl) - Basistoegankelijk meet, beoordeelt en publiceert de digitale toegankelijkheid op basis van WCAG metingen van alle sites van de overheid, zorg, onderwijs en vitaal. In aanvulling op [Dashboard DigiToegankelijk](https://dashboard.digitoegankelijk.nl/) waar overheden zelf hun toegankelijkheidsverklaring aanleveren.
- [Handreiking Mobiele app Ontwikkeling en Beheer versie 4.0](https://www.noraonline.nl/images/noraonline/2/26/Handreiking_Mobiele_App_4.0.pdf) - Hoofdstuk 8.3 geeft concrete best practices voor verschillende beperkingen voor de ontwikkeling van Mobiele Apps
- [Kennisbank Digitoegankelijk](https://kennisbank.digitoegankelijk.nl) - Praktische tips over digitale toegankelijkheid

#### Beleid, wetten en standaarden

- [Web Content Accessibility Guidelines (WCAG 2.2)](https://www.w3.org/TR/WCAG22/) - Wereldwijde technische standaard voor digitale toegankelijkheid
- [EN 301 549](https://www.etsi.org/deliver/etsi_en/301500_301599/301549/03.02.01_60/en_301549v030201p.pdf) - Europese norm voor hardware/niet-web software
- [Tijdelijk besluit digitale toegankelijkheid overheid](https://wetten.overheid.nl/BWBR0040936/2018-07-01) - Overheidssites moeten voldoen aan toegankelijkheidseisen zoals vastgelegd in EN 301 549/WCAG 2.1 en daarover verantwoordelijkheid moeten afleggen in een gepubliceerde toegankelijkheidsverklaring.

#### Communities

- [Gebruiker Centraal](https://www.gebruikercentraal.nl)
- [DigiToegankelijk](https://www.digitoegankelijk.nl/aan-de-slag/digitoegankelijk-community)
- [a11y project](https://www.a11yproject.com) - Het A11Y-project is een door de gemeenschap gedreven initiatief om digitale toegankelijkheid te vergemakkelijken.

#### Trainingen

#### Boeken

### Gerelateerde richtlijnen

- [1. Stel gebruikersbehoeften vast](../gebruikersbehoeften/index.md)
- [4. Gebruik open standaarden](../open-standaarden/index.md)