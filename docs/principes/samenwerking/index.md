---
title: "8. Deel, hergebruik en werk samen"
summary: Vermijd dubbel werk en onnodige kosten door samen te werken binnen de overheid en door technologie te delen en te hergebruiken.
relations:
  - open-source
  - integratie
  - duurzaamheid
roles:
  - beleidsmaker: high
  - cxo: high
  - projectleider: high
  - developer: medium
  - jurist: medium
  - inkoper: medium
---

# 8. Deel, hergebruik en werk samen

Door samen te werken, kennis te delen en oplossingen te hergebruiken, kunnen overheidsorganisaties efficiënter werken, kosten besparen en betere diensten leveren aan burgers en bedrijven.

## Waarom is het belangrijk?

- **Interoperabiliteit:** Systemen kunnen gemakkelijk gegevens uitwisselen en samenwerken
- **Kosteneffectiviteit**: Voorkom dat het wiel meerdere keren wordt uitgevonden
- **Hogere kwaliteit**: Profiteer van bestaande, bewezen oplossingen
- **Snellere implementatie**: Versnel projecten door bestaande componenten te gebruiken
- **Kennisdeling**: Leer van ervaringen en expertise van anderen
- **Standaardisatie**: Bevorder consistentie en interoperabiliteit
- **Innovatie**: Combineer inzichten en benaderingen voor nieuwe oplossingen

Door actief samen te werken, kennis te delen en bestaande oplossingen te hergebruiken, kan de overheid efficiënter werken, kosten besparen en consistentere diensten leveren aan burgers en bedrijven.

## Hoe pas je het toe?

<div class="direct-aan-de-slag">
    <h3>Direct aan de slag</h3>

    <div class="warning-banner" style="background-color: #fff3e0; padding: 0.5rem; border-left: 3px solid #ff9800; margin-bottom: 0.8rem;">
        <strong>Work in Progress:</strong> De onderstaande functionaliteit is nog in ontwikkeling.
    </div>

    <div class="action-cards">
        <div class="action-card">
            <span class="wip-badge wip-badge-beschikbaar">beschikbaar</span>
            <h4 >Developer Overheid</h4>
            <p >Communities voor overheidsontwikkelaars</p>
            <a href="https://developer.overheid.nl/" class="action-button" target="_blank">Deelnemen</a>
        </div>
        <div class="action-card">
            <span class="wip-badge wip-badge-beschikbaar">beschikbaar</span>
            <h4 >NL Design System</h4>
            <p >Samen bouwen aan gebruiksvriendelijke overheidswebsites</p>
            <a href="https://www.nldesignsystem.nl" class="action-button" target="_blank">Ontdekken</a>
        </div>
        <div class="action-card">
            <span class="wip-badge wip-badge-concept">concept</span>
            <h4 >GovHub</h4>
            <p >Centrale hub voor overheidscomponenten</p>
            <button disabled class="action-button">Verkennen</button>
        </div>
    </div>
</div>

