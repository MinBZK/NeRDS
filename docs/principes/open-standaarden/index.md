---
title: "4. Gebruik open standaarden"
summary: Bouw technologie die open standaarden gebruikt om ervoor te zorgen dat je technologie werkt en communiceert met andere technologie.
relations:
  - integratie
  - toegankelijkheid
  - open-source
  - data
roles:
  - developer: high
  - projectleider: high
  - cxo: high
  - beleidsmaker: medium
  - jurist: medium
  - inkoper: medium
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

    <div class="action-cards">
        <div class="action-card">
            <span class="wip-badge wip-badge-beschikbaar">beschikbaar</span>
            <h4 >Beslisboom Open Standaarden</h4>
            <p >Bepaal welke standaarden van toepassing zijn</p>
            <a href="https://www.forumstandaardisatie.nl/beslisboom/beslisboom-open-standaarden" class="action-button" target="_blank">Starten</a>
        </div>
        <div class="action-card">
            <span class="wip-badge wip-badge-beschikbaar">beschikbaar</span>
            <h4 >API Standaarden</h4>
            <p >Nederlandse API strategie</p>
            <a href="https://docs.geostandaarden.nl/api/API-Strategie/" class="action-button" target="_blank">Bekijken</a>
        </div>
        <div class="action-card">
            <span class="wip-badge wip-badge-beschikbaar">beschikbaar</span>
            <h4 >Developer Overheid API's</h4>
            <p >Overzicht van overheids-API's</p>
            <a href="https://apis.developer.overheid.nl/apis" class="action-button" target="_blank">Ontdekken</a>
        </div>
        <div class="action-card">
            <span class="wip-badge wip-badge-ontwikkeling">ontwikkeling</span>
            <h4 >Standaardenregister</h4>
            <p >Centrale standaardendatabase</p>
            <button disabled class="action-button">Zoeken</button>
        </div>
    </div>
</div>

=== "Beleidsmaker"
    ### Beleidskaders voor open standaarden

    **Stappen:**

    1. **Formuleer standaardenbeleid** - Ontwikkel coherent beleid voor open standaarden adoptie
    2. **Coördineer tussen ministeries** - Zorg voor consistente standaarden-governance
    3. **Monitor Forum Standaardisatie** - Volg ontwikkelingen in 'pas toe of leg uit'-lijst
    4. **Stakeholder consultatie** - Betrek marktpartijen bij standaardisatieprocessen
    5. **Internationale afstemming** - Participeer in EU-interoperabiliteitsframeworks

    **Belangrijke overwegingen:**

    - Balans tussen innovatie en bestaande standaarden
    - Vendor lock-in preventie door open standaarden
    - EU-interoperabiliteit en digitale soevereiniteit
    - Compliance met Nederlandse wetgeving

=== "Bestuurder"
    ### Strategische open standaarden governance

    **Stappen:**

    1. **Bepaal interoperabiliteitsstrategie** - Ontwikkel organisatiebrede standaarden-visie
    2. **Evalueer bestaande systemen** - Inventariseer huidige standaarden en gaps
    3. **Budgettering standaarden** - Bereken kosten van standaarden-implementatie
    4. **Risicoanalyse** - Beoordeel risico's van vendor lock-in en legacy systemen
    5. **KPI's definiëren** - Stel meetbare doelen voor interoperabiliteit

    **Belangrijke overwegingen:**

    - ROI van open standaarden vs proprietary oplossingen
    - Organisatorische change management
    - Leveranciersstrategie en vendor diversificatie
    - Toekomstbestendigheid van standaarden

=== "Projectleider"
    ### Projectimplementatie open standaarden

    **Stappen:**

    1. **Standaarden-assessment** - Evalueer welke standaarden van toepassing zijn
    2. **Implementatieplan opstellen** - Ontwikkel gefaseerde invoering van standaarden
    3. **Stakeholder coördinatie** - Breng technische teams en compliance samen
    4. **Compliance monitoring** - Monitor naleving van verplichte standaarden
    5. **Gebruikerstesten** - Organiseer testen voor interoperabiliteit

    **Belangrijke overwegingen:**

    - Minimale service-onderbreking tijdens implementatie
    - Training en kennisoverdracht voor teams
    - Integratie met bestaande systemen
    - Monitoring van standaarden-conformiteit

