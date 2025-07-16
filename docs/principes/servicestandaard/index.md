---
title: "14. Voldoe aan de servicestandaard"
summary: Als je een dienst bouwt als onderdeel van je technologieproject of -programma, moet je ook voldoen aan de Servicestandaard.
relations:
  - gebruikersbehoeften
  - toegankelijkheid
  - integratie
roles:
  - beleidsmaker: high
  - cxo: high
  - projectleider: high
  - developer: medium
  - jurist: medium
  - inkoper: medium
---

# 14. Voldoe aan de servicestandaard

De Servicestandaard definieert wat burgers en bedrijven mogen verwachten van overheidsdiensten. Het zorgt ervoor dat digitale diensten gebruiksvriendelijk, toegankelijk en betrouwbaar zijn, ongeacht welke overheidsorganisatie ze aanbiedt.

## Waarom is het belangrijk?

- **Consistente gebruikerservaring**: Zorgt voor een uniforme ervaring in alle overheidsdiensten
- **Kwaliteitsborging**: Garandeert een minimumniveau van kwaliteit en bruikbaarheid
- **Efficiëntie**: Voorkomt verspilling door slecht ontworpen diensten
- **Inclusie**: Zorgt ervoor dat diensten voor iedereen toegankelijk zijn
- **Vertrouwen**: Versterkt het vertrouwen van burgers in digitale overheidsdiensten
- **Continu verbeteren**: Stimuleert voortdurende verbetering van diensten

Door te voldoen aan de servicestandaard, leveren overheidsorganisaties diensten die efficiënt, gebruiksvriendelijk en inclusief zijn, wat leidt tot hogere gebruikerstevredenheid, lagere kosten en betere resultaten voor de samenleving.

## Hoe pas je het toe?

<div class="direct-aan-de-slag">
    <h3>Direct aan de slag</h3>

    <div class="warning-banner" style="background-color: #fff3e0; padding: 0.5rem; border-left: 3px solid #ff9800; margin-bottom: 0.8rem;">
        <strong>Work in Progress:</strong> De onderstaande functionaliteit is nog in ontwikkeling.
    </div>

    <div class="action-cards">
        <div class="action-card">
            <span class="wip-badge wip-badge-concept">concept</span>
            <h4 >Zelfassessment</h4>
            <p >Beoordeel je dienst aan de standaard</p>
            <button disabled class="action-button">Starten</button>
        </div>
        <div class="action-card">
            <span class="wip-badge wip-badge-beschikbaar">beschikbaar</span>
            <h4 >NL Design System</h4>
            <p >Gebruiksvriendelijke componenten</p>
            <a href="https://nldesignsystem.nl" class="action-button" target="_blank">Verkennen</a>
        </div>
        <div class="action-card">
            <span class="wip-badge wip-badge-ontwikkeling">ontwikkeling</span>
            <h4 >Service Pattern</h4>
            <p >Gestandaardiseerde service patronen</p>
            <button disabled class="action-button">Bekijken</button>
        </div>
    </div>
</div>

=== "Beleidsmaker"
    ### Beleidskaders voor service compliance

    **Stappen:**

    1. **Formuleer servicestandaard beleid** - Ontwikkel kaders voor consistente dienstverlening
    2. **Coördineer tussen organisaties** - Zorg voor uniforme implementatie binnen overheid
    3. **Stel kwaliteitsnormen vast** - Bepaal minimumstandaarden voor overheidsdiensten
    4. **Monitor naleving** - Ontwikkel toezichtmechanismen voor servicestandaard
    5. **Evalueer effectiviteit** - Beoordeel impact op gebruikerstevredenheid

    **Belangrijke overwegingen:**

    - Balans tussen standaardisatie en innovatie
    - Afstemming met EU-dienstverlening (Single Digital Gateway)
    - Burgerparticipatie in beleidsvorming
    - Compliance met toegankelijkheidsverordening

    **Policy frameworks:**

    - Nederlandse Digitaliseringsstrategie
    - Agenda NL DIGITAAL
    - Wet modernisering elektronisch bestuurlijk verkeer
    - Omgevingswet digitale ondersteuning

=== "Bestuurder"
    ### Strategische service governance

    **Stappen:**

    1. **Bepaal service vision** - Ontwikkel organisatiebrede visie op dienstverlening
    2. **Investeer in user research** - Budgetteer voor gebruikersonderzoek capaciteit
    3. **Stel service KPI's vast** - Definieer meetbare doelen voor dienstverlening
    4. **Organiseer multidisciplinaire teams** - Breng expertise samen voor service design
    5. **Implementeer continue verbetering** - Maak iteratieve verbetering onderdeel van cultuur

    **Belangrijke overwegingen:**

    - ROI van gebruikersgerichte dienstverlening
    - Organisatorische transformatie naar service-first denken
    - Investering in user experience capabilities
    - Change management voor service-mindset

    **Service governance model:**

    - Service owner per dienst
    - User research centrum voor alle diensten
    - Interdisciplinaire service teams
    - Continuous improvement processen

