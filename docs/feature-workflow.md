# Feature Development Workflow

This workflow guides the creation of new features following the project's architecture.

## Phase 1: Planning

1. Define feature requirements
2. Identify data models and types
3. Plan API endpoints (if needed)
4. Design component hierarchy

## Phase 2: Structure

Create the feature module structure:

```bash
mkdir -p src/features/your-feature/{api,components,hooks,store,types}
```

## Phase 3: Implementation Order

1. **Types First** (`types/index.ts`)
   - Define all TypeScript interfaces
   - Export public API

2. **API Layer** (`api/`)
   - Create API service functions
   - Add error handling
   - Export typed functions

3. **Store** (`store/`)
   - Create Zustand store
   - Define actions and selectors
   - Export custom hooks

4. **Hooks** (`hooks/`)
   - Create custom hooks
   - Connect to API and store
   - Handle loading/error states

5. **Components** (`components/`)
   - Build UI components
   - Use feature hooks and store
   - Add animations if needed

6. **Tests** (`components/__tests__/`)
   - Write unit tests for components
   - Test hooks
   - Mock API calls
   - Ensure 80%+ coverage

7. **Index** (`index.ts`)
   - Export public API
   - Re-exports from subdirectories

## Phase 4: Integration

1. Import into App or parent feature
2. Add routing (if needed)
3. Update documentation
4. Add feature flag (if experimental)

## Phase 5: Quality Checks

```bash
# Type checking
npm run type-check

# Linting
npm run lint

# Tests
npm run test

# Coverage
npm run test:coverage

# Build
npm run build
```

## Example: User Profile Feature

See `src/features/user-profile/` for a complete example following this workflow.
