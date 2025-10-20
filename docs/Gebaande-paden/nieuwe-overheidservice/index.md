---
title: Nieuwe overheidsservice
summary: Stapsgewijze handleiding voor het opzetten van een nieuwe digitale overheidsservice
---

# Nieuwe Overheidsservice

Dit gebaande pad biedt een stapsgewijze aanpak voor het ontwikkelen en lanceren van een nieuwe digitale overheidsservice, van concept tot productie.

```mermaid
gantt
 dateFormat YYYY-MM-DD
 title Nieuwe overheidsservice - Hoofdfasen overzicht
 excludes weekends
 
 section Fase 1: Foundation & Strategische Keuze
 Foundation & Analyse               :crit, foundation, 2024-01-08, 5w
 Richtingkeuze (Make vs Buy)        :crit, choice, after foundation, 3w
 Strategische richting bepaald       :milestone, m1, after choice, 0d
 
 section Fase 2: Procurement & Setup Route
 Inkoop Route (indien van toepassing) :buy_route, after m1, 13w
 Maatwerk Route (indien van toepassing) :make_route, after m1, 5w
 Technische Opstelling (beide routes) :tech_setup, after buy_route, 3w
 Development ready                   :milestone, m2, after tech_setup, 0d
 
 section Fase 3: Iteratieve Ontwikkeling & Kwaliteit
 Ontwikkelcyclus (5-6 sprints)      :crit, development, after m2, 16w
 Continu: Kwaliteitsbewaking        :quality_assurance, after m2, 16w
 MVP gereed                         :milestone, m3, after development, 0d
 
 section Fase 4: Validatie & Uitrol
 Pilot & Validatie                  :validation, after m3, 7w
 Production Deployment              :deployment, after validation, 2w
 Service operationeel               :milestone, m4, after deployment, 0d
 
 section Fase 5: Operationeel Beheer
 Overdracht & Operationalisatie     :handover, after m4, 3w
 Structureel Onderhoud & Doorontwikkeling :maintenance, after handover, 48w
```

## Projectstappen

<div class="gantt-timeline">
    <h3>Projectverloop (klik op een stap voor details)</h3>

    <div class="gantt-chart">
        <!-- Stap 1 -->
        <a href="stap-1-behoefteanalyse/" class="gantt-bar" style="left: 0%; width: 15%; top: 0;" title="Stap 1: Behoefteanalyse & Businesscase">
            <span class="gantt-label">1</span>
            <span class="gantt-sublabel">Behoefteanalyse</span>
        </a>

        <!-- Stap 2 -->
        <a href="stap-2-technische-opstelling/" class="gantt-bar" style="left: 16%; width: 10%; top: 0;" title="Stap 2: Technische opstelling & beveiligingskaders">
            <span class="gantt-label">2</span>
            <span class="gantt-sublabel">Technisch</span>
        </a>

        <!-- Stap 2b (parallel, daarom zelfde left maar andere top) -->
        <a href="stap-2b-inkoop/" class="gantt-bar gantt-bar-parallel" style="left: 16%; width: 8%; top: 60px;" title="Stap 2b: Inkoop & Leveranciersselectie (parallel met stap 2)">
            <span class="gantt-label">2b</span>
            <span class="gantt-sublabel">Inkoop ↕</span>
        </a>

        <!-- Stap 3 -->
        <a href="stap-3-ontwikkelomgeving/" class="gantt-bar" style="left: 27%; width: 5%; top: 0;" title="Stap 3: Ontwikkelomgeving Opzetten">
            <span class="gantt-label">3</span>
            <span class="gantt-sublabel">Omgeving</span>
        </a>

        <!-- Stap 4 (grootste, kritiek pad) -->
        <a href="stap-4-ontwikkeling/" class="gantt-bar gantt-bar-critical" style="left: 33%; width: 50%; top: 0;" title="Stap 4: Ontwikkeling & Testen">
            <span class="gantt-label">4</span>
            <span class="gantt-sublabel">Ontwikkeling & Testen</span>
        </a>

        <!-- Stap 5 -->
        <a href="stap-5-compliance/" class="gantt-bar" style="left: 84%; width: 10%; top: 0;" title="Stap 5: Compliance & Beveiligingsaudit">
            <span class="gantt-label">5</span>
            <span class="gantt-sublabel">Compliance</span>
        </a>

        <!-- Stap 6 -->
        <a href="stap-6-uitrol/" class="gantt-bar" style="left: 95%; width: 5%; top: 0;" title="Stap 6: Uitrol & Productiegang">
            <span class="gantt-label">6</span>
            <span class="gantt-sublabel">Uitrol</span>
        </a>
    </div>

    <div class="timeline-legend">
        <span>💡 De lengte van elke balk toont relatieve inspanning. Stap 2b loopt parallel met stap 2.</span>
    </div>
