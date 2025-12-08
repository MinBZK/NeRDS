"""
MkDocs hook to dynamically generate action cards from central YAML registry.
Filters actions by richtlijn and injects HTML into guideline pages.
"""

import os
import yaml
import re
from pathlib import Path


def on_page_content(html, page, config, files):
    """
    Process page content and inject dynamic action cards.
    Runs after page content is converted to HTML.
    """

    # Only process guideline pages
    if not page.file.src_path.startswith('richtlijnen/') or not page.file.src_path.endswith('/index.md'):
        return html

    # Extract richtlijn name from path (e.g., 'gebruikersbehoeften' from 'richtlijnen/gebruikersbehoeften/index.md')
    path_parts = page.file.src_path.split('/')
    if len(path_parts) < 2:
        return html

    current_richtlijn = path_parts[1]

    # Load the action registry
    registry_path = os.path.join(config['docs_dir'], 'action-registry', 'actions.yaml')

    if not os.path.exists(registry_path):
        return html

    try:
        with open(registry_path, 'r', encoding='utf-8') as f:
            registry_data = yaml.safe_load(f)
    except Exception as e:
        print(f"Error loading action registry: {e}")
        return html

    if not registry_data or 'actions' not in registry_data:
        return html

    # Filter actions for this richtlijn
    filtered_actions = [a for a in registry_data['actions'] if a.get('richtlijn') == current_richtlijn]

    if not filtered_actions:
        return html

    # Generate HTML for action cards (without wrapper divs or data attributes for filtering)
    action_cards_html = _generate_action_cards_html(filtered_actions)

    # Find and replace the placeholder with generated action cards
    # Look for empty action-cards div and replace it
    pattern = r'<div class="action-cards"></div>'

    # Generate the complete replacement HTML with just the cards
    replacement = f'''<div class="action-cards">
{action_cards_html}
    </div>'''

    html = re.sub(pattern, replacement, html, flags=re.DOTALL)

    return html


def _generate_action_cards_html(actions):
    """
    Generate HTML for action cards from action data.
    """
    cards_html = []

    for action in actions:
        status = action.get('status', 'beschikbaar')
        status_class = f'wip-badge-{status}'

        # Determine button/link based on source and type
        button_html = _generate_button_html(action)

        # No data attributes - keep it simple like the original
        card_html = f'''        <div class="action-card">
            <span class="wip-badge {status_class}">{status}</span>
            <h4>{action.get('name', '')}</h4>
            <p>{action.get('description', '')}</p>
            {button_html}
        </div>'''

        cards_html.append(card_html)

    return '\n'.join(cards_html)


def _generate_button_html(action):
    """
    Generate button/link HTML based on action type and source.
    """
    action_type = action.get('type', '')
    action_label = action.get('action', '')
    source = action.get('source')
    component = action.get('component')

    # For form type actions with a component
    if action_type == 'form' and component:
        if component == 'kubernetes-cluster-form':
            return '''<button id="open-cluster-form" class="action-button">Aanmaken</button>'''

    # For actions without a source
    if not source:
        return f'<button disabled class="action-button">{action_label}</button>'

    # For actions with a source
    return f'<a href="{source}" class="action-button" target="_blank">{action_label}</a>'