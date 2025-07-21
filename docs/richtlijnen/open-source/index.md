---
title: "3. Werk transparant en gebruik open source"
summary: Publiceer je code en gebruik open source software om transparantie, flexibiliteit en verantwoording te verbeteren.
relations:
  - open-standaarden
  - samenwerking
  - veiligheid
roles:
  - beleidsmaker: medium
  - developer: high
  - jurist: high
  - inkoper: medium
  - cxo: high
  - projectleider: high
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

    <div class="action-cards">
        <div class="action-card">
            <span class="wip-badge wip-badge-concept">concept</span>
            <h4 >Code.gov.nl</h4>
            <p >Publiceer uw code en vind overheidsprojecten</p>
            <button disabled class="action-button">Publiceren</button>
        </div>
        <div class="action-card">
            <span class="wip-badge wip-badge-beschikbaar">beschikbaar</span>
            <h4 >Licentieadvies</h4>
            <p >EUPL-1.2 voor overheidsprojecten</p>
            <a href="https://ospo-nl.github.io/kennisbank/best-practices/open-source-software-licenties/" class="action-button" target="_blank">Bekijken</a>
        </div>
        <div class="action-card">
            <span class="wip-badge wip-badge-ontwikkeling">ontwikkeling</span>
            <h4 >OSPO Toolbox</h4>
            <p >Tools voor Open Source Program Office</p>
            <a href="https://ospo-nl.github.io/kennisbank/" class="action-button" target="_blank">Verkennen</a>
        </div>
        <div class="action-card">
            <span class="wip-badge wip-badge-ontwikkeling">ontwikkeling</span>
            <h4 >Opensourcewerken</h4>
            <p >Community of practice omtrent open source werken</p>
            <a href="https://developer.overheid.nl/communities/open-source-werken" class="action-button" target="_blank">Verkennen</a>
        </div>
    </div>
</div>

=== "Beleidsmaker"
    ### Beleidskaders voor open source adoptie

    **Stappen:**
    1. **Formuleer open source beleid** - Ontwikkel kaders voor transparante overheidssoftware
    2. **Stakeholder consultatie** - Betrek burgers, bedrijfsleven bij open source strategieën
    3. **Interdepartementale afstemming** - Zorg voor consistent open source beleid
    4. **Monitor internationale ontwikkelingen** - Volg EU-initiatieven (Digital Single Market)
    5. **Stel ethische richtlijnen op** - Bepaal transparantie-eisen voor overheidssoftware

    **Belangrijke overwegingen:**
    - Balans tussen transparantie en veiligheid
    - Intellectual property rechten overheid
    - Economische impact op Nederlandse IT-sector
    - Compliance met EU-regelgeving

    **Concrete acties:**

    - Ontwikkel "open source first" beleidskaders
    - Formuleer uitzonderingscriteria voor gesloten software
    - Creëer incentives voor overheidsbrede open source adoptie
    - Stel transparantie-eisen op voor aanbestede software

=== "Bestuurder"
    ### Strategische open source governance

    **Stappen:**

    1. **Bepaal open source strategie** - Ontwikkel organisatiebrede visie op transparantie
    2. **Business case ontwikkelen** - Bereken ROI van open source vs proprietary software
    3. **Risicoanalyse** - Beoordeel security, compliance en operationele risico's
    4. **OSPO opzetten** - Implementeer Open Source Program Office
    5. **KPI's definiëren** - Stel meetbare doelen voor open source adoptie

    **Belangrijke overwegingen:**

    - TCO van open source vs proprietary licenties
    - Vendor lock-in preventie
    - Talent acquisition en retention
    - Organisatorische change management

    **Concrete acties:**

    - Stel open source governance committee op
    - Ontwikkel business case voor inner-sourcing
    - Plan gefaseerde migratie naar open source stack
    - Investeer in ontwikkelaar training open source tools

=== "Projectleider"
    ### Project implementatie van open source

    **Stappen:**

    1. **Open source assessment** - Evalueer bestaande open source alternatieven
    2. **Implementatieplan** - Ontwikkel gefaseerde overgang naar open source
    3. **Community management** - Organiseer interne en externe samenwerking
    4. **Kwaliteitsborging** - Stel processen op voor code reviews en testing
    5. **Documentatie management** - Zorg voor gebruiksvriendelijke documentatie

    **Belangrijke overwegingen:**

    - Minimale service-onderbreking tijdens transitie
    - Team training en skill development
    - Externe dependency management
    - Contributie-processen naar upstream projecten

    **Concrete acties:**

    - Gebruik open source readiness assessments
    - Plan pilot-projecten voor open source development
    - Stel contributing guidelines op voor teamleden
    - Organiseer hackathons en open source workshops

