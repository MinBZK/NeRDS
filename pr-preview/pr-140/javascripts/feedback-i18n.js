/**
 * Feedback Widget Localization (i18n)
 * Supports Dutch (nl) as primary language with extensible structure for other languages
 */

window.feedbackI18n = {
  // Default language
  defaultLanguage: 'nl',

  // Current language
  currentLanguage: 'nl',

  // Translations object
  translations: {
    nl: {
      // Widget general
      'widget.toggle': 'Feedback',
      'widget.toggle-open': 'Feedback formulier openen',
      'widget.toggle-close': 'Feedback formulier sluiten',
      'widget.title': 'Feedback geven',
      'widget.instructions': 'Helpt u ons door uw feedback te delen? We gebruiken dit om NeRDS te verbeteren.',

      // Form fields
      'form.label.type': 'Soort feedback',
      'form.label.text': 'Uw feedback',
      'form.label.name': 'Uw naam',
      'form.label.email': 'E-mailadres',
      'form.placeholder.text': 'Beschrijf uw feedback (minimaal 10 tekens)',
      'form.placeholder.name': 'Uw volle naam',
      'form.placeholder.email': 'uw.naam@organisatie.nl',
      'form.hint.text': 'Minimaal 10 tekens',
      'form.hint.email': 'Uw e-mailadres wordt gebruikt om contact met u op te nemen',
      'form.required': 'verplicht',

      // Feedback types
      'type.select': '-- Selecteer --',
      'type.bug_report': 'Fout',
      'type.feature_request': 'Voorstel',
      'type.general_feedback': 'Feedback',
      'type.question': 'Vraag',

      // Guideline labels
      'guideline.label': 'Feedback over: ',
      'guideline.0': 'Over de NeRDS in het algemeen',
      'guideline.1': '1. Gebruikersbehoeften',
      'guideline.2': '2. Toegankelijkheid',
      'guideline.3': '3. Open Source',
      'guideline.4': '4. Open Standaarden',
      'guideline.5': '5. Cloud',
      'guideline.6': '6. Veiligheid',
      'guideline.7': '7. Privacy',
      'guideline.8': '8. Samenwerking',
      'guideline.9': '9. Integratie',
      'guideline.10': '10. Data',
      'guideline.11': '11. Algoritmen',
      'guideline.12': '12. Inkoopstrategie',
      'guideline.13': '13. Duurzaamheid',

      // Form buttons
      'button.submit': 'Feedback verzenden',
      'button.reset': 'Wissen',
      'button.close': 'Sluiten',

      // Validation messages
      'validation.type.required': 'Selecteer alstublieft een soort feedback',
      'validation.text.required': 'Feedback moet minimaal 10 tekens bevatten',
      'validation.text.too-long': 'Feedback mag niet langer dan 5000 tekens zijn',
      'validation.name.required': 'Voer alstublieft uw naam in',
      'validation.email.required': 'Voer alstublieft uw e-mailadres in',
      'validation.email.invalid': 'Voer alstublieft een geldig e-mailadres in',

      // Status messages
      'status.sending': 'Feedback verzenden...',
      'status.success': 'Bedankt voor uw feedback!',
      'status.success-reference': 'Referentie-ID: ',
      'status.error': 'Uw feedback kan niet worden verzonden. Probeer het later alstublieft opnieuw.',
      'status.timeout': 'De aanvraag duurde te lang. Controleer uw internetverbinding en probeer opnieuw.',
      'status.fallback-intro': 'U kunt uw feedback ook rechtstreeks naar ons mailen:',

      // Rate limiting
      'ratelimit.message': 'U hebt het maximale aantal feedback-inzendingen vandaag bereikt. Probeer het morgen opnieuw.',

      // Accessibility
      'a11y.success-close': 'Berichtvenster sluiten',
    },

    // English translations (template for future expansion)
    en: {
      // Widget general
      'widget.toggle': 'Feedback',
      'widget.toggle-open': 'Open feedback form',
      'widget.toggle-close': 'Close feedback form',
      'widget.title': 'Send Feedback',
      'widget.instructions': 'Help us improve NeRDS by sharing your feedback.',

      // Form fields
      'form.label.type': 'Feedback type',
      'form.label.text': 'Your feedback',
      'form.label.name': 'Your name',
      'form.label.email': 'Email address',
      'form.placeholder.text': 'Describe your feedback (minimum 10 characters)',
      'form.placeholder.name': 'Your full name',
      'form.placeholder.email': 'your.name@organisation.nl',
      'form.hint.text': 'Minimum 10 characters',
      'form.hint.email': 'Your email address will be visible in the feedback',
      'form.required': 'required',

      // Feedback types
      'type.select': '-- Select --',
      'type.bug_report': 'Bug report',
      'type.feature_request': 'Feature request',
      'type.general_feedback': 'General feedback',
      'type.question': 'Question',

      // Form buttons
      'button.submit': 'Send Feedback',
      'button.reset': 'Clear',
      'button.close': 'Close',

      // Validation messages
      'validation.type.required': 'Please select a feedback type',
      'validation.text.required': 'Feedback must be at least 10 characters long',
      'validation.text.too-long': 'Feedback must not exceed 5000 characters',
      'validation.name.required': 'Please enter your name',
      'validation.email.required': 'Please enter your email address',
      'validation.email.invalid': 'Please enter a valid email address',

      // Status messages
      'status.sending': 'Sending feedback...',
      'status.success': 'Thank you for your feedback!',
      'status.success-reference': 'Reference ID: ',
      'status.error': 'Could not send your feedback. Please try again later.',
      'status.timeout': 'Request timeout. Check your connection and try again.',
      'status.fallback-intro': 'You can also email your feedback directly:',

      // Rate limiting
      'ratelimit.message': 'You have reached the maximum number of feedback submissions for today. Try again tomorrow.',

      // Accessibility
      'a11y.success-close': 'Close message',
    },
  },

  /**
   * Initialize localization
   */
  init: function() {
    this.detectLanguage();
  },

  /**
   * Detect the user's language preference
   */
  detectLanguage: function() {
    // Check for language override in config
    if (window.feedbackConfig && window.feedbackConfig.language) {
      this.setLanguage(window.feedbackConfig.language);
      return;
    }

    // Get browser language
    const browserLang = (navigator.language || navigator.userLanguage).split('-')[0];

    // Check if we have translations for this language
    if (this.translations[browserLang]) {
      this.setLanguage(browserLang);
    } else {
      // Fall back to Dutch
      this.setLanguage(this.defaultLanguage);
    }
  },

  /**
   * Set the current language
   */
  setLanguage: function(lang) {
    if (this.translations[lang]) {
      this.currentLanguage = lang;
      if (window.feedbackConfig) {
        window.feedbackConfig.log('Language set to: ' + lang);
      }
    }
  },

  /**
   * Get translation for a key
   */
  get: function(key, fallback) {
    const translations = this.translations[this.currentLanguage];
    if (!translations) {
      return fallback || key;
    }
    return translations[key] || fallback || key;
  },

  /**
   * Get translation and replace placeholders
   */
  format: function(key, replacements) {
    let text = this.get(key, key);

    if (replacements) {
      Object.keys(replacements).forEach((placeholder) => {
        const regex = new RegExp(`{{${placeholder}}}`, 'g');
        text = text.replace(regex, replacements[placeholder]);
      });
    }

    return text;
  },

  /**
   * Check if a language is supported
   */
  isSupported: function(lang) {
    return !!this.translations[lang];
  },

  /**
   * Get list of supported languages
   */
  getSupportedLanguages: function() {
    return Object.keys(this.translations);
  },
};

// Auto-initialize on page load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    window.feedbackI18n.init();
  });
} else {
  window.feedbackI18n.init();
}
