/**
 * Feedback Widget
 * Manages the feedback widget initialization and lifecycle on guideline pages
 */

(function() {
  'use strict';

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
      if (this.initialized) {
        return;
      }

      const widget = document.getElementById('feedback-widget');
      if (!widget) {
        return; // Widget element not found
      }

      // Check if this is a guideline page
      if (!this.isGuidelinePage()) {
        widget.style.display = 'none';
        return;
      }

      this.form = document.getElementById('feedback-form');
      this.toggle = document.getElementById('feedback-toggle');
      this.panel = document.getElementById('feedback-panel');

      if (!this.form || !this.toggle || !this.panel) {
        console.error('Feedback widget: required elements not found');
        return;
      }

      this.setupEventListeners();
      this.initialized = true;
    }

    /**
     * Check if the current page is a guideline page
     */
    isGuidelinePage() {
      const pathname = window.location.pathname;
      // Check if URL contains /richtlijnen/ path
      return pathname.includes('/richtlijnen/');
    }

    /**
     * Set up all event listeners
     */
    setupEventListeners() {
      // Toggle button
      this.toggle.addEventListener('click', () => this.togglePanel());

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

      // Focus on first input
      const firstInput = this.form.querySelector('select, textarea, input[type="text"], input[type="email"]');
      if (firstInput) {
        setTimeout(() => firstInput.focus(), 100);
      }
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
      const feedbackType = document.getElementById('feedback-type');
      const feedbackText = document.getElementById('feedback-text');
      const feedbackName = document.getElementById('feedback-name');
      const feedbackEmail = document.getElementById('feedback-email');

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

      // Get page information
      const pageUrl = window.location.pathname;
      const pageTitle = document.querySelector('h1')?.textContent || document.title;

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
      const fallbackDiv = document.createElement('div');
      fallbackDiv.className = 'feedback-widget__fallback';
      fallbackDiv.innerHTML = `
        <p>U kunt uw feedback ook rechtstreeks naar ons mailen:</p>
        <p><a href="mailto:bureau.architectuur@minbzk.nl">bureau.architectuur@minbzk.nl</a></p>
      `;

      const form = document.getElementById('feedback-form');
      if (form) {
        form.appendChild(fallbackDiv);
      }
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
