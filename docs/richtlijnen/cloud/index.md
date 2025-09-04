---
title: "5. Hanteer een cloud-gedreven strategie"
summary: Overweeg cloudoplossingen met aandacht voor Europese soevereiniteit en controle over data.
relations:
  - veiligheid
  - privacy
  - duurzaamheid
  - inkoop
---

# 5. Hanteer een cloud-gedreven strategie

Een cloud-gedreven strategie betekent dat je bij het ontwikkelen of vernieuwen van IT-projecten moderne cloudoplossingen overweegt die digitale soevereiniteit waarborgen. Dit combineert innovatie met verantwoord databeheer en bevordert kostenefficiëntie, flexibiliteit en schaalbaarheid.

## Waarom is het belangrijk?

- **Interoperabiliteit**: Integreer naadloos tussen verschillende systemen en voorkom leveranciersafhankelijkheid
- **Soevereiniteit**: Behoud controle over gevoelige gegevens en voldoe aan nationale veiligheidseisen
- **Kosteneffectiviteit**: Verlaag IT-uitgaven door gebruik-gebaseerde modellen en verminder kapitaaluitgaven
- **Schaalbaarheid**: Pas capaciteit direct aan op wisselende vraag en groei
- **Flexibiliteit**: Implementeer nieuwe diensten sneller en behoud keuzevrijheid tussen leveranciers
- **Toegang tot innovatie**: Krijg sneller toegang tot nieuwe technologieën
- **Duurzaamheid**: Optimaliseer energieverbruik door gedeelde infrastructuur

Door een cloud-gedreven strategie met aandacht voor soevereiniteit en interoperabiliteit te hanteren, kun je innovatiever, flexibeler en kosteneffectiever werken terwijl je de controle behoudt over je data en profiteert van de nieuwste technologische ontwikkelingen.

## Hoe pas je het toe?

