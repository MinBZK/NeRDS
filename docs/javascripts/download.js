// docs/javascripts/download.js

/**
 * Download content as Markdown file
 * @param {string} content - The markdown content to download
 * @param {string} filename - The filename for the download
 */
function downloadMarkdown(content, filename = 'document.md') {
    const blob = new Blob([content], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.style.display = 'none';

    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    // Cleanup
    URL.revokeObjectURL(url);
}

/**
 * Download current page content as markdown
 * Extracts content from the main content area
 */
function downloadCurrentPage() {
    const title = document.querySelector('h1')?.textContent || 'document';
    const filename = `${title.toLowerCase().replace(/[^a-z0-9]/g, '-')}.md`;

    // Extract the main content
    const contentElement = document.querySelector('.md-content__inner');

    if (!contentElement) {
        console.error('Could not find main content area');
        return;
    }

    // Convert HTML back to markdown (basic conversion)
    const markdownContent = htmlToMarkdown(contentElement);

    downloadMarkdown(markdownContent, filename);
}

/**
 * Basic HTML to Markdown converter
 * @param {Element} element - The HTML element to convert
 * @returns {string} - Markdown content
 */
function htmlToMarkdown(element) {
    let markdown = '';

    // Add front matter if title exists
    const title = document.querySelector('h1')?.textContent;
    if (title) {
        markdown += `---\ntitle: "${title}"\n---\n\n`;
    }

    // Process each child element
    element.childNodes.forEach(node => {
        markdown += processNode(node);
    });

    return markdown.trim();
}

/**
 * Process individual nodes and convert to markdown
 * @param {Node} node - The node to process
 * @returns {string} - Markdown representation
 */
function processNode(node) {
    if (node.nodeType === Node.TEXT_NODE) {
        return node.textContent;
    }

    if (node.nodeType !== Node.ELEMENT_NODE) {
        return '';
    }

    const tag = node.tagName.toLowerCase();
    const text = node.textContent || '';

    switch (tag) {
        case 'h1':
            return `# ${text}\n\n`;
        case 'h2':
            return `## ${text}\n\n`;
        case 'h3':
            return `### ${text}\n\n`;
        case 'h4':
            return `#### ${text}\n\n`;
        case 'h5':
            return `##### ${text}\n\n`;
        case 'h6':
            return `###### ${text}\n\n`;
        case 'p':
            return `${text}\n\n`;
        case 'strong':
        case 'b':
            return `**${text}**`;
        case 'em':
        case 'i':
            return `*${text}*`;
        case 'code':
            return `\`${text}\``;
        case 'pre':
            return `\`\`\`\n${text}\n\`\`\`\n\n`;
        case 'ul':
            let ulMarkdown = '';
            node.querySelectorAll('li').forEach(li => {
                ulMarkdown += `- ${li.textContent}\n`;
            });
            return ulMarkdown + '\n';
        case 'ol':
            let olMarkdown = '';
            node.querySelectorAll('li').forEach((li, index) => {
                olMarkdown += `${index + 1}. ${li.textContent}\n`;
            });
            return olMarkdown + '\n';
        case 'blockquote':
            return `> ${text}\n\n`;
        case 'a':
            const href = node.getAttribute('href');
            return href ? `[${text}](${href})` : text;
        case 'img':
            const src = node.getAttribute('src');
            const alt = node.getAttribute('alt') || '';
            return src ? `![${alt}](${src})` : '';
        case 'hr':
            return '\n---\n\n';
        case 'br':
            return '\n';
        default:
            // For other elements, just return the text content
            return text;
    }
}

/**
 * Create download button and attach to specified element
 * @param {string} selector - CSS selector for the target element
 * @param {string} content - Optional predefined content
 * @param {string} filename - Optional filename
 */
function createDownloadButton(selector, content = null, filename = null) {
    const targetElement = document.querySelector(selector);

    if (!targetElement) {
        console.error(`Element with selector "${selector}" not found`);
        return;
    }

    const downloadSection = document.createElement('div');
    downloadSection.className = 'download-section';
    downloadSection.innerHTML = `
        <h3>📥 Download Template</h3>
        <p>Download dit document als Markdown bestand voor je project.</p>
        <button class="download-btn" onclick="handleDownload()">
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
            </svg>
            Download als Markdown
        </button>
    `;

    // Store content and filename on the button for the click handler
    const button = downloadSection.querySelector('.download-btn');
    button.dataset.content = content;
    button.dataset.filename = filename;

    targetElement.insertBefore(downloadSection, targetElement.firstChild);
}

/**
 * Handle download button clicks
 */
function handleDownload() {
    const button = event.target.closest('.download-btn');
    const predefinedContent = button?.dataset.content;
    const predefinedFilename = button?.dataset.filename;

    if (predefinedContent) {
        downloadMarkdown(predefinedContent, predefinedFilename || 'template.md');
    } else {
        downloadCurrentPage();
    }
}
