---
title: "7. Maak privacy integraal"
summary: Zorg ervoor dat gebruikersrechten worden beschermd door privacy te integreren als een essentieel onderdeel van je systeem.
relations:
  - veiligheid
  - data
  - algoritmen
  - gebruikersbehoeften
roles:
  - beleidsmaker: high
  - cxo: high
  - projectleider: high
  - developer: high
  - jurist: high
  - inkoper: high
---

# 7. Maak privacy integraal

Privacy is een fundamenteel recht dat vanaf het begin moet worden ingebouwd in digitale systemen. Door privacy als kerncomponent te integreren, bescherm je niet alleen de rechten van gebruikers, maar bouw je ook vertrouwen op in overheidsdiensten.

## Waarom is het belangrijk?

- **Wettelijke verplichting**: Voldoe aan de Algemene Verordening Gegevensbescherming (AVG) en andere privacywetgeving
- **Vertrouwen opbouwen**: Burgers vertrouwen systemen die hun privacy respecteren
- **Risicovermindering**: Voorkom datalekken en privacyschendingen (zie [Maak veilige systemen](../veiligheid/index.md))
- **Ethische verantwoordelijkheid**: Respecteer de rechten en waardigheid van individuen
- **Goede dienstverlening**: Privacy-vriendelijke systemen zijn vaak gebruiksvriendelijker (zie [Voldoe aan de servicestandaard](../servicestandaard/index.md))
- **Kosteneffectiviteit**: Voorkom dure boetes en herstelkosten door privacy vanaf het begin in te bouwen
- **Datakwaliteit**: Privacy by design leidt vaak tot betere, meer nauwkeurige gegevensverzameling

Door privacy integraal te maken in het ontwerpproces van digitale systemen, voldoe je niet alleen aan wettelijke vereisten, maar bouw je ook systemen die burgers vertrouwen en die hun rechten respecteren.

## Hoe pas je het toe?

<div class="direct-aan-de-slag">
    <h3>Direct aan de slag</h3>

    <div class="warning-banner" style="background-color: #fff3e0; padding: 0.5rem; border-left: 3px solid #ff9800; margin-bottom: 0.8rem;">
        <strong>Work in Progress:</strong> De onderstaande functionaliteit is nog in ontwikkeling.
    </div>

    <div class="action-cards">
        <div class="action-card">
            <span class="wip-badge wip-badge-beschikbaar">beschikbaar</span>
            <h4 >DPIA-model</h4>
            <p >Model voor gegevensbeschermingseffectbeoordeling</p>
            <a href="https://www.autoriteitpersoonsgegevens.nl/nl/onderwerpen/avg-europese-privacywetgeving/data-protection-impact-assessment-dpia" class="action-button" target="_blank">Downloaden</a>
        </div>
        <div class="action-card">
            <span class="wip-badge wip-badge-beschikbaar">beschikbaar</span>
            <h4 >Pre-scan DPIA & DPIA Formulier</h4>
            <p >Online formulier voor gegevensbeschermingseffectbeoordeling</p>
            <a href="https://minbzk.github.io/par-dpia-form/" class="action-button" target="_blank">Starten</a>
        </div>
        <div class="action-card">
            <span class="wip-badge wip-badge-ontwikkeling">ontwikkeling</span>
            <h4 >NICPET Tools</h4>
            <p >Privacy-bevorderende technologieën</p>
            <a href="https://nicpet.pleio.nl/" class="action-button" target="_blank">Verkennen</a>
        </div>
        <div class="action-card">
            <span class="wip-badge wip-badge-concept">concept</span>
            <h4 >Privacy Check</h4>
            <p >Geautomatiseerde privacycheck</p>
            <button disabled class="action-button">Starten</button>
        </div>
    </div>
</div>

=== "Beleidsmaker"
    ### Beleidskaders voor privacy-governance

    **Stappen:**

    1. **Ontwikkel privacy-governance beleid** - Formuleer kaders voor privacybescherming overheidsorganisaties
    2. **Harmoniseer tussen overheden** - Zorg voor consistente privacy-aanpak lokaal/nationaal niveau
    3. **Stakeholder consultatie** - Betrek burgers, organisaties bij privacybeleid
    4. **Monitor internationale ontwikkelingen** - Volg EU-privacy wetgeving en Digital Rights Agenda
    5. **Ethische richtlijnen opstellen** - Bepaal ethische grenzen voor gegevensverwerking

    **Belangrijke overwegingen:**

    - Privacy vs. digitale innovatie balanceren
    - Implementatie van Uitvoeringswet AVG
    - Transparantie en verantwoording richting burgers
    - Internationale samenwerking privacy-handhaving

    **Concrete acties:**

    - Formuleer privacy-impact toetskaders voor overheidsdiensten
    - Ontwikkel criteria voor privacy-vriendelijke technologie-adoptie
    - Organiseer burgerparticipatie over privacy-rechten