</div>



<html>
<body>
    <div class="container">

        <div class="roadmap-container">

            <div class="roadmap-steps">
                <a href="stap-1-behoefteanalyse/" class="roadmap-step-link">
                    <div class="roadmap-step">
                        <div class="step-number">stap 1</div>
                        <h4 class="step-title">Behoefteanalyse & Businesscase</h4>
                        <div class="step-complexity">📊 Gemiddelde complexiteit (~15% van project)</div>
                        <div class="step-roles">
                            <span class="role-tag">Beleid en Advies</span>
                            <span class="role-tag">Bestuurder</span>
                            <span class="role-tag">Projectleider</span>
                        </div>
                        <div class="step-result">
                            <div class="result-label">Hoofdresultaat:</div>
                            <div class="result-text">Goedgekeurde businesscase</div>
                        </div>
                    </div>
                </a>

                <a href="stap-2-technische-opstelling/" class="roadmap-step-link">
                    <div class="roadmap-step">
                        <div class="step-number">stap 2</div>
                        <h4 class="step-title">Technische opstelling & beveiligingskaders</h4>
                        <div class="step-complexity">📊 Gemiddelde complexiteit (~10% van project)</div>
                        <div class="step-roles">
                            <span class="role-tag">Ontwikkelaar</span>
                            <span class="role-tag">Jurist</span>
                        </div>
                        <div class="step-result">
                            <div class="result-label">Hoofdresultaat:</div>
                            <div class="result-text">Technische opstellingsdocument (met verwijzingen naar NORA-bouwstenen, GEMMA-modellen, Common Ground principes).</div>
                        </div>
                    </div>
                </a>

                <a href="stap-2b-inkoop/" class="roadmap-step-link">
                    <div class="roadmap-step">
                        <div class="step-number">stap 2b</div>
                        <h4 class="step-title">Inkoop & Leveranciersselectie</h4>
                        <div class="step-complexity">📊 Kleine complexiteit (~5% van project)</div>
                        <div class="step-roles">
                            <span class="role-tag">Inkoper</span>
                            <span class="role-tag">Projectleider</span>
                        </div>
                        <div class="step-result">
                            <div class="result-label">Hoofdresultaat:</div>
                            <div class="result-text">Contracten en leveranciers</div>
                        </div>
                        <div class="parallel-note">💡 Kan parallel lopen met stap 2</div>
                    </div>
                </a>

                <a href="stap-3-ontwikkelomgeving/" class="roadmap-step-link">
                    <div class="roadmap-step">
                        <div class="step-number">stap 3</div>
                        <h4 class="step-title">Ontwikkelomgeving Opzetten</h4>
                        <div class="step-complexity">📊 Kleine complexiteit (~5% van project)</div>
                        <div class="step-roles">
                            <span class="role-tag">Ontwikkelaar</span>
                            <span class="role-tag">Projectleider</span>
                        </div>
                        <div class="step-result">
                            <div class="result-label">Hoofdresultaat:</div>
                            <div class="result-text">Werkende CI/CD-pipeline</div>
                        </div>
                    </div>
                </a>

                <a href="stap-4-ontwikkeling/" class="roadmap-step-link">
                    <div class="roadmap-step">
                        <div class="step-number">stap 4</div>
                        <h4 class="step-title">Ontwikkeling & Testen</h4>
                        <div class="step-complexity">📊 Hoge complexiteit (~50% van project)</div>
                        <div class="step-roles">
                            <span class="role-tag">Ontwikkelaar</span>
                            <span class="role-tag">Projectleider</span>
                        </div>
                        <div class="step-result">
                            <div class="result-label">Hoofdresultaat:</div>
                            <div class="result-text">Geteste minimaal werkende versie</div>
                        </div>
                    </div>
                </a>

                <a href="stap-5-compliance/" class="roadmap-step-link">
                    <div class="roadmap-step">
                        <div class="step-number">stap 5</div>
                        <h4 class="step-title">Compliance & Beveiligingsaudit</h4>
                        <div class="step-complexity">📊 Gemiddelde complexiteit (~10% van project)</div>
                        <div class="step-roles">
                            <span class="role-tag">Jurist</span>
                            <span class="role-tag">Beleid en Advies</span>
                        </div>
                        <div class="step-result">
                            <div class="result-label">Hoofdresultaat:</div>
                            <div class="result-text">Beveiligingscertificering</div>
                        </div>
                    </div>
                </a>

                <a href="stap-6-uitrol/" class="roadmap-step-link">
                    <div class="roadmap-step">
                        <div class="step-number">stap 6</div>
                        <h4 class="step-title">Uitrol & Productiegang</h4>
                        <div class="step-complexity">📊 Kleine complexiteit (~5% van project)</div>
                        <div class="step-roles">
                            <span class="role-tag">Ontwikkelaar</span>
                            <span class="role-tag">Bestuurder</span>
                        </div>
                        <div class="step-result">
                            <div class="result-label">Hoofdresultaat:</div>
                            <div class="result-text">Operationele dienst</div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
