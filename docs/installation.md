---
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

### Installation Steps

1. **Create a new React project**

```bash
npm create vite@latest my-react-app -- --template react-ts
cd my-react-app
```

2. **Install ReactPrime**

```bash
npm install react-prime
```

3. **Configure Tailwind CSS**

Create a `tailwind.config.js` file:

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6366f1",
        secondary: "#8b5cf6",
      },
    },
  },
  plugins: [],
}
```

4. **Add Tailwind directives to your CSS**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Quick Start

Here's a basic example of how to use ReactPrime components:

```tsx
import { ReactPrimeProvider } from 'react-prime';
import App from './App';

function Root() {
  return (
    <ReactPrimeProvider>
      <App />
    </ReactPrimeProvider>
  );
}
```

## Configuration

### Environment Variables

Create a `.env.local` file for environment-specific variables:

```env
VITE_API_URL=https://api.example.com
VITE_APP_NAME=My App
```

### Custom Themes

You can customize the theme by providing a theme object:

```typescript
import { ReactPrimeProvider } from 'react-prime';

const customTheme = {
  colors: {
    primary: '#your-primary-color',
    secondary: '#your-secondary-color',
  },
  // ... other theme properties
};

function Root() {
  return (
    <ReactPrimeProvider theme={customTheme}>
      <App />
    </ReactPrimeProvider>
  );
}
```

## Troubleshooting

### Common Issues

**Issue: Tailwind CSS not working**

Solution: Make sure you have installed Tailwind CSS and configured it correctly.

**Issue: TypeScript errors**

Solution: Ensure you have TypeScript and the necessary type definitions installed.

**Issue: Build errors**

Solution: Check your package.json dependencies and make sure all are installed.