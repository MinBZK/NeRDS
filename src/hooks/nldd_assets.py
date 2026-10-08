"""
MkDocs hook that serves the NLDD Designsysteem from the built site.

The package version and its integrity hash are pinned in
nldd-design-system.json, so an upgrade is a visible commit. The tarball is
downloaded once into .cache/nldd/<version>/ and verified before use.
"""

import base64
import hashlib
import io
import json
import re
import shutil
import tarfile
import urllib.request
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parents[2]
PIN_FILE = REPO_ROOT / "nldd-design-system.json"
CACHE_ROOT = REPO_ROOT / ".cache" / "nldd"
# Paths inside the tarball that the site or the checks need.
WANTED = ("package/dist/nldd.min.js", "package/dist/css/", "package/dist/fonts/",
          "package/dist/favicon.svg", "package/dist/touch-icon.png",
          "package/custom-elements.json", "package/dist/components/content/icon/icon-registry.js",
          "package/dist/components/content/icon/icon-aliases.js")
IMPORT = re.compile(r'@import\s+"\./([^"]+)";\n?')


def load_pin() -> dict:
    return json.loads(PIN_FILE.read_text(encoding="utf-8"))


def package_dir() -> Path:
    """Return the extracted package directory, downloading it when needed."""
    pin = load_pin()
    target = CACHE_ROOT / pin["version"]
    if (target / ".complete").exists():
        return target

    name = pin["package"]
    url = f"https://registry.npmjs.org/{name}/-/{name.split('/')[-1]}-{pin['version']}.tgz"
    with urllib.request.urlopen(url, timeout=60) as response:
        tarball = response.read()

    algorithm, expected = pin["integrity"].split("-", 1)
    actual = base64.b64encode(hashlib.new(algorithm, tarball).digest()).decode()
    if actual != expected:
        raise RuntimeError(f"Integrity mismatch for {name}@{pin['version']}")

    target.mkdir(parents=True, exist_ok=True)
    with tarfile.open(fileobj=io.BytesIO(tarball), mode="r:gz") as archive:
        for member in archive.getmembers():
            if not member.isfile() or not member.name.startswith(WANTED):
                continue
            relative = member.name.removeprefix("package/").removeprefix("dist/")
            destination = target / relative
            destination.parent.mkdir(parents=True, exist_ok=True)
            destination.write_bytes(archive.extractfile(member).read())
    (target / ".complete").touch()
    return target


def bundle_stylesheet(css_dir: Path, entry: str = "global.css") -> str:
    """Inline the @import chain of the package stylesheet into one file."""
    seen: set[str] = set()

    def inline(name: str) -> str:
        if name in seen:
            return ""
        seen.add(name)
        css = (css_dir / name).read_text(encoding="utf-8")
        return IMPORT.sub(lambda match: inline(match.group(1)), css)

    # The bundle sits one level above css/, next to fonts/.
    return inline(entry).replace("url('../fonts/", "url('fonts/")


def on_config(config):
    package_dir()
    return config


def on_post_build(config):
    source = package_dir()
    target = Path(config["site_dir"]) / "assets" / "nldd"
    target.mkdir(parents=True, exist_ok=True)

    (target / "nldd.css").write_text(bundle_stylesheet(source / "css"), encoding="utf-8")
    shutil.copy2(source / "nldd.min.js", target / "nldd.min.js")
    shutil.copy2(source / "favicon.svg", target / "favicon.svg")
    shutil.copy2(source / "touch-icon.png", target / "touch-icon.png")
    shutil.copytree(source / "fonts", target / "fonts", dirs_exist_ok=True)
