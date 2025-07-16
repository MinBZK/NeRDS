---
title: "6. Maak veilige systemen"
summary: Houd systemen en gegevens veilig met het juiste beveiligingsniveau.
relations:
  - privacy
  - data
  - algoritmen
  - cloud
roles:
  - beleidsmaker: high
  - developer: high
  - jurist: high
  - inkoper: high
  - cxo: high
  - projectleider: high
---

# 6. Maak veilige systemen

Beveiliging is een fundamenteel aspect van digitale systemen. Het gaat niet alleen om het beschermen tegen aanvallen, maar ook om het waarborgen van de beschikbaarheid, integriteit en vertrouwelijkheid van gegevens en diensten.

## Waarom is het belangrijk?

- **Bescherming van gevoelige gegevens**: Overheidsorganisaties verwerken vaak persoonlijke en gevoelige informatie
- **Behoud van vertrouwen**: Burgers moeten erop kunnen vertrouwen dat hun gegevens veilig zijn
- **Wettelijke verplichting**: Naleving van relevante wetgeving en standaarden
- **Continuïteit van dienstverlening**: Voorkom verstoring van essentiële overheidsdiensten
- **Bescherming tegen bedreigingen**: Verdediging tegen een groeiend aantal cyberdreigingen
- **Kostenbeheersing**: Voorkom dure herstelkosten en boetes na beveiligingsincidenten
- **Reputatiebescherming**: Behoud het vertrouwen van burgers en partners in de overheid
- **Concurrentievoordeel**: Sterke beveiliging maakt innovatie en samenwerking mogelijk

Door beveiliging serieus te nemen en het te integreren in alle aspecten van technologieontwikkeling en -gebruik, bescherm je niet alleen gegevens maar ook het vertrouwen van burgers in de digitale overheid.

## Hoe pas je het toe?

<div class="direct-aan-de-slag">
    <h3>Direct aan de slag</h3>

    <div class="warning-banner" style="background-color: #fff3e0; padding: 0.5rem; border-left: 3px solid #ff9800; margin-bottom: 0.8rem;">
        <strong>Work in Progress:</strong> De onderstaande functionaliteit is nog in ontwikkeling.
    </div>

    <div class="action-cards">
        <div class="action-card">
            <span class="wip-badge wip-badge-beschikbaar">beschikbaar</span>
            <h4 >BIO Wizard</h4>
            <p >Bepaal verplichte beveiligingsmaatregelen</p>
            <a href="https://bio-overheid.nl/ico-wizard" class="action-button" target="_blank">Starten</a>
        </div>
        <div class="action-card">
            <span class="wip-badge wip-badge-beschikbaar">beschikbaar</span>
            <h4 >OpenKAT</h4>
            <p >Open source security tooling</p>
            <a href="https://github.com/minvws/nl-kat-coordination" class="action-button" target="_blank">Gebruiken</a>
        </div>
        <div class="action-card">
            <span class="wip-badge wip-badge-beschikbaar">beschikbaar</span>
            <h4 >Internet.nl</h4>
            <p >Test veiligheid van je website of e-mail</p>
            <a href="https://internet.nl/" class="action-button" target="_blank">Testen</a>
        </div>
    </div>
</div>

=== "Beleidsmaker"
    ### Beleidskaders voor cybersecurity governance

    **Stappen:**

    1. **Nationale cybersecurity strategie** - Ontwikkel en implementeer kaders binnen Nederlandse Cybersecurity Strategie
    2. **Wetgevingscompliance** - Zorg voor naleving NIS2-richtlijn en Cybersecurity Act
    3. **Interministeriële coördinatie** - Harmoniseer beveiligingsbeleid tussen overheidsorganisaties
    4. **Risicobeleid formuleren** - Stel organisatiebrede risk appetite en tolerance levels vast
    5. **Internationale samenwerking** - Coördineer met EU-cybersecurity initiatieven

    **Belangrijke overwegingen:**

    - Balans tussen beveiliging en gebruiksvriendelijkheid
    - Compliance met EU-wetgeving (NIS2, Cybersecurity Act)
    - Integratie met privacy- en databeleid
    - Incident response governance

    **Concrete acties:**

    - Formuleer organisatiebrede cybersecurity governance
    - Ontwikkel beleidskaders voor Zero Trust architectuur
    - Stel ethische richtlijnen op voor AI-beveiligingstoepassingen

=== "Bestuurder"
    ### Strategische security governance en risk management

    **Stappen:**

    1. **Cybersecurity strategie** - Ontwikkel organisatiebrede security vision en roadmap
    2. **Risk appetite bepalen** - Stel acceptable risk levels vast voor verschillende bedrijfsprocessen
    3. **Security budget planning** - Alloceer resources voor preventie, detectie en response
    4. **Board-level reporting** - Implementeer cybersecurity KPI's en dashboards
    5. **Crisis management** - Stel procedures op voor security incident escalatie

    **Belangrijke overwegingen:**

    - ROI van security investeringen vs risico-acceptatie
    - Regulatory compliance kosten en impact
    - Reputatierisico's bij security incidenten
    - Cyber insurance en risk transfer strategieën

    **Concrete acties:**

    - Implementeer quarterly security reviews op bestuursniveau
    - Ontwikkel metrics voor security maturity measurement
    - Stel crisis communication plannen op voor data breaches

