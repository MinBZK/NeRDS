---
title: "Gebruikersonderzoek"
summary: "Templates en checklists voor gebruikersonderzoek"
---

# 👥 Gebruikersonderzoek

<div class="download-section">
    <h3>📥 Download Template</h3>
    <p>Download dit gebruikersonderzoek protocol als Markdown bestand voor je project.</p>
    <button class="download-btn" onclick="downloadUserResearchTemplate()">
        <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
            <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
        </svg>
        Download als Markdown
    </button>
</div>

## Templates & Checklists

### Gebruikersonderzoek Protocol

#### Pre-research

- [ ] Onderzoeksvragen gedefinieerd
- [ ] Target gebruikersgroepen geïdentificeerd
- [ ] Interview guide ontwikkeld
- [ ] Privacy consent proces opgezet

#### During research

- [ ] User interviews (minimaal 20)
- [ ] Observational research waar mogelijk
- [ ] Journey mapping workshops
- [ ] Pain point analyse

#### Post-research

- [ ] Persona's ontwikkeld
- [ ] User stories geschreven
- [ ] Requirements geprioriseerd

## Interview Guide Template

### Introductie (5 min)

- Mezelf voorstellen
- Doel van het onderzoek uitleggen
- Toestemming vragen voor opname
- Privacy en anonimiteit toelichten

### Achtergrond (10 min)

- Vertel over jezelf en je rol
- Hoe gebruik je momenteel [service/systeem]?
- Wat zijn je belangrijkste taken?

### Huidige Ervaring (20 min)

- Kun je me door je typische proces lopen?
- Wat gaat goed in het huidige proces?
- Waar loop je tegenaan?
- Welke workarounds gebruik je?

### Behoeften & Wensen (15 min)

- Wat zou ideaal zijn?
- Welke functionaliteit mis je?
- Hoe zou succes eruit zien?

### Afsluiting (5 min)

- Nog vragen of opmerkingen?
- Vervolgcontact toestemming

<script>
function downloadUserResearchTemplate() {
    const content = `---
title: "Gebruikersonderzoek Protocol"
summary: "Complete template voor gebruikersonderzoek binnen NeRDS projecten"
---

# 👥 Gebruikersonderzoek Protocol

## Checklist

### Pre-research
- [ ] Onderzoeksvragen gedefinieerd
- [ ] Target gebruikersgroepen geïdentificeerd
- [ ] Interview guide ontwikkeld
- [ ] Privacy consent proces opgezet

### During research
- [ ] User interviews (minimaal 20)
- [ ] Observational research waar mogelijk
- [ ] Journey mapping workshops
- [ ] Pain point analyse

### Post-research
- [ ] Persona's ontwikkeld
- [ ] User stories geschreven
- [ ] Requirements geprioriseerd

## Interview Guide Template

### Introductie (5 min)
- Mezelf voorstellen
- Doel van het onderzoek uitleggen
- Toestemming vragen voor opname
- Privacy en anonimiteit toelichten

### Achtergrond (10 min)
- Vertel over jezelf en je rol
- Hoe gebruik je momenteel [service/systeem]?
- Wat zijn je belangrijkste taken?

### Huidige Ervaring (20 min)
- Kun je me door je typische proces lopen?
- Wat gaat goed in het huidige proces?
- Waar loop je tegenaan?
- Welke workarounds gebruik je?

### Behoeften & Wensen (15 min)
- Wat zou ideaal zijn?
- Welke functionaliteit mis je?
- Hoe zou succes eruit zien?

### Afsluiting (5 min)
- Nog vragen of opmerkingen?
- Vervolgcontact toestemming

## Persona Template

**Naam:** [Fictieve naam]
**Leeftijd:** [Leeftijdsrange]
**Functie:** [Rol/functie]
**Context:** [Werkomgeving/situatie]

**Doelen:**
- [Primair doel]
- [Secundair doel]

**Frustraties:**
- [Grootste frustratie]
- [Andere pijnpunten]

**Gedrag:**
- [Belangrijke gedragspatrones]
- [Voorkeuren en gewoontes]

**Quote:**
> "[Karakteristieke uitspraak die de persona samenvat]"

## User Story Template

**Als** [type gebruiker]
**Wil ik** [functionaliteit]
**Zodat** [reden/voordeel]

**Acceptatiecriteria:**
- [ ] [Criterium 1]
- [ ] [Criterium 2]
- [ ] [Criterium 3]

**Definition of Done:**
- [ ] Functionaliteit werkt zoals beschreven
- [ ] Toegankelijkheidsrichtlijnen gevolgd
- [ ] Security review uitgevoerd
- [ ] Gebruikerstesten uitgevoerd`;

    downloadMarkdown(content, 'gebruikersonderzoek-protocol.md');
}
</script>
