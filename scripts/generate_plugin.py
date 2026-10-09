#!/usr/bin/env python3
"""Generate the parts of the plugin that are derived from something else.

Two things, each with one source:

- the platform-specific plugin.json files, from the neutral .plugin/plugin.json;
- the guideline text inside each skill, from docs/richtlijnen/.

A skill carries a copy of its guideline so that it is complete on its own:
on a Windows checkout, where a symlink arrives as a one-line text file, and
when a tool copies only the skill folder. Edit the file in docs/ and run this
script; the pre-commit hook does that for you.

Usage:
    python scripts/generate_plugin.py          # generate everything
    python scripts/generate_plugin.py --check  # verify nothing is out of date
"""

import copy
import json
import re
import sys
import tomllib
from pathlib import Path

ROOT_DIR = Path(__file__).resolve().parent.parent
PYPROJECT_PATH = ROOT_DIR / "pyproject.toml"
MKDOCS_PATH = ROOT_DIR / "mkdocs.yml"
SOURCE_PATH = ROOT_DIR / ".plugin" / "plugin.json"
CLAUDE_PATH = ROOT_DIR / ".claude-plugin" / "plugin.json"
CURSOR_PATH = ROOT_DIR / ".cursor-plugin" / "plugin.json"
SKILLS_DIR = ROOT_DIR / "skills"
GUIDELINES_DIR = ROOT_DIR / "docs" / "richtlijnen"

# Skill -> its guideline's folder under docs/richtlijnen, in the order of the guidelines.
SKILL_GUIDELINES = {
    "nerds-gebruikers": "gebruikersbehoeften",
    "nerds-toegankelijkheid": "toegankelijkheid",
    "nerds-opensource": "open-source",
    "nerds-standaarden": "open-standaarden",
    "nerds-cloud": "cloud",
    "nerds-veiligheid": "veiligheid",
    "nerds-privacy": "privacy",
    "nerds-samenwerking": "samenwerking",
    "nerds-integratie": "integratie",
    "nerds-data": "data",
    "nerds-algoritmen": "algoritmen",
    "nerds-inkoop": "inkoop",
    "nerds-duurzaamheid": "duurzaamheid",
}
# File in the guideline's folder -> its name inside the skill.
SKILL_FILES = {"index.md": "richtlijn.md", "fases.md": "fases.md"}
OVERVIEW_PATH = SKILLS_DIR / "nerds" / "richtlijnen.md"

FRONT_MATTER = re.compile(r"\A---\n(.*?)\n---\n+", re.DOTALL)
ATTRIBUTE_LIST = re.compile(r"\{:[^}]*\}")
# A Markdown link to another page of the site: a relative path ending in .md.
PAGE_LINK = re.compile(r"\]\((?!https?://|#|mailto:)([^)#\s]*\.md)(#[^)\s]*)?\)")


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
    for _name, (path, generator) in PLATFORMS.items():
        generated = generator(source_data)
        write_json(path, generated)
        print(f"Gegenereerd: {path.relative_to(ROOT_DIR)}")


def check_sync(source_data: dict) -> bool:
    """Check if platform files are in sync with the source."""
    all_synced = True
    for _name, (path, generator) in PLATFORMS.items():
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


def check_version(source_data: dict) -> bool:
    """The plugin shares its version with the project; release-please raises both."""
    with open(PYPROJECT_PATH, "rb") as f:
        project_version = tomllib.load(f)["project"]["version"]
    if source_data.get("version") != project_version:
        print(
            f"FOUT: versie in {SOURCE_PATH.relative_to(ROOT_DIR)} is {source_data.get('version')}, "
            f"in pyproject.toml {project_version}"
        )
        return False
    print(f"OK: versie {project_version} gelijk aan pyproject.toml")
    return True


def site_url() -> str:
    match = re.search(r"^site_url:\s*(\S+)", MKDOCS_PATH.read_text(encoding="utf-8"), re.MULTILINE)
    if not match:
        sys.exit(f"FOUT: geen site_url in {MKDOCS_PATH.relative_to(ROOT_DIR)}")
    return match.group(1).rstrip("/") + "/"


