---
title: Nederlandse Richtlijn Digitale Systemen
summary: Een praktische richtlijn voor het verantwoord ontwerpen, ontwikkelen en implementeren van digitale systemen binnen de Nederlandse overheid.
hide:
  - toc
  - navigation
---

<script>
// Landing page script
document.addEventListener('DOMContentLoaded', function() {
    // Initialize animations for landing page
    initLandingPage();
});

// Function to initialize landing page animations and interactive elements
function initLandingPage() {
    console.log("Landing page animations initialized");

    // Set animation order for principle cards
    const principleCards = document.querySelectorAll('.principle-card');
    principleCards.forEach((card, index) => {
        card.style.setProperty('--animation-order', index);
    });

    // Add smooth hover effects for all interactive elements
    const interactiveElements = document.querySelectorAll('.principle-card, .intro-card, .md-button, .version-badge');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease';
        });
    });

    // Add scroll animations
    const animatedElements = document.querySelectorAll('.hero-section, .intro-section, .principles-section, .cta-section');

    // Make all sections visible initially to fix any display issues
    animatedElements.forEach(el => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
        el.classList.add('visible');
    });

    // Check if the IntersectionObserver API is available
    if ('IntersectionObserver' in window) {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        animatedElements.forEach(el => {
            observer.observe(el);
        });
    }
}
</script>

<div class="hero-section">
  <h1>Dutch Guidelines Digital Systems <span class="nerds-acronym">(NeRDS)</span></h1>
  <p class="hero-subtitle">A set of standards, guidelines and practical tools for responsible development, purchase and use of digital systems within the Dutch government.</p>

  <div class="version-badge">
    <span class="version-label">Version 0.1</span>
    <div class="hover-info">
      <p>Deze richtlijn is in ontwikkeling. Alle versies ontstaan op een open manier. <a href="Over-NeRDS/CONTRIBUTING/">Anyone can contribute to the improvement.</a></p>
    </div>
  </div>

  <div class="hero-cta">
    <a href="richtlijnen/" class="md-button md-button--primary">View all guidelines</a>
    <a href="Over-NeRDS/" class="md-button md-button--secondary">About the NeRDS</a>
  </div>
</div>

<div class="intro-section">
  <div class="intro-card">
    <h2>What is the NeRDS?</h2>
    <p>The Dutch Guideline For Digital Systems (NeRDS) is a standard for responsible development and implementation of digital systems within the Dutch government. The guideline provides a basis for making effective, safe and user-oriented technology.</p>
  </div>

  <div class="intro-card">
    <h2>How do you use the NeRDS?</h2>
    <div class="feature-list">
      <div class="feature-item">Apply NeRDS to all technology projects and programmes</div>
      <div class="feature-item">Consider each guideline and tune your project or program to it</div>
      <div class="feature-item">Follow as many guidelines as possible in your context</div>
      <div class="feature-item">You get the most advantage by aligning your organizational technology and strategies with this guideline</div>
    </div>
    <p>The NeRDS guidelines work together and reinforce each other. By applying them in conjunction, you create digital systems that are not only technically solid, but also meet the needs of users and contribute to a better digital government.</p>
  </div>
</div>

<div class="principles-section">
  <h2>NeRDS guidelines</h2>
  <p class="principles-description">These 14 guidelines from the NeRDS help you develop digital systems responsibly.</p>
</div>

<div class="grid cards" markdown>
- :material-account-search:{ .lg .middle } __1. [Understand user needs](richtlijnen/gebruikersbehoeften/index.md)__

    ---

    Understand your users and their needs. Develop knowledge about your users and what that means for your technology project.

- :material-human-wheelchair:{ .lg .middle } __2. [Ensure accessibility and inclusion](richtlijnen/toegankelijkheid/index.md)__

    ---

    Make sure your technology, infrastructure and systems are accessible and inclusive to all users.

- :material-source-branch:{ .lg .middle } __3. [Work transparently and use open source](richtlijnen/open-source/index.md)__

    ---

    Publish your code and use open source software to improve transparency, flexibility and accountability.

- :material-checkbox-marked-circle-outline:{ .lg .middle } __4. [Use Open Standards](richtlijnen/open-standaarden/index.md)__

    ---

    Build technology that uses open standards to make sure your technology works and communicates with other technology.

- :material-cloud:{ .lg .middle } __5. [Adopt a cloud-driven strategy](richtlijnen/cloud/index.md)__

    ---

    Consider cloud solutions with attention to European sovereignty and data control.

- :material-shield-lock:{ .lg .middle } __6. [Create safe systems](richtlijnen/veiligheid/index.md)__

    ---

    Keep systems and data safe with the right security level.

- :material-incognito:{ .lg .middle } __7. [Make privacy integral](richtlijnen/privacy/index.md)__

    ---

    Ensure that user rights are protected by integrating privacy as an essential part of your system.

- :material-share-variant:{ .lg .middle } __8. [Part, reuse and work together](richtlijnen/samenwerking/index.md)__

    ---

    Avoid duplication and unnecessary costs by working together within the government and by sharing and reusing technology.

- :material-puzzle:{ .lg .middle } __9. [Integrate and adapt technology](richtlijnen/integratie/index.md)__

    ---

    Your technology must work with existing technologies, processes and infrastructure in your organisation.

- :material-database:{ .lg .middle } __10. [Make better use of data](richtlijnen/data/index.md)__

    ---

    Use data more effectively by improving your technology, infrastructure and processes.

- :material-robot:{ .lg .middle } __11. [Apply algorithms responsibly](richtlijnen/algoritmen/index.md)__

    ---

    Ensure transparent, fair and responsible application of algorithms and AI systems.

- :material-cart:{ .lg .middle } __12. [Define your purchasing strategy](richtlijnen/inkoop/index.md)__

    ---

    Your purchasing strategy must show that you have considered commercial and technological aspects.

- :material-leaf:{ .lg .middle } __13. [Make your technology sustainable](richtlijnen/duurzaamheid/index.md)__

    ---

    Increase sustainability throughout the life cycle of your technology.

- :material-check-all:{ .lg .middle } __14. [Meet the service standard](richtlijnen/servicestandaard/index.md)__

    ---

    If you are building a service as part of your technology project or program, you must also comply with the Service Standard.

</div>

<div class="cta-section">
  <h2>Get started with the NeRDS</h2>
  <p>The NeRDS will help you create effective, secure and user-oriented technology.</p>
  <div class="cta-buttons">
    <a href="https://github.com/MinBZK/NeRDS" class="md-button md-button--primary">View on GitHub</a>
    <a href="Over-NeRDS/CONTRIBUTING/" class="md-button md-button--secondary">Contribute to NeRDS</a>
  </div>
</div>
