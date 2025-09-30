---
title: Stap 4 - Ontwikkeling & Testen
summary: Ontwikkel en test een minimaal werkende versie van je overheidsservice
---

# Stap 4: Ontwikkeling & Testen

[← Terug naar overzicht](../) | [← Vorige: Stap 3 - Ontwikkelomgeving](../stap-3-ontwikkelomgeving/) | [➡️ Volgende: Stap 5 - Compliance](../stap-5-compliance/)

---

## 📋 Waar gaat deze stap over?

Dit is meestal de langste en meest complexe fase: hier bouw je de dienst daadwerkelijk. Het gaat om het vertalen van behoeften en ontwerpen naar werkende software, waarbij je steeds blijft toetsen of je de goede kant op gaat.

**Complexiteit:** 📊 Hoog (~50% van project)
**Typische rollen:** Ontwikkelaar, Projectleider, Designer
**Mogelijke resultaten:** Werkende software, testresultaten, documentatie

---

## 🎯 Relevante NeRDS Richtlijnen

Deze stap raakt aan meerdere principes:

**[Richtlijn 1: Stel gebruikersbehoeften vast](../../richtlijnen/gebruikersbehoeften/)**
Blijf gebruikers betrekken tijdens ontwikkeling - niet alleen aan het begin.

**[Richtlijn 2: Zorg voor toegankelijkheid en inclusie](../../richtlijnen/toegankelijkheid/)**
Toegankelijkheid vanaf dag 1 inbouwen is veel goedkoper dan later repareren.

**[Richtlijn 10: Maak beter gebruik van data](../../richtlijnen/data/)**
Denk vroegtijdig na over hoe je data opslaat, beschermt en gebruikt.

**[Richtlijn 13: Maak je technologie duurzaam](../../richtlijnen/duurzaamheid/)**
Overweeg de impact van je technische keuzes op energie en duurzaamheid.

**Waarom dit belangrijk is:**
Dit is waar theorie praktijk wordt. Keuzes die je hier maakt bepalen of de dienst daadwerkelijk gebruikt gaat worden en hoe onderhoudbaar deze is.

---

## 💭 Waar zou je over na kunnen denken?

Tijdens de ontwikkelfase komen veel vragen aan bod:

- **Hoe organiseer je het werk?** Iteratief in sprints, of anders?
- **Hoe borg je kwaliteit?** Welke tests zijn zinvol, welke code reviews helpen echt?
- **Hoe betrek je gebruikers?** Op welke momenten test je met echte mensen?
- **Hoe hou je het toegankelijk?** Welke tools en werkwijzen helpen daarbij?
- **Hoe documenteer je?** Wat heeft het team (en toekomstige beheerders) nodig?
- **Hoe meet je voortgang?** Niet alleen features, maar ook performance en kwaliteit

---

## 🛠️ Hoe zou je dit kunnen aanpakken?

### Iteratief werken

**Waarom hier aandacht aan besteden:**
Door iteratief te werken kun je vroeg ontdekken of je de goede kant op gaat. In plaats van maanden te bouwen en dan pas te testen, bouw je in kleine stappen en test je regelmatig.

**Hoe teams dit vaak aanpakken:**

Veel teams werken in **sprints** van 2-3 weken met een vast ritme:
- Planning: wat pakken we deze sprint op?
- Daily sync: korte dagelijkse check-in (vaak 15 min)
- Ontwikkeling: bouwen, testen, documenteren
- Review: demo aan stakeholders
- Retrospective: wat ging goed, wat kan beter?

**Mogelijke fasering (als voorbeeld):**
```
Fase 1: Core functionaliteit
Focus op de kernflow - wat is het absolute minimum dat werkt?
Bijvoorbeeld: login, basale formulierinvoer, opslaan

Fase 2: Integraties
Koppelen met bestaande systemen en data bronnen

Fase 3: Verfijning
Design system toepassen, gebruikersfeedback verwerken,
toegankelijkheid optimaliseren

Fase 4: Hardening
Performance, security, edge cases, bugfixes
```

Elke organisatie heeft een eigen ritme - sommige werken in korte sprints van 1 week, andere in langere cycli. Het gaat erom dat je regelmatig opleverd en leert.

---

### Herbruikbare componenten overwegen

**Waarom dit helpt:**
Het NL Design System biedt kant-en-klare, toegankelijke componenten die al voldoen aan overheidsstandaarden. Door deze te gebruiken bespaar je tijd en krijg je consistentie met andere overheidsdiensten.

