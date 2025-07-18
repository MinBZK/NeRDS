---
title: Contributing to NeRDS

---

# Contributing to the Dutch Guideline for Digital Systems

First of all, thank you for taking the time to contribute! ❤️

We greatly appreciate all types of contributions. See the [Table of Contents](#table-of-contents) for different ways you can contribute to the Dutch Guideline for Digital Systems (NeRDS).
Make sure to read the relevant sections before making a contribution.
This will make it much easier for the NeRDS team and make the experience smoother for everyone involved.
We look forward to all contributions! 🎉

> ## Note
>
> Developing NeRDS via GitHub is a conscious choice for transparency and collaboration.
> We work systematically on different building blocks and prioritize them based on value and urgency.
> This means that responses to suggestions or additions may take some time, especially for topics that are later on the schedule.
> We appreciate all contributions and strive to process feedback as quickly as possible.

## Table of Contents

### Before you start

- [Code of Conduct](#code-of-conduct)
- [I have a question](#i-have-a-question)

### Ways to contribute

- [I want to report an error or bug](#i-want-to-report-an-error-or-bug)
- [I want to suggest an improvement](#i-want-to-suggest-an-improvement)

### Development

- [How we work on GitHub](#how-we-work-on-github)
- [Setting up development environment](#setting-up-development-environment)
- [Contribution guidelines](#contribution-guidelines)

### Technical guidelines

- [Branching strategy](#branching-strategy)
- [Versioning](#versioning)

## Code of Conduct

This project and everyone who participates in it is governed by the
[Code of Conduct](https://github.com/MinBZK/NeRDS?tab=coc-ov-file#readme).
By participating, you are expected to uphold this code. Report unacceptable behavior
to **[bureau.architectuur@minbzk.nl](mailto:bureau.architectuur@minbzk.nl)**.

## I have a question

### Create an issue

Before creating an [Issue](https://github.com/MinBZK/NeRDS/issues), you can check if your question is already among the existing [Issues](https://github.com/MinBZK/NeRDS/issues). Perhaps there is already an issue that can answer your question.

If you still want to ask your question, you can create an [Issue](https://github.com/MinBZK/NeRDS/issues).

1. Use the new issue button for this.
2. Formulate your question or comment and provide a clear explanation.
3. Others can now add comments to your issue.
4. The NeRDS team will label this issue as `question` and will pick up your issue as soon as possible. The NeRDS team may contact you for clarification or a solution.

### Ask a question via email

You can also always ask your questions by sending an email to **[bureau.architectuur@minbzk.nl](mailto:bureau.architectuur@minbzk.nl)**.

## I want to report an error or bug

Have you found an error in NeRDS? Then you can report it by creating an [Issue](https://github.com/MinBZK/NeRDS/issues).

Before creating an [Issue](https://github.com/MinBZK/NeRDS/issues), you can check if your found error is already among the existing [Issues](https://github.com/MinBZK/NeRDS/issues).

If you still want to report the found error, you can create an [Issue](https://github.com/MinBZK/NeRDS/issues).

1. Use the new issue button for this.
2. Describe the error clearly and provide a clear explanation. Add a screenshot where possible.
3. The NeRDS team will label this issue as `bug` and will pick up your issue as soon as possible. The NeRDS team may contact you for clarification or a solution.

## I want to suggest an improvement

> #### Notice
>
> When you contribute to this project, you must agree that you have written 100% of the content, that you have the necessary rights to the content, and that the content you contribute may be delivered under the Code of Conduct.

Do you have a suggestion or want to propose an improvement? This can be a completely new functionality of the site or small improvements. Following the instructions below helps the NeRDS team understand your suggestion and find related suggestions.

You can make a suggestion by creating an [Issue](https://github.com/MinBZK/NeRDS/issues) or by making a Pull Request.

### Before making a suggestion

- Before making a suggestion, you can check if your suggestion is already among the existing [Issues](https://github.com/MinBZK/NeRDS/issues). Perhaps there is already an issue that describes your suggestion, and we are already working on it.
- Find out if your idea fits within the goal and scope of the project. What are the benefits of this functionality or addition? It is up to you to convince the NeRDS team and the community that this is a useful addition to NeRDS. Keep in mind that we want functionalities that are useful
for the majority of our users and not just for a small group.

### Creating an issue

If you still want to make your suggestion, you can create an [Issue](https://github.com/MinBZK/NeRDS/issues).

1. Use the new issue button for this.
2. Clearly describe your suggestion and provide a clear explanation and justification of why this will be a good addition to NeRDS
3. The NeRDS team will label this issue as `enhancement` and will pick up your issue as soon as possible. The NeRDS team may contact you for clarification or a solution.

> Depending on the complexity and topic of your suggestion, it may take some time before it is picked up by the NeRDS team.

### Making a pull request

Can't get around with the issues?
For example, because you want to make different change proposals? You can also use a [Fork and a Pull Request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks).

#### Step-by-step pull request process

1. **Create a fork of the repository**

2. **Clone your fork locally**

3. **Set up your development environment**
   - Follow the steps in [Setting up development environment](#setting-up-development-environment)
   - Test if everything works with `uv run mkdocs serve`

4. **Create a new branch** - See [Branching strategy](#branching-strategy).

5. **Make your changes**
   - Follow the [Contribution guidelines](#contribution-guidelines)
   - Test your changes locally
   - Check for spelling errors and broken links

6. **Commit & push your changes to the fork**

7. **Create a pull request**
   - Use the pull request [template](.github/pull_request_template.md)
   - We use the tool [pr-preview-action](https://github.com/rossjrw/pr-preview-action) to automatically create previews of a pull request.
   This makes it possible to already view the changes made in a pull request in the final environment.
   When a pull request is made via a fork, this unfortunately leads to an error. This does not block the pull request.
   - There are also other ways to make a pull request. [More about that](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request).

8. **Acceptance criteria**
   - If the PR meets the conditions, the NeRDS team reviews your changes and can *merge* your changes upon approval.

## How we work on GitHub

We work with [Markdown](https://www.markdownguide.org/basic-syntax/) files.
This is a file format for plain text files and is supported by many different tools. This makes it easy to apply version control to NeRDS.

In addition, we use [mkdocs](https://www.mkdocs.org/) and [material for mkdocs](https://squidfunk.github.io/mkdocs-material/) to make the information visible in an interactive way on the website of [NeRDS](https://minbzk.github.io/NeRDS/).

## Setting up development environment

### Comprehensive development environment

For contributions to NeRDS you need a local development environment:

1. **Install dependencies**

   ```bash
   # Standard version (publicly accessible)
   uv pip install -r requirements.txt

   # Or production version (MinBZK organization)
   uv pip install -r requirements-prod.txt
   ```

2. **Start the development server**

   ```bash
   uv run mkdocs serve
   ```

3. **View your changes**
   Open [http://localhost:8000](http://localhost:8000) in your browser

### Want to create a new page?

The [mkdocs.yml](https://github.com/MinBZK/NeRDS/blob/main/mkdocs.yml) file contains the settings for this website.
In principle, you don't need to modify anything here, but if you want to create a new page, it may be necessary to make an adjustment here.
Part of these settings is the navigation for the site (which pages are visible, and which pages fall under them). This is in the nav: section.
If you want to add a new page, it is often necessary to also make this change in the [mkdocs.yml](https://github.com/MinBZK/NeRDS/blob/main/mkdocs.yml) file.

## Contribution guidelines

### Writing content

- **Language**: Write in correct English
- **Tone of voice**: Formal but accessible, appropriate for government standards
- **Structure**: Use clear headings and bullet points
- **Length**: Keep articles concise and to-the-point
- **Sources**: Reference official sources and standards where relevant

### Images and media

- Place images in the appropriate `assets/` folder
- Use descriptive file names
- Always add alt-text for accessibility

## Branching strategy

Use kebab-case, keep names short but descriptive and avoid special characters. Branch types:

- **main**: Production-ready code
- **feat/description**: New functionality
- **fix/description**: Bug fixes
- **docs/description**: Documentation updates

## Versioning

NeRDS uses automatic versioning for releases:

### Automatic patch version bumps

- **When**: Every time a PR is merged to `main`
- **How**: GitHub workflow triggers automatically
- **Format**: Follows semantic versioning (major.minor.patch)
- **What happens**: Patch version is automatically increased

### Versioning schema

```bash
major.minor.patch
```

- **Major** (x.0.0): Major changes or restructuring
- **Minor** (0.x.0): New functionalities and content additions
- **Patch** (0.0.x): Bug fixes and small improvements (automatic)

### For contributors

As a contributor, you don't need to worry about versioning:

- Patch versions are automatically increased with each merge
- Major and minor versions are manually managed by the NeRDS team
- Focus on clear commit messages and PR descriptions
- The team determines whether changes require a minor or major version

> **Tip**: By writing clear commit messages, you help the team determine whether a change deserves a minor version bump instead of just a patch.
