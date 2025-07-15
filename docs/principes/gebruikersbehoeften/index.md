---
title: "1. Stel gebruikersbehoeften vast"
summary: Begrijp je gebruikers en hun behoeften. Ontwikkel kennis over je gebruikers en wat dat betekent voor je technologieproject.
relations:
  - toegankelijkheid
  - privacy
  - servicestandaard
roles:
  - beleidsmaker: high
  - developer: medium
  - jurist: low
  - inkoper: medium
  - cxo: high
  - projectleider: high
---

# 1. Stel gebruikersbehoeften vast

Om digitale systemen te ontwikkelen die effectief zijn, moet je je gebruikers en hun behoeften begrijpen. Dit geldt vooral wanneer je door een uitgavecontroleproces gaat.

## Waarom is het belangrijk?

- **Voorkom kostbare fouten:** Bouw vanaf het begin de juiste oplossing in plaats van achteraf aanpassen
- **Verhoog adoptie:** Gebruikers omarmen systemen die hun werkelijke problemen oplossen
- **Reduceer risico's:** Identificeer potentiële problemen voordat technologie wordt geïmplementeerd
- **Bespaar tijd en geld:** Voorkom ontwikkeling van ongewenste features
- **Verbeter dienstverlening:** Systemen die aansluiten bij gebruikersbehoeften werken effectiever
- **Ondersteun interne alignment:** Creëer overeenstemming over technologiedoelstellingen binnen teams

Door een gebruikersgerichte benadering toe te passen van technologieontwikkeling en -implementatie bij overheidsdiensten verhoog je de acceptatie en effectiviteit van digitale overheidsdiensten terwijl je het vertrouwen tussen burger en overheid versterkt.

## Hoe pas je het toe?

<div class="direct-aan-de-slag">
    <h3>Direct aan de slag</h3>

    <div class="warning-banner" style="background-color: #fff3e0; padding: 0.5rem; border-left: 3px solid #ff9800; margin-bottom: 0.8rem;">
        <strong>Work in Progress:</strong> De onderstaande functionaliteit is nog in ontwikkeling.
    </div>

    <div class="action-cards">
        <div class="action-card">
            <span class="wip-badge wip-badge-concept">concept</span>
            <h4 >Gebruikers Panel</h4>
            <p >Toegang tot gebruikerspanel van burgers voor onderzoek</p>
            <button disabled class="action-button">Aanvragen</button>
        </div>
        <div class="action-card">
            <span class="wip-badge wip-badge-ontwikkeling">ontwikkeling</span>
            <h4 >Persona Database</h4>
            <p >Gevalideerde overheidsgebruikerspersona's</p>
            <button disabled class="action-button">Verkennen</button>
        </div>
        <div class="action-card">
            <span class="wip-badge wip-badge-beschikbaar">beschikbaar</span>
            <h4 >Onderzoeksrichtlijnen</h4>
            <p >Toolkit voor gebruikersonderzoek</p>
            <a href="https://toolkittaal.gebruikercentraal.nl/richtlijnen/" class="action-button" target="_blank">Bekijken</a>
        </div>
    </div>
</div>

=== "Beleidsmaker"
    ### Beleidskaders voor gebruikersgerichtheid

    **Stappen:**
    1. **Formuleer gebruikersgerichte beleidsvisie** - Ontwikkel beleid dat burgerbehoeften centraal stelt
    2. **Stel kaders voor gebruikersonderzoek** - Bepaal standaarden voor overheidsorganisaties
    3. **Coördineer tussen ministeries** - Zorg voor consistente gebruikersgerichte aanpak
    4. **Monitor digitale inclusie** - Volg toegankelijkheid van overheidsdiensten
    5. **Evalueer beleidseffectiviteit** - Meet impact van gebruikersgerichte diensten

    **Belangrijke overwegingen:**
    - Digitale inclusie en toegankelijkheid
    - Representativiteit van gebruikersonderzoek
    - Budgettering voor structureel gebruikersonderzoek
    - Wet- en regelgeving rond dienstverlening

=== "CXO/Bestuurder"
    ### Strategische gebruikersgerichtheid

    **Stappen:**
    1. **Bepaal gebruikersgerichte visie** - Ontwikkel organisatiestrategie met focus op gebruikers
    2. **Budgeteer voor gebruikersonderzoek** - Reserveer middelen voor structureel onderzoek
    3. **Stel KPI's voor gebruikerstevredenheid** - Meet succes van gebruikersgerichte aanpak
    4. **Organiseer gebruikersgerichte cultuur** - Bevorder mindset binnen organisatie
    5. **Monitor ROI van gebruikersonderzoek** - Evalueer waarde van investeringen

    **Belangrijke overwegingen:**
    - Balans tussen gebruikersbehoeften en bedrijfsvoering
    - Investering in onderzoekstools en expertise
    - Change management voor gebruikersgerichte cultuur
    - Compliance met toegankelijkheidseisen

