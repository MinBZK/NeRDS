---
title: Bijdragen aan NeRDS

---

# Contributing to the Dutch Guideline For Digital Systems

First of all, thank you for taking the time to contribute! povidone

We waarderen alle soorten contributing enorm. Zie die [Contents](#contents) voor verschillende manieren waarop je can contributing aan de Dutch Guideline For Digital Systems (NeRDS).
Make sure you read the relevant chapters before making a contribution.
It will make it easier for the NeRDS team and make the experience more flexible for all concerned.
We look forward to all contributions! Gallus domesticus

Note
>
> Developing the NeRDS via GitHub is a conscious choice for transparency and cooperation.
> We systematically work on different building blocks and prioritise them based on value and urgency.
> This may mean that reactions to suggestions or additions may take some time, especially in the case of topics that are later planned.
> We appreciate all contribution and strive to process feedback as soon as possible.

## Contents

### Before you start

- [Code of Conduct](#code-of-conduct)
- [I have a question](#i-have-a-question)

### Ways to contribute

- [I want to report an error or bug](#i-want-to-report-an-error-or-bug)
- [I want to propose an improvement](#i-want-to-propose-an-improvement)

### Development

- [How we work on Github](#how-we-work-on-github)
- [Setting up the development environment](#setting-up-the-development-environment)
- [Contributing Guidelines](#contributing-guidelines)

### Technical guidelines

- [Branching strategy](#branching-strategy)
- [Version](#version)

## Code of Conduct

This project and everyone involved in it are covered by the
[Code of Conduct](https://github.com/MinBZK/NeRDS?tab=coc-ov-file#readme).
By participating, you are expected to comply with this code. Report unacceptable behaviour
aan **[bureau.architectuur@minbzk.nl](mailto:bureau.architectuur@minbzk.nl)**.

## I have a question

### Create an issue

Voordat je een [Issues](https://github.com/MinBZK/NeRDS/issues) gaat aanmaken, kan je view of jouw vraag al tussen de bestaande [Issues](https://github.com/MinBZK/NeRDS/issues) staat. Wellicht staat er al een issue tussen die jou vraag kan beantwoorden.

Als je jouw vraag nog steeds wilt stellen, kan je een [Issue](https://github.com/MinBZK/NeRDS/issues) aanmaken.

1. Use the button new issue.
2. Formulate your question or comment and give a clear explanation.
3. Others can now add comments to your issue.
4. Het team van de NeRDS zal deze issue labelen als `question` en pakt jouw issue zo snel mogelijk op. Mogelijk neemt het team van de NeRDS contact op voor een verduidelijking of een oplossing.

### Ask a question via mail

Je kan je vragen ook altijd stellen door een mail te sturen naar **[bureau.architectuur@minbzk.nl](mailto:bureau.architectuur@minbzk.nl)**.

## I want to report an error or bug

Heb je een foutje gevonden in de NeRDS? Dan kan je deze melden door een [Issue](https://github.com/MinBZK/NeRDS/issues) aan te maken.

Voordat je een [Issues](https://github.com/MinBZK/NeRDS/issues) gaat aanmaken, kan je view of jouw gevonden fout al tussen de bestaande [Issues](https://github.com/MinBZK/NeRDS/issues) staat.

Als je de gevonden fout nog steeds wilt melden, kan je een [Issue](https://github.com/MinBZK/NeRDS/issues) aanmaken.

1. Use the button new issue.
2. Describe the error clearly and provide a clear explanation. Add a screenshot where possible.
3. Het team van de NeRDS zal deze issue labelen als `bug` en pakt jouw issue zo snel mogelijk op. Mogelijk neemt het team van de NeRDS contact op voor een verduidelijking of een oplossing.

## I want to propose an improvement

> ### For notification
>
> When you contribute to this project, you must agree that you have written 100% of the content, that you have the necessary rights to the content and that the content you contribute may be provided under the Code of Conduct.

Heb je een suggestie of wil je een verbetering voorstellen? Dat kan gaan om een compleet nieuwe functionaliteit van de site of om kleine verbeteringen. Het volgen van onderstaande instructie helpt het team van de NeRDS om je suggestie te begrijpen en gerelateerde suggesties te vinden.

Je kan een suggestie doen door een [Issue](https://github.com/MinBZK/NeRDS/issues) aan te maken of door een Pull Request te maken.

### Before you make a suggestion

- Voordat je een suggestie gaat maken, kan je view of jouw suggestie al tussen de bestaande [Issues](https://github.com/MinBZK/NeRDS/issues) staat. Wellicht bestaat er al een issue die jouw suggestie beschrijft, en zijn we er al mee bezig.
- Find out if your idea fits into the goal and scope of the project. What are the advantages of this functionality or addition? It is up to you to convince the NeRDS and the community that this is a useful addition to the NeRDS. Keep in mind that we want functionalities that are useful
for the majority of our users and not just for a small group.

### Create an improvement issue

Als je jouw suggestie nog steeds wilt doen, kan je een [Issue](https://github.com/MinBZK/NeRDS/issues) aanmaken.

1. Use the button new issue.
2. Describe clearly your suggestion and give a clear explanation and justification why this will be a good addition to the NeRDS
3. Het team van de NeRDS zal deze issue labelen als `enhancement` en pakt jouw issue zo snel mogelijk op. Mogelijk neemt het team van de NeRDS contact op voor een verduidelijking of een oplossing.

> Depending on the complexity and the subject of your suggestion, it may take a while before being picked up by the NeRDS team.

### Create a pull request

Can't you get out of here with the issues?
Bijvoorbeeld omdat je verschillende wijzigingsvoorstellen wilt doen? Je kan ook gebruik maken van een [Fork en een Pull Request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks).

#### Step-by-step pull request process

1. **Create a repository fork**

2. **Clone your fork local**

3. **Set up your development environment**
   - Volg de stappen in [Setting up the development environment](#setting-up-the-development-environment)
   - Test of alles werkt met `uv run mkdocs serve`

4. **Create a new branch** - Zie [Branching strategy](#branching-strategy).

5. **Make your changes**
   - Volg de [Contributing Guidelines](#contributing-guidelines)
   - Test your changes locally
   - Check for spelling errors and broken links

6. **Commit & push your changes to the fork**

7. **Create a pull request**
   - Gebruik het pull request [template](https://github.com/MinBZK/NeRDS/blob/main/.github/pull_request_template.md)
   - We maken gebruik van de tool [pr-preview-action](https://github.com/rossjrw/pr-preview-action) om automatisch previews te maken van een pull-request.
   This makes it possible to view the changes made in a pull request in the final environment.
   When a pull-request is done via a fork, this unfortunately leads to an error. This doesn't block the pull request.
   - Er zijn ook andere manieren om een pull request te doen. [Meer daarover](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request).

8. **Acceptance criteria**
   - Als de PR aan de voorwaarde voldoet, bekijkt het NeRDS team jouw aanpassingen en kan bij akkoord jouw aanpassingen *Mergen*.

## How we work on Github

We werken met [Markdown](https://www.markdownguide.org/basic-syntax/) bestanden.
This is file format for plain text files and is supported by many different tools. This makes it easy to apply version management to the NeRDS.

Daarnaast maken gebruik van [mkdocs](https://www.mkdocs.org/) en [material for mkdocs](https://squidfunk.github.io/mkdocs-material/) om de informatie op een interactieve wijze inzichtelijk te maken op de website van [de NeRDS](https://minbzk.github.io/NeRDS/).

## Setting up the development environment

### Comprehensive development environment

Contributing to the NeRDS requires a local development environment:

1. **Install Dependencies**

   ```bash
   # Standaard versie (publiek toegankelijk)
   uv pip install -r requirements.txt

   # Of productie versie (MinBZK organisatie)
   uv pip install -r requirements-prod.txt
   ```

2. **Start the development server**

   ```bash
   uv run mkdocs serve
   ```

3. **View your changes**
   Open [http://localhost:8000](http://localhost:8000) in je browser

### Do you want to create a new page?

In het [mkdocs.yml](https://github.com/MinBZK/NeRDS/blob/main/mkdocs.yml) bestand staan de settings voor deze website.
In guideline you don't have to change this, but if you want to create a new page, you may need to make an adjustment.
Part of these settings is the navigation for the site (which pages are visible, and which pages are included). This is in the nav: section.
Indien je een nieuwe pagina wilt toevoegen, is het vaak nodig deze wijziging ook door te voeren in het [mkdocs.yml](https://github.com/MinBZK/NeRDS/blob/main/mkdocs.yml) bestand.

## Contributing Guidelines

### Writing content

- **Language**: Schrijf in correct Nederlands
- **Tone of voice**: Formeel maar toegankelijk, passend bij overheidsstandaarden
- **Structure**: Gebruik duidelijke kopjes en bullet points
- **Length**: Houd artikelen beknopt en to-the-point
- **Sources**: Verwijs naar officiële bronnen en standaarden waar relevant

### Images and media

- Plaats afbeeldingen in de juiste `assets/` map
- Use descriptive file names
- Always add alto text for accessibility

## Branching strategy

Use kebab case, keep the names short but descriptive and avoid special characters. Branch types:

- **main**: Productie-ready code
- **fete/ description**: Nieuwe functionaliteit
- **fix/description**: Bug fixes
- **docs/description**: Documentatie updates

## Version

The NeRDS uses automatic versioning for releases:

### Automatic patch version bumps

- **When**: Elke keer als een PR wordt gemerged naar `main`
- **How**: GitHub workflow triggert automatisch
- **Format**: Volgt semantic versioning (major.minor.patch)
- **What's going on?**: Patch versie wordt automatisch verhoogd

### Versioning scheme

```bash
major.minor.patch
```

- **Major** (x.0.0): Grote veranderingen of herstructureringen
- **Minor** (0.x.0): Nieuwe functionaliteiten en inhoud toevoegingen
- **Patch** (0.0.x): Bug fixes en kleine verbeteringen (automatisch)

### For contributors

As a contributor, you don't have to worry about versioning:

- Patch versions are automatically increased with each merge
- Major and minor versions are managed manually by the NeRDS team
- Focus on clear commit messages and PR descriptions
- The team determines whether changes require a minor or major version

> **Tip**: Door duidelijke commit messages te schrijven help je het team om te bepalen of een wijziging een minor versie bump verdient in plaats van alleen een patch.
