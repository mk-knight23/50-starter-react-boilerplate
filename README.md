# 50-starter-react-boilerplate

**Theme: Dev-Focused / Scalable**

A production-ready React 19 boilerplate with clean architecture, type safety, and professional developer experience. Built for scalability and maintainability.

## Live Demo

- **Vercel**: https://50-starter-react-boilerplate.vercel.app ✓
- **Cloudflare Pages**: https://50-starter-react-boilerplate.pages.dev ✓

## Features

- 🚀 **React 19** with TypeScript
- ⚡ **Vite 6** for lightning-fast builds
- 🎨 **Tailwind CSS v4** for modern styling
- 🎭 **Framer Motion** for smooth animations
- 🗃️ **Zustand** for lightweight state management
- 🌐 **Axios** HTTP client with interceptors
- 🧪 **Vitest** + Testing Library setup
- 🔒 **Strict TypeScript** configuration
- ✅ **ESLint** with React and immutability rules
- 🎯 **Feature-based** architecture
- 🚦 **Feature flags** system
- 🛡️ **Error boundaries** with fallback UI
- 🐺 **Husky** pre-commit hooks

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── features/              # Feature-based modules
│   ├── user-profile/     # Example feature
│   │   ├── api/          # API calls
│   │   ├── components/   # Feature components
│   │   ├── hooks/        # Feature hooks
│   │   ├── store/        # Feature state
│   │   └── types/        # Feature types
│   └── shared/           # Cross-cutting concerns
│       ├── api/          # HTTP client setup
│       ├── components/   # Shared UI components
│       ├── hooks/        # Shared hooks
│       ├── store/        # Global store
│       └── utils/        # Utilities
├── config/               # App configuration
├── lib/                  # Third-party library setup
├── test/                 # Test utilities
├── App.tsx
└── main.tsx
```

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run test` | Run tests |
| `npm run test:ui` | Run tests with UI |
| `npm run test:coverage` | Generate coverage report |
| `npm run type-check` | Run TypeScript checks |
| `npm run lint` | Run ESLint |
| `npm run lint:fix` | Fix ESLint issues |
| `npm run format` | Format code with Prettier |

## Architecture

### Clean Architecture Principles

This project follows clean architecture with clear separation of concerns:

1. **Presentation Layer** - React components (features/*/components/)
2. **Business Logic Layer** - Hooks, stores, services (features/*/hooks/, features/*/store/)
3. **Data Access Layer** - API services (features/*/api/, shared/api/)
4. **Cross-Cutting** - Shared utilities, types, config (shared/)

### Feature-Based Structure

Each feature is a self-contained module with:
- **API** - All external data fetching
- **Components** - Feature-specific UI
- **Hooks** - Custom React hooks
- **Store** - Local state management
- **Types** - TypeScript definitions

### Example Feature

See `src/features/user-profile/` for a complete example showing:
- API integration with typed endpoints
- Zustand store for state management
- Custom hooks for data fetching
- Reusable components
- Comprehensive tests

## State Management

### Global State (Zustand)

```typescript
import { useAppStore } from '@/shared/store';

// In component
function MyComponent() {
  const { user, theme } = useAppStore();
  const setUser = useAppStore((state) => state.setUser);

  return <div>{user.name}</div>;
}
```

### Feature State (Zustand)

```typescript
import { useUserStore } from '@/features/user-profile';

function UserProfile() {
  const { profile, isLoading } = useUserStore();
  // ...
}
```

## API Integration

### HTTP Client

The HTTP client comes pre-configured with:
- Request/response interceptors
- Automatic auth token injection
- Error handling
- TypeScript types

```typescript
import { httpClient } from '@/shared/api/http-client';

const response = await httpClient.get<User>('/api/users/1');
```

### Feature API Services

```typescript
import { userApi } from '@/features/user-profile';

const profile = await userApi.getProfile('user-123');
```

## Error Handling

### Error Boundaries

The app includes Error Boundary components for catching React errors:

```tsx
import { ErrorBoundary } from '@/shared/components';

<ErrorBoundary onError={(error) => console.error(error)}>
  <App />
</ErrorBoundary>
```

### API Errors

All API errors are typed and handled consistently:

```typescript
try {
  await userApi.getProfile('123');
} catch (error) {
  // error is ApiError with message, status, code
  console.error(error.message);
}
```

## Feature Flags

Control feature availability via environment variables:

```typescript
import { FeatureFlag } from '@/shared/components';

<FeatureFlag feature="newDashboard">
  <NewDashboard />
</FeatureFlag>
```

## Testing

### Unit Tests

```bash
npm run test
```

### Coverage

```bash
npm run test:coverage
```

Test files should be co-located with components:
```
components/
├── UserProfile.tsx
└── __tests__/
    └── UserProfile.test.tsx
```

## Type Safety

This project enforces strict TypeScript:
- No `any` types allowed
- All components fully typed
- Strict null checks
- No unused variables/parameters

## Code Style

### Immutability

Always create new objects, never mutate:

```typescript
// ✅ GOOD - Immutable
const updateUser = (user, name) => ({
  ...user,
  name,
});

// ❌ BAD - Mutation
const updateUser = (user, name) => {
  user.name = name;
  return user;
};
```

### Error Handling

Always handle errors comprehensively:

```typescript
try {
  const result = await riskyOperation();
  return result;
} catch (error) {
  console.error('Operation failed:', error);
  throw new Error('User-friendly message');
}
```

## Environment Variables

Create a `.env.local` file:

```bash
VITE_API_BASE_URL=/api
VITE_FEATURE_NEW_DASHBOARD=true
VITE_FEATURE_EXPERIMENTAL_UI=false
```

## Deployment

### Build

```bash
npm run build
```

Output is in `dist/` directory.

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

```bash
npm run build
# Deploy dist/ directory
```

## Contributing

1. Create a feature branch
2. Make your changes
3. Run tests: `npm run test`
4. Run lint: `npm run lint`
5. Run type-check: `npm run type-check`
6. Submit a pull request

## License

MIT

---

Built with ❤️ using React 19, Vite 6, and TypeScript
