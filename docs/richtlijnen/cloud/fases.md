---
title: "Fases en gewenste uitkomsten 5. Gebruik cloud verantwoord en blijf wendbaar"
summary: Verantwoord cloudgebruik is een doorlopend proces. Hieronder staat per fase wat je doet.
relations:
  - cloud
  - veiligheid
  - privacy
---

## Wanneer doe je wat?

Verantwoord cloudgebruik vraagt om gefaseerd handelen: van de keuze waar je systeem draait tot het jaarlijks toetsen van je exitplan. Deze pagina beschrijft per fase van ontwerpen, ontwikkelen en inkopen welke stappen je zet en welke uitkomsten je mag verwachten.

### 1. Verkenningsfase

!!! info "Doel"
    Bepaal wat je systeem nodig heeft aan soevereiniteit en kies op basis daarvan waar het kan draaien.

<div class="direct-aan-de-slag">
    <h4>Direct aan de slag</h4>
    <div class="action-cards" data-richtlijn="cloud" data-fase="verkenning"></div>
</div>

#### Gewenste uitkomsten

- [ ] Je hebt een heldere behoeftestelling die beschrijft wat je functioneel wilt bereiken inclusief of cloud geschikt is voor je digitale systeem
- [ ] Je rol (maker of inkoper) is bepaald en bepalend voor je sourcing-strategie
- [ ] Je weet welk kader voor je geldt: het [Rijksbrede Cloudbeleid 2026](https://www.tweedekamer.nl/downloads/document?id=2026D35295) of, voor gemeenten, de [VNG-handreiking Eisen aan gemeentelijke Cloudvoorzieningen (pdf)](https://vng.nl/sites/default/files/2026-07/handreiking-cloud-voor-gemeenten.pdf)
- [ ] Je hebt een integrale risicobeoordeling met DPIA/DTIA uitgevoerd volgens het [Implementatiekader risicoafweging](https://open.overheid.nl/documenten/ronl-734f947ec6465e4f75a56bed82fe64a1135f71a8/pdf)
- [ ] Je hebt je toepassing en data geclassificeerd (BIV-eisen of TBB-niveau) en weet welk beschermingsniveau nodig is
- [ ] Je hebt de opties afgewogen (overheidsdatacenter of gedeelde overheidsvoorziening, Europese leverancier, publieke cloud) en weet onder welke jurisdictie elke leverancier valt

#### Aanvullend (indien passend)

- Workload definitie: bepaal compute, storage, netwerk en piekmomenten
- Onderzoek naar cloudgebruik door andere overheidsorganisaties
- Prototypes bouwen om technische aannames te valideren
- TCO en vendor lock-in risico's geëvalueerd
- Bestuurlijk verhaal voorbereid: welke continuïteitsrisico's zie je en welke keuze maak je daarom?
- Nagegaan of je systeem later op een soevereine overheidscloud kan landen (zie [Fundament](https://docs.fundament.projects.digilab.network/){:target="_blank"})

---

### 2. Ontwerpfase (Alpha)

!!! info "Doel"
    Ontwerp je cloudarchitectuur met aandacht voor beveiliging, soevereiniteit en exit-strategie.

<div class="direct-aan-de-slag">
    <h4>Direct aan de slag</h4>
    <div class="action-cards" data-richtlijn="cloud" data-fase="ontwerp"></div>
</div>

#### Gewenste uitkomsten

- [ ] Je hebt een cloudarchitectuur ontworpen die cloud-native en portabel is
- [ ] Je hebt een platform of leverancier gekozen die past bij het soevereiniteitsniveau dat je nodig hebt
- [ ] Je hebt een exitplan voor twee scenario's: een geplande overstap en een onverwachte uitval van de dienst
- [ ] Opslag en verwerking blijven binnen de EER en Zwitserland, en je weet wie de versleutelingssleutels beheert
- [ ] Je hebt beveiliging ontworpen volgens BIO/VIR standaarden
- [ ] Je hebt een secrets management strategie bepaald
- [ ] Je architectuur gebruikt open standaarden waar mogelijk om vendor lock-in te beperken

#### Aanvullend (indien passend)

- Infrastructure as Code (IaC) strategie bepaald
- Identity en access management architectuur ontworpen
- Disaster recovery en backup-strategie gedefinieerd
- Back-up buiten de cloudomgeving van dezelfde leverancier
- Exit- en overdrachtsvoorwaarden opgenomen in de overeenkomst
- Governance-model voor cloudgebruik opgesteld
- Dezelfde eisen gelden voor eigen organisatie als voor leveranciers

---

### 3. Bouwfase (Beta)

!!! info "Doel"
    Bouw en test je cloudomgeving met aandacht voor beveiliging, kostenbeheersing en prestaties.

<div class="direct-aan-de-slag">
    <h4>Direct aan de slag</h4>
    <div class="action-cards" data-richtlijn="cloud" data-fase="bouw"></div>
</div>

#### Gewenste uitkomsten

- [ ] Je hebt beveiliging geïmplementeerd (IAM, encryption, netwerksegmentatie)
- [ ] Je hebt secrets management ingericht (zie de richtlijn [3. Werk transparant en gebruik open source](../open-source/index.md))
- [ ] Je hebt monitoring en logging actief om jouw cloudomgeving te observeren
- [ ] Je hebt je cloudoplossing getest op prestaties en beveiliging
- [ ] Je hebt compliance gevalideerd en voldoet aan de verplichte regelgeving
- [ ] Je hebt materieel cloudgebruik vóór de implementatie gemeld bij CISO Rijk (Rijksoverheid)

#### Aanvullend (indien passend)

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
    <h4>Direct aan de slag</h4>
    <div class="action-cards" data-richtlijn="cloud" data-fase="productie"></div>
</div>

#### Gewenste uitkomsten

- [ ] Je hebt security monitoring actief en reageert proactief op bedreigingen
- [ ] Je voert regelmatig compliance checks uit en blijft voldoen aan regelgeving
- [ ] Je monitort je cloudkosten en hebt inzicht in kostendrivers
- [ ] Je toetst je exitplan en beoordeelt het elk jaar op actualiteit
- [ ] Je houdt bij welke clouddiensten je voor welke verwerkingen gebruikt en bij welke leverancier

#### Aanvullend (indien passend)

- [FinOps Foundation](https://www.finops.org/){:target="_blank"} principes toegepast voor kostenoptimalisatie
- Disaster recovery tests uitgevoerd
- Bevindingen gedeeld binnen de overheid (zie [Cloud Communities](./index.md#communities-en-trainingen))
- Prestaties gemeten met SLO's/SLI's
- Organisatie transformatie gemonitord: ontwikkelen teams nieuwe vaardigheden?
- Periodiek nagegaan of er een Europees of soeverein alternatief is voor wat je buiten Europa afneemt
- Team blijft op de hoogte van ontwikkelingen in cloudtechnologie en -beleid
