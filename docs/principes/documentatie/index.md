---
title: Documenteer je project effectief
summary: Kies de juiste documentatietools en -aanpak voor je digitale systemen
---

# Documenteer je project effectief

Goede documentatie is essentieel voor het succesvol ontwikkelen, onderhouden en overdragen van digitale systemen. Dit principe richt zich op het kiezen van de juiste documentatietools en -aanpak voor overheidsprojecten.

<div class="direct-aan-de-slag">
    <h3>Direct aan de slag</h3>

    <div class="action-cards">
        <div class="action-card">
            <span class="wip-badge wip-badge-beschikbaar">beschikbaar</span>
            <h4>MkDocs Material Template</h4>
            <p>Start met een voorgeconfigureerde MkDocs setup</p>
            <a href="https://github.com/squidfunk/mkdocs-material" class="action-button" target="_blank">Template downloaden</a>
        </div>
        <div class="action-card">
            <span class="wip-badge wip-badge-beschikbaar">beschikbaar</span>
            <h4>ADR Template</h4>
            <p>Sjabloon voor Architecture Decision Records</p>
            <a href="#architecture-decision-records-adrs" class="action-button">Template bekijken</a>
        </div>
        <div class="action-card">
            <span class="wip-badge wip-badge-beschikbaar">beschikbaar</span>
            <h4>Documentatie Checklist</h4>
            <p>Controleer of je documentatie compleet is</p>
            <a href="#implementatie-tips" class="action-button">Checklist bekijken</a>
        </div>
    </div>
</div>

## Waarom dit belangrijk is

- **Kennisoverdracht**: Documentatie zorgt ervoor dat kennis behouden blijft wanneer teamleden wisselen
- **Onderhoud**: Goed gedocumenteerde systemen zijn eenvoudiger te onderhouden en uit te breiden
- **Transparantie**: Openbare documentatie draagt bij aan transparantie van overheidshandelen
- **Samenwerking**: Heldere documentatie vergemakkelijkt samenwerking tussen teams en organisaties
- **Compliance**: Veel overheidsprojecten hebben documentatievereisten voor audit en compliance

## Documentatietools vergelijking

### Material for MkDocs (Aanbevolen)

**Voordelen:**

- Uitstekende zoekfunctionaliteit met previews
- Moderne, responsive interface
- Ondersteuning voor diagrammen (Mermaid)
- Grote community en actieve ontwikkeling
- Statische site generatie (veilig en snel)
- Markdown-gebaseerd (toegankelijk voor ontwikkelaars)

**Nadelen:**

- Beperkte out-of-the-box functionaliteit voor gestructureerde besluitvorming (ADRs)

**Gebruikt door:** AI Validatie team, Algoritmekader, FastAPI, Ruff

### Docusaurus

**Voordelen:**

- React-gebaseerd met moderne interface
- Goede ondersteuning voor versioning
- Uitbreidbaar met plugins
- Grote community (Facebook/Meta)

**Nadelen:**

- Zoekfunctionaliteit vaak afhankelijk van externe diensten (Algolia)
- Complexer dan MkDocs voor eenvoudige documentatie

**Gebruikt door:** developer.overheid.nl

### Structurizr

**Voordelen:**

- Specifiek ontworpen voor software architectuur documentatie
- Ondersteuning voor Architecture Decision Records (ADRs)
- C4 model integratie

**Nadelen:**

- Minder soepele zoekfunctionaliteit
- Beperktere community
- Focus op architectuurdocumentatie kan beperkend zijn

**Gebruikt door:** MijnOverheid Zakelijk

### Sphinx

**Voordelen:**

- Uitgebreide functionaliteit
- Sterke ondersteuning voor technische documentatie
- Automatische API documentatie generatie

**Nadelen:**

- Steilere leercurve
- Complexere configuratie
- reStructuredText i.p.v. Markdown (minder toegankelijk)

**Gebruikt door:** OpenKat (VWS)

### ReSpec

**Voordelen:**

- Specifiek voor technische standaarden
- W3C standaard
- Goede ondersteuning voor referenties en citaties

**Nadelen:**

- Geen ingebouwde zoekfunctionaliteit
- Beperkte community buiten standaardisatieorganisaties
- Minder geschikt voor algemene projectdocumentatie

**Gebruikt door:** Logius standaarden

## Gebaande paden: Material for MkDocs

Voor de meeste overheidsprojecten bevelen we **Material for MkDocs** aan als de voorkeursoplossing voor projectdocumentatie.

