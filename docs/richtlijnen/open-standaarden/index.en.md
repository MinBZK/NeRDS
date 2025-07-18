---
title: "4. Gebruik open standaarden"
summary: Bouw technologie die open standaarden gebruikt om ervoor te zorgen dat je technologie werkt en communiceert met andere technologie.
relations:
  - integratie
  - toegankelijkheid
  - open-source
  - data
---

# 4. Use Open Standards

Open standards are common rules that enable users to create compatible and consistent products, processes and services. They are designed open, are publicly available and usually use free or at low cost. Open standards are specifications for performing specific tasks or functions.

## Why is it important?

- **Interoperability**: Systemen kunnen naadloos met elkaar communiceren
- **Cost effectiveness**: Hergebruik bestaande middelen in plaats van opnieuw te ontwikkelen
- **Avoid vendor lock-in**: Voorkomt afhankelijkheid van specifieke leveranciers of technologieën
- **Sustainability**: Verlengt de levensduur van systemen en gegevens
- **Transparency:** Bevordert openheid van overheidssystemen
- **Innovation**: Maakt het gemakkelijker om nieuwe diensten te ontwikkelen en te integreren
- **Accessibility**: Zorgt ervoor dat informatie breed available en bruikbaar is

By using open standards, you contribute to a more integrated, flexible and sustainable digital government infrastructure that can effectively communicate with other systems.

## How do you apply it?

<div class="direct-aan-de-slag">
    <h3>Get Started</h3>

    <div class="warning-banner" style="background-color: #fff3e0; padding: 0.5rem; border-left: 3px solid #ff9800; margin-bottom: 0.8rem;">
        <strong>Work in Progress</strong>
    </div>

    <div class="action-cards">
        <div class="action-card">
            <span class="wip-badge wip-badge-available">available</span>
            <h4 >Decide Tree Open Defaults</h4>
            <p >Determine which standards apply</p>
            <a href="https://www.forumstandaardisatie.nl/beslisboom/beslisboom-open-standaarden" class="action-button" target="_blank">Start</a>
        </div>
        <div class="action-card">
            <span class="wip-badge wip-badge-available">available</span>
            <h4 >API Standards</h4>
            <p >Dutch API strategy</p>
            <a href="https://docs.geostandaarden.nl/api/API-Strategie/" class="action-button" target="_blank">View</a>
        </div>
        <div class="action-card">
            <span class="wip-badge wip-badge-available">available</span>
            <h4 >Developer Government APIs</h4>
            <p >Overview of government APIs</p>
            <a href="https://apis.developer.overheid.nl/apis" class="action-button" target="_blank">Discover</a>
        </div>
        <div class="action-card">
            <span class="wip-badge wip-badge-ontwikkeling">Development</span>
            <h4 >Default Register</h4>
            <p >Central Standards Database</p>
            <button disabled class="action-button">Search</button>
        </div>
    </div>
</div>

### Building technology with open standards