def front_matter(text: str) -> dict[str, str]:
    """The plain `key: value` lines of the front matter; that is all this needs."""
    match = FRONT_MATTER.match(text)
    fields = {}
    for line in match.group(1).splitlines() if match else []:
        key, separator, value = line.partition(":")
        if separator and not line.startswith((" ", "-")):
            fields[key.strip()] = value.strip().strip("\"'")
    return fields


def skill_text(source: Path, guideline: str) -> str:
    """
    The guideline as a skill reads it: without the front matter and the
    attribute lists that only MkDocs understands, and with links that work
    from inside the skill folder.
    """
    base = site_url()

    def relink(match: re.Match) -> str:
        target = (source.parent / match.group(1)).resolve().relative_to(GUIDELINES_DIR)
        anchor = match.group(2) or ""
        if target.parent.name == guideline and target.name in SKILL_FILES:
            return f"]({SKILL_FILES[target.name]}{anchor})"
        page = target.parent.as_posix() if target.name == "index.md" else target.with_suffix("").as_posix()
        return f"]({base}richtlijnen/{page}/{anchor})"

    body = FRONT_MATTER.sub("", source.read_text(encoding="utf-8"), count=1)
    body = PAGE_LINK.sub(relink, ATTRIBUTE_LIST.sub("", body))
    origin = source.relative_to(ROOT_DIR).as_posix()
    return f"<!-- Gegenereerd uit {origin}. Wijzig dat bestand en draai: python scripts/generate_plugin.py -->\n\n{body}"


def overview_text() -> str:
    """The list of guidelines for the skill `nerds`, from each guideline's front matter."""
    lines = [
        "<!-- Gegenereerd uit de front matter in docs/richtlijnen/. "
        "Wijzig die bestanden en draai: python scripts/generate_plugin.py -->",
        "",
        "# De richtlijnen van de NeRDS",
        "",
    ]
    for skill, guideline in SKILL_GUIDELINES.items():
        fields = front_matter((GUIDELINES_DIR / guideline / "index.md").read_text(encoding="utf-8"))
        lines += [f"## {fields['title']}", "", fields["summary"], "", f"Skill: `/{skill}`", ""]
    return "\n".join(lines)


def skill_files() -> dict[Path, str]:
    """Every generated file under skills/, with the content it should have."""
    files = {OVERVIEW_PATH: overview_text()}
    for skill, guideline in SKILL_GUIDELINES.items():
        for source_name, skill_name in SKILL_FILES.items():
            source = GUIDELINES_DIR / guideline / source_name
            if source.exists():
                files[SKILLS_DIR / skill / skill_name] = skill_text(source, guideline)
    return files


def generate_skills() -> None:
    for path, content in skill_files().items():
        if path.is_symlink():
            path.unlink()
        path.write_text(content, encoding="utf-8")
        print(f"Gegenereerd: {path.relative_to(ROOT_DIR)}")


def check_skills() -> bool:
    ok = True
    for path in sorted(SKILLS_DIR.rglob("*")):
        if path.is_symlink():
            print(f"FOUT: {path.relative_to(ROOT_DIR)} is een symlink")
            ok = False
    for path, content in skill_files().items():
        if path.is_symlink() or not path.is_file() or path.read_text(encoding="utf-8") != content:
            print(f"FOUT: {path.relative_to(ROOT_DIR)} loopt niet gelijk met docs/richtlijnen")
            ok = False
    if ok:
        print("OK: de richtlijnen in skills/ lopen gelijk met docs/richtlijnen")
    return ok


def main() -> None:
    if not SOURCE_PATH.exists():
        print(f"FOUT: {SOURCE_PATH} niet gevonden")
        sys.exit(1)

    source_data = load_source()

    if "--check" in sys.argv:
        synced = check_sync(source_data)
        same_version = check_version(source_data)
        skills_ok = check_skills()
        if not synced or not skills_ok:
            print("\nNiet in sync. Draai: python scripts/generate_plugin.py")
        if not same_version:
            print("\nHet versienummer wijzig je niet met de hand: release-please doet dat in de release-PR.")
        if synced and same_version and skills_ok:
            print("\nAlle platform-bestanden en skills zijn in sync")
            sys.exit(0)
        sys.exit(1)
    else:
        generate_all(source_data)
        generate_skills()
        print("\nAlle platform-bestanden en skills gegenereerd")


if __name__ == "__main__":
    main()
