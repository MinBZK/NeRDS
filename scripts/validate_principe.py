#!/usr/bin/env python3
"""
Validate principe files in docs/principes/**/index.md
"""

import json
import re
import sys
from pathlib import Path


def load_validation_rules():
    """Load validation rules from schema file"""
    schema_path = Path("schemas/schema_principe.json")

    try:
        with open(schema_path, "r", encoding="utf-8") as f:
            return json.load(f)
    except (FileNotFoundError, json.JSONDecodeError) as e:
        print(f"❌ Error loading schema: {e}")
        sys.exit(1)


def extract_metadata(content):
    """Extract YAML front matter from markdown content"""
    metadata = {}
    yaml_match = re.match(r'^---\n(.*?)\n---\n', content, re.DOTALL)

    if yaml_match:
        yaml_content = yaml_match.group(1)
        for line in yaml_content.split('\n'):
            if ':' in line:
                key, value = line.split(':', 1)
                metadata[key.strip()] = value.strip().strip('"\'')

    return metadata


def extract_headers(content):
    """Extract markdown headers (## level)"""
    return re.findall(r'^#{2}\s+(.+)$', content, re.MULTILINE)


def extract_divs(content):
    """Extract div elements with specific classes"""
    div_pattern = r'<div\s+class=["\']([^"\']*)["\'][^>]*>'
    return re.findall(div_pattern, content, re.IGNORECASE)


def validate_file(file_path, rules):
    """Validate a single markdown file against the rules"""
    try:
        content = file_path.read_text(encoding="utf-8")
        errors = []

        # Extract content components
        metadata = extract_metadata(content)
        headers = [h.strip() for h in extract_headers(content)]
        divs = extract_divs(content)

        # Check metadata requirements
        for required_meta in rules["required_metadata"]:
            if required_meta not in metadata or not metadata[required_meta]:
                errors.append(f"Missing metadata: {required_meta}")

        # Check required div classes
        for required_div in rules["required_divs"]:
            if not any(required_div in div_class for div_class in divs):
                errors.append(f"Missing div with class: {required_div}")

        # Check required headers
        for required_header in rules["required_headers"]:
            if not any(required_header in header for header in headers):
                errors.append(f"Missing header: {required_header}")

        # Check conditional headers (at least one must be present)
        if rules.get("conditional_headers"):
            conditional_found = any(
                any(cond_header in header for header in headers)
                for cond_header in rules["conditional_headers"]
            )
            if not conditional_found:
                headers_list = ", ".join(rules["conditional_headers"])
                errors.append(f"Missing at least one of: {headers_list}")

        return errors

    except Exception as e:
        return [f"Error reading file: {e}"]


def find_principe_files():
    """Find all index.md files in docs/principes subdirectories"""
    principe_dir = Path("docs/principes")

    if not principe_dir.exists():
        print("❌ docs/principes directory not found")
        return []

    files = []
    for subdir in principe_dir.iterdir():
        if subdir.is_dir() and subdir.name != "." and not subdir.name.startswith("_"):
            index_file = subdir / "index.md"
            if index_file.exists():
                files.append(index_file)

    return sorted(files)


def main():
    """Main validation function"""
    print("🔍 Validating principe files...")

    # Load validation rules
    rules = load_validation_rules()

    # Find files to validate
    files = find_principe_files()

    if not files:
        print("❌ No principe files found")
        return 1

    print(f"📁 Found {len(files)} files to validate")

    # Validate each file
    all_passed = True

    for file_path in files:
        errors = validate_file(file_path, rules)

        if errors:
            print(f"❌ {file_path}")
            for error in errors:
                print(f"   • {error}")
            all_passed = False
        else:
            print(f"✅ {file_path}")

    # Summary
    print(f"\n📊 Summary: {len(files)} files checked")

    if all_passed:
        print("🎉 All files passed validation!")
        return 0
    else:
        print("💥 Some files have validation errors")
        return 1


if __name__ == "__main__":
    sys.exit(main())
