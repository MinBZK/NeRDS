// Language Switcher JavaScript - MkDocs i18n Compatible Version
(function() {
  'use strict';

  let observer = null;
  let checkInterval = null;

  function getLanguageInfo() {
    const currentPath = window.location.pathname;
    const hostname = window.location.hostname;

    // Detect if we're on English or Dutch page more reliably
    const isEnglish = currentPath.includes('/en/') ||
                     document.documentElement.lang === 'en' ||
                     document.querySelector('html[lang="en"]') ||
                     document.querySelector('body[data-md-lang="en"]');

    let targetPath, targetLang;

    if (isEnglish) {
      // We're on English, switch to Dutch
      targetLang = 'Nederlands';

      if (currentPath.includes('/en/')) {
        // Remove the /en/ part to get Dutch version
        targetPath = currentPath.replace('/en/', '/');
      } else {
        // Fallback: construct Dutch path
        targetPath = currentPath.replace(/\/[^\/]*\.html$/, '/') || '/';
      }
    } else {
      // We're on Dutch, switch to English
      targetLang = 'English';

      // Handle different base path scenarios
      if (currentPath === '/' || currentPath === '') {
        // Root page
        targetPath = '/en/';
      } else if (currentPath.startsWith('/NeRDS/')) {
        // GitHub Pages: /NeRDS/... -> /NeRDS/en/...
        targetPath = currentPath.replace('/NeRDS/', '/NeRDS/en/');
      } else if (hostname.includes('github.io') || hostname.includes('netlify') || hostname.includes('vercel')) {
        // Deployment environments - assume project base path
        const pathParts = currentPath.split('/').filter(p => p);
        if (pathParts.length > 0) {
          // Insert 'en' after the project name (first part)
          pathParts.splice(1, 0, 'en');
          targetPath = '/' + pathParts.join('/') + '/';
        } else {
          targetPath = '/en/';
        }
      } else {
        // Local development or other
        if (currentPath.endsWith('/')) {
          targetPath = currentPath + 'en/';
        } else {
          targetPath = currentPath.replace(/\/$/, '') + '/en/';
        }
      }
    }

    // Clean up any double slashes
    targetPath = targetPath.replace(/\/+/g, '/');

    // Ensure it starts with /
    if (!targetPath.startsWith('/')) {
      targetPath = '/' + targetPath;
    }

    return { targetPath, targetLang };
  }

  function createLanguageButton(className, linkClassName) {
    const { targetPath, targetLang } = getLanguageInfo();

    const container = document.createElement('div');
    container.className = className;
    container.setAttribute('data-language-switcher', 'true');

    const link = document.createElement('a');
    link.className = linkClassName;
    link.href = targetPath;
    link.title = targetLang;

    // Add click handler with error handling
    link.addEventListener('click', function(e) {
      // Let the browser handle the navigation
      // If it fails, it will show a 404 which is better than JavaScript errors
      console.log('Language switch attempted to:', targetPath);

      // Optional: Add a small delay to allow for debugging
      if (targetPath.includes('undefined') || targetPath === '/') {
        console.warn('Language switcher generated suspicious path:', targetPath);
        // Don't prevent default, let browser handle it
      }
    });

    const globeIcon = `<svg class="language-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
    </svg>`;

    link.innerHTML = globeIcon + '<span>' + targetLang + '</span>';
    container.appendChild(link);

    return container;
  }

  function addDesktopSwitcher() {
    const tabsList = document.querySelector('.md-tabs__list');
    if (tabsList && !tabsList.querySelector('[data-language-switcher="true"]')) {
      const switcher = createLanguageButton('language-switcher', 'language-option');
      tabsList.appendChild(switcher);
      return true;
    }
    return false;
  }

  function addMobileSwitcher() {
    const mobileNav = document.querySelector('.md-nav--primary .md-nav__list');
    if (mobileNav && !mobileNav.querySelector('[data-language-switcher="true"]')) {
      const switcher = createLanguageButton('language-switcher-mobile md-nav__item', 'language-option-mobile');
      mobileNav.appendChild(switcher);
      return true;
    }
    return false;
  }

  function updateExistingSwitchers() {
    const { targetPath, targetLang } = getLanguageInfo();

    // Update desktop switcher
    const desktopSwitcher = document.querySelector('.language-switcher [data-language-switcher="true"] a, .language-switcher a');
    if (desktopSwitcher) {
      desktopSwitcher.href = targetPath;
      desktopSwitcher.title = targetLang;
      const span = desktopSwitcher.querySelector('span');
      if (span) span.textContent = targetLang;
    }

    // Update mobile switcher
    const mobileSwitcher = document.querySelector('.language-switcher-mobile a');
    if (mobileSwitcher) {
      mobileSwitcher.href = targetPath;
      mobileSwitcher.title = targetLang;
      const span = mobileSwitcher.querySelector('span');
      if (span) span.textContent = targetLang;
    }
  }

  function ensureLanguageSwitchers() {
    // Remove any orphaned switchers first
    const existingSwitchers = document.querySelectorAll('[data-language-switcher="true"]');
    existingSwitchers.forEach(switcher => {
      const parent = switcher.parentElement;
      if (!parent || (!parent.classList.contains('md-tabs__list') && !parent.classList.contains('md-nav__list'))) {
        switcher.remove();
      }
    });

    // Add switchers if they don't exist
    let desktopAdded = addDesktopSwitcher();
    let mobileAdded = addMobileSwitcher();

    // Update existing switchers with current language info
    if (!desktopAdded && !mobileAdded) {
      updateExistingSwitchers();
    }
  }

  function startObserver() {
    if (observer) return;

    observer = new MutationObserver(function(mutations) {
      let shouldCheck = false;

      mutations.forEach(function(mutation) {
        if (mutation.type === 'childList') {
          // Check if tabs or navigation changed
          const addedNodes = Array.from(mutation.addedNodes);
          const removedNodes = Array.from(mutation.removedNodes);

          if (addedNodes.some(node =>
            node.nodeType === Node.ELEMENT_NODE &&
            (node.classList?.contains('md-tabs__list') ||
             node.classList?.contains('md-nav__list') ||
             node.querySelector?.('.md-tabs__list, .md-nav__list'))
          )) {
            shouldCheck = true;
          }

          if (removedNodes.some(node =>
            node.nodeType === Node.ELEMENT_NODE &&
            node.getAttribute?.('data-language-switcher') === 'true'
          )) {
            shouldCheck = true;
          }
        }
      });

      if (shouldCheck) {
        setTimeout(ensureLanguageSwitchers, 50);
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  }

  function init() {
    // Debug information
    console.log('Language switcher initializing on:', window.location.href);
    console.log('Current path:', window.location.pathname);
    console.log('Current hostname:', window.location.hostname);

    // Initial setup
    ensureLanguageSwitchers();

    // Start monitoring for changes
    startObserver();

    // Single fallback check every 2 seconds (reduced frequency)
    if (checkInterval) clearInterval(checkInterval);
    checkInterval = setInterval(ensureLanguageSwitchers, 2000);

    // Handle navigation events
    window.addEventListener('popstate', function() {
      setTimeout(ensureLanguageSwitchers, 100);
    });
  }

  // Start immediately if DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