</html>


<!-- ## Stap 1: Behoefteanalyse & businesscase



**🎯 Doel:** Valideer de behoefte en creëer een solide basis voor de dienst

### Rollen
- **Beleid en Advies** - Behoefteanalyse en proceskartering
- **Bestuurder** - Strategische beslissingen en begrotingsgoedkeuring
- **Projectleider** - Projectplanning, belanghebbendenbeheer en scopebeheer

### Hoe doe je dit? 

<div class="action-cards">
    <div class="action-card">
        <span class="wip-badge wip-badge-beschikbaar">beschikbaar</span>
        <h4>Onderzoeksrichtlijnen</h4>
        <p>Toolkit voor gebruikersonderzoek</p>
        <a href="https://toolkittaal.gebruikercentraal.nl/richtlijnen/" class="action-button" target="_blank">Bekijken</a>
    </div>
    <div class="action-card">
        <span class="wip-badge wip-badge-beschikbaar">beschikbaar</span>
        <h4>Gebruikersonderzoeken.nl</h4>
        <p>Database van uitgevoerde gebruikersonderzoeken</p>
        <a href="https://gebruikersonderzoeken.nl/docs/onderzoek-bekijken" class="action-button" target="_blank">Bekijken</a>
    </div>
</div>

### Tijdsindicatie
⏱️ **2-4 weken** (afhankelijk van complexiteit en aantal stakeholders)

### Relevante NeRDS Richtlijnen
- **[Richtlijn 1: Stel gebruikersbehoeften vast](../../richtlijnen/gebruikersbehoeften/)** - Begrijp je gebruikers en hun behoeften
- **[Richtlijn 12: Definieer je inkoopstrategie](../../richtlijnen/inkoop/)** - Overweeg commerciële en technologische aspecten