=== "Bestuurder"
    ### Strategische privacy-governance en risicobeheersing

    **Stappen:**

    1. **Privacy-first strategie** - Ontwikkel organisatiebrede privacy-visie
    2. **Risicoanalyse uitvoeren** - Beoordeel privacy-risico's organisatie-breed
    3. **Budgettering en investeringen** - Investeer in privacy-beschermende technologie
    4. **Compliance monitoring** - Stel KPI's op voor privacy-naleving
    5. **Incident response planning** - Ontwikkel procedures voor privacy-incidenten

    **Belangrijke overwegingen:**

    - ROI van privacy-investeringen vs. boeterisico's
    - Organisatorische privacy-cultuur ontwikkelen
    - Externe audit en certificering
    - Reputatiemanagement bij privacy-incidenten

    **Concrete acties:**

    - Implementeer privacy-dashboard voor bestuurlijke sturing
    - Stel privacy-officer aan op strategisch niveau
    - Ontwikkel privacy-training programma's voor medewerkers

=== "Projectleider"
    ### Projectimplementatie van privacy-maatregelen

    **Stappen:**

    1. **Privacy impact assessment** - Voer DPIA uit voor elk project met persoonsgegevens
    2. **Privacy by design planning** - Integreer privacy vanaf projectstart
    3. **Stakeholder alignment** - Breng technische teams en privacy-officers samen
    4. **Testen en validatie** - Organiseer privacy-tests voor nieuwe functionaliteit
    5. **Monitoring en evaluatie** - Monitor privacy-naleving tijdens projectuitvoering

    **Belangrijke overwegingen:**

    - Privacy-requirements vroeg in projectplanning
    - Budget reserveren voor privacy-maatregelen
    - Change management voor privacy-bewustzijn
    - Documentatie voor audit-doeleinden

    **Concrete acties:**

    - Gebruik DPIA-templates voor projectevaluatie
    - Plan privacy-reviews in project-milestones
    - Stel privacy-acceptatiecriteria op voor oplevering

=== "Developer"
    ### Technische privacy-implementatie

    **Stappen:**

    1. **Privacy by design architectuur** - Ontwerp systemen met ingebouwde privacy
    2. **Data minimalisatie implementeren** - Verzamel alleen noodzakelijke gegevens
    3. **Encryptie en pseudonimisering** - Bescherm gegevens technisch
    4. **Toegangscontrole** - Implementeer rol-gebaseerde toegang
    5. **Audit logging** - Log alle gegevensverwerkingen voor compliance

    **Code-voorbeeld - Privacy by design implementatie:**
    ```python
    from cryptography.fernet import Fernet
    import hashlib
    import datetime

    class PrivacyProtectedUser:
        def __init__(self, user_id, name, email):
            self.user_id = user_id
            self.pseudonym = self._generate_pseudonym(user_id)
            self.encrypted_name = self._encrypt_pii(name)
            self.encrypted_email = self._encrypt_pii(email)
            self.created_at = datetime.datetime.now()
            self.retention_until = self._calculate_retention()

        def _generate_pseudonym(self, user_id):
            # Pseudonimisering voor analytics
            return hashlib.sha256(f"{user_id}_salt".encode()).hexdigest()[:16]

        def _encrypt_pii(self, data):
            # Encryptie van persoonsgegevens
            key = Fernet.generate_key()
            cipher = Fernet(key)
            return cipher.encrypt(data.encode())

        def _calculate_retention(self):
            # Automatische verwijdering na wettelijke bewaartermijn
            return self.created_at + datetime.timedelta(days=2555)  # 7 jaar

        def can_be_deleted(self):
            # Check of data verwijderd kan worden
            return datetime.datetime.now() > self.retention_until

    # GDPR-compliant gegevensverwerking
    def process_user_data(user_data, purpose, legal_basis):
        # Controleer rechtmatigheid verwerking
        if not legal_basis in ['consent', 'contract', 'legal_obligation']:
            raise ValueError("Geen geldige rechtsgrond voor verwerking")

        # Log verwerking voor audit
        audit_log = {
            'timestamp': datetime.datetime.now(),
            'purpose': purpose,
            'legal_basis': legal_basis,
            'data_subjects': len(user_data)
        }

        # Minimaliseer gegevens
        minimal_data = {k: v for k, v in user_data.items()
                       if k in ['user_id', 'timestamp']}

        return minimal_data, audit_log
    ```

    **Belangrijke overwegingen:**

    - Encryptie at rest en in transit
    - Pseudonimisering voor analytics
    - Automatische data-retention implementatie
    - API-design voor privacy-rechten (inzage, correctie, verwijdering)

