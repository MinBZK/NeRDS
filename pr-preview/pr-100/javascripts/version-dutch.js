// Nederlandse versie namen voor Mike version selector
(function() {
    'use strict';

    function translateVersionNames() {
        const currentButton = document.querySelector('.md-version__current');
        const versionLinks = document.querySelectorAll('.md-version__link');

        if (currentButton) {
            const text = currentButton.textContent.toLowerCase();
            if (text.includes('production')) {
                currentButton.innerHTML = '🚀 Productie <span style="margin-left: 6px; font-size: 0.8rem;"></span>';
            } else if (text.includes('development')) {
                currentButton.innerHTML = '🔧 Ontwikkeling <span style="margin-left: 6px; font-size: 0.8rem;"></span>';
            }
        }

        versionLinks.forEach(link => {
            const text = link.textContent.toLowerCase();
            if (text.includes('production')) {
                link.textContent = '🚀 Productie';
            } else if (text.includes('development')) {
                link.textContent = '🔧 Ontwikkeling';
            }
        });
    }

    // Translate on load
    document.addEventListener('DOMContentLoaded', translateVersionNames);

    // Translate after any navigation or mike changes
    const observer = new MutationObserver(translateVersionNames);
    observer.observe(document.body, { childList: true, subtree: true });
})();
