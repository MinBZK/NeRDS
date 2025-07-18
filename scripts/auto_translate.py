#!/usr/bin/env python3
"""
Auto-translate Dutch markdown files to English
Creates .en.md files for all Dutch content using privacy-safe, open-source solutions
"""

import os
import re
import json
from pathlib import Path
from typing import Dict, List, Optional
import time

class MarkdownTranslator:
    def __init__(self, translation_method: str = "argos"):
        """
        Initialize translator with privacy-safe methods

        Args:
            translation_method: 'argos' (offline), 'transformers' (local AI), or 'libretranslate' (self-hosted)
        """
        self.translation_method = translation_method
        self.docs_dir = Path("docs")
        self.translated_files = []

        # Initialize translation engine
        self.translator = None
        self._initialize_translator()

        # Patterns to preserve during translation
        self.preserve_patterns = [
            r'(\{[^}]*\})',  # Jinja2 variables
            r'(\[[^\]]*\]\([^)]*\))',  # Markdown links
            r'(```[^`]*```)',  # Code blocks
            r'(`[^`]*`)',  # Inline code
            r'(---[^-]*---)',  # Front matter
            r'(:material-[^:]*:)',  # Material icons
            r'(!\[[^\]]*\]\([^)]*\))',  # Images
        ]

    def _initialize_translator(self):
        """Initialize the selected translation method"""
        if self.translation_method == "argos":
            self._initialize_argos()
        elif self.translation_method == "transformers":
            self._initialize_transformers()
        elif self.translation_method == "libretranslate":
            self._initialize_libretranslate()
        else:
            raise ValueError(f"Unknown translation method: {self.translation_method}")

    def _initialize_argos(self):
        """Initialize Argos Translate (offline)"""
        try:
            import argostranslate.package
            import argostranslate.translate

            # Download Dutch-English model if not present
            from_code = "nl"
            to_code = "en"

            # Check if package is installed
            installed_packages = argostranslate.package.get_installed_packages()
            package_exists = any(
                pkg.from_code == from_code and pkg.to_code == to_code
                for pkg in installed_packages
            )

            if not package_exists:
                print("Downloading Dutch-English translation model...")
                available_packages = argostranslate.package.get_available_packages()
                package_to_install = next(
                    pkg for pkg in available_packages
                    if pkg.from_code == from_code and pkg.to_code == to_code
                )
                argostranslate.package.install_from_path(package_to_install.download())
                print("✓ Model downloaded successfully")

            self.translator = argostranslate.translate
            print("✓ Argos Translate initialized (fully offline)")

        except ImportError:
            print("❌ Argos Translate not found. Installing...")
            os.system("pip install argostranslate")
            self._initialize_argos()

    def _initialize_transformers(self):
        """Initialize Transformers with Helsinki-NLP model"""
        try:
            from transformers import MarianMTModel, MarianTokenizer

            model_name = "Helsinki-NLP/opus-mt-nl-en"
            print(f"Loading model: {model_name}")

            self.tokenizer = MarianTokenizer.from_pretrained(model_name)
            self.model = MarianMTModel.from_pretrained(model_name)
            print("✓ Transformers model loaded (fully local)")

        except ImportError:
            print("❌ Transformers not found. Installing...")
            os.system("pip install transformers torch sentencepiece")
            self._initialize_transformers()

    def _initialize_libretranslate(self):
        """Initialize LibreTranslate (requires self-hosted instance)"""
        import requests

        # Check if LIBRETRANSLATE_URL is set, otherwise use public instance
        self.libretranslate_url = os.environ.get("LIBRETRANSLATE_URL", "https://libretranslate.com/translate")

        print(f"✓ LibreTranslate configured: {self.libretranslate_url}")
        print("⚠️  Note: For maximum privacy, set LIBRETRANSLATE_URL to your own instance")

    def preserve_markdown_elements(self, text: str) -> tuple[str, Dict[str, str]]:
        """
        Replace markdown elements with placeholders to preserve them during translation

        Returns:
            tuple: (text_with_placeholders, replacement_dict)
        """
        replacements = {}
        placeholder_counter = 0

        for pattern in self.preserve_patterns:
            matches = re.finditer(pattern, text, re.DOTALL)
            for match in matches:
                placeholder = f"__PRESERVE_{placeholder_counter}__"
                replacements[placeholder] = match.group(1)
                text = text.replace(match.group(1), placeholder)
                placeholder_counter += 1

        return text, replacements

    def restore_markdown_elements(self, text: str, replacements: Dict[str, str]) -> str:
        """Restore preserved markdown elements"""
        for placeholder, original in replacements.items():
            text = text.replace(placeholder, original)
        return text

    def translate_text_argos(self, text: str) -> str:
        """Translate text using Argos Translate (fully offline)"""
        return self.translator.translate(text, "nl", "en")

    def translate_text_transformers(self, text: str) -> str:
        """Translate text using Transformers (local AI model)"""
        # Split long text into chunks to avoid memory issues
        max_length = 512
        sentences = text.split('. ')

        translated_sentences = []
        current_chunk = ""

        for sentence in sentences:
            if len(current_chunk + sentence) < max_length:
                current_chunk += sentence + ". "
            else:
                if current_chunk:
                    translated_sentences.append(self._translate_chunk(current_chunk.strip()))
                current_chunk = sentence + ". "

        if current_chunk:
            translated_sentences.append(self._translate_chunk(current_chunk.strip()))

        return " ".join(translated_sentences)

    def _translate_chunk(self, text: str) -> str:
        """Translate a single chunk with transformers"""
        inputs = self.tokenizer(text, return_tensors="pt", padding=True, truncation=True, max_length=512)
        translated = self.model.generate(**inputs)
        return self.tokenizer.decode(translated[0], skip_special_tokens=True)

    def translate_text_libretranslate(self, text: str) -> str:
        """Translate text using LibreTranslate"""
        import requests

        data = {
            'q': text,
            'source': 'nl',
            'target': 'en',
            'format': 'text'
        }

        response = requests.post(self.libretranslate_url, json=data)
        response.raise_for_status()

        result = response.json()
        return result['translatedText']

    def translate_text(self, text: str) -> str:
        """Translate text using the configured method"""
        if self.translation_method == "argos":
            return self.translate_text_argos(text)
        elif self.translation_method == "transformers":
            return self.translate_text_transformers(text)
        elif self.translation_method == "libretranslate":
            return self.translate_text_libretranslate(text)
        else:
            raise ValueError(f"Unknown translation method: {self.translation_method}")

    def process_markdown_file(self, file_path: Path) -> str:
        """
        Process a markdown file and translate its content

        Args:
            file_path: Path to the markdown file

        Returns:
            Translated markdown content
        """
        print(f"Processing {file_path}...")

        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()

        # Split front matter and content
        parts = content.split('---', 2)
        if len(parts) >= 3:
            front_matter = parts[1]
            body = parts[2]
        else:
            front_matter = ""
            body = content

        # Translate front matter
        translated_front_matter = front_matter
        if front_matter:
            # Preserve structure but translate values
            front_matter_lines = front_matter.strip().split('\n')
            translated_lines = []

            for line in front_matter_lines:
                if ':' in line and not line.strip().startswith('#'):
                    key, value = line.split(':', 1)
                    value = value.strip()
                    if value and not value.startswith('"') and not value.startswith("'"):
                        # Only translate if it's not already quoted (likely a string)
                        try:
                            translated_value = self.translate_text(value)
                            translated_lines.append(f"{key}: {translated_value}")
                        except:
                            translated_lines.append(line)
                    else:
                        translated_lines.append(line)
                else:
                    translated_lines.append(line)

            translated_front_matter = '\n'.join(translated_lines)

        # Process body in chunks to handle large files
        translated_body = self.translate_markdown_body(body)

        # Reconstruct the file
        if front_matter:
            result = f"---\n{translated_front_matter}\n---\n{translated_body}"
        else:
            result = translated_body

        return result

    def translate_markdown_body(self, body: str) -> str:
        """Translate markdown body content"""
        # Preserve markdown elements
        body_with_placeholders, replacements = self.preserve_markdown_elements(body)

        # Split into paragraphs to translate in chunks
        paragraphs = body_with_placeholders.split('\n\n')
        translated_paragraphs = []

        for paragraph in paragraphs:
            if paragraph.strip():
                try:
                    # Add small delay to avoid rate limiting
                    time.sleep(0.1)
                    translated_paragraph = self.translate_text(paragraph)
                    translated_paragraphs.append(translated_paragraph)
                except Exception as e:
                    print(f"Warning: Could not translate paragraph: {e}")
                    translated_paragraphs.append(paragraph)
            else:
                translated_paragraphs.append(paragraph)

        translated_body = '\n\n'.join(translated_paragraphs)

        # Restore preserved elements
        translated_body = self.restore_markdown_elements(translated_body, replacements)

        return translated_body

    def find_dutch_files(self) -> List[Path]:
        """Find all Dutch markdown files that need translation"""
        dutch_files = []

        for md_file in self.docs_dir.rglob("*.md"):
            # Skip already translated files
            if md_file.name.endswith('.en.md'):
                continue

            # Check if English version already exists
            english_file = md_file.with_suffix('.en.md')
            if english_file.exists():
                print(f"English version already exists for {md_file}")
                continue

            dutch_files.append(md_file)

        return dutch_files

    def translate_all_files(self):
        """Translate all Dutch markdown files"""
        dutch_files = self.find_dutch_files()

        print(f"Found {len(dutch_files)} files to translate")

        for file_path in dutch_files:
            try:
                translated_content = self.process_markdown_file(file_path)

                # Create English version
                english_file = file_path.with_suffix('.en.md')
                with open(english_file, 'w', encoding='utf-8') as f:
                    f.write(translated_content)

                print(f"✓ Created {english_file}")
                self.translated_files.append(english_file)

            except Exception as e:
                print(f"✗ Error translating {file_path}: {e}")

        print(f"\nTranslation complete! Created {len(self.translated_files)} English files.")

def main():
    """Main function"""
    print("NeRDS Auto-Translator (Privacy-Safe)")
    print("=====================================")

    # Determine which translation method to use
    method = os.environ.get("TRANSLATION_METHOD", "argos").lower()

    if method not in ["argos", "transformers", "libretranslate"]:
        print(f"❌ Unknown method: {method}")
        print("Available methods: argos, transformers, libretranslate")
        return

    print(f"🔒 Using {method} translation method")

    if method == "argos":
        print("✓ Fully offline translation - no data leaves your system")
    elif method == "transformers":
        print("✓ Local AI model - no external API calls")
    elif method == "libretranslate":
        print("✓ Open-source LibreTranslate")
        if "LIBRETRANSLATE_URL" in os.environ:
            print("✓ Using your own LibreTranslate instance")
        else:
            print("⚠️  Using public instance - consider self-hosting for maximum privacy")

    translator = MarkdownTranslator(translation_method=method)
    translator.translate_all_files()

if __name__ == "__main__":
    main()
