---
title: "3. Werk transparant en gebruik open source"
summary: Publiceer je code en gebruik open source software om transparantie, flexibiliteit en verantwoording te verbeteren.
relations:
  - open-standaarden
  - samenwerking
  - veiligheid
---

# 3. Werk transparant en gebruik open source

Open source is een manier van werken waarbij de makers de broncode, documentatie en ontwerp openbaar beschikbaar stellen onder een opensourcelicentie. Hierdoor kan iedereen de software bekijken, kopiëren, aanpassen of delen. Mensen kunnen voorstellen doen voor verbeteringen of toevoegingen. Het delen van code en het gebruik van open source software kan leiden tot betere, veiligere en meer kosteneffectieve oplossingen.

## Waarom is het belangrijk?

- **Transparantie**: Iedereen kan zien hoe de software werkt en hoe besluiten worden genomen
- **Kosteneffectiviteit**: Vermijd licentiekosten en afhankelijkheid van één leverancier
- **Samenwerking**: Organisaties kunnen kennis delen en van elkaar leren
- **Flexibiliteit**: Aanpassingen zijn mogelijk zonder afhankelijk te zijn van externe leveranciers
- **Veiligheid**: Problemen kunnen sneller worden ontdekt en opgelost dankzij gemeenschappelijke inspectie
- **Duurzaamheid**: Voorkomt vendor lock-in en maakt langetermijnbeheer mogelijk
- **Innovatie**: Lost gemeenschappelijke problemen op met beschikbare technologie
- **Tijd- en kostenbesparend**: Maakt gebruik van bestaande oplossingen in plaats van het wiel opnieuw uit te vinden

Door open en transparant te werken en open source software te omarmen, draag je bij aan een meer transparante, flexibele en verantwoordelijke digitale overheid.

## Hoe pas je het toe?

<div class="direct-aan-de-slag">
    <h3>Direct aan de slag</h3>

    <div class="warning-banner" style="background-color: #fff3e0; padding: 0.5rem; border-left: 3px solid #ff9800; margin-bottom: 0.8rem;">
        <strong>Work in Progress:</strong> De onderstaande functionaliteit is nog in ontwikkeling.
    </div>

    <div class="action-cards" data-richtlijn="open-source"></div>
</div>

## Bewezen praktijken

### 1. Begrijpen

Start met verkennen van bestaande open source oplossingen voordat je zelf iets bouwt. Evalueer of open source past bij je project en begrijp het **open-tenzij beleid**: je code moet open zijn, tenzij er zwaarwegende redenen zijn om dit niet te doen (zoals staatsgeheimen of fraudepreventie). Dit principe van transparantie versterkt het vertrouwen in de overheid.

??? expander "Praktische tips"
    - **Onderzoek eerst hergebruik** - Zoek naar bestaande open source oplossingen die je probleem al oplossen
    - **Evalueer total cost of ownership** - Kijk naar alle kosten: implementatie, migratie, training, onderhoud
    - **Beoordeel vendor lock-in risico's** - Vermijd afhankelijkheid van één leverancier
    - **Test met prototypes** - Bouw kleine prototypes om technische aannames te valideren
    - **Ken het open-tenzij beleid** - Begrijp wanneer je code wel of niet open hoeft te maken
    - **Betrek de community** - Leg contact met relevante open source gemeenschappen voor advies

### 2. Ontwikkelen, ontwerpen en inkopen

Werk **open vanaf dag 1**: begin met een publieke repository vanaf het start van je project. Dit voorkomt kostbare retrofitting en bevordert incrementele security improvements. Kies een geschikte open source licentie (bij voorkeur EUPL-1.2 voor overheidscode) en zorg voor een secrets management systeem - wachtwoorden en API-keys horen nooit in code.

Ontwikkelen & ontwerpen
??? expander "Praktische tips"
    - **Start met een publieke repository** - Begin vanaf dag 1 met een publieke GitHub of GitLab repository
    - **Kies EUPL-1.2 licentie** - De aanbevolen licentie voor Nederlandse overheidscode
    - **Gebruik secrets management** - Sla wachtwoorden, API-keys en credentials op in een apart systeem (bijv. HashiCorp Vault, Azure Key Vault)
    - **Schrijf een goede README** - Leg uit wat de code doet, hoe je het installeert en hoe je kunt bijdragen
    - **Maak een CONTRIBUTING.md** - Geef duidelijke richtlijnen voor externe bijdragen
    - **Definieer een Code of Conduct** - Creëer een veilige en inclusieve omgeving voor contributors
    - **Gebruik open standaarden** - Zorg dat je architectuur interoperabel is (zie [Gebruik open standaarden](../open-standaarden/index.md))
    - **Documenteer ontwerpbeslissingen** - Leg vast waarom je bepaalde technologiekeuzes maakt

