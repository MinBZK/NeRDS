#!/usr/bin/env python3
"""
Check the headings and titles of the built site.

    check_outline.py <site_dir>

Someone using a screen reader moves through a page by its headings and tells
pages apart by their titles. This check reports what breaks that:

- a heading more than one level below the one before it;
- a heading without text;
- two pages with the same title.

It reads the HTML the build produces, so it also sees the headings a hook or
a template adds, such as the cards under "Direct aan de slag".
"""

import re
import sys
from collections import defaultdict
from html.parser import HTMLParser
from pathlib import Path

HEADING_TAG = re.compile(r"h([1-6])$")


class Page(HTMLParser):
    def __init__(self) -> None:
        super().__init__(convert_charrefs=True)
        self.title = ""
        self.headings: list[tuple[int, str]] = []
        self.in_title = False
        self.open_heading: int | None = None
        self.text: list[str] = []

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        values = {name: (value or "") for name, value in attrs}
        match = HEADING_TAG.match(tag)
        if tag == "title":
            self.in_title = True
        elif match:
            self.open_heading = int(match.group(1))
            self.text = []
        elif tag.startswith("nldd-") and values.get("heading-level", "").isdigit():
            # A component that renders its text as a heading in its shadow root.
            self.headings.append((int(values["heading-level"]), values.get("text", "").strip() or "(slot)"))

    def handle_endtag(self, tag: str) -> None:
        if tag == "title":
            self.in_title = False
        elif HEADING_TAG.match(tag) and self.open_heading is not None:
            self.headings.append((self.open_heading, " ".join("".join(self.text).split())))
            self.open_heading = None

    def handle_data(self, data: str) -> None:
        if self.in_title:
            self.title += data
        elif self.open_heading is not None:
            self.text.append(data)


def main() -> int:
    if len(sys.argv) != 2:
        print(__doc__)
        return 2
    site_dir = Path(sys.argv[1])
    failures = 0
    titles = defaultdict(list)

    for path in sorted(site_dir.rglob("*.html")):
        name = str(path.relative_to(site_dir))
        page = Page()
        page.feed(path.read_text(encoding="utf-8"))
        titles[page.title.strip()].append(name)

        previous = 0
        for level, text in page.headings:
            if not re.search(r"\w", text):
                print(f"{name}: h{level} without text ({text!r})")
                failures += 1
            if level > previous + 1:
                print(f"{name}: h{level} '{text}' follows h{previous}; a level is skipped")
                failures += 1
            previous = level

    for title, pages in titles.items():
        if len(pages) > 1:
            print(f"same title '{title}': {', '.join(pages)}")
            failures += 1

    if failures:
        print(f"\noutline: {failures} problem(s) with headings or titles.")
        return 1
    print("outline: ok")
    return 0


if __name__ == "__main__":
    sys.exit(main())
