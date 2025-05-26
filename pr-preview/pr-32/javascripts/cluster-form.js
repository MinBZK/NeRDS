// JavaScript for the Kubernetes Cluster Form
// Initialize cluster form functionality
function initializeClusterForm() {
    // Check if cluster form elements exist, if not, skip initialization
    const clusterForm = document.getElementById('create-cluster-form');
    const clusterModal = document.getElementById('cluster-modal');
    const closeModalBtn = document.getElementById('close-modal');
    const openModalBtn = document.getElementById('open-cluster-form');
    const modalOverlay = document.getElementById('modal-overlay');

    // Exit early if required elements don't exist (not on cloud page)
    if (!clusterModal || !openModalBtn) {
        return;
    }

    // Prevent duplicate initialization by checking for a flag
    if (clusterModal.dataset.initialized === 'true') {
        return;
    }

    // Mark as initialized
    clusterModal.dataset.initialized = 'true';
    const authContainer = document.getElementById('auth-container');
    const formContainer = document.getElementById('form-container');
    const resultContainer = document.getElementById('result-container');
    const spinner = document.getElementById('spinner');

    // Authentication buttons
    const ssoLoginBtn = document.getElementById('sso-login');
    const yubikeyLoginBtn = document.getElementById('yubikey-login');
    const certLoginBtn = document.getElementById('cert-login');
    const backToAuthBtn = document.getElementById('back-to-auth');

    // Form elements
    const organizationSelect = document.getElementById('organization');
    const clusterSizeSelect = document.getElementById('cluster-size');
    const clusterTierSelect = document.getElementById('cluster-tier');
    const multiAzSelect = document.getElementById('multi-az');
    const monthlyCostEl = document.getElementById('monthly-cost');
    const yearlyCostEl = document.getElementById('yearly-cost');

    // Cost calculation variables
    const costs = {
        free: {
            small: { monthly: 0, yearly: 0 }
        },
        basic: {
            small: { monthly: 59.99, yearly: 719.88 },
            medium: { monthly: 149.99, yearly: 1799.88 },
            large: { monthly: 399.99, yearly: 4799.88 },
            custom: { monthly: 249.99, yearly: 2999.88 }
        },
        reserved: {
            small: { monthly: 49.99, yearly: 599.88 },
            medium: { monthly: 129.99, yearly: 1559.88 },
            large: { monthly: 349.99, yearly: 4199.88 },
            custom: { monthly: 199.99, yearly: 2399.88 }
        }
    };

    // Multi-AZ cost multiplier - increases base cost by 50%
    const multiAzMultiplier = 1.5;

    // If the open button exists, attach click event
    if (openModalBtn && !openModalBtn.dataset.listenerAttached) {
        openModalBtn.dataset.listenerAttached = 'true';
        openModalBtn.addEventListener('click', function() {
            clusterModal.style.display = 'block';
            modalOverlay.style.display = 'block';
            authContainer.style.display = 'block';
            formContainer.style.display = 'none';
            resultContainer.style.display = 'none';
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        });
    }

    // Close modal function
    function closeModal() {
        clusterModal.style.display = 'none';
        modalOverlay.style.display = 'none';
        document.body.style.overflow = ''; // Re-enable scrolling

        // Reset the form state when closing
        setTimeout(function() {
            authContainer.style.display = 'block';
            formContainer.style.display = 'none';
            resultContainer.style.display = 'none';
            if (clusterForm) clusterForm.reset();
            updateCostEstimation();
        }, 300);
    }

    // If close button exists, attach click event
    if (closeModalBtn && !closeModalBtn.dataset.listenerAttached) {
        closeModalBtn.dataset.listenerAttached = 'true';
        closeModalBtn.addEventListener('click', closeModal);
    }

    // Close modal when clicking outside
    if (modalOverlay && !modalOverlay.dataset.listenerAttached) {
        modalOverlay.dataset.listenerAttached = 'true';
        modalOverlay.addEventListener('click', function(e) {
            if (e.target === modalOverlay) {
                closeModal();
            }
        });
    }

    // Auth buttons click handlers
    if (ssoLoginBtn && !ssoLoginBtn.dataset.listenerAttached) {
        ssoLoginBtn.dataset.listenerAttached = 'true';
        ssoLoginBtn.addEventListener('click', function() {
            simulateLogin('SSO Rijksoverheid');
        });
    }

    if (yubikeyLoginBtn && !yubikeyLoginBtn.dataset.listenerAttached) {
        yubikeyLoginBtn.dataset.listenerAttached = 'true';
        yubikeyLoginBtn.addEventListener('click', function() {
            simulateLogin('YubiKey');
        });
    }

    if (certLoginBtn && !certLoginBtn.dataset.listenerAttached) {
        certLoginBtn.dataset.listenerAttached = 'true';
        certLoginBtn.addEventListener('click', function() {
            simulateLogin('PKIoverheid Certificaat');
        });
    }

    // Back to auth button handler
    if (backToAuthBtn && !backToAuthBtn.dataset.listenerAttached) {
        backToAuthBtn.dataset.listenerAttached = 'true';
        backToAuthBtn.addEventListener('click', function() {
            authContainer.style.display = 'block';
            formContainer.style.display = 'none';
        });
    }

    // Simulate login process
    function simulateLogin(method) {
        // Hide auth container
        authContainer.style.display = 'none';

        // Show spinner for authentication
        spinner.style.display = 'flex';
        spinner.querySelector('.cluster-spinner-text').textContent = `Authenticeren met ${method}...`;

        // Simulate authentication delay
        setTimeout(function() {
            // Hide spinner
            spinner.style.display = 'none';
            spinner.querySelector('.cluster-spinner-text').textContent = 'Kubernetes cluster wordt aangemaakt...';

            // Populate organization dropdown with user's organizations
            populateUserOrganizations();

            // Show form container
            formContainer.style.display = 'block';
        }, 1500);
    }

    // Populate the organization dropdown with the user's organizations
    function populateUserOrganizations() {
        if (organizationSelect) {
            // Clear existing options except the default one
            while (organizationSelect.options.length > 1) {
                organizationSelect.remove(1);
            }

            // Simulate fetching user's organizations (typically just a few)
            // Including OIN (Organisatie Identificatie Nummer) for each organization
            const userOrganizations = [
                { value: 'minbzk', text: 'Ministerie van Binnenlandse Zaken', oin: '00000001800866472000' },
                { value: 'cibg', text: 'CIBG', oin: '00000004003214345000' },
                { value: 'rijkswaterstaat', text: 'Rijkswaterstaat', oin: '00000001800459126000' }
            ];

            // Add the user's organizations to the dropdown with OIN
            userOrganizations.forEach(org => {
                const option = document.createElement('option');
                option.value = org.value;
                // Include OIN in dropdown text
                option.text = `${org.text} (OIN: ${org.oin})`;
                // Store OIN as a data attribute for later use
                option.dataset.oin = org.oin;
                organizationSelect.add(option);
            });

            // Add visual indication that these are the user's organizations
            const formRow = organizationSelect.closest('.form__row');
            if (formRow && !document.getElementById('org-info')) {
                const infoText = document.createElement('div');
                infoText.id = 'org-info';
                infoText.className = 'form-info-text';
                infoText.textContent = 'Deze organisaties zijn gebaseerd op uw login gegevens';
                infoText.style.fontSize = '0.8em';
                infoText.style.color = '#666';
                infoText.style.marginTop = '4px';
                formRow.appendChild(infoText);
            }
        }
    }

    // Function to handle the tier selection
    function handleTierSelection() {
        const tier = clusterTierSelect ? clusterTierSelect.value : '';

        if (clusterSizeSelect) {
            // Store current selection if possible
            const currentSize = clusterSizeSelect.value;

            // Clear existing options
            while (clusterSizeSelect.options.length > 0) {
                clusterSizeSelect.remove(0);
            }

            // Add default option
            const defaultOption = document.createElement('option');
            defaultOption.value = '';
            defaultOption.text = 'Selecteer een grootte';
            defaultOption.disabled = true;
            defaultOption.selected = true;
            clusterSizeSelect.add(defaultOption);

            // Add size options based on tier
            if (tier === 'free') {
                // Free tier only has small option
                const smallOption = document.createElement('option');
                smallOption.value = 'small';
                smallOption.text = 'Klein (1 node, beperkte resources)';
                clusterSizeSelect.add(smallOption);

                // Disable multi-AZ option for free tier and set to 'false'
                if (multiAzSelect) {
                    multiAzSelect.value = 'false';
                    multiAzSelect.disabled = true;

                    // Add a note to the multi-AZ label if it doesn't exist
                    const multiAzLabel = multiAzSelect.previousElementSibling;
                    if (multiAzLabel && !document.getElementById('multi-az-free-note')) {
                        const note = document.createElement('span');
                        note.id = 'multi-az-free-note';
                        note.className = 'form-note';
                        note.textContent = ' (niet beschikbaar in free-tier)';
                        note.style.fontSize = '0.8em';
                        note.style.fontStyle = 'italic';
                        note.style.color = '#666';
                        multiAzLabel.appendChild(note);
                    }
                }
            } else {
                // Add all options for paid tiers
                const sizeOptions = [
                    { value: 'small', text: 'Klein (1-5 nodes)' },
                    { value: 'medium', text: 'Middel (6-20 nodes)' },
                    { value: 'large', text: 'Groot (21-50 nodes)' },
                    { value: 'custom', text: 'Aangepast' }
                ];

                sizeOptions.forEach(option => {
                    const optionElement = document.createElement('option');
                    optionElement.value = option.value;
                    optionElement.text = option.text;
                    if (option.value === currentSize && option.value !== '') {
                        optionElement.selected = true;
                    }
                    clusterSizeSelect.add(optionElement);
                });

                // Enable multi-AZ option for paid tiers
                if (multiAzSelect) {
                    multiAzSelect.disabled = false;

                    // Remove the note if it exists
                    const note = document.getElementById('multi-az-free-note');
                    if (note) {
                        note.remove();
                    }
                }
            }
        }

        // Update cost estimation after changing options
        updateCostEstimation();
    }

    // Update cost estimation
    function updateCostEstimation() {
        const tier = clusterTierSelect ? clusterTierSelect.value : '';
        const size = clusterSizeSelect ? clusterSizeSelect.value : '';
        const multiAz = multiAzSelect && multiAzSelect.value === 'true';

        let monthlyCost = 0;
        let yearlyCost = 0;

        if (tier && size && costs[tier] && costs[tier][size]) {
            monthlyCost = costs[tier][size].monthly;
            yearlyCost = costs[tier][size].yearly;

            // Apply multi-AZ multiplier if selected and not free tier
            if (multiAz && tier !== 'free') {
                monthlyCost *= multiAzMultiplier;
                yearlyCost *= multiAzMultiplier;
            }
        }

        if (monthlyCostEl) monthlyCostEl.textContent = `€${monthlyCost.toFixed(2)}`;
        if (yearlyCostEl) yearlyCostEl.textContent = `€${yearlyCost.toFixed(2)}`;
    }

    // Add event listeners for cost estimation updates
    if (clusterSizeSelect && !clusterSizeSelect.dataset.listenerAttached) {
        clusterSizeSelect.dataset.listenerAttached = 'true';
        clusterSizeSelect.addEventListener('change', updateCostEstimation);
    }

    if (clusterTierSelect && !clusterTierSelect.dataset.listenerAttached) {
        clusterTierSelect.dataset.listenerAttached = 'true';
        clusterTierSelect.addEventListener('change', handleTierSelection);
    }

    if (multiAzSelect && !multiAzSelect.dataset.listenerAttached) {
        multiAzSelect.dataset.listenerAttached = 'true';
        multiAzSelect.addEventListener('change', updateCostEstimation);
    }

    // Initialize tier selection and cost estimation
    handleTierSelection();
    updateCostEstimation();

    // Handle form submission
    if (clusterForm && !clusterForm.dataset.listenerAttached) {
        clusterForm.dataset.listenerAttached = 'true';
        clusterForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form data
            const formData = new FormData(clusterForm);
            const organization = formData.get('organization');
            const clusterName = formData.get('cluster-name');
            const clusterRegion = formData.get('cluster-region');
            const clusterSize = formData.get('cluster-size');
            const clusterTier = formData.get('cluster-tier');
            const clusterVersion = formData.get('cluster-version');
            const multiAz = formData.get('multi-az') === 'true' ? 'Ja' : 'Nee';

            // Show spinner
            formContainer.style.display = 'none';
            spinner.style.display = 'flex';

            // Simulate API call (3 second delay)
            setTimeout(function() {
                // Hide spinner
                spinner.style.display = 'none';

                // Show result
                resultContainer.style.display = 'block';

                // Set cluster details in result
                document.getElementById('result-cluster-name').textContent = clusterName;
                document.getElementById('result-cluster-region').textContent = clusterRegion;
                document.getElementById('result-cluster-size').textContent = clusterSize;
                document.getElementById('result-cluster-version').textContent = clusterVersion;

                // Prettify tier name for display
                let displayTier = 'Onbekend';
                if (clusterTier === 'free') {
                    displayTier = 'Free-tier';
                } else if (clusterTier === 'basic') {
                    displayTier = 'Basis (pay-as-you-go)';
                } else if (clusterTier === 'reserved') {
                    displayTier = 'Gereserveerde capaciteit';
                }

                // Generate random cluster ID and endpoint
                const clusterId = 'k8s-' + Math.random().toString(36).substring(2, 10);
                document.getElementById('result-cluster-id').textContent = clusterId;

                // Format the organization name and get OIN for display in the result
                let orgName = 'Onbekend';
                let orgOin = '';
                const orgOption = organizationSelect.querySelector(`option[value="${organization}"]`);
                if (orgOption) {
                    // Get name without the OIN part
                    orgName = orgOption.textContent.split(' (OIN:')[0];
                    // Get OIN from the data attribute
                    orgOin = orgOption.dataset.oin || '';
                }

                // Add organization name to the result ID format
                const endpoint = `https://${clusterId}.${organization}.k8s.rijkscloud.nl`;
                document.getElementById('result-cluster-endpoint').textContent = endpoint;

                // Update command line snippets with actual values
                document.getElementById('kubectl-endpoint').textContent = endpoint;
                document.getElementById('kubectl-cluster-id').textContent = clusterId;

                // Add current date for creation time
                const now = new Date();
                const creationTime = now.toLocaleString('nl-NL');
                document.getElementById('result-creation-time').textContent = creationTime;

                // Add organization and multi-AZ info to result details
                try {
                    // Create organization detail row if it doesn't exist
                    if (!document.getElementById('result-organization')) {
                        const orgRow = document.createElement('div');
                        orgRow.className = 'cluster-detail-row';

                        const orgLabel = document.createElement('span');
                        orgLabel.className = 'cluster-detail-label';
                        orgLabel.textContent = 'Organisatie:';

                        const orgValue = document.createElement('span');
                        orgValue.id = 'result-organization';
                        orgValue.className = 'cluster-detail-value';
                        orgValue.textContent = orgName;

                        // Create OIN detail row if there is an OIN
                        if (orgOin) {
                            // Complete the current row
                            orgRow.appendChild(orgLabel);
                            orgRow.appendChild(orgValue);

                            // Insert after cluster name
                            const clusterNameRow = document.getElementById('result-cluster-name').parentNode;
                            clusterNameRow.parentNode.insertBefore(orgRow, clusterNameRow.nextSibling);

                            // Create a new row for the OIN
                            const oinRow = document.createElement('div');
                            oinRow.className = 'cluster-detail-row';

                            const oinLabel = document.createElement('span');
                            oinLabel.className = 'cluster-detail-label';
                            oinLabel.textContent = 'OIN:';

                            const oinValue = document.createElement('span');
                            oinValue.id = 'result-organization-oin';
                            oinValue.className = 'cluster-detail-value';
                            oinValue.textContent = orgOin;

                            oinRow.appendChild(oinLabel);
                            oinRow.appendChild(oinValue);

                            // Insert after organization row
                            orgRow.parentNode.insertBefore(oinRow, orgRow.nextSibling);

                            // Return to prevent adding orgRow again below
                            return;
                        }

                        orgRow.appendChild(orgLabel);
                        orgRow.appendChild(orgValue);

                        // Insert after cluster name
                        const clusterNameRow = document.getElementById('result-cluster-name').parentNode;
                        clusterNameRow.parentNode.insertBefore(orgRow, clusterNameRow.nextSibling);
                    } else {
                        document.getElementById('result-organization').textContent = orgName;

                        // Update OIN field if it exists, or create it if it doesn't
                        if (orgOin) {
                            if (document.getElementById('result-organization-oin')) {
                                document.getElementById('result-organization-oin').textContent = orgOin;
                            } else {
                                // Create OIN row if it doesn't exist
                                const orgRow = document.getElementById('result-organization').parentNode;

                                // Create a new row for the OIN
                                const oinRow = document.createElement('div');
                                oinRow.className = 'cluster-detail-row';

                                const oinLabel = document.createElement('span');
                                oinLabel.className = 'cluster-detail-label';
                                oinLabel.textContent = 'OIN:';

                                const oinValue = document.createElement('span');
                                oinValue.id = 'result-organization-oin';
                                oinValue.className = 'cluster-detail-value';
                                oinValue.textContent = orgOin;

                                oinRow.appendChild(oinLabel);
                                oinRow.appendChild(oinValue);

                                // Insert after organization row
                                orgRow.parentNode.insertBefore(oinRow, orgRow.nextSibling);
                            }
                        }
                    }

                    // Create pricing tier detail row if it doesn't exist
                    if (!document.getElementById('result-cluster-tier')) {
                        const tierRow = document.createElement('div');
                        tierRow.className = 'cluster-detail-row';

                        const tierLabel = document.createElement('span');
                        tierLabel.className = 'cluster-detail-label';
                        tierLabel.textContent = 'Prijsmodel:';

                        const tierValue = document.createElement('span');
                        tierValue.id = 'result-cluster-tier';
                        tierValue.className = 'cluster-detail-value';
                        tierValue.textContent = displayTier;

                        tierRow.appendChild(tierLabel);
                        tierRow.appendChild(tierValue);

                        // Insert after size
                        const sizeRow = document.getElementById('result-cluster-size').parentNode;
                        sizeRow.parentNode.insertBefore(tierRow, sizeRow.nextSibling);
                    } else {
                        document.getElementById('result-cluster-tier').textContent = displayTier;
                    }

                    // Create multi-AZ detail row if it doesn't exist
                    if (!document.getElementById('result-multi-az')) {
                        const multiAzRow = document.createElement('div');
                        multiAzRow.className = 'cluster-detail-row';

                        const multiAzLabel = document.createElement('span');
                        multiAzLabel.className = 'cluster-detail-label';
                        multiAzLabel.textContent = 'Multi-AZ:';

                        const multiAzValue = document.createElement('span');
                        multiAzValue.id = 'result-multi-az';
                        multiAzValue.className = 'cluster-detail-value';
                        multiAzValue.textContent = multiAz;

                        multiAzRow.appendChild(multiAzLabel);
                        multiAzRow.appendChild(multiAzValue);

                        // Insert after tier row
                        const tierRow = document.getElementById('result-cluster-tier').parentNode;
                        tierRow.parentNode.insertBefore(multiAzRow, tierRow.nextSibling);
                    } else {
                        document.getElementById('result-multi-az').textContent = multiAz;
                    }
                } catch (err) {
                    console.error('Error adding organization or multi-AZ to result:', err);
                }
            }, 3000);
        });
    }

    // Reset form button
    const resetBtn = document.getElementById('reset-cluster-form');
    if (resetBtn && !resetBtn.dataset.listenerAttached) {
        resetBtn.dataset.listenerAttached = 'true';
        resetBtn.addEventListener('click', function() {
            authContainer.style.display = 'block';
            formContainer.style.display = 'none';
            resultContainer.style.display = 'none';
            if (clusterForm) {
                clusterForm.reset();

                // Reset organization dropdown to default state
                if (organizationSelect) {
                    // Clear existing options except the default one
                    while (organizationSelect.options.length > 1) {
                        organizationSelect.remove(1);
                    }

                    // Remove organization info text if it exists
                    const orgInfo = document.getElementById('org-info');
                    if (orgInfo) {
                        orgInfo.remove();
                    }
                }

                // Reset dropdowns properly
                handleTierSelection();
                updateCostEstimation();
            }
        });
    }
}

// Initialize on DOMContentLoaded for initial page load
document.addEventListener('DOMContentLoaded', initializeClusterForm);

// Initialize with MkDocs Material's document subscription for navigation
if (typeof document$ !== 'undefined') {
    document$.subscribe(function() {
        initializeClusterForm();
    });
}
