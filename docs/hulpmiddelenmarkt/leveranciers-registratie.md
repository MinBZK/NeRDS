---
title: "Leveranciers Registratie"
summary: Registratieformulier voor leveranciers die diensten willen aanbieden via de NeRDS hulpmiddelenmarkt
---

# Leveranciers Registratie - NeRDS Hulpmiddelenmarkt

*Wilt u diensten aanbieden aan overheidsorganisaties via NeRDS? Registreer uw organisatie hier.*

<div class="registration-form-container">

## Stap 1: Bedrijfsgegevens

<form id="supplierRegistrationForm" class="supplier-form">

    <div class="form-section">
        <h3>Organisatie Informatie</h3>

        <div class="form-group">
            <label for="companyName">Bedrijfsnaam *</label>
            <input type="text" id="companyName" name="companyName" required>
        </div>

        <div class="form-group">
            <label for="kvkNumber">KvK nummer *</label>
            <input type="text" id="kvkNumber" name="kvkNumber" pattern="[0-9]{8}" required>
            <small>8-cijferig Kamer van Koophandel nummer</small>
        </div>

        <div class="form-group">
            <label for="website">Website</label>
            <input type="url" id="website" name="website">
        </div>

        <div class="form-group">
            <label for="description">Bedrijfsomschrijving *</label>
            <textarea id="description" name="description" rows="3" required></textarea>
            <small>Korte beschrijving van uw organisatie en expertise</small>
        </div>
    </div>

    <div class="form-section">
        <h3>Contactgegevens</h3>

        <div class="form-group">
            <label for="contactPerson">Contactpersoon *</label>
            <input type="text" id="contactPerson" name="contactPerson" required>
        </div>

        <div class="form-group">
            <label for="contactEmail">E-mail adres *</label>
            <input type="email" id="contactEmail" name="contactEmail" required>
        </div>

        <div class="form-group">
            <label for="contactPhone">Telefoonnummer</label>
            <input type="tel" id="contactPhone" name="contactPhone">
        </div>
    </div>

## Stap 2: Services & Lots

<div class="form-section">
    <h3>Welke diensten wilt u aanbieden?</h3>
    <small>Selecteer alle toepasselijke categorieën. Per categorie worden specifieke vereisten gesteld.</small>

    <div class="lots-selection">
        <div class="lot-option">
            <input type="checkbox" id="lot-hosting" name="lots" value="hosting">
            <label for="lot-hosting">
                <strong>Hosting & Infrastructure</strong>
                <span class="lot-description">Cloud hosting, servers, netwerk infrastructuur</span>
                <span class="lot-requirements">Vereist: ISO27001, BIO-certificering, 99.5%+ SLA</span>
            </label>
        </div>

        <div class="lot-option">
            <input type="checkbox" id="lot-security" name="lots" value="security">
            <label for="lot-security">
                <strong>Security & Compliance Services</strong>
                <span class="lot-description">Security audits, penetratie testing, compliance advies</span>
                <span class="lot-requirements">Vereist: Security certificering, overheids ervaring</span>
            </label>
        </div>

        <div class="lot-option">
            <input type="checkbox" id="lot-development" name="lots" value="development">
            <label for="lot-development">
                <strong>Software Development & Platforms</strong>
                <span class="lot-description">Ontwikkelteams, CI/CD platforms, software tools</span>
                <span class="lot-requirements">Vereist: Agile methodiek, open source ervaring</span>
            </label>
        </div>

        <div class="lot-option">
            <input type="checkbox" id="lot-data" name="lots" value="data">
            <label for="lot-data">
                <strong>Data & Analytics Services</strong>
                <span class="lot-description">Data platforms, analytics, AI/ML diensten</span>
                <span class="lot-requirements">Vereist: GDPR expertise, statistiek kennis</span>
            </label>
        </div>

        <div class="lot-option">
            <input type="checkbox" id="lot-support" name="lots" value="support">
            <label for="lot-support">
                <strong>Support & Consultancy</strong>
                <span class="lot-description">Helpdesk, advies, training, projectmanagement</span>
                <span class="lot-requirements">Vereist: Nederlandse taal, overheids ervaring</span>
            </label>
        </div>
    </div>
</div>

## Stap 3: Compliance & Certificeringen

