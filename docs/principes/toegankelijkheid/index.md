---
title: "2. Zorg voor toegankelijkheid en inclusie"
summary: Zorg ervoor dat je technologie, infrastructuur en systemen toegankelijk en inclusief zijn voor alle gebruikers.
relations:
  - gebruikersbehoeften
  - servicestandaard
  - open-standaarden
roles:
  - beleidsmaker: high
  - cxo: high
  - projectleider: high
  - developer: high
  - jurist: high
  - inkoper: high
---

# 2. Zorg voor toegankelijkheid en inclusie

Toegankelijkheid gaat over het maken van diensten en systemen die door iedereen kunnen worden gebruikt, inclusief mensen met handicaps of specifieke behoeften. Dit principe zorgt ervoor dat alle burgers gelijke toegang hebben tot overheidsdiensten.

## Waarom is het belangrijk?

- **Wettelijke verplichting**: Overheidsorganisaties zijn wettelijk verplicht om hun digitale diensten toegankelijk te maken
- **Beter voor iedereen**: Toegankelijke diensten zijn meestal eenvoudiger en gebruiksvriendelijker voor iedereen
- **Bereik vergroten**: Je bereikt een breder publiek en zorgt dat niemand wordt uitgesloten
- **Kosteneffectiviteit**: Toegankelijkheid vanaf het begin inbouwen is goedkoper dan achteraf aanpassen
- **Ondersteuning van personeel**: Stelt alle medewerkers in staat om de benodigde infrastructuur te gebruiken
- **Vermijd juridische uitdagingen**: Voorkom potentiële juridische problemen door niet-toegankelijke technologie

Door toegankelijkheid vanaf het begin in te bouwen in je digitale systemen, zorg je ervoor dat je diensten voor iedereen bruikbaar zijn, ongeacht hun capaciteiten of beperkingen.

## Hoe pas je het toe?

<div class="direct-aan-de-slag">
    <h3>Direct aan de slag</h3>

    <div class="warning-banner" style="background-color: #fff3e0; padding: 0.5rem; border-left: 3px solid #ff9800; margin-bottom: 0.8rem;">
        <strong>Work in Progress:</strong> De onderstaande functionaliteit is nog in ontwikkeling.
    </div>

    <div class="action-cards">
        <div class="action-card">
            <span class="wip-badge wip-badge-beschikbaar">beschikbaar</span>
            <h4 >Toegankelijkheidsscan</h4>
            <p >Test uw webpagina's op toegankelijkheid</p>
            <a href="https://www.w3.org/WAI/test-evaluate/tools/list/" class="action-button" target="_blank">Scannen</a>
        </div>
        <div class="action-card">
            <span class="wip-badge wip-badge-beschikbaar">beschikbaar</span>
            <h4 >Deque Axe</h4>
            <p >Toegankelijkheidstester voor webapplicaties</p>
            <a href="https://www.deque.com/axe/" class="action-button" target="_blank">Gebruiken</a>
        </div>
        <div class="action-card">
            <span class="wip-badge wip-badge-beschikbaar">beschikbaar</span>
            <h4 >WCAG-EM Reporter</h4>
            <p >Tool voor het maken van toegankelijkheidsrapporten</p>
            <a href="https://gitlab.com/digilab.overheid.nl/ecosystem/wcag-em-reporter" class="action-button" target="_blank">Gebruiken</a>
        </div>
        <div class="action-card">
            <span class="wip-badge wip-badge-ontwikkeling">ontwikkeling</span>
            <h4 >Inclusief Ontwerpen</h4>
            <p >Toolkit voor inclusief ontwerp</p>
            <a href="https://toolkitinclusie.gebruikercentraal.nl/" class="action-button" target="_blank">Bekijken</a>
        </div>
        <div class="action-card">
            <span class="wip-badge wip-badge-beschikbaar">beschikbaar</span>
            <h4 >NL Design System</h4>
            <p >Toegankelijke componenten</p>
            <a href="https://nldesignsystem.nl" class="action-button" target="_blank">Gebruiken</a>
        </div>
    </div>
</div>

