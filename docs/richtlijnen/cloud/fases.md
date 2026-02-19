---
title: "Fases en gewenste uitkomsten 5. Hanteer een cloud-gedreven strategie"
summary: Cloud-gedreven werken is een doorlopend proces. Hieronder staat per fase wat je doet.
relations:
  - cloud
  - veiligheid
  - privacy
---

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

- [ ] Je hebt een heldere behoeftestelling die beschrijft wat je functioneel wilt bereiken inclusief of cloud geschikt is voor je digitale systeem
- [ ] Je rol (maker of inkoper) is bepaald en bepalend voor je sourcing-strategie
- [ ] Je hebt een DPIA/DTIA uitgevoerd volgens het [Implementatiekader risicoafweging](https://open.overheid.nl/documenten/ronl-734f947ec6465e4f75a56bed82fe64a1135f71a8/pdf)
- [ ] Je hebt je data geclassificeerd en weet welke gegevens in welk type cloud mogen
- [ ] Je hebt verschillende cloudmodellen geëvalueerd (soeverein, publiek, privé, hybride) en begrijpt hun voor- en nadelen

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

- [ ] Je hebt een cloudarchitectuur ontworpen die cloud-native en portabel is
- [ ] Je hebt een cloudprovider gekozen die past bij je eisen voor soevereiniteit en functionaliteit
- [ ] Je hebt een exit-strategie gedefinieerd zodat je kunt migreren naar andere providers
- [ ] Je hebt beveiliging ontworpen volgens BIO/VIR standaarden
- [ ] Je hebt een secrets management strategie bepaald
- [ ] Je architectuur gebruikt open standaarden waar mogelijk om vendor lock-in te beperken

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

- [ ] Je hebt beveiliging geïmplementeerd (IAM, encryption, netwerksegmentatie)
- [ ] Je hebt secrets management ingericht (zie de richtlijn [3. Werk transparant en gebruik open source](../open-source/index.md))
- [ ] Je hebt monitoring en logging actief om jouw cloudomgeving te observeren
- [ ] Je hebt je cloudoplossing getest op prestaties en beveiliging
- [ ] Je hebt compliance gevalideerd en voldoet aan de verplichte regelgeving

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

- [ ] Je hebt security monitoring actief en reageert proactief op bedreigingen
- [ ] Je voert regelmatig compliance checks uit en blijft voldoen aan regelgeving
- [ ] Je monitort je cloudkosten en hebt inzicht in kostendrivers
- [ ] Je test periodiek je exit-strategie en weet dat migratie mogelijk is

**Aanvullend (indien passend):**

- [FinOps Foundation](https://www.finops.org/){:target="_blank"} principes toegepast voor kostenoptimalisatie
- Disaster recovery tests uitgevoerd
- Bevindingen gedeeld binnen de overheid (zie [Cloud Communities](./index.md#Communities))
- Prestaties gemeten met SLO's/SLI's
- Organisatie transformatie gemonitord: ontwikkelen teams nieuwe vaardigheden?
- Team blijft op de hoogte van cloud-ontwikkelingen (cloud is een moving target)