Inkopen van open source technologie
??? expander "Praktische tips"
    - **Controleer de maturiteit** - Is het project actief onderhouden en stabiel?
    - **Evalueer de community** - Is er een actieve gemeenschap of commerciële ondersteuning?
    - **Check de veiligheid** - Bekijk de security geschiedenis en updatefrequentie
    - **Begrijp de licentie** - Zorg dat je de verplichtingen kent
    - **Vraag naar gebruikerservaringen** - Gebruiken andere overheidsorganisaties dit al?

### 3. Testen, meten en verbeteren

Onderhoud je open source project actief. Reageer snel op security issues (doelstelling: binnen 24-48 uur), monitor dependencies op kwetsbaarheden, en wees transparant over je onderhoudsniveau. Open source publiceren is een langetermijncommitment - alloceer voldoende resources voor community management.

??? expander "Praktische tips"
    - **Review code op secrets** - Scan regelmatig op hard-coded wachtwoorden en credentials
    - **Monitor security advisories** - Volg CVE's en security updates voor je dependencies
    - **Reageer snel op security issues** - Patch kritieke kwetsbaarheden binnen 24-48 uur
    - **Houd dependencies up-to-date** - Gebruik tools zoals Dependabot voor automatische updates
    - **Test installeerbaarheid** - Doe regelmatig een fresh clone test met een nieuwe gebruiker
    - **Communiceer onderhoudsniveau** - Wees duidelijk over "actively maintained", "maintenance mode" of "archived"
    - **Gebruik Semantic Versioning** - Versies in major.minor.patch formaat voor duidelijkheid
    - **Draag bij aan upstream** - Geef terug aan projecten waar je van afhankelijk bent
    - **Deel learnings** - Publiceer blogposts en presentaties over je ervaringen

## Implementatie per fase

Zie [Implementatie en gewenste uitkomsten per fase voor richtlijn "3. Werk transparant en gebruik open source"](/NeRDS/richtlijnen/open-source/fases.md).

## Gerelateerde hulpmiddelen

#### Methodes

- [OSPO-NL Kennisbank](https://ospo-nl.github.io/kennisbank/) - Verzameling van kennis over het opzetten van een Open Source Program Office (OSPO) binnen de Nederlandse overheid, met praktische handleidingen en richtlijnen
- [Ambitieladder opensourcewerken](https://minvws.opensourcewerken.nl/open-source-ambitieladder-voor-opensourcewerken-in-projecten/) - Helpt projectteams concrete afspraken te maken over opensourcewerken
- [Code.gov.nl](https://code.overheid.nl/) - Platform om overheidscode te publiceren en te vinden (in ontwikkeling)

#### Beleid, wetten en standaarden

- [Beleid Opensourcewerken - Digitale Overheid](https://www.digitaleoverheid.nl/overzicht-van-alle-onderwerpen/open-source/beleid/) - Het officiële open-tenzij beleid van de Nederlandse overheid
- [Instructie Rijksdienst bij aanschaf ICT-diensten of ICT-producten](https://wetten.overheid.nl/BWBR0024717/2008-11-23) - Officiële instructie die open standaarden voorschrijft bij ICT-aanschaf
- [EUPL-1.2 Licentie](https://joinup.ec.europa.eu/collection/eupl/eupl-text-eupl-12) - European Union Public Licence, aanbevolen voor overheidscode
- [OSPO-NL Licentieadvies](https://ospo-nl.github.io/kennisbank/best-practices/open-source-software-licenties/) - Overzicht van open source licenties en overwegingen

#### Communities

- [Opensourcewerken community](https://developer.overheid.nl/communities/open-source-werken) - Community van het Ministerie van Binnenlandse Zaken voor praktische kennis, een forum om ervaringen te delen en informatie over relevante regelgeving

#### Trainingen

#### Boeken

## Gerelateerde richtlijnen

- [4. Gebruik open standaarden](../open-standaarden/index.md)
- [6. Maak veilige systemen](../veiligheid/index.md)
- [8. Deel, hergebruik en werk samen](../samenwerking/index.md)
