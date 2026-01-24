# AngularPrime - Premium Enterprise Boilerplate

<div align="center">

![Angular](https://img.shields.io/badge/Angular_21-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Signals](https://img.shields.io/badge/Angular_Signals-4FC08D?style=for-the-badge&logo=angular&logoColor=white)

**A high-fidelity, opinionated Angular 21 boilerplate engineered for high-performance frontend architectures**

[Live Demo](https://angularprime.vercel.app) | [GitHub](https://github.com/mk-knight23/53-React-Starter-Boilerplate)

</div>

---

## Overview

AngularPrime is a production-grade Angular boilerplate engineered for enterprise-scale applications. It replaces legacy React-based boilerplates with a robust reactive system powered by Angular Signals.

### Problem Statement

Traditional boilerplates suffer from:
- Complex state management overhead
- Limited type safety
- No standardized architecture
- Slow change detection

### Solution

AngularPrime provides:
- **Fine-grained Reactivity**: Angular Signals for optimal performance
- **Zero-runtime CSS**: Tailwind CSS with design tokens
- **SSR Compatible**: Works with Angular Universal/SSR
- **Full Type Safety**: TypeScript strict mode enabled

---

## Features Comparison

| Feature | Legacy (React) | AngularPrime (v2.0) |
| :--- | :--- | :--- |
| **Framework** | React 18 | **Angular 21 (Standalone)** |
| **Reactivity** | Virtual DOM / Hooks | **Synchronous Signals** |
| **State Management** | Context / Redux | **Signal-based Services** |
| **Change Detection** | Re-render component | **Fine-grained updates** |
| **Bundle Size** | Moderate | **Optimized with esbuild** |
| **Type Safety** | Partial | **Full TypeScript strict** |

---

## Tech Stack

- **Framework**: Angular 21+ (Standalone Components)
- **Reactivity**: Angular Signals Core
- **Styling**: Tailwind CSS 3.4
- **TypeScript**: 5.9+ with strict mode
- **Build**: Angular esbuild builder
- **Icons**: Inline SVGs (no external deps)

---

## Architecture

```
src/app/
├── app.component.ts      # Root component with theme logic
├── app.config.ts         # Application configuration
├── app.routes.ts         # Lazy-loaded routes
└── main.ts               # Application entry point
```

---

## Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm 10.x or higher

### Installation

```bash
# Clone the repository
git clone https://github.com/mk-knight23/53-React-Starter-Boilerplate.git
cd 53-React-Starter-Boilerplate

# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

### Development

```bash
npm start
```

Opens the app at `http://localhost:4200` with hot module replacement.

### Production Build

```bash
npm run build
```

Generates optimized production bundles in `dist/`.

---

## Theme System

AngularPrime includes a fully-featured dark/light mode with:

- **System Detection**: Auto-detects OS preference
- **Manual Toggle**: User-controllable via navbar button
- **Persistence**: Preference saved in localStorage
- **SSR Safe**: Platform-aware initialization

```typescript
// Theme is managed via Angular Signals
isDarkMode = signal(true);

// Toggle with persistence
toggleTheme() {
  this.isDarkMode.update(v => !v);
  localStorage.setItem('theme', this.isDarkMode() ? 'dark' : 'light');
}
```

---

## Accessibility

The boilerplate includes comprehensive ARIA support:

- **Navigation**: Proper role and labeling
- **Theme Toggle**: Full aria-label support
- **Keyboard Navigation**: All interactive elements accessible
- **Color Contrast**: WCAG AA compliant

---

## Deployment

AngularPrime is optimized for deployment on:

- **Vercel**: `npx vercel --prod`
- **Netlify**: Connect repository for auto-deploy
- **Firebase Hosting**: `firebase deploy`
- **AWS Amplify**: Native Angular support

```bash
# Deploy to Vercel
npx vercel --prod --name angularprime

# Preview production build
npm run build
npx http-server dist/angular-prime-boilerplate
```

---

## License

MIT License - See [LICENSE](LICENSE) for details.

---

<div align="center">

**Built with Angular 21 + Signals + Tailwind CSS**

</div>