<div class="direct-aan-de-slag">
    <h3>Direct aan de slag</h3>

    <div class="warning-banner" style="background-color: #fff3e0; padding: 0.5rem; border-left: 3px solid #ff9800; margin-bottom: 0.8rem;">
        <strong>Work in Progress:</strong> De onderstaande functionaliteit is nog in ontwikkeling.
    </div>

    <div class="action-cards">
        <div class="action-card">
            <span class="wip-badge wip-badge-concept">concept</span>
            <h4 >Rijkscloud</h4>
            <p >Soevereine cloud voor overheidsorganisaties</p>
            <button disabled class="action-button">Aanvragen</button>
        </div>
        <div class="action-card">
            <span class="wip-badge wip-badge-ontwikkeling">ontwikkeling</span>
            <h4>Kubernetes Service</h4>
            <p>Beheerde K8s met compliance</p>
            <button id="open-cluster-form" class="action-button">Cluster aanmaken</button>
        </div>

        <!-- Cluster Modal -->
        <div id="modal-overlay" class="cluster-modal-overlay"></div>
        <div id="cluster-modal" class="cluster-modal">
            <div class="cluster-modal-header">
                <h3>Kubernetes Cluster aanmaken</h3>
                <button id="close-modal" class="close-cluster-modal">&times;</button>
            </div>

            <!-- Auth Container -->
            <div id="auth-container">
                <div class="auth-header">
                    <h4>Authenticatie vereist</h4>
                    <p>Log in om een Kubernetes cluster aan te maken</p>
                </div>

                <div class="auth-options">
                    <button id="sso-login" class="auth-button">
                        <span class="auth-icon">🔐</span>
                        <span class="auth-text">SSO Rijksoverheid</span>
                    </button>

                    <button id="yubikey-login" class="auth-button">
                        <span class="auth-icon">🔑</span>
                        <span class="auth-text">YubiKey</span>
                    </button>

                    <button id="cert-login" class="auth-button">
                        <span class="auth-icon">📜</span>
                        <span class="auth-text">PKIoverheid Certificaat</span>
                    </button>
                </div>
            </div>

            <!-- Form Container -->
            <div id="form-container" style="display: none;">
                <form id="create-cluster-form">
                    <div class="form__row">
                        <label class="form__label" for="organization">Organisatie</label>
                        <select id="organization" name="organization" class="input-select" required>
                            <option value="" disabled selected>Selecteer een organisatie</option>
                            <!-- Organizations will be populated after authentication -->
                        </select>
                    </div>

                    <div class="form__row">
                        <label class="form__label" for="cluster-name">Naam van het cluster</label>
                        <input type="text" id="cluster-name" name="cluster-name" class="input-text" required placeholder="mijn-k8s-cluster">
                    </div>

                    <div class="form__row">
                        <label class="form__label" for="cluster-tier">Prijsmodel</label>
                        <select id="cluster-tier" name="cluster-tier" class="input-select" required>
                            <option value="" disabled selected>Selecteer een prijsmodel</option>
                            <option value="free">Free-tier (1 node, beperkte resources, 90 dagen)</option>
                            <option value="basic">Basis (pay-as-you-go)</option>
                            <option value="reserved">Gereserveerde capaciteit (vooraf betaald)</option>
                        </select>
                    </div>

                    <div class="form__row">
                        <label class="form__label" for="multi-az">Hoge beschikbaarheid</label>
                        <select id="multi-az" name="multi-az" class="input-select" required>
                            <option value="false" selected>Enkele regio (standaard)</option>
                            <option value="true">Multi-regio (hoge beschikbaarheid)</option>
                        </select>
                    </div>

                    <div class="form__row">
                        <label class="form__label" for="cluster-region">Regio(s)</label>
                        <select id="cluster-region" name="cluster-region" class="input-select" required>
                            <option value="" disabled selected>Selecteer een regio</option>
                            <option value="nl-ams">Amsterdam</option>
                            <option value="nl-rtt">Rotterdam</option>
                            <option value="nl-gro">Groningen</option>
                            <option value="nl-hrl">Heerlen</option>
                        </select>
                        <div id="secondary-region-row" style="display: none; margin-top: 8px;">
                            <label class="form__label" for="cluster-region-secondary">Secundaire regio</label>
                            <select id="cluster-region-secondary" name="cluster-region-secondary" class="input-select">
                                <option value="" disabled selected>Selecteer secundaire regio</option>
                                <option value="nl-ams">Amsterdam</option>
                                <option value="nl-rtt">Rotterdam</option>
                                <option value="nl-gro">Groningen</option>
                                <option value="nl-hrl">Heerlen</option>
                            </select>
                        </div>
                    </div>

                    <div class="form__row">
                        <label class="form__label" for="cluster-size">Grootte</label>
                        <select id="cluster-size" name="cluster-size" class="input-select" required>
                            <option value="" disabled selected>Selecteer een grootte</option>
                            <option value="small">Klein (1-5 nodes)</option>
                            <option value="medium">Middel (6-20 nodes)</option>
                            <option value="large">Groot (21-50 nodes)</option>
                            <option value="custom">Aangepast</option>
                        </select>
                    </div>

                    <div class="form__row">
                        <label class="form__label" for="cluster-version">Kubernetes versie</label>
                        <select id="cluster-version" name="cluster-version" class="input-select" required>
                            <option value="1.33" selected>Kubernetes 1.33 (nieuwste)</option>
                            <option value="1.32">Kubernetes 1.32</option>
                            <option value="1.31">Kubernetes 1.31</option>
                            <option value="1.30">Kubernetes 1.30</option>
                        </select>
                    </div>

                    <!-- Cost Estimation Section -->
                    <div id="cost-estimation" class="cost-estimation-container">
                        <h4>Geschatte kosten</h4>
                        <div class="cost-details">
                            <div class="cost-row">
                                <span class="cost-label">Maandelijkse kosten:</span>
                                <span id="monthly-cost" class="cost-value">€0,00</span>
                            </div>
                            <div class="cost-row">
                                <span class="cost-label">Jaarlijkse kosten:</span>
                                <span id="yearly-cost" class="cost-value">€0,00</span>
                            </div>
                            <div class="cost-info">
                                <span class="info-icon">i</span>
                                <span class="info-text">Deze kosten zijn een schatting en kunnen variëren op basis van daadwerkelijk gebruik.</span>
                            </div>
                        </div>
                    </div>

                    <div class="form-actions">
                        <button type="button" id="back-to-auth" class="button">Terug</button>
                        <button type="submit" class="button button--primary">Cluster aanmaken</button>
                    </div>
                </form>
            </div>

            <!-- Spinner Container -->
            <div id="spinner" class="cluster-spinner-container">
                <div class="cluster-spinner"></div>
                <p class="cluster-spinner-text">Kubernetes cluster wordt aangemaakt...</p>
            </div>

            <!-- Result Container -->
            <div id="result-container" class="cluster-result-container">
                <div class="cluster-result-header">
                    <span class="cluster-result-icon">✓</span>
                    <h4>Cluster succesvol aangemaakt!</h4>
                </div>

                <div class="cluster-result-details">
                    <div class="cluster-detail-row">
                        <span class="cluster-detail-label">Cluster Naam:</span>
                        <span id="result-cluster-name" class="cluster-detail-value"></span>
                    </div>
                    <div class="cluster-detail-row">
                        <span class="cluster-detail-label">Cluster ID:</span>
                        <span id="result-cluster-id" class="cluster-detail-value"></span>
                    </div>
                    <div class="cluster-detail-row">
                        <span class="cluster-detail-label">Regio:</span>
                        <span id="result-cluster-region" class="cluster-detail-value"></span>
                    </div>
                    <div class="cluster-detail-row">
                        <span class="cluster-detail-label">Grootte:</span>
                        <span id="result-cluster-size" class="cluster-detail-value"></span>
                    </div>
                    <div class="cluster-detail-row">
                        <span class="cluster-detail-label">Kubernetes versie:</span>
                        <span id="result-cluster-version" class="cluster-detail-value"></span>
                    </div>
                    <div class="cluster-detail-row">
                        <span class="cluster-detail-label">Aangemaakt op:</span>
                        <span id="result-creation-time" class="cluster-detail-value"></span>
                    </div>
                    <div class="cluster-detail-row">
                        <span class="cluster-detail-label">API endpoint:</span>
                        <span id="result-cluster-endpoint" class="cluster-detail-value"></span>
                    </div>
                </div>

                <h4>Aan de slag met je cluster</h4>
                <div class="cluster-code-block">

