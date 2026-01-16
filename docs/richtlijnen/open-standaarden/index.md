---
title: "4. Gebruik open standaarden"
summary: Bouw technologie die open standaarden gebruikt om ervoor te zorgen dat je technologie werkt en communiceert met andere technologie.
relations:
  - integratie
  - toegankelijkheid
  - open-source
  - data
---

# 4. Gebruik open standaarden

Open standaarden zijn gemeenschappelijke regels die gebruikers in staat stellen compatibele en consistente producten, processen en diensten te creëren. Ze worden open ontworpen, zijn openbaar beschikbaar en meestal gratis of tegen lage kosten te gebruiken. Open standaarden zijn specificaties voor het uitvoeren van specifieke taken of functies.

## Waarom is het belangrijk?

- **Interoperabiliteit**: Systemen kunnen naadloos met elkaar communiceren
- **Kosteneffectiviteit**: Hergebruik bestaande middelen in plaats van opnieuw te ontwikkelen
- **Vermijd vendor lock-in**: Voorkomt afhankelijkheid van specifieke leveranciers of technologieën
- **Duurzaamheid**: Verlengt de levensduur van systemen en gegevens
- **Transparantie:** Bevordert openheid van overheidssystemen
- **Innovatie**: Maakt het gemakkelijker om nieuwe diensten te ontwikkelen en te integreren
- **Toegankelijkheid**: Zorgt ervoor dat informatie breed beschikbaar en bruikbaar is

Door open standaarden te gebruiken, draag je bij aan een meer geïntegreerde, flexibele en duurzame digitale overheidsinfrastructuur die effectief kan communiceren met andere systemen.

## Hoe pas je het toe?

<div class="direct-aan-de-slag">
    <h3>Direct aan de slag</h3>

    <div class="warning-banner" style="background-color: #fff3e0; padding: 0.5rem; border-left: 3px solid #ff9800; margin-bottom: 0.8rem;">
        <strong>Work in Progress:</strong> De onderstaande functionaliteit is nog in ontwikkeling.
    </div>

    <div class="action-cards" data-richtlijn="open-standaarden"></div>
    </div>
</div>

### Technologie bouwen met open standaarden

