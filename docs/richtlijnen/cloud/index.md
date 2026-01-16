---
title: "5. Hanteer een cloud-gedreven strategie"
summary: Overweeg cloudoplossingen met aandacht voor Europese soevereiniteit en controle over data.
relations:
  - veiligheid
  - privacy
  - duurzaamheid
  - inkoop
---

# 5. Hanteer een cloud-gedreven strategie

Een cloud-gedreven strategie betekent dat je bij het ontwikkelen of vernieuwen van IT-projecten moderne cloudoplossingen overweegt die digitale soevereiniteit waarborgen. Dit combineert innovatie met verantwoord databeheer en bevordert kostenefficiëntie, flexibiliteit en schaalbaarheid.

## Waarom is het belangrijk?

- **Kosteneffectiviteit en flexibiliteit**: betaal alleen voor wat je gebruikt en schaal eenvoudig op en af naar behoefte.
- **Snellere innovatie**: krijg toegang tot nieuwe technologieën en implementeer diensten sneller.
- **Minder beheerlasten**: leveranciers beheren de onderliggende infrastructuur, waardoor je je kunt richten op dienstverlening.
- **Betrouwbaarheid en duurzaamheid**: profiteer van hogere uptime en geoptimaliseerd energieverbruik door gedeelde infrastructuur.

Door een cloud-gedreven strategie met aandacht voor soevereiniteit te hanteren, kun je innovatiever, flexibeler en kosteneffectiever werken terwijl je de controle behoudt over je data en profiteert van de nieuwste technologische ontwikkelingen.

## Hoe pas je het toe?

<div class="direct-aan-de-slag">
    <h3>Direct aan de slag</h3>

    <div class="warning-banner" style="background-color: #fff3e0; padding: 0.5rem; border-left: 3px solid #ff9800; margin-bottom: 0.8rem;">
        <strong>Work in Progress:</strong> De onderstaande functionaliteit is nog in ontwikkeling.
    </div>

    <div class="action-cards" data-richtlijn="cloud"></div>
</div>