- Inventariseer standaarden: Gebruik de [Beslisboom Open Standaarden](https://www.forumstandaardisatie.nl/beslisboom/beslisboom-open-standaarden) voor verplichte en aanbevolen standaarden
- Volg architectuurrichtlijnen: Pas [NORA](https://www.noraonline.nl/wiki/NORA_online) (Dutch Government Referentie Architectuur) en Common Ground toe
- Implementeer RESTful API's: Ontwikkel volgens [NL API Strategie](https://docs.geostandaarden.nl/api/API-Strategie/) en [REST API Design Rules](https://www.forumstandaardisatie.nl/open-standaarden/rest-api-design-rules)
- Avoid data duplication: Use unique data sources
- Document with OpenAPI: Create API documentation available via Developer Government
- Valider and maintenance: Test conformity and monitor standard developments

#### When purchasing technology

- Include applicable mandatory standards in procurement
- Ask suppliers to comply with open standards guidelines
- Follow public policy for public procurement of technology

### Considerations when choosing standards

- **Technical suitability**:
      - Does the standard meet functional requirements?
      - Is the standard stable and mature?
      - Are there sufficient implementations available?
- **Strategic value:**
      - Is the standard widely adopted in the market and government?
      - Is the standard future-proof?
      - Is there active development and community?
- **Practical considerations:**
      - Is there sufficient documentation and support available?
      - Does the standard meet security and privacy requirements?
      - What are the implementation and migration costs?

### Challenges and how to overcome them

- **Legacy systems**: Ontwikkel een migratieplan voor oudere systemen
- **Technical expertise**: Investeer in training en kennisopbouw
- **Fast Change**: Blijf op de hoogte van nieuwe ontwikkelingen
- **Find Balance**: Weeg nieuwe standaarden af tegen bewezen oplossingen

## Related Standards

Het [Forum Standaardisatie](https://www.forumstandaardisatie.nl/) adviseert de Dutch government over het gebruik van open standaarden en beheert de 'pas toe of leg uit'-lijst met verplichte open standaarden voor de publieke sector. Gebruik de [Beslisboom Open Standaarden](https://www.forumstandaardisatie.nl/beslisboom/beslisboom-open-standaarden) om te bepalen welke standaarden in jouw situatie van toepassing zijn.

### Web Standards

- **HTML5/CSS3/JavaScript**: Basis voor moderne webapplicaties
- **JSON/XML**: Standaard gegevensformaten voor data-uitwisseling

### API Standards

- **[REST API Design Rules](https://www.forumstandaardisatie.nl/open-standaarden/rest-api-design-rules)**: Dutch overheidsstandaard voor REST API's
- **[NL API Strategie](https://docs.geostandaarden.nl/api/API-Strategie/)**: Guidelines voor API-ontwikkeling binnen de government
- **OpenAPI**: Specificatieformaat voor RESTful API's
- **OData**: Open protocol voor data query en manipulatie

### Architecture and components

- **[Common Ground](https://commonground.nl/)**: Nieuwe informatiekundige visie voor uitwisseling van gegevens
- **[NORA](https://www.noraonline.nl/)**: Dutch Government Referentie Architectuur
- **[Haven](https://digilab.overheid.nl/projecten/)**: Standaard voor platform-independent cloud hosting, ontworpen voor herbruikbare applicaties

### Document formats

- **PDF/A**: Archiveringsformaat voor documenten
- **Open Document Format (ODF)**: Open standaard voor kantoordocumenten
- **[STOP/TPOD](https://standaarden.overheid.nl/stop)**: Standaard voor officiële publicaties

### Data standards

- **[RSGB/RGBZ](https://www.gemmaonline.nl/wiki/Hoofdpagina)**: Standaarden voor basisgegevens municipalities
- **RDF**: Resource Description Framework voor linked data
- **Mr. Geojson**: Open standaard voor geografische data

### Identity and access

- **[DigiD](https://www.digid.nl/)**: Inlogmethode voor burgers
- **[eHerkenning](https://www.eherkenning.nl/)**: Inlogmethode voor bedrijven
- **[Federatieve Toegangsverlening (FTV)](https://digilab.overheid.nl/projecten/)**: Standaard voor autorisatie in federatieve datasystemen
- **[Federatieve Service Connectiviteit (FSC)](https://digilab.overheid.nl/projecten/)**: API-gateway met federatieve authenticatie en digitale contracten

### Network and Security

- **HTTPS/TLS**: Beveiligde communicatie
- **DNSSEC**: Beveiligingsuitbreiding voor DNS
- **[Digikoppeling](https://www.logius.nl/diensten/digikoppeling)**: Standaarden voor elektronisch berichtenverkeer
- **[ACME Protocol](https://digilab.overheid.nl/projecten/)**: Automatiseert de uitgifte en vernieuwing van veiligheidscertificaten

### Data integrity and transparency

- **[Uit Betrouwbare Bron](https://digilab.overheid.nl/projecten/)**: Focus op datakwaliteit in federatieve systemen
- **[Logboek Dataverwerkingen](https://digilab.overheid.nl/projecten/)**: Vergroot transparantie in overheidsdata door bij te houden wie, wanneer en waarom data muteert
- **[Synthetische Datageneratie](https://digilab.overheid.nl/projecten/)**: Genereert representatieve testdata via event sourcing

## Related Guidelines

- [2. Zorg voor toegankelijkheid en inclusie](../toegankelijkheid/index.md)
- [3. Werk transparant en gebruik open source](../open-source/index.md)
- [9. Integreer en pas technologie aan](../integratie/index.md)
- [10. Maak beter gebruik van data](../data/index.md)
