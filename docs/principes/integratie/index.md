---
title: "9. Integreer en pas technologie aan"
summary: Je technologie moet werken met bestaande technologieën, processen en infrastructuur in je organisatie.
relations:
  - open-standaarden
  - servicestandaard
  - samenwerking
roles:
  - beleidsmaker: medium
  - developer: high
  - jurist: medium
  - inkoper: medium
  - cxo: high
  - projectleider: high
---

# 9. Integreer en pas technologie aan

Nieuwe technologische oplossingen moeten naadloos integreren met bestaande systemen, processen en infrastructuur. Door zorgvuldige integratie verminder je complexiteit, verhoog je acceptatie en maximaliseer je de waarde van zowel nieuwe als bestaande investeringen.

## Waarom is het belangrijk?

- **Continuïteit**: Voorkom verstoring van kritieke diensten
- **Kosteneffectiviteit**: Benut bestaande investeringen optimaal
- **Gebruikservaring**: Creëer een samenhangende ervaring voor eindgebruikers
- **Datastromen**: Zorg voor consistente en betrouwbare gegevensuitwisseling
- **Complexiteitsreductie**: Verminder de beheerslast van gefragmenteerde systemen
- **Risicovermindering**: Verlaag de kans op projectfalen door geleidelijke implementatie

Door zorgvuldige integratie en aanpassing van technologie kun je een coherent en effectief digitaal landschap creëren dat waarde levert aan gebruikers en organisaties, terwijl het bestaande investeringen respecteert en toekomstige innovatie ondersteunt.

## Hoe pas je het toe?

<div class="direct-aan-de-slag">
    <h3>Direct aan de slag</h3>

    <div class="warning-banner" style="background-color: #fff3e0; padding: 0.5rem; border-left: 3px solid #ff9800; margin-bottom: 0.8rem;">
        <strong>Work in Progress:</strong> De onderstaande functionaliteit is nog in ontwikkeling.
    </div>

    <div class="action-cards">
        <div class="action-card">
            <span class="wip-badge wip-badge-beschikbaar">beschikbaar</span>
            <h4 >FSC</h4>
            <p >Open source gegevensuitwisselingssysteem</p>
            <a href="https://fsc-standaard.nl/" class="action-button" target="_blank">Verkennen</a>
        </div>
        <div class="action-card">
            <span class="wip-badge wip-badge-beschikbaar">beschikbaar</span>
            <h4 >Common Ground</h4>
            <p >Visie voor moderne gegevensuitwisseling</p>
            <a href="https://commonground.nl/" class="action-button" target="_blank">Leren</a>
        </div>
        <div class="action-card">
            <span class="wip-badge wip-badge-beschikbaar">beschikbaar</span>
            <h4 >Haven</h4>
            <p >Platformonafhankelijke cloudhosting</p>
            <a href="https://haven.commonground.nl/" class="action-button" target="_blank">Ontdekken</a>
        </div>
    </div>
</div>

=== "Beleidsmaker"
    ### Beleidskaders voor systeemintegratie

    **Stappen:**

    1. **Ontwikkel interoperabiliteitsbeleid** - Formuleer kaders voor gegevensuitwisseling tussen overheidslagen
    2. **Promoot open standaarden** - Bevorder adoptie van NORA-principes en API Design Rules
    3. **Coördineer sectoroverstijgend** - Zorg voor consistente integratiestrategieën tussen ministeries
    4. **Stel governance-structuren in** - Ontwikkel bestuurlijke kaders voor Common Ground-adoptie
    5. **Monitor naleving** - Evalueer organisaties op interoperabiliteit en standaardisatie

    **Belangrijke overwegingen:**

    - Balans tussen innovatie en stabiliteit bestaande systemen
    - Juridische kaders voor gegevensuitwisseling tussen organisaties
    - Economische impact van grootschalige systeemintegratie
    - Europese interoperabiliteitsrichtlijnen (EIF)