**Beschikbare hulpmiddelen:**

<div class="action-cards">
    <div class="action-card">
        <span class="wip-badge wip-badge-beschikbaar">beschikbaar</span>
        <h4>NL Design System</h4>
        <p>Toegankelijke componenten</p>
        <a href="https://developer.overheid.nl/kennisbank/front-end/nl-design-system/aan-de-slag-met-nl-design-system" class="action-button" target="_blank">Gebruiken</a>
    </div>
    <div class="action-card">
        <span class="wip-badge wip-badge-beschikbaar">beschikbaar</span>
        <h4>Storybook voorbeelden</h4>
        <p>Component bibliotheek met voorbeelden</p>
        <a href="https://nl-design-system.github.io/utrecht/" class="action-button" target="_blank">Bekijken</a>
    </div>
</div>

**Hoe het eruit kan zien:**
```jsx
// Conceptueel voorbeeld met NL Design System componenten
import { Button, TextField, FormFieldset } from '@utrecht/component-library-react';

function VergunningFormulier() {
  return (
    <FormFieldset>
      <TextField label="Naam aanvrager" required type="text" />
      <Button appearance="primary-action-button">
        Aanvraag indienen
      </Button>
    </FormFieldset>
  );
}
```

**Wat het je oplevert:**
- Automatisch toegankelijk (WCAG compliant)
- Consistent met andere overheidsdiensten
- Responsive zonder extra werk
- Regelmatige updates en onderhoud door community

---

### API's volgens overheidsstandaarden

**Waarom dit helpt:**
Als je API's bouwt voor gegevensuitwisseling, zijn er Nederlandse standaarden die zorgen voor interoperabiliteit tussen overheidssystemen. De **[API Design Rules (ADR)](https://developer.overheid.nl/kennisbank/apis/api-design-rules/)** beschrijven best practices die breed gedragen worden.

**Beschikbare richtlijnen:**

<div class="action-cards">
    <div class="action-card">
        <span class="wip-badge wip-badge-beschikbaar">beschikbaar</span>
        <h4>API Design Rules (ADR)</h4>
        <p>Nederlandse API standaarden</p>
        <a href="https://developer.overheid.nl/kennisbank/apis/api-design-rules/" class="action-button" target="_blank">Bekijken</a>
    </div>
    <div class="action-card">
        <span class="wip-badge wip-badge-beschikbaar">beschikbaar</span>
        <h4>Nederlandse API Strategie</h4>
        <p>Richtlijnen voor API-ontwikkeling</p>
        <a href="https://docs.geostandaarden.nl/api/API-Strategie/" class="action-button" target="_blank">Bekijken</a>
    </div>
</div>

**Conceptuele voorbeelden:**

```yaml
# OpenAPI specificatie (conceptueel)
openapi: 3.0.0
info:
  title: Vergunningen API
  version: 1.0.0

paths:
  /vergunningen:
    get:
      summary: Haal vergunningen op
      parameters:
        - name: status
          in: query
          schema:
            type: string
            enum: [aangevraagd, goedgekeurd, afgewezen]
      responses:
        '200':
          description: Lijst van vergunningen

  /vergunningen/{id}:
    get:
      summary: Haal specifieke vergunning op
      parameters:
        - name: id
          in: path
          required: true
          schema:
            type: string
            format: uuid
```

**Principes waar je rekening mee kunt houden:**
- **RESTful design** - Gebruik standaard HTTP methoden (GET, POST, PUT, DELETE)
- **Nederlandse naamgeving** - Veldnamen in het Nederlands voor duidelijkheid
- **UUID's voor identificatie** - In plaats van opeenvolgende nummers
- **Rate limiting** - Bescherm je API tegen overbelasting
- **Altijd HTTPS** - Versleutel alle communicatie
- **OpenAPI documentatie** - Maak je API zelf-documenterend

---

### Toegankelijkheid vanaf het begin

**Waarom dit belangrijk is:**
Volgens **[Richtlijn 2](../../richtlijnen/toegankelijkheid/)** moet je dienst voldoen aan WCAG 2.1 niveau AA. Dit betekent dat mensen met verschillende beperkingen je dienst moeten kunnen gebruiken. Toegankelijkheid achteraf toevoegen is veel duurder dan het vanaf het begin meenemen.

**Hulpmiddelen voor testen:**

