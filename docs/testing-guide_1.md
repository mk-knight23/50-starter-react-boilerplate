# Testing Guide

Comprehensive guide for writing tests in this project.

## Test Structure

Tests should be co-located with the code they test:

```
src/features/user/
├── components/
│   ├── UserCard.tsx
│   └── __tests__/
│       ├── UserCard.test.tsx
│       └── helpers.test.ts
├── hooks/
│   ├── useUser.ts
│   └── __tests__/
│       └── useUser.test.ts
└── api/
    ├── userApi.ts
    └── __tests__/
        └── userApi.test.ts
```

## Testing Philosophy

**Test-Driven Development (TDD) Workflow:**

1. **RED**: Write a failing test
2. **GREEN**: Write minimal code to pass
3. **REFACTOR**: Improve the code
4. **REPEAT**: Add next test

## Component Testing

### Basic Test

```typescript
import { describe, it, expect } from 'vitest';
import { render, screen } from '@/test/test-utils';
import { Button } from '../Button';

describe('Button', () => {
  it('renders with correct text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });
});
```

### Testing User Interactions

```typescript
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

it('calls onClick when clicked', async () => {
  const handleClick = vi.fn();
  render(<Button onClick={handleClick}>Click</Button>);

  await userEvent.click(screen.getByText('Click'));
  expect(handleClick).toHaveBeenCalledTimes(1);
});
```

### Testing Conditional Rendering

```typescript
it('shows loading state', () => {
  render(<Button isLoading>Loading</Button>);
  expect(screen.getByText(/loading/i)).toBeInTheDocument();
});

it('does not show content when loading', () => {
  render(<Button isLoading>Content</Button>);
  expect(screen.queryByText('Content')).not.toBeInTheDocument();
});
```

## Hook Testing

```typescript
import { renderHook, act, waitFor } from '@testing-library/react';
import { useUserProfile } from '../useUserProfile';

describe('useUserProfile', () => {
  it('fetches user profile on mount', async () => {
    const { result } = renderHook(() => useUserProfile('123'));

    await waitFor(() => {
      expect(result.current.profile).toEqual(mockProfile);
    });
  });

  it('handles errors gracefully', async () => {
    vi.mocked(userApi.getProfile).mockRejectedValue(new Error('API Error'));

    const { result } = renderHook(() => useUserProfile('123'));

    await waitFor(() => {
      expect(result.current.error).toBe('API Error');
    });
  });
});
```

## API Testing

```typescript
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { userApi } from '../userApi';
import { httpClient } from '@/shared/api/http-client';

vi.mock('@/shared/api/http-client');

describe('userApi', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('fetches user profile', async () => {
    const mockUser = { id: '1', name: 'John' };
    vi.mocked(httpClient.get).mockResolvedValue({ data: { data: mockUser } });

    const result = await userApi.getProfile('1');

    expect(result).toEqual(mockUser);
    expect(httpClient.get).toHaveBeenCalledWith('/users/1');
  });

  it('throws error on failure', async () => {
    vi.mocked(httpClient.get).mockRejectedValue(new Error('Network error'));

    await expect(userApi.getProfile('1')).rejects.toThrow('Network error');
  });
});
```

## Mocking

### Mocking API Calls

```typescript
import { vi } from 'vitest';
import * as userApi from '../api/userApi';

vi.mock('../api/userApi', () => ({
  userApi: {
    getProfile: vi.fn(),
  },
}));

// In test
vi.mocked(userApi.userApi.getProfile).mockResolvedValue(mockProfile);
```

### Mocking React Context

```typescript
import { renderHook } from '@testing-library/react';
import { ThemeProvider } from 'next-themes';

const wrapper = ({ children }) => (
  <ThemeProvider attribute="class">{children}</ThemeProvider>
);

const { result } = renderHook(() => useTheme(), { wrapper });
```

## Test Coverage

### Generate Coverage Report

```bash
npm run test:coverage
```

### Coverage Thresholds

- **Statements**: 80%
- **Branches**: 80%
- **Functions**: 80%
- **Lines**: 80%

### Viewing Coverage

Open `coverage/index.html` in your browser for detailed report.

## Best Practices

### DO:

- Write tests FIRST (TDD)
- Test user behavior, not implementation
- Use descriptive test names
- Test edge cases (null, empty, errors)
- Mock external dependencies
- Keep tests simple and focused

### DON'T:

- Test third-party libraries
- Write fragile tests that break on refactoring
- Over-mock (test real logic)
- Test implementation details
- Write complex tests

## Running Tests

```bash
# Run all tests
npm run test

# Run in watch mode
npm run test -- --watch

# Run with UI
npm run test:ui

# Run coverage
npm run test:coverage

# Run specific file
npm run test -- UserProfile.test.tsx
```

## Debugging Tests

```typescript
// Use debug() to pause execution
import { debug } from '@testing-library/react';

render(<MyComponent />);
debug(screen.getByRole('button'));
```

## Resources

- [Vitest Docs](https://vitest.dev/)
- [Testing Library Docs](https://testing-library.com/)
- [React Testing Library](https://testing-library.com/react)
