# Central Action Registry Implementation Plan

## Current State Analysis

### ✅ What's Already Done
1. **Infrastructure**: Hook file exists at `src/overrides/hooks/action_registry.py`
2. **Schema**: Complete JSON Schema defined in `docs/action-registry/action-registry-schema.json`
3. **Documentation**: README.md with clear instructions
4. **Placeholders**: All 13 guideline pages have `<div class="action-cards"></div>` placeholders
5. **System Design**: Hook is designed to filter actions by richtlijn and inject HTML

### ❌ What's Missing

#### 1. **Central Registry File** (CRITICAL)
- `docs/action-registry/actions.yaml` does NOT exist
- All actions are currently hardcoded in individual guideline pages
- Need to extract ~40+ action cards from 13 guideline pages

#### 2. **Hook Registration** (CRITICAL)
- Hook is not registered in `mkdocs.yml`
- Currently only `security_txt.py` is registered
- Need to add `src/overrides/hooks/action_registry.py` to hooks section

#### 3. **Code Issues in Hook** (MINOR)
- Line 113: Indentation error (extra space before `return`)
- Needs to be fixed before testing

#### 4. **Cleanup Guideline Pages** (REQUIRED AFTER REGISTRY CREATED)
- Replace all hardcoded action-card divs with empty `<div class="action-cards"></div>`
- Remove Kubernetes cluster form modal from cloud/index.md (keep only button for form type)
- Simplify action-card HTML in all 13 pages

#### 5. **Kubernetes Component Handling** (OPTIONAL BUT RECOMMENDED)
- Currently cloud/index.md has hardcoded modal for cluster form
- Consider moving form component logic to separate files or keeping it special
- Decide: Is the modal part of cloud/index.md or should form handling be elsewhere?

## Implementation Steps

### Phase 1: Create Central Registry (acts.yaml)
**Effort: Medium** | **Risk: Low** | **Complexity: Data extraction**

1. **Extract All Actions**
   - Parse all 13 guideline pages
   - Identify all action-card divs
   - Collect: id, name, description, richtlijn, type, action, source, status
   - Use date: 08-12-2025 for all existing actions (today's date)

2. **Create actions.yaml Structure**
   ```yaml
   actions:
     - id: bio-wizard
       name: BIO Wizard
       source: https://bio-overheid.nl/ico-wizard
       description: Bepaal verplichte beveiligingsmaatregelen
       richtlijn: veiligheid
       type: tool
       action: Starten
       date_added: 08-12-2025
       status: beschikbaar
   ```

3. **Validate Against Schema**
   - Use JSON Schema validator to ensure all entries are valid
   - Check all required fields present
   - Verify richtlijn values match enum
   - Verify action label values match enum

### Phase 2: Fix Hook Code
**Effort: Minimal** | **Risk: None** | **Complexity: Code fix**

1. Fix indentation error on line 113 in `action_registry.py`

### Phase 3: Register Hook in mkdocs.yml
**Effort: Minimal** | **Risk: Low** | **Complexity: Config**

1. Add `action_registry.py` to hooks section:
   ```yaml
   hooks:
     - src/overrides/hooks/security_txt.py
     - src/overrides/hooks/action_registry.py
   ```

### Phase 4: Clean Guideline Pages
**Effort: High** | **Risk: Medium** | **Complexity: Content replacement**

**13 Pages to Update:**
1. `docs/richtlijnen/gebruikersbehoeften/index.md` - If has action cards
2. `docs/richtlijnen/toegankelijkheid/index.md`
3. `docs/richtlijnen/open-source/index.md`
4. `docs/richtlijnen/open-standaarden/index.md`
5. `docs/richtlijnen/cloud/index.md` - **SPECIAL**: Has Kubernetes form modal
6. `docs/richtlijnen/veiligheid/index.md`
7. `docs/richtlijnen/privacy/index.md`
8. `docs/richtlijnen/samenwerking/index.md`
9. `docs/richtlijnen/integratie/index.md`
10. `docs/richtlijnen/data/index.md`
11. `docs/richtlijnen/algoritmen/index.md`
12. `docs/richtlijnen/inkoop/index.md`
13. `docs/richtlijnen/duurzaamheid/index.md`

**For each page:**
- Find all `<div class="action-card">` blocks inside `<div class="action-cards">`
- Replace entire section with simple: `<div class="action-cards"></div>`
- Special handling for cloud/index.md: Keep only modal code outside action-cards

### Phase 5: Test Registry System
**Effort: Low** | **Risk: Medium** | **Complexity: Verification**

1. Run `mkdocs build` to verify hook triggers
2. Inspect generated HTML output
3. Verify action cards appear correctly on each guideline page
4. Test filtering by richtlijn (check correct cards on each page)
5. Test different action types: tool, beleid, register, handleiding, form
6. Verify styling and badge display

## Expected Outcomes

### Before
- ~40+ hardcoded action-card divs scattered across 13 files
- Duplicate code for each card
- Difficult to maintain, update, or reuse actions
- Hook system unused

### After
- Single source of truth: `docs/action-registry/actions.yaml`
- All 13 guideline pages clean and simple
- Maintainable: Add/edit/remove actions in one place
- Scalable: Easy to add new actions
- Automatic: Hook handles filtering and rendering

## Decision Points for User

1. **Kubernetes Form Modal**:
   - Keep in cloud/index.md (current approach)?
   - Move to separate component file?
   - Recommendation: Keep in cloud/index.md for now, it's guideline-specific

2. **Date for Existing Actions**:
   - Use today's date (08-12-2025) for all existing actions?
   - Or try to find original dates?
   - Recommendation: Use today's date for consistency

3. **Action IDs**:
   - Generate from action name (kebab-case)?
   - Use existing/meaningful IDs?
   - Recommendation: Semantic IDs like `bio-wizard`, `openkad`, `kubernetes-cluster`, etc.

## Files to Modify/Create

**New:**
- ✨ `docs/action-registry/actions.yaml`

**Modified:**
- 📝 `mkdocs.yml` (add hook)
- 🔧 `src/overrides/hooks/action_registry.py` (fix indentation)
- 📄 `docs/richtlijnen/*/index.md` (13 files - clean up action cards)

## Estimated Complexity

- **Data Extraction**: Medium (manual process, need accuracy)
- **Code Changes**: Minimal (hook fix + config)
- **Page Cleanup**: High (13 files, need careful replacement)
- **Testing**: Low (straightforward validation)

**Total Effort**: Medium-High (mainly due to manual data extraction and page cleanup)
**Risk Level**: Low (straightforward content reorganization, no logic changes)
**Impact**: High (improves maintainability significantly)