=== "Developer"
    ### Technische open source implementatie

    **Stappen:**

    1. **Code repository setup** - Configureer Git workflows en branching strategies
    2. **CI/CD pipelines** - Implementeer geautomatiseerde testing en deployment
    3. **Code quality gates** - Stel linting, security scanning en code coverage in
    4. **Documentation as code** - Integreer documentatie in development workflow
    5. **Community contributions** - Draag bij aan upstream open source projecten

    **GitHub/GitLab workflow voorbeeld:**
    ```yaml
    # .github/workflows/ci.yml
    name: CI/CD Pipeline
    on:
      push:
        branches: [ main, develop ]
      pull_request:
        branches: [ main ]

    jobs:
      test:
        runs-on: ubuntu-latest
        steps:
        - uses: actions/checkout@v3
        - name: Setup Node.js
          uses: actions/setup-node@v3
          with:
            node-version: '18'
        - name: Install dependencies
          run: npm ci
        - name: Run tests
          run: npm test
        - name: Security audit
          run: npm audit --audit-level=high
        - name: License compliance check
          run: npx license-checker --onlyAllow 'MIT;Apache-2.0;BSD-3-Clause;EUPL-1.2'
    ```

    **Code-voorbeeld - EUPL-1.2 header:**
    ```javascript
    /**
     * Nederlandse Overheids Software
     *
     * Licensed under the EUPL, Version 1.2 or – as soon they will be approved by
     * the European Commission - subsequent versions of the EUPL (the "Licence");
     * You may not use this work except in compliance with the Licence.
     * You may obtain a copy of the Licence at:
     *
     * https://joinup.ec.europa.eu/software/page/eupl
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the Licence is distributed on an "AS IS" basis,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the Licence for the specific language governing permissions and
     * limitations under the Licence.
     */
    ```

    **Belangrijke overwegingen:**

    - Dependency vulnerability management
    - SBOM (Software Bill of Materials) generatie
    - Geautomatiseerde licentie compliance checking
    - Security-first development practices

=== "Jurist"
    ### Juridische compliance voor open source

    **Stappen:**

    1. **Licentie-analyse** - Beoordeel compatibility verschillende open source licenties
    2. **IP-rechten management** - Zorg voor duidelijke ownership en contribution agreements
    3. **Compliance monitoring** - Stel processen op voor licentie-naleving
    4. **Aansprakelijkheid** - Analyseer juridische risico's van open source gebruik
    5. **Privacy compliance** - Toets open source tools op GDPR-naleving

    **Licentie-compatibiliteit matrix:**
    | Licentie | EUPL-1.2 | MIT | Apache-2.0 | GPL-3.0 |
    |----------|----------|-----|------------|----------|
    | EUPL-1.2 | ✅ | ✅ | ✅ | ✅ |
    | MIT | ✅ | ✅ | ✅ | ❌ |
    | Apache-2.0 | ✅ | ✅ | ✅ | ❌ |
    | GPL-3.0 | ✅ | ❌ | ❌ | ✅ |

    **Belangrijke overwegingen:**

    - Wederkerigheid (copyleft) vs permissive licenties
    - Patent-clausules in moderne licenties
    - Liability en warranty disclaimers
    - Export control compliance

    **Concrete acties:**

    - Ontwikkel juridische checklists voor open source adoptie
    - Stel template Contributor License Agreements op
    - Adviseer over EUPL-1.2 vs andere licenties
    - Monitor wijzigingen in licentie-landschap

=== "Inkoper"
    ### Inkoopoverwegingen open source vs proprietary

    **Stappen:**

    1. **TCO-analyse** - Vergelijk totale kosten open source vs proprietary oplossingen
    2. **Leveranciersevaluatie** - Beoordeel open source support providers
    3. **SLA-onderhandelingen** - Stel eisen voor support en maintenance
    4. **Exit-strategieën** - Zorg voor vendor lock-in preventie
    5. **Contract management** - Monitor naleving open source licenties

    **TCO-vergelijking template:**

    | Kostenpost | Open Source | Proprietary |
    |------------|-------------|-------------|
    | Licentiekosten | €0 | €50.000/jaar |
    | Implementatie | €25.000 | €30.000 |
    | Support | €15.000/jaar | Inbegrepen |
    | Customization | €10.000 | €40.000 |
    | Training | €5.000 | €2.000 |
    | **Totaal (3 jaar)** | **€85.000** | **€222.000** |

    **Aanbestedingseis voorbeeld:**

    > **Open source voorkeur:**
    Aanbieder dient aan te tonen waarom proprietary software noodzakelijk is indien geen open source alternatief wordt voorgesteld. Open source oplossingen krijgen 10% voorkeur in gunningscriteria.

    **Belangrijke overwegingen:**

    - Vendor lock-in risico's
    - Community vs commerciële support
    - Intellectual property ownership
    - Long-term sustainability projecten

    **Concrete acties:**

    - Ontwikkel open source assessment frameworks
    - Stel contractuele eisen op voor source code toegang
    - Evalueer open source support ecosysteem
    - Onderhandel over contributie-rechten bij customizations

## Gerelateerde hulpmiddelen

- [Opensourcewerken community](https://developer.overheid.nl/communities/open-source-werken) - Community van het Ministerie van Binnenlandse Zaken voor praktische kennis, een forum om ervaringen te delen en informatie over relevante regelgeving voor open source werken.

- [OSPO-NL Kennisbank](https://ospo-nl.github.io/kennisbank/) - Verzameling van kennis over het opzetten van een Open Source Program Office (OSPO) binnen de Nederlandse overheid, met praktische handleidingen en richtlijnen voor het werken met open source.

- [Instructie Rijksdienst bij aanschaf ICT-diensten of ICT-producten](https://wetten.overheid.nl/BWBR0024717/2008-11-23) - Officiële instructie die voorschrijft dat bij de aanschaf van ICT-diensten of -producten door de Rijksoverheid, open standaarden moeten worden geëist.

## Gerelateerde richtlijnen

- [4. Gebruik open standaarden](../open-standaarden/index.md)
- [6. Maak veilige systemen](../veiligheid/index.md)
- [8. Deel, hergebruik en werk samen](../samenwerking/index.md)
