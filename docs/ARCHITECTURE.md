# Architecture: 50-starter-react-boilerplate

## Overview
A production-grade React boilerplate engineered for animated interfaces using Framer Motion.

## Tech Stack
- **Framework**: React 19
- **Build Tool**: Vite 6
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion 12

## Core Patterns
- **Component Animations**: All components use Framer Motion for entrance/exit effects
- **Scroll Animations**: `whileInView` and `useScroll` hooks for scroll-linked animations
- **Hover Effects**: Spring-based hover transitions
- **Ambient Motion**: Continuous subtle animations for visual interest

## Performance
- Tree-shaken Framer Motion imports
- Optimized animation keyframes
- Reduced motion support via media queries
