---
title: Stap 1 - Behoefteanalyse & Businesscase
summary: Valideer de behoefte en creëer een solide basis voor de dienst
---

# Stap 1: Behoefteanalyse & Businesscase

[← Terug naar overzicht](../) | [➡️ Volgende: Stap 2 - Technische opstelling](../stap-2-technische-opstelling/)

---

## 📋 Waar gaat deze stap over?

In deze stap leg je de fundering voor je nieuwe overheidsservice. Centraal staat de vraag: *is er daadwerkelijk behoefte aan deze dienst, en zo ja, hoe ziet een haalbare oplossing eruit?* Het gaat om het valideren van aannames en het creëren van draagvlak voordat je begint met bouwen.

**Complexiteit:** 📊 Gemiddeld (~15% van project)
**Typische rollen:** Beleid en Advies, Bestuurder, Projectleider
**Mogelijke resultaten:** Businesscase, gebruikersinzichten, strategische keuzes

---

## 🎯 Relevante NeRDS Richtlijnen

Deze stap raakt aan de volgende principes:

**[Richtlijn 1: Stel gebruikersbehoeften vast](../../richtlijnen/gebruikersbehoeften/)**
Begrijp wie je gebruikers zijn en wat ze nodig hebben voordat je technische keuzes maakt.

**[Richtlijn 12: Definieer je inkoopstrategie](../../richtlijnen/inkoop/)**
Overweeg al vroeg of je gaat bouwen, kopen of hergebruiken - dit beïnvloedt je hele aanpak.

**Waarom dit belangrijk is:**
Zonder duidelijk inzicht in gebruikersbehoeften loop je het risico een dienst te bouwen die niet aansluit bij de werkelijkheid. Vroeg onderzoek bespaart later kostbare herontwerpen.

---

**Mogelijke hulpmiddelen:**

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
        <p>Database van uitgevoerde onderzoeken</p>
        <a href="https://gebruikersonderzoeken.nl/docs/onderzoek-bekijken" class="action-button" target="_blank">Bekijken</a>
    </div>
</div>

**Mogelijke aanpakken:**

**Doelgroep verkennen**
Overweeg om persona's te maken van je belangrijkste gebruikersgroepen. Denk hierbij niet alleen aan eindgebruikers, maar ook aan mensen die de dienst moeten beheren of ondersteunen.

**In gesprek met gebruikers**
Veel organisaties kiezen ervoor om een aantal interviews te doen met representatieve gebruikers. Vraag daarbij niet alleen wat ze willen, maar ook hoe ze nu werken en waar ze tegenaan lopen. Observatie kan soms waardevoller zijn dan alleen praten.

Een vuistregel die vaak genoemd wordt: minimaal 5 verschillende gebruikers spreken geeft al inzicht in de belangrijkste patronen.

