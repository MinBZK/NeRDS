"""
MkDocs hook to dynamically generate action cards from central YAML registry.
Filters actions by richtlijn and fase, and injects HTML into guideline pages.
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

    # Only process guideline pages (both index.md and fases.md)
    if not page.file.src_path.startswith('richtlijnen/'):
        return html

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

    # Find all action-cards divs with data attributes
    # Pattern matches: <div class="action-cards" data-richtlijn="..." data-fase="..."></div>
    # Both data-richtlijn and data-fase are optional
    pattern = r'<div class="action-cards"([^>]*)></div>'

    def replace_action_cards(match):
        """Replace each action-cards div with filtered cards."""
        attributes = match.group(1)

        # Extract data-richtlijn attribute
        richtlijn_match = re.search(r'data-richtlijn="([^"]+)"', attributes)
        richtlijn_filter = richtlijn_match.group(1) if richtlijn_match else None

        # Extract data-fase attribute
        fase_match = re.search(r'data-fase="([^"]+)"', attributes)
        fase_filter = fase_match.group(1) if fase_match else None

        # Filter actions based on data attributes
        filtered_actions = _filter_actions(
            registry_data['actions'],
            richtlijn_filter,
            fase_filter
        )

        if not filtered_actions:
            # Return empty div with marker class to hide parent block
            return f'<div class="action-cards no-actions"{attributes}></div>'

        # Generate HTML for action cards
        action_cards_html = _generate_action_cards_html(filtered_actions)

        # Return the div with generated cards
        return f'''<div class="action-cards"{attributes}>
{action_cards_html}
    </div>'''

    # Replace all action-cards divs
    html = re.sub(pattern, replace_action_cards, html, flags=re.DOTALL)

    return html


def _filter_actions(actions, richtlijn_filter=None, fase_filter=None):
    """
    Filter actions based on richtlijn and fase.

    Args:
        actions: List of action dictionaries
        richtlijn_filter: Richtlijn name to filter by (or None)
        fase_filter: Fase name to filter by (or None)

    Returns:
        List of filtered actions
    """
    filtered = []

    for action in actions:
        # Filter by richtlijn
        if richtlijn_filter:
            action_richtlijn = action.get('richtlijn')

            # Handle richtlijn as string or list
            if isinstance(action_richtlijn, list):
                if richtlijn_filter not in action_richtlijn:
                    continue
            elif action_richtlijn != richtlijn_filter:
                continue

        # Filter by fase
        if fase_filter:
            action_fase = action.get('fase')

            # Skip if action has no fase defined
            if not action_fase:
                continue

            # Handle fase as string or list
            if isinstance(action_fase, list):
                if fase_filter not in action_fase:
                    continue
            elif action_fase != fase_filter:
                continue

        filtered.append(action)

    return filtered


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