<div class="form-section">
    <h3>Certificeringen & Compliance</h3>

    <div class="compliance-checks">
        <h4>Basis vereisten (voor alle leveranciers):</h4>

        <div class="compliance-item">
            <input type="checkbox" id="gdpr-compliant" name="compliance" value="gdpr" required>
            <label for="gdpr-compliant">AVG/GDPR compliant *</label>
        </div>

        <div class="compliance-item">
            <input type="checkbox" id="dutch-entity" name="compliance" value="dutch-entity" required>
            <label for="dutch-entity">Nederlandse rechtspersoon of Nederlandse vestiging *</label>
        </div>

        <div class="compliance-item">
            <input type="checkbox" id="financial-stable" name="compliance" value="financial-stable" required>
            <label for="financial-stable">Financieel stabiel (geen faillissement/surseance) *</label>
        </div>
    </div>

    <div class="compliance-checks">
        <h4>Certificeringen (selecteer wat u heeft):</h4>

        <div class="compliance-item">
            <input type="checkbox" id="iso27001" name="certifications" value="ISO27001">
            <label for="iso27001">ISO 27001 (Informatiebeveiligingsmanagement)</label>
        </div>

        <div class="compliance-item">
            <input type="checkbox" id="bio" name="certifications" value="BIO">
            <label for="bio">BIO (Baseline Informatiebeveiliging Overheid)</label>
        </div>

        <div class="compliance-item">
            <input type="checkbox" id="nen7510" name="certifications" value="NEN7510">
            <label for="nen7510">NEN 7510 (Zorg informatiebeveiliging)</label>
        </div>

        <div class="compliance-item">
            <input type="checkbox" id="iso9001" name="certifications" value="ISO9001">
            <label for="iso9001">ISO 9001 (Kwaliteitsmanagement)</label>
        </div>
    </div>
</div>

## Stap 4: Document Upload

<div class="form-section">
    <h3>Vereiste Documenten</h3>
    <small>Upload de volgende documenten. Maximaal 10MB per bestand, PDF formaat.</small>

    <div class="document-upload">
        <div class="upload-item">
            <label for="service-definition">Service Definitie Document *</label>
            <input type="file" id="service-definition" name="documents" accept=".pdf" required>
            <small>Beschrijving van uw diensten, functionaliteiten en specificaties</small>
        </div>

        <div class="upload-item">
            <label for="pricing-document">Prijslijst *</label>
            <input type="file" id="pricing-document" name="documents" accept=".pdf" required>
            <small>Transparante prijslijst voor al uw diensten</small>
        </div>

        <div class="upload-item">
            <label for="terms-conditions">Algemene Voorwaarden *</label>
            <input type="file" id="terms-conditions" name="documents" accept=".pdf" required>
            <small>Uw standaard service voorwaarden</small>
        </div>

        <div class="upload-item">
            <label for="sla-template">SLA Template</label>
            <input type="file" id="sla-template" name="documents" accept=".pdf">
            <small>Standaard SLA die u hanteert (indien van toepassing)</small>
        </div>

        <div class="upload-item">
            <label for="certifications-docs">Certificering Documenten</label>
            <input type="file" id="certifications-docs" name="documents" accept=".pdf" multiple>
            <small>Scan van uw certificeringen (ISO27001, BIO, etc.)</small>
        </div>

        <div class="upload-item">
            <label for="references">Referenties</label>
            <input type="file" id="references" name="documents" accept=".pdf">
            <small>Referentielijst van overheidsklanten (optioneel)</small>
        </div>
    </div>
</div>

## Stap 5: Akkoord & Indienen

<div class="form-section">
    <h3>Voorwaarden & Akkoord</h3>

    <div class="terms-agreement">
        <div class="compliance-item">
            <input type="checkbox" id="data-processing" name="agreements" value="data-processing" required>
            <label for="data-processing">
                Ik ga akkoord met de <a href="#" target="_blank">verwerkingsovereenkomst</a> voor mijn gegevens *
            </label>
        </div>

        <div class="compliance-item">
            <input type="checkbox" id="marketplace-terms" name="agreements" value="marketplace-terms" required>
            <label for="marketplace-terms">
                Ik ga akkoord met de <a href="#" target="_blank">marktplaats voorwaarden</a> *
            </label>
        </div>

        <div class="compliance-item">
            <input type="checkbox" id="annual-renewal" name="agreements" value="annual-renewal" required>
            <label for="annual-renewal">
                Ik begrijp dat registratie jaarlijks hernieuwd moet worden *
            </label>
        </div>

        <div class="compliance-item">
            <input type="checkbox" id="quality-standards" name="agreements" value="quality-standards" required>
            <label for="quality-standards">
                Ik commit me aan de NeRDS kwaliteitseisen en gedragscode *
            </label>
        </div>
    </div>

    <div class="form-actions">
        <button type="submit" class="submit-button" id="submitRegistration">
            Registratie Indienen
        </button>

        <button type="button" class="draft-button" id="saveDraft">
            Opslaan als Concept
        </button>
    </div>
