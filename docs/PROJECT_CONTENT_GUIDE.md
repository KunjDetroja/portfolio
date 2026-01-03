# Project Content Writing Guide

This guide explains how to write rich, structured content for project case studies using the `ContentBlock` system.

## Overview

Project content is defined as an array of content blocks. Each block has a `type` and additional properties specific to that type.

```typescript
content: [
  { type: 'heading', level: 2, text: 'Overview' },
  { type: 'paragraph', text: 'Your content here...' },
  // ... more blocks
]
```

---

## Content Block Types

### 1. Heading

Section headers for organizing content.

```typescript
{ type: 'heading', level: 2, text: 'Section Title' }
{ type: 'heading', level: 3, text: 'Subsection Title' }
```

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `type` | `'heading'` | ✅ | Block type |
| `level` | `2 \| 3` | ✅ | Heading level (h2 or h3) |
| `text` | `string` | ✅ | Heading text |

---

### 2. Paragraph

Regular text content with inline formatting support.

```typescript
{ 
  type: 'paragraph', 
  text: 'This is **bold**, *italic*, and `code`.',
  highlight: false  // optional - adds highlighted background
}
```

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `type` | `'paragraph'` | ✅ | Block type |
| `text` | `string` | ✅ | Paragraph content |
| `highlight` | `boolean` | ❌ | Adds accent background & left border |

**Inline Formatting:**
- `**text**` → **bold**
- `*text*` → *italic*
- `` `code` `` → `inline code`

---

### 3. List

Bullet or numbered lists.

```typescript
{
  type: 'list',
  items: [
    'First item with **bold**',
    'Second item with `code`',
    'Third item'
  ],
  ordered: false  // optional - true for numbered list
}
```

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `type` | `'list'` | ✅ | Block type |
| `items` | `string[]` | ✅ | Array of list items |
| `ordered` | `boolean` | ❌ | `true` for numbered, `false` for bullets |

**Inline Formatting Supported:** `**bold**` and `` `code` ``

---

### 4. Highlight

Callout boxes for important information.

```typescript
{
  type: 'highlight',
  text: 'Important information with **bold** and `code`.',
  variant: 'info'  // 'info' | 'success' | 'warning' | 'default'
}
```

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `type` | `'highlight'` | ✅ | Block type |
| `text` | `string` | ✅ | Highlight content |
| `variant` | `string` | ❌ | Color variant (see below) |

**Variants:**
| Variant | Color | Use Case |
|---------|-------|----------|
| `info` | Blue | Tips, notes, information |
| `success` | Green | Achievements, positive outcomes |
| `warning` | Yellow | Cautions, important notices |
| `default` | Gray | General callouts |

---

### 5. Features

Grid of feature cards (2 columns on desktop).

```typescript
{
  type: 'features',
  items: [
    { title: 'Feature Name', description: 'Feature description here' },
    { title: 'Another Feature', description: 'Another description' },
  ]
}
```

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `type` | `'features'` | ✅ | Block type |
| `items` | `array` | ✅ | Array of feature objects |
| `items[].title` | `string` | ✅ | Feature title |
| `items[].description` | `string` | ✅ | Feature description |

---

### 6. Image

Images with optional captions.

```typescript
{
  type: 'image',
  src: '/project/screenshot.png',
  alt: 'Dashboard screenshot',
  caption: 'The main dashboard view'  // optional
}
```

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `type` | `'image'` | ✅ | Block type |
| `src` | `string` | ✅ | Image path or URL |
| `alt` | `string` | ✅ | Alt text for accessibility |
| `caption` | `string` | ❌ | Caption below image |

---

### 7. Code

Code blocks with syntax highlighting.

```typescript
{
  type: 'code',
  code: 'const greeting = "Hello World";',
  language: 'typescript'  // optional
}
```

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `type` | `'code'` | ✅ | Block type |
| `code` | `string` | ✅ | Code content |
| `language` | `string` | ❌ | Language for syntax highlighting |

---

### 8. Quote

Blockquotes with optional attribution.

```typescript
{
  type: 'quote',
  text: 'The best code is no code at all.',
  author: 'Jeff Atwood'  // optional
}
```

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `type` | `'quote'` | ✅ | Block type |
| `text` | `string` | ✅ | Quote text |
| `author` | `string` | ❌ | Attribution |

---

### 9. Divider

Horizontal separator line.

```typescript
{ type: 'divider' }
```

---

## Complete Example

```typescript
content: [
  // Introduction
  { type: 'heading', level: 2, text: 'Overview' },
  {
    type: 'paragraph',
    text: 'This project is a **comprehensive platform** built with modern technologies.',
  },
  {
    type: 'highlight',
    variant: 'info',
    text: 'Built to solve real-world problems with a focus on **performance** and **scalability**.',
  },

  // Features Section
  { type: 'heading', level: 2, text: 'Key Features' },
  {
    type: 'features',
    items: [
      { title: 'Real-time Updates', description: 'Instant data synchronization across all clients' },
      { title: 'Secure Auth', description: 'JWT-based authentication with role management' },
      { title: 'Responsive UI', description: 'Works seamlessly on mobile and desktop' },
      { title: 'API Integration', description: 'RESTful API with comprehensive documentation' },
    ],
  },

  // Technical Details
  { type: 'heading', level: 2, text: 'Technical Implementation' },
  {
    type: 'paragraph',
    text: 'The frontend uses **React** with `TypeScript` for type safety. The backend is built with **Node.js** and **Express**.',
  },
  {
    type: 'list',
    items: [
      '**MongoDB** for flexible document storage',
      '**Socket.io** for real-time communication',
      '**Redis** for caching and session management',
      'Docker for **containerized deployment**',
    ],
  },

  // Quote
  { type: 'divider' },
  {
    type: 'quote',
    text: 'Simplicity is the ultimate sophistication.',
    author: 'Leonardo da Vinci',
  },

  // Code Example
  { type: 'heading', level: 3, text: 'API Example' },
  {
    type: 'code',
    language: 'typescript',
    code: `// Fetch all projects
const response = await fetch('/api/projects');
const projects = await response.json();`,
  },

  // Screenshot
  {
    type: 'image',
    src: '/project/dashboard.png',
    alt: 'Project dashboard',
    caption: 'The main dashboard showing project analytics',
  },

  // Success callout
  {
    type: 'highlight',
    variant: 'success',
    text: 'This architecture handles **10,000+ concurrent users** with sub-100ms response times.',
  },
]
```

---

## Best Practices

### ✅ Do

- Start with an **Overview** heading and paragraph
- Use **features** blocks to showcase key functionalities
- Add **highlight** blocks for important information
- Use inline formatting (`**bold**`, `` `code` ``) for emphasis
- Keep paragraphs concise and scannable
- Use **lists** for technical specifications

### ❌ Don't

- Don't use heading level 2 for everything - use level 3 for subsections
- Don't overuse highlights - they lose impact if overused
- Don't write very long paragraphs - break them up
- Don't forget to include the `type` property in every block

---

## TypeScript Type Reference

```typescript
type ContentBlock =
  | { type: 'heading'; level: 2 | 3; text: string }
  | { type: 'paragraph'; text: string; highlight?: boolean }
  | { type: 'list'; items: string[]; ordered?: boolean }
  | { type: 'highlight'; text: string; variant?: 'info' | 'success' | 'warning' | 'default' }
  | { type: 'image'; src: string; alt: string; caption?: string }
  | { type: 'code'; code: string; language?: string }
  | { type: 'quote'; text: string; author?: string }
  | { type: 'divider' }
  | { type: 'features'; items: { title: string; description: string }[] };
```