# Configureer kubectl voor je nieuwe cluster

kubectl config set-cluster rijkscloud --server=<span id="kubectl-endpoint"></span>

# Download kubeconfig voor dit cluster en pas toe

curl -o kubeconfig.yaml <https://rijkscloud.nl/api/v1/clusters/><span id="kubectl-cluster-id"></span>/kubeconfig
export KUBECONFIG=./kubeconfig.yaml

# Controleer connectiviteit

kubectl get nodes
</div>

                <div class="cluster-result-actions">
                    <button id="reset-cluster-form" class="button">Nog een cluster aanmaken</button>
                </div>
            </div>
        </div>
        <div class="action-card">
            <span class="wip-badge wip-badge-beschikbaar">beschikbaar</span>
            <h4 >Haven</h4>
            <p >Platformonafhankelijke cloudhosting</p>
            <a href="https://haven.commonground.nl/" class="action-button" target="_blank">Ontdekken</a>
        </div>
        <div class="action-card">
            <span class="wip-badge wip-badge-beschikbaar">beschikbaar</span>
            <h4 >Azure Bio-Compliancy</h4>
            <p >Cloud compliance voor overheidsorganisaties</p>
            <a href="https://github.com/Azure/Bio-Compliancy" class="action-button" target="_blank">Ontdekken</a>
        </div>
        <div class="action-card">
            <span class="wip-badge wip-badge-ontwikkeling">ontwikkeling</span>
            <h4 >Cloud Assessment</h4>
            <p >Beoordeel uw cloudgereedheid</p>
            <button disabled class="action-button">Binnenkort beschikbaar</button>
        </div>
    </div>
</div>