- Inventariseer standaarden: Gebruik de [Beslisboom Open Standaarden](https://www.forumstandaardisatie.nl/beslisboom/beslisboom-open-standaarden) voor verplichte en aanbevolen standaarden
- Volg architectuurrichtlijnen: Pas [NORA](https://www.noraonline.nl/wiki/NORA_online) (Nederlandse Overheid Referentie Architectuur) en Common Ground toe
- Implementeer RESTful API's: Ontwikkel volgens [NL API Strategie](https://docs.geostandaarden.nl/api/API-Strategie/) en [REST API Design Rules](https://www.forumstandaardisatie.nl/open-standaarden/rest-api-design-rules)
- Vermijd gegevensduplicatie: Gebruik eenduidige databronnen
- Documenteer met OpenAPI: Maak API-documentatie beschikbaar via Developer Overheid
- Valideer en onderhoud: Test conformiteit en monitor standaardontwikkelingen

#### Bij het inkopen van technologie

- Neem toepasselijke verplichte standaarden op in aanbestedingen
- Vraag dat leveranciersstandaarden voldoen aan open standaarden richtlijnen
- Volg overheidsbeleid voor publieke aanbestedingen van technologie

### Overwegingen bij het kiezen van standaarden

- **Technische geschiktheid**:
      - Voldoet de standaard aan functionele vereisten?
      - Is de standaard stabiel en volwassen?
      - Zijn er voldoende implementaties beschikbaar?
- **Strategische waarde:**
      - Is de standaard breed geadopteerd in de markt en overheid?
      - Is de standaard toekomstbestendig?
      - Is er actieve doorontwikkeling en community?
- **Praktische overwegingen:**
      - Is er voldoende documentatie en ondersteuning beschikbaar?
      - Voldoet de standaard aan veiligheids- en privacyeisen?
      - Wat zijn de implementatie-en migratiekosten?

### Uitdagingen en hoe deze te overwinnen

- **Legacy systemen**: Ontwikkel een migratieplan voor oudere systemen
- **Technische expertise**: Investeer in training en kennisopbouw
- **Snelle verandering**: Blijf op de hoogte van nieuwe ontwikkelingen
- **Balans vinden**: Weeg nieuwe standaarden af tegen bewezen oplossingen

## Gerelateerde standaarden

Het [Forum Standaardisatie](https://www.forumstandaardisatie.nl/) adviseert de Nederlandse overheid over het gebruik van open standaarden en beheert de 'pas toe of leg uit'-lijst met verplichte open standaarden voor de publieke sector. Gebruik de [Beslisboom Open Standaarden](https://www.forumstandaardisatie.nl/beslisboom/beslisboom-open-standaarden) om te bepalen welke standaarden in jouw situatie van toepassing zijn.

### Webstandaarden

- **HTML5/CSS3/JavaScript**: Basis voor moderne webapplicaties
- **JSON/XML**: Standaard gegevensformaten voor data-uitwisseling

### API-standaarden

- **[REST API Design Rules](https://www.forumstandaardisatie.nl/open-standaarden/rest-api-design-rules)**: Nederlandse overheidsstandaard voor REST API's
- **[NL API Strategie](https://docs.geostandaarden.nl/api/API-Strategie/)**: Richtlijnen voor API-ontwikkeling binnen de overheid
- **OpenAPI**: Specificatieformaat voor RESTful API's
- **OData**: Open protocol voor data query en manipulatie

### Architectuur en componenten

- **[Common Ground](https://commonground.nl/)**: Nieuwe informatiekundige visie voor uitwisseling van gegevens
- **[NORA](https://www.noraonline.nl/)**: Nederlandse Overheid Referentie Architectuur
- **[Haven](https://digilab.overheid.nl/projecten/)**: Standaard voor platformonafhankelijke cloudhosting, ontworpen voor herbruikbare applicaties

### Documentformaten

- **PDF/A**: Archiveringsformaat voor documenten
- **Open Document Format (ODF)**: Open standaard voor kantoordocumenten
- **[STOP/TPOD](https://standaarden.overheid.nl/stop)**: Standaard voor officiële publicaties

### Datastandaarden

- **[RSGB/RGBZ](https://www.gemmaonline.nl/wiki/Hoofdpagina)**: Standaarden voor basisgegevens gemeenten
- **RDF**: Resource Description Framework voor linked data
- **GeoJSON**: Open standaard voor geografische data

### Identiteit en toegang

- **[DigiD](https://www.digid.nl/)**: Inlogmethode voor burgers
- **[eHerkenning](https://www.eherkenning.nl/)**: Inlogmethode voor bedrijven
- **[Federatieve Toegangsverlening (FTV)](https://digilab.overheid.nl/projecten/)**: Standaard voor autorisatie in federatieve datasystemen
- **[Federatieve Service Connectiviteit (FSC)](https://digilab.overheid.nl/projecten/)**: API-gateway met federatieve authenticatie en digitale contracten

### Netwerk en beveiliging

- **HTTPS/TLS**: Beveiligde communicatie
- **DNSSEC**: Beveiligingsuitbreiding voor DNS
- **[Digikoppeling](https://www.logius.nl/diensten/digikoppeling)**: Standaarden voor elektronisch berichtenverkeer
- **[ACME Protocol](https://digilab.overheid.nl/projecten/)**: Automatiseert de uitgifte en vernieuwing van veiligheidscertificaten

### Data-integriteit en transparantie

- **[Uit Betrouwbare Bron](https://digilab.overheid.nl/projecten/)**: Focus op datakwaliteit in federatieve systemen
- **[Logboek Dataverwerkingen](https://digilab.overheid.nl/projecten/)**: Vergroot transparantie in overheidsdata door bij te houden wie, wanneer en waarom data muteert
- **[Synthetische Datageneratie](https://digilab.overheid.nl/projecten/)**: Genereert representatieve testdata via event sourcing

## Gerelateerde richtlijnen

- [2. Zorg voor toegankelijkheid en inclusie](../toegankelijkheid/index.md)
- [3. Werk transparant en gebruik open source](../open-source/index.md)
- [9. Integreer en pas technologie aan](../integratie/index.md)
- [10. Maak beter gebruik van data](../data/index.md)
