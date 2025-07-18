---
title: Dutch Guideline for Digital Systems
summary: A practical guideline for responsibly designing, developing, and implementing digital systems within the Dutch government.
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
  <h1>Dutch Guideline for Digital Systems <span class="nerds-acronym">(NeRDS)</span></h1>
  <p class="hero-subtitle">A set of standards, guidelines and practical tools for responsibly developing, procuring and using digital systems within the Dutch government.</p>

  <div class="version-badge">
    <span class="version-label">Version 0.1</span>
    <div class="hover-info">
      <p>This guideline is in development. All versions are created in an open manner. <a href="Over-NeRDS/CONTRIBUTING/">Everyone can contribute to improvements.</a></p>
    </div>
  </div>

  <div class="hero-cta">
    <a href="richtlijnen/" class="md-button md-button--primary">View all guidelines</a>
    <a href="Over-NeRDS/" class="md-button md-button--secondary">About NeRDS</a>
  </div>
</div>

<div class="intro-section">
  <div class="intro-card">
    <h2>What is NeRDS?</h2>
    <p>The Dutch Guideline for Digital Systems (NeRDS) is a standard for responsible development and implementation of digital systems within the Dutch government. The guideline forms a basis for creating effective, secure, and user-centered technology.</p>
  </div>

  <div class="intro-card">
    <h2>How to use NeRDS?</h2>
    <div class="feature-list">
      <div class="feature-item">Apply NeRDS to all technology projects and programs</div>
      <div class="feature-item">Consider each guideline and align your project or program accordingly</div>
      <div class="feature-item">Follow as many guidelines as practical within your context</div>
      <div class="feature-item">Gain the most benefit by aligning your organizational technology and strategies with this guideline</div>
    </div>
    <p>The NeRDS guidelines work together and reinforce each other. By applying them in combination, you create digital systems that are not only technically solid but also meet user needs and contribute to better digital government.</p>
  </div>
</div>

<div class="principles-section">
  <h2>NeRDS Guidelines</h2>
  <p class="principles-description">These 14 guidelines of NeRDS help you responsibly develop digital systems.</p>
</div>

<div class="grid cards" markdown>
- :material-account-search:{ .lg .middle } __1. [Understand user needs](richtlijnen/gebruikersbehoeften/index.md)__

    ---

    Understand your users and their needs. Develop knowledge about your users and what that means for your technology project.

- :material-human-wheelchair:{ .lg .middle } __2. [Ensure accessibility and inclusion](richtlijnen/toegankelijkheid/index.md)__

    ---

    Ensure that your technology, infrastructure and systems are accessible and inclusive for all users.

- :material-source-branch:{ .lg .middle } __3. [Work transparently and use open source](richtlijnen/open-source/index.md)__

    ---

    Publish your code and use open source software to improve transparency, flexibility and accountability.

- :material-checkbox-marked-circle-outline:{ .lg .middle } __4. [Use open standards](richtlijnen/open-standaarden/index.md)__

    ---

    Build technology that uses open standards to ensure your technology works and communicates with other technology.

- :material-cloud:{ .lg .middle } __5. [Apply a cloud-driven strategy](richtlijnen/cloud/index.md)__

    ---

    Consider cloud solutions with attention to European sovereignty and control over data.

- :material-shield-lock:{ .lg .middle } __6. [Build secure systems](richtlijnen/veiligheid/index.md)__

    ---

    Keep systems and data secure with the appropriate security level.

- :material-incognito:{ .lg .middle } __7. [Make privacy integral](richtlijnen/privacy/index.md)__

    ---

    Ensure user rights are protected by integrating privacy as an essential part of your system.

- :material-share-variant:{ .lg .middle } __8. [Share, reuse and collaborate](richtlijnen/samenwerking/index.md)__

    ---

    Avoid duplication and unnecessary costs by collaborating within government and by sharing and reusing technology.

- :material-puzzle:{ .lg .middle } __9. [Integrate and adapt technology](richtlijnen/integratie/index.md)__

    ---

    Your technology must work with existing technologies, processes and infrastructure in your organization.

- :material-database:{ .lg .middle } __10. [Make better use of data](richtlijnen/data/index.md)__

    ---

    Use data more effectively by improving your technology, infrastructure and processes.

- :material-robot:{ .lg .middle } __11. [Apply algorithms responsibly](richtlijnen/algoritmen/index.md)__

    ---

    Ensure transparent, fair and responsible application of algorithms and AI systems.

- :material-cart:{ .lg .middle } __12. [Define your procurement strategy](richtlijnen/inkoop/index.md)__

    ---

    Your procurement strategy should show that you have considered commercial and technological aspects.

- :material-leaf:{ .lg .middle } __13. [Make your technology sustainable](richtlijnen/duurzaamheid/index.md)__

    ---

    Increase sustainability throughout the entire lifecycle of your technology.

- :material-check-all:{ .lg .middle } __14. [Meet the service standard](richtlijnen/servicestandaard/index.md)__

    ---

    If you build a service as part of your technology project or program, you must also meet the Service Standard.

</div>

<div class="cta-section">
  <h2>Get started with NeRDS</h2>
  <p>The NeRDS guidelines help you create effective, secure and user-centered technology.</p>
  <div class="cta-buttons">
    <a href="https://github.com/MinBZK/NeRDS" class="md-button md-button--primary">View on GitHub</a>
    <a href="Over-NeRDS/CONTRIBUTING/" class="md-button md-button--secondary">Contribute to NeRDS</a>
  </div>
</div>
