# Feedback Systeem NeRDS

De Nederlandse Richtlijn Digitale Systemen heeft twee manieren waarop gebruikers feedback kunnen geven:

## 1. Feedback Widget (E-mail)

De feedback widget op de website verzamelt gestructureerde feedback en opent de e-mailclient van de gebruiker met vooraf ingevulde informatie.

### Hoe het werkt

1. Gebruiker vult het feedback formulier in op de website
2. Bij verzenden wordt de e-mailclient geopend met:
   - **Aan:** <bureau.architectuur@minbzk.nl>
   - **Onderwerp:** [NeRDS Feedback] Type - Richtlijn X
   - **Body:** Alle ingevulde feedback data
3. Gebruiker klikt op "Verzenden" in hun e-mailclient
4. Feedback komt binnen via e-mail

### Voordelen

- ✅ Geen externe partijen of backend nodig
- ✅ Werkt altijd (geen afhankelijkheid van API's)
- ✅ Privacy-vriendelijk
- ✅ Gebruiker heeft volledige controle

### Nadelen

- ⚠️ Vereist een geconfigureerde e-mailclient
- ⚠️ Geen automatische issue tracking
- ⚠️ Handmatige verwerking van feedback nodig

### Bestanden

- `docs/javascripts/feedback-widget.js` - Widget implementatie
- `docs/javascripts/feedback-config.js` - Configuratie
- `docs/javascripts/feedback-i18n.js` - Vertalingen

## 2. GitHub Issue Forms

Gebruikers kunnen ook direct feedback geven via gestructureerde GitHub formulieren.

### Hoe het werkt

1. Gebruiker gaat naar: <https://github.com/MinBZK/NeRDS/issues/new/choose>
2. Selecteert het type feedback:
   - 🐛 Fout of bug melden
   - 💡 Suggestie of verbetering
   - ❓ Vraag stellen
   - 💬 Algemene feedback
3. Vult het formulier in
4. GitHub maakt automatisch een issue aan

### Voordelen

- ✅ Automatisch gestructureerd en doorzoekbaar
- ✅ Publiek zichtbaar en trackbaar
- ✅ Discussie mogelijk via comments
- ✅ Eenvoudig te beheren met labels en projecten

### Nadelen

- ⚠️ Vereist GitHub account
- ⚠️ Publiek zichtbaar (geen privacy voor feedback)
- ⚠️ Minder laagdrempelig dan widget

### Bestanden

- `.github/ISSUE_TEMPLATE/bug-report.yml`
- `.github/ISSUE_TEMPLATE/feature-request.yml`
- `.github/ISSUE_TEMPLATE/question.yml`
- `.github/ISSUE_TEMPLATE/general-feedback.yml`
- `.github/ISSUE_TEMPLATE/config.yml`

## 3. Workflow (Toekomstig gebruik)

Het bestand `.github/workflows/feedback-to-issues.yml` bevat een workflow die **momenteel niet actief is**.

Deze workflow zou gebruikt kunnen worden als er in de toekomst een backend proxy wordt geïmplementeerd die:

1. Feedback van de widget ontvangt via API
2. Authenticatie met GitHub afhandelt
3. Automatisch issues aanmaakt

### Wat nodig is voor activering

- Een backend service (bijv. bij MinBZK gehost)
- GitHub Personal Access Token met `repo` scope
- Update van `feedback-widget.js` om naar backend te POST'en
- Environment variables configuratie

## Aanbeveling

Voor de meeste gebruikers wordt **de feedback widget (mailto)** aanbevolen omdat:

- Geen account nodig
- Privacy-vriendelijk
- Simpel en altijd beschikbaar

Voor **technische gebruikers en ontwikkelaars** zijn de **GitHub Issue Forms** handiger omdat:

- Betere tracking en discussie
- Openbaar en doorzoekbaar
- Integratie met GitHub workflow

## Contact

Voor vragen over het feedback systeem, neem contact op met:

- E-mail: <bureau.architectuur@minbzk.nl>
- GitHub: <https://github.com/MinBZK/NeRDS/issues>

