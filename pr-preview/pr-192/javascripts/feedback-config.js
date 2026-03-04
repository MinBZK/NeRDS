/**
 * Feedback Widget Configuration
 *
 * The feedback widget uses mailto: links to send feedback via email.
 * Users can also use GitHub Issue Forms at: https://github.com/MinBZK/NeRDS/issues/new/choose
 */
window.feedbackConfig = {
  // Enable/disable the feedback widget
  enabled: true,

  // Email address for feedback
  feedbackEmail: 'bureau.architectuur@minbzk.nl',

  // Language preference (default: 'nl' for Dutch)
  language: 'nl',

  // Form validation rules
  formValidation: {
    feedbackMinLength: 10,
    feedbackMaxLength: 5000,
  },

  // Feedback type to GitHub issue label mapping (for future use)
  labels: {
    bug_report: 'bug-report',
    feature_request: 'feature-request',
    general_feedback: 'general-feedback',
    question: 'question',
  },

  // Feedback types available in the form
  feedbackTypes: {
    bug_report: 'Bug report',
    feature_request: 'Feature request',
    general_feedback: 'Algemene feedback',
    question: 'Vraag',
  },

  // Debug mode (set to true to log debug messages)
  debug: false,

  /**
   * Get the appropriate label for a feedback type
   */
  getLabel: function(feedbackType) {
    return this.labels[feedbackType] || 'feedback';
  },

  /**
   * Log debug messages if debug mode is enabled
   */
  log: function(message, data) {
    if (this.debug) {
      console.log('[Feedback Widget]', message, data || '');
    }
  },

  /**
   * Log debug errors if debug mode is enabled
   */
  error: function(message, error) {
    console.error('[Feedback Widget]', message, error || '');
  },
};