=== "Projectleider"
    ### Projectuitvoering met gebruikersfocus

    **Stappen:**
    1. **Plan gebruikersonderzoek** - Integreer onderzoek in projectplanning
    2. **Coördineer met UX-teams** - Zorg voor adequate onderzoeksresources
    3. **Organiseer gebruikerstesten** - Plan iteratieve feedback loops
    4. **Monitor gebruikerstevredenheid** - Track acceptatie tijdens implementatie
    5. **Evalueer projectsucces** - Meet impact op gebruikerservaring

    **Belangrijke overwegingen:**
    - Tijdsinvestering voor gebruikersonderzoek
    - Balans tussen snelheid en grondige research
    - Stakeholder management rond onderzoeksresultaten
    - Iteratieve ontwikkeling gebaseerd op feedback

=== "Developer"
    ### Technische implementatie gebruikersgerichtheid

    **Stappen:**
    1. **Implementeer gebruikersanalytics** - Bouw meetinstrumenten voor gebruikersgedrag
    2. **Ontwikkel toegankelijke interfaces** - Volg WCAG-richtlijnen en best practices
    3. **Creëer feedback mechanismen** - Bouw tools voor gebruikersinput
    4. **Optimaliseer gebruikerservaring** - Gebruik data voor continue verbetering
    5. **Test met echte gebruikers** - Implementeer A/B testing en usability testing

    **Code-voorbeeld - Analytics implementatie:**
    ```javascript
    // Privacy-vriendelijke analytics voor overheid
    import { GovAnalytics } from '@rijksoverheid/analytics';

    const analytics = new GovAnalytics({
      trackingId: 'GOV-123456',
      anonymizeIP: true,
      respectDNT: true,
      cookieConsent: true
    });

    // Track gebruikersinteracties
    analytics.trackEvent('form_completion', {
      form_type: 'aanvraag',
      completion_time: 120,
      user_satisfaction: 4
    });
    ```

    **Belangrijke overwegingen:**
    - Privacy by design in gebruikersonderzoek
    - Toegankelijkheid (WCAG 2.1 AA)
    - Performance impact van analytics
    - GDPR-compliance bij data verzameling

=== "Jurist"
    ### Juridische aspecten gebruikersonderzoek

    **Stappen:**
    1. **Evalueer privacy-impact** - Beoordeel juridische risico's van gebruikersonderzoek
    2. **Stel toestemmingsprocessen op** - Ontwikkel GDPR-conforme consent flows
    3. **Adviseer over data-gebruik** - Zorg voor rechtmatige verwerking gebruikersdata
    4. **Beoordeel toegankelijkheidscompliance** - Toets op naleving WCAG en EN 301 549
    5. **Opstellen privacy statements** - Transparantie over datagebruik

    **Belangrijke overwegingen:**
    - GDPR artikel 6 rechtsgrond voor onderzoek
    - Bewaarperiodes van onderzoeksdata
    - Rechten van betrokkenen (inzage, rectificatie)
    - Compliance met Wet digitale overheid

=== "Inkoper"
    ### Inkoop van onderzoekstools en -services

    **Stappen:**
    1. **Specificeer onderzoeksvereisten** - Definieer eisen voor onderzoekstools
    2. **Evalueer onderzoeksbureaus** - Beoordeel expertise en methodologie
    3. **Onderhandel over dataeigendom** - Zorg voor eigendom van onderzoeksresultaten
    4. **Contracteer toegankelijkheidstools** - Inkoop van WCAG-testing software
    5. **Monitor leveranciersprestaties** - Evalueer kwaliteit van onderzoeksresultaten

    **Template aanbestedingseis:**
    > **Onderzoeksexpertise:** Leverancier moet aantoonbare ervaring hebben met gebruikersonderzoek binnen overheidsdomeinen en bekend zijn met toegankelijkheidseisen volgens WCAG 2.1 AA standaarden.

    **Belangrijke overwegingen:**
    - Expertise in overheidscontext
    - GDPR-compliance van onderzoekstools
    - Kwaliteitsborging van onderzoeksmethodologie
    - Intellectual property van onderzoeksresultaten

## Gerelateerde hulpmiddelen

- [Training gebruikersonderzoek](https://www.gebruikercentraal.nl/evenementen/)
- [Digitale ondersteuning](https://www.digitaleoverheid.nl/overzicht-van-alle-onderwerpen/digitale-inclusie/mensen-helpen-om-met-digitalisering-om-te-gaan/)
- [Handreiking Mobiele app Ontwikkeling en Beheer versie 4.0](https://www.noraonline.nl/images/noraonline/2/26/Handreiking_Mobiele_App_4.0.pdf) - Hoofdstuk 8 gebruikt "De gebruiker staat centraal" voor de ontwikkeling van mobiele apps.

## Gerelateerde principes

- [2. Zorg voor toegankelijkheid en inclusie](../toegankelijkheid/index.md)
- [7. Maak privacy integraal](../privacy/index.md)
- [14. Voldoe aan de servicestandaard](../servicestandaard/index.md)