### Te behalen resultaten
- [ ] **Businesscasedocument** - ROI, doelgroep, scope
- [ ] **Gebruikersverhalen & Eisen** - Functionele en non-functionele eisen
- [ ] **Belanghebbendenafstemming** - Goedkeuring van betrokken partijen
- [ ] **Succesindicatoren** - KPI's voor het meten van succes

---

## Stap 2: Technische opstelling & beveiligingskaders

**🎯 Doel:** Ontwerp een schaalbare en veilige technische oplossing

### Rollen
- **Ontwikkelaar** - Technische architectuur en systeemontwerp
- **Jurist** - Privacy-, beveiligings- en compliance-eisen

### Tools

<div class="action-cards">
    <div class="action-card">
        <span class="wip-badge wip-badge-beschikbaar">beschikbaar</span>
        <h4>BIO Wizard</h4>
        <p>Bepaal verplichte beveiligingsmaatregelen</p>
        <a href="https://bio-overheid.nl/ico-wizard" class="action-button" target="_blank">Starten</a>
    </div>
    <div class="action-card">
        <span class="wip-badge wip-badge-beschikbaar">beschikbaar</span>
        <h4>Open Standaarden Beslisboom</h4>
        <p>Bepaal welke standaarden van toepassing zijn</p>
        <a href="https://www.forumstandaardisatie.nl/beslisboom/beslisboom-open-standaarden" class="action-button" target="_blank">Starten</a>
    </div>
    <div class="action-card">
        <span class="wip-badge wip-badge-beschikbaar">beschikbaar</span>
        <h4>Nederlandse API Strategie</h4>
        <p>Richtlijnen voor API-ontwikkeling</p>
        <a href="https://docs.geostandaarden.nl/api/API-Strategie/" class="action-button" target="_blank">Bekijken</a>
    </div>
    <div class="action-card">
        <span class="wip-badge wip-badge-beschikbaar">beschikbaar</span>
        <h4>NORA</h4>
        <p>Nederlandse Overheid Referentie Architectuur</p>
        <a href="https://www.noraonline.nl/" class="action-button" target="_blank">Raadplegen</a>
    </div>
</div>

### Tijdsindicatie
⏱️ **1-3 weken**

### Relevante NeRDS Richtlijnen
- **[Richtlijn 4: Gebruik open standaarden](../../richtlijnen/open-standaarden/)** - Zorg voor interoperabiliteit
- **[Richtlijn 5: Hanteer een cloud-gedreven strategie](../../richtlijnen/cloud/)** - Overweeg cloudoplossingen
- **[Richtlijn 6: Maak veilige systemen](../../richtlijnen/veiligheid/)** - Juiste beveiligingsniveau
- **[Richtlijn 7: Maak privacy integraal](../../richtlijnen/privacy/)** - Bescherm gebruikersrechten
- **[Richtlijn 9: Integreer en pas technologie aan](../../richtlijnen/integratie/)** - Werk met bestaande systemen

### Te behalen resultaten
- [ ] **Oplossingsarchitectuurdocument** - High-level en detailarchitectuur
- [ ] **Beveiligings- & Privacyontwerp** - AVG-compliance, beveiligingsmaatregelen
- [ ] **Technologie Stack** - Frontend-, backend- en databasekeuzes
- [ ] **Integratieplan** - In lijn met referentiearchitecturen en standaarden
---

## Stap 2b: Inkoop & Leveranciersselectie

**🎯 Doel:** Selecteer leveranciers en sluit overeenkomsten af voor externe diensten

### Rollen
- **Inkoper** - Inkoopproces en contractonderhandelingen
- **Projectleider** - Eisenvertaling en leverancierevaluatie

### Tools