<div class="action-cards">
    <div class="action-card">
        <span class="wip-badge wip-badge-beschikbaar">beschikbaar</span>
        <h4>Deque Axe</h4>
        <p>Geautomatiseerde toegankelijkheidstest</p>
        <a href="https://www.deque.com/axe/" class="action-button" target="_blank">Gebruiken</a>
    </div>
    <div class="action-card">
        <span class="wip-badge wip-badge-beschikbaar">beschikbaar</span>
        <h4>WCAG-EM Reporter</h4>
        <p>Toegankelijkheidsrapportage tool</p>
        <a href="https://gitlab.com/digilab.overheid.nl/ecosystem/wcag-em-reporter" class="action-button" target="_blank">Gebruiken</a>
    </div>
</div>

**Mogelijke testmethoden:**

- **Automatische scans** - Tools zoals Axe DevTools kunnen basisfouten detecteren
- **Toetsenbordnavigatie** - Probeer de dienst te gebruiken zonder muis
- **Schermlezer test** - Test met tools zoals NVDA (Windows) of VoiceOver (Mac)
- **Contrast check** - Zorg voor voldoende contrast (richtlijn: minimaal 4.5:1)
- **Responsive test** - Werkt het op verschillende schermformaten?
- **Zoom test** - Blijft alles leesbaar bij 200% zoom?

Let op: geautomatiseerde tools vangen slechts ~30% van toegankelijkheidsproblemen. Handmatige tests en gebruikerstesten met mensen met beperkingen zijn essentieel.

**Conceptueel voorbeeld toegankelijke code:**
```html
<!-- Goed: duidelijke labels, ARIA attributen waar nodig -->
<form>
  <label for="naam">Naam aanvrager</label>
  <input
    id="naam"
    type="text"
    required
    aria-required="true"
    aria-describedby="naam-hint"
  />
  <span id="naam-hint">Vul je volledige naam in</span>

  <button type="submit" aria-label="Vergunning indienen">
    Indienen
  </button>
</form>
```

---

### Testen automatiseren

**Waarom dit helpt:**
Geautomatiseerde tests geven je vertrouwen dat nieuwe wijzigingen bestaande functionaliteit niet breken. Ze maken het mogelijk om sneller te deployen en makkelijker te refactoren.

**Test piramide (als mental model):**
```
         /\
        /E2E\      ← End-to-end (weinig, traag, breed)
       /------\
      /Integ- \   ← Integratie (gemiddeld aantal)
     /  ratie  \
    /----------\
   /   Unit     \ ← Unit tests (veel, snel, specifiek)
  /--------------\
```

**Verschillende niveaus:**
- **Unit tests** - Testen individuele functies/componenten in isolatie
- **Integratie tests** - Testen of componenten goed samenwerken
- **End-to-end tests** - Testen complete gebruikersflows

Wat "genoeg" is verschilt per project. Sommige teams streven naar 80% code coverage, andere focussen op kritieke paden. Het gaat erom dat je vertrouwen hebt in je releases.

**Conceptueel voorbeeld:**
```javascript
// Unit test voorbeeld (Jest)
describe('Vergunning validatie', () => {
  test('moet foutmelding geven bij ontbrekende naam', () => {
    const result = validateVergunning({ naam: '' });
    expect(result.errors).toContain('Naam is verplicht');
  });
});

// E2E test voorbeeld (Playwright/Cypress conceptueel)
test('Gebruiker kan vergunning aanvragen', async () => {
  // Login
  await page.goto('/login');
  await page.fill('#digid-input', 'testgebruiker');
  await page.click('button[type="submit"]');

  // Formulier invullen
  await page.fill('#naam', 'Jan Jansen');
  await page.click('#submit-aanvraag');

  // Verwacht succesbericht
  await expect(page.locator('.success')).toBeVisible();
});
```

---

### Blijven testen met gebruikers

**Waarom dit belangrijk blijft:**
Geautomatiseerde tests vangen technische bugs, maar alleen echte gebruikers kunnen je vertellen of de dienst intuïtief en bruikbaar is. Regelmatig testen voorkomt dat je maanden bouwt in de verkeerde richting.

**Hoe teams dit aanpakken:**

Veel teams bouwen gebruikerstesten in hun werkritme in - bijvoorbeeld elke sprint of elke twee weken. Dit kan op verschillende manieren:
- **"Think aloud" sessies** - Gebruikers denken hardop terwijl ze de dienst gebruiken
- **Taakgerichte tests** - Gebruikers proberen een specifieke taak te voltooien
- **Guerilla testing** - Informele tests met beschikbare gebruikers

