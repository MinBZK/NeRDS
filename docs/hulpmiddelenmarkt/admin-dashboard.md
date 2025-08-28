---
title: "NeRDS Admin Dashboard"
summary: Beheerders interface voor leveranciers registraties en approval workflows
---

# NeRDS Hulpmiddelenmarkt - Admin Dashboard

*Beheer registraties en workflows voor de hulpmiddelenmarkt*

<div class="admin-dashboard">

## Dashboard Overzicht

<div class="dashboard-stats">
    <div class="stat-card">
        <h3>Pending Registraties</h3>
        <span class="stat-number" id="pendingCount">12</span>
        <small>Wachten op review</small>
    </div>

    <div class="stat-card">
        <h3>Actieve Leveranciers</h3>
        <span class="stat-number" id="activeCount">47</span>
        <small>Gecertificeerd en actief</small>
    </div>

    <div class="stat-card">
        <h3>Verlopen Certificaten</h3>
        <span class="stat-number warning" id="expiringCount">3</span>
        <small>Binnen 30 dagen</small>
    </div>

    <div class="stat-card">
        <h3>Renewal Dit Kwartaal</h3>
        <span class="stat-number" id="renewalCount">23</span>
        <small>Moeten vernieuwd worden</small>
    </div>
</div>

## Registratie Review Queue

<div class="review-queue">
    <div class="queue-filters">
        <select id="statusFilter">
            <option value="">Alle statussen</option>
            <option value="pending">Pending Review</option>
            <option value="in_review">In Review</option>
            <option value="requires_info">Meer Info Nodig</option>
            <option value="approved">Goedgekeurd</option>
            <option value="rejected">Afgewezen</option>
        </select>

        <select id="lotFilter">
            <option value="">Alle lots</option>
            <option value="hosting">Hosting & Infrastructure</option>
            <option value="security">Security & Compliance</option>
            <option value="development">Software Development</option>
            <option value="data">Data & Analytics</option>
            <option value="support">Support & Consultancy</option>
        </select>

        <input type="date" id="dateFilter" placeholder="Registratie datum">

        <button id="refreshQueue">🔄 Refresh</button>
    </div>

    <div class="registrations-list" id="registrationsList">
        <!-- Dynamic content loaded here -->
    </div>
</div>

## Compliance Monitoring

<div class="compliance-section">
    <h3>Automatische Compliance Checks</h3>

    <div class="compliance-dashboard">
        <div class="compliance-category">
            <h4>Certificeringen Status</h4>
            <div class="compliance-items">
                <div class="compliance-item status-ok">
                    <span class="status-indicator"></span>
                    ISO 27001 verificatie: <strong>42/47 OK</strong>
                </div>
                <div class="compliance-item status-warning">
                    <span class="status-indicator"></span>
                    BIO certificering: <strong>3 verlopen binnen 30d</strong>
                </div>
                <div class="compliance-item status-ok">
                    <span class="status-indicator"></span>
                    KvK registraties: <strong>Alle geldig</strong>
                </div>
            </div>
        </div>

        <div class="compliance-category">
            <h4>Performance Monitoring</h4>
            <div class="compliance-items">
                <div class="compliance-item status-warning">
                    <span class="status-indicator"></span>
                    SLA breaches: <strong>2 leveranciers onder 99%</strong>
                </div>
                <div class="compliance-item status-ok">
                    <span class="status-indicator"></span>
                    Customer satisfaction: <strong>4.2/5.0 gemiddeld</strong>
                </div>
                <div class="compliance-item status-error">
                    <span class="status-indicator"></span>
                    Security incidents: <strong>1 breach laatste maand</strong>
                </div>
            </div>
        </div>
    </div>

    <button id="runComplianceCheck" class="compliance-check-btn">
        🔍 Run Full Compliance Check
    </button>
</div>

## Renewal Management

<div class="renewal-section">
    <h3>Jaarlijkse Renewal Cyclus</h3>

    <div class="renewal-timeline">
        <div class="timeline-item active">
            <div class="timeline-date">Q4 2024</div>
            <div class="timeline-content">
                <strong>Renewal Aankondiging</strong>
                <p>Leveranciers geïnformeerd over 2025 renewal</p>
            </div>
        </div>

        <div class="timeline-item current">
            <div class="timeline-date">Jan 2025</div>
            <div class="timeline-content">
                <strong>Submission Periode</strong>
                <p>6 weken voor renewal submissions</p>
                <div class="timeline-progress">
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: 45%"></div>
                    </div>
                    <span>23/51 submissions ontvangen</span>
                </div>
            </div>
        </div>

        <div class="timeline-item">
            <div class="timeline-date">Mar 2025</div>
            <div class="timeline-content">
                <strong>Assessment Periode</strong>
                <p>Review en approval van renewals</p>
            </div>
        </div>

        <div class="timeline-item">
            <div class="timeline-date">Apr 2025</div>
            <div class="timeline-content">
                <strong>Nieuwe Framework</strong>
                <p>Start van nieuwe marketplace periode</p>
            </div>
        </div>
    </div>

    <div class="renewal-actions">
        <button id="sendRenewalReminders" class="action-btn">
            📧 Send Renewal Reminders
        </button>
        <button id="generateRenewalReport" class="action-btn">
            📊 Generate Renewal Report
        </button>
    </div>
