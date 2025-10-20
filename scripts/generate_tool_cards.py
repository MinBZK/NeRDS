#!/usr/bin/env python3
"""
Genereert tool action cards in richtlijnen op basis van tool metadata.

Usage:
    python scripts/generate_tool_cards.py
"""

import os
import re
from pathlib import Path
import yaml

# Directories
TOOLS_DIR = Path("docs/tools")
RICHTLIJNEN_DIR = Path("docs/richtlijnen")

def parse_frontmatter(content):
    """Parse YAML frontmatter from markdown content."""
    match = re.match(r'^---\n(.*?)\n---\n', content, re.DOTALL)
    if match:
        try:
            metadata = yaml.safe_load(match.group(1))
            body = content[match.end():]
            return metadata, body
        except yaml.YAMLError:
            return None, content
    return None, content

def get_tool_metadata(tool_file):
    """Read metadata from a tool file."""
    with open(tool_file, 'r', encoding='utf-8') as f:
        content = f.read()
    metadata, _ = parse_frontmatter(content)
    return metadata

def get_all_tools():
    """Get all tool metadata indexed by filename."""
    tools = {}
    for tool_file in TOOLS_DIR.glob("*.md"):
        metadata = get_tool_metadata(tool_file)
        if metadata:
            tools[tool_file.stem] = metadata
    return tools

def get_richtlijn_slug(richtlijn_dir):
    """Convert richtlijn directory name to slug used in tool metadata."""
    # Map directory names to metadata slugs
    slug_mapping = {
        'gebruikersbehoeften': 'gebruikersbehoeften',
        'toegankelijkheid': 'toegankelijkheid',
        'open-source': 'open-source',
        'open-standaarden': 'open-standaarden',
        'observeerbaarheid': 'observeerbaarheid',
        'veiligheid': 'veiligheid',
        'privacy': 'privacy',
        'samenwerking': 'samenwerking',
        'integratie': 'integratie',
        'cloud': 'cloud',
        'servicestandaard': 'servicestandaard',
        'inkoop': 'inkoop',
        'duurzaamheid': 'duurzaamheid',
        'ai': 'ai'
    }
    return slug_mapping.get(richtlijn_dir.name, richtlijn_dir.name)

def generate_tool_card(tool_slug, metadata):
    """Generate markdown for a tool action card."""
    title = metadata.get('title', tool_slug)
    description = metadata.get('description', '')
    url = metadata.get('url', '')

    card = f"""
<div class="card">
    <h3>{title}</h3>
    <p>{description}</p>
    <a href="../tools/{tool_slug}/" class="card-link">Meer info →</a>
</div>
"""
    return card.strip()

def find_tools_section_position(content):
    """Find where to insert tools section in richtlijn."""
    # Look for common section markers where tools should go
    patterns = [
        r'## Tools en hulpmiddelen',
        r'## Hulpmiddelen',
        r'## Tools',
        r'## Handige links'
    ]

    for pattern in patterns:
        match = re.search(pattern, content, re.IGNORECASE)
        if match:
            return match.end()

    # If no tools section exists, add before "Gerelateerd" or at end
    gerelateerd_match = re.search(r'## Gerelateerd', content, re.IGNORECASE)
    if gerelateerd_match:
        return gerelateerd_match.start()

    return len(content)

def update_richtlijn_with_tools(richtlijn_file, tools, richtlijn_slug):
    """Update a richtlijn file with tool cards."""
    with open(richtlijn_file, 'r', encoding='utf-8') as f:
        content = f.read()

    # Find tools relevant to this richtlijn
    relevant_tools = []
    for tool_slug, metadata in tools.items():
        richtlijnen = metadata.get('richtlijnen', [])
        if richtlijn_slug in richtlijnen:
            relevant_tools.append((tool_slug, metadata))

    if not relevant_tools:
        print(f"  No tools found for {richtlijn_slug}")
        return False

    # Generate tools section
    tools_section = "\n## Tools en hulpmiddelen\n\n"
    tools_section += '<div class="card-grid">\n'

    for tool_slug, metadata in sorted(relevant_tools, key=lambda x: x[1].get('title', '')):
        tools_section += generate_tool_card(tool_slug, metadata)
        tools_section += "\n"

    tools_section += "</div>\n"

    # Remove existing tools section if it exists
    content = re.sub(
        r'## Tools en hulpmiddelen.*?(?=##|\Z)',
        '',
        content,
        flags=re.DOTALL | re.IGNORECASE
    )

    # Insert new tools section
    insert_pos = find_tools_section_position(content)
    new_content = content[:insert_pos] + "\n" + tools_section + "\n" + content[insert_pos:]

    # Write back
    with open(richtlijn_file, 'w', encoding='utf-8') as f:
        f.write(new_content)

    print(f"  Added {len(relevant_tools)} tools to {richtlijn_slug}")
    return True

def main():
    """Main function."""
    print("Loading all tools...")
    tools = get_all_tools()
    print(f"Found {len(tools)} tools\n")

    print("Updating richtlijnen with tool cards...\n")

    for richtlijn_dir in sorted(RICHTLIJNEN_DIR.iterdir()):
        if not richtlijn_dir.is_dir():
            continue

        index_file = richtlijn_dir / "index.md"
        if not index_file.exists():
            continue

        richtlijn_slug = get_richtlijn_slug(richtlijn_dir)
        print(f"Processing {richtlijn_slug}...")

        update_richtlijn_with_tools(index_file, tools, richtlijn_slug)

    print("\nDone!")
    print("\nNote: Make sure to add CSS for .card and .card-grid classes to docs/stylesheets/extra.css")

if __name__ == "__main__":
    main()
