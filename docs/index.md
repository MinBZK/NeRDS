---
title: Nederlandse Richtlijn Digitale Systemen
summary: Een praktische richtlijn voor het verantwoord ontwerpen, ontwikkelen en implementeren van digitale systemen binnen de Nederlandse overheid.
hide:
  - navigation
  - toc
---

<script>
// Landing page script
document.addEventListener('DOMContentLoaded', function() {
    // Once DOM is loaded, hide sidebars to prevent flash of sidebar
    const sidebars = document.querySelectorAll('.md-sidebar');
    sidebars.forEach(sidebar => {
        sidebar.style.display = 'none';
    });

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
  <p class="hero-subtitle">Een set standaarden, principes en praktische hulpmiddelen voor het verantwoord ontwikkelen, inkopen en gebruiken van digitale systemen binnen de Nederlandse overheid.</p>

  <div class="version-badge">
    <span class="version-label">Versie 0.1</span>
    <div class="hover-info">
      <p>Deze richtlijn is in ontwikkeling. Alle versies ontstaan op een open manier. <a href="Over-NeRDS/CONTRIBUTING/">Iedereen mag bijdragen aan de verbetering.</a></p>
    </div>
  </div>

  <div class="hero-cta">
    <a href="principes/" class="md-button md-button--primary">Bekijk de NeRDS principes</a>
    <a href="gebaande-paden/" class="md-button md-button--primary">Bekijk de NeRDS gebaande paden</a>
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
      <div class="feature-item">Overweeg elk principe en stem je project of programma erop af</div>
      <div class="feature-item">Volg zoveel mogelijk principes zoals praktisch is binnen je context</div>
      <div class="feature-item">Het meeste voordeel behaal je door je organisatietechnologie en -strategieën af te stemmen op deze richtlijn</div>
    </div>
    <p>De NeRDS-principes werken samen en versterken elkaar. Door ze in samenhang toe te passen, creëer je digitale systemen die niet alleen technisch solide zijn, maar ook voldoen aan de behoeften van gebruikers en bijdragen aan een betere digitale overheid.</p>
  </div>
    <div class="intro-card">
    <h2>Wat zijn de componenten van NeRDS?</h2>
    <div class="list">
      <div class="item">Principes</div>
      <div class="item">Gebaande Paden</div>
    </div>

  </div>
</div>

<div class="principles-section">
  <h2>NeRDS Principes</h2>
  <p class="principles-description">Deze 14 principes van de NeRDS helpen je bij het verantwoord ontwikkelen van digitale systemen.</p>
</div>

<div class="grid cards" markdown>
- :material-account-search:{ .lg .middle } __1. [Definieer gebruikersbehoeften](principes/gebruikersbehoeften/index.md)__

    ---

    Begrijp je gebruikers en hun behoeften. Ontwikkel kennis over je gebruikers en wat dat betekent voor je technologieproject.

- :material-human-wheelchair:{ .lg .middle } __2. [Maak dingen toegankelijk en inclusief](principes/toegankelijkheid/index.md)__

    ---

    Zorg ervoor dat je technologie, infrastructuur en systemen toegankelijk en inclusief zijn voor alle gebruikers.

- :material-source-branch:{ .lg .middle } __3. [Wees open en gebruik open source](principes/open-source/index.md)__

    ---

    Publiceer je code en gebruik open source software om transparantie, flexibiliteit en verantwoording te verbeteren.

- :material-checkbox-marked-circle-outline:{ .lg .middle } __4. [Gebruik open standaarden](principes/open-standaarden/index.md)__

    ---

    Bouw technologie die open standaarden gebruikt om ervoor te zorgen dat je technologie werkt en communiceert met andere technologie.

- :material-cloud:{ .lg .middle } __5. [Cloud-gedreven strategie](principes/cloud/index.md)__

    ---

    Overweeg cloudoplossingen met aandacht voor Europese soevereiniteit en controle over data.

- :material-shield-lock:{ .lg .middle } __6. [Maak dingen veilig](principes/veiligheid/index.md)__

    ---

    Houd systemen en gegevens veilig met het juiste beveiligingsniveau.

- :material-incognito:{ .lg .middle } __7. [Maak privacy integraal](principes/privacy/index.md)__

    ---

    Zorg ervoor dat gebruikersrechten worden beschermd door privacy te integreren als een essentieel onderdeel van je systeem.

- :material-share-variant:{ .lg .middle } __8. [Deel, hergebruik en werk samen](principes/samenwerking/index.md)__

    ---

    Vermijd dubbel werk en onnodige kosten door samen te werken binnen de overheid en door technologie te delen en te hergebruiken.

- :material-puzzle:{ .lg .middle } __9. [Integreer en pas technologie aan](principes/integratie/index.md)__

    ---

    Je technologie moet werken met bestaande technologieën, processen en infrastructuur in je organisatie.

- :material-database:{ .lg .middle } __10. [Maak beter gebruik van data](principes/data/index.md)__

    ---

    Gebruik data effectiever door je technologie, infrastructuur en processen te verbeteren.

- :material-robot:{ .lg .middle } __11. [Pas algoritmen verantwoord toe](principes/algoritmen/index.md)__

    ---

    Zorg voor transparante, eerlijke en verantwoorde toepassing van algoritmen en AI-systemen.

- :material-cart:{ .lg .middle } __12. [Definieer je inkoopstrategie](principes/inkoop/index.md)__

    ---

    Je inkoopstrategie moet laten zien dat je commerciële en technologische aspecten hebt overwogen.

- :material-leaf:{ .lg .middle } __13. [Maak je technologie duurzaam](principes/duurzaamheid/index.md)__

    ---

    Verhoog duurzaamheid gedurende de hele levenscyclus van je technologie.

- :material-check-all:{ .lg .middle } __14. [Voldoe aan de servicestandaard](principes/servicestandaard/index.md)__

    ---

    Als je een dienst bouwt als onderdeel van je technologieproject of -programma, moet je ook voldoen aan de Servicestandaard.

</div>

<div class="principles-section">
  <h2>NeRDS Gebaande Paden</h2>
</div>

<div class="grid cards" markdown>

- 🏗️ __[Nieuwe overheidsservice](situaties/nieuwe-overheidsservice/index.md)__

      ---
      Van concept tot live service voor burgers en bedrijven

- 🔄 __[Systeem Upgraden](legacy-modernisering/index.md)__

      ---

      Bestaande systemen NeRDS-compliant maken

  - ⚡ __[Snelle Prototype](situaties/snelle-prototype/index.md)__

      ---

      Naar een werkende proof-of-concept

  - 🛒  __[Van Idee naar Aanbesteding](situaties/naar-aanbesteding/index.md)__

      ---

      Marktconsultatie, RFI/RFP en gunning

  - 🚨 __[Crisis Response](situaties/crisis-response/index.md)__

      ---

      Acute beveiligings- of privacyproblemen

  - 🔗 __[Systemen koppelen](situaties/systemen-koppelen/index.md)__

      ---

</div>

<div class="cta-section">
  <h2>Iedereen mag het gebruiken en meedenken</h2>
  <p>De NeRDS-principes helpen je bij het maken van doeltreffende, veilige en gebruikersgerichte technologie.</p>
  <div class="cta-buttons">
    <a href="https://github.com/MinBZK/NeRDS" class="md-button md-button--primary">Bekijk op GitHub</a>
    <a href="Over-NeRDS/CONTRIBUTING/" class="md-button md-button--secondary">Draag bij aan NeRDS</a>
  </div>
</div>
