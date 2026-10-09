#!/usr/bin/env python3
"""
Check the built site against the Content-Security-Policy the web server sends.

    check_csp.py <site_dir>

The policy is in deploy/security-headers.conf. A browser enforces it silently:
an image from another host, an embedded video or an inline script works with
`mkdocs serve` and leaves an empty spot on the live site. This check reads the
same policy and reports everything in the HTML the browser would block.
"""

import re
import sys
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlsplit

REPO_ROOT = Path(__file__).resolve().parents[1]
HEADERS = REPO_ROOT / "deploy" / "security-headers.conf"
POLICY = re.compile(r'add_header\s+Content-Security-Policy\s+"([^"]+)"')

# Element and attribute -> the directive that governs what it loads.
LOADS = {
    ("img", "src"): "img-src",
    ("script", "src"): "script-src",
    ("iframe", "src"): "frame-src",
    ("frame", "src"): "frame-src",
    ("video", "src"): "media-src",
    ("audio", "src"): "media-src",
    ("source", "src"): "media-src",
    ("track", "src"): "media-src",
    ("embed", "src"): "object-src",
    ("object", "data"): "object-src",
}


def read_policy() -> dict[str, list[str]]:
    match = POLICY.search(HEADERS.read_text(encoding="utf-8"))
    if not match:
        sys.exit(f"No Content-Security-Policy found in {HEADERS}")
    policy = {}
    for directive in match.group(1).split(";"):
        name, *sources = directive.split()
        policy[name] = sources
    return policy


def allowed(url: str, sources: list[str]) -> bool:
    parts = urlsplit(url)
    if parts.scheme in ("http", "https") or url.startswith("//"):
        origin = f"{parts.scheme or 'https'}://{parts.netloc}"
        return origin in sources
    if parts.scheme:
        return f"{parts.scheme}:" in sources
    return "'self'" in sources


class Page(HTMLParser):
    def __init__(self, policy: dict[str, list[str]]) -> None:
        super().__init__(convert_charrefs=True)
        self.policy = policy
        self.problems: list[str] = []
        self.inline_script = False

    def sources(self, directive: str) -> list[str]:
        return self.policy.get(directive, self.policy.get("default-src", []))

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        values = {name: (value or "") for name, value in attrs}
        for (element, attribute), directive in LOADS.items():
            url = values.get(attribute)
            if tag == element and url and not allowed(url, self.sources(directive)):
                self.problems.append(f"<{tag}> loads {url}, which {directive} does not allow")
        if tag == "link" and "stylesheet" in values.get("rel", "") and values.get("href"):
            if not allowed(values["href"], self.sources("style-src")):
                self.problems.append(f"stylesheet {values['href']} is not allowed by style-src")
        if "'unsafe-inline'" not in self.sources("script-src"):
            self.inline_script = tag == "script" and "src" not in values
            for name in values:
                if name.startswith("on"):
                    self.problems.append(f"<{tag}> has an inline {name} handler, which script-src blocks")

    def handle_endtag(self, tag: str) -> None:
        if tag == "script":
            self.inline_script = False

    def handle_data(self, data: str) -> None:
        if self.inline_script and data.strip():
            self.problems.append("inline <script>, which script-src blocks")
            self.inline_script = False


def main() -> int:
    if len(sys.argv) != 2:
        print(__doc__)
        return 2
    site_dir = Path(sys.argv[1])
    policy = read_policy()
    failures = 0
    for path in sorted(site_dir.rglob("*.html")):
        page = Page(policy)
        page.feed(path.read_text(encoding="utf-8"))
        for problem in dict.fromkeys(page.problems):
            print(f"{path.relative_to(site_dir)}: {problem}")
            failures += 1
    if failures:
        print(f"\ncsp: {failures} thing(s) the browser would block.")
        print(f"Host the file on the site itself, or allow its origin in {HEADERS.relative_to(REPO_ROOT)}.")
        return 1
    print("csp: ok")
    return 0


if __name__ == "__main__":
    sys.exit(main())