=== "Developer"
    ### Technische implementatie open standaarden

    **Stappen:**

    1. **Inventariseer standaarden** - Gebruik [Beslisboom Open Standaarden](https://www.forumstandaardisatie.nl/beslisboom/beslisboom-open-standaarden)
    2. **Implementeer RESTful API's** - Ontwikkel volgens [NL API Strategie](https://docs.geostandaarden.nl/api/API-Strategie/)
    3. **Documenteer met OpenAPI** - Maak API-documentatie beschikbaar
    4. **Valideer conformiteit** - Test tegen standaarden-specificaties
    5. **Monitor ontwikkelingen** - Volg updates van gebruikte standaarden

    **Code-voorbeeld - OpenAPI specificatie:**
    ```yaml
    openapi: 3.0.0
    info:
      title: Overheids API
      version: 1.0.0
      description: API conform NL API Strategie
    servers:
      - url: https://api.overheid.nl/v1
    paths:
      /burgers:
        get:
          summary: Ophalen burgergegevens
          parameters:
            - name: bsn
              in: query
              required: true
              schema:
                type: string
                pattern: '^[0-9]{9}$'
          responses:
            '200':
              description: Succesvol opgehaald
              content:
                application/hal+json:
                  schema:
                    $ref: '#/components/schemas/Burger'
    components:
      schemas:
        Burger:
          type: object
          properties:
            bsn:
              type: string
              example: "123456789"
            naam:
              type: string
              example: "Jan Jansen"
    ```

    **Belangrijke overwegingen:**
    - Gebruik JSON-LD voor linked data
    - Implementeer HTTPS en API-beveiliging
    - Volg REST API Design Rules
    - Test interoperabiliteit met andere systemen

=== "Jurist"
    ### Juridische compliance open standaarden

    **Stappen:**

    1. **Analyseer verplichte standaarden** - Toets compliance met 'pas toe of leg uit'-lijst
    2. **Vendor lock-in preventie** - Beoordeel juridische risico's proprietary formaten
    3. **Intellectueel eigendom** - Analyseer licenties van open standaarden
    4. **Contractuele eisen** - Stel juridische vereisten voor leveranciers
    5. **Compliance monitoring** - Monitor naleving van standaarden-verplichtingen

    **Belangrijke overwegingen:**

    - Juridische status van Forum Standaardisatie besluiten
    - Aansprakelijkheid bij non-compliance
    - Contractuele borging van standaarden-naleving
    - Exit-strategieën bij vendor lock-in

=== "Inkoper"
    ### Inkoopvereisten open standaarden

    **Stappen:**

    1. **Formuleer aanbestedingseisen** - Specificeer verplichte open standaarden
    2. **Leveranciersevaluatie** - Beoordeel standaarden-compliance van vendors
    3. **SLA-onderhandelingen** - Stel eisen voor standaarden-naleving
    4. **TCO-analyse** - Vergelijk kosten open vs proprietary standaarden
    5. **Contractbeheer** - Monitor naleving van standaarden-verplichtingen

    **Template aanbestedingseis:**

    > **Open standaarden:** Leverancier moet aantonen dat de oplossing voldoet aan alle van toepassing zijnde verplichte standaarden uit de 'pas toe of leg uit'-lijst van het Forum Standaardisatie. API's moeten conform zijn aan de NL API Strategie en REST API Design Rules.

    **Belangrijke overwegingen:**

    - Vendor lock-in preventie via open standaarden
    - Interoperabiliteit met bestaande systemen
    - Toekomstbestendigheid van standaarden
    - Migratiekosten bij standaarden-wijzigingen

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

## Gerelateerde principes

- [2. Zorg voor toegankelijkheid en inclusie](../toegankelijkheid/index.md)
- [3. Werk transparant en gebruik open source](../open-source/index.md)
- [9. Integreer en pas technologie aan](../integratie/index.md)
- [10. Maak beter gebruik van data](../data/index.md)
