# uplift

A monorepo containing web and mobile applications with shared UI components and utilities.

## Project Setup

### Prerequisites

- Node.js and Yarn package manager
- For mobile development:
  - **macOS**: Xcode with iOS Simulator
  - **Windows**: Android Studio with Android Emulator
  - **Both**: React Native CLI and Expo CLI

### Installation

```bash
# Install all dependencies across the monorepo
yarn install
```

### Development Commands

#### Web Application

```bash
# Start the Next.js development server
yarn dev:web
```

The web app will be available at `http://localhost:3000`

#### Mobile Application

```bash
# Start the React Native development server
yarn dev:mobile
```

This will start the Metro bundler and open the Expo development tools.

## Testing

### Web Testing

```bash
# Run web-specific tests
yarn test:web

# Run all UI tests
yarn test:ui

# Run tests in watch mode
yarn test:ui:watch

# Generate test coverage report
yarn test:ui:coverage
```

### Mobile Testing

```bash
# Run mobile-specific tests
yarn test:mobile
```

**Note**: For mobile testing, ensure you have the appropriate development environment set up:

- **macOS**: Xcode with iOS Simulator for iOS testing
- **Windows**: Android Studio with Android Emulator for Android testing

## Project Structure

### Packages (`packages/`)

The project uses a monorepo structure with shared packages:

- **`ui/`**: Shared UI components for both web and mobile
  - **`web/`**: Web-specific components (React/Next.js)
  - **`mobile/`**: Mobile-specific components (React Native)
- **`types/`**: Shared TypeScript type definitions
- **`network/`**: Network utilities and API clients

### Applications (`apps/`)

Individual applications that consume the shared packages:

- **`web/`**: Next.js web application
- **`mobile/`**: React Native mobile application (Expo)

## Theme System

The theme system is configured at the application level, allowing each app to have its own theme configuration.

### Web Theme (`apps/web/src/app/globals.css`)

The web application uses CSS custom properties (CSS variables) defined in the global CSS file. The theme includes:

- Color palette (primary, secondary, neutral, semantic colors)
- Font size scale
- Component-specific variables

### Mobile Theme (`packages/ui/mobile/context/ThemeContext.tsx`)

The mobile application uses a React Context-based theme system with:

- Comprehensive color definitions
- Spacing scale
- Border radius values
- Shadow configurations
- Typography settings

The theme is passed down through the `ThemeProvider` in the mobile app's layout (`apps/mobile/app/_layout.tsx`), wrapping the entire application and making theme values available to all components via the `useTheme` hook.

## Component Architecture

Components are organized by platform within the `packages/ui/` directory:

- **Web components**: Built with React/Next.js, styled with CSS/Tailwind
- **Mobile components**: Built with React Native, styled with StyleSheet

This structure allows for platform-specific optimizations while maintaining consistent design patterns across the application ecosystem.

## Data Fetching & State Management

### Current Implementation (Demo)

For this demo, both web and mobile applications use **TanStack Query** for data fetching and state management. This provides a consistent client-side data fetching experience across platforms.

### Production Web App Approach

In a production web application, the preferred approach would be:

- **Server-Side Rendering (SSR)**: Handle data requests directly within server components for better performance and SEO
- **Server Actions**: Use Next.js server actions for form submissions and mutations instead of client-side API calls
- **Direct Server Requests**: Eliminate the need for client-side data fetching libraries by making requests directly on the server

## Component Patterns

### Container/Presentation Pattern

The application follows the **Container/Presentation** pattern where:

- **Container components**: Handle business logic, data fetching, and state management
- **Presentation components**: Focus purely on UI rendering and user interactions

### Component Sharing Opportunities

Many of the presentation components rendered inside containers could be extracted as common components in a larger application:

- **Shared UI Package**: These components could be exported from the `packages/ui/` directory
- **Cross-App Reusability**: Common components could be shared across multiple applications within the monorepo
- **Design System**: Building a comprehensive design system with reusable, platform-agnostic components

This architecture provides flexibility to gradually extract and share components as the application grows, while maintaining the current demo structure.

---

## Screenshots

<img width="1382" height="946" alt="image" src="https://github.com/user-attachments/assets/7b179cd6-4a80-44d3-8ef2-49d5f8178ade" />
<img width="1067" height="733" alt="image" src="https://github.com/user-attachments/assets/0fe67cd7-dce3-4cdf-b571-9ab0234b7a19" />
<img width="1073" height="810" alt="image" src="https://github.com/user-attachments/assets/b549c014-6ea7-444a-9bfa-273eec6bb04a" />
<img width="435" height="912" alt="image" src="https://github.com/user-attachments/assets/8eec2c97-60d5-4c7a-9ca9-fa1f2cc21b95" />
<img width="434" height="920" alt="image" src="https://github.com/user-attachments/assets/401c9401-afa1-46f8-8b27-8a28795f6964" />
<img width="431" height="935" alt="image" src="https://github.com/user-attachments/assets/126d24d5-7f95-4cd6-b627-a632311a19b8" />
<img width="432" height="925" alt="image" src="https://github.com/user-attachments/assets/9c083fdb-795e-406c-9d32-d01afd2966b9" />
