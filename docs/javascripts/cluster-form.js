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

    // Cost estimation elements
    const clusterSizeSelect = document.getElementById('cluster-size');
    const clusterTierSelect = document.getElementById('cluster-tier');
    const monthlyCostEl = document.getElementById('monthly-cost');
    const yearlyCostEl = document.getElementById('yearly-cost');

    // Cost calculation variables
    const costs = {
        free: { monthly: 0, yearly: 0 },
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

    // Update cost estimation
    function updateCostEstimation() {
        const tier = clusterTierSelect ? clusterTierSelect.value : '';
        const size = clusterSizeSelect ? clusterSizeSelect.value : '';

        let monthlyCost = 0;
        let yearlyCost = 0;

        if (tier === 'free') {
            monthlyCost = 0;
            yearlyCost = 0;
        } else if (tier && size && costs[tier] && costs[tier][size]) {
            monthlyCost = costs[tier][size].monthly;
            yearlyCost = costs[tier][size].yearly;
        }

        if (monthlyCostEl) monthlyCostEl.textContent = `€${monthlyCost.toFixed(2)}`;
        if (yearlyCostEl) yearlyCostEl.textContent = `€${yearlyCost.toFixed(2)}`;
    }

    // Add event listeners for cost estimation updates
    if (clusterSizeSelect) {
        clusterSizeSelect.addEventListener('change', updateCostEstimation);
    }

    if (clusterTierSelect) {
        clusterTierSelect.addEventListener('change', updateCostEstimation);
    }

    // Initialize cost estimation
    updateCostEstimation();

    // Handle form submission
    if (clusterForm) {
        clusterForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form data
            const formData = new FormData(clusterForm);
            const clusterName = formData.get('cluster-name');
            const clusterRegion = formData.get('cluster-region');
            const clusterSize = formData.get('cluster-size');
            const clusterTier = formData.get('cluster-tier');
            const clusterVersion = formData.get('cluster-version');

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

                const endpoint = `https://${clusterId}.k8s.rijkscloud.nl`;
                document.getElementById('result-cluster-endpoint').textContent = endpoint;

                // Update command line snippets with actual values
                document.getElementById('kubectl-endpoint').textContent = endpoint;
                document.getElementById('kubectl-cluster-id').textContent = clusterId;

                // Add current date for creation time
                const now = new Date();
                const creationTime = now.toLocaleString('nl-NL');
                document.getElementById('result-creation-time').textContent = creationTime;
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
            if (clusterForm) clusterForm.reset();
            updateCostEstimation();
        });
    }
});