=== "Beleidsmaker"
    ### Beleidskaders voor toegankelijkheid

    **Stappen:**

    1. **Ontwikkel toegankelijkheidsbeleid** - Formuleer kaders binnen Web Accessibility Directive
    2. **Stel toegankelijkheidseisen op** - Definieer minimale WCAG 2.2 AA-standaarden
    3. **Coördineer tussen departementen** - Zorg voor consistente toegankelijkheidsnormen
    4. **Monitor internationale ontwikkelingen** - Volg EU-richtlijnen en VN-verdragen
    5. **Organiseer stakeholderconsultatie** - Betrek gebruikersorganisaties bij beleidsontwikkeling

    **Belangrijke overwegingen:**

    - European Accessibility Act (EAA) implementatie
    - VN-Verdrag inzake de rechten van personen met een handicap
    - Nederlandse Wet gelijke behandeling op grond van handicap
    - Digitale inclusie-doelstellingen binnen EU Digital Decade

=== "Bestuurder"
    ### Strategische toegankelijkheidsgovernance

    **Stappen:**

    1. **Formuleer accessibility-first strategie** - Ontwikkel organisatiebrede toegankelijkheidsvisie
    2. **Bepaal KPI's en metrics** - Stel meetbare doelen voor toegankelijkheidsnaleving
    3. **Budgeteer voor inclusief ontwerp** - Reserveer middelen voor toegankelijkheidsmaatregelen
    4. **Stel toegankelijkheidscommissie in** - Organiseer interdisciplinaire governance
    5. **Communiceer commitment** - Toon externe en interne betrokkenheid bij inclusie

    **Belangrijke overwegingen:**

    - ROI van toegankelijke systemen vs remediation kosten
    - Reputatierisico's bij non-compliance
    - Organisatorische culture change naar inclusief denken
    - Legal liability bij toegankelijkheidsproblemen

=== "Projectleider"
    ### Projectimplementatie van toegankelijkheid

    **Stappen:**

    1. **Integreer toegankelijkheid in projectplanning** - Voeg accessibility-requirements toe aan PID
    2. **Organiseer gebruikerstesten** - Betrek mensen met beperkingen in testfases
    3. **Plan accessibility audits** - Programmeer evaluaties gedurende ontwikkelcyclus
    4. **Coördineer interdisciplinaire teams** - Breng UX, development en legal expertise samen
    5. **Monitor compliance gedurende project** - Track WCAG-naleving in alle sprint reviews

    **Belangrijke overwegingen:**

    - Early stage accessibility-integratie voorkomt kostbare late wijzigingen
    - Gebruikerstesten met assistive technology users
    - Training van projectteams in accessibility-principes
    - Accessibility-gates in approval-processen

=== "Developer"
    ### Technische toegankelijkheidsimplementatie

    **Stappen:**

    1. **Implementeer semantic HTML** - Gebruik correcte HTML-structuur voor screen readers
    2. **Ontwikkel toetsenbordnavigatie** - Zorg voor volledige toetsenbord-toegankelijkheid
    3. **Optimaliseer voor assistive technology** - Test met NVDA, JAWS, VoiceOver
    4. **Implementeer ARIA-attributen** - Voeg semantic information toe waar nodig
    5. **Automatiseer accessibility-testen** - Integreer axe-core in CI/CD pipelines

    **Code-voorbeeld - Toegankelijk formulier:**
    ```html
    <form novalidate>
      <fieldset>
        <legend>Contactgegevens</legend>

        <div class="form-field">
          <label for="email">E-mailadres *</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            aria-describedby="email-error"
            aria-invalid="false"
          >
          <div id="email-error" class="error" aria-live="polite"></div>
        </div>

        <div class="form-field">
          <fieldset>
            <legend>Voorkeurscontact</legend>
            <label>
              <input type="radio" name="contact" value="email">
              E-mail
            </label>
            <label>
              <input type="radio" name="contact" value="phone">
              Telefoon
            </label>
          </fieldset>
        </div>
      </fieldset>

      <button type="submit" aria-describedby="submit-help">
        Verstuur formulier
      </button>
      <div id="submit-help">Dit formulier wordt veilig verzonden</div>
    </form>
    ```

    **CSS-voorbeeld - Focus management:**
    ```css
    /* Focus indicators voor toetsenbordnavigatie */
    .form-field input:focus,
    .form-field select:focus,
    .form-field textarea:focus {
      outline: 3px solid #ffbf00;
      outline-offset: 2px;
      box-shadow: 0 0 0 3px rgba(255, 191, 0, 0.3);
    }

    /* Hoog contrast ondersteuning */
    @media (prefers-contrast: high) {
      .button {
        border: 2px solid currentColor;
      }
    }

    /* Reduced motion ondersteuning */
    @media (prefers-reduced-motion: reduce) {
      * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
      }
    }
    ```

    **Belangrijke overwegingen:**
    - WCAG 2.2 AA-compliance als minimum
    - Automated testing met axe-core, Pa11y
    - Manual testing met screen readers
    - Progressive enhancement principes