=== "Bestuurder"
    ### Strategische integratiegovernance en -architectuur

    **Stappen:**

    1. **Bepaal integratievisie** - Ontwikkel organisatiebrede strategie voor systeemintegratie
    2. **Evalueer architectuurvolwassenheid** - Beoordeel huidige integratielandschap en -capaciteit
    3. **Investeer in platformstrategie** - Ontwikkel herbruikbare integratiecomponenten
    4. **Risicoanalyse** - Identificeer kritieke integratieafhankelijkheden en single points of failure
    5. **KPI's definiëren** - Stel meetbare doelen voor integratieperformance en -kosten

    **Belangrijke overwegingen:**

    - TCO van integratieoplossingen vs point-to-point koppelingen
    - Organisatorische impact van gedeelde datasystemen
    - Vendor lock-in preventie bij integratieplatforms
    - Compliance met sectorspecifieke regelgeving

=== "Projectleider"
    ### Projectimplementatie van integratieoplossingen

    **Stappen:**

    1. **Integratie-assessment** - Inventariseer bestaande systemen en integratiepunten
    2. **Stakeholder alignment** - Breng eigenaren van verschillende systemen samen
    3. **Gefaseerde aanpak** - Plan incrementele integratie om risico's te beperken
    4. **End-to-end testing** - Organiseer uitgebreide integratietesten
    5. **Change management** - Coördineer aanpassingen over meerdere systemen

    **Belangrijke overwegingen:**

    - Minimale service-onderbreking tijdens integratiewijzigingen
    - Rollback-strategieën bij gefaalde integraties
    - Training voor teams die met geïntegreerde systemen werken
    - Monitoring en performance-evaluatie van integratieoplossingen

=== "Developer"
    ### Technische integratie-implementatie

    **Stappen:**

    1. **API-first architectuur** - Ontwerp systemen met standaard REST/GraphQL interfaces
    2. **Middleware implementatie** - Gebruik ESB of moderne integratieplatforms
    3. **Event-driven patronen** - Implementeer asynchrone communicatie tussen systemen
    4. **Monitoring en observability** - Stel distributed tracing en logging in
    5. **Security by design** - Implementeer OAuth2, mutual TLS voor veilige integratie

    **Code-voorbeeld - API integratie met NLX:**
    ```python
    # NLX service configuratie voor gegevensuitwisseling
    import requests
    from nlx_client import NLXClient

    class GegevensUitwisselingService:
        def __init__(self, nlx_endpoint, cert_path, key_path):
            self.client = NLXClient(
                endpoint=nlx_endpoint,
                cert_file=cert_path,
                key_file=key_path
            )

        def get_basisregistratie_data(self, bsn):
            """Haal gegevens op uit basisregistratie via NLX"""
            try:
                response = self.client.get(
                    service='brp-service',
                    path=f'/personen/{bsn}',
                    headers={'Content-Type': 'application/json'}
                )
                return response.json()
            except Exception as e:
                self.handle_integration_error(e)

        def handle_integration_error(self, error):
            """Centraliseerde foutafhandeling voor integraties"""
            # Log error voor monitoring
            # Implement circuit breaker pattern
            # Fallback naar alternatieve databron
            pass
    ```

    **FSC implementatie-voorbeeld:**
    ```yaml
    # FSC service definitie
    apiVersion: fsc.gov.nl/v1
    kind: Service
    metadata:
      name: gemeente-service
      namespace: fsc-services
    spec:
      endpoints:
        - name: basisregistratie
          url: https://api.gemeente.nl/brp/v1
          methods: [GET, POST]
          authentication:
            type: mutual-tls
            certificates:
              - name: gemeente-cert
                path: /etc/certs/gemeente.crt
      authorization:
        policies:
          - name: only-authorized-gemeentes
            rules:
              - organizations: ["gemeente-amsterdam", "gemeente-rotterdam"]
                permissions: ["read", "write"]
    ```

    **Belangrijke overwegingen:**

    - Implementatie van API Design Rules voor Nederlandse overheid
    - Gebruik van Common Ground componenten waar mogelijk
    - Retry-mechanismen en circuit breakers voor veerkracht
    - Compliance met logging en audit-vereisten

