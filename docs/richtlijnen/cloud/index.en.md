---
title: "5. Hanteer een cloud-gedreven strategie"
summary: Consider cloud solutions with attention to European sovereignty and data control.
relations:
  - veiligheid
  - privacy
  - duurzaamheid
  - inkoop
---


# 5. Activate a cloud-driven strategy

A cloud-driven strategy means that when developing or renewing IT projects you consider modern cloud solutions that guarantee digital sovereignty. This combines innovation with responsible data management and promotes cost efficiency, flexibility and scalability.

## Why is it important?

- **Cost effectiveness**: Pay only for what you use, reduce capital expenditure
- **Scalability**: Easy scaling as needed
- **Flexibility**: Faster implementation of new services
- **Less management charges**: Suppliers manage the underlying infrastructure
- **Reliability**: Often higher uptime than on-premise solutions
- **Access to innovation**: Faster access to new technologies
- **Sustainability**: Optimised energy consumption by shared infrastructure

By adopting a cloud-driven strategy with a focus on sovereignty, you can work more innovative, flexible and cost-effective while maintaining control over your data and taking advantage of the latest technological developments.

## How do you apply it?

<div class="direct-aan-de-slag">
<h3>Direct action</h3>

<div class="warning-banner" style="background-color: #fff3e0; padding: 0.5rem; border-left: 3px solid #ff9800; margin-bottom: 0.8rem;">
<strong>Work in Progress:</strong> The functionality below is still under development.
</div>

<div class="action-cards">
<div class="action-card">
<span class="wip-badge wip-badge-concept">concept</span>
<h4 >National Cloud</h4>
<p >Sovereign cloud for government organisations</p>
<button disabled class="action-button">Query</button>
</div>
<div class="action-card">
<span class="wip-badge wip-badge-ontwikkeling">development</span>
<h4>Kubernetes Service</h4>
<p>Related K8s with compliance</p>
Create <button id="open-cluster-form" class="action-button">Cluster</button>
</div>

<!-- Cluster Modal -->
<div id="modal-overlay" class="cluster-modal-overlay"></div>
<div id="cluster-modal" class="cluster-modal">
<div class="cluster-modal-header">
Create <h3>Kubernetes Cluster</h3>
<button id="close-modal" class="close-cluster-modal">&times;</button>
</div>

<!-- Auth Container -->
<div id="auth-container">
<div class="auth-header">
<h4>Authentication required</h4>
<p>Log in to create a Kubernetes cluster</p>
</div>

<div class="auth-options">
<button id="so-login" class="auth-button">
<span class="auth-icon">young </span>
<span class="auth-text">SSO Government</span>
</ Button>

<button id="yubikey-login" class="auth-button">
<span class="auth-icon">young </span>
<span class="auth-text">YubiKey</span>
</button>

<button id="cert-login" class="auth-button">
<span class="auth-icon">young </span>
<span class="auth-text">PKI government Certificate</span>
</button>
</div>
</div>

<!-- Form Container -->
<div id="form-container" style="display: none;">
<form id="create-cluster-form">
<div class="form__row">
<label class="form__label" for="organisation">Organisation</label>
<select id="organisation" name="organisation" class="input-select" required>
<option value="" disabled selected>Select an organization</option>
<!-- Organizations will be popular after authentication -->
</select>
</div>

<div class="form__row">
<label class="form__label" for="cluster-name">Cluster name</label>
<input type="text" id="cluster-name" name="cluster-name" class="input-text" required placeholder="my-k8s-cluster">
</div>

<div class="form__row">
<label class="form__label" for="cluster-tier">Price model</label>
<select id="cluster-tier" name="cluster-tier" class="input-select" required>
<option value="" disabled selected>Select a price model</option>
<option value="free">Free-tier (1 node, limited resources, 90 days)</option>
<option value="basic">Basis (pay-as-you-go)</option>
<option value="reserved">Reserved capacity (prepaid)</option>
</select>
</div>

