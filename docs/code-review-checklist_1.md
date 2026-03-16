# Code Review Checklist

Use this checklist when reviewing code or before submitting PRs.

## Code Quality

- [ ] Code is readable and well-named
- [ ] Functions are small (<50 lines)
- [ ] Files are focused (<800 lines)
- [ ] No deep nesting (>4 levels)
- [ ] No magic numbers or hardcoded values

## Type Safety

- [ ] No `any` types
- [ ] All functions have return types
- [ ] All props are typed
- [ ] No `@ts-ignore` or `@ts-expect-error` (unless justified)

## Immutability

- [ ] No object/array mutations
- [ ] Use spread operator for updates
- [ ] No `push`, `splice`, direct assignment
- [ ] Create new objects instead of mutating

## Error Handling

- [ ] All async functions have try/catch
- [ ] User-friendly error messages
- [ ] No console.log in production code
- [ ] Errors are logged appropriately

## Testing

- [ ] Unit tests for all components
- [ ] Tests for hooks
- [ ] API tests with mocks
- [ ] Coverage at 80%+
- [ ] Tests pass locally

## Performance

- [ ] No unnecessary re-renders
- [ ] useMemo/useCallback where needed
- [ ] Images optimized
- [ ] Large lists virtualized (if applicable)

## Security

- [ ] No hardcoded secrets
- [ ] Inputs validated
- [ ] XSS prevention (React handles most)
- [ ] CSRF protection (API)

## Documentation

- [ ] Complex functions have JSDoc
- [ ] README updated (if needed)
- [ ] Types are self-documenting
- [ ] Component props documented

## Style

- [ ] Follows project conventions
- [ ] Consistent formatting
- [ ] No commented-out code
- [ ] Meaningful variable names

## Pre-Commit

- [ ] `npm run type-check` passes
- [ ] `npm run lint` passes
- [ ] `npm run test` passes
- [ ] `npm run build` succeeds
