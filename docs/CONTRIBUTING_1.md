# Contributing Guide

Thank you for your interest in contributing! This guide will help you get started.

## Development Setup

1. **Fork and clone** the repository

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

## Code Standards

### Before Committing

Ensure all checks pass:

```bash
# Type checking
npm run type-check

# Linting
npm run lint
npm run lint:fix  # Auto-fix issues

# Tests
npm run test
npm run test:coverage  # Must maintain 80%+ coverage

# Build
npm run build
```

### Code Style

- **Immutability**: Never mutate objects/arrays
- **Type Safety**: No `any` types, fully typed components
- **Error Handling**: Always handle errors with try/catch
- **Component Size**: Keep components under 300 lines
- **Function Size**: Keep functions under 50 lines

### File Organization

- Use **feature-based** structure
- One component per file
- Co-locate tests with components
- Export via `index.ts` files

## Git Workflow

### Commit Messages

Follow conventional commits format:

```
type: description

optional body
```

Types: `feat`, `fix`, `refactor`, `docs`, `test`, `chore`, `perf`, `ci`

Examples:
```
feat: add user profile page
fix: resolve API authentication error
test: add unit tests for user service
docs: update README with deployment instructions
```

### Pre-Commit Hooks

Husky runs automatically on commit:
- Type checking
- Linting
- Formatting
- Testing

If hooks fail, the commit will be aborted.

## Testing Requirements

### Test Coverage

- **Minimum coverage: 80%**
- Write tests FIRST (TDD approach)
- Test all critical paths
- Mock external dependencies

### Test Structure

```typescript
describe('Component', () => {
  it('should render correctly', () => {
    // Arrange
    // Act
    // Assert
  });
});
```

## Pull Request Process

1. **Update documentation** if needed
2. **Add tests** for new features
3. **Ensure all checks pass**
4. **Update CHANGELOG.md**
5. **Create PR** with:
   - Clear description of changes
   - Related issues
   - Screenshots for UI changes
   - Test coverage report

## Code Review Guidelines

Reviewers will check:
- [ ] Code follows style guidelines
- [ ] Tests are included and passing
- [ ] Documentation is updated
- [ ] No hardcoded values
- [ ] Error handling is comprehensive
- [ ] Types are properly defined
- [ ] No console.log statements
- [ ] Immutability is maintained

## Getting Help

- Open an issue for bugs
- Start a discussion for questions
- Check existing issues first

Thanks for contributing! 🚀
