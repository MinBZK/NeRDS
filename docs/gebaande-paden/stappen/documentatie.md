---
title: Documentatie opzetten
id: urn:nl:nerds:gp:01
toelichting: Stap-voor-stap implementatie van effectieve projectdocumentatie
rollen: [Developer, Product Owner, Architect, Team Lead]
levenscyclus: [Ontdekking, Ontwerp, Ontwikkeling, Beheer]
complexiteit: Basis
tijdsinvestering: 1-2 dagen
principes:
- Transparantie
- Samenwerking
- Open Source
hide:
- navigation
- toc

---

## Overzicht

Dit gebaande pad leidt je door het opzetten van effectieve projectdocumentatie met Material for MkDocs, van eerste setup tot automatisering.

## Stappen

### 1. Voorbereiding (30 min)

**Doel:** Bepaal documentatiebehoefte en doelgroep

**Acties:**

- [ ] Inventariseer wie de documentatie gaat gebruiken
- [ ] Bepaal welke informatie gedocumenteerd moet worden
- [ ] Check of je team vertrouwd is met Markdown

**Deliverable:** Documentatie requirements document

### 2. Basis setup (1 uur)

**Doel:** Werkende MkDocs installatie

**Acties:**

- [ ] Installeer MkDocs Material: `pip install mkdocs-material`
- [ ] Download en configureer [MkDocs Material template](https://github.com/squidfunk/mkdocs-material)
- [ ] Pas `mkdocs.yml` aan met projectspecifieke instellingen
- [ ] Test lokaal: `mkdocs serve`

**Deliverable:** Werkende lokale documentatie site

### 3. Structuur creëren (2 uur)

**Doel:** Logische documentatie-indeling

**Acties:**

- [ ] Maak mappenstructuur aan volgens template:

```bash
  docs/
  ├── index.md
  ├── architecture/
  ├── development/
  ├── decisions/
  └── deployment/
```

- [ ] Schrijf placeholder content voor elke sectie
- [ ] Configureer navigatie in `mkdocs.yml`

**Deliverable:** Complete documentatiestructuur

### 4. ADR template implementeren (1 uur)

**Doel:** Besluitvorming documenteren

**Acties:**

- [ ] Kopieer ADR template naar `docs/decisions/template.md`
- [ ] Schrijf eerste ADR over documentatie toolkeuze
- [ ] Link ADRs in hoofdnavigatie

**Deliverable:** ADR systeem ready-to-use

### 5. Automatisering setup (2 uur)

**Doel:** Documentatie als code implementeren

**Acties:**

- [ ] Setup GitHub Actions/GitLab CI voor automatische builds
- [ ] Configureer automatische deployment naar GitHub Pages
- [ ] Implementeer link checking
- [ ] Test volledige pipeline

**Deliverable:** Geautomatiseerde documentatie pipeline

### 6. Team onboarding (1 uur)

**Doel:** Team kan zelfstandig documenteren

**Acties:**

- [ ] Organiseer Markdown & MkDocs training
- [ ] Maak documentatie onderdeel van Definition of Done
- [ ] Stel review proces in voor documentatie wijzigingen

**Deliverable:** Team ready voor documentatie workflow

## Kwaliteitscriteria

**Minimale eisen:**

- Documentatie is lokaal te builden en te bekijken
- Alle placeholder content is vervangen door echte informatie
- Minstens één ADR is gedocumenteerd
- Team kan zelfstandig bijdragen

**Optimale eisen:**

- Automatische deployment werkt foutloos
- Zoekfunctionaliteit is getest en werkend
- Diagrammen (Mermaid) zijn geïntegreerd
- Documentatie is gelinkt aan code repository

## Veelvoorkomende obstakels

| Obstakel | Oplossing |
|----------|-----------|
| Team niet vertrouwd met Markdown | Start met Markdown training sessie |
| Documentatie wordt niet bijgehouden | Maak het onderdeel van DoD en review proces |
| Technische setup problemen | Gebruik Docker container voor consistente omgeving |
| Geen tijd voor documentatie | Begin met minimale setup, bouw uit over tijd |

## Volgende stappen

Na succesvolle implementatie:

- [ ] Evalueer na 1 maand of documentatie wordt gebruikt
- [ ] Implementeer feedback van gebruikers
- [ ] Overweeg uitbreidingen zoals API docs generatie
- [ ] Deel ervaringen met andere teams

## Resources

- **Template:** [MkDocs Material Starter](https://github.com/squidfunk/mkdocs-material)
- **Tutorial:** [MkDocs Getting Started](https://www.mkdocs.org/getting-started/)
- **Referentie:** [Markdown Guide](https://www.markdownguide.org/)
- **Diagrammen:** [Mermaid Documentation](https://mermaid-js.github.io/mermaid/)

## Verwante gebaande paden

- **API Documentatie automatiseren**
- **Open Source project opzetten**
- **CI/CD pipeline implementeren**