**Kijken wat er al is**
Voordat je het wiel opnieuw uitvindt: bekijk of vergelijkbare diensten al draaien, binnen of buiten je organisatie. [Gebruikersonderzoeken.nl](https://gebruikersonderzoeken.nl) kan helpen om te zien of er al relevant onderzoek is gedaan.

**Van inzicht naar verhaal**
Sommige teams werken met gebruikersverhalen om behoeften concreet te maken:

```
Als [type gebruiker] wil ik [actie],
zodat [resultaat/waarde].

Bijvoorbeeld:
Als burger wil ik online een vergunning aanvragen,
zodat ik niet naar het gemeentehuis hoef te reizen.
```

Dit helpt om later te toetsen of wat je bouwt daadwerkelijk aan die behoefte voldoet.

---

### Een businesscase ontwikkelen

**Waarom dit helpt:**
Een businesscase helpt je (en anderen) beredeneren waarom deze dienst gebouwd zou moeten worden. Het dwingt je na te denken over aannames en creëert commitment van stakeholders.

**Veel voorkomende onderdelen:**

**Probleem & Oplossing**
Wat is het probleem dat je wilt oplossen, en hoe zou de voorgestelde dienst dat kunnen doen? Probeer concreet te zijn.

**Doelgroep & Impact**
Wie ga je bereiken en wat is de verwachte impact? Zowel kwantitatief (hoeveel gebruikers) als kwalitatief (maatschappelijke waarde).

**Kosten & Baten**
Denk aan ontwikkelkosten (eenmalig én doorlopend onderhoud), maar ook aan baten zoals tijdsbesparing of efficiency. Sommige organisaties maken een ROI-berekening, anderen focussen meer op maatschappelijke waarde.

**Make vs Buy**
Een belangrijke vraag (zie **[Richtlijn 12: Inkoopstrategie](../../richtlijnen/inkoop/)**): ga je zelf bouwen, een bestaande oplossing kopen, of iets hergebruiken? Elke keuze heeft consequenties voor kosten, flexibiliteit en doorlooptijd.

**Risico's benoemen**
Welke technische, privacy, beveiligings- of organisatorische risico's zie je? Het expliciet maken van risico's helpt later om ermee om te gaan.

**Conceptueel voorbeeld:**
```yaml

Businesscase: Online Vergunningaanvraag

Probleem:
Burgers moeten fysiek naar het gemeentehuis voor aanvragen (gemiddeld 45 min per aanvraag)

Oplossing:
Digitale dienst waarmee burgers online vergunningen kunnen aanvragen

Doelgroep:
~5000 aanvragen per jaar

Kosten:
- Ontwikkeling: €150.000
- Jaarlijks onderhoud: €30.000

Baten:
- Tijdbesparing burgers: ~3750 uur/jaar
- Efficiency ambtenaren: 1 FTE besparing
- ROI: 2 jaar

Risico's:
- Digitale inclusie: niet alle burgers zijn digitaal vaardig → oplossing: behoud baliemedewerking
```

---

### Nadenken over succes

**Waarom dit helpt:**
Als je vooraf bedenkt hoe je succes zou kunnen meten, kun je na lancering ook daadwerkelijk beoordelen of de dienst zijn doel bereikt.

**Voorbeelden van mogelijke meetpunten:**
- **Adoptie:** Hoeveel mensen gebruiken de dienst (vs. oude manier van werken)?
- **Tevredenheid:** Wat vinden gebruikers ervan? (bijv. NPS-score)
- **Efficiency:** Hoe snel kunnen gebruikers hun doel bereiken?
- **Bereik:** Bereiken we de doelgroepen die we wilden bereiken?
- **Toegankelijkheid:** Kunnen verschillende gebruikersgroepen de dienst gebruiken?

Niet alle metrieken zijn voor elke dienst relevant - kies wat past bij jouw situatie.

---

## 💡 Waar lopen teams vaak tegenaan?

**Aannames in plaats van onderzoek**
Vaak denken teams te weten wat gebruikers willen, gebaseerd op interne discussies. In de praktijk blijken die aannames regelmatig niet te kloppen. Voorbeeld: een gemeente dacht dat burgers een app wilden, maar uit onderzoek bleek dat een responsive website veel belangrijker was omdat mensen toch via hun browser werkten.

**Te optimistische businesscases**
Het is verleidelijk om alleen de "happy flow" te beschrijven. Realistische businesscases beschrijven ook risico's en onzekerheden, en soms verschillende scenario's (best case / realistic case / worst case).

**Vergeten van interne gebruikers**
De focus ligt vaak op eindgebruikers (bijv. burgers), maar ambtenaren die de dienst moeten beheren of ondersteunen zijn ook gebruikers. Als je hen vergeet, kan de dienst technisch perfect werken maar operationeel onwerkbaar zijn.

---

## 🎯 Hoe weet je of je klaar bent voor de volgende stap?

Je bent waarschijnlijk klaar om door te gaan als je:

- **Helder beeld hebt van gebruikersbehoeften** - Gebaseerd op gesprekken met echte gebruikers, niet alleen aannames
- **Draagvlak hebt gecreëerd** - Stakeholders begrijpen waarom deze dienst waardevol is
- **Strategische keuzes hebt gemaakt** - Bijvoorbeeld de make vs buy vraag
- **Meetpunten voor succes hebt** - Je weet hoe je later gaat bepalen of de dienst werkt

Dit zijn geen strikte voorwaarden - elke organisatie werkt anders. Het gaat erom dat je voldoende vertrouwen hebt om verder te gaan.

---

## 📦 Mogelijke resultaten van deze stap

Wat organisaties vaak opleveren:

- Een **businesscasedocument** met onderbouwing voor de dienst (probleem, oplossing, kosten/baten, risico's)
- **Gebruikersinzichten** in de vorm van interviews, persona's of gebruikersverhalen
- **Strategische keuzes** gedocumenteerd (bijv. make vs buy)
- **Commitment van stakeholders** om door te gaan
- **Meetpunten** om later succes te kunnen evalueren

De vorm en diepgang kan sterk verschillen per organisatie en context.

---

## 📚 Relevante NeRDS Richtlijnen

- **[Richtlijn 1: Stel gebruikersbehoeften vast](../../richtlijnen/gebruikersbehoeften/)** - Start altijd met de gebruiker
- **[Richtlijn 12: Definieer je inkoopstrategie](../../richtlijnen/inkoop/)** - Bepaal je make vs buy strategie

---

## ➡️ Volgende Stap

Klaar met de behoefteanalyse en businesscase? Ga door naar:

**[Stap 2: Technische opstelling & beveiligingskaders](../stap-2-technische-opstelling/)**

In de volgende stap ga je het technische ontwerp maken en bepalen welke beveiligingseisen van toepassing zijn.

---

[← Terug naar overzicht](../) | [➡️ Volgende: Stap 2](../stap-2-technische-opstelling/)