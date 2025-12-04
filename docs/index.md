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
  <h1>Nederlandse Richtlijn Digitale Systemen <span class="nerds-acronym">(NeRDS)</span></h1>
  <p class="hero-subtitle">Een set standaarden, richtlijnen en praktische hulpmiddelen voor het verantwoord ontwerpen, ontwikkelen en inkopen van digitale systemen binnen de Nederlandse overheid.</p>

  <div class="version-badge">
    <span class="version-label">Versie 0.1</span>
    <div class="hover-info">
      <p>Deze richtlijn is in ontwikkeling. Alle versies ontstaan op een open manier. <a href="Over-NeRDS/CONTRIBUTING/">Iedereen mag bijdragen aan de verbetering.</a></p>
    </div>
  </div>

  <div class="hero-cta">
    <a href="richtlijnen/" class="md-button md-button--primary">Bekijk alle richtlijnen</a>
    <a href="Over-NeRDS/" class="md-button md-button--secondary">Over de NeRDS</a>
  </div>
</div>

<div class="intro-section">
  <div class="intro-card">
    <h2>Wat is de NeRDS?</h2>
    <p>De Nederlandse Richtlijn Digitale Systemen (NeRDS) is een standaard voor verantwoorde ontwikkeling en implementatie van digitale systemen binnen de Nederlandse overheid. De richtlijn vormt een basis voor het maken van doeltreffende, veilige en gebruikersgerichte technologie.</p>
  </div>

  <div class="intro-card">
    <h2>Hoe gebruik je de NeRDS?</h2>
    <div class="feature-list">
      <div class="feature-item">Pas de NeRDS toe op alle technologieprojecten en -programma's</div>
      <div class="feature-item">Overweeg elk richtlijn en stem je project of programma erop af</div>
      <div class="feature-item">Volg zoveel mogelijk richtlijnen zoals praktisch is binnen je context</div>
      <div class="feature-item">Het meeste voordeel behaal je door je organisatietechnologie en -strategieën af te stemmen op deze richtlijn</div>
    </div>
    <p>De NeRDS-richtlijnen werken samen en versterken elkaar. Door ze in samenhang toe te passen, creëer je digitale systemen die niet alleen technisch solide zijn, maar ook voldoen aan de behoeften van gebruikers en bijdragen aan een betere digitale overheid.</p>
  </div>
</div>

<div class="principles-section">
  <h2>NeRDS richtlijnen</h2>
  <p class="principles-description">Deze 14 richtlijnen van de NeRDS helpen je bij het verantwoord ontwikkelen van digitale systemen.</p>
</div>

<div class="grid cards" markdown>
- :material-account-search:{ .lg .middle } __1. [Stel gebruikersbehoeften vast](richtlijnen/gebruikersbehoeften/index.md)__

    ---

    Begrijp je gebruikers en hun behoeften. Ontwikkel kennis over je gebruikers en wat dat betekent voor je technologieproject.

- :material-human-wheelchair:{ .lg .middle } __2. [Zorg voor toegankelijkheid en inclusie](richtlijnen/toegankelijkheid/index.md)__

    ---

    Zorg ervoor dat je technologie, infrastructuur en systemen toegankelijk en inclusief zijn voor alle gebruikers.

- :material-source-branch:{ .lg .middle } __3. [Werk transparant en gebruik open source](richtlijnen/open-source/index.md)__

    ---

    Publiceer je code en gebruik open source software om transparantie, flexibiliteit en verantwoording te verbeteren.

- :material-checkbox-marked-circle-outline:{ .lg .middle } __4. [Gebruik open standaarden](richtlijnen/open-standaarden/index.md)__

    ---

    Bouw technologie die open standaarden gebruikt om ervoor te zorgen dat je technologie werkt en communiceert met andere technologie.

- :material-cloud:{ .lg .middle } __5. [Hanteer een cloud-gedreven strategie](richtlijnen/cloud/index.md)__

    ---

    Overweeg cloudoplossingen met aandacht voor Europese soevereiniteit en controle over data.

- :material-shield-lock:{ .lg .middle } __6. [Maak veilige systemen](richtlijnen/veiligheid/index.md)__

    ---

    Houd systemen en gegevens veilig met het juiste beveiligingsniveau.

- :material-incognito:{ .lg .middle } __7. [Maak privacy integraal](richtlijnen/privacy/index.md)__

    ---

    Zorg ervoor dat gebruikersrechten worden beschermd door privacy te integreren als een essentieel onderdeel van je systeem.

- :material-share-variant:{ .lg .middle } __8. [Deel, hergebruik en werk samen](richtlijnen/samenwerking/index.md)__

    ---

    Vermijd dubbel werk en onnodige kosten door samen te werken binnen de overheid en door technologie te delen en te hergebruiken.

- :material-puzzle:{ .lg .middle } __9. [Integreer en pas technologie aan](richtlijnen/integratie/index.md)__

    ---

    Je technologie moet werken met bestaande technologieën, processen en infrastructuur in je organisatie.

- :material-database:{ .lg .middle } __10. [Maak beter gebruik van data](richtlijnen/data/index.md)__

    ---

    Gebruik data effectiever door je technologie, infrastructuur en processen te verbeteren.

- :material-robot:{ .lg .middle } __11. [Pas algoritmen verantwoord toe](richtlijnen/algoritmen/index.md)__

    ---

    Zorg voor transparante, eerlijke en verantwoorde toepassing van algoritmen en AI-systemen.

- :material-cart:{ .lg .middle } __12. [Definieer je inkoopstrategie](richtlijnen/inkoop/index.md)__

    ---

    Je inkoopstrategie moet laten zien dat je commerciële en technologische aspecten hebt overwogen.

- :material-leaf:{ .lg .middle } __13. [Maak je technologie duurzaam](richtlijnen/duurzaamheid/index.md)__

    ---

    Verhoog duurzaamheid gedurende de hele levenscyclus van je technologie.

</div>

<div class="cta-section">
  <h2>Aan de slag met NeRDS</h2>
  <p>De NeRDS-richtlijnen helpen je bij het maken van doeltreffende, veilige en gebruikersgerichte technologie.</p>
  <div class="cta-buttons">
    <a href="https://github.com/MinBZK/NeRDS" class="md-button md-button--primary">Bekijk op GitHub</a>
    <a href="Over-NeRDS/CONTRIBUTING/" class="md-button md-button--secondary">Draag bij aan NeRDS</a>
  </div>
</div>
