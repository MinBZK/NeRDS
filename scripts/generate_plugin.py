#!/usr/bin/env python3
"""Generate platform-specific plugin.json files from the neutral .plugin/plugin.json.

The .plugin/plugin.json is the single source of truth. This script generates
platform-specific variants for Claude Code and Cursor (and future platforms).

Usage:
    python scripts/generate_plugin.py          # generate all platform files
    python scripts/generate_plugin.py --check  # verify files are in sync
"""

import copy
import json
import sys
from pathlib import Path

ROOT_DIR = Path(__file__).resolve().parent.parent
SOURCE_PATH = ROOT_DIR / ".plugin" / "plugin.json"
CLAUDE_PATH = ROOT_DIR / ".claude-plugin" / "plugin.json"
CURSOR_PATH = ROOT_DIR / ".cursor-plugin" / "plugin.json"


def load_source() -> dict:
    """Load the neutral .plugin/plugin.json."""
    with open(SOURCE_PATH) as f:
        return json.load(f)


def generate_claude(data: dict) -> dict:
    """Generate Claude Code plugin.json — identical copy of source."""
    return copy.deepcopy(data)


def _display_name(name: str) -> str:
    """Convert a kebab-case plugin name to a human-readable display name.

    Examples:
        "standaarden" -> "Standaarden"
        "zad-actions" -> "Zad Actions"
    """
    return name.replace("-", " ").title()


def generate_cursor(data: dict) -> dict:
    """Generate Cursor plugin.json — adds displayName."""
    result = copy.deepcopy(data)
    # Insert displayName after name
    ordered = {"name": result.pop("name")}
    ordered["displayName"] = _display_name(ordered["name"])
    ordered.update(result)
    return ordered


PLATFORMS: dict[str, tuple[Path, callable]] = {
    "claude": (CLAUDE_PATH, generate_claude),
    "cursor": (CURSOR_PATH, generate_cursor),
}


def write_json(path: Path, data: dict) -> None:
    """Write JSON data to a file with consistent formatting."""
    path.parent.mkdir(parents=True, exist_ok=True)
    with open(path, "w") as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
        f.write("\n")


def generate_all(source_data: dict) -> None:
    """Generate all platform plugin files."""
    for name, (path, generator) in PLATFORMS.items():
        generated = generator(source_data)
        write_json(path, generated)
        print(f"Gegenereerd: {path.relative_to(ROOT_DIR)}")


def check_sync(source_data: dict) -> bool:
    """Check if platform files are in sync with the source."""
    all_synced = True
    for name, (path, generator) in PLATFORMS.items():
        expected = generator(source_data)
        if not path.exists():
            print(f"FOUT: {path.relative_to(ROOT_DIR)} bestaat niet")
            all_synced = False
            continue
        with open(path) as f:
            actual = json.load(f)
        if actual != expected:
            print(f"FOUT: {path.relative_to(ROOT_DIR)} is niet in sync")
            all_synced = False
        else:
            print(f"OK: {path.relative_to(ROOT_DIR)}")
    return all_synced


def main() -> None:
    if not SOURCE_PATH.exists():
        print(f"FOUT: {SOURCE_PATH} niet gevonden")
        sys.exit(1)

    source_data = load_source()

    if "--check" in sys.argv:
        if check_sync(source_data):
            print("\nAlle platform-bestanden zijn in sync")
            sys.exit(0)
        else:
            print("\nNiet in sync. Draai: python scripts/generate_plugin.py")
            sys.exit(1)
    else:
        generate_all(source_data)
        print("\nAlle platform-bestanden gegenereerd")


if __name__ == "__main__":
    main()