=== "Projectleider"
    ### Project implementatie van security maatregelen

    **Stappen:**

    1. **Security requirements** - Integreer beveiligingseisen in projectscope vanaf aanvang
    2. **Threat modeling** - Voer dreigingsanalyse uit voor projectspecifieke context
    3. **Security testing planning** - Plan penetratietesten en vulnerability assessments
    4. **Change management** - Coördineer security awareness training voor projectteams
    5. **Compliance tracking** - Monitor naleving van security standaarden tijdens project

    **Belangrijke overwegingen:**

    - Balance tussen project timeline en security rigor
    - Stakeholder alignment rond security vs functionaliteit
    - Budget impact van security requirements
    - Integration met bestaande security infrastructure

    **Concrete acties:**

    - Gebruik NIST Cybersecurity Framework voor project security planning
    - Implementeer security gates in project lifecycle
    - Plan security acceptance criteria voor user stories

=== "Developer"
    ### Technische security implementatie

    **Stappen:**

    1. **Secure coding practices** - Implementeer OWASP Top 10 preventie in code
    2. **Authentication & authorization** - Bouw robuuste identity management
    3. **Encryption implementation** - Implementeer end-to-end encryption voor data
    4. **Security testing** - Integreer SAST/DAST in CI/CD pipelines
    5. **Monitoring & logging** - Implementeer security event logging en alerting

    **Code-voorbeeld - Secure authentication:**
    ```python
    # Secure password hashing met bcrypt
    import bcrypt
    from flask import Flask, request, jsonify
    from flask_jwt_extended import JWTManager, create_access_token

    app = Flask(__name__)
    app.config['JWT_SECRET_KEY'] = 'your-secret-key'  # Use environment variable
    jwt = JWTManager(app)

    class SecureAuth:
        @staticmethod
        def hash_password(password: str) -> str:
            """Hash password with bcrypt and salt"""
            salt = bcrypt.gensalt()
            return bcrypt.hashpw(password.encode('utf-8'), salt).decode('utf-8')

        @staticmethod
        def verify_password(password: str, hashed: str) -> bool:
            """Verify password against hash"""
            return bcrypt.checkpw(password.encode('utf-8'), hashed.encode('utf-8'))

    @app.route('/login', methods=['POST'])
    def login():
        data = request.get_json()

        # Input validation
        if not data or not data.get('username') or not data.get('password'):
            return jsonify({'error': 'Missing credentials'}), 400

        # Rate limiting zou hier geïmplementeerd moeten worden
        # Authenticate user (pseudo-code)
        user = authenticate_user(data['username'])

        if user and SecureAuth.verify_password(data['password'], user['password_hash']):
            access_token = create_access_token(identity=user['id'])
            return jsonify({'access_token': access_token})

        return jsonify({'error': 'Invalid credentials'}), 401
    ```

    **Security by design implementatie:**
    ```javascript
    // Content Security Policy implementation
    const helmet = require('helmet');

    app.use(helmet({
      contentSecurityPolicy: {
        directives: {
          defaultSrc: ["'self'"],
          styleSrc: ["'self'", "'unsafe-inline'"],
          scriptSrc: ["'self'"],
          imgSrc: ["'self'", "data:"],
          connectSrc: ["'self'"],
          fontSrc: ["'self'"],
          objectSrc: ["'none'"],
          upgradeInsecureRequests: [],
        },
      },
      hsts: {
        maxAge: 31536000,
        includeSubDomains: true,
        preload: true
      }
    }));
    ```

    **Belangrijke overwegingen:**
    - Input validation en sanitization
    - Secure session management
    - Error handling zonder information leakage
    - Dependency vulnerability monitoring

=== "Jurist"
    ### Legal compliance (NIS2, GDPR, cybersecurity wetgeving)

    **Stappen:**

    1. **NIS2 compliance** - Implementeer vereisten voor kritieke infrastructuur
    2. **GDPR security measures** - Zorg voor 'state of the art' beveiliging artikel 32
    3. **Incident notification** - Stel procedures op voor meldplicht datalekken
    4. **Data retention policies** - Ontwikkel juridisch conforme bewaarbeleid
    5. **Cross-border data transfers** - Beoordeel international security requirements

    **Wettelijk kader:**

    - **NIS2-richtlijn**: Verhoogde security requirements voor essentiële diensten
    - **GDPR Artikel 32**: Beveiliging van verwerking (technical and organizational measures)
    - **Cybersecurity Act**: EU-certificering voor cybersecurity producten
    - **Wet beveiliging netwerk- en informatiesystemen**: Nederlandse implementatie NIS2

    **Belangrijke overwegingen:**

    - Liability bij security incidenten
    - Contractuele security obligations met leveranciers
    - International jurisdiction bij cloud security
    - Compliance monitoring en audit trails

    **Template security clause:**

    > **Beveiliging van persoonsgegevens:** Verwerkingsverantwoordelijke implementeert passende technische en organisatorische maatregelen als bedoeld in artikel 32 AVG, waaronder versleuteling, pseudonimisering, toegangscontrole en regelmatige security assessments.

    **Concrete acties:**

    - Ontwikkel juridische checklists voor security compliance
    - Stel Data Protection Impact Assessments (DPIA) procedures op
    - Adviseer over international security law implications

