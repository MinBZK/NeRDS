# Action Registry

The Action Registry is a centralized system for managing all available actions across NeRDS guideline pages.

## How it works

### 1. Central Registry (`actions.yaml`)
All actions are defined in a single YAML file with the following structure:

```yaml
actions:
  - id: unique-action-id
    name: Display Name
    source: https://example.com  # or null if not available
    description: Short description of the action
    richtlijn: cloud  # Which guideline this belongs to
    type: tool  # beleid, register, tool, handleiding, or form
    action: Starten  # Button text (e.g., "Starten", "Verkennen", "Aanmaken")
    date_added: 27-10-2025  # DD-MM-YYYY format
    status: beschikbaar  # beschikbaar, concept, or ontwikkeling
    component: optional-component-id  # Only for form type actions
```
### 2. Automatic Filtering
The `action_registry.py` hook automatically:
- Detects which guideline page is being built (from the file path)
- Filters actions matching that guideline's `richtlijn` field
- Generates action cards with proper styling and buttons
- Injects HTML into the `<div class="action-cards"></div>` placeholder

### 3. How to add actions to a page
Simply add this placeholder to any guideline's `index.md`:

```html
<div class="action-cards"></div>
```

That's it! The hook will automatically populate it with the right actions.

## Adding new actions

1. Open `actions.yaml`
2. Add a new action entry with all required fields
3. Make sure the `richtlijn` matches one of these:
   - `gebruikersbehoeften`
   - `toegankelijkheid`
   - `open-source`
   - `open-standaarden`
   - `cloud`
   - `veiligheid`
   - `privacy`
   - `samenwerking`
   - `integratie`
   - `data`
   - `algoritmen`
   - `inkoop`
   - `duurzaamheid`
   - `servicestandaard`

4. Set the correct `type` and `action` values
5. Run `mkdocs build` to verify

## Validation

The `action-registry-schema.json` defines the exact structure. You can validate `actions.yaml` against this schema using any JSON Schema validator.

## Files

- **`actions.yaml`** - Central registry of all actions
- **`action-registry-schema.json`** - JSON Schema for validation
- **`README.md`** - This file
- **`index.md`** - Documentation index page (auto-generated)

## Technical details

- **Hook**: `src/overrides/hooks/action_registry.py`
- **Hook trigger**: Runs on every page build (`on_page_content`)
- **Pattern matching**: Finds and replaces `<div class="action-cards"></div>`
 - **Form components**: Special handling for form-type actions with custom JavaScript