### Waarom Material for MkDocs?

1. **Gebruiksgemak**: Markdown is toegankelijk voor zowel technische als niet-technische teamleden
2. **Zoekfunctionaliteit**: Ingebouwde, snelle zoekfunctionaliteit zonder externe afhankelijkheden
3. **Statische generatie**: Veilig, snel en eenvoudig te hosten
4. **Proven track record**: Succesvol gebruikt in vergelijkbare overheidsprojecten
5. **Community**: Grote, actieve community en goede documentatie
6. **Uitbreidbaarheid**: Plugins voor diagrammen, tabellen, en meer

### Basissetup

Een standaard MkDocs configuratie voor overheidsprojecten:

    site_name: Project Naam
    site_description: Korte beschrijving van het project
    site_url: <https://jouw-organisatie.github.io/project-naam>
    theme:
      name: material
      palette:
        - scheme: default
          toggle:
            icon: material/weather-sunny
            name: Schakel naar donkere modus
        - scheme: slate
          toggle:
            icon: material/weather-night
            name: Schakel naar lichte modus
      features:
        - navigation.tabs
        - navigation.sections
        - navigation.expand
        - navigation.path
        - search.highlight
        - search.share
        - content.code.copy
    plugins:
        - search:
              lang: nl
        - mermaid2
    markdown_extensions:
        - pymdownx.superfences:
              custom_fences:
                   - name: mermaid
                     class: mermaid
                     format: !!python/name:pymdownx.superfences.fence_code_format
        - pymdownx.tabbed:
              alternate_style: true
        - admonition
        - pymdownx.details
        - attr_list
        - md_in_html
    nav:
        - Home: index.md
        - Architectuur: architecture/
        - Ontwikkeling: development/
        - Deployment: deployment/
        - ADRs: decisions/

### Documentatiestructuur

Aanbevolen mappenstructuur:

    docs/
    ├── index.md                 # Project overzicht
    ├── architecture/            # Architectuurdocumentatie
    │   ├── overview.md
    │   ├── components.md
    │   └── deployment.md
    ├── development/             # Ontwikkelaardocumentatie
    │   ├── setup.md
    │   ├── guidelines.md
    │   └── testing.md
    ├── decisions/               # Architecture Decision Records
    │   ├── 001-framework-choice.md
    │   └── template.md
    └── deployment/              # Implementatiedocumentatie
        ├── environments.md
        └── procedures.md

## Implementatie tips

### 1. Start eenvoudig

Begin met een basisstructuur en bouw uit naarmate het project groeit.

### 2. Gebruik templates

Creëer templates voor veelvoorkomende documenttypen zoals ADRs, API documentatie, en runbooks.

### 3. Automatiseer waar mogelijk

- Automatische generatie van API documentatie
- Regelmatige builds bij code wijzigingen
- Link checking voor broken links

### 4. Betrek het team

- Maak documentatie onderdeel van de Definition of Done
- Organiseer documentatie reviews
- Train teamleden in Markdown en MkDocs

### 5. Houd het actueel

- Koppel documentatie updates aan code wijzigingen
- Implementeer documentatie als code
- Plan regelmatige documentatie reviews

## Architecture Decision Records (ADRs)

Voor het vastleggen van belangrijke beslissingen bevelen we Architecture Decision Records aan. Deze kunnen eenvoudig worden geïntegreerd in MkDocs:

### ADR Template

    # ADR-001: [Titel van de beslissing]

## Status

[Voorgesteld | Geaccepteerd | Vervangen | Verouderd]

## Context

Beschrijf de situatie en het probleem dat een beslissing vereist.

## Beslissing

Beschrijf de gekozen oplossing en waarom deze is gekozen.

## Gevolgen

Beschrijf de gevolgen van deze beslissing, zowel positief als negatief.

## Alternatieven overwogen

Beschrijf welke andere opties zijn overwogen en waarom deze niet zijn gekozen.

## Ondersteuning en resources

- **MkDocs documentatie**: <https://www.mkdocs.org/>
- **Material for MkDocs**: <https://squidfunk.github.io/mkdocs-material/>
- **Markdown guide**: <https://www.markdownguide.org/>
- **Mermaid diagrammen**: <https://mermaid-js.github.io/mermaid/>

Door deze aanpak te volgen, creëer je documentatie die niet alleen nuttig is voor je huidige team, maar ook waarde biedt voor toekomstige ontwikkelaars en stakeholders.
