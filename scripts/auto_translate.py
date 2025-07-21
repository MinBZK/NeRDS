#!/usr/bin/env python3
"""
Auto-translate Dutch markdown files to English
Creates .en.md files for all Dutch content using privacy-safe, open-source solutions
"""

import os
import re
import subprocess
import sys
import time
from pathlib import Path
from typing import Dict, List
import logging

# Configure logging
logging.basicConfig(level=logging.INFO, format='%(message)s')
logger = logging.getLogger(__name__)

class TranslationConfig:
    MAX_CHUNK_LENGTH = 512
    TRANSLATION_DELAY = 0.1
    PRESERVE_EXISTING = True

class MarkdownTranslator:
    def __init__(self):
        """Initialize translator with Argos Translate (fully offline)"""
        self.docs_dir = Path("docs")
        self.translated_files = []
        self.translator = None

        # Patterns to preserve during translation (HTML first to avoid conflicts)
        self.preserve_patterns = [
            # HTML elements (most specific first)
            r'(<div[^>]*>.*?</div>)',
            r'(<span[^>]*>.*?</span>)',
            r'(<button[^>]*>.*?</button>)',
            r'(<a[^>]*>.*?</a>)',
            r'(<h[1-6][^>]*>.*?</h[1-6]>)',
            r'(<p[^>]*>.*?</p>)',
            r'(<[^>]*/>)',  # Self-closing tags
            # Markdown elements
            r'(\{[^}]*\})',  # Jinja2 variables
            r'(\[[^\]]*\]\([^)]*\))',  # Markdown links
            r'(```[^`]*```)',  # Code blocks
            r'(`[^`]*`)',  # Inline code
            r'(---[^-]*---)',  # Front matter
            r'(:material-[^:]*:)',  # Material icons
            r'(!\[[^\]]*\]\([^)]*\))',  # Images
        ]

        self._initialize_translator()

    def _initialize_translator(self):
        """Initialize Argos Translate (fully offline)"""
        self._init_argos()

    def _install_package(self, package: str):
        """Safely install Python package"""
        try:
            subprocess.check_call([sys.executable, "-m", "pip", "install", package])
        except subprocess.CalledProcessError as e:
            raise RuntimeError(f"Failed to install {package}: {e}")

    def _init_argos(self):
        """Initialize Argos Translate (offline)"""
        try:
            import argostranslate.package
            import argostranslate.translate

            # Check if Dutch-English model exists
            installed = argostranslate.package.get_installed_packages()
            if not any(pkg.from_code == "nl" and pkg.to_code == "en" for pkg in installed):
                logger.info("Downloading Dutch-English translation model...")
                available = argostranslate.package.get_available_packages()
                package = next(pkg for pkg in available if pkg.from_code == "nl" and pkg.to_code == "en")
                argostranslate.package.install_from_path(package.download())
                logger.info("✓ Model downloaded successfully")

            self.translator = argostranslate.translate
            logger.info("✓ Argos Translate initialized (fully offline)")

        except ImportError:
            logger.info("Installing Argos Translate...")
            self._install_package("argostranslate")
            self._init_argos()


    def _preserve_elements(self, text: str) -> tuple[str, Dict[str, str]]:
        """Replace markdown/HTML elements with placeholders"""
        replacements = {}

        for i, pattern in enumerate(self.preserve_patterns):
            matches = list(re.finditer(pattern, text, re.DOTALL | re.IGNORECASE))
            # Process matches in reverse order to maintain positions
            for j, match in enumerate(reversed(matches)):
                placeholder = f"__PRESERVE_{i}_{j}__"
                replacements[placeholder] = match.group(1)
                start, end = match.span(1)
                text = text[:start] + placeholder + text[end:]

        return text, replacements

    def _restore_elements(self, text: str, replacements: Dict[str, str]) -> str:
        """Restore preserved elements and warn about unrestored placeholders"""
        for placeholder, original in replacements.items():
            text = text.replace(placeholder, original)

        # Check for unrestored placeholders
        remaining = re.findall(r'__PRESERVE_\d+_\d+__', text)
        if remaining:
            logger.warning(f"⚠️  Unrestored placeholders: {remaining}")

        return text

    def translate_text(self, text: str) -> str:
        """Translate text using Argos Translate"""
        if not text.strip():
            return text

        try:
            return self.translator.translate(text, "nl", "en")
        except Exception as e:
            logger.error(f"Translation failed: {e}")
            return text  # Return original on failure


    def _process_front_matter(self, front_matter: str) -> str:
        """Translate front matter values while preserving structure"""
        if not front_matter:
            return front_matter

        lines = []
        for line in front_matter.strip().split('\n'):
            if ':' in line and not line.strip().startswith('#'):
                try:
                    key, value = line.split(':', 1)
                    value = value.strip()
                    # Only translate unquoted values
                    if value and not (value.startswith('"') or value.startswith("'")):
                        translated_value = self.translate_text(value)
                        lines.append(f"{key}: {translated_value}")
                    else:
                        lines.append(line)
                except Exception:
                    lines.append(line)
            else:
                lines.append(line)

        return '\n'.join(lines)

    def process_file(self, file_path: Path) -> str:
        """Process a single markdown file"""
        logger.info(f"Processing {file_path}...")

        if not file_path.exists():
            raise FileNotFoundError(f"File not found: {file_path}")

        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()

        # Parse front matter using regex
        front_matter_match = re.match(r'^---\s*\n(.*?)\n---\s*\n(.*)$', content, re.DOTALL)

        if front_matter_match:
            front_matter, body = front_matter_match.groups()
            translated_front_matter = self._process_front_matter(front_matter)
            translated_body = self._process_body(body)
            return f"---\n{translated_front_matter}\n---\n{translated_body}"
        else:
            return self._process_body(content)

    def _process_body(self, body: str) -> str:
        """Process and translate markdown body while preserving indentation"""
        # Preserve elements
        body_with_placeholders, replacements = self._preserve_elements(body)

        # Split into paragraphs but preserve empty lines
        paragraphs = body_with_placeholders.split('\n\n')
        translated_paragraphs = []

        for paragraph in paragraphs:
            if paragraph.strip():
                time.sleep(TranslationConfig.TRANSLATION_DELAY)
                # Process line by line to preserve indentation
                translated_paragraph = self._translate_paragraph_preserve_indentation(paragraph)
                translated_paragraphs.append(translated_paragraph)
            else:
                translated_paragraphs.append(paragraph)

        translated_body = '\n\n'.join(translated_paragraphs)

        # Restore preserved elements
        return self._restore_elements(translated_body, replacements)

    def _translate_paragraph_preserve_indentation(self, paragraph: str) -> str:
        """Translate paragraph while preserving exact indentation"""
        lines = paragraph.split('\n')
        translated_lines = []

        for line in lines:
            if line.strip():
                # Extract indentation (spaces and tabs)
                indentation = len(line) - len(line.lstrip())
                indent_chars = line[:indentation]
                content = line[indentation:]

                # Translate only the content, preserve indentation
                translated_content = self.translate_text(content)
                translated_lines.append(indent_chars + translated_content)
            else:
                # Preserve empty lines exactly
                translated_lines.append(line)

        return '\n'.join(translated_lines)

    def find_files_to_translate(self) -> List[Path]:
        """Find Dutch markdown files that need translation"""
        files = []
        for md_file in self.docs_dir.rglob("*.md"):
            if md_file.name.endswith('.en.md'):
                continue

            english_file = md_file.with_suffix('.en.md')
            if english_file.exists() and TranslationConfig.PRESERVE_EXISTING:
                logger.info(f"English version exists: {md_file}")
                continue

            files.append(md_file)

        return files

    def translate_all(self):
        """Translate all Dutch markdown files"""
        files = self.find_files_to_translate()
        logger.info(f"Found {len(files)} files to translate")

        for file_path in files:
            try:
                translated_content = self.process_file(file_path)
                english_file = file_path.with_suffix('.en.md')

                with open(english_file, 'w', encoding='utf-8') as f:
                    f.write(translated_content)

                logger.info(f"✓ Created {english_file}")
                self.translated_files.append(english_file)

            except Exception as e:
                logger.error(f"✗ Error translating {file_path}: {e}")

        logger.info(f"Translation complete! Created {len(self.translated_files)} files.")

def main():
    """Main function"""
    logger.info("NeRDS Auto-Translator (Privacy-Safe)")
    logger.info("=" * 40)
    logger.info("🔒 Using Argos Translate (fully offline)")

    try:
        translator = MarkdownTranslator()
        translator.translate_all()
    except Exception as e:
        logger.error(f"Translation failed: {e}")
        return 1

    return 0

if __name__ == "__main__":
    sys.exit(main())