=== "Jurist"
    ### Juridische compliance bij systeemintegratie

    **Stappen:**

    1. **AVG-naleving** - Toets gegevensuitwisseling op rechtmatigheid en proportionaliteit
    2. **Verwerkersovereenkomsten** - Formuleer juridische kaders voor gedeelde systemen
    3. **Doelbinding** - Zorg dat gegevensuitwisseling binnen wettelijke doelen blijft
    4. **Transparantie** - Implementeer traceability voor gegevensstromen
    5. **Incidentrespons** - Ontwikkel procedures voor datalekken in geïntegreerde systemen

    **Belangrijke overwegingen:**

    - Rechtmatigheid van gegevensuitwisseling tussen organisaties
    - Aansprakelijkheid bij incidenten in gedeelde systemen
    - Audit-trails voor compliance-monitoring
    - Jurisdictie en toepasselijk recht bij cross-border integraties

=== "Inkoper"
    ### Inkoopstrategieën voor integratieoplossingen

    **Stappen:**

    1. **Marktverkenning** - Evalueer leveranciers op interoperabiliteit en open standaarden
    2. **Aanbestedingseisen** - Specificeer vereisten voor API's, documentatie en support
    3. **Vendor lock-in preventie** - Stel eisen voor data-portabiliteit en open interfaces
    4. **SLA-onderhandelingen** - Definieer uptime-eisen voor kritieke integraties
    5. **TCO-evaluatie** - Beoordeel totale kosten van integratie en onderhoud

    **Template aanbestedingseis:**

    > **Interoperabiliteit:**
    Leverancier moet aantonen dat de oplossing voldoet aan Nederlandse API Design Rules en ondersteuning biedt voor Common Ground-principes. APIs moeten beschikbaar zijn in OpenAPI 3.0 specificatie met volledige documentatie.

    **Belangrijke overwegingen:**

    - Standaardisatie op Common Ground-componenten
    - Contractuele eisen voor API-backward compatibility
    - Technische support voor complexe integratieprojecten
    - Exit-strategieën en data-migratie bij leverancierswisseling

## Gerelateerde standaarden

- **[Common Ground](https://commonground.nl/)**: Een nieuwe informatiekundige visie voor moderne gegevensuitwisseling binnen de overheid. Common Ground werkt met herbruikbare componenten en het principe van 'data bij de bron' om silovorming tegen te gaan en flexibele, modulaire IT-oplossingen te realiseren.

- **[Federatieve Service Connectiviteit (FSC)](https://fsc-standaard.nl/)**: Een standaard voor een API-gateway met federatieve authenticatie. FSC beveiligt de verbindingen tussen partijen via wederzijdse digitale contracten en maakt veilige, gecontroleerde data-uitwisseling mogelijk.

- **[Digikoppeling](https://www.logius.nl/diensten/digikoppeling)**: De standaard voor elektronisch berichtenverkeer tussen overheidsorganisaties. Digikoppeling beschrijft hoe gegevens veilig kunnen worden uitgewisseld, ongeacht het achterliggende systeem.

- **[Haven](https://haven.commonground.nl/)**: Een standaard voor platformonafhankelijke cloudhosting, speciaal ontworpen voor het gemakkelijk herbruikbaar maken van applicaties tussen overheidsorganisaties.

## Gerelateerde principes

- [4. Gebruik open standaarden](../open-standaarden/index.md)
- [8. Deel, hergebruik en werk samen](../samenwerking/index.md)
- [14. Voldoe aan de servicestandaard](../servicestandaard/index.md)