=== "Jurist"
    ### Juridische compliance (GDPR, Nederlandse privacywetten)

    **Stappen:**

    1. **AVG-naleving controleren** - Toets systemen op GDPR-compliance
    2. **Rechtsgronden vaststellen** - Bepaal rechtmatigheid gegevensverwerking
    3. **Privacy-impact assessments** - Voer juridische review uit van DPIA's
    4. **Verwerkersovereenkomsten** - Stel DPA's op met externe partijen
    5. **Incident response** - Ontwikkel procedures voor datalekken (72-uur melding)

    **Template verwerkersovereenkomst:**

    ```
    VERWERKERSOVEREENKOMST (artikel 28 AVG)

    1. VERWERKING PERSOONSGEGEVENS
    - Verwerker verwerkt persoonsgegevens uitsluitend voor: [doel]
    - Categorieën van persoonsgegevens: [specificeer]
    - Categorieën van betrokkenen: [specificeer]
    - Bewaartermijn: [conform Archiefwet/sectorspecifiek]

    2. VERPLICHTINGEN VERWERKER
    - Verwerking alleen op schriftelijke instructie
    - Passende beveiligingsmaatregelen (art. 32 AVG)
    - Vertrouwelijkheid medewerkers
    - Ondersteuning uitoefening rechten betrokkenen

    3. DATALEKKEN
    - Melding binnen 24 uur aan verwerkingsverantwoordelijke
    - Documentatie conform art. 33/34 AVG
    ```

    **Belangrijke overwegingen:**

    - Rechtmatigheid gegevensverwerking per verwerkingsdoel
    - Specifieke sectorregelgeving (onderwijs, zorg, belastingen)
    - Internationale datatransfers (adequacy decisions)
    - Rechten van betrokkenen (inzage, correctie, verwijdering, overdraagbaarheid)

    **Concrete acties:**

    - Ontwikkel privacy-checklists voor projectbeoordeling
    - Stel template-toestemmingsverklaringen op
    - Adviseer over privacy-friendly default settings

=== "Inkoper"
    ### Inkoop van privacy-compliant technologie en diensten

    **Stappen:**

    1. **Privacy-eisen formuleren** - Specificeer privacy-vereisten in aanbestedingen
    2. **Leveranciersevaluatie** - Beoordeel privacy-volwassenheid potentiële leveranciers
    3. **DPA-onderhandelingen** - Stel verwerkersovereenkomsten op
    4. **Security assessment** - Evalueer technische privacy-beschermingsmaatregelen
    5. **Contractmonitoring** - Monitor naleving privacy-verplichtingen

    **Template aanbestedingseis privacy:**
    ```
    PRIVACY-COMPLIANCE EISEN

    1. ALGEMENE VEREISTEN
    - Volledige naleving AVG/GDPR en Uitvoeringswet AVG
    - Certificering ISO27001 en/of ISO27701
    - Transparantie over gegevensverwerking

    2. TECHNISCHE MAATREGELEN
    - Encryptie at rest (AES-256 minimum)
    - Encryptie in transit (TLS 1.3 minimum)
    - Pseudonimisering/anonimisering waar mogelijk
    - Toegangscontrole (multi-factor authentication)

    3. ORGANISATORISCHE MAATREGELEN
    - Privacy by design methodology
    - Incident response procedures (<24h melding)
    - Audit trails voor alle gegevensverwerkingen
    - Ondersteuning uitoefening rechten betrokkenen

    4. LOCATIE EN SOEVEREINITEIT
    - Dataverwerking binnen EU-grenzen
    - Geen toegang door niet-EU autoriteiten
    - Duidelijke exit-strategie en data-portabiliteit
    ```

    **Belangrijke overwegingen:**

    - Vendor lock-in preventie via privacy-portabiliteit
    - Contractuele boetes bij privacy-schendingen
    - Certificering en compliance-monitoring
    - Supply chain privacy-risico's

    **Concrete acties:**

    - Ontwikkel privacy-scorecard voor leveranciersevaluatie
    - Stel template-DPA's op voor verschillende diensten
    - Implementeer privacy-impact monitoring in contractbeheer

## Gerelateerde hulpmiddelen

- Raadpleeg Autoriteit Persoonsgegevens-richtlijnen
- Bekijk de AVG (GDPR) regelgeving
- Gebruik Data Protection Impact Assessment (DPIA) templates
- [Handreiking Mobiele app Ontwikkeling en Beheer versie 4.0](https://www.noraonline.nl/images/noraonline/2/26/Handreiking_Mobiele_App_4.0.pdf) - Hoofdstuk 3.2 gebruikt de privacy by design principes voor de ontwikkeling van een mobiele app.

## Gerelateerde principes

- [1. Stel gebruikersbehoeften vast](../gebruikersbehoeften/index.md)
- [6. Maak veilige systemen](../veiligheid/index.md)
- [10. Maak beter gebruik van data](../data/index.md)
- [11. Pas algoritmen verantwoord toe](../algoritmen/index.md)