</div>

</form>

<div id="submission-status" class="status-message" style="display: none;">
    <h3>Registratie Ingediend</h3>
    <p>Bedankt voor uw registratie! U ontvangt binnen 2 werkdagen een bevestiging via e-mail.</p>
    <p><strong>Registratienummer:</strong> <span id="registrationNumber"></span></p>

    <h4>Volgende stappen:</h4>
    <ol>
        <li>NeRDS beoordeelt uw documenten (5-10 werkdagen)</li>
        <li>Eventuele aanvullende vragen via e-mail</li>
        <li>Goedkeuring en activatie van uw profiel</li>
        <li>U ontvangt toegang tot het leveranciers dashboard</li>
    </ol>
</div>

</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('supplierRegistrationForm');
    const submitBtn = document.getElementById('submitRegistration');
    const draftBtn = document.getElementById('saveDraft');

    // Form validation
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        if (validateForm()) {
            submitRegistration();
        }
    });

    // Save as draft
    draftBtn.addEventListener('click', function() {
        saveDraft();
    });

    // Dynamic lot requirements
    const lotCheckboxes = document.querySelectorAll('input[name="lots"]');
    lotCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', updateRequirements);
    });

    function validateForm() {
        // Basic HTML5 validation + custom checks
        const requiredFields = form.querySelectorAll('[required]');
        let allValid = true;

        requiredFields.forEach(field => {
            if (!field.value.trim() && field.type !== 'checkbox') {
                field.classList.add('error');
                allValid = false;
            } else if (field.type === 'checkbox' && !field.checked) {
                field.classList.add('error');
                allValid = false;
            } else {
                field.classList.remove('error');
            }
        });

        // Check if at least one lot is selected
        const selectedLots = document.querySelectorAll('input[name="lots"]:checked');
        if (selectedLots.length === 0) {
            alert('Selecteer minimaal één service categorie (lot).');
            allValid = false;
        }

        return allValid;
    }

    function submitRegistration() {
        const formData = new FormData(form);

        // Add selected lots and certifications as arrays
        const lots = Array.from(document.querySelectorAll('input[name="lots"]:checked'))
                          .map(cb => cb.value);
        const certifications = Array.from(document.querySelectorAll('input[name="certifications"]:checked'))
                                     .map(cb => cb.value);

        const registrationData = {
            timestamp: new Date().toISOString(),
            status: 'pending',
            companyName: formData.get('companyName'),
            kvkNumber: formData.get('kvkNumber'),
            website: formData.get('website'),
            description: formData.get('description'),
            contactPerson: formData.get('contactPerson'),
            contactEmail: formData.get('contactEmail'),
            contactPhone: formData.get('contactPhone'),
            lots: lots,
            certifications: certifications,
            compliance: Array.from(document.querySelectorAll('input[name="compliance"]:checked'))
                              .map(cb => cb.value),
            agreements: Array.from(document.querySelectorAll('input[name="agreements"]:checked'))
                              .map(cb => cb.value)
        };

        // Simulate submission
        submitBtn.textContent = 'Bezig met versturen...';
        submitBtn.disabled = true;

        setTimeout(() => {
            // Generate registration number
            const regNumber = 'NDS-' + Date.now().toString().slice(-6);
            document.getElementById('registrationNumber').textContent = regNumber;

            // Show success message
            form.style.display = 'none';
            document.getElementById('submission-status').style.display = 'block';

            // Store in localStorage for demo
            localStorage.setItem('nerds-registration-' + regNumber, JSON.stringify(registrationData));

        }, 2000);
    }

    function saveDraft() {
        const formData = new FormData(form);
        const draftData = Object.fromEntries(formData.entries());

        localStorage.setItem('nerds-registration-draft', JSON.stringify(draftData));

        // Show feedback
        draftBtn.textContent = 'Opgeslagen!';
        setTimeout(() => {
            draftBtn.textContent = 'Opslaan als Concept';
        }, 2000);
    }

    function updateRequirements() {
        // Show/hide specific requirements based on selected lots
        // This could be expanded to show detailed requirements per lot
    }

    // Load draft if exists
    const savedDraft = localStorage.getItem('nerds-registration-draft');
    if (savedDraft) {
        const draftData = JSON.parse(savedDraft);
        Object.keys(draftData).forEach(key => {
            const field = form.querySelector(`[name="${key}"]`);
            if (field && field.type !== 'file') {
                field.value = draftData[key];
            }
        });
    }
});
</script>

---

*Voor vragen over de registratie kunt u contact opnemen via [hulpmiddelenmarkt@minbzk.nl](mailto:hulpmiddelenmarkt@minbzk.nl)*
