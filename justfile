# Serve the site locally with live reload
serve:
    uv run mkdocs serve --watch src

# Build the site and check it against the design system
check:
    uv run python scripts/check_site.py

# Record the current behavior surface as the reference
update-surface:
    uv run python scripts/check_site.py --update