<div class="action-cards">
    <div class="action-card">
        <span class="wip-badge wip-badge-beschikbaar">beschikbaar</span>
        <h4>MVI-criteria</h4>
        <p>Criteria voor duurzaam inkopen</p>
        <a href="https://www.pianoo.nl/nl/themas/maatschappelijk-verantwoord-inkopen/productgroepen-en-mvi-criteria" class="action-button" target="_blank">Bekijken</a>
    </div>
    <div class="action-card">
        <span class="wip-badge wip-badge-beschikbaar">beschikbaar</span>
        <h4>Inkoopkompas</h4>
        <p>Kennisplatform voor ICT-inkoop</p>
        <a href="https://www.pianoo.nl/nl/sectoren/ict" class="action-button" target="_blank">Verkennen</a>
    </div>
    <div class="action-card">
        <span class="wip-badge wip-badge-beschikbaar">beschikbaar</span>
        <h4>Algoritmekader</h4>
        <p>Richtlijn voor inkoop van verantwoorde algoritmes</p>
        <a href="https://minbzk.github.io/Algoritmekader/onderwerpen/publieke-inkoop/" class="action-button" target="_blank">Verkennen</a>
    </div>
    <div class="action-card">
        <span class="wip-badge wip-badge-extern">extern</span>
        <h4>TenderNed</h4>
        <p>Nederlandse aanbestedingsplatform</p>
        <button disabled class="action-button">Extern</button>
    </div>
    <div class="action-card">
        <span class="wip-badge wip-badge-extern">extern</span>
        <h4>Mercell</h4>
        <p>Europees aanbestedingsplatform</p>
        <button disabled class="action-button">Extern</button>
    </div>
</div>

### Tijdsindicatie
⏱️ **1-2 weken**

### Relevante NeRDS Richtlijnen
- **[Richtlijn 12: Definieer je inkoopstrategie](../../richtlijnen/inkoop/)** - Commerciële en technologische aspecten
- **[Richtlijn 3: Werk transparant en gebruik open source](../../richtlijnen/open-source/)** - Transparantie in leveranciersselectie

### Te behalen resultaten
- [ ] **Leveranciersselectie** - Geselecteerde partners voor ontwikkeling/hosting
- [ ] **Overeenkomsten** - Ondertekende dienstenniveauovereenkomsten
- [ ] **Inkoopstrategie** - Gedocumenteerde onderbouwing voor keuzes
- [ ] **Leveranciersmanagementplan** - Proces voor leveranciersbeheer

---

## Stap 3: Ontwikkelomgeving Opzetten

**🎯 Doel:** Zet een professionele ontwikkelomgeving op

### Rollen
- **Ontwikkelaar** - Technische omgeving en tooling opzet
- **Projectleider** - Planning en coördinatie van setup

### Tools

<div class="action-cards">
    <div class="action-card">
        <span class="wip-badge wip-badge-ontwikkeling">ontwikkeling</span>
        <h4>OSPO Toolbox</h4>
        <p>Tools voor Open Source Program Office</p>
        <a href="https://ospo-nl.github.io/kennisbank/" class="action-button" target="_blank">Verkennen</a>
    </div>
    <div class="action-card">
        <span class="wip-badge wip-badge-beschikbaar">beschikbaar</span>
        <h4>Licentieadvies</h4>
        <p>EUPL-1.2 voor overheidsprojecten</p>
        <a href="https://ospo-nl.github.io/kennisbank/best-practices/open-source-software-licenties/" class="action-button" target="_blank">Bekijken</a>
    </div>
     <div class="action-card">
        <span class="wip-badge wip-badge-ontwikkeling">ontwikkeling</span>
        <h4 >Publiccode.yaml</h4>
        <p >Community of practice omtrent open source werken</p>
        <a href="https://developer.overheid.nl/kennisbank/open-source/standaarden/" class="action-button" target="_blank">Toepassen</a>
    </div>
    <div class="action-card">
        <span class="wip-badge wip-badge-extern">extern</span>
        <h4>GitLab CI/GitHub Actions</h4>
        <p>Version control, continuous integration en deployment</p>
        <button disabled class="action-button">Extern</button>
    </div>
    <div class="action-card">
        <span class="wip-badge wip-badge-extern">extern</span>
        <h4>Authentication & Authorization</h4>
        <p>DigiD, eHerkenning, eIDAS, OAuth 2.0, PKIoverheid, SAML, OpenID Connect (OIDC), Baseline Informatiebeveiliging Overheid (BIO), NIS2 etc
        </p>
        <a href="https://developer.overheid.nl/kennisbank/security/standaarden/" class="action-button" target="_blank">Toepassen</a>
    </div>
