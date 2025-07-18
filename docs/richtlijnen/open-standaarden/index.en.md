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

- **Interoperability**: Systems can communicate seamlessly with each other
- **Cost effectiveness**: Reuse existing resources instead of redevelopment
- **Avoid vendor lock-in**: Prevents dependence on specific suppliers or technologies
- **Sustainability**: Extends the lifetime of systems and data
- **Transparency:** Promotes openness of public systems
- **Innovation**: Makes it easier to develop and integrate new services
- **Accessibility**: Ensures that information is widely available and usable

By using open standards, you contribute to a more integrated, flexible and sustainable digital government infrastructure that can effectively communicate with other systems.

## How do you apply it?

<div class="direct-aan-de-slag">
    <h3>Get Started</h3>

    <div class="warning-banner" style="background-color: #fff3e0; padding: 0.5rem; border-left: 3px solid #ff9800; margin-bottom: 0.8rem;">
        <strong>Work in Progress</strong>
    </div>

    <div class="action-cards">
        <div class="action-card">
            <span class="wip-badge wip-badge-beschikbaar">available</span>
            <h4 >Decide Tree Open Defaults</h4>
            <p >Determine which standards apply</p>
            <a href="https://www.forumstandaardisatie.nl/beslisboom/beslisboom-open-standaarden" class="action-button" target="_blank">Start</a>
        </div>
        <div class="action-card">
            <span class="wip-badge wip-badge-beschikbaar">available</span>
            <h4 >API Standards</h4>
            <p >Dutch API strategy</p>
            <a href="https://docs.geostandaarden.nl/api/API-Strategie/" class="action-button" target="_blank">View</a>
        </div>
        <div class="action-card">
            <span class="wip-badge wip-badge-beschikbaar">available</span>
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

- Inventory standards: Use the [Beslisboom Open Standaarden](https://www.forumstandaardisatie.nl/beslisboom/beslisboom-open-standaarden) for mandatory and recommended standards
- Follow architectural guidelines: Apply [NORA](https://www.noraonline.nl/wiki/NORA_online) (Dutch Government Reference Architecture) and Common Ground
- Implement RESTful APIs: Develop with [NL API Strategie](https://docs.geostandaarden.nl/api/API-Strategie/) and [REST API Design Rules](https://www.forumstandaardisatie.nl/open-standaarden/rest-api-design-rules)
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

- **Legacy systems**: Develop a migration plan for older systems
- **Technical expertise**: Invest in training and knowledge building
- **Fast Change**: Keep up to date on new developments
- **Find Balance**: Weigh new standards against proven solutions

## Related Standards

Het [Forum Standaardisatie](https://www.forumstandaardisatie.nl/) adviseert de Dutch government over het gebruik van open standaarden en beheert de 'pas toe of leg uit'-lijst met verplichte open standaarden voor de publieke sector. Gebruik de [Beslisboom Open Standaarden](https://www.forumstandaardisatie.nl/beslisboom/beslisboom-open-standaarden) om te bepalen welke standaarden in jouw situatie van toepassing zijn.

### Web Standards

- **HTML5/CSS3/JavaScript**: Base for modern web applications
- **JSON/XML**: Standard data formats for data exchange

### API Standards

- **[REST API Design Rules](https://www.forumstandaardisatie.nl/open-standaarden/rest-api-design-rules)**: Dutch government standard for REST APIs
- **[NL API Strategie](https://docs.geostandaarden.nl/api/API-Strategie/)**: Guidelines for API development within government
- **OpenAPI**: RESTful API specification format
- **OData**: Open protocol for data query and manipulation

### Architecture and components

- **[Common Ground](https://commonground.nl/)**: New information vision for data exchange
- **[NORA](https://www.noraonline.nl/)**: Dutch Government Reference Architecture
- **[Haven](https://digilab.overheid.nl/projecten/)**: Standard for platform-dependent cloud hosting, designed for reusable applications

### Document formats

- **PDF/A**: Document archive format
- **Open Document Format (ODF)**: Open default for office documents
- **[STOP/TPOD](https://standaarden.overheid.nl/stop)**: Standard for official publications

### Data standards

- **[RSGB/RGBZ](https://www.gemmaonline.nl/wiki/Hoofdpagina)**: Basic data standards municipalities
- **RDF**: Resource Description Framework for linked data
- **Mr. Geojson**: Open default for geographic data

### Identity and access

- **[DigiD](https://www.digid.nl/)**: Citizens' login method
- **[eHerkenning](https://www.eherkenning.nl/)**: Business login method
- **[Federatieve Toegangsverlening (FTV)](https://digilab.overheid.nl/projecten/)**: Standard for authorisation in federal data systems
- **[Federatieve Service Connectiviteit (FSC)](https://digilab.overheid.nl/projecten/)**: API gateway with federal authentication and digital contracts

### Network and Security

- **HTTPS/TLS**: Secure communication
- **DNSSEC**: DNS Security Extension
- **[Digikoppeling](https://www.logius.nl/diensten/digikoppeling)**: Electronic messaging standards
- **[ACME Protocol](https://digilab.overheid.nl/projecten/)**: Automates the issuance and renewal of safety certificates

### Data integrity and transparency

- **[Uit Betrouwbare Bron](https://digilab.overheid.nl/projecten/)**: Focus on data quality in federal systems
- **[Logboek Dataverwerkingen](https://digilab.overheid.nl/projecten/)**: Increase transparency in government data by keeping track of who mutates, when and why
- **[Synthetische Datageneratie](https://digilab.overheid.nl/projecten/)**: Generates representative test data via event sourcing

## Related Guidelines

- [2. Zorg voor toegankelijkheid en inclusie](../toegankelijkheid/index.md)
- [3. Werk transparant en gebruik open source](../open-source/index.md)
- [9. Integreer en pas technologie aan](../integratie/index.md)
- [10. Maak beter gebruik van data](../data/index.md)
