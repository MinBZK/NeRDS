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

      // Action close button (replaces reset button)
      const actionCloseBtn = document.getElementById('feedback-action-close');
      if (actionCloseBtn) {
        actionCloseBtn.addEventListener('click', () => this.closePanel());
      }

      // GitHub Issues button
      const githubBtn = document.getElementById('feedback-github');
      if (githubBtn) {
        githubBtn.addEventListener('click', () => this.openGitHubIssue());
      }

      // Add link button
      const addLinkBtn = document.getElementById('feedback-add-link');
      if (addLinkBtn) {
        addLinkBtn.addEventListener('click', () => this.addLinkField());
      }
    }

    /**
     * Add a new link input field
     */
    addLinkField() {
      const container = document.getElementById('feedback-related-docs-container');
      if (!container) return;

      // Create wrapper for link row + error
      const linkWrapper = document.createElement('div');
      linkWrapper.className = 'feedback-widget__link-wrapper';

      // Create new link row
      const linkRow = document.createElement('div');
      linkRow.className = 'feedback-widget__link-row';

      // Create input field
      const input = document.createElement('input');
      input.type = 'url';
      input.name = 'related_docs[]';
      input.className = 'feedback-widget__input feedback-widget__input--link';
      input.placeholder = 'nerds.nl/...';
      input.setAttribute('aria-label', 'Link naar relevant document');

      // Create remove button
      const removeBtn = document.createElement('button');
      removeBtn.type = 'button';
      removeBtn.className = 'feedback-widget__remove-link';
      removeBtn.setAttribute('aria-label', 'Link verwijderen');
      removeBtn.innerHTML = '<span aria-hidden="true">&times;</span>';
      removeBtn.addEventListener('click', () => {
        linkWrapper.remove();
      });

      // Assemble row
      linkRow.appendChild(input);
      linkRow.appendChild(removeBtn);
      linkWrapper.appendChild(linkRow);
      container.appendChild(linkWrapper);

      // Focus new input
      input.focus();
    }

    /**
     * Open GitHub Issue (markdown template) with pre-filled data
     */
    openGitHubIssue() {
      // Validate form first
      if (!this.validateForm()) {
        return;
      }

      // Get form data
      const feedbackType = document.getElementById('feedback-type').value;
      const feedbackText = document.getElementById('feedback-text').value;
      const selectedGuidelineValue = document.getElementById('feedback-guideline').value;

      // Collect related document links
      const linkInputs = document.querySelectorAll('input[name="related_docs[]"]');
      const relatedDocs = Array.from(linkInputs)
        .map(input => input.value.trim())
        .filter(value => value.length > 0)
        .join('\n');

      // Map feedback type to GitHub markdown template
      const templateMap = {
        'bug_report': 'bug-report.md',
        'feature_request': 'feature-request.md',
        'question': 'question.md',
        'general_feedback': 'general-feedback.md'
      };

      const template = templateMap[feedbackType] || 'general-feedback.md';

      // Map guideline number to checkbox text
      const guidelineNames = {
        '0': 'Over de NeRDS in het algemeen',
        '1': 'Richtlijn 1 - Gebruikersbehoeften',
        '2': 'Richtlijn 2 - Toegankelijkheid',
        '3': 'Richtlijn 3 - Open Source',
        '4': 'Richtlijn 4 - Open Standaarden',
        '5': 'Richtlijn 5 - Cloud',
        '6': 'Richtlijn 6 - Veiligheid',
        '7': 'Richtlijn 7 - Privacy',
        '8': 'Richtlijn 8 - Samenwerking',
        '9': 'Richtlijn 9 - Integratie',
        '10': 'Richtlijn 10 - Data',
        '11': 'Richtlijn 11 - Algoritmen',
        '12': 'Richtlijn 12 - Inkoopstrategie',
        '13': 'Richtlijn 13 - Duurzaamheid',
        '14': 'Richtlijn 14 - Servicestandaard'
      };

      // Build issue body based on feedback type
      let issueBody = '';
      const pageUrl = window.location.href;
      const pageTitle = document.querySelector('h1')?.textContent || document.title;

      // Add guideline section (with checkbox marked if selected)
      issueBody += '**Over welke richtlijn gaat dit?**\n';
      if (selectedGuidelineValue && guidelineNames[selectedGuidelineValue]) {
        issueBody += `- [x] ${guidelineNames[selectedGuidelineValue]}\n`;
      }
      issueBody += '\n';

      // Add main feedback content
      if (feedbackType === 'bug_report') {
        issueBody += `**Beschrijf de fout**\n${feedbackText}\n\n`;
        issueBody += `**Verwacht gedrag**\n\n`;
        issueBody += `**Screenshots**\n\n`;
        issueBody += `**Browser en versie**\n${navigator.userAgent}\n\n`;
      } else if (feedbackType === 'feature_request') {
        issueBody += `**Beschrijf je suggestie**\n${feedbackText}\n\n`;
        issueBody += `**Waarom is dit een goede toevoeging?**\n\n`;
        if (relatedDocs) {
          issueBody += `**Relevante documenten of links**\n${relatedDocs}\n\n`;
        }
      } else if (feedbackType === 'question') {
        issueBody += `**Beschrijf je vraag**\n${feedbackText}\n\n`;
        issueBody += `**Context**\n\n`;
      } else if (feedbackType === 'general_feedback') {
        issueBody += `**Jouw feedback**\n${feedbackText}\n\n`;
        if (relatedDocs) {
          issueBody += `**Relevante documenten of links**\n${relatedDocs}\n\n`;
        }
      }

      // Add metadata
      issueBody += `---\n`;
      issueBody += `**Metadata**\n`;
      issueBody += `- **Pagina:** [${pageTitle}](${pageUrl})\n`;
      issueBody += `- **Browser:** ${this.getBrowserInfo()}\n`;
      issueBody += `- **Systeem:** ${this.getOSInfo()}\n`;
      issueBody += `- **Ingediend:** ${new Date().toLocaleString('nl-NL')}\n`;

      // Build URL with template, title, and body parameters
      const params = new URLSearchParams();
      params.append('template', template);

      // Create title from first 60 characters of feedback text
      const maxTitleLength = 60;
      let issueTitle = feedbackText.substring(0, maxTitleLength);
      if (feedbackText.length > maxTitleLength) {
        issueTitle += '...';
      }

      // Add feedback type prefix to title
      const typePrefixes = {
        'bug_report': '[Bug] ',
        'feature_request': '[Voorstel] ',
        'question': '[Vraag] ',
        'general_feedback': '[Feedback] '
      };
      const prefix = typePrefixes[feedbackType] || '[Feedback] ';
      issueTitle = prefix + issueTitle;

      params.append('title', issueTitle);
      params.append('body', issueBody);

      const githubUrl = `https://github.com/MinBZK/NeRDS/issues/new?${params.toString()}`;

      // Open in new tab
      window.open(githubUrl, '_blank', 'noopener,noreferrer');

      // Show success message
      const status = document.getElementById('feedback-status');
      if (status) {
        status.textContent = 'GitHub Issue wordt geopend met uw ingevulde gegevens...';
        status.hidden = false;
        status.classList.remove('error', 'loading');
        status.classList.add('info');

        // Clear message and close panel after delay
        setTimeout(() => {
          status.hidden = true;
          this.closePanel();
        }, 2000);
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

      // Reset related docs to single empty field
      const container = document.getElementById('feedback-related-docs-container');
      if (container) {
        container.innerHTML = `
          <div class="feedback-widget__link-wrapper">
            <div class="feedback-widget__link-row">
              <input
                type="url"
                name="related_docs[]"
                class="feedback-widget__input feedback-widget__input--link"
                placeholder="nerds.nl/..."
                aria-label="Link naar relevant document"
              />
            </div>
          </div>
        `;
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

      // Guideline selection is optional - no validation needed
      // Just clear any error message if shown
      this.clearError('feedback-guideline-error');

      // Validate feedback type
      if (!feedbackType.value) {
        this.showError('feedback-type-error', 'Selecteer een soort feedback');
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

      // Validate related document links
      const linkInputs = document.querySelectorAll('input[name="related_docs[]"]');
      linkInputs.forEach((input, index) => {
        const value = input.value.trim();
        const wrapper = input.closest('.feedback-widget__link-wrapper');
        const errorId = `feedback-link-error-${index}`;

        // Only validate if the field has content
        if (value.length > 0) {
          if (!this.isValidUrl(value)) {
            // Create or update error message for this specific input
            let errorElement = document.getElementById(errorId);

            if (!errorElement && wrapper) {
              // Create error element if it doesn't exist
              errorElement = document.createElement('div');
              errorElement.id = errorId;
              errorElement.className = 'feedback-widget__error';
              errorElement.setAttribute('role', 'alert');
              wrapper.appendChild(errorElement);
            }

            this.showError(errorId, 'Voer een geldige URL in (bijv. nerds.nl of https://nerds.nl)');
            input.classList.add('feedback-widget__input--invalid');
            isValid = false;
          } else {
            // Clear error if URL is valid
            const errorElement = document.getElementById(errorId);
            if (errorElement) {
              errorElement.remove();
            }
            input.classList.remove('feedback-widget__input--invalid');
          }
        } else {
          // Clear error for empty fields (they're optional)
          const errorElement = document.getElementById(errorId);
          if (errorElement) {
            errorElement.remove();
          }
          input.classList.remove('feedback-widget__input--invalid');
        }
      });

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
     * Normalize URL by adding https:// if no protocol is present
     */
    normalizeUrl(url) {
      url = url.trim();

      // If URL already has a protocol, return as-is
      if (/^https?:\/\//i.test(url)) {
        return url;
      }

      // Add https:// if missing
      return 'https://' + url;
    }

    /**
     * Validate URL format
     */
    isValidUrl(url) {
      url = url.trim();

      // Check if there's at least a dot (for domain validation)
      if (!url.includes('.')) {
        return false;
      }

      // Normalize the URL
      const normalizedUrl = this.normalizeUrl(url);

      try {
        const urlObj = new URL(normalizedUrl);
        // Check if protocol is http or https
        return urlObj.protocol === 'http:' || urlObj.protocol === 'https:';
      } catch (e) {
        return false;
      }
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

      // Collect all related document links and normalize them
      const linkInputs = document.querySelectorAll('input[name="related_docs[]"]');
      const relatedDocs = Array.from(linkInputs)
        .map(input => input.value.trim())
        .filter(value => value.length > 0)
        .map(url => this.normalizeUrl(url))
        .join('\n');

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
        related_docs: relatedDocs,
        page_url: pageUrl,
        page_title: pageTitle,
        timestamp: new Date().toISOString(),
        user_agent: navigator.userAgent,
        referrer: document.referrer || 'direct',
        ...guidelineInfo,
      };
    }

    /**
     * Submit feedback via mailto link
     */
    submitFeedback(data, submitBtn) {
      // Map feedback type to readable Dutch text
      const typeLabels = {
        'bug_report': 'Fout/Bug',
        'feature_request': 'Voorstel',
        'general_feedback': 'Algemene feedback',
        'question': 'Vraag'
      };
      const feedbackTypeLabel = typeLabels[data.feedback_type] || data.feedback_type;

      // Build email subject
      let subject = `[NeRDS Feedback] ${feedbackTypeLabel}`;
      if (data.guideline_number && data.guideline_number > 0) {
        subject += ` - Richtlijn ${data.guideline_number}`;
      }

      // Build email body
      let body = `Type: ${feedbackTypeLabel}\n\n`;

      if (data.guideline_number && data.guideline_number > 0) {
        body += `Richtlijn: ${data.guideline_number} - ${data.guideline_name || 'Onbekend'}\n`;
      }

      body += `Pagina: ${data.page_title} (${data.page_url})\n\n`;
      body += `--- Feedback ---\n${data.feedback_text}\n\n`;

      if (data.related_docs && data.related_docs.trim().length > 0) {
        body += `--- Relevante documenten ---\n${data.related_docs}\n\n`;
      }

      body += `--- Metadata ---\n`;
      body += `Pagina: ${data.page_title} (${data.page_url})\n`;
      body += `Ingediend: ${new Date(data.timestamp).toLocaleString('nl-NL')}\n`;
      body += `Browser: ${data.user_agent}\n`;

      // Create mailto URL
      const mailtoUrl = `mailto:bureau.architectuur@minbzk.nl?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

      // Open email client
      window.location.href = mailtoUrl;

      // Show success message
      this.handleSubmitSuccess(data, {}, submitBtn, null);
    }

    /**
     * Handle successful submission
     */
    handleSubmitSuccess(data, result, submitBtn, status) {
      // Clear status message if it exists
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
        referenceElement.textContent = `Uw e-mailclient is geopend. Klik op 'Verzenden' in uw e-mail om de feedback te versturen.`;
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
     * Get browser information
     */
    getBrowserInfo() {
      const ua = navigator.userAgent;
      let browserName = 'Onbekend';
      let browserVersion = '';

      // Detect browser
      if (ua.indexOf('Firefox') > -1) {
        browserName = 'Firefox';
        browserVersion = ua.match(/Firefox\/([0-9.]+)/)?.[1] || '';
      } else if (ua.indexOf('Edg') > -1) {
        browserName = 'Edge';
        browserVersion = ua.match(/Edg\/([0-9.]+)/)?.[1] || '';
      } else if (ua.indexOf('Chrome') > -1) {
        browserName = 'Chrome';
        browserVersion = ua.match(/Chrome\/([0-9.]+)/)?.[1] || '';
      } else if (ua.indexOf('Safari') > -1) {
        browserName = 'Safari';
        browserVersion = ua.match(/Version\/([0-9.]+)/)?.[1] || '';
      }

      return browserVersion ? `${browserName} ${browserVersion}` : browserName;
    }

    /**
     * Get OS information
     */
    getOSInfo() {
      const ua = navigator.userAgent;
      let osName = 'Onbekend';

      if (ua.indexOf('Win') > -1) {
        osName = 'Windows';
        if (ua.indexOf('Windows NT 10.0') > -1) osName += ' 10/11';
        else if (ua.indexOf('Windows NT 6.3') > -1) osName += ' 8.1';
        else if (ua.indexOf('Windows NT 6.2') > -1) osName += ' 8';
        else if (ua.indexOf('Windows NT 6.1') > -1) osName += ' 7';
      } else if (ua.indexOf('Mac') > -1) {
        osName = 'macOS';
        const version = ua.match(/Mac OS X ([0-9_]+)/)?.[1];
        if (version) {
          osName += ' ' + version.replace(/_/g, '.');
        }
      } else if (ua.indexOf('Linux') > -1) {
        osName = 'Linux';
      } else if (ua.indexOf('Android') > -1) {
        osName = 'Android';
        const version = ua.match(/Android ([0-9.]+)/)?.[1];
        if (version) osName += ' ' + version;
      } else if (ua.indexOf('iOS') > -1 || ua.indexOf('iPhone') > -1 || ua.indexOf('iPad') > -1) {
        osName = 'iOS';
        const version = ua.match(/OS ([0-9_]+)/)?.[1];
        if (version) {
          osName += ' ' + version.replace(/_/g, '.');
        }
      }

      return osName;
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