</div>

### Tijdsindicatie
⏱️ **1 week**

### Relevante NeRDS Richtlijnen
- **[Richtlijn 3: Werk transparant en gebruik open source](../../richtlijnen/open-source/)** - Publiceer je code en gebruik open source
- **[Richtlijn 8: Deel, hergebruik en werk samen](../../richtlijnen/samenwerking/)** - Vermijd dubbel werk

### Te behalen resultaten
- [ ] **Git Repository** - Met branchstrategie en commitrichtlijnen
- [ ] **CI/CD-Pipeline** - Geautomatiseerde build, test, uitrol
- [ ] **Ontwikkelomgeving** - Lokale setupdocumentatie
- [ ] **Beveiligingsscan** - Geïntegreerde beveiligingscontroles

---

## Stap 4: Ontwikkeling & Testen

**🎯 Doel:** Ontwikkel en test een minimaal werkende versie

### Rollen
- **Ontwikkelaar** - Volledige applicatieontwikkeling en testen
- **Projectleider** - Voortgangsbewaking en middelenbeheer

### Tools

<div class="action-cards">
    <div class="action-card">
        <span class="wip-badge wip-badge-beschikbaar">beschikbaar</span>
        <h4>NL Design System</h4>
        <p>Toegankelijke componenten</p>
        <a href="https://developer.overheid.nl/kennisbank/front-end/nl-design-system/aan-de-slag-met-nl-design-system" class="action-button" target="_blank">Gebruiken</a>
    </div>
    <div class="action-card">
        <span class="wip-badge wip-badge-beschikbaar">beschikbaar</span>
        <h4>WCAG-EM Reporter</h4>
        <p>Tool voor het maken van toegankelijkheidsrapporten</p>
        <a href="https://gitlab.com/digilab.overheid.nl/ecosystem/wcag-em-reporter" class="action-button" target="_blank">Gebruiken</a>
    </div>
    <div class="action-card">
        <span class="wip-badge wip-badge-beschikbaar">beschikbaar</span>
        <h4>API Design Rules (ADR)</h4>
        <p>Tool voor het maken van toegankelijkheidsrapporten</p>
        <a href="https://developer.overheid.nl/kennisbank/apis/api-design-rules/" class="action-button" target="_blank">Gebruiken</a>
    </div>
    <div class="action-card">
        <span class="wip-badge wip-badge-ontwikkeling">ontwikkeling</span>
        <h4>Inclusief Ontwerpen</h4>
        <p>Toolkit voor inclusief ontwerp</p>
        <a href="https://toolkitinclusie.gebruikercentraal.nl/" class="action-button" target="_blank">Bekijken</a>
    </div>
     <div class="action-card">
        <span class="wip-badge wip-badge-beschikbaar">beschikbaar</span>
        <h4 >Deque Axe</h4>
        <p >Toegankelijkheidstester voor webapplicaties</p>
        <a href="https://www.deque.com/axe/" class="action-button" target="_blank">Gebruiken</a>
    </div>
</div>

### Tijdsindicatie
⏱️ **6-12 weken** (afhankelijk van complexiteit)

