---
title: "Fases en gewenste uitkomsten 5. Hanteer een cloud-gedreven strategie"
summary: Cloud-gedreven werken is een doorlopend proces. Hieronder staat per fase wat je doet.
relations:
  - cloud
  - veiligheid
  - privacy
---

!!! warning "Work in progress"
    Deze pagina is nog in ontwikkeling.

## Wanneer doe je wat?

Het hanteren van een cloud-gedreven strategie vraagt om gefaseerd handelen: van het evalueren van cloudgeschiktheid tot het actief monitoren en optimaliseren van cloudomgevingen. Deze pagina beschrijft per fase van ontwerpen, ontwikkelen en inkopen welke stappen je zet en welke uitkomsten je mag verwachten.

### 1. Verkenningsfase

!!! info "Doel"
    Onderzoek of cloud past bij je project en evalueer verschillende cloudmodellen en -providers.

<div class="direct-aan-de-slag">
    <h3>Direct aan de slag</h3>
    <div class="action-cards" data-richtlijn="cloud" data-fase="verkenning"></div>
</div>

**Gewenste uitkomsten:**

- [ ] Behoeftestelling: wat wil je functioneel bereiken?
- [ ] Rol bepaald: ben je maker of inkoper?
- [ ] Verplichte risicoanalyse uitgevoerd (DPIA/DTIA volgens Implementatiekader)
- [ ] Dataclassificatie: welke data mag in de cloud?
- [ ] Cloud geschiktheid onderzocht
- [ ] Verschillende cloudmodellen geëvalueerd (soeverein, publiek, privé, hybride)

**Aanvullend (indien passend):**

- Workload definitie: bepaal compute, storage, netwerk en piekmomenten
- Onderzoek naar cloudgebruik door andere overheidsorganisaties
- Prototypes bouwen om technische aannames te valideren
- TCO en vendor lock-in risico's geëvalueerd
- Bestuurlijk verhaal voorbereid: waarom cloud en welke risico's pak je aan?

---

### 2. Ontwerpfase (Alpha)

!!! info "Doel"
    Ontwerp je cloudarchitectuur met aandacht voor beveiliging, soevereiniteit en exit-strategie.

<div class="direct-aan-de-slag">
    <h3>Direct aan de slag</h3>
    <div class="action-cards" data-richtlijn="cloud" data-fase="ontwerp"></div>
</div>

**Gewenste uitkomsten:**

- [ ] Cloudarchitectuur ontworpen (cloud-native, portabel)
- [ ] Cloudprovider gekozen
- [ ] Exit-strategie gedefinieerd (een cloud is geen cloud)
- [ ] Beveiliging ontworpen volgens BIO/VIR
- [ ] Secrets management strategie bepaald
- [ ] Architectuur gebruikt open standaarden waar mogelijk

**Aanvullend (indien passend):**

- Infrastructure as Code (IaC) strategie bepaald
- Identity en access management architectuur ontworpen
- Disaster recovery en backup-strategie gedefinieerd
- Multi-cloud of hybride architectuur voor hoge beschikbaarheid
- Governance-model voor cloudgebruik opgesteld
- Dezelfde eisen gelden voor eigen organisatie als voor leveranciers

---

### 3. Bouwfase (Beta)

!!! info "Doel"
    Bouw en test je cloudomgeving met aandacht voor beveiliging, kostenbeheersing en prestaties.

<div class="direct-aan-de-slag">
    <h3>Direct aan de slag</h3>
    <div class="action-cards" data-richtlijn="cloud" data-fase="bouw"></div>
</div>

**Gewenste uitkomsten:**

- [ ] Beveiliging geïmplementeerd (IAM, encryption, netwerksegmentatie)
- [ ] Secrets management ingericht, geen hard-coded credentials
- [ ] Monitoring en logging actief
- [ ] Cloudoplossing getest op prestaties en beveiliging
- [ ] Compliance gevalideerd

**Aanvullend (indien passend):**

- Cloudomgeving gebouwd met IaC/GitOps
- Kostenbewaking ingesteld met budgetlimieten
- Penetratietesten uitgevoerd
- CI/CD pipelines ingericht voor cloud deployments
- SLO's/SLI's gedefinieerd en geïmplementeerd
- Wendbare werkwijze ingericht: kort-cyclisch werken

---

### 4. Productie

!!! info "Doel"
    Monitor, optimaliseer en beveilig je cloudomgeving continu.

<div class="direct-aan-de-slag">
    <h3>Direct aan de slag</h3>
    <div class="action-cards" data-richtlijn="cloud" data-fase="productie"></div>
</div>

**Gewenste uitkomsten:**

- [ ] Security monitoring actief
- [ ] Regelmatige compliance checks
- [ ] Kosten gemonitord
- [ ] Exit-strategie periodiek getest

**Aanvullend (indien passend):**

- FinOps principes toegepast voor kostenoptimalisatie
- Disaster recovery tests uitgevoerd
- Bevindingen gedeeld binnen de overheid
- Prestaties gemeten met SLO's/SLI's
- Organisatie transformatie gemonitord: ontwikkelen teams nieuwe vaardigheden?
- Team blijft op de hoogte van cloud-ontwikkelingen (cloud is een moving target)