<!-- Kubernetes Cluster Modal Form -->
<div id="modal-overlay" class="cluster-modal-overlay"></div>
<div id="cluster-modal" class="cluster-modal">
    <div class="cluster-modal-header">
        <h3>Kubernetes Cluster aanmaken</h3>
        <button id="close-modal" class="close-cluster-modal">&times;</button>
    </div>

    <!-- Auth Container -->
    <div id="auth-container">
        <div class="auth-header">
            <h4>Authenticatie vereist</h4>
            <p>Log in om een Kubernetes cluster aan te maken</p>
        </div>

        <div class="auth-options">
            <button id="sso-login" class="auth-button">
                <span class="auth-icon">🔐</span>
                <span class="auth-text">SSO Rijksoverheid</span>
            </button>

            <button id="yubikey-login" class="auth-button">
                <span class="auth-icon">🔑</span>
                <span class="auth-text">YubiKey</span>
            </button>

            <button id="cert-login" class="auth-button">
                <span class="auth-icon">📜</span>
                <span class="auth-text">PKIoverheid Certificaat</span>
            </button>
        </div>
    </div>

    <!-- Form Container -->
    <div id="form-container" style="display: none;">
        <form id="create-cluster-form">
            <div class="form__row">
                <label class="form__label" for="organization">Organisatie</label>
                <select id="organization" name="organization" class="input-select" required>
                    <option value="" disabled selected>Selecteer een organisatie</option>
                    <!-- Organizations will be populated after authentication -->
                </select>
            </div>

            <div class="form__row">
                <label class="form__label" for="cluster-name">Naam van het cluster</label>
                <input type="text" id="cluster-name" name="cluster-name" class="input-text" required placeholder="mijn-k8s-cluster">
            </div>

            <div class="form__row">
                <label class="form__label" for="cluster-tier">Prijsmodel</label>
                <select id="cluster-tier" name="cluster-tier" class="input-select" required>
                    <option value="" disabled selected>Selecteer een prijsmodel</option>
                    <option value="free">Free-tier (1 node, beperkte resources, 90 dagen)</option>
                    <option value="basic">Basis (pay-as-you-go)</option>
                    <option value="reserved">Gereserveerde capaciteit (vooraf betaald)</option>
                </select>
            </div>

            <div class="form__row">
                <label class="form__label" for="multi-az">Hoge beschikbaarheid</label>
                <select id="multi-az" name="multi-az" class="input-select" required>
                    <option value="false" selected>Enkele regio (standaard)</option>
                    <option value="true">Multi-regio (hoge beschikbaarheid)</option>
                </select>
            </div>

            <div class="form__row">
                <label class="form__label" for="cluster-region">Regio(s)</label>
                <select id="cluster-region" name="cluster-region" class="input-select" required>
                    <option value="" disabled selected>Selecteer een regio</option>
                    <option value="nl-ams">Amsterdam</option>
                    <option value="nl-rtt">Rotterdam</option>
                    <option value="nl-gro">Groningen</option>
                    <option value="nl-hrl">Heerlen</option>
                </select>
                <div id="secondary-region-row" style="display: none; margin-top: 8px;">
                    <label class="form__label" for="cluster-region-secondary">Secundaire regio</label>
                    <select id="cluster-region-secondary" name="cluster-region-secondary" class="input-select">
                        <option value="" disabled selected>Selecteer secundaire regio</option>
                        <option value="nl-ams">Amsterdam</option>
                        <option value="nl-rtt">Rotterdam</option>
                        <option value="nl-gro">Groningen</option>
                        <option value="nl-hrl">Heerlen</option>
                    </select>
                </div>
            </div>

            <div class="form__row">
                <label class="form__label" for="cluster-size">Grootte</label>
                <select id="cluster-size" name="cluster-size" class="input-select" required>
                    <option value="" disabled selected>Selecteer een grootte</option>
                    <option value="small">Klein (1-5 nodes)</option>
                    <option value="medium">Middel (6-20 nodes)</option>
                    <option value="large">Groot (21-50 nodes)</option>
                    <option value="custom">Aangepast</option>
                </select>
            </div>

            <div class="form__row">
                <label class="form__label" for="cluster-version">Kubernetes versie</label>
                <select id="cluster-version" name="cluster-version" class="input-select" required>
                    <option value="1.33" selected>Kubernetes 1.33 (nieuwste)</option>
                    <option value="1.32">Kubernetes 1.32</option>
                    <option value="1.31">Kubernetes 1.31</option>
                    <option value="1.30">Kubernetes 1.30</option>
                </select>
            </div>

            <!-- Cost Estimation Section -->
            <div id="cost-estimation" class="cost-estimation-container">
                <h4>Geschatte kosten</h4>
                <div class="cost-details">
                    <div class="cost-row">
                        <span class="cost-label">Maandelijkse kosten:</span>
                        <span id="monthly-cost" class="cost-value">€0,00</span>
                    </div>
                    <div class="cost-row">
                        <span class="cost-label">Jaarlijkse kosten:</span>
                        <span id="yearly-cost" class="cost-value">€0,00</span>
                    </div>
                    <div class="cost-info">
                        <span class="info-icon">i</span>
                        <span class="info-text">Deze kosten zijn een schatting en kunnen variëren op basis van daadwerkelijk gebruik.</span>
                    </div>
                </div>
            </div>

            <div class="form-actions">
                <button type="button" id="back-to-auth" class="button">Terug</button>
                <button type="submit" class="button button--primary">Cluster aanmaken</button>
            </div>
        </form>
    </div>

    <!-- Spinner Container -->
    <div id="spinner" class="cluster-spinner-container">
        <div class="cluster-spinner"></div>
        <p class="cluster-spinner-text">Kubernetes cluster wordt aangemaakt...</p>
    </div>

    <!-- Result Container -->
    <div id="result-container" class="cluster-result-container">
        <div class="cluster-result-header">
            <span class="cluster-result-icon">✓</span>
            <h4>Cluster succesvol aangemaakt!</h4>
        </div>

        <div class="cluster-result-details">
            <div class="cluster-detail-row">
                <span class="cluster-detail-label">Cluster Naam:</span>
                <span id="result-cluster-name" class="cluster-detail-value"></span>
            </div>
            <div class="cluster-detail-row">
                <span class="cluster-detail-label">Cluster ID:</span>
                <span id="result-cluster-id" class="cluster-detail-value"></span>
            </div>
            <div class="cluster-detail-row">
                <span class="cluster-detail-label">Regio:</span>
                <span id="result-cluster-region" class="cluster-detail-value"></span>
            </div>
            <div class="cluster-detail-row">
                <span class="cluster-detail-label">Grootte:</span>
                <span id="result-cluster-size" class="cluster-detail-value"></span>
            </div>
            <div class="cluster-detail-row">
                <span class="cluster-detail-label">Kubernetes versie:</span>
                <span id="result-cluster-version" class="cluster-detail-value"></span>
            </div>
            <div class="cluster-detail-row">
                <span class="cluster-detail-label">Aangemaakt op:</span>
                <span id="result-creation-time" class="cluster-detail-value"></span>
            </div>
            <div class="cluster-detail-row">
                <span class="cluster-detail-label">API endpoint:</span>
                <span id="result-cluster-endpoint" class="cluster-detail-value"></span>
            </div>
        </div>

        <h4>Aan de slag met je cluster</h4>
        <div class="cluster-code-block">

