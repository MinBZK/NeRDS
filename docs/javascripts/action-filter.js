/**
 * Action Cards Filtering System
 * Filters action cards by type, status, and action on the frontend
 */

document.addEventListener('DOMContentLoaded', function () {
  initializeActionFilters();
});

/**
 * Initialize action filtering controls
 */
function initializeActionFilters() {
  const actionCardsContainer = document.querySelector('.action-cards');

  if (!actionCardsContainer) {
    return;
  }

  // Create filter controls
  const filterControls = createFilterControls();
  actionCardsContainer.parentNode.insertBefore(filterControls, actionCardsContainer);

  // Get all available filter values
  const cards = actionCardsContainer.querySelectorAll('.action-card');
  const types = [...new Set(Array.from(cards).map(card => card.dataset.type))].filter(Boolean);
  const statuses = [...new Set(Array.from(cards).map(card => card.dataset.status))].filter(Boolean);
  const actions = [...new Set(Array.from(cards).map(card => card.dataset.action))].filter(Boolean);

  // Populate filter buttons
  populateFilterButtons('type-filter', types, 'type');
  populateFilterButtons('status-filter', statuses, 'status');
  populateFilterButtons('action-filter', actions, 'action');

  // Add event listeners to filter buttons
  setupFilterListeners();
}

/**
 * Create filter control HTML
 */
function createFilterControls() {
  const container = document.createElement('div');
  container.className = 'action-filters';
  container.innerHTML = `
    <div style="margin-bottom: 1rem; padding-bottom: 1rem; border-bottom: 1px solid #e0e0e0;">
      <div style="margin-bottom: 0.75rem;">
        <label style="display: block; font-weight: 600; margin-bottom: 0.5rem; font-size: 0.9rem;">Type</label>
        <div id="type-filter" style="display: flex; flex-wrap: wrap; gap: 0.5rem;"></div>
      </div>

      <div style="margin-bottom: 0.75rem;">
        <label style="display: block; font-weight: 600; margin-bottom: 0.5rem; font-size: 0.9rem;">Status</label>
        <div id="status-filter" style="display: flex; flex-wrap: wrap; gap: 0.5rem;"></div>
      </div>

      <div>
        <label style="display: block; font-weight: 600; margin-bottom: 0.5rem; font-size: 0.9rem;">Actie</label>
        <div id="action-filter" style="display: flex; flex-wrap: wrap; gap: 0.5rem;"></div>
      </div>
    </div>
  `;
  return container;
}

/**
 * Populate filter buttons for a given filter type
 */
function populateFilterButtons(containerId, values, filterType) {
  const container = document.getElementById(containerId);
  if (!container) return;

  // Add "Alle" button first
  const allButton = document.createElement('button');
  allButton.className = 'filter-button filter-button-active';
  allButton.dataset.filterType = filterType;
  allButton.dataset.filterValue = 'all';
  allButton.textContent = 'Alle';
  allButton.addEventListener('click', handleFilterClick);
  container.appendChild(allButton);

  // Add individual filter buttons
  values.forEach(value => {
    const button = document.createElement('button');
    button.className = 'filter-button';
    button.dataset.filterType = filterType;
    button.dataset.filterValue = value;
    button.textContent = capitalizeLabel(value);
    button.addEventListener('click', handleFilterClick);
    container.appendChild(button);
  });
}

/**
 * Handle filter button clicks
 */
function handleFilterClick(event) {
  const button = event.target;
  const filterType = button.dataset.filterType;
  const filterValue = button.dataset.filterValue;

  // Update active button state
  const filterContainer = button.parentNode;
  filterContainer.querySelectorAll('.filter-button').forEach(btn => {
    btn.classList.remove('filter-button-active');
  });
  button.classList.add('filter-button-active');

  // Apply filters
  applyFilters();
}

/**
 * Apply all active filters to action cards
 */
function applyFilters() {
  const actionCardsContainer = document.querySelector('.action-cards');
  if (!actionCardsContainer) return;

  const cards = actionCardsContainer.querySelectorAll('.action-card');

  // Get all active filter buttons
  const activeTypeFilters = getActiveFilterValues('type-filter', 'type');
  const activeStatusFilters = getActiveFilterValues('status-filter', 'status');
  const activeActionFilters = getActiveFilterValues('action-filter', 'action');

  cards.forEach(card => {
    const cardType = card.dataset.type;
    const cardStatus = card.dataset.status;
    const cardAction = card.dataset.action;

    // Check if card matches all active filters
    const matchesType = activeTypeFilters.length === 0 || activeTypeFilters.includes('all') || activeTypeFilters.includes(cardType);
    const matchesStatus = activeStatusFilters.length === 0 || activeStatusFilters.includes('all') || activeStatusFilters.includes(cardStatus);
    const matchesAction = activeActionFilters.length === 0 || activeActionFilters.includes('all') || activeActionFilters.includes(cardAction);

    if (matchesType && matchesStatus && matchesAction) {
      card.style.display = '';
    } else {
      card.style.display = 'none';
    }
  });
}

/**
 * Get active filter values for a specific filter type
 */
function getActiveFilterValues(containerId, filterType) {
  const container = document.getElementById(containerId);
  if (!container) return [];

  return Array.from(container.querySelectorAll('.filter-button-active'))
    .map(btn => btn.dataset.filterValue);
}

/**
 * Setup event listeners for filter functionality
 */
function setupFilterListeners() {
  // Already set up in populateFilterButtons
}

/**
 * Capitalize label for display
 */
function capitalizeLabel(value) {
  if (!value) return '';

  // Handle specific label translations
  const labelMap = {
    'beleid': 'Beleid',
    'register': 'Register',
    'tool': 'Tool',
    'handleiding': 'Handleiding',
    'form': 'Formulier',
    'beschikbaar': 'Beschikbaar',
    'concept': 'Concept',
    'ontwikkeling': 'Ontwikkeling',
    'Verkennen': 'Verkennen',
    'Registreren': 'Registreren',
    'Starten': 'Starten',
    'Aanmaken': 'Aanmaken',
    'Bekijken': 'Bekijken',
    'Aanvragen': 'Aanvragen',
    'Leren': 'Leren',
    'Ontdekken': 'Ontdekken',
    'Scannen': 'Scannen',
    'Gebruiken': 'Gebruiken',
    'Testen': 'Testen',
    'Downloaden': 'Downloaden',
    'Deelnemen': 'Deelnemen',
    'Toepassen': 'Toepassen',
    'Berekenen': 'Berekenen',
    'Zoeken': 'Zoeken',
    'Publiceren': 'Publiceren'
  };

  return labelMap[value] || value.charAt(0).toUpperCase() + value.slice(1);
}
