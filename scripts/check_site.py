#!/usr/bin/env python3
"""
Build the site and run every check on the result.

    check_site.py            build, then check markup, tokens, classes, the CSP and behavior
    check_site.py --update   build, then record the behavior surface as the new reference

Pre-commit and CI both run this file, so they cannot drift apart.
"""

import subprocess
import sys
import tempfile
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parents[1]
SCRIPTS = REPO_ROOT / "scripts"
SURFACE = SCRIPTS / "behavior-surface.json"


def run(*arguments: str) -> int:
    return subprocess.run([sys.executable, *arguments], cwd=REPO_ROOT).returncode


def main() -> int:
    update = sys.argv[1:] == ["--update"]
    if sys.argv[1:] and not update:
        print(__doc__)
        return 2

    with tempfile.TemporaryDirectory() as site_dir:
        if run("-m", "mkdocs", "build", "--quiet", "--site-dir", site_dir) != 0:
            print("The site does not build.")
            return 1
        if update:
            return run(str(SCRIPTS / "behavior_surface.py"), "snapshot", site_dir, str(SURFACE))
        results = [
            run(str(SCRIPTS / "check_nldd.py"), site_dir),
            run(str(SCRIPTS / "check_csp.py"), site_dir),
            run(str(SCRIPTS / "behavior_surface.py"), "check", site_dir, str(SURFACE)),
        ]
    return 1 if any(results) else 0


if __name__ == "__main__":
    sys.exit(main())