=== "Projectleider"
    ### Project implementatie servicestandaard

    **Stappen:**

    1. **Service assessment** - Evalueer huidige dienst tegen servicestandaard
    2. **Gebruikersonderzoek plannen** - Organiseer onderzoek naar gebruikersbehoeften
    3. **Multidisciplinair team vormen** - Breng design, development, beleid samen
    4. **Iteratieve ontwikkeling** - Plan sprints met gebruikerfeedback
    5. **Assessment en verbetering** - Doorloop evaluatiecyclus servicestandaard

    **Belangrijke overwegingen:**

    - Gebruikers betrekken gedurende hele project
    - Balans tussen scope en gebruikersbehoeften
    - Documentatie voor servicestandaard compliance
    - Testen met echte gebruikers in realistische scenario's

    **Project toolkit:**

    - Service design canvas
    - User journey mapping tools
    - Usability testing protocols
    - Service standard assessment templates

=== "Developer"
    ### Technische service implementatie

    **Stappen:**

    1. **API-first design** - Ontwikkel services met API-first benadering
    2. **Toegankelijkheid implementeren** - Volg WCAG 2.1 AA richtlijnen
    3. **Performance optimalisatie** - Zorg voor snelle, betrouwbare services
    4. **Monitoring en analytics** - Implementeer gebruiksmetingen
    5. **Security by design** - Integreer beveiliging in service architectuur

    **Code-voorbeeld - Toegankelijke service component:**
    ```javascript
    // React component met WCAG compliance
    import { useState } from 'react';

    function AccessibleServiceForm() {
      const [formData, setFormData] = useState({});
      const [errors, setErrors] = useState({});

      return (
        <form
          onSubmit={handleSubmit}
          aria-labelledby="service-form-title"
          noValidate
        >
          <h2 id="service-form-title">Aanvraag {serviceName}</h2>

          <div className="form-group">
            <label htmlFor="bsn" className="required">
              BSN
            </label>
            <input
              id="bsn"
              type="text"
              aria-describedby="bsn-help bsn-error"
              aria-invalid={errors.bsn ? 'true' : 'false'}
              required
            />
            <div id="bsn-help" className="help-text">
              Vul je 9-cijferige BSN in
            </div>
            {errors.bsn && (
              <div id="bsn-error" className="error-message" role="alert">
                {errors.bsn}
              </div>
            )}
          </div>

          <button type="submit" className="primary-button">
            Aanvraag indienen
          </button>
        </form>
      );
    }
    ```

    **Technische standaarden:**

    - NL Design System componenten
    - REST API Design Rules
    - Dutch API Strategy
    - WCAG 2.1 AA compliance
    - DigiD/eHerkenning integratie

    **Belangrijke overwegingen:**

    - Progressive enhancement voor alle gebruikers
    - Cross-browser compatibiliteit
    - Mobile-first responsive design
    - Offline functionality waar mogelijk

=== "Jurist"
    ### Juridische compliance dienstverlening

    **Stappen:**

    1. **Dienstverlening verplichtingen** - Analyseer wettelijke verplichtingen
    2. **Gebruikersrechten waarborgen** - Zorg voor naleving burgerrechten
    3. **Privacy by design** - Implementeer gegevensbescherming in services
    4. **Toegankelijkheid compliance** - Zorg voor naleving toegankelijkheidsverordening
    5. **Klacht- en bezwaarprocedures** - Implementeer rechtsmiddelen

    **Belangrijke overwegingen:**

    - Algemene wet bestuursrecht (Awb) compliance
    - Wet modernisering elektronisch bestuurlijk verkeer
    - Toegankelijkheidsverordening overheidswebsites
    - AVG-naleving in service design

    **Juridische frameworks:**

    - Dienstenrichtlijn implementatie
    - Single Digital Gateway verordening
    - eIDAS verordening voor identificatie
    - Wet digitale overheid

    **Template service voorwaarden:**

    > **Gebruikersrechten:** Deze service voldoet aan de Servicestandaard. U heeft recht op toegankelijke, gebruiksvriendelijke dienstverlening. Voor klachten over de service kunt u contact opnemen via [contactgegevens] of bezwaar indienen volgens de Awb.

=== "Inkoper"
    ### Inkoop servicestandaard-compliant solutions

    **Stappen:**

    1. **Servicestandaard in aanbesteding** - Formuleer eisen voor compliance
    2. **Leverancier evaluatie** - Beoordeel providers op user experience capabilities
    3. **SLA service kwaliteit** - Contracteer service levels en gebruikerstevredenheid
    4. **User research vereisten** - Eis gebruikersonderzoek in ontwikkelproces
    5. **Toegankelijkheid eisen** - Stel WCAG 2.1 AA als minimum eis

    **Aanbestedingstemplate:**

    > **Servicestandaard compliance:**
    Leverancier moet aantonen dat geleverde diensten voldoen aan de Nederlandse Servicestandaard. Dit omvat gebruikersonderzoek, toegankelijkheid volgens WCAG 2.1 AA, en iteratieve verbetering op basis van gebruikersfeedback.

    **Belangrijke overwegingen:**

    - User experience expertise in leveranciersselectie
    - Contractuele eisen voor gebruikerstesten
    - Service design methodologie in scope
    - Toegankelijkheidsaudit als acceptatiecriterium

    **Evaluatiecriteria:**

    - Ervaring met government service design
    - Portfolio toegankelijke overheidsdiensten
    - User research methodologie
    - Compliance met NL Design System

## Gerelateerde standaarden

## Gerelateerde principes

- [1. Stel gebruikersbehoeften vast](../gebruikersbehoeften/index.md)
- [2. Zorg voor toegankelijkheid en inclusie](../toegankelijkheid/index.md)
- [9. Integreer en pas technologie aan](../integratie/index.md)
