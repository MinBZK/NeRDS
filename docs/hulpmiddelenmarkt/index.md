---
title: "Hulpmiddelenmarkt"
summary: Centrale marktplaats voor alle tools, standaarden, beleid en frameworks van NeRDS
---

# Hulpmiddelenmarkt

Welkom in de Hulpmiddelenmarkt van NeRDS - uw centrale plek voor alle tools, standaarden, beleid en frameworks die worden genoemd in de Nederlandse Richtlijn Digitale Systemen.

<div class="resource-markt-filters">
    <div class="search-container">
        <input type="text" id="resourceSearch" placeholder="Zoek resources..." />
    </div>

    <div class="filter-container">
        <select id="typeFilter">
            <option value="">Alle types</option>
            <option value="tool">Tools</option>
            <option value="standard">Standaarden</option>
            <option value="policy">Beleid</option>
            <option value="framework">Frameworks</option>
        </select>

        <select id="statusFilter">
            <option value="">Alle statussen</option>
            <option value="beschikbaar">Beschikbaar</option>
            <option value="ontwikkeling">Ontwikkeling</option>
            <option value="concept">Concept</option>
        </select>

        <select id="richtlijnFilter">
            <option value="">Alle richtlijnen</option>
        </select>

        <label class="filter-checkbox">
            <input type="checkbox" id="internalFilter">
            Alleen interne resources
        </label>
    </div>
</div>

<div class="resource-stats">
    <div class="stat-item">
        <span class="stat-number" id="totalResources">0</span>
        <span class="stat-label">totaal</span>
    </div>
    <div class="stat-item">
        <span class="stat-number" id="toolsCount">0</span>
        <span class="stat-label">tools</span>
    </div>
    <div class="stat-item">
        <span class="stat-number" id="standardsCount">0</span>
        <span class="stat-label">standaarden</span>
    </div>
    <div class="stat-item">
        <span class="stat-number" id="policiesCount">0</span>
        <span class="stat-label">beleid</span>
    </div>
    <div class="stat-item">
        <span class="stat-number" id="frameworksCount">0</span>
        <span class="stat-label">frameworks</span>
    </div>
</div>

<div id="resourceGrid" class="resource-grid">
    <!-- Resources worden hier geladen via JavaScript -->
</div>

<div id="noResults" class="no-results" style="display: none;">
    <p>Geen resources gevonden die voldoen aan uw zoekcriteria.</p>
</div>

<script>
document.addEventListener('DOMContentLoaded', async function() {
    // Laad resources.json
    let response;
    try {
        // Probeer verschillende paden
        response = await fetch('/NeRDS/data/resources.json');
        if (!response.ok) {
            response = await fetch('./data/resources.json');
        }
        if (!response.ok) {
            response = await fetch('../data/resources.json');
        }
    } catch (e) {
        console.error('Error loading resources:', e);
        return;
    }
    const data = await response.json();
    const resources = data.resources;

    // Vul richtlijnen filter
    const richtlijnen = [...new Set(resources.flatMap(r => r.richtlijnen))].sort();
    const richtlijnFilter = document.getElementById('richtlijnFilter');
    richtlijnen.forEach(richtlijn => {
        const option = document.createElement('option');
        option.value = richtlijn;
        option.textContent = richtlijn.charAt(0).toUpperCase() + richtlijn.slice(1);
        richtlijnFilter.appendChild(option);
    });

    // Update statistieken
    function updateStats(filteredResources) {
        document.getElementById('totalResources').textContent = filteredResources.length;
        document.getElementById('toolsCount').textContent = filteredResources.filter(r => r.type === 'tool').length;
        document.getElementById('standardsCount').textContent = filteredResources.filter(r => r.type === 'standard').length;
        document.getElementById('policiesCount').textContent = filteredResources.filter(r => r.type === 'policy').length;
        document.getElementById('frameworksCount').textContent = filteredResources.filter(r => r.type === 'framework').length;
    }

    // Render resources
    function renderResources(resourcesToRender) {
        const grid = document.getElementById('resourceGrid');
        const noResults = document.getElementById('noResults');

        if (resourcesToRender.length === 0) {
            grid.style.display = 'none';
            noResults.style.display = 'block';
            return;
        }

        grid.style.display = 'grid';
        noResults.style.display = 'none';

        grid.innerHTML = resourcesToRender.map(resource => `
            <div class="resource-card" data-type="${resource.type}" data-status="${resource.status}">
                <div class="resource-header">
                    <span class="resource-type-badge resource-type-${resource.type}">${getTypeLabel(resource.type)}</span>
                    <span class="resource-status-badge resource-status-${resource.status}">${resource.status}</span>
                    ${resource.external ? '<span class="resource-external-badge">extern</span>' : ''}
                </div>
                <h3 class="resource-title">${resource.title}</h3>
                <p class="resource-description">${resource.description}</p>
                <div class="resource-richtlijnen">
                    ${resource.richtlijnen.map(r => `<span class="richtlijn-tag">${r}</span>`).join('')}
                </div>
                ${resource.url ?
                    `<a href="${resource.url}" class="resource-link" target="_blank">Bekijken</a>` :
                    '<button class="resource-link" disabled>Niet beschikbaar</button>'
                }
            </div>
        `).join('');
    }

    function getTypeLabel(type) {
        const labels = {
            'tool': 'Tool',
            'standard': 'Standaard',
            'policy': 'Beleid',
            'framework': 'Framework'
        };
        return labels[type] || type;
    }

    // Filter functie
    function filterResources() {
        const searchTerm = document.getElementById('resourceSearch').value.toLowerCase();
        const typeFilter = document.getElementById('typeFilter').value;
        const statusFilter = document.getElementById('statusFilter').value;
        const richtlijnFilter = document.getElementById('richtlijnFilter').value;
        const internalOnly = document.getElementById('internalFilter').checked;

        const filtered = resources.filter(resource => {
            const matchesSearch = resource.title.toLowerCase().includes(searchTerm) ||
                                resource.description.toLowerCase().includes(searchTerm);
            const matchesType = !typeFilter || resource.type === typeFilter;
            const matchesStatus = !statusFilter || resource.status === statusFilter;
            const matchesRichtlijn = !richtlijnFilter || resource.richtlijnen.includes(richtlijnFilter);
            const matchesInternal = !internalOnly || !resource.external;

            return matchesSearch && matchesType && matchesStatus && matchesRichtlijn && matchesInternal;
        });

        renderResources(filtered);
        updateStats(filtered);
    }

    // Event listeners
    document.getElementById('resourceSearch').addEventListener('input', filterResources);
    document.getElementById('typeFilter').addEventListener('change', filterResources);
    document.getElementById('statusFilter').addEventListener('change', filterResources);
    document.getElementById('richtlijnFilter').addEventListener('change', filterResources);
    document.getElementById('internalFilter').addEventListener('change', filterResources);

    // Initiële render
    renderResources(resources);
    updateStats(resources);
});
</script>
