#!/usr/bin/env python3
"""
Record what every built page can DO, and fail when something disappears.

The surface of a page is its destinations, the functions its inline handlers
call, its named form controls and the ids scripts can hang on. Tag names,
classes, texts and stylesheets are styling and are ignored on purpose.

    behavior_surface.py snapshot <site_dir> <surface.json>
    behavior_surface.py check    <site_dir> <surface.json>

`check` only fails on what is gone. Something new is new work, something
missing is almost always an accident.
"""

import json
import re
import sys
from html.parser import HTMLParser
from pathlib import Path

# Components that are a form field in their own right.
FIELD_COMPONENTS = {
    "nldd-text-field",
    "nldd-multi-line-text-field",
    "nldd-search-field",
    "nldd-number-field",
    "nldd-checkbox",
    "nldd-checkbox-field",
    "nldd-radio-button-field",
}
NATIVE_FIELDS = {"input", "select", "textarea"}
HANDLER_ATTRIBUTES = {"onclick", "onchange", "oninput", "onsubmit"}
# nldd-form-field creates these ids itself to tie a field to its label.
WIRING_ID_SUFFIXES = ("-label", "-help", "-error")
CALL = re.compile(r"([A-Za-z_$][\w$.]*)\s*\(")


def normalize_url(url: str) -> str:
    url = url.strip()
    url = re.sub(r"\?v=[\w.-]+$", "", url)
    url = re.sub(r"[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}", "<uuid>", url)
    return url


class SurfaceParser(HTMLParser):
    def __init__(self) -> None:
        super().__init__(convert_charrefs=True)
        self.destinations: set[str] = set()
        self.functions: set[str] = set()
        self.controls: set[str] = set()
        self.ids: set[str] = set()
        self.base_url = ""

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        values = {name: (value or "") for name, value in attrs}
        if tag == "html":
            self.base_url = values.get("data-base-url", "")
        for name, value in values.items():
            if not value:
                continue
            if name in ("href", "action") or name.endswith("-href"):
                if tag == "link":
                    continue
                self.destinations.add(normalize_url(value))
            elif name in HANDLER_ATTRIBUTES:
                self.functions.update(CALL.findall(value))
        if tag in NATIVE_FIELDS or tag in FIELD_COMPONENTS:
            if values.get("type") != "hidden" and values.get("name"):
                self.controls.add(values["name"])
        element_id = values.get("id")
        if element_id and not element_id.endswith(WIRING_ID_SUFFIXES):
            if not element_id.startswith("__"):
                self.ids.add(element_id)

    def relative_destinations(self) -> set[str]:
        """
        The 404 page links with absolute paths, which carry the path the site
        is deployed under. A preview deploys under another path, so that
        prefix is not part of what the page can do.
        """
        if not self.base_url.startswith("/"):
            return self.destinations
        prefix = self.base_url.rstrip("/")
        return {url.removeprefix(prefix) if url.startswith(prefix + "/") else url for url in self.destinations}

    def surface(self) -> dict[str, list[str]]:
        return {
            "destinations": sorted(self.relative_destinations()),
            "functions": sorted(self.functions),
            "controls": sorted(self.controls),
            "ids": sorted(self.ids),
        }


def snapshot(site_dir: Path) -> dict[str, dict[str, list[str]]]:
    pages = {}
    for html_file in sorted(site_dir.rglob("*.html")):
        parser = SurfaceParser()
        parser.feed(html_file.read_text(encoding="utf-8"))
        pages[html_file.relative_to(site_dir).as_posix()] = parser.surface()
    return pages


def check(current: dict, recorded: dict) -> list[str]:
    missing = []
    for route, surface in recorded.items():
        if route not in current:
            missing.append(f"{route}: page is gone")
            continue
        for kind, values in surface.items():
            gone = sorted(set(values) - set(current[route].get(kind, [])))
            missing.extend(f"{route}: {kind} gone: {value}" for value in gone)
    return missing


def main() -> int:
    if len(sys.argv) != 4 or sys.argv[1] not in ("snapshot", "check"):
        print(__doc__)
        return 2
    command, site_dir, surface_file = sys.argv[1], Path(sys.argv[2]), Path(sys.argv[3])
    if not site_dir.is_dir():
        print(f"Site directory not found: {site_dir}")
        return 2
    current = snapshot(site_dir)
    if not current:
        print(f"No pages found in {site_dir}")
        return 2
    if command == "snapshot":
        surface_file.parent.mkdir(parents=True, exist_ok=True)
        surface_file.write_text(json.dumps(current, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
        print(f"Recorded the surface of {len(current)} pages in {surface_file}")
        return 0
    missing = check(current, json.loads(surface_file.read_text(encoding="utf-8")))
    for line in missing:
        print(line)
    if missing:
        print(f"\n{len(missing)} parts of the behavior surface disappeared.")
        return 1
    print(f"Behavior surface intact for {len(current)} pages.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
