// @ts-ignore - For browser usage, we'll use a mock implementation
const fs = {
  readFile: async (path: string, _encoding: string) => {
    if (path.includes('getting-started.md')) {
      return `---
title: Getting Started with ReactPrime
description: Learn how to set up and start using ReactPrime in your projects.
date: 2024-01-15
author: Kazi Musharraf
tags: [getting-started, tutorial, setup]
slug: getting-started
category: blog
---

# Getting Started with ReactPrime

Welcome to ReactPrime! This guide will help you get up and running quickly with our premium React boilerplate.

## Prerequisites

Before you begin, make sure you have Node.js (v16.0 or later) installed on your system. You can download it from [nodejs.org](https://nodejs.org/).

## Installation

1. **Clone the repository**

\`\`\`bash
git clone https://github.com/your-username/react-prime.git
cd react-prime
\`\`\`

2. **Install dependencies**

\`\`\`bash
npm install
\`\`\`

3. **Start the development server**

\`\`\`bash
npm run dev
\`\`\`

Your application will be available at \`http://localhost:5173\`.
`;
    }
    if (path.includes('advanced-patterns.md')) {
      return `---
title: Advanced React Patterns in ReactPrime
description: Explore advanced React patterns and best practices implemented in ReactPrime.
date: 2024-01-20
author: Kazi Musharraf
tags: [advanced, patterns, react]
slug: advanced-patterns
category: blog
---

# Advanced React Patterns in ReactPrime

ReactPrime implements several advanced React patterns to ensure maintainability and scalability.

## 1. Feature-Based Architecture

Our application is organized by features, which helps with code organization and scalability.
`;
    }
    if (path.includes('installation.md')) {
      return `---
title: Installation Guide
description: Learn how to install and set up ReactPrime in your project.
date: 2024-01-10
order: 1
slug: installation
category: documentation
---

# Installation Guide

This guide will walk you through the process of installing and setting up ReactPrime in your project.

## System Requirements

- Node.js 16.0 or higher
- npm, yarn, or pnpm
- Modern web browser
`;
    }
    if (path.includes('components.md')) {
      return `---
title: Components
description: Learn about the available components in ReactPrime.
date: 2024-01-12
order: 2
slug: components
category: documentation
---

# Components

ReactPrime comes with a set of pre-built, customizable components that you can use in your project.

## Available Components

### Button

A versatile button component with various styles and states.
`;
    }
    return '';
  },
  readdir: async (dir: string) => {
    if (dir.includes('posts')) {
      return ['getting-started.md', 'advanced-patterns.md'];
    }
    if (dir.includes('docs')) {
      return ['installation.md', 'components.md'];
    }
    return [];
  }
};
// @ts-ignore - Mock for browser
const path = {
  join: (...parts: string[]) => parts.join('/'),
  dirname: (path: string) => path.split('/').slice(0, -1).join('/')
};
import { BlogPost, DocumentationPage } from '../types/content';

// Mock content directory for browser
const CONTENT_DIR = 'content';

export async function loadAllContent(): Promise<{ posts: BlogPost[]; docs: DocumentationPage[] }> {
  const postsDir = path.join(CONTENT_DIR, 'posts');
  const docsDir = path.join(CONTENT_DIR, 'docs');

  const postFiles = await fs.readdir(postsDir);
  const docFiles = await fs.readdir(docsDir);

  const posts: BlogPost[] = await Promise.all(
    postFiles
      .filter(file => file.endsWith('.md'))
      .map(async file => {
        const filePath = path.join(postsDir, file);
        const content = await fs.readFile(filePath, 'utf-8');
        return parseMarkdown(content, 'post', file) as BlogPost;
      })
  );

  const docs: DocumentationPage[] = await Promise.all(
    docFiles
      .filter(file => file.endsWith('.md'))
      .map(async file => {
        const filePath = path.join(docsDir, file);
        const content = await fs.readFile(filePath, 'utf-8');
        return parseMarkdown(content, 'doc', file) as DocumentationPage;
      })
  );

  return {
    posts: posts.sort((a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime()),
    docs: docs.sort((a, b) => ((a.frontmatter as any).order || 0) - ((b.frontmatter as any).order || 0))
  };
}

export async function loadPost(slug: string): Promise<BlogPost | null> {
  try {
    const filePath = path.join(CONTENT_DIR, 'posts', `${slug}.md`);
    const content = await fs.readFile(filePath, 'utf-8');
    const result = parseMarkdown(content, 'post', `${slug}.md`) as BlogPost;
    return result.frontmatter.slug === slug ? result : null;
  } catch (error) {
    return null;
  }
}

export async function loadDoc(slug: string): Promise<DocumentationPage | null> {
  try {
    const filePath = path.join(CONTENT_DIR, 'docs', `${slug}.md`);
    const content = await fs.readFile(filePath, 'utf-8');
    const result = parseMarkdown(content, 'doc', `${slug}.md`);
    return result.frontmatter.slug === slug ? result : null;
  } catch (error) {
    return null;
  }
}

function parseMarkdown(content: string, type: 'post' | 'doc', fileName: string) {
  const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);

  if (!frontmatterMatch) {
    throw new Error(`Invalid frontmatter in file: ${fileName}`);
  }

  const [, frontmatterStr, contentStr] = frontmatterMatch;
  const frontmatter = parseFrontmatter(frontmatterStr);

  // Extract reading time and word count
  const wordCount = contentStr.split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / 200); // Average reading speed: 200 words/minute

  const baseData = {
    id: fileName.replace('.md', ''),
    frontmatter,
    content: contentStr.trim(),
    readingTime,
    wordCount
  };

  if (type === 'post') {
    return baseData as BlogPost;
  } else {
    return {
      ...baseData,
      frontmatter: {
        ...frontmatter,
        category: 'documentation'
      }
    } as DocumentationPage;
  }
}

function parseFrontmatter(frontmatterStr: string): any {
  const lines = frontmatterStr.split('\n');
  const frontmatter: any = {};

  lines.forEach(line => {
    if (line.trim()) {
      const [key, ...rest] = line.split(':');
      const value = rest.join(':').trim();

      // Handle arrays (tags)
      if (key.trim() === 'tags' && value.startsWith('[')) {
        try {
          frontmatter[key.trim()] = JSON.parse(value);
        } catch (e) {
          frontmatter[key.trim()] = value;
        }
      } else {
        frontmatter[key.trim()] = value.replace(/^["']|["']$/g, '');
      }
    }
  });

  // Ensure slug is set
  if (!frontmatter.slug) {
    frontmatter.slug = frontmatter.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '');
  }

  return frontmatter;
}