=== "Beleidsmaker"
    ### Beleidskaders voor overheidssamenwerking

    **Stappen:**
    1. **Formuleer samenwerkingsbeleid** - Ontwikkel kaders voor interbestuurlijke samenwerking
    2. **Stimuleer kennisuitwisseling** - Creëer structuren voor best practice sharing
    3. **Harmoniseer wetgeving** - Verwijder juridische belemmeringen voor samenwerking
    4. **Bevorder Common Ground** - Ondersteun gemeenschappelijke informatiehuishoudingen
    5. **Monitor samenwerkingssuccessen** - Meet effectiviteit van gezamenlijke initiatieven

    **Belangrijke overwegingen:**
    - Interbestuurlijke governance structuren
    - Uniforme standaarden en protocollen
    - Democratische legitimiteit van samenwerking
    - Transparantie en verantwoording

    **Dutch Government context:**
    - Steun [Common Ground](https://commonground.nl) initiatieven
    - Implementeer [VNG Realisatie](https://www.vngrealisatie.nl/) standaarden
    - Volg [Digitale Overheid](https://www.digitaleoverheid.nl/) richtlijnen
    - Pas [Nederlandse Overheid Referentie Architectuur (NORA)](https://www.noraonline.nl/) toe

=== "CXO/Bestuurder"
    ### Strategische samenwerkingsgovernance

    **Stappen:**
    1. **Definieer partnerships** - Identificeer strategische samenwerkingspartners
    2. **Ontwikkel governance model** - Stel bestuurlijke kaders voor samenwerking op
    3. **Budgeteer gezamenlijk** - Creëer financiële modellen voor gedeelde kosten
    4. **Manage risico's** - Analyseer samenwerkingsrisico's en afhankelijkheden
    5. **Evalueer resultaten** - Meet ROI van samenwerkingsinvesteringen

    **Belangrijke overwegingen:**
    - Organisatorische autonomie vs samenwerking
    - Intellectual property en eigendom
    - Accountability en verantwoordelijkheid
    - Exit-strategieën voor partnerships

    **Strategic partnerships:**
    - Deel in [G4 samenwerking](https://www.g4.nl/) (Amsterdam, Rotterdam, Den Haag, Utrecht)
    - Participeer in [Digitale Overheid samenwerkingen](https://www.digitaleoverheid.nl/)
    - Onderzoek [Europese interoperabiliteit](https://ec.europa.eu/digital-building-blocks/sites/display/DIGITAL/European+Interoperability+Framework+Implementation+Strategy) kansen

=== "Projectleider"
    ### Projectimplementatie van samenwerking

    **Stappen:**
    1. **Identificeer hergebruik kansen** - Scan bestaande oplossingen voor project
    2. **Coördineer multi-organisatie teams** - Organiseer cross-boundary samenwerking
    3. **Plan gefaseerde implementatie** - Rol gezamenlijke oplossingen stapsgewijs uit
    4. **Faciliteer kennisoverdracht** - Organiseer workshops en documentatie
    5. **Monitor adoptie** - Track gebruik van gedeelde componenten

    **Belangrijke overwegingen:**
    - Verschillende organisatieculturen
    - Afstemming van planning en resources
    - Communicatie tussen teams
    - Kwaliteitsborging over organisaties heen

    **Project tools:**
    - Gebruik [Slack voor Developer Overheid](https://developer.overheid.nl/community)
    - Plan met [Common Ground Roadmap](https://commonground.nl/roadmap)
    - Documenteer in [VNG Realisatie](https://www.vngrealisatie.nl/) repositories

=== "Developer"
    ### Technische samenwerkingsimplementatie

    **Stappen:**
    1. **Stel code repositories in** - Creëer gedeelde ontwikkelomgevingen
    2. **Implementeer API's** - Ontwikkel interoperabiliteitslagen
    3. **Gebruik gemeenschappelijke componenten** - Integreer herbruikbare libraries
    4. **Automatiseer workflows** - Implementeer CI/CD voor gedeelde projecten
    5. **Documenteer technische specificaties** - Maak hergebruik mogelijk

    **Code-voorbeelden:**

    **Gedeelde component library:**
    ```javascript
    // NL Design System component
    import { Button, Form } from '@nl-design-system/components';

    // Herbruikbare overheidscomponent
    const DigiDAuthButton = ({ onSuccess, onError }) => {
      const handleDigiDAuth = async () => {
        try {
          const response = await fetch('/api/digid/authenticate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }
          });
          const data = await response.json();
          onSuccess(data);
        } catch (error) {
          onError(error);
        }
      };

      return (
        <Button onClick={handleDigiDAuth}>
          Inloggen met DigiD
        </Button>
      );
    };
    ```

    **API voor gegevensuitwisseling:**
    ```python
    # REST API voor BRP gegevens (volgens VNG standaard)
    from flask import Flask, jsonify
    from flask_restx import Api, Resource, fields

    app = Flask(__name__)
    api = Api(app, doc='/docs/')

    brp_model = api.model('BRPPersoon', {
        'bsn': fields.String(required=True, description='BSN'),
        'naam': fields.Nested({
            'voornamen': fields.String,
            'geslachtsnaam': fields.String
        }),
        'adres': fields.Nested({
            'postcode': fields.String,
            'woonplaats': fields.String
        })
    })

    @api.route('/brp/personen/<string:bsn>')
    class BRPPersoon(Resource):
        @api.marshal_with(brp_model)
        def get(self, bsn):
            # Implementatie volgens VNG API standaard
            return brp_service.get_persoon(bsn)
    ```

    **Belangrijke overwegingen:**
    - Open source licenties (EUPL-1.2)
    - API versioning en backwards compatibility
    - Security en authenticatie (OAuth2, PKI)
    - Monitoring en logging

=== "Jurist"
    ### Juridische compliance voor samenwerking

    **Stappen:**
    1. **Stel samenwerkingsovereenkomsten op** - Ontwikkel juridische frameworks
    2. **Analyseer IP-eigendom** - Bepaal eigendomsrechten bij gezamenlijke ontwikkeling
    3. **Reguleer datadeling** - Creëer AVG-conforme data sharing agreements
    4. **Adviseer over aansprakelijkheid** - Definieer verantwoordelijkheden
    5. **Monitor compliance** - Controleer naleving van samenwerkingsafspraken

    **Belangrijke overwegingen:**
    - Intellectuele eigendomsrechten
    - Aansprakelijkheid bij gezamenlijke projecten
    - Privacy en datadeling tussen organisaties
    - Contractuele exit-strategieën

    **Juridische instrumenten:**
    - [Wet hergebruik overheidsinformatie](https://wetten.overheid.nl/BWBR0036795/2021-07-01)
    - [AVG](https://gdpr.eu/tag/gdpr/) voor gegevensuitwisseling
    - [Archiefwet](https://wetten.overheid.nl/BWBR0007376/2021-07-01) voor documentbeheer
    - [Auteursrecht](https://wetten.overheid.nl/BWBR0001886/2021-07-01) en open source licenties

    **Template clausule datadeling:**
    > "Partijen komen overeen dat uitwisseling van persoonsgegevens plaatsvindt conform artikel 28 AVG, waarbij verwerkingsverantwoordelijkheden zijn gedefinieerd in bijlage X. Gegevens worden uitsluitend verwerkt voor publiekrechtelijke taken conform artikel 6 lid 1 sub e AVG."

=== "Inkoper"
    ### Inkoopstrategieën voor samenwerkingsoplossingen

    **Stappen:**
    1. **Bundel inkoopvolumes** - Organiseer gezamenlijke aanbestedingen
    2. **Ontwikkel standaard contracten** - Creëer herbruikbare inkoopsjablonen
    3. **Evalueer leveranciers** - Beoordeel op samenwerkingsbereidheid
    4. **Faciliteer kennisuitwisseling** - Deel inkoopervaringen tussen organisaties
    5. **Monitor contract-performance** - Evalueer gezamenlijke leveranciers

    **Belangrijke overwegingen:**
    - Gezamenlijke aanbestedingsprocedures
    - Standaardisatie van requirements
    - Vendor management over organisaties heen
    - Kostenverdeling en budgettering

    **Samenwerkingsmodellen:**
    - [Inkoopplatform PIANOo](https://www.pianoo.nl/) voor best practices
    - [G4 gezamenlijke inkoop](https://www.g4.nl/) voor grote steden
    - [Shared Service Centra](https://www.ssc-ictu.nl/) voor ICT-diensten
    - [Leveranciersportaal](https://www.leveranciersportaal.nl/) voor marktconsultatie

    **Template aanbestedingseis:**
    > "Leverancier dient aan te tonen dat oplossing interoperabel is met bestaande overheidsstandaarden (NORA, Common Ground) en ondersteuning biedt voor multi-tenant deployment voor meerdere overheidsorganisaties."

## Samenwerkingsplatforms en hulpmiddelen

- Gemeenschappelijke coderepositorys
- Kennisbanken en wiki's
- Communities of practice
- Samenwerkingssessies en hackathons
- Overkoepelende projectteams
- Gedeelde databases en dataplatforms

## Voorbeelden van herbruikbare componenten

- Authenticatiemechanismen
- Betalingssystemen
- Formulieroplossingen
- Notificatieservices
- Gegevensbeheertools
- Documentbeheersystemen

## UK Government Digital Service: Ervaringen van de Britse overheid

De [UK Government Digital Service (GDS)](https://www.gov.uk/government/organisations/government-digital-service) is het digitale centrum van de Britse overheid, verantwoordelijk voor het vaststellen, leiden en leveren van de visie voor een moderne digitale overheid. GDS heeft sinds 2011 baanbrekend werk verricht in digitale transformatie en heeft uitgebreide bronnen en richtlijnen ontwikkeld voor het verminderen van risico's bij digitale overheidsprojecten.

### Belangrijkste concepten

1. **Digital by Default strategie**

    - Gebruikersbehoeften centraal stellen bij serviceontwerp
    - Digitale services die zo goed zijn dat mensen ze verkiezen boven niet-digitale alternatieven
    - Iteratieve ontwikkeling gebaseerd op gebruikersonderzoek en feedback

2. **GOV.UK Design System**

    - Herbruikbare componenten en patronen voor consistente gebruikerservaringen
    - Bewezen toegankelijke en gebruiksvriendelijke ontwerpelementen
    - [Uitgebreide documentatie](https://design-system.service.gov.uk/) voor implementatie

3. **Moderne procurement en leveranciersbeheer**

    - Kleinere contracten in plaats van grote, monolithische systemen
    - Multidisciplinaire teams met agile werkwijzen
    - Focus op het aantrekken van diverse leveranciers, inclusief SME's

4. **Gebruikersonderzoek en service design**

    - "Start with user needs" als fundamenteel principe
    - Regelmatige gebruikerstests en iteratie
    - Data-gedreven besluitvorming

### GDS Principes en methoden

GDS hanteert bewezen [design principes](https://www.gov.uk/guidance/government-design-principles) die directe toepassing hebben voor Nederlandse overheidsorganisaties:

- **Start met gebruikersbehoeften**: Begrijp werkelijke problemen voordat je oplossingen bouwt
- **Doe minder**: Focus op kernfunctionaliteit in plaats van "nice-to-have" features
- **Ontwerp met data**: Gebruik analytics en gebruikersonderzoek voor beslissingen
- **Maak het toegankelijk**: Zorg dat services werken voor iedereen
- **Itereer en verbeter regelmatig**: Lanceer snel en verbeter voortdurend

GDS heeft bewezen dat een gebruikersgerichte, agile aanpak leidt tot betere services tegen lagere kosten. Hun openbare documentatie en ervaring van meer dan een decennium digitale transformatie maken hen een uitstekende inspiratiebron voor Nederlandse overheidsorganisaties die hun digitale services willen verbeteren.

### Toepassing in Nederlandse context

Bij het toepassen van GDS-inzichten in de Nederlandse context, overweeg het volgende:

- **Europese samenwerking**: Deel ervaringen en best practices binnen de EU
- **Lokale wetgeving**: Pas methodieken aan voor Nederlandse privacy- en toegankelijkheidswetten
- **Gemeenschappelijke standaarden**: Gebruik het [GOV.UK Design System](https://design-system.service.gov.uk/) als inspiratie voor Nederlandse design patterns
- **Kennisuitwisseling**: Leer van GDS's openbare documentatie en [blog](https://gds.blog.gov.uk/)

## Gerelateerde hulpmiddelen

- **[Government Design Principles](https://www.gov.uk/guidance/government-design-principles)**: Fundamentele principes voor overheidsservices
- **[Service Manual](https://www.gov.uk/service-manual)**: Praktische gids voor het bouwen van digitale services
- **[Technology Code of Practice](https://www.gov.uk/guidance/the-technology-code-of-practice)**: Richtlijnen voor technologiekeuzes
- **[GDS Blog](https://gds.blog.gov.uk/)**: Actuele inzichten en casestudies

## Gerelateerde principes

- [3. Werk transparant en gebruik open source](../open-source/index.md)
- [9. Integreer en pas technologie aan](../integratie/index.md)
- [13. Maak je technologie duurzaam](../duurzaamheid/index.md)