# Configureer kubectl voor je nieuwe cluster

kubectl config set-cluster rijkscloud --server=<span id="kubectl-endpoint"></span>

# Download kubeconfig voor dit cluster en pas toe

curl -o kubeconfig.yaml <https://rijkscloud.nl/api/v1/clusters/><span id="kubectl-cluster-id"></span>/kubeconfig
export KUBECONFIG=./kubeconfig.yaml

# Controleer connectiviteit

kubectl get nodes
</div>

        <div class="cluster-result-actions">
            <button id="reset-cluster-form" class="button">Nog een cluster aanmaken</button>
        </div>
    </div>
</div>

## Bewezen praktijken

### 1. Begrijpen

Begin met een heldere behoeftestelling: wat probeer je functioneel te bereiken? Dit is fundamenteel en voorkomt dat je cloud als doel op zichzelf ziet. Bepaal vervolgens je rol (ben je maker of inkoper?) en evalueer verschillende cloudmodellen. Digitale soevereiniteit en dataregie zijn centrale overwegingen: waar worden je gegevens opgeslagen, wie heeft er toegang toe en onder welke jurisdictie valt de cloudprovider? Bedenk ook het verhaal voor bestuurders: waarom is cloud nodig en welke risico's pak je hiermee aan?

??? expander "Praktische tips"
    - **Start met behoeftestelling** - Formuleer helder wat je functioneel wilt bereiken voordat je over technologie nadenkt. Een te complexe behoeftestelling kan laaghangend fruit blokkeren.
    - **Bepaal je rol en organisatietype** - Ben je maker (development team) of inkoper? Werk je voor een gemeente of rijksoverheid? Dit bepaalt je sourcing-strategie en verantwoordelijkheden (zie [Definieer je inkoopstrategie](../inkoop/index.md){:target="_blank"}).
    - **Cloud-first benadering** - Start met de assumptie dat cloud voordelen biedt, maar weeg deze af tegen je specifieke eisen. Cloud is geen heilige graal. Zie [Rijksbreed cloudbeleid](https://www.digitaleoverheid.nl/overzicht-van-alle-onderwerpen/cloud/beleid/){:target="_blank"}.
    - **Bepaal geschiktheid** - Cloud is vaak geschikt voor nieuwe applicaties, vernieuwing van IT-systemen, fluctuerende vraag, test- en ontwikkelomgevingen en data-intensieve toepassingen.
    - **Overweeg alternatieven** - On-premise of hybride oplossingen kunnen beter passen bij specifieke beveiligings-/compliance-eisen, juridische vereisten voor lokale opslag, specifieke hardwarevereisten of bestaande investeringen die nog niet zijn afgeschreven.
    - **Evalueer verschillende cloudmodellen** - Soevereine cloud (Europese controle over data en infrastructuur), publieke cloud (AWS, Azure, Google), private cloud (dedicated infrastructuur) of hybride/multi-cloud combinaties. Zie [Soevereine overheidscloud visie](https://www.digitaleoverheid.nl/overzicht-van-alle-onderwerpen/cloud/){:target="_blank"}.
    - **Beoordeel digitale soevereiniteit** - Overweeg in hoeverre cloudoplossingen voldoen aan eisen voor Europese soevereiniteit en dataregie.
    - **Voer een verplichte risicoanalyse uit** - Doe een [DPIA (Data Protection Impact Assessment)](https://autoriteitpersoonsgegevens.nl/themas/basis-avg/praktisch-avg/data-protection-impact-assessment-dpia){:target="_blank"} en/of [DTIA (Data Transfer Impact Assessment)](https://www.autoriteitpersoonsgegevens.nl/themas/europees-internationaal/internationaal/doorgifte-van-persoonsgegevens-buiten-de-eu){:target="_blank"} volgens het [Implementatiekader risicoafweging](https://www.digitaleoverheid.nl/regels-voor-verantwoord-cloudgebruik-rijksoverheid/){:target="_blank"}.
    - **Classificeer je data** - Bepaal welke gegevens welk beschermingsniveau vereisen en in welk type cloud ze kunnen worden opgeslagen. Gebruik het Implementatiekader risicoafweging als leidraad.
    - **Definieer je workload** - Stel vroeg vast wat de workload-karakteristieken zijn (compute, storage, netwerk, piekmomenten). Zie [Cloud Adoption Framework](https://docs.microsoft.com/nl-nl/azure/cloud-adoption-framework/){:target="_blank"} voor hulp.
    - **Overweeg datalokaliteit** - Waar worden data opgeslagen en verwerkt? Blijft dit binnen EU/NL grenzen?
    - **Vertel het verhaal** - Bestuurders en beleidsmakers hebben vaak een legacy-mindset. Leg uit waarom cloud nodig is: welke continuïteitsrisico's zie je en hoe pakt cloud deze aan? Wees voorbereid op kritische vragen.
    - **Betrek stakeholders vroeg** - Zorg dat bestuurders, privacy officers, security teams en eindgebruikers vanaf het begin betrokken zijn.

### 2. Ontwikkelen, ontwerpen en inkopen

Werk wendbaar en cloud-native: cloud vraagt om een dynamische, kort-cyclische aanpak. Kies voor cloud-native strategieën die portabiliteit borgen. Open source is vaak een logisch gevolg van deze aanpak (zie de richtlijn [Werk transparant en gebruik open source](../open-source/index.md){:target="_blank"}), niet een doel op zichzelf. Zorg ervoor dat dezelfde eisen gelden voor je eigen organisatie als voor externe leveranciers.

Ontwikkelen & ontwerpen
??? expander "Praktische tips"
    - **Werk wendbaar en kort-cyclisch** - Cloud vraagt om een dynamische aanpak. Agile is geen voorwaarde, maar kort-cyclisch werken is essentieel voor het tempo waarin we nu veranderen.
    - **Beveilig vanaf het begin** - Implementeer beveiliging en compliance vanaf het ontwerp (zie [Maak veilige systemen](../veiligheid/index.md){:target="_blank"}). Overweeg [PCI DSS](https://www.pcisecuritystandards.org/){:target="_blank"} als concrete standaard (concreter dan [BIO](https://www.digitaleoverheid.nl/overzicht-van-alle-onderwerpen/cybersecurity/bio-en-ensia/){:target="_blank"}).
    - **Gebruik Infrastructure as Code (IaC)** - Definieer infrastructuur in code voor reproduceerbaarheid en versiebeheer (bijv. [Terraform](https://www.terraform.io/){:target="_blank"}, [Pulumi](https://www.pulumi.com/){:target="_blank"}). Dit werkt uitstekend voor IaaS-omgevingen.
    - **Overweeg GitOps** - De next level van IaC: alles in code en git is de boss. Je hele infrastructuur en configuratie wordt gedeclareerd in git. Zie [GitOps Principles](https://opengitops.dev/){:target="_blank"}.
    - **Implementeer secrets management** - Bewaar wachtwoorden, API-keys en certificaten veilig buiten je code (bijv. [HashiCorp Vault](https://www.vaultproject.io/){:target="_blank"}, cloud-native oplossingen).
    - **Kies voor cloud-native strategieën** - Ontwerp voor portabiliteit en flexibiliteit. Multi-cloud en hybride oplossingen geven je meer keuzevrijheid. Zie [Cloud Native Computing Foundation](https://www.cncf.io/){:target="_blank"}.
    - **Pas Site Reliability Engineering (SRE) principes toe** - Focus op betrouwbaarheid, definieer SLO's (Service Level Objectives) en SLI's (Service Level Indicators). Ga ervan uit dat systemen kunnen falen en ontwerp daarop. 100% uptime bestaat niet. Zie [Google SRE Book](https://sre.google/books/){:target="_blank"}.
    - **Gebruik open standaarden** - Kies oplossingen die interoperabel zijn en vendor lock-in beperken (zie [Gebruik open standaarden](../open-standaarden/index.md){:target="_blank"}). Open source is vaak een logisch gevolg, niet een doel op zichzelf.
    - **Plan een exit-strategie** - Ontwerp zo dat je kunt migreren naar andere cloudproviders zonder complete herbouw. Besef: 1 cloud is geen cloud. Portabiliteit vraagt bewuste keuzes.
    - **Denk na over identity en access management** - De plek van identity is strategisch cruciaal voor een goede multi-cloud omgeving.
    - **Zorg voor organisatie transformatie** - Cloud vraagt om nieuwe rollen en vaardigheden. Denk vooraf na over de nieuwe functies en waar expertise komt te liggen. Investeer in verandermanagement om de transitie goed uit te leggen.
    - **Ontwikkel cloudvaardigheden** - Investeer in training en certificeringen voor je team (AWS, Azure, Kubernetes, etc.). Voor elke IT-rol moet cloud-kennis beschikbaar zijn. Zie [Linux Foundation Training](https://training.linuxfoundation.org/resources/){:target="_blank"}.
    - **Test met prototypes** - Valideer technische aannames met kleine proof-of-concepts voordat je groot investeert.
    - **Borg privacy** - Zorg dat cloudgebruik voldoet aan [AVG](https://autoriteitpersoonsgegevens.nl/nl/over-privacy/wetten/algemene-verordening-gegevensbescherming-avg){:target="_blank"} en andere privacywetgeving (zie [Maak privacy integraal](../privacy/index.md){:target="_blank"}).

Inkopen
??? expander "Praktische tips"
    - **Besef dat cloud-inkoop anders is** - Inkopen van cloud is fundamenteel anders dan klassieke software-inkoop. Bij cloud voldoe je meer aan de voorwaarden van de aanbieders dan andersom. Het verdienmodel is service-gericht, niet product-gericht.
    - **Volg de cloudregels** - Gebruik het [Implementatiekader risicoafweging](https://www.digitaleoverheid.nl/regels-voor-verantwoord-cloudgebruik-rijksoverheid/){:target="_blank"} bij aanbesteding van clouddiensten.
    - **Vergelijk total cost of ownership (TCO)** - Kijk verder dan alleen de directe cloudkosten: migratie, training, onderhoud en exit-kosten zijn ook relevant. Zie [AWS TCO Calculator](https://aws.amazon.com/tco-calculator/){:target="_blank"} of [Azure TCO Calculator](https://azure.microsoft.com/nl-nl/pricing/tco/calculator/){:target="_blank"}.
    - **Stel exit-plan als inkoop voorwaarde** - Vraag leveranciers jaarlijks aan te tonen dat je kunt migreren. Als je het goed hebt ingericht, heb je de lock-in niet.
    - **Stel dezelfde eisen aan organisatie én leveranciers** - De eisen die je stelt aan externe partijen moeten ook voor je eigen organisatie gelden.
    - **Beoordeel vendor lock-in risico's** - Evalueer hoe afhankelijk je wordt van één leverancier en wat de kosten zijn om te wisselen.
    - **Bouw flexibiliteit in** - Leer van Gemeente Amsterdam die inkoopt met clausules waarmee ze kunnen veranderen tijdens de looptijd. Cloud is een moving target.
    - **Controleer compliance** - Zorg dat de cloudprovider voldoet aan relevante certificeringen ([ISO 27001](https://www.nen.nl/iso-iec-27001-2022-en-292766){:target="_blank"}, [SOC 2](https://www.aicpa.org/interestareas/frc/assuranceadvisoryservices/sorhome){:target="_blank"}, [PCI DSS](https://www.pcisecuritystandards.org/){:target="_blank"}, etc.).
    - **Verifieer datalokaliteit** - Vraag waar datacenters zich bevinden en onder welke jurisdictie ze vallen.
    - **Check contractvoorwaarden** - Let op SLA's, ondersteuning, dataportabiliteit en beëindigingsclausules.
    - **Evalueer duurzaamheid** - Vraag naar energieverbruik, groene energie en CO2-compensatie (zie [Maak je technologie duurzaam](../duurzaamheid/index.md){:target="_blank"}).

### 3. Testen, meten en verbeteren

Monitor cloudkosten, prestaties en beveiliging continu. Implementeer FinOps-principes voor kostenoptimalisatie en pas je strategie aan op basis van ervaring. Blijf je cloudarchitectuur, maar ook je organisatie, evalueren en optimaliseren. Test regelmatig je disaster recovery en evalueer of je transformatie slaagt.

??? expander "Praktische tips"
    - **Pas FinOps principes toe** - Implementeer Financial Operations practices voor kostenoptimalisatie: betrek finance, engineering en business bij cloudbeslissingen. Zie [FinOps Foundation](https://www.finops.org/){:target="_blank"}.
    - **Implementeer kostenbeheer** - Gebruik tools om cloudkosten te monitoren en budgetlimieten in te stellen. Zie [AWS Cost Management](https://aws.amazon.com/aws-cost-management/){:target="_blank"}, [Azure Cost Management](https://azure.microsoft.com/nl-nl/products/cost-management/){:target="_blank"} of [Google Cloud Cost Management](https://cloud.google.com/cost-management){:target="_blank"}.
    - **Optimaliseer resources** - Review regelmatig of je resources efficiënt gebruikt (rightsizing, reserved instances, spot instances).
    - **Monitor beveiliging** - Gebruik cloud-native security tools en voer regelmatig audits uit. Zie [BIO (Baseline Informatiebeveiliging Overheid)](https://www.digitaleoverheid.nl/overzicht-van-alle-onderwerpen/cybersecurity/bio-en-ensia/){:target="_blank"}.
    - **Test disaster recovery** - Voer regelmatig disaster recovery tests uit om te valideren dat je backup- en recovery-procedures werken.
    - **Test je exit-strategie** - Voer regelmatig oefeningen uit om te valideren dat je daadwerkelijk kunt migreren.
    - **Meet prestaties met SLO's/SLI's** - Monitor uptime, latency en doorvoer aan de hand van Service Level Objectives en Indicators. Zie [Google SRE Book: SLO's](https://sre.google/sre-book/service-level-objectives/){:target="_blank"}.
    - **Evalueer compliance** - Controleer periodiek of cloudgebruik nog voldoet aan regelgeving ([AVG](https://autoriteitpersoonsgegevens.nl/nl/over-privacy/wetten/algemene-verordening-gegevensbescherming-avg){:target="_blank"}, [BIO](https://www.digitaleoverheid.nl/overzicht-van-alle-onderwerpen/cybersecurity/bio-en-ensia/){:target="_blank"}, [Wbni](https://www.digitaleoverheid.nl/overzicht-van-alle-onderwerpen/cybersecurity/wbni/){:target="_blank"}).
    - **Monitor je organisatie transformatie** - Evalueer of teams de nieuwe vaardigheden ontwikkelen en of verandermanagement effectief is.
    - **Blijf leren** - Volg ontwikkelingen in cloudtechnologie en -beleid en pas je strategie aan. Cloud is een moving target. Zie [Cloud Community Digitale Overheid](https://www.digitaleoverheid.nl/overzicht-van-alle-onderwerpen/cloud/){:target="_blank"}.
    - **Deel kennis** - Publiceer ervaringen en best practices binnen de overheid om van elkaar te leren.

## Implementatie per fase

Zie [Implementatie en gewenste uitkomsten per fase voor richtlijn "5. Hanteer een cloud-gedreven strategie"](fases.md).

## Gerelateerde hulpmiddelen

#### Naslagwerk

- [Implementatiekader risicoafweging](https://www.digitaleoverheid.nl/regels-voor-verantwoord-cloudgebruik-rijksoverheid/) - Verplicht kader voor risicoafweging bij cloudgebruik
- [Cloud Adoption Framework](https://docs.microsoft.com/nl-nl/azure/cloud-adoption-framework/) - Microsoft's framework voor cloudadoptie
- [AWS Well-Architected Framework](https://aws.amazon.com/architecture/well-architected/) - Best practices voor cloudarchitectuur
- [Google SRE Book](https://sre.google/books/) - Site Reliability Engineering principes
- [GitOps Principles](https://opengitops.dev/) - GitOps standaarden en best practices
- [NORA (Nederlandse Overheids Referentie Architectuur)](https://www.noraonline.nl/wiki/Cloud_computing) - Architectuurprincipes overheid
- [Onderzoek cloudgebruik en ondersteuning gemeenten](https://gce.scgemeenten.nl/project/onderzoek-cloudgebruik-en-ondersteuning-gemeenten/) - Onderzoek naar cloudgebruik door Nederlandse gemeenten
- [Rijk ging zonder afwegingen de cloud in](https://www.rekenkamer.nl/actueel/nieuws/2025/01/15/rijk-ging-zonder-afwegingen-de-cloud-in) - Rekenkamer rapport over cloudgebruik door de Rijksoverheid
- [PCI DSS](https://www.pcisecuritystandards.org/) - Payment Card Industry Data Security Standard

#### Beleid, wetten en standaarden

- [Rijksbreed Cloudbeleid](https://www.digitaleoverheid.nl/overzicht-van-alle-onderwerpen/cloud/beleid/) - Rijksbreed cloudbeleid en -principes
- [Regels voor verantwoord cloudgebruik Rijksoverheid](https://www.digitaleoverheid.nl/nieuws/regels-voor-verantwoord-cloudgebruik-rijksoverheid/) - Implementatiekader risicoafweging
- [Meerjarenvisie Digitale Overheid 2025-2030](https://www.tweedekamer.nl/downloads/document?id=2025D43432) - Langetermijnvisie digitalisering
- [BIO (Baseline Informatiebeveiliging Overheid)](https://www.digitaleoverheid.nl/overzicht-van-alle-onderwerpen/cybersecurity/bio-en-ensia/) - Beveiligingsnormen overheid
- [VIR (Voorschrift Informatiebeveiliging Rijksdienst)](https://www.digitaleoverheid.nl/overzicht-van-alle-onderwerpen/cybersecurity/kaders-voor-cybersecurity/voorschrift-informatiebeveiliging-rijksdienst-vir/) - Informatiebeveiligingsvoorschrift Rijksdienst
- [AVG (Algemene Verordening Gegevensbescherming)](https://autoriteitpersoonsgegevens.nl/nl/over-privacy/wetten/algemene-verordening-gegevensbescherming-avg) - Privacywetgeving
- [DPIA (Data Protection Impact Assessment)](https://autoriteitpersoonsgegevens.nl/themas/basis-avg/praktisch-avg/data-protection-impact-assessment-dpia) - Verplichte privacytoets
- [DTIA (Data Transfer Impact Assessment)](https://www.autoriteitpersoonsgegevens.nl/themas/europees-internationaal/internationaal/doorgifte-van-persoonsgegevens-buiten-de-eu) - Toets voor dataoverdracht buiten EER
- [ISO 27001](https://www.nen.nl/iso-iec-27001-2022-en-292766) - Internationale standaard voor informatiebeveiliging
- [Wbni (Wet beveiliging netwerk- en informatiesystemen)](https://www.digitaleoverheid.nl/overzicht-van-alle-onderwerpen/cybersecurity/wbni/) - Cybersecuritywetgeving

#### Communities

- [Cloud Community Digitale Overheid](https://www.digitaleoverheid.nl/overzicht-van-alle-onderwerpen/cloud/) - Kennisdeling cloudgebruik overheid
- [Opensourcewerken community](https://developer.overheid.nl/communities/open-source-werken) - Open source discussies

#### Trainingen

- [Linux Foundation Training](https://training.linuxfoundation.org/resources/) - Gratis en betaalde cloud-gerelateerde cursussen (Kubernetes, cloud-native, etc.)
- [Linux Foundation Cloud & Containers Trainingen](https://training.linuxfoundation.org/full-catalog/?_sft_product_type=training&_sft_topic_area=cloud-containers) - Volledige catalogus van cloud en container trainingen (cursussen gratis, certificeringen betaald)
- [Linux Foundation Cloud & Containers Certificeringen](https://training.linuxfoundation.org/full-catalog/?_sft_product_type=certification&_sft_topic_area=cloud-containers) - Cloud en container certificeringen (betaald)
- [Rijkscompetentiecentrum](https://www.rijksoverheid.nl/onderwerpen/rijksoverheid-als-werkgever/rijksacademie) - Trainingen voor rijksambtenaren
- Cloud provider certificeringen - AWS Certified Solutions Architect, Azure Administrator, Google Cloud Engineer

### Gerelateerde richtlijnen

- [6. Maak veilige systemen](../veiligheid/index.md){:target="_blank"}
- [7. Maak privacy integraal](../privacy/index.md){:target="_blank"}
- [12. Definieer je inkoopstrategie](../inkoop/index.md){:target="_blank"}
- [13. Maak je technologie duurzaam](../duurzaamheid/index.md){:target="_blank"}
