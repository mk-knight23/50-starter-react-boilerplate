---
title: Components
description: Learn about the available components in ReactPrime.
date: 2024-01-12
order: 2
slug: components
category: documentation
---

# Components

ReactPrime comes with a set of pre-built, customizable components that you can use in your project.

## Available Components

### Button

A versatile button component with various styles and states.

```tsx
import { Button } from '@react-prime/components';

export function Example() {
  return (
    <div>
      <Button variant="primary">Primary Button</Button>
      <Button variant="secondary">Secondary Button</Button>
      <Button variant="outline">Outline Button</Button>
      <Button variant="ghost">Ghost Button</Button>
    </div>
  );
}
```

**Props:**

- `variant`: 'primary' | 'secondary' | 'outline' | 'ghost'
- `size`: 'sm' | 'md' | 'lg'
- `disabled`: boolean
- `loading`: boolean
- `onClick`: () => void

### Card

A flexible card component for displaying content.

```tsx
import { Card } from '@react-prime/components';

export function Example() {
  return (
    <Card>
      <Card.Header>
        <Card.Title>Card Title</Card.Title>
        <Card.Description>Card description goes here</Card.Description>
      </Card.Header>
      <Card.Body>
        <p>Card content goes here</p>
      </Card.Body>
      <Card.Footer>
        <Button>Learn More</Button>
      </Card.Footer>
    </Card>
  );
}
```

**Props:**

- `title`: string
- `description?: string
- `children`: React.ReactNode

### Input

A styled input component with validation support.

```tsx
import { Input } from '@react-prime/components';

export function Example() {
  return (
    <Input
      label="Email"
      placeholder="Enter your email"
      required
      validate={email => email.includes('@')}
    />
  );
}
```

**Props:**

- `label`: string
- `placeholder?: string
- `required?: boolean
- `validate?: (value: string) => boolean
- `error?: string

### Modal

A modal dialog component for displaying content.

```tsx
import { Modal } from '@react-prime/components';

export function Example() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Modal Title"
      >
        <p>Modal content goes here</p>
      </Modal>
    </div>
  );
}
```

**Props:**

- `isOpen`: boolean
- `onClose`: () => void
- `title`: string
- `children`: React.ReactNode

### Navbar

A responsive navigation component.

```tsx
import { Navbar } from '@react-prime/components';

export function Example() {
  return (
    <Navbar
      logo="My App"
      navLinks={[
        { label: 'Home', href: '/' },
        { label: 'About', href: '/about' },
        { label: 'Contact', href: '/contact' },
      ]}
    />
  );
}
```

**Props:**

- `logo`: string
- `navLinks`: Array<{ label: string; href: string }>
- `className?: string

## Custom Components

You can extend the base components to create custom ones:

```tsx
import { Button } from '@react-prime/components';

export function CustomButton({ children, ...props }) {
  return (
    <Button
      {...props}
      className="custom-button-style"
    >
      {children}
    </Button>
  );
}
```

## Theming

All components support theming through CSS variables:

```css
:root {
  --rp-primary-color: #6366f1;
  --rp-secondary-color: #8b5cf6;
  --rp-border-radius: 0.5rem;
}

.custom-component {
  color: var(--rp-primary-color);
  border-radius: var(--rp-border-radius);
}
```

## Best Practices

1. **Use TypeScript**: All components have TypeScript definitions.
2. **Destructure props**: Use destructuring for better readability.
3. **Default props**: Provide sensible defaults for optional props.
4. **Accessibility**: Ensure all components are accessible.

## Component Testing

ReactPrime components come with built-in tests:

```tsx
import { render, screen } from '@testing-library/react';
import { Button } from '@react-prime/components';

test('renders button with correct text', () => {
  render(<Button>Click me</Button>);
  expect(screen.getByText('Click me')).toBeInTheDocument();
});
```