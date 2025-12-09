/**
 * Feedback Widget
 * Manages the feedback widget initialization and lifecycle on guideline pages
 */

(function() {
  'use strict';

  // Shared state across page navigations (preserved during soft navigation, reset on hard refresh)
  let isDismissed = false;

  class FeedbackWidget {
    constructor() {
      this.initialized = false;
      this.isOpen = false;
      this.form = null;
      this.toggle = null;
      this.panel = null;
    }

    /**
     * Initialize the feedback widget
     */
    init() {
      const widget = document.getElementById('feedback-widget');
      if (!widget) {
        return; // Widget element not found
      }

      // Check if widget was dismissed during this session
      if (isDismissed) {
        widget.style.display = 'none';
        return;
      }

      // Widget is now visible on all pages
      widget.style.display = 'block';

      // Get form elements - these might be different instances on dynamic page loads
      const form = document.getElementById('feedback-form');
      const toggle = document.getElementById('feedback-toggle');
      const panel = document.getElementById('feedback-panel');

      if (!form || !toggle || !panel) {
        console.error('Feedback widget: required elements not found');
        return;
      }

      // Check if we need to re-setup event listeners (elements changed or not yet initialized)
      if (this.toggle !== toggle || !this.initialized) {
        this.form = form;
        this.toggle = toggle;
        this.panel = panel;

        this.setupEventListeners();
        this.initialized = true;
      }
    }

    /**
     * Detect current guideline from URL path
     */
    detectCurrentGuideline() {
      const pathname = window.location.pathname;

      // Extract guideline name from URL (e.g., /richtlijnen/gebruikersbehoeften/)
      const match = pathname.match(/\/richtlijnen\/([a-z-]+)\//);

      // If no specific guideline in URL (e.g., /richtlijnen/ or /richtlijnen/index)
      // select "Over de NeRDS in het algemeen"
      if (!match || !match[1]) {
        // Check if we're at least on a richtlijnen page
        if (pathname.includes('/richtlijnen/')) {
          return {
            slug: null,
            number: 0,
          };
        }
        return null;
      }

      // Map URL slug to guideline number
      const guidelineMap = {
        'gebruikersbehoeften': 1,
        'toegankelijkheid': 2,
        'open-source': 3,
        'open-standaarden': 4,
        'cloud': 5,
        'veiligheid': 6,
        'privacy': 7,
        'samenwerking': 8,
        'integratie': 9,
        'data': 10,
        'algoritmen': 11,
        'inkoop': 12,
        'duurzaamheid': 13,
        'servicestandaard': 14,
      };

      const number = guidelineMap[match[1]];
      if (!number) {
        return null;
      }

      return {
        slug: match[1],
        number: number,
      };
    }

    /**
     * Get guideline display name
     */
    getGuidelineDisplayName(guideline) {
      if (!guideline || !window.feedbackI18n) {
        return null;
      }
      const key = `guideline.${guideline.number}`;
      return window.feedbackI18n.get(key);
    }

    /**
     * Get guideline slug from number
     */
    getGuidelineSlugFromNumber(number) {
      const slugMap = {
        0: 'algemeen',
        1: 'gebruikersbehoeften',
        2: 'toegankelijkheid',
        3: 'open-source',
        4: 'open-standaarden',
        5: 'cloud',
        6: 'veiligheid',
        7: 'privacy',
        8: 'samenwerking',
        9: 'integratie',
        10: 'data',
        11: 'algoritmen',
        12: 'inkoop',
        13: 'duurzaamheid',
        14: 'servicestandaard',
      };
      return slugMap[number] || null;
    }

    /**
     * Auto-select current guideline in dropdown
     */
    autoSelectCurrentGuideline() {
      const guideline = this.detectCurrentGuideline();

      const guidelineSelect = document.getElementById('feedback-guideline');
      if (guidelineSelect) {
        // If no specific guideline detected, default to "Over de NeRDS in het algemeen" (0)
        const guidelineNumber = guideline ? guideline.number : 0;
        guidelineSelect.value = guidelineNumber.toString();
      }
    }

    /**
     * Display guideline in widget header
     */
    displayGuideline() {
      const guideline = this.detectCurrentGuideline();
      if (!guideline) {
        return;
      }

      const guidelineElement = document.getElementById('feedback-guideline');
      if (!guidelineElement) {
        return;
      }

      const displayName = this.getGuidelineDisplayName(guideline);
      if (!displayName) {
        return;
      }

      // Use the question form if available, fall back to label form
      const label = window.feedbackI18n ? window.feedbackI18n.get('guideline.question') : 'Wil je feedback geven over: ';
      guidelineElement.textContent = label + displayName + '?';
    }

    /**
     * Set up all event listeners
     */
    setupEventListeners() {
      // Toggle button
      this.toggle.addEventListener('click', () => this.togglePanel());

      // Dismiss button - hides the entire widget
      const dismissBtn = document.getElementById('feedback-dismiss');
      if (dismissBtn) {
        dismissBtn.addEventListener('click', () => this.dismissWidget());
      }

      // Close button
      const closeBtn = document.getElementById('feedback-close');
      if (closeBtn) {
        closeBtn.addEventListener('click', () => this.closePanel());
      }

      // Success close button
      const successClose = document.getElementById('feedback-success-close');
      if (successClose) {
        successClose.addEventListener('click', () => this.closePanel());
      }

      // Form submission
      this.form.addEventListener('submit', (e) => this.handleSubmit(e));

      // Keyboard navigation
      this.panel.addEventListener('keydown', (e) => this.handlePanelKeydown(e));

      // Close on Escape key
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && this.isOpen) {
          this.closePanel();
        }
      });

      // Reset form button
      const resetBtn = document.getElementById('feedback-reset');
      if (resetBtn) {
        resetBtn.addEventListener('click', () => this.resetForm());
      }
    }

    /**
     * Toggle panel open/close
     */
    togglePanel() {
      if (this.isOpen) {
        this.closePanel();
      } else {
        this.openPanel();
      }
    }

    /**
     * Open the feedback panel
     */
    openPanel() {
      this.panel.hidden = false;
      this.isOpen = true;
      this.toggle.setAttribute('aria-expanded', 'true');

      // Auto-select current guideline in dropdown
      this.autoSelectCurrentGuideline();

      // Focus on first input
      const firstInput = this.form.querySelector('select, textarea, input[type="text"], input[type="email"]');
      if (firstInput) {
        setTimeout(() => firstInput.focus(), 100);
      }

      // Announce to screen readers that widget is open and closeable
      const announcement = document.createElement('div');
      announcement.setAttribute('role', 'status');
      announcement.setAttribute('aria-live', 'polite');
      announcement.className = 'sr-only';
      announcement.textContent = 'Feedback formulier geopend. Druk op Escape om te sluiten, of klik op het sluitknopje.';
      this.panel.appendChild(announcement);
      setTimeout(() => announcement.remove(), 2000);
    }

    /**
     * Close the feedback panel
     */
    closePanel() {
      this.panel.hidden = true;
      this.isOpen = false;
      this.toggle.setAttribute('aria-expanded', 'false');

      // Return focus to toggle button
      setTimeout(() => this.toggle.focus(), 100);
    }

    /**
     * Dismiss the entire widget (hides it until hard page refresh)
     */
    dismissWidget() {
      const widget = document.getElementById('feedback-widget');
      if (widget) {
        widget.style.display = 'none';
      }

      // If panel is open, close it first
      if (this.isOpen) {
        this.closePanel();
      }

      // Set dismissal state (persists across soft navigation, reset on hard refresh)
      isDismissed = true;
    }

    /**
     * Reset the form to initial state
     */
    resetForm() {
      this.form.reset();

      // Clear any error messages
      const errors = this.form.querySelectorAll('[id$="-error"]');
      errors.forEach(error => {
        error.textContent = '';
      });

      // Hide success message
      const successMsg = document.getElementById('feedback-success');
      if (successMsg) {
        successMsg.hidden = true;
      }

      // Reset status
      const status = document.getElementById('feedback-status');
      if (status) {
        status.hidden = true;
        status.textContent = '';
      }

      // Remove fallback email message if present
      const fallbackMsg = this.form.querySelector('.feedback-widget__fallback');
      if (fallbackMsg) {
        fallbackMsg.remove();
      }
    }

    /**
     * Handle keyboard events within the panel
     */
    handlePanelKeydown(e) {
      // Tab key - focus management
      if (e.key === 'Tab') {
        // Get all focusable elements within the panel
        const focusableElements = this.panel.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );

        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];
        const activeElement = document.activeElement;

        // Shift+Tab on first element - move to last
        if (e.shiftKey && activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        }
        // Tab on last element - move to first
        else if (!e.shiftKey && activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }

      // Enter key on close button should close (handled by click)
      // Escape key to close (handled globally)
    }

    /**
     * Handle form submission
     */
    handleSubmit(event) {
      event.preventDefault();

      // Validate form
      if (!this.validateForm()) {
        return;
      }

      // Disable submit button and show loading state
      const submitBtn = document.getElementById('feedback-submit');
      submitBtn.disabled = true;
      submitBtn.setAttribute('aria-busy', 'true');

      // Prepare form data
      const formData = this.getFormData();

      // Submit feedback
      this.submitFeedback(formData, submitBtn);
    }

    /**
     * Validate form fields
     */
    validateForm() {
      let isValid = true;
      const feedbackGuideline = document.getElementById('feedback-guideline');
      const feedbackType = document.getElementById('feedback-type');
      const feedbackText = document.getElementById('feedback-text');
      const feedbackName = document.getElementById('feedback-name');
      const feedbackEmail = document.getElementById('feedback-email');

      // Guideline selection is optional - no validation needed
      // Just clear any error message if shown
      this.clearError('feedback-guideline-error');

      // Validate feedback type
      if (!feedbackType.value) {
        this.showError('feedback-type-error', 'Selecteer alstublieft een soort feedback');
        isValid = false;
      } else {
        this.clearError('feedback-type-error');
      }

      // Validate feedback text
      if (!feedbackText.value || feedbackText.value.trim().length < 10) {
        this.showError('feedback-text-error', 'Feedback moet minimaal 10 tekens bevatten');
        isValid = false;
      } else if (feedbackText.value.length > 5000) {
        this.showError('feedback-text-error', 'Feedback mag niet langer dan 5000 tekens zijn');
        isValid = false;
      } else {
        this.clearError('feedback-text-error');
      }

      // Validate name
      if (!feedbackName.value || feedbackName.value.trim().length === 0) {
        this.showError('feedback-name-error', 'Voer alstublieft uw naam in');
        isValid = false;
      } else {
        this.clearError('feedback-name-error');
      }

      // Validate email
      if (!feedbackEmail.value) {
        this.showError('feedback-email-error', 'Voer alstublieft uw e-mailadres in');
        isValid = false;
      } else if (!this.isValidEmail(feedbackEmail.value)) {
        this.showError('feedback-email-error', 'Voer alstublieft een geldig e-mailadres in');
        isValid = false;
      } else {
        this.clearError('feedback-email-error');
      }

      return isValid;
    }

    /**
     * Validate email format
     */
    isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }

    /**
     * Show error message
     */
    showError(elementId, message) {
      const errorElement = document.getElementById(elementId);
      if (errorElement) {
        errorElement.textContent = message;
      }
    }

    /**
     * Clear error message
     */
    clearError(elementId) {
      const errorElement = document.getElementById(elementId);
      if (errorElement) {
        errorElement.textContent = '';
      }
    }

    /**
     * Get form data
     */
    getFormData() {
      const feedbackType = document.getElementById('feedback-type').value;
      const feedbackText = document.getElementById('feedback-text').value;
      const userName = document.getElementById('feedback-name').value;
      const userEmail = document.getElementById('feedback-email').value;

      // Get selected guideline from dropdown (user's explicit choice)
      const selectedGuidelineValue = document.getElementById('feedback-guideline').value;
      const selectedGuidelineNum = selectedGuidelineValue ? parseInt(selectedGuidelineValue, 10) : null;

      // Get page information
      const pageUrl = window.location.pathname;
      const pageTitle = document.querySelector('h1')?.textContent || document.title;

      // Get guideline information based on user selection or current page
      let guideline = null;
      if (selectedGuidelineNum) {
        // User explicitly selected a guideline from dropdown
        guideline = {
          number: selectedGuidelineNum,
          slug: this.getGuidelineSlugFromNumber(selectedGuidelineNum),
        };
      } else {
        // Fall back to current page guideline
        guideline = this.detectCurrentGuideline();
      }

      const guidelineInfo = guideline ? {
        guideline_number: guideline.number,
        guideline_slug: guideline.slug,
        guideline_name: this.getGuidelineDisplayName(guideline),
      } : {};

      return {
        feedback_type: feedbackType,
        feedback_text: feedbackText,
        user_name: userName,
        user_email: userEmail,
        page_url: pageUrl,
        page_title: pageTitle,
        timestamp: new Date().toISOString(),
        user_agent: navigator.userAgent,
        referrer: document.referrer || 'direct',
        ...guidelineInfo,
      };
    }

    /**
     * Submit feedback to server
     */
    submitFeedback(data, submitBtn) {
      const config = window.feedbackConfig || {};
      const webhookUrl = config.webhookUrl || 'https://api.github.com/repos/MinBZK/NeRDS/dispatches';
      const timeout = config.timeout || 10000;

      // Show loading status
      const status = document.getElementById('feedback-status');
      if (status) {
        status.textContent = 'Feedback verzenden...';
        status.hidden = false;
        status.classList.add('loading');
      }

      // Create abort controller for timeout
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), timeout);

      fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/vnd.github.v3+json',
        },
        body: JSON.stringify({
          event_type: 'feedback_submission',
          client_payload: data,
        }),
        signal: controller.signal,
      })
        .then((response) => {
          clearTimeout(timeoutId);
          if (response.ok) {
            return response.json().catch(() => ({}));
          }
          throw new Error(`HTTP ${response.status}`);
        })
        .then((result) => {
          this.handleSubmitSuccess(data, result, submitBtn, status);
        })
        .catch((error) => {
          clearTimeout(timeoutId);
          this.handleSubmitError(error, submitBtn, status);
        });
    }

    /**
     * Handle successful submission
     */
    handleSubmitSuccess(data, result, submitBtn, status) {
      // Clear status message
      if (status) {
        status.hidden = true;
        status.classList.remove('loading');
      }

      // Generate reference ID
      const referenceId = this.generateReferenceId();

      // Store feedback reference in localStorage for tracking
      this.storeFeedbackReference(referenceId, data);

      // Show success message
      const successMsg = document.getElementById('feedback-success');
      const referenceElement = document.getElementById('feedback-reference');

      if (successMsg && referenceElement) {
        referenceElement.textContent = `Referentie-ID: ${referenceId}`;
        successMsg.hidden = false;

        // Scroll into view
        setTimeout(() => {
          successMsg.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 100);
      }

      // Reset form after success
      setTimeout(() => {
        this.resetForm();
        // Keep panel open to show success message for a bit
        setTimeout(() => {
          this.closePanel();
        }, 3000);
      }, 500);

      // Re-enable submit button
      submitBtn.disabled = false;
      submitBtn.setAttribute('aria-busy', 'false');
    }

    /**
     * Handle submission error
     */
    handleSubmitError(error, submitBtn, status) {
      console.error('Feedback submission error:', error);

      // Clear status message
      if (status) {
        status.hidden = true;
        status.classList.remove('loading');
      }

      // Show error message
      let errorMessage = 'Uw feedback kan niet worden verzonden. Probeer het later alstublieft opnieuw.';

      if (error.name === 'AbortError') {
        errorMessage = 'De aanvraag duurde te lang. Controleer uw internetverbinding en probeer opnieuw.';
      }

      if (status) {
        status.textContent = errorMessage;
        status.hidden = false;
        status.classList.add('error');
      } else {
        alert(errorMessage);
      }

      // Show fallback email option
      this.showFallbackEmail();

      // Re-enable submit button
      submitBtn.disabled = false;
      submitBtn.setAttribute('aria-busy', 'false');
    }

    /**
     * Show fallback email for manual submission
     */
    showFallbackEmail() {
      const form = document.getElementById('feedback-form');
      if (!form) {
        return;
      }

      // Check if fallback message already exists
      const existingFallback = form.querySelector('.feedback-widget__fallback');
      if (existingFallback) {
        return; // Don't add duplicate
      }

      const fallbackDiv = document.createElement('div');
      fallbackDiv.className = 'feedback-widget__fallback';
      fallbackDiv.innerHTML = `
        <p>U kunt uw feedback ook rechtstreeks naar ons mailen:</p>
        <p><a href="mailto:bureau.architectuur@minbzk.nl">bureau.architectuur@minbzk.nl</a></p>
        <p>Of maak een issue aan op <a href=https://github.com/MinBZK/NeRDS/issues target="_blank">Github</a>.</p>
      `;

      form.appendChild(fallbackDiv);
    }

    /**
     * Generate a unique reference ID
     */
    generateReferenceId() {
      return 'FB-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9).toUpperCase();
    }

    /**
     * Store feedback reference in localStorage
     */
    storeFeedbackReference(referenceId, data) {
      try {
        const feedbackHistory = JSON.parse(localStorage.getItem('feedbackHistory') || '[]');
        feedbackHistory.push({
          referenceId,
          timestamp: data.timestamp,
          type: data.feedback_type,
        });

        // Keep only last 10 submissions
        if (feedbackHistory.length > 10) {
          feedbackHistory.shift();
        }

        localStorage.setItem('feedbackHistory', JSON.stringify(feedbackHistory));
      } catch (e) {
        console.warn('Could not store feedback reference:', e);
      }
    }
  }

  // Initialize widget when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      const widget = new FeedbackWidget();
      widget.init();

      // Re-initialize on dynamic page loads (Material for MkDocs)
      if (typeof document$ !== 'undefined') {
        document$.subscribe(() => {
          // Widget might be re-rendered, so reinitialize
          widget.init();
        });
      }
    });
  } else {
    // DOM already loaded
    const widget = new FeedbackWidget();
    widget.init();
  }

  // Expose for testing
  window.FeedbackWidget = FeedbackWidget;
})();