=== "Jurist"
    ### Juridische compliance voor toegankelijkheid

    **Stappen:**

    1. **Analyseer Web Accessibility Directive** - Toets systemen op EU-richtlijn 2016/2102
    2. **Implementeer EN 301 549 compliance** - Zorg voor naleving Europese norm
    3. **Stel toegankelijkheidsverklaringen op** - Creëer verplichte accessibility statements
    4. **Organiseer feedback-mechanisme** - Implementeer klachtenprocedure voor accessibility
    5. **Monitor EAA-implementatie** - Voorbereid op European Accessibility Act vanaf 2025

    **Wettelijke verplichtingen:**

    - **Web Accessibility Directive (WAD)**: EU-richtlijn 2016/2102 verplicht WCAG 2.1 AA
    - **European Accessibility Act**: Vanaf 28 juni 2025 voor e-commerce, banking
    - **EN 301 549**: Europese norm voor ICT-toegankelijkheid (hardware en software)
    - **Wet gelijke behandeling handicap**: Nederlandse anti-discriminatiewetgeving

    **Template toegankelijkheidsverklaring:**

    > Deze website voldoet gedeeltelijk aan WCAG 2.1 niveau AA. Bekende problemen worden aangepakt volgens ons [toegankelijkheidsplan]. Voor vragen over toegankelijkheid kunt u contact opnemen via [contactformulier] of telefonisch op [nummer].

    **Belangrijke overwegingen:**

    - Aansprakelijkheid bij discriminatieclaims
    - Bewijs van due diligence bij compliance-inspanningen
    - Periodic review en update van toegankelijkheidsverklaringen
    - Training van legal teams in accessibility-wetgeving

=== "Inkoper"
    ### Inkoop van toegankelijke technologie

    **Stappen:**

    1. **Formuleer accessibility-eisen** - Specificeer EN 301 549 compliance in tenders
    2. **Evalueer leveranciers op inclusie** - Beoordeel aanbieders op accessibility-ervaring
    3. **Stel VPAT-eisen** - Vraag Voluntary Product Accessibility Templates
    4. **Onderhandel over accessibility SLA's** - Definieer service levels voor toegankelijkheid
    5. **Plan accessibility-audits** - Stel eisen voor periodieke compliance-controles

    **Template aanbestedingseis:**

    > **Toegankelijkheidsvereisten:** Leverancier moet aantonen dat geleverde software/hardware voldoet aan EN 301 549 standaarden en WCAG 2.1 niveau AA. Bewijs via independent accessibility audit rapport (niet ouder dan 6 maanden) is verplicht. Leverancier garandeert dat toekomstige updates de toegankelijkheid behouden.

    **VPAT-checkpoints:**

    - Conformance level (A, AA, AAA) per WCAG-criterium
    - Test methodologie en tools gebruikt
    - Bekende toegankelijkheidsproblemen en remediation timeline
    - Ondersteuning voor assistive technologies

    **Belangrijke overwegingen:**

    - Total Cost of Ownership inclusief accessibility-features
    - Vendor commitment tot toegankelijkheid in roadmap
    - Training en support voor accessibility-features
    - Exit-strategieën bij non-compliance

## Gerelateerde standaarden

- [Web Content Accessibility Guidelines (WCAG 2.2)](https://www.w3.org/TR/WCAG22/)
- [EN 301 549](https://www.etsi.org/deliver/etsi_en/301500_301599/301549/03.02.01_60/en_301549v030201p.pdf) (Europese norm voor hardware/niet-web software)
- [Digitoegankelijkheid](https://www.digitoegankelijk.nl/toegankelijkheid/en-301-549-en-wcag) (voorheen 'Webrichtlijnen')

## Gerelateerde hulpmiddelen

- [Handreiking Mobiele app Ontwikkeling en Beheer versie 4.0](https://www.noraonline.nl/images/noraonline/2/26/Handreiking_Mobiele_App_4.0.pdf) - Hoofdstuk 8.3 geeft concrete best practices voor verschillende beperkingen voor de ontwikkeling van Mobiele Apps
- [Kennisbank Digitoegankelijk](https://kennisbank.digitoegankelijk.nl) - Praktische tips over digitale toegankelijkheid

## Gerelateerde principes

- [1. Stel gebruikersbehoeften vast](../gebruikersbehoeften/index.md)
- [4. Gebruik open standaarden](../open-standaarden/index.md)
- [14. Voldoe aan de servicestandaard](../servicestandaard/index.md)
