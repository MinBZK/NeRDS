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
    fase: verkenning  # Optional: verkenning, ontwerp, bouw, productie, or live (can also be array)
    type: tool  # beleid, register, tool, handleiding, or form
    action: Starten  # Button text (e.g., "Starten", "Verkennen", "Aanmaken")
    date_added: 27-10-2025  # DD-MM-YYYY format
    status: beschikbaar  # beschikbaar, concept, ontwikkeling, or demo
    component: optional-component-id  # Only for form type actions
```

### 2. Automatic Filtering

The `action_registry.py` hook automatically:

- Detects which guideline page is being built (from the file path)
- Filters actions matching that guideline's `richtlijn` field
- Optionally filters by `fase` when specified (via `data-fase` attribute)
- Generates action cards with proper styling and buttons
- Injects HTML into the `<div class="action-cards"></div>` placeholder
- Validates that actions have a `fase` field for specific richtlijnen (warns during build)

### 3. How to add actions to a page

Simply add this placeholder to any guideline's `index.md`:

```html
<!-- Show all actions for this richtlijn -->
<div class="action-cards" data-richtlijn="cloud"></div>

<!-- Show only actions for a specific fase -->
<div class="action-cards" data-richtlijn="cloud" data-fase="verkenning"></div>
```

The `data-richtlijn` attribute filters actions by guideline, and the optional `data-fase` attribute further filters by fase. The hook will automatically populate the div with matching actions.

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

4. Add a `fase` field if the action belongs to `gebruikersbehoeften`, `toegankelijkheid`, `open-source`, or `cloud`:
   - `verkenning` - For discovery and exploration phase
   - `ontwerp` - For design and architecture phase (Alpha)
   - `bouw` - For building and testing phase (Beta)
   - `productie` - For production and maintenance phase
   - `live` - For live/operational phase
   - Can be a single value (`fase: verkenning`) or array (`fase: [verkenning, ontwerp]`)

5. Set the correct `type` and `action` values
6. Run `mkdocs build` to verify (warnings will appear if `fase` is missing for relevant richtlijnen)

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
