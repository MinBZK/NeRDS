#!/usr/bin/env python3
"""
Validate actions.yaml against the JSON schema and check for fase fields.
"""

import sys
import json
import yaml
from pathlib import Path
from jsonschema import validate, ValidationError

# Richtlijnen that should have fase fields
FASE_REQUIRED_RICHTLIJNEN = ['gebruikersbehoeften', 'toegankelijkheid', 'open-source', 'cloud']

def main():
    """Validate actions.yaml file."""
    repo_root = Path(__file__).parent.parent
    actions_file = repo_root / 'docs' / 'action-registry' / 'actions.yaml'
    schema_file = repo_root / 'docs' / 'action-registry' / 'action-registry-schema.json'

    if not actions_file.exists():
        print(f"❌ Error: {actions_file} not found")
        return 1

    if not schema_file.exists():
        print(f"❌ Error: {schema_file} not found")
        return 1

    # Load actions.yaml
    try:
        with open(actions_file, 'r', encoding='utf-8') as f:
            actions_data = yaml.safe_load(f)
    except Exception as e:
        print(f"❌ Error loading {actions_file}: {e}")
        return 1

    # Load schema
    try:
        with open(schema_file, 'r', encoding='utf-8') as f:
            schema = json.load(f)
    except Exception as e:
        print(f"❌ Error loading {schema_file}: {e}")
        return 1

    # Validate against schema
    try:
        validate(instance=actions_data, schema=schema)
        print("✅ actions.yaml is valid against schema")
    except ValidationError as e:
        print(f"❌ Schema validation failed:")
        print(f"   {e.message}")
        print(f"   Path: {' -> '.join(str(p) for p in e.path)}")
        return 1

    # Check for missing fase fields
    if 'actions' not in actions_data:
        print("❌ Error: 'actions' key not found in actions.yaml")
        return 1

    warnings = []
    for action in actions_data['actions']:
        action_id = action.get('id', 'unknown')
        richtlijn = action.get('richtlijn')

        # Check if action from fase-using richtlijnen has fase field
        if richtlijn in FASE_REQUIRED_RICHTLIJNEN:
            if 'fase' not in action or not action.get('fase'):
                warnings.append(f"   - Action '{action_id}' in richtlijn '{richtlijn}' is missing 'fase' field")

    if warnings:
        print(f"\n⚠️  {len(warnings)} warning(s) found:")
        for warning in warnings:
            print(warning)
        print("\nℹ️  Actions in richtlijnen 'gebruikersbehoeften', 'toegankelijkheid', 'open-source', and 'cloud'")
        print("   should have a 'fase' field (verkenning, ontwerp, bouw, productie, live)")
        # Don't fail the pre-commit, just warn
        return 0

    print("✅ All fase fields present where expected")
    return 0


if __name__ == '__main__':
    sys.exit(main())
