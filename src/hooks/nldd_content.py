"""
MkDocs hook that turns the HTML Markdown produces into NLDD components.

Authors keep writing plain Markdown (admonitions, task lists, a placeholder
for the guideline cards); this hook renders it with the design system.
"""

import re
from html import escape
from pathlib import Path

from markdown.extensions import Extension
from mkdocs.utils import meta

import nldd_assets  # noqa: E402  (hooks share the hooks directory on sys.path)

# What an admonition type becomes. A type that is not listed is a quiet box.
BANNER_VARIANTS = {"warning": "warning", "danger": "critical", "success": "success"}

ADMONITION = re.compile(
    r'<div class="admonition (?P<classes>[^"]+)">\s*'
    r'<p class="admonition-title">(?P<title>.*?)</p>(?P<body>.*?)\n</div>',
    flags=re.DOTALL,
)
TASK_ITEM = re.compile(
    r'<li class="task-list-item">\s*<label class="task-list-control">'
    r'<input type="checkbox"(?P<state>[^>]*)><span class="task-list-indicator"></span></label>'
    r'(?P<text>.*?)</li>',
    flags=re.DOTALL,
)
CODE_BLOCK = re.compile(
    r'<pre[^>]*><code(?: class="language-(?P<language>[\w-]+)")?>(?P<code>.*?)</code></pre>',
    flags=re.DOTALL,
)
GUIDELINE_CARDS = re.compile(r'<div class="richtlijnen-cards"(?: data-heading-level="(?P<level>[2-6])")?></div>')


class NlddBlockElements(Extension):
    """
    Let Markdown treat nldd-* tags as block-level HTML.

    Without this a component at the start of a line is taken for inline
    HTML and wrapped in a paragraph.
    """

    def __init__(self, tag_names):
        super().__init__()
        self.tag_names = tag_names

    def extendMarkdown(self, md):
        md.block_level_elements.extend(self.tag_names)


def component_tag_names():
    """Every tag name the pinned package defines."""
    manifest = Path(nldd_assets.package_dir()) / "custom-elements.json"
    return sorted(set(re.findall(r'"tagName":\s*"(nldd-[a-z0-9-]+)"', manifest.read_text(encoding="utf-8"))))


def on_config(config):
    config["markdown_extensions"].append(NlddBlockElements(component_tag_names()))
    return config


def on_page_content(html, page, config, files):
    html = ADMONITION.sub(_replace_admonition, html)
    html = TASK_ITEM.sub(_replace_task_item, html)
    html = html.replace('<ul class="task-list">', '<ul class="checklist">')
    html = CODE_BLOCK.sub(_replace_code_block, html)
    html = GUIDELINE_CARDS.sub(
        lambda match: _generate_guideline_cards(page, config, files, match.group("level") or "2"), html
    )
    return html


def _plain_text(html):
    return re.sub(r"\s+", " ", re.sub(r"<[^>]+>", "", html)).strip()


def _replace_admonition(match):
    classes = match.group("classes").split()
    title = escape(_plain_text(match.group("title")))
    body = match.group("body").strip()

    variant = next((BANNER_VARIANTS[name] for name in classes if name in BANNER_VARIANTS), None)
    if variant:
        dismissible = " dismissible" if "dismissible" in classes else ""
        return (
            f'<nldd-banner variant="{variant}" text="{title}"{dismissible}>'
            f"<nldd-rich-text>{body}</nldd-rich-text></nldd-banner>"
        )

    return (
        '<nldd-box data-width="main"><nldd-container padding="16" gap="4">'
        f'<nldd-title size="6" text="{title}"></nldd-title>'
        f"<nldd-rich-text>{body}</nldd-rich-text>"
        "</nldd-container></nldd-box>"
    )


def _replace_task_item(match):
    text = match.group("text").strip()
    checked = " checked" if "checked" in match.group("state") else ""
    label = escape(_plain_text(text))
    return f'<li><nldd-checkbox accessible-label="{label}"{checked}></nldd-checkbox><span>{text}</span></li>'


def _replace_code_block(match):
    language = match.group("language")
    attribute = f' language="{language}"' if language else ""
    return f"<nldd-code-viewer{attribute}>{match.group('code').rstrip()}</nldd-code-viewer>"


def _generate_guideline_cards(page, config, files, heading_level):
    """A card per guideline, read from the front matter of each guideline page."""
    guidelines = []
    for file in files.documentation_pages():
        parts = file.src_uri.split("/")
        if len(parts) != 3 or parts[0] != "richtlijnen" or parts[2] != "index.md":
            continue
        source = Path(config["docs_dir"], file.src_uri).read_text(encoding="utf-8")
        _, front_matter = meta.get_data(source)
        title = str(front_matter.get("title", parts[1]))
        number = re.match(r"\s*(\d+)", title)
        guidelines.append((int(number.group(1)) if number else 999, title, front_matter, file))

    cards = []
    for _, title, front_matter, file in sorted(guidelines, key=lambda item: item[:2]):
        url = file.url_relative_to(page.file)
        icon = escape(str(front_matter.get("icon", "file-text")))
        summary = escape(str(front_matter.get("summary", "")))
        cards.append(
            f'''  <nldd-card href="{escape(url)}" accessible-label="{escape(title)}">
    <nldd-container padding="16" gap="8">
      <nldd-icon icon="{icon}" size="32" color="lintblauw"></nldd-icon>
      <nldd-title size="5" heading-level="{heading_level}" text="{escape(title)}"></nldd-title>
      <nldd-rich-text><p>{summary}</p></nldd-rich-text>
    </nldd-container>
  </nldd-card>'''
        )

    return '<nldd-collection layout="grid" item-width="280px">\n' + "\n".join(cards) + "\n</nldd-collection>"