=== "Inkoper"
    ### Procurement van secure technology en services

    **Stappen:**

    1. **Security requirements specificeren** - Definieer security eisen in aanbestedingen
    2. **Vendor security assessment** - Evalueer leveranciers op security maturity
    3. **SLA onderhandelingen** - Stel security performance indicators vast
    4. **Supply chain security** - Beoordeel security risico's in leveranciersketen
    5. **Contract monitoring** - Monitor naleving security verplichtingen

    **Template aanbestedingseis:**

    > **Security standaarden:**
    Leverancier moet aantonen dat producten/diensten voldoen aan ISO 27001, NEN 7510 (zorgverlening), en/of Common Criteria EAL4+. Leverancier dient kwartaalrapportages te verstrekken over security incidents en remediation.

    **Evaluation criteria:**

    - **Security certifications**: ISO 27001, SOC 2 Type II, Common Criteria
    - **Incident response**: 24/7 security operations center, escalation procedures
    - **Vulnerability management**: Patch management SLA's, responsible disclosure
    - **Compliance**: GDPR, NIS2, sector-specific regulations

    **Belangrijke overwegingen:**

    - TCO van security vs risk exposure
    - Vendor lock-in preventie via security standards
    - Exit-strategieën bij security non-compliance
    - Insurance en liability coverage

    **Concrete acties:**

    - Gebruik gestandaardiseerde security vragenlijsten (bijv. SIG Questionnaire)
    - Ontwikkel security scorecards voor vendor evaluation
    - Implementeer third-party risk management programma

## Gerelateerde standaarden

- [ISO 27001](https://www.forumstandaardisatie.nl/open-standaarden/nen-isoiec-27001) en [ISO 27002](https://www.forumstandaardisatie.nl/open-standaarden/nen-isoiec-27002)
- [Baseline Informatiebeveiliging Overheid (BIO)](https://bio-overheid.nl/ico-wizard) - Gebruik de BIO ICO-wizard om te bepalen welke BIO-maatregelen in jouw situatie van toepassing zijn
- [NIST Cybersecurity Framework](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf)
- [OWASP Top 10 voor webapplicatiebeveiliging](https://owasp.org/www-project-top-ten/)
- [Privacy by Design principes](https://www.rijksoverheid.nl/documenten/rapporten/2023/06/01/handleiding-privacy-by-design-versie-1-0)

## Gerelateerde hulpmiddelen

- [Nationaal Cyber Security Centrum (NCSC)](https://www.ncsc.nl/) - Centrale kennisautoriteit voor cybersecurity in Nederland, met actuele dreigingsinformatie, advisering en ondersteuning
  - [NCSC ICT-beveiligingsrichtlijnen voor webapplicaties](https://www.ncsc.nl/documenten/publicaties/2019/mei/01/ict-beveiligingsrichtlijnen-voor-webapplicaties)
  - [NCSC ICT-beveiligingsrichtlijnen voor mobiele apparaten](https://www.ncsc.nl/documenten/publicaties/2019/mei/01/beveiligingsrichtlijnen-voor-mobiele-apparaten)
- [Rijksinspectie Digitale Infrastructuur (RDI)](https://www.rdi.nl/) - Toezichthouder op het gebied van digitale infrastructuur en telecom
- [Nationaal innovatie centrum privacy-enhancing technologies (NICPET)](https://nicpet.pleio.nl/) - Innovatiecentrum gericht op privacybeschermende technologieën
- [OpenKAT](https://github.com/minvws/nl-kat-coordination) - Open source security kennisbank en tooling voor automatische testen
- [Internet.nl](https://internet.nl/) - Test of je website en e-mail moderne internetstandaarden gebruiken die helpen om te beschermen tegen phishing en afluisteren
- [Handreiking Mobiele app Ontwikkeling en Beheer versie 4.0](https://www.noraonline.nl/images/noraonline/2/26/Handreiking_Mobiele_App_4.0.pdf) - Hoofdstuk 10 geeft concrete beveiligingsmaatregelen voor de ontwikkeling van mobiele apps
- [Handreiking Cybersecurity voor Bestuurders en Bedrijfseigenaren](https://www.cybersecurityraad.nl/documenten/2025/06/04/handreiking-cybersecurity-voor-bestuurders-en-bedrijfseigenaren) <!--RM: ik weet niet zeker of deze bron nuttig is-->

## Gerelateerde principes

- [7. Maak privacy integraal](../privacy/index.md)
- [10. Maak beter gebruik van data](../data/index.md)
- [11. Pas algoritmen verantwoord toe](../algoritmen/index.md)
- [5. Hanteer een cloud-gedreven strategie](../cloud/index.md)
