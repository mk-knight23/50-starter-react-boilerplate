# AngularPrime - Premium Enterprise Boilerplate

A high-fidelity, opinionated Angular 19 boilerplate engineered for high-performance frontend architectures. Modular, type-safe, and production-ready.

## Overview
AngularPrime replaces legacy React-based boilerplates with a robust reactive system powered by Angular Signals. It focuses on domain-driven modularity, architectural clarity, and design-system integration.

## Features Comparison

| Feature | Legacy (React) | AngularPrime (v2.0) |
| :--- | :--- | :--- |
| **Framework** | React 17/18 | **Angular 19 (Standalone)** |
| **Reactivity** | Virtual DOM / Hooks | **Synchronous Reactive Signals** |
| **State** | Context / Redux | **Service-based Signals Store** |
| **Modularity** | Component-first | **Domain-Driven Module Structure** |
| **Performance**| Moderate | **Fine-grained Change Detection** |
| **Tech Stack** | React + CSS Modules | **Angular + Tailwind CSS + Lucide** |

## Tech Stack
- **Framework:** Angular 19+
- **Reactivity:** Signals Core
- **Styling:** Tailwind CSS (Design Tokens)
- **Icons:** Lucide Angular
- **Tooling:** Angular CLI
- **Library:** Angular CDK & Material ready

## Project Structure
```text
src/app/
├── core/services/      # Global logic & interceptors
├── shared/components/  # Atomic UI Kit
├── features/           # Domain-driven features
└── store/              # Global signal-based state
```

## Setup & Build Instructions

### Prerequisites
- Node.js 20.x or higher
- npm 10.x or higher

### Installation
```bash
npm install
```

### Development
```bash
npm start
```

### Production Build
```bash
npm run build
```

## Deployment
Optimized for enterprise static hosting (Firebase, Vercel, Netlify).

---

**License:** MIT
**Project Architect:** mk-knight23
