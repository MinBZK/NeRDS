/**
 * Auto-sync resources from central database to richtlijn pages
 * This script loads resources from the central JSON and renders them in richtlijn pages
 */

// Mapping van resource types naar action button tekst
const ACTION_BUTTON_TEXTS = {
    'tool': 'Gebruiken',
    'standard': 'Bekijken',
    'policy': 'Bekijken',
    'framework': 'Verkennen'
};

/**
 * Laadt resources voor een specifieke richtlijn
 * @param {string} richtlijnNaam - De naam van de richtlijn
 * @returns {Promise<Object>} Object met praktischeHulpmiddelen en kadersEnBeleid arrays
 */
async function loadRichtlijnResources(richtlijnNaam) {
    try {
        const response = await fetch('/data/resources.json');
        const data = await response.json();
        const allResources = data.resources;

        // Filter resources voor deze richtlijn
        const richtlijnResources = allResources.filter(resource =>
            resource.richtlijnen.includes(richtlijnNaam)
        );

        // Split resources in praktische hulpmiddelen en kaders/beleid
        const praktischeHulpmiddelen = richtlijnResources.filter(resource =>
            resource.type === 'tool'
        );

        const kadersEnBeleid = richtlijnResources.filter(resource =>
            resource.type === 'policy' || resource.type === 'standard' || resource.type === 'framework'
        );

        return { praktischeHulpmiddelen, kadersEnBeleid };
    } catch (error) {
        console.error('Error loading resources:', error);
        return { praktischeHulpmiddelen: [], kadersEnBeleid: [] };
    }
}

/**
 * Rendert een resource card
 * @param {Object} resource - Het resource object
 * @returns {string} HTML string van de resource card
 */
function renderResourceCard(resource) {
    const externalBadge = resource.external ? '<span class="category-badge">extern</span>' : '';
    const actionText = ACTION_BUTTON_TEXTS[resource.type] || 'Bekijken';

    return `
        <div class="action-card">
            <span class="wip-badge wip-badge-${resource.status}">${resource.status}</span>
            <h4>${resource.title} ${externalBadge}</h4>
            <p>${resource.description}</p>
            <a href="${resource.url}" class="action-button" target="_blank">
                ${actionText}
            </a>
        </div>
    `;
}

/**
 * Rendert resources in de gegeven containers
 * @param {string} richtlijnNaam - Naam van de richtlijn
 * @param {string} praktischeContainerId - ID van de container voor praktische hulpmiddelen
 * @param {string} kadersContainerId - ID van de container voor kaders/beleid
 */
async function renderRichtlijnResources(richtlijnNaam, praktischeContainerId, kadersContainerId) {
    const { praktischeHulpmiddelen, kadersEnBeleid } = await loadRichtlijnResources(richtlijnNaam);

    // Render praktische hulpmiddelen
    const praktischeContainer = document.getElementById(praktischeContainerId);
    if (praktischeContainer) {
        if (praktischeHulpmiddelen.length > 0) {
            praktischeContainer.innerHTML = praktischeHulpmiddelen.map(renderResourceCard).join('');
        } else {
            praktischeContainer.innerHTML = '<p>Geen praktische hulpmiddelen beschikbaar voor deze richtlijn.</p>';
        }
    }

    // Render kaders en beleid
    const kadersContainer = document.getElementById(kadersContainerId);
    if (kadersContainer) {
        if (kadersEnBeleid.length > 0) {
            kadersContainer.innerHTML = kadersEnBeleid.map(renderResourceCard).join('');
        } else {
            kadersContainer.innerHTML = '<p>Geen kaders, beleid of handreikingen beschikbaar voor deze richtlijn.</p>';
        }
    }
}

// Maak functies globaal beschikbaar
window.loadRichtlijnResources = loadRichtlijnResources;
window.renderResourceCard = renderResourceCard;
window.renderRichtlijnResources = renderRichtlijnResources;
