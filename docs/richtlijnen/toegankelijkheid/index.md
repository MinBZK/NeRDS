---
title: "2. Zorg voor toegankelijkheid en inclusie"
summary: Zorg ervoor dat je technologie, infrastructuur en systemen toegankelijk en inclusief zijn voor alle gebruikers.
relations:
  - gebruikersbehoeften
  - open-standaarden
---

# 2. Zorg voor toegankelijkheid en inclusie

Toegankelijkheid gaat over het maken van diensten en systemen die door iedereen kunnen worden gebruikt, inclusief mensen met handicaps of specifieke behoeften. Dit richtlijn zorgt ervoor dat alle burgers gelijke toegang hebben tot overheidsdiensten.

## Waarom is het belangrijk?

- **Gelijkheid en inclusie**: Iedereen heeft recht op gelijke toegang tot overheidsdiensten. Toegankelijkheid zorgt ervoor dat mensen met een beperking dezelfde kansen hebben als iedereen.
- **Maatschappelijke verantwoordelijkheid**: Als overheid heb je de plicht om niemand uit te sluiten en om diensten te leveren die voor iedereen bruikbaar zijn. Toegankelijkheid gaat verder dan alleen mensen met een beperking - het helpt ook ouderen, mensen met tijdelijke beperkingen, en mensen in verschillende contexten. Zo bereik je een breder publiek en zorg je dat niemand wordt uitgesloten.
- **Wettelijke verplichting**: Overheidsorganisaties zijn wettelijk verplicht om hun digitale diensten toegankelijk te maken. Voorkom potentiële juridische problemen door niet-toegankelijke technologie.

Door toegankelijkheid vanaf het begin in te bouwen in je digitale systemen, zorg je ervoor dat je diensten voor iedereen bruikbaar zijn, ongeacht hun capaciteiten of beperkingen.

## Hoe pas je het toe?

<div class="direct-aan-de-slag">
    <h3>Direct aan de slag</h3>

    <div class="warning-banner" style="background-color: #fff3e0; padding: 0.5rem; border-left: 3px solid #ff9800; margin-bottom: 0.8rem;">
        <strong>Work in Progress:</strong> De onderstaande functionaliteit is nog in ontwikkeling.
    </div>

    <div class="action-cards"></div>
</div>

## Drie kernpijlers voor toegankelijkheid

### 1. Inclusief ontwerpen

Toegankelijkheid is geen extra feature die je achteraf toevoegt, maar een fundamenteel onderdeel van goed ontwerp. Denk vanaf het eerste schetsje aan mensen met verschillende capaciteiten (visuele, auditieve, motorische en cognitieve beperkingen) en werk samen met diverse gebruikersgroepen om hun perspectief mee te nemen in elk ontwerpbesluit.

??? expander "Praktische tips"
    - **Start met onderzoek** - Betrek gebruikers met verschillende beperkingen bij je gebruikersonderzoek vanaf het begin
    - **Denk breed** - Toegankelijkheid gaat verder dan screenreaders: denk aan kleurcontrast, toetsenbordnavigatie, eenvoudige taal en verschillende invoermethoden
    - **Maak het concreet** - Gebruik personas die verschillende beperkingen vertegenwoordigen om ontwerpkeuzes te toetsen
    - **Werk samen** - Betrek toegankelijkheidsexperts vroeg in het ontwerpproces, niet pas bij het testen
    - **Toon gebruikerservaringen** - Maak de pijnpunten van gebruikers zichtbaar door video's, interviews en presentaties met mensen met beperkingen te delen binnen je team
    - **Begin in de conceptfase** - Neem inclusie en toegankelijkheid mee vanaf het begin van het product- of dienstontwikkelingsproces, niet achteraf

### 2. Kopen, ontwerpen en ontwikkelen  volgens standaarden

Implementeer toegankelijkheid volgens erkende standaarden en richtlijnen. De WCAG 2.2 (minimaal niveau AA) en EN 301 549 geven concrete criteria waar je digitale diensten aan moeten voldoen. Gebruik semantische HTML, zorg voor goede focus-indicatoren, maak interactieve elementen toetsenbordtoegankelijk, en test met hulptechnologieën zoals screenreaders. Dit is niet alleen een wettelijke verplichting, maar zorgt er ook voor dat je systemen robuust en toekomstbestendig zijn.

??? expander "Praktische tips"
    - **Volg WCAG 2.2 AA** - Gebruik deze standaard als minimum voor alle digitale diensten
    - **Gebruik semantische HTML** - Correcte HTML-structuur maakt content automatisch toegankelijker voor hulptechnologieën
    - **Vermijd PDF's** - PDF's vormen een groot obstakel voor toegankelijkheid. Gebruik waar mogelijk HTML. Als PDF's onvermijdelijk zijn, converteer dan met tools zoals NLDoc
    - **Zorg voor toetsenbordnavigatie** - Alle functionaliteit moet bruikbaar zijn zonder muis
    - **Let op kleurcontrast** - Gebruik tools om te controleren of tekst voldoende contrast heeft met de achtergrond (minimaal 4.5:1 voor normale tekst)
    - **Schrijf alternatieve teksten** - Beschrijf afbeeldingen en iconen zodat screenreaders ze kunnen voorlezen
    - **Test met echte hulpmiddelen** - Gebruik screenreaders (zoals NVDA, JAWS, VoiceOver) en toetsenbord om je eigen dienst te testen
    - **Gebruik het NL Design System** - Neem deel aan en gebruik componenten van het NL Design System, dat toegankelijkheid ingebouwd heeft

