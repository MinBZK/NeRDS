#!/usr/bin/env python3
"""
Accessibility gate: build the site, serve it, and run pa11y-ci on every page.

    check_a11y.py

Two engines check each page against WCAG 2.1 AA: HTML_CodeSniffer and axe.
A finding in either fails the gate. The page list comes from the build, so a
new page is covered without anyone adding it to a list.

Needs Node, and the tools in tools/a11y installed (`npm ci` there).
"""

import functools
import http.server
import json
import os
import subprocess
import sys
import tempfile
import threading
from pathlib import Path
from urllib.parse import urlparse

import yaml

REPO_ROOT = Path(__file__).resolve().parents[1]
TOOLS = REPO_ROOT / "tools" / "a11y"
# Browsers puppeteer may use when it has not downloaded its own.
SYSTEM_BROWSERS = (
    "/usr/bin/google-chrome",
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
)


class Loader(yaml.SafeLoader):
    """mkdocs.yml carries !!python/name tags that a safe loader does not know."""


Loader.add_multi_constructor("tag:yaml.org,2002:python/name:", lambda loader, suffix, node: None)


def base_path() -> str:
    """The path the site is served under, from site_url ('/NeRDS')."""
    config = yaml.load((REPO_ROOT / "mkdocs.yml").read_text(encoding="utf-8"), Loader=Loader)
    return urlparse(config.get("site_url", "")).path.rstrip("/")


def routes(site_dir: Path) -> list[str]:
    found = []
    for html_file in sorted(site_dir.rglob("*.html")):
        relative = html_file.relative_to(site_dir).as_posix()
        found.append(relative.removesuffix("index.html"))
    return found


def pa11y_config(urls: list[str]) -> dict:
    defaults = {
        "standard": "WCAG2AA",
        "runners": ["htmlcs", "axe"],
        "timeout": 30000,
        "wait": 500,
        "chromeLaunchConfig": {"args": ["--no-sandbox"]},
        # axe reports what it could not measure as "needs review", and pa11y
        # turns that into an error. For color contrast that happens on content
        # slotted into a component, where axe cannot sample the background
        # through the shadow boundary. Those stay visible as warnings.
        "levelCapWhenNeedsReview": "warning",
        # HTML_CodeSniffer looks for a native submit button in the form. The
        # submit button of an nldd-form is an nldd-button with type="submit":
        # form-associated, keyboard operable, and inside a shadow root where
        # this engine does not look.
        "ignore": ["WCAG2AA.Principle3.Guideline3_2.3_2_2.H32.2"],
    }
    browser = os.environ.get("PUPPETEER_EXECUTABLE_PATH") or next(
        (path for path in SYSTEM_BROWSERS if Path(path).exists()), None
    )
    if browser:
        defaults["chromeLaunchConfig"]["executablePath"] = browser
    return {"defaults": defaults, "urls": urls}


def serve(directory: Path) -> http.server.ThreadingHTTPServer:
    class QuietHandler(http.server.SimpleHTTPRequestHandler):
        def log_message(self, *arguments):
            pass

    handler = functools.partial(QuietHandler, directory=str(directory))
    server = http.server.ThreadingHTTPServer(("127.0.0.1", 0), handler)
    threading.Thread(target=server.serve_forever, daemon=True).start()
    return server


def main() -> int:
    if not (TOOLS / "node_modules").is_dir():
        print(f"Install the tools first: (cd {TOOLS.relative_to(REPO_ROOT)} && npm ci)")
        return 2

    with tempfile.TemporaryDirectory() as temporary:
        # The site links to its 404 page and assets under the base path, so it
        # is served from that same path.
        root = Path(temporary)
        site_dir = root / base_path().lstrip("/") if base_path() else root / "site"
        build = subprocess.run(
            [sys.executable, "-m", "mkdocs", "build", "--quiet", "--site-dir", str(site_dir)], cwd=REPO_ROOT
        )
        if build.returncode != 0:
            print("The site does not build.")
            return 1

        server = serve(root if base_path() else site_dir)
        origin = f"http://127.0.0.1:{server.server_address[1]}{base_path()}"
        urls = [f"{origin}/{route}" for route in routes(site_dir)]
        config_file = root / "pa11yci.json"
        config_file.write_text(json.dumps(pa11y_config(urls), indent=2), encoding="utf-8")

        print(f"Checking {len(urls)} pages with htmlcs and axe (WCAG 2.1 AA).")
        result = subprocess.run(["npx", "--no", "--", "pa11y-ci", "--config", str(config_file)], cwd=TOOLS)
        server.shutdown()
        return result.returncode


if __name__ == "__main__":
    sys.exit(main())