<div class="form__row">
<label class="form__label" for="multi-az">High availability</label>
<select id="multi-az" name="multi-az" class="input-select" required>
<option value="false" selected>Some region (default)</option>
<option value="true">Multi region (high availability)</option>
</select>
</div>

<div class="form__row">
<label class="form__label" for="cluster-region">Region</label>
<select id="cluster-region" name="cluster-region" class="input-select" required>
<option value="" disabled selected>Select a region</option>
<option value="en-ams">Amsterdam</option>
<option value="en-rtt">Rotterdam</option>
<option value="en-gro">Groningen</option>
<option value="en-hrl">Heerlen</option>
</select>
<div id="secondary-region-row" style="display: none; margin-top: 8px;">
<label class="form__label" for="cluster-region-secondary"> Secondary region</label>
<select id="cluster-region-secondary" name="cluster-region-secondary" class="input-select">
<option value="" disabled selected>Select secondary region</option>
<option value="en-ams">Amsterdam</option>
<option value="en-rtt">Rotterdam</option>
<option value="en-gro">Groningen</option>
<option value="en-hrl">Heerlen</option>
</select>
</div>
</div>

<div class="form__row">
<label class="form__label" for="cluster-size">Size</label>
<select id="cluster-size" name="cluster-size" class="input-select" required>
<option value="" disabled selected>Select a size</option>
<option value="small">Small (1-5 nodes)</option>
<option value="medium">Middel (6-20 nodes)</option>
<option value="large">Large (21-50 nodes)</option>
<option value="custom">Adjusted</option>
</select>
</div>

<div class="form__row">
<label class="form__label" for="cluster-version">Kubernetes version</label>
<select id="cluster-version" name="cluster-version" class="input-select" required>
<option value="1.33" selected>Kubernetes 1.33 (newest)</option>
<option value="1.32">Kubernetes 1.32</option>
<option value="1.31">Kubernetes 1.31</option>
<option value="1.30">Kubernetes 1.30</option>
</select>
</div>

<!-- Cost Estimation Section -->
<div id="cost-estimation" class="cost-estimation-container">
<h4> Estimated cost</h4>
<div class="cost-details">
<div class="cost-row">
<span class="cost-label">Monthly cost: </span>
<span id="month-cost" class="cost-value">€0,00</span>
</div>
<div class="cost-row">
<span class="cost-label">annual cost: </span>
<span id="year-cost" class="cost-value">€0,00</span>
</div>
<div class="cost-info">
<span class="info-icon">i</span>
<span class="info-text"> These costs are estimated and may vary based on actual use.</span>
</div>
</div>
</div>

<div class="form-actions">
<button type="button" id="back-to-auth" class="button">Back</button>
Create <button type="submit" class="button button--primary">Cluster</button>
</div>
</form>
</div>

<!-- Spinner Container -->
<div id="spinner" class="cluster-spinner-container">
<div class="cluster-spinner"></div>
<p class="cluster-spinner-text">Kubernetes cluster is being created.</p>
</div>

<!-- Result Container -->
<div id="result-container" class="cluster-result-container">
<div class="cluster-result-header">
<span class="cluster-result-icon">young </span>
<h4>Cluster successfully created!</h4>
</div>

<div class="cluster-result-details">
<div class="cluster-detail-row">
<span class="cluster-detail-label">Cluster Name:</span>
<span id="result-cluster-name" class="cluster-detail-value"></span>
</div>
<div class="cluster-detail-row">
<span class="cluster-detail-label">Cluster ID:</span>
<span id="result-cluster-id" class="cluster-detail-value"></span>
</div>
<div class="cluster-detail-row">
<span class="cluster-detail-label">
<span id="result-cluster-region" class="cluster-detail-value"></span>
</div>
<div class="cluster-detail-row">
<span class="cluster-detail-label">Size:</span>
<span id="result-cluster-size" class="cluster-detail-value"></span>
</div>
<div class="cluster-detail-row">
<span class="cluster-detail-label">Kubernetes version:</span>
<span id="result-cluster-version" class="cluster-detail-value"></span>
</div>
<div class="cluster-detail-row">
<span class="cluster-detail-label">Created on: </span>
<span id="result-creation-time" class="cluster-detail-value"></span>
</div>
<div class="cluster-detail-row">
<span class="cluster-detail-label">API endpoint:</span>
<span id="result-cluster-endpoint" class="cluster-detail-value"></span>
</div>
</div>