### 3. Testen en verbeteren

Test je diensten met echte gebruikers, inclusief mensen met verschillende beperkingen. Geautomatiseerde tools vinden vaak maar 30-40% van toegankelijkheidsproblemen - menselijke evaluatie is essentieel. Organiseer usability tests met gebruikers die hulptechnologieën gebruiken, vraag om feedback, en blijf itereren. Toegankelijkheid is geen eenmalige klus maar een continu proces van leren en verbeteren.

??? expander "Praktische tips"
    - **Test met echte gebruikers** - Betrek mensen met verschillende beperkingen bij je usability tests
    - **Test je eigen oplossing** - Probeer je dienst zelf te gebruiken met een blinddoek om, of met uitgeschakelde muis/trackpad, om toegankelijkheidsproblemen te ervaren
    - **Creëer bewustzijn** - Overweeg om periodiek te experimenteren met toegankelijkheidsbarrières zoals werken zonder muis, met grijstinten beeldscherm, of met verminderd contrast
    - **Combineer methoden** - Gebruik zowel geautomatiseerde tools (zoals Axe, WAVE) als handmatige evaluatie
    - **Maak het structureel** - Bouw toegankelijkheidstests in je ontwikkelproces en CI/CD pipeline
    - **Bied feedbackkanalen** - Maak het makkelijk voor gebruikers om toegankelijkheidsproblemen te melden
    - **Zorg ervoor dat mensen toegankelijkheid begrijpen** - Bied training en kennisdeling aan voor verschillende rollen: ontwikkelaars, testers, ontwerpers, beheerders en communicatie
    - **Blijf leren** - Toegankelijkheidseisen en best practices ontwikkelen zich continu, blijf jezelf bijscholen
    - **Deel kennis** - Documenteer wat je leert en deel dit met andere teams en organisaties

### Praktische voordelen

- **Beter voor iedereen**: Toegankelijke diensten zijn meestal eenvoudiger en gebruiksvriendelijker voor alle gebruikers, niet alleen voor mensen met een beperking
- **Kosteneffectiviteit**: Toegankelijkheid vanaf het begin inbouwen is goedkoper dan achteraf aanpassen
- **Ondersteuning van personeel**: Stelt alle medewerkers in staat om de benodigde infrastructuur te gebruiken, wat bijdraagt aan een inclusieve werkomgeving

### Inkopen van toegankelijke technologie

- Gebruik de EN 301 549 toegankelijkheidsstandaard in aanbestedingen
- Zoek naar leveranciers met bewezen toegankelijkheidservaring
- Vraag om bewijs van toegankelijkheidstesten
- Zorg dat toekomstige updates toegankelijkheid behouden

### Belangrijke overwegingen

- Zorg dat systemen werken met verschillende invoermethoden (toetsenbord, muis, aanraakscherm, spraak)
- Let op kleurcontrast voor mensen met visuele beperkingen
- Zorg voor ondertiteling en transcripties bij audio- en video-inhoud
- Bouw formulieren die gemakkelijk te gebruiken zijn met hulpapparatuur
- Test je systemen op verschillende apparaten en schermformaten

## Gerelateerde standaarden

- [Web Content Accessibility Guidelines (WCAG 2.2)](https://www.w3.org/TR/WCAG22/)
- [EN 301 549](https://www.etsi.org/deliver/etsi_en/301500_301599/301549/03.02.01_60/en_301549v030201p.pdf) (Europese norm voor hardware/niet-web software)
- [Digitoegankelijkheid](https://www.digitoegankelijk.nl/toegankelijkheid/en-301-549-en-wcag) (voorheen 'Webrichtlijnen')

## Gerelateerde hulpmiddelen

- [Handreiking Mobiele app Ontwikkeling en Beheer versie 4.0](https://www.noraonline.nl/images/noraonline/2/26/Handreiking_Mobiele_App_4.0.pdf) - Hoofdstuk 8.3 geeft concrete best practices voor verschillende beperkingen voor de ontwikkeling van Mobiele Apps
- [Kennisbank Digitoegankelijk](https://kennisbank.digitoegankelijk.nl) - Praktische tips over digitale toegankelijkheid

## Gerelateerde richtlijnen

- [1. Stel gebruikersbehoeften vast](../gebruikersbehoeften/index.md)
- [4. Gebruik open standaarden](../open-standaarden/index.md)
