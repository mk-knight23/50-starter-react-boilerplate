# Troubleshooting Guide

Common issues and their solutions.

## Build Issues

### "Cannot find module '@/xxx'"

**Problem**: TypeScript cannot resolve path alias.

**Solution**:
1. Check `tsconfig.app.json` has path mapping:
   ```json
   "paths": { "@/*": ["./src/*"] }
   ```

2. Check `vite.config.ts` has alias:
   ```ts
   resolve: {
     alias: { '@': path.resolve(__dirname, './src') }
   }
   ```

3. Restart TypeScript server in IDE

### Type Errors After Adding Dependencies

**Problem**: New package has type errors.

**Solution**:
```bash
# Install types if available
npm install -D @types/package-name

# Or add to tsconfig "skipLibCheck": true
```

## Test Issues

### "ReferenceError: React is not defined"

**Problem**: Vite JSX config issue.

**Solution**: Ensure `vitest.config.ts` has:
```ts
plugins: [react()]
```

### Test Cannot Find Component

**Problem**: Import path issues in tests.

**Solution**: Use `@` alias in imports:
```typescript
import { Button } from '@/shared/components/Button';
```

### Mock Not Working

**Problem**: `vi.mock()` not intercepting calls.

**Solution**:
1. Mock must be at top of file
2. Use `vi.mocked()` for type safety
3. Clear mocks in `beforeEach()`

## ESLint Issues

### "Import not found" Error

**Problem**: ESLint cannot resolve path alias.

**Solution**: Install and configure:
```bash
npm install -D eslint-import-resolver-typescript
```

Add to ESLint config:
```js
settings: {
  'import/resolver': {
    typescript: {},
  },
}
```

### Too Many Lint Errors

**Problem**: Legacy code has many violations.

**Solution**:
```bash
# Auto-fix what's possible
npm run lint:fix

# Temporarily disable rules (not recommended)
// eslint-disable-next-line rule-name
```

## Runtime Issues

### "Hydration failed" Error

**Problem**: Server and client render different HTML.

**Solution**:
- Check for `typeof window` usage
- Ensure conditional rendering matches on both sides
- Check for date formatting differences

### State Not Persisting

**Problem**: Zustand persist middleware not working.

**Solution**:
1. Check localStorage is available
2. Ensure store name is unique
3. Check browser storage limits

### API Calls Not Working

**Problem**: Axios requests failing.

**Solution**:
1. Check `VITE_API_BASE_URL` is set
2. Verify CORS configuration
3. Check network tab in DevTools
4. Verify interceptors aren't blocking requests

## Performance Issues

### Slow Build Time

**Problem**: Vite builds take too long.

**Solution**:
1. Check for large dependencies
2. Use `vite-plugin-checker` for async checks
3. Enable build caching in CI
4. Optimize source maps

### Slow Hot Module Replacement

**Problem**: Changes take long to reflect.

**Solution**:
1. Reduce file size
2. Avoid full page reloads
3. Check circular dependencies
4. Update Vite to latest version

## Husky Issues

### Hooks Not Running

**Problem**: Pre-commit hooks not executing.

**Solution**:
```bash
# Reinstall Husky
npm run prepare

# Or manually
npx husky install
```

### Lint-Staged Not Running

**Problem**: Pre-commit hook runs but staged files not checked.

**Solution**:
1. Check `.husky/pre-commit` file
2. Ensure `lint-staged` is installed
3. Verify `.lintstagedrc` config exists

## Getting Help

1. Check existing issues
2. Search Stack Overflow
3. Ask in team chat
4. Create detailed bug report with:
   - Error message
   - Steps to reproduce
   - Expected vs actual behavior
   - Environment details
