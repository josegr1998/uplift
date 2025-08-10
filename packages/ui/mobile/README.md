# Mobile UI Package - Theme System

This package provides a flexible theme system that allows mobile apps to customize the appearance of UI components while maintaining design consistency.

## How It Works

The theme system uses React Context to provide design tokens (colors, spacing, typography, etc.) to all components within the `ThemeProvider`. This allows each mobile app to have its own unique visual identity while using the same component logic.

## Architecture

```
apps/mobile/app (Custom Theme)
    ↓
ThemeProvider (provides custom theme)
    ↓
packages/ui/mobile (components use theme)
    ↓
ThemeContext (consumes theme)
```

## Usage

### 1. Wrap Your App with ThemeProvider

```typescript
import { ThemeProvider, defaultTheme, type Theme } from "@monorepo/ui/mobile";

// Create your custom theme
const customTheme: Theme = {
  ...defaultTheme,
  colors: {
    ...defaultTheme.colors,
    primary: "#FF6B6B", // Your brand color
    secondary: "#4ECDC4", // Your accent color
    background: "#FAFAFA", // Your background
  },
  spacing: {
    ...defaultTheme.spacing,
    lg: 20, // Custom spacing
  },
};

// Wrap your app
export default function App() {
  return (
    <ThemeProvider theme={customTheme}>
      {/* All components will use your custom theme */}
      <YourAppContent />
    </ThemeProvider>
  );
}
```

### 2. Components Automatically Use the Theme

All components in this package automatically consume the theme from context:

```typescript
import { DistributionTablePresentation } from "@monorepo/ui/mobile";

// No need to pass theme - it's automatically used from context
<DistributionTablePresentation
  distributions={distributions}
  // ... other props
/>;
```

### 3. Dynamic Theme Switching

You can switch themes dynamically:

```typescript
import React, { useState } from "react";
import { ThemeProvider, defaultTheme } from "@monorepo/ui/mobile";

const lightTheme = defaultTheme;
const darkTheme = {
  ...defaultTheme,
  colors: {
    ...defaultTheme.colors,
    background: "#1A1A1A",
    textPrimary: "#FFFFFF",
    // ... other dark theme colors
  },
};

export const AppWithThemeSwitcher = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const currentTheme = isDarkMode ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={currentTheme}>
      <YourAppContent />
      <Button onPress={() => setIsDarkMode(!isDarkMode)}>Toggle Theme</Button>
    </ThemeProvider>
  );
};
```

## Theme Structure

The theme object contains:

- **colors**: Primary, secondary, semantic colors, backgrounds, text colors
- **spacing**: Consistent spacing scale (xs, sm, md, lg, xl, xxl)
- **borderRadius**: Border radius values (sm, md, lg, xl)
- **shadows**: Shadow configurations for elevation
- **typography**: Font sizes, weights, and colors

## Benefits

✅ **App-Level Customization**: Each mobile app can have unique branding
✅ **Consistent Design Language**: All components use the same design tokens
✅ **Easy Theming**: Simple theme object for customization
✅ **Type Safety**: Full TypeScript support for theme properties
✅ **Performance**: Theme changes only re-render affected components
✅ **Maintainable**: Central design system with local customization

## Example Themes

See `examples/AppThemeExample.tsx` for complete examples of:

- Custom app themes
- Dark mode themes
- Dynamic theme switching

## Migration from Hardcoded Styles

If you're migrating from hardcoded styles:

1. **Before**: Components imported design tokens directly
2. **After**: Components use `useTheme()` hook to get current theme
3. **Result**: Components automatically adapt to app's theme

This system gives you the best of both worlds: centralized design consistency AND app-level customization flexibility.
