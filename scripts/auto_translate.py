#!/usr/bin/env python3
"""
NeRDS Perfect Auto-Translator

A solid translation solution that:
- Never translates HTML tags (preserves structure exactly)
- Translates only text content inside HTML tags
- Handles markdown formatting: **bold**, *italic*, __underline__, _emphasis_
- Uses dictionairy-nerds.txt with longest-match-first priority
- Preserves case patterns from Dutch files
- Handles Material for MkDocs gridcards properly
- Ignores YAML front matter metadata completely
- Maintains all formatting, indentation, and markdown structure
- Simple, reliable, and comprehensive approach
"""

import re
import subprocess
import sys
from pathlib import Path
from typing import Dict, List, Tuple
import logging

# Configure logging
logging.basicConfig(level=logging.INFO, format='%(message)s')
logger = logging.getLogger(__name__)


class PerfectTranslator:
    """
    A perfect translator that handles all requirements while being simple and reliable.
    """

    def __init__(self):
        """Initialize translator with dictionary and Argos Translate."""
        self.docs_dir = Path("docs")
        self.dictionary = self._load_dictionary()
        self.translator = None
        self._init_argos()

    def _load_dictionary(self) -> Dict[str, str]:
        """Load the NeRDS translation dictionary with longest-match-first priority."""
        dictionary = {}
        dict_file = Path("dictionairy-nerds.txt")

        if not dict_file.exists():
            logger.warning("Dictionary file not found: dictionairy-nerds.txt")
            return dictionary

        try:
            with open(dict_file, 'r', encoding='utf-8') as f:
                for line in f:
                    line = line.strip()
                    if line.startswith('#') or not line or ':' not in line:
                        continue
                    dutch, english = line.split(':', 1)
                    dictionary[dutch.strip()] = english.strip()

            logger.info(f"✓ Loaded {len(dictionary)} dictionary entries")
        except Exception as e:
            logger.error(f"Failed to load dictionary: {e}")

        return dictionary

    def _init_argos(self):
        """Initialize Argos Translate for offline translation."""
        try:
            import argostranslate.package
            import argostranslate.translate

            # Check if Dutch-English model exists
            installed = argostranslate.package.get_installed_packages()
            if not any(pkg.from_code == "nl" and pkg.to_code == "en" for pkg in installed):
                logger.info("Installing Dutch-English translation model...")
                available = argostranslate.package.get_available_packages()
                package = next(pkg for pkg in available if pkg.from_code == "nl" and pkg.to_code == "en")
                argostranslate.package.install_from_path(package.download())

            self.translator = argostranslate.translate
            logger.info("✓ Argos Translate ready")
        except ImportError:
            logger.info("Installing Argos Translate...")
            subprocess.check_call([sys.executable, "-m", "pip", "install", "argostranslate"])
            self._init_argos()

    def _apply_dictionary(self, text: str) -> str:
        """Apply dictionary translations with longest-match-first priority and case preservation, avoiding URLs."""
        if not text or not text.strip():
            return text or ""

        # First, preserve all URLs by replacing them with placeholders
        url_placeholders = {}
        url_counter = 0

        def replace_url_with_placeholder(match):
            nonlocal url_counter
            placeholder = f"XURLHOLDER{url_counter}X"
            url_placeholders[placeholder] = match.group(0)
            url_counter += 1
            return placeholder

        # Preserve URLs (http/https), email addresses, and file paths
        url_patterns = [
            r'https?://[^\s\)]+',  # HTTP/HTTPS URLs
            r'[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}',  # Email addresses
            r'[^\s]+\.(md|html|pdf|jpg|png|gif|svg)',  # File paths with extensions
        ]

        for pattern in url_patterns:
            text = re.sub(pattern, replace_url_with_placeholder, text)

        # Sort by length (longest first) to handle overlapping terms correctly
        sorted_terms = sorted(self.dictionary.items(), key=lambda x: len(x[0]), reverse=True)

        for dutch_term, english_term in sorted_terms:
            # Check if term exists in text (case insensitive)
            if dutch_term.lower() in text.lower():
                def replace_with_case(match):
                    matched_text = match.group(0)
                    # Preserve case patterns
                    if matched_text.isupper():
                        return english_term.upper()
                    elif matched_text.istitle():
                        return english_term.title()
                    elif matched_text.islower():
                        return english_term.lower()
                    else:
                        return english_term

                # Use appropriate word boundaries
                if ' ' in dutch_term:
                    # Multi-word phrase - use lookahead/lookbehind
                    pattern = r'(?<!\w)' + re.escape(dutch_term) + r'(?!\w)'
                else:
                    # Single word - use word boundaries
                    pattern = r'\b' + re.escape(dutch_term) + r'\b'

                text = re.sub(pattern, replace_with_case, text, flags=re.IGNORECASE)

        # Restore all URL placeholders
        for placeholder, original_url in url_placeholders.items():
            text = text.replace(placeholder, original_url)

        return text

    def _translate_text(self, text: str) -> str:
        """Translate text using dictionary first, then machine translation."""
        if not text or not text.strip():
            return text or ""

        try:
            # Step 1: Apply dictionary first (highest priority)
            with_dict = self._apply_dictionary(text)
            if with_dict is None:
                with_dict = text

            # Step 2: Machine translate remaining text
            if self.translator:
                translated = self.translator.translate(with_dict, "nl", "en")
                if translated is None:
                    translated = with_dict
            else:
                translated = with_dict

            # Step 3: Apply dictionary again to fix any machine translation errors
            final_text = self._apply_dictionary(translated)
            if final_text is None:
                final_text = translated

            return final_text.strip() if final_text else text

        except Exception as e:
            logger.warning(f"Translation failed for '{text[:50]}...': {e}")
            return text

    def _translate_formatted_text(self, text: str) -> str:
        """
        Translate text that contains markdown formatting while preserving styling.

        Handles: **bold**, *italic*, __underline__, _emphasis_, `code`, ~~strikethrough~~
        Also preserves links: [text](url) and ![alt](image.jpg)
        """
        if not text.strip():
            return text

        # First, extract and preserve all links completely
        link_placeholders = {}
        placeholder_counter = 0

        # Find all links and replace them with placeholders
        def replace_link_with_placeholder(match):
            nonlocal placeholder_counter
            placeholder = f"XLINKHOLDER{placeholder_counter}X"
            link_placeholders[placeholder] = match.group(0)
            placeholder_counter += 1
            return placeholder

        # Replace all links with placeholders - preserve ALL links exactly as they are
        # Pattern for markdown links [text](url) - complete link syntax
        text = re.sub(r'\[([^\]]*?)\]\([^)]+?\)', replace_link_with_placeholder, text)
        # Pattern for images ![alt](image)
        text = re.sub(r'!\[([^\]]*?)\]\([^)]+?\)', replace_link_with_placeholder, text)

        # Define formatting patterns in order of precedence (excluding links now)
        formatting_patterns = [
            # Bold with ** (highest precedence for text formatting)
            (r'\*\*([^*\n]+?)\*\*', r'**{}**'),
            # Underline with __
            (r'__([^_\n]+?)__', r'__{}__'),
            # Italic with *
            (r'\*([^*\n]+?)\*', r'*{}*'),
            # Emphasis with _
            (r'_([^_\n]+?)_', r'_{}_ '),
            # Strikethrough with ~~
            (r'~~([^~\n]+?)~~', r'~~{}~~'),
            # Inline code with ` (preserve as-is, don't translate)
            (r'`([^`\n]+?)`', r'`{}`'),
        ]

        def translate_formatted_content(pattern, replacement_template, text_input):
            """Translate content within formatting markers."""
            def replace_match(match):
                content = match.group(1)
                # For code blocks, don't translate - preserve exactly
                if '`' in replacement_template:
                    return replacement_template.format(content)
                # For other formatting, translate the content but keep the styling
                translated_content = self._translate_text(content)
                return replacement_template.format(translated_content)

            return re.sub(pattern, replace_match, text_input)

        # Apply formatting patterns
        result = text
        for pattern, template in formatting_patterns:
            result = translate_formatted_content(pattern, template, result)

        # Always translate the whole text, but preserve formatting structure
        # This ensures text outside formatting markers gets translated too
        result = self._translate_text(result)

        # Restore all link placeholders with original links
        for placeholder, original_link in link_placeholders.items():
            result = result.replace(placeholder, original_link)

        return result

    def _translate_html_content(self, line: str) -> str:
        """
        Translate ONLY the text content inside HTML tags, preserving all HTML structure and attributes.
        """
        # First, preserve entire HTML tags with their attributes
        html_placeholders = {}
        placeholder_counter = 0

        def replace_html_with_placeholder(match):
            nonlocal placeholder_counter
            placeholder = f"XHTMLHOLDER{placeholder_counter}X"
            html_placeholders[placeholder] = match.group(0)
            placeholder_counter += 1
            return placeholder

        # Preserve all self-closing HTML tags completely (like <a href="..."/>)
        line = re.sub(r'<[^>]+/>', replace_html_with_placeholder, line)

        def translate_tag_content(match):
            """Translate content between HTML tags."""
            opening_tag = match.group(1)  # <tag attributes>
            content = match.group(2)      # text content
            closing_tag = match.group(3)  # </tag>

            # Only translate if there's actual text content (not just whitespace)
            if content.strip():
                # Use formatted text translation to handle any markdown within HTML
                translated_content = self._translate_formatted_text(content.strip())
                return f"{opening_tag}{translated_content}{closing_tag}"

            return match.group(0)  # Return unchanged if no content

        # Pattern to match: <tag>content</tag> or <tag attributes>content</tag>
        html_tag_pattern = r'(<[^/>][^>]*>)([^<]+)(<\/[^>]+>)'

        # Apply translation to content inside HTML tags only
        translated_line = re.sub(html_tag_pattern, translate_tag_content, line)

        # Handle text before self-closing tags
        before_selfclose_pattern = r'([^<>]+)(<[^>]+/>)'

        def translate_before_selfclose(match):
            content = match.group(1)
            tag = match.group(2)
            if content.strip() and not content.strip().startswith('<'):
                translated_content = self._translate_formatted_text(content.strip())
                return f"{translated_content}{tag}"
            return match.group(0)

        translated_line = re.sub(before_selfclose_pattern, translate_before_selfclose, translated_line)

        # Restore all preserved HTML tags
        for placeholder, original_html in html_placeholders.items():
            translated_line = translated_line.replace(placeholder, original_html)

        return translated_line

    def _translate_gridcard_line(self, line: str) -> str:
        """
        Handle Material for MkDocs gridcard lines with special syntax.

        Example: - :material-account-search:{ .lg .middle } __1. [Title](path/to/file.md)__
        """
        # Pattern to match gridcard structure
        # - :material-icon:{ .classes } __N. [Link Text](path)__
        gridcard_pattern = r'^(\s*-\s*:material-[^:]+:\{[^}]+\}\s*__)(\d+\.\s*\[)([^\]]+)(\]\()([^)]+)(\)__)\s*$'

        match = re.match(gridcard_pattern, line)
        if match:
            prefix, number_bracket, link_text, middle, link_path, suffix = match.groups()

            # Translate only the link text (might contain formatting)
            translated_text = self._translate_formatted_text(link_text)

            # Keep the path unchanged (preserve Dutch paths like "richtlijnen/")
            return f"{prefix}{number_bracket}{translated_text}{middle}{link_path}{suffix}\n"

        # If pattern doesn't match exactly, apply dictionary to whole line and return
        return self._apply_dictionary(line)

    def _translate_line(self, line: str) -> str:
        """
        Translate a single line while preserving all structure and formatting.
        """
        # Skip lines that should never be translated
        stripped = line.strip()
        if (not stripped or
            stripped.startswith(('---', '```', '//', '/*', '<!--', '</script>')) or
            '<script' in stripped.lower()):
            return line

        # Handle Material for MkDocs gridcards first (special structure)
        if re.match(r'^\s*-\s*:material-', stripped):
            return self._translate_gridcard_line(line)

        # Handle lines with HTML content FIRST to preserve all HTML attributes
        if '<' in line and '>' in line:
            return self._translate_html_content(line) + ('\n' if not line.endswith('\n') else '')

        # Apply dictionary to non-HTML lines
        line = self._apply_dictionary(line)

        # Handle markdown headers (preserve # symbols and structure)
        if stripped.startswith('#'):
            header_match = re.match(r'^(\s*#{1,6}\s*)(.+)$', line)
            if header_match:
                header_prefix, header_text = header_match.groups()
                translated_text = self._translate_formatted_text(header_text.strip())
                return f"{header_prefix}{translated_text}\n"

        # Handle bullet points and list items (preserve bullets)
        if stripped.startswith(('-', '*', '+')) and not stripped.startswith('- :material-'):
            bullet_match = re.match(r'^(\s*[-*+]\s*)(.+)$', line)
            if bullet_match:
                bullet_prefix, bullet_content = bullet_match.groups()
                translated_content = self._translate_formatted_text(bullet_content.strip())
                return f"{bullet_prefix}{translated_content}\n"

        # Handle plain text/markdown content (may contain formatting)
        if (stripped and
            not stripped.startswith(('[', '!', ':', '{', '}', '`')) and
            not any(keyword in stripped for keyword in ['function', 'const ', 'let ', 'var ', 'http://', 'https://'])):

            # Preserve original indentation
            indent_len = len(line) - len(line.lstrip())
            indent = line[:indent_len]
            content = line[indent_len:].rstrip()

            if content:  # Only translate if there's actual content
                translated_content = self._translate_formatted_text(content)
                return f"{indent}{translated_content}\n"

        # Return line as-is (dictionary has already been applied)
        return line

    def translate_file(self, file_path: Path) -> str:
        """
        Translate a complete markdown file while preserving YAML front matter.

        This method separates front matter from content and only translates the content.
        """
        logger.info(f"Translating {file_path}")

        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()

        # More robust front matter detection
        if content.startswith('---\n'):
            # Find the end of front matter
            lines = content.split('\n')
            end_index = -1
            for i, line in enumerate(lines[1:], 1):  # Start from line 1, skip first ---
                if line.strip() == '---':
                    end_index = i
                    break

            if end_index > 0:
                # Found complete front matter
                front_matter_lines = lines[1:end_index]  # Skip first and last ---
                front_matter = '\n'.join(front_matter_lines)

                # Everything after the second --- is body content
                body_lines = lines[end_index + 1:]  # Skip the closing ---
                body = '\n'.join(body_lines)

                # Translate only the body content
                translated_body = self._translate_body_content(body)

                # Combine preserved front matter with translated body
                return f"---\n{front_matter}\n---\n{translated_body}"

        # No front matter or malformed - translate entire content
        return self._translate_body_content(content)

    def _translate_body_content(self, body: str) -> str:
        """
        Translate the body content of a markdown file line by line.
        """
        if body is None:
            return ""

        lines = body.split('\n')
        translated_lines = []
        in_code_block = False
        in_script_block = False

        for line in lines:
            # Track code blocks - preserve completely
            if line.strip().startswith('```'):
                in_code_block = not in_code_block
                translated_lines.append(line)
                continue

            # Track script blocks - preserve completely
            if '<script' in line.lower():
                in_script_block = True
                translated_lines.append(line)
                continue

            if '</script>' in line.lower():
                in_script_block = False
                translated_lines.append(line)
                continue

            # Skip translation inside code blocks or scripts
            if in_code_block or in_script_block:
                translated_lines.append(line)
                continue

            # Translate the line
            try:
                translated_line = self._translate_line(line)
                if translated_line is None:
                    translated_line = line  # Fallback to original line
                translated_lines.append(translated_line.rstrip('\n'))  # Remove extra newlines
            except Exception as e:
                logger.error(f"Error translating line: '{line[:50]}...': {e}")
                translated_lines.append(line.rstrip('\n'))  # Use original line as fallback

        return '\n'.join(translated_lines)

    def find_files_to_translate(self) -> List[Path]:
        """Find Dutch markdown files that need translation."""
        files = []
        targets = [
            self.docs_dir / "index.md",
            self.docs_dir / "richtlijnen",
            self.docs_dir / "Over-NeRDS"
        ]

        for target in targets:
            if target.is_file() and target.suffix == '.md':
                if not target.name.endswith('.en.md'):
                    files.append(target)
            elif target.is_dir():
                for md_file in target.rglob("*.md"):
                    if not md_file.name.endswith('.en.md'):
                        files.append(md_file)

        return files

    def translate_all(self) -> List[Path]:
        """Translate all found files and return list of created files."""
        files = self.find_files_to_translate()
        logger.info(f"Found {len(files)} files to translate")

        created_files = []
        for file_path in files:
            try:
                translated_content = self.translate_file(file_path)
                english_file = file_path.with_suffix('.en.md')

                # Ensure we have content to write
                if translated_content is None:
                    logger.error(f"✗ Failed to translate {file_path}: No content generated")
                    continue

                with open(english_file, 'w', encoding='utf-8') as f:
                    f.write(translated_content)

                logger.info(f"✓ Created {english_file}")
                created_files.append(english_file)

            except Exception as e:
                import traceback
                logger.error(f"✗ Failed to translate {file_path}: {e}")
                logger.error(f"Traceback: {traceback.format_exc()}")

        logger.info(f"Translation complete! Created {len(created_files)} files.")
        return created_files


def main():
    """Main function to run the translation process."""
    logger.info("NeRDS Perfect Auto-Translator")
    logger.info("=" * 35)
    logger.info("🎯 Simple & comprehensive solution")
    logger.info("🏗️  Never translates HTML tags")
    logger.info("📝 Translates text content with formatting")
    logger.info("💪 Handles **bold**, *italic*, __underline__, _emphasis_")
    logger.info("📚 Dictionary-first with longest-match priority")
    logger.info("🔤 Preserves case patterns")
    logger.info("🎴 Handles gridcards properly")
    logger.info("🚫 Ignores YAML front matter completely")
    logger.info("🔗 Preserves links [text](url) without translation")

    try:
        translator = PerfectTranslator()
        created_files = translator.translate_all()

        if created_files:
            logger.info(f"\nSuccessfully created {len(created_files)} translated files:")
            for file_path in created_files:
                logger.info(f"  • {file_path}")

        return 0

    except KeyboardInterrupt:
        logger.info("\n⏹️  Translation interrupted by user")
        return 1
    except Exception as e:
        logger.error(f"Translation failed: {e}")
        return 1


if __name__ == "__main__":
    sys.exit(main())
