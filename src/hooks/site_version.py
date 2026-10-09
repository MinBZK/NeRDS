"""
Hook that puts the version of the NeRDS into the pages.

The version is the one in pyproject.toml, which release-please raises with each
release. The build is what `git describe --tags` says about this checkout: equal
to the version on a release, and further along (v0.3.1-4-gabc1234) when main has
moved on since.

Markdown can use two placeholders, `{{ version }}` and `{{ build }}`.

Not named version.py: release-please's Python strategy rewrites files of that
name as if they held a `__version__`.
"""

import os
import subprocess
import tomllib
from pathlib import Path

from mkdocs.config.defaults import MkDocsConfig

REPO_ROOT = Path(__file__).resolve().parents[2]


def read_version() -> str:
    with open(REPO_ROOT / "pyproject.toml", "rb") as file:
        return tomllib.load(file)["project"]["version"]


def read_build(version: str) -> str:
    """
    The deploy workflow passes NERDS_BUILD, the same value it tags the image
    with. Elsewhere git says it, and without git or a tag the version does.
    """
    if os.environ.get("NERDS_BUILD"):
        return os.environ["NERDS_BUILD"]
    try:
        described = subprocess.run(
            ["git", "describe", "--tags"],
            cwd=REPO_ROOT,
            capture_output=True,
            text=True,
            check=True,
        )
    except (OSError, subprocess.CalledProcessError):
        return f"v{version}"
    return described.stdout.strip() or f"v{version}"


def on_config(config: MkDocsConfig) -> MkDocsConfig:
    version = read_version()
    config.extra["version"] = version
    config.extra["build"] = read_build(version)
    return config


def on_page_markdown(markdown: str, config: MkDocsConfig, **kwargs) -> str:
    return markdown.replace("{{ version }}", config.extra["version"]).replace("{{ build }}", config.extra["build"])
