# UI Package

This package contains reusable UI components for the monorepo.

## Testing

The UI package uses Jest and React Testing Library for testing components.

### Running Tests

```bash
# Run all tests
yarn test

# Run tests in watch mode (useful during development)
yarn test:watch

# Run tests with coverage report
yarn test:coverage
```

### Test Structure

Tests are located in the `__tests__` directory at the package level and follow the naming convention `*.test.tsx`.

### Test Coverage

**Button Component**: 100% test coverage, testing:

- All variants (primary, secondary, outline, ghost, destructive, success, warning)
- All sizes (sm, default, lg, xl, icon)
- All rounded variants (default, full, none)
- Disabled state
- Loading state
- Click event handling
- Icon support (left and right)
- Custom className support
- Ref forwarding

**Header Component**: 100% test coverage, testing:

- Header element rendering
- Navigation element structure
- Home and Charts navigation links
- Proper styling classes
- Semantic HTML structure
- Accessibility attributes

**Overall**: 27 tests passing across 2 test suites

### Dependencies

The testing setup includes:

- Jest
- React Testing Library
- Jest DOM matchers
- ts-jest for TypeScript support
- jsdom for DOM testing environment

## Components

### Button

A versatile button component with multiple variants, sizes, and states.

**Variants:**

- `primary` (default) - Primary action button
- `secondary` - Secondary action button
- `outline` - Outlined button
- `ghost` - Transparent button
- `destructive` - Destructive action button
- `success` - Success action button
- `warning` - Warning action button

**Sizes:**

- `sm` - Small button
- `default` - Default size button
- `lg` - Large button
- `xl` - Extra large button
- `icon` - Icon-only button

**Props:**

- `variant` - Button variant
- `size` - Button size
- `rounded` - Border radius
- `disabled` - Disabled state
- `loading` - Loading state with spinner
- `leftIcon` - Icon to display on the left
- `rightIcon` - Icon to display on the right
- `className` - Additional CSS classes
- All standard button HTML attributes

### Header

A navigation header component with responsive design.

**Features:**

- Responsive navigation container
- Home and Charts navigation links
- Hover effects and styling
- Semantic HTML structure
- Accessible navigation

**Navigation Links:**

- `/` - Home page
- `/charts` - Charts page