**Waar je op kunt letten:**
- Kan de gebruiker de taak voltooien zonder hulp of uitleg?
- Waar lopen ze vast of worden ze onzeker?
- Wat is hun emotionele reactie (frustratie, verwarring, tevredenheid)?
- Werkt het op hun apparaat en in hun context?

Het aantal gebruikers per testronde kan variëren - soms zijn 3-5 gebruikers genoeg om de belangrijkste problemen te vinden.

---

## 💡 Waar lopen teams vaak tegenaan?

**Toegankelijkheid als bijzaak**
Veel teams denken "dat fixen we later wel". In de praktijk is het herbouwen van een hele interface omdat er geen semantische HTML gebruikt is veel duurder dan het vanaf het begin goed doen. Voorbeeld: een gemeente moest hun hele formulierflow herschrijven omdat ze geen labels hadden gebruikt.

**Testen als aparte fase**
Sommige teams schrijven code en denken "we testen later wel". Dit leidt vaak tot code die moeilijk te testen is en bugs die laat gevonden worden. Teams die testen integreren in hun workflow (bijv. tests schrijven vóór of tijdens het bouwen) vinden problemen eerder.

**Bouwen zonder feedback loops**
Het is verleidelijk om weken te bouwen zonder tussentijds te checken bij gebruikers. Tegen de tijd dat je feedback krijgt heb je misschien al de verkeerde kant op gebouwd. Regelmatige kleine tests zijn effectiever dan één grote test aan het eind.

**Performance als laatste gedachte**
Als je pas aan het eind gaat kijken naar performance, kunnen fundamentele architectuurkeuzes je beperken. Teams die vanaf het begin performance meten (en budgetten stellen) voorkomen verrassingen later.

---

## 🎯 Hoe weet je of je klaar bent voor de volgende stap?

Je bent waarschijnlijk klaar om door te gaan als:

- **De kernfunctionaliteit werkt** - Gebruikers kunnen hun belangrijkste taken voltooien
- **Je vertrouwen hebt in de stabiliteit** - Door tests en gebruikerstesten
- **Toegankelijkheid is ingebakken** - Niet perfect, maar wel fundamenteel goed
- **De code is gedocumenteerd** - Andere developers (en je toekomstige zelf) kunnen ermee werken
- **Performance is acceptabel** - De dienst is bruikbaar onder realistische omstandigheden

Dit zijn geen absolute criteria - elke situatie is anders. Het gaat erom dat je voldoende vertrouwen hebt om verder te gaan naar compliance en uitrol.

---

## 📦 Mogelijke resultaten van deze stap

Wat teams vaak opleveren:

- **Werkende software** - Een minimaal werkende versie (MVP) van de dienst
- **Testdekking** - Geautomatiseerde tests (de exacte coverage varieert)
- **Documentatie** - Voor developers, gebruikers en/of beheerders
- **Gebruikersinzichten** - Feedback en testresultaten die toekomstige iteraties kunnen sturen
- **Performance metrics** - Inzicht in hoe snel en stabiel de dienst is

De vorm en volledigheid hangt af van je context en eisen.

---

## 📚 Relevante NeRDS Richtlijnen

- **[Richtlijn 1: Stel gebruikersbehoeften vast](../../richtlijnen/gebruikersbehoeften/)** - Test continu met gebruikers
- **[Richtlijn 2: Zorg voor toegankelijkheid en inclusie](../../richtlijnen/toegankelijkheid/)** - WCAG 2.1 AA compliance
- **[Richtlijn 10: Maak beter gebruik van data](../../richtlijnen/data/)** - Implementeer goede data-architectuur
- **[Richtlijn 13: Maak je technologie duurzaam](../../richtlijnen/duurzaamheid/)** - Denk aan energy efficiency

---

## ➡️ Volgende Stap

Klaar met ontwikkelen en testen? Ga door naar:

**[Stap 5: Compliance & Beveiligingsaudit](../stap-5-compliance/)**

In de volgende stap ga je de dienst laten auditen voor compliance, beveiliging en toegankelijkheid voordat je live gaat.

---

[← Terug naar overzicht](../) | [← Vorige: Stap 3](../stap-3-ontwikkelomgeving/) | [➡️ Volgende: Stap 5](../stap-5-compliance/)