### Relevante NeRDS Richtlijnen
- **[Richtlijn 1: Stel gebruikersbehoeften vast](../../richtlijnen/gebruikersbehoeften/)** - Focus op gebruikerservaringen
- **[Richtlijn 2: Zorg voor toegankelijkheid en inclusie](../../richtlijnen/toegankelijkheid/)** - Toegankelijk voor alle gebruikers
- **[Richtlijn 10: Maak beter gebruik van data](../../richtlijnen/data/)** - Effectieve data-architectuur
- **[Richtlijn 13: Maak je technologie duurzaam](../../richtlijnen/duurzaamheid/)** - Duurzame ontwikkeling

### Te behalen resultaten
- [ ] **Werkende Minimaal Werkende Versie** - Kernfunctionaliteit geïmplementeerd
- [ ] **Testdekking** - >80% codedekking, geautomatiseerde tests
- [ ] **Documentatie** - API-documentatie, gebruikershandleiding, uitrolgids
- [ ] **Prestatiemetingen** - Belastingtestresultaten

---

## Stap 5: Compliance & Beveiligingsaudit

**🎯 Doel:** Verzeker compliance met overheidsregulaties en beveiligingsstandaarden

### Rollen
- **Jurist** - Compliance, privacy en security audit coördinatie
- **Beleid en Advies** - Beleidsmatige toetsing en kwaliteitsborging

### Tools

<div class="action-cards">
    <div class="action-card">
        <span class="wip-badge wip-badge-beschikbaar">beschikbaar</span>
        <h4>OpenKAT</h4>
        <p>Open source security tooling</p>
        <a href="https://github.com/minvws/nl-kat-coordination" class="action-button" target="_blank">Gebruiken</a>
    </div>
    <div class="action-card">
        <span class="wip-badge wip-badge-beschikbaar">beschikbaar</span>
        <h4>Internet.nl</h4>
        <p>Test veiligheid van je website of e-mail</p>
        <a href="https://internet.nl/" class="action-button" target="_blank">Testen</a>
    </div>
    <div class="action-card">
        <span class="wip-badge wip-badge-beschikbaar">beschikbaar</span>
        <h4>DPIA Formulier</h4>
        <p>Online gegevensbeschermingseffectbeoordeling</p>
        <a href="https://minbzk.github.io/par-dpia-form/" class="action-button" target="_blank">Starten</a>
    </div>
    <div class="action-card">
        <span class="wip-badge wip-badge-extern">extern</span>
        <h4>W3C Toegankelijkheidsscan</h4>
        <p>Test webpagina's op toegankelijkheid</p>
        <button disabled class="action-button">Extern</button>
    </div>
    <div class="action-card">
        <span class="wip-badge wip-badge-extern">extern</span>
        <h4>OWASP ZAP</h4>
        <p>Security scanning tool</p>
        <button disabled class="action-button">Extern</button>
    </div>
    <div class="action-card">
        <span class="wip-badge wip-badge-extern">extern</span>
        <h4>Burp Suite</h4>
        <p>Web application security testing</p>
        <button disabled class="action-button">Extern</button>
    </div>
</div>

### Tijdsindicatie
⏱️ **2-3 weken**

### Relevante NeRDS Richtlijnen
- **[Richtlijn 2: Zorg voor toegankelijkheid en inclusie](../../richtlijnen/toegankelijkheid/)** - WCAG compliance
- **[Richtlijn 6: Maak veilige systemen](../../richtlijnen/veiligheid/)** - Security audit en testing
- **[Richtlijn 7: Maak privacy integraal](../../richtlijnen/privacy/)** - Privacy impact assessment
- **[Richtlijn 11: Pas algoritmen verantwoord toe](../../richtlijnen/algoritmen/)** - Als AI/algoritmen gebruikt worden

### Te behalen resultaten
- [ ] **Beveiligingsauditrapport** - Penetratietestresultaten
- [ ] **AVG-Compliance Certificaat** - Privacy-impactbeoordeling
- [ ] **Toegankelijkheidscertificaat** - WCAG 2.1 AA-compliance
- [ ] **Risicobeoordeling** - Geïdentificeerde risico's en mitigaties

---

## Stap 6: Uitrol & Productiegang

**🎯 Doel:** Lanceer de dienst veilig in productie

### Rollen
- **Ontwikkelaar** - Technische deployment en monitoring opzet
- **Bestuurder** - Go/no-go beslissing en externe communicatie

### Tools

<div class="action-cards">
    <div class="action-card">
        <span class="wip-badge wip-badge-beschikbaar">beschikbaar</span>
        <h4>Haven</h4>
        <p>Platformonafhankelijke cloudhosting</p>
        <a href="https://haven.commonground.nl/" class="action-button" target="_blank">Ontdekken</a>
    </div>
    <div class="action-card">
        <span class="wip-badge wip-badge-beschikbaar">beschikbaar</span>
        <h4>CommonGround</h4>
        <p>Visie voor moderne gegevensuitwisseling</p>
        <a href="https://commonground.nl/" class="action-button" target="_blank">Leren</a>
    </div>
    <div class="action-card">
        <span class="wip-badge wip-badge-beschikbaar">beschikbaar</span>
        <h4>Developer Community</h4>
        <p>Communities voor overheidsontwikkelaars</p>
        <a href="https://developer.overheid.nl/" class="action-button" target="_blank">Deelnemen</a>
    </div>
    <div class="action-card">
        <span class="wip-badge wip-badge-extern">extern</span>
        <h4>Docker & Kubernetes</h4>
        <p>Containerisatie en orchestratie</p>
        <button disabled class="action-button">Extern</button>
    </div>
    <div class="action-card">
        <span class="wip-badge wip-badge-extern">extern</span>
        <h4>Application Insights</h4>
        <p>Application performance monitoring</p>
        <button disabled class="action-button">Extern</button>
    </div>
    <div class="action-card">
        <span class="wip-badge wip-badge-extern">extern</span>
        <h4>ServiceNow/Zendesk</h4>
        <p>Support en incident management</p>
        <button disabled class="action-button">Extern</button>
    </div>
</div>

### Tijdsindicatie
⏱️ **1 week**

### Relevante NeRDS Richtlijnen
- **[Richtlijn 13: Maak je technologie duurzaam](../../richtlijnen/duurzaamheid/)** - Duurzame productieomgeving
- **[Richtlijn 14: Voldoe aan de servicestandaard](../../richtlijnen/servicestandaard/)** - Service excellence

### Te behalen resultaten
- [ ] **Productie-uitrol** - Dienst operationeel en toegankelijk
- [ ] **Monitoringdashboard** - Real-time status- en prestatiemetrieken
- [ ] **Incidentresponsplan** - Escalatieprocedures en contactpersonen
- [ ] **Gebruikerscommunicatie** - Lanceringscommunicatie en trainingsmateriaal

---

## Checkpoints & Validatie

Na elke stap:
- **Demo** aan stakeholders
- **Documentatie review** door peers
- **Beveiligingscontrole** door beveiligingsfunctionaris
- **Go/No-go beslissing** voor volgende stap

## Veelvoorkomende Uitdagingen

| Uitdaging | Oplossing | Preventie |
|-----------|-----------|-----------|
| Scopevervaging | Wekelijkse belanghebbendenbeoordeling | Duidelijke eisenstop |
| Beveiligingsproblemen | Security-by-design benadering | Vroege betrokkenheid beveiligingsteam |
| Integratieproblemen | Vroeg API-testen | Proof-of-concept integraties |
| Prestatieproblemen | Belastingtesten in ontwikkelfase | Prestatiebudgetten definiëren |

## Resources & Templates

- [Businesscasesjabloon](#)
- [Beveiligingschecklist](#)
- [Productiechecklijst](#)
- [Architectuurbeslissingsdocumenten](#) -->
