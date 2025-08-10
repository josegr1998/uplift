# Button Component

A reusable button component built with CVA (Class Variance Authority) for handling different variants, sizes, and states.

## Features

- **Multiple Variants**: default, secondary, outline, ghost, destructive, success, warning
- **Size Options**: sm, default, lg, xl, icon
- **Rounded Options**: default, full, none
- **Loading State**: Built-in loading spinner
- **Icon Support**: Left and right icon positioning
- **Accessibility**: Proper focus states and disabled handling
- **TypeScript**: Full type safety with CVA

## Usage

```tsx
import { Button } from "@uplift/ui";

// Basic usage
<Button>Click me</Button>

// With variants
<Button variant="secondary">Secondary Button</Button>
<Button variant="outline">Outline Button</Button>
<Button variant="destructive">Delete</Button>

// Different sizes
<Button size="sm">Small</Button>
<Button size="lg">Large</Button>
<Button size="icon">→</Button>

// With icons
<Button leftIcon="←">Back</Button>
<Button rightIcon="→">Next</Button>

// Loading state
<Button loading>Loading...</Button>

// Disabled state
<Button disabled>Disabled</Button>

// Custom styling
<Button className="custom-class">Custom</Button>
```

## Props

| Prop        | Type                                                                                          | Default     | Description                  |
| ----------- | --------------------------------------------------------------------------------------------- | ----------- | ---------------------------- |
| `variant`   | `'default' \| 'secondary' \| 'outline' \| 'ghost' \| 'destructive' \| 'success' \| 'warning'` | `'default'` | Button style variant         |
| `size`      | `'sm' \| 'default' \| 'lg' \| 'xl' \| 'icon'`                                                 | `'default'` | Button size                  |
| `rounded`   | `'default' \| 'full' \| 'none'`                                                               | `'default'` | Border radius style          |
| `loading`   | `boolean`                                                                                     | `false`     | Shows loading spinner        |
| `leftIcon`  | `React.ReactNode`                                                                             | -           | Icon to display on the left  |
| `rightIcon` | `React.ReactNode`                                                                             | -           | Icon to display on the right |
| `disabled`  | `boolean`                                                                                     | `false`     | Disables the button          |
| `className` | `string`                                                                                      | -           | Additional CSS classes       |

## CSS Variables Used

The component uses the following CSS custom properties from your theme:

- `--primary`, `--primary-dark`
- `--secondary`, `--secondary-dark`
- `--success`, `--warning`, `--error`
- `--background`, `--accent`, `--accent-foreground`
- `--ring`, `--input`

## Examples

### Form Buttons

```tsx
<div className="flex gap-3">
  <Button variant="outline" onClick={onCancel}>
    Cancel
  </Button>
  <Button variant="success" onClick={onSave}>
    Save Changes
  </Button>
</div>
```

### Loading States

```tsx
<Button loading={isSubmitting} variant="primary" onClick={handleSubmit}>
  {isSubmitting ? "Submitting..." : "Submit"}
</Button>
```

### Icon Buttons

```tsx
<Button size="icon" variant="ghost" onClick={onMenu}>
  <MenuIcon />
</Button>
```

### Navigation

```tsx
<Button variant="secondary" leftIcon="←" onClick={onBack}>
  Back to Dashboard
</Button>
```