</div>

</div>

<!-- Registration Detail Modal -->
<div id="registrationModal" class="modal" style="display: none;">
    <div class="modal-content">
        <span class="close-modal">&times;</span>

        <div id="registrationDetail">
            <!-- Dynamic content loaded here -->
        </div>

        <div class="modal-actions">
            <button id="approveRegistration" class="approve-btn">✅ Goedkeuren</button>
            <button id="rejectRegistration" class="reject-btn">❌ Afwijzen</button>
            <button id="requestMoreInfo" class="info-btn">📋 Meer Info Opvragen</button>
        </div>
    </div>
</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
    loadDashboardData();
    setupEventHandlers();
    startRealTimeUpdates();
});

function loadDashboardData() {
    // Load registrations from localStorage (demo data)
    const registrations = getAllRegistrations();
    updateDashboardStats(registrations);
    renderRegistrationsList(registrations);
    loadComplianceData();
}

function getAllRegistrations() {
    // Get all registrations from localStorage
    const registrations = [];
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key.startsWith('nerds-registration-NDS-')) {
            const data = JSON.parse(localStorage.getItem(key));
            data.id = key.replace('nerds-registration-', '');
            registrations.push(data);
        }
    }

    // Add some demo data if none exists
    if (registrations.length === 0) {
        registrations.push(...getDemoRegistrations());
    }

    return registrations;
}

function getDemoRegistrations() {
    return [
        {
            id: 'NDS-123456',
            companyName: 'CloudTech Solutions BV',
            contactEmail: 'info@cloudtech.nl',
            lots: ['hosting', 'security'],
            status: 'pending',
            timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
            certifications: ['ISO27001', 'BIO']
        },
        {
            id: 'NDS-123457',
            companyName: 'DataMine Analytics',
            contactEmail: 'contact@datamine.nl',
            lots: ['data', 'support'],
            status: 'in_review',
            timestamp: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
            certifications: ['ISO27001']
        },
        {
            id: 'NDS-123458',
            companyName: 'SecureGov Services',
            contactEmail: 'admin@securegov.nl',
            lots: ['security', 'support'],
            status: 'approved',
            timestamp: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
            certifications: ['ISO27001', 'BIO', 'NEN7510']
        }
    ];
}

function updateDashboardStats(registrations) {
    const pending = registrations.filter(r => r.status === 'pending').length;
    const approved = registrations.filter(r => r.status === 'approved').length;

    document.getElementById('pendingCount').textContent = pending;
    document.getElementById('activeCount').textContent = approved + 44; // Add existing suppliers
    document.getElementById('expiringCount').textContent = 3;
    document.getElementById('renewalCount').textContent = 23;
}

function renderRegistrationsList(registrations) {
    const container = document.getElementById('registrationsList');

    container.innerHTML = registrations.map(registration => `
        <div class="registration-item" data-id="${registration.id}">
            <div class="registration-header">
                <h4>${registration.companyName}</h4>
                <span class="status-badge status-${registration.status}">${getStatusLabel(registration.status)}</span>
            </div>

            <div class="registration-details">
                <div class="detail-item">
                    <strong>Email:</strong> ${registration.contactEmail}
                </div>
                <div class="detail-item">
                    <strong>Lots:</strong> ${(registration.lots || []).join(', ')}
                </div>
                <div class="detail-item">
                    <strong>Ingediend:</strong> ${new Date(registration.timestamp).toLocaleDateString('nl-NL')}
                </div>
                <div class="detail-item">
                    <strong>Certificeringen:</strong> ${(registration.certifications || []).join(', ') || 'Geen'}
                </div>
            </div>

            <div class="registration-actions">
                <button class="view-detail-btn" data-id="${registration.id}">
                    👁️ Details Bekijken
                </button>

                ${registration.status === 'pending' ? `
                    <button class="quick-approve-btn" data-id="${registration.id}">
                        ✅ Quick Approve
                    </button>
                    <button class="quick-reject-btn" data-id="${registration.id}">
                        ❌ Afwijzen
                    </button>
                ` : ''}
            </div>
        </div>
    `).join('');

    // Add event listeners
    container.querySelectorAll('.view-detail-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            showRegistrationDetail(e.target.dataset.id);
        });
    });

    container.querySelectorAll('.quick-approve-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            quickApprove(e.target.dataset.id);
        });
    });

    container.querySelectorAll('.quick-reject-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            quickReject(e.target.dataset.id);
        });
    });
}