<h4>Getting started with your cluster</h4>
<div class="cluster-code-block">

# Configure kubectl for your new cluster

kubectl config set-cluster national-cloud --server=<span id="kubectl-endpoint"></span>

# Download kubeconfig for this cluster and apply

curl -o kubeconfig.yaml <https://rijkscloud.nl/api/v1/clusters/><span id="kubectl-cluster-id"></span>/kubeconfig
exports KUBECONFIG=./kubeconfig.yaml

# Check connectivity

kubectl get nodes
</div>

<div class="cluster-result-actions">
<button id="reset-cluster-form" class="button">Create another cluster</button>
</div>
</div>
</div>
<div class="action-card">
<span class="wip-badge wip-badge-beschikbaar">available</span>
<h4 >Ports</h4>
<p >Platform independent cloud hosting</p>
<a href="https://haven.commonground.nl/" class="action-button" target="_blank">Discover</a>
</div>
<div class="action-card">
<span class="wip-badge wip-badge-beschikbaar">available</span>
<h4 >Azure Bio-Compliancy</h4>
<p >Cloud compliance for government organisations</p>
<a href="https://github.com/Azure/Bio-Compliancy" class="action-button" target="_blank">Discover</a>
</div>
<div class="action-card">
<span class="wip-badge wip-badge-ontwikkeling">development</span>
<h4 >Cloud Assessment</h4>
<p > Rate your cloud readiness</p>
<button disabled class="action-button">Upcoming</button>
</div>
</div>
</div>

Implementation steps

1. **Start the cloud**: Start with the assumption that cloud technology offers benefits
2. **Consider various models**: Evaluate sovereign, public, private or hybrid cloud solutions
3. **Dataregie central**: Determine the level of data control required
4. **Safe from the beginning**: Integrate security and compliance into your cloud strategy
5. **Examination of costs**: Compare total cost of ownership (TCO) of different options
6. **Plan migrations**: Develop a strategy for migrating existing systems
7. **Develop new skills**: Invest in cloud expertise within your organisation

### Migration considerations

When moving to the cloud, consider:

- Data policy and requirements
- Security risks and needs
- Technological suitability
- Available budget and resources
- Confidentiality of data
- Connectivity and network requirements

### When is the cloud suitable?

- For new applications and services
- When renewing existing IT systems
- For fluctuating demand and needs
- To quickly set up testing and development environments
- For scaling data-intensive applications

### When are alternatives to consider?

- For specific security or compliance requirements that cannot be met in the cloud
- Where data must be stored locally for legal reasons
- For systems with specific hardware requirements
- Where existing investments in on-premises infrastructure have not yet been written off
- In case of insufficient cloud network capacity

### Important considerations

- **Digital sovereignty**: Assess to what extent cloud solutions meet requirements for European sovereignty
- **Data classification**: Determines which data can be stored in which type of cloud
- **Datalocality**: Consider where data is stored and processed (EU/NL)
- **Exit strategy**: Plan how to switch cloud providers if needed
- **Vendor lock-in**: Limit dependence on one supplier
- **Open standards**: Choose solutions using open standards
- **Government**: Develop a clear cloud usage policy
- **Cost management**: Implement mechanisms to monitor and control cloud costs
- **Connectivity**: Ensure sufficient network bandwidth

## Related Tools

- [Regels voor verantwoord cloudgebruik Rijksoverheid](https://www.digitaleoverheid.nl/nieuws/regels-voor-verantwoord-cloudgebruik-rijksoverheid/)

## Related guidelines

- [6. Maak veilige systemen](../veiligheid/index.md)
- [7. Maak privacy integraal](../privacy/index.md)
- [12. Definieer je inkoopstrategie](../inkoop/index.md)
- [13. Maak je technologie duurzaam](../duurzaamheid/index.md)
