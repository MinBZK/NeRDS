// JavaScript for the Kubernetes Cluster Form
document.addEventListener('DOMContentLoaded', function() {
    // Get form elements
    const clusterForm = document.getElementById('create-cluster-form');
    const clusterModal = document.getElementById('cluster-modal');
    const closeModalBtn = document.getElementById('close-modal');
    const openModalBtn = document.getElementById('open-cluster-form');
    const modalOverlay = document.getElementById('modal-overlay');
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
    if (openModalBtn) {
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
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', closeModal);
    }

    // Close modal when clicking outside
    if (modalOverlay) {
        modalOverlay.addEventListener('click', function(e) {
            if (e.target === modalOverlay) {
                closeModal();
            }
        });
    }

    // Auth buttons click handlers
    if (ssoLoginBtn) {
        ssoLoginBtn.addEventListener('click', function() {
            simulateLogin('SSO Rijksoverheid');
        });
    }

    if (yubikeyLoginBtn) {
        yubikeyLoginBtn.addEventListener('click', function() {
            simulateLogin('YubiKey');
        });
    }

    if (certLoginBtn) {
        certLoginBtn.addEventListener('click', function() {
            simulateLogin('PKIoverheid Certificaat');
        });
    }

    // Back to auth button handler
    if (backToAuthBtn) {
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

            // Show form container
            formContainer.style.display = 'block';
        }, 1500);
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
                        note.textContent = ' (niet beschikbaar in gratis tier)';
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
    if (clusterSizeSelect) {
        clusterSizeSelect.addEventListener('change', updateCostEstimation);
    }

    if (clusterTierSelect) {
        clusterTierSelect.addEventListener('change', handleTierSelection);
    }

    if (multiAzSelect) {
        multiAzSelect.addEventListener('change', updateCostEstimation);
    }

    // Initialize tier selection and cost estimation
    handleTierSelection();
    updateCostEstimation();

    // Handle form submission
    if (clusterForm) {
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

                // Generate random cluster ID and endpoint
                const clusterId = 'k8s-' + Math.random().toString(36).substring(2, 10);
                document.getElementById('result-cluster-id').textContent = clusterId;

                // Format the organization name for display in the result
                let orgName = 'Onbekend';
                const orgOption = organizationSelect.querySelector(`option[value="${organization}"]`);
                if (orgOption) {
                    orgName = orgOption.textContent;
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

                        orgRow.appendChild(orgLabel);
                        orgRow.appendChild(orgValue);

                        // Insert after cluster name
                        const clusterNameRow = document.getElementById('result-cluster-name').parentNode;
                        clusterNameRow.parentNode.insertBefore(orgRow, clusterNameRow.nextSibling);
                    } else {
                        document.getElementById('result-organization').textContent = orgName;
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

                        // Insert after size
                        const sizeRow = document.getElementById('result-cluster-size').parentNode;
                        sizeRow.parentNode.insertBefore(multiAzRow, sizeRow.nextSibling);
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
    if (resetBtn) {
        resetBtn.addEventListener('click', function() {
            authContainer.style.display = 'block';
            formContainer.style.display = 'none';
            resultContainer.style.display = 'none';
            if (clusterForm) {
                clusterForm.reset();
                // Reset dropdowns properly
                handleTierSelection();
                updateCostEstimation();
            }
        });
    }
});