function getStatusLabel(status) {
    const labels = {
        'pending': 'Te Reviewen',
        'in_review': 'In Review',
        'requires_info': 'Meer Info',
        'approved': 'Goedgekeurd',
        'rejected': 'Afgewezen'
    };
    return labels[status] || status;
}

function showRegistrationDetail(registrationId) {
    const registration = JSON.parse(localStorage.getItem('nerds-registration-' + registrationId));

    document.getElementById('registrationDetail').innerHTML = `
        <h3>Registratie Details - ${registration.companyName}</h3>

        <div class="detail-sections">
            <div class="detail-section">
                <h4>Bedrijfsgegevens</h4>
                <p><strong>Naam:</strong> ${registration.companyName}</p>
                <p><strong>KvK:</strong> ${registration.kvkNumber || 'Niet opgegeven'}</p>
                <p><strong>Website:</strong> ${registration.website || 'Niet opgegeven'}</p>
                <p><strong>Beschrijving:</strong> ${registration.description || 'Niet opgegeven'}</p>
            </div>

            <div class="detail-section">
                <h4>Contact</h4>
                <p><strong>Persoon:</strong> ${registration.contactPerson || 'Niet opgegeven'}</p>
                <p><strong>Email:</strong> ${registration.contactEmail}</p>
                <p><strong>Telefoon:</strong> ${registration.contactPhone || 'Niet opgegeven'}</p>
            </div>

            <div class="detail-section">
                <h4>Services & Compliance</h4>
                <p><strong>Lots:</strong> ${(registration.lots || []).join(', ')}</p>
                <p><strong>Certificeringen:</strong> ${(registration.certifications || []).join(', ') || 'Geen'}</p>
                <p><strong>Status:</strong> ${getStatusLabel(registration.status)}</p>
            </div>
        </div>

        <div class="admin-notes">
            <h4>Admin Notes</h4>
            <textarea id="adminNotes" rows="4" placeholder="Voeg notities toe voor deze registratie..."></textarea>
        </div>
    `;

    document.getElementById('registrationModal').style.display = 'block';

    // Set current registration for actions
    window.currentRegistration = registrationId;
}

function quickApprove(registrationId) {
    if (confirm('Weet je zeker dat je deze registratie wilt goedkeuren?')) {
        updateRegistrationStatus(registrationId, 'approved');
        showNotification('Registratie goedgekeurd!', 'success');
    }
}

function quickReject(registrationId) {
    const reason = prompt('Reden voor afwijzing:');
    if (reason) {
        updateRegistrationStatus(registrationId, 'rejected', reason);
        showNotification('Registratie afgewezen', 'warning');
    }
}

function updateRegistrationStatus(registrationId, status, notes = '') {
    const registration = JSON.parse(localStorage.getItem('nerds-registration-' + registrationId));
    registration.status = status;
    registration.adminNotes = notes;
    registration.reviewedAt = new Date().toISOString();

    localStorage.setItem('nerds-registration-' + registrationId, JSON.stringify(registration));

    // Refresh the dashboard
    loadDashboardData();
}

function loadComplianceData() {
    // Simulate compliance monitoring
    setTimeout(() => {
        document.querySelector('#runComplianceCheck').textContent = '✅ Last check: ' + new Date().toLocaleTimeString('nl-NL');
    }, 1000);
}

function setupEventHandlers() {
    // Modal close
    document.querySelector('.close-modal').addEventListener('click', () => {
        document.getElementById('registrationModal').style.display = 'none';
    });

    // Modal actions
    document.getElementById('approveRegistration').addEventListener('click', () => {
        if (window.currentRegistration) {
            quickApprove(window.currentRegistration);
            document.getElementById('registrationModal').style.display = 'none';
        }
    });

    document.getElementById('rejectRegistration').addEventListener('click', () => {
        if (window.currentRegistration) {
            quickReject(window.currentRegistration);
            document.getElementById('registrationModal').style.display = 'none';
        }
    });

    // Filters
    document.getElementById('refreshQueue').addEventListener('click', loadDashboardData);

    // Compliance check
    document.getElementById('runComplianceCheck').addEventListener('click', () => {
        showNotification('Running compliance check...', 'info');
        loadComplianceData();
    });

    // Renewal actions
    document.getElementById('sendRenewalReminders').addEventListener('click', () => {
        showNotification('Renewal reminders sent to 28 suppliers', 'success');
    });

    document.getElementById('generateRenewalReport').addEventListener('click', () => {
        showNotification('Renewal report generated and downloaded', 'success');
    });
}

function startRealTimeUpdates() {
    // Update dashboard every 30 seconds
    setInterval(() => {
        loadDashboardData();
    }, 30000);
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 3000);
}
</script>

---

*NeRDS Admin Dashboard - Voor ondersteuning: [admin@minbzk.nl](mailto:admin@minbzk.nl)*
