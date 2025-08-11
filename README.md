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

## Project Structure

### Packages (`packages/`)

The project uses a monorepo structure with shared packages:

- **`ui/`**: Shared UI components for the different applications the monorepo contains
  - **`web/`**: Web-specific components (React/Next.js)
  - **`mobile/`**: Mobile-specific components (React Native)
- **`types/`**: Shared TypeScript type definitions
- **`network/`**: Network utilities for connecting with apis and external services

### Applications (`apps/`)

Individual applications that consume the shared packages:

For this coding challenge there are only two

- **`web/`**: Next.js web application
- **`mobile/`**: React Native mobile application (Expo)

## Theme System

The theme system is configured at the application level, allowing each app to have its own theme configuration.

### Web Theme (`apps/web/src/app/globals.css`)

The web application uses CSS custom properties (CSS variables) defined in the global CSS file. The theme includes:

- Color palette (primary, secondary, neutral, semantic colors)
- Typograpgy settings

### Mobile Theme (`packages/ui/mobile/context/ThemeContext.tsx`)

The mobile application uses a React Context-based theme system with:

- Comprehensive color definitions
- Spacing scale
- Border radius values
- Shadow configurations
- Typography settings

For this challenge, i made both apps share the same theme colors

The theme is passed down through the `ThemeProvider` in the mobile app's layout (`apps/mobile/app/_layout.tsx`), wrapping the entire application and making theme values available to all components via the `useTheme` hook.

## Component Architecture

Components are organized by platform within the `packages/ui/` directory:

- **Web components**: Built with React/Next.js, styled with CSS/Tailwind
- **Mobile components**: Built with React Native, styled with StyleSheet

This structure allows for platform-specific optimizations while maintaining consistent design patterns across the application ecosystem. Please notice how component folders both for web and mobile follow the same structure, including for their files naming conventions. This shows the similarities that we can have for organizing React and React Native components.

## Data Fetching & State Management

### Current Implementation (Code Challenge)

For this coding challenge, both web and mobile applications use **TanStack Query** for data fetching and state management. This provides a consistent client-side data fetching experience across platforms.

### Production Web App Approach

In a production web application, the preferred approach would be:

- **Server-Side Rendering (SSR)**: Handle data requests directly within server components for better performance and SEO
- **Server Actions**: Use Next.js server actions for form submissions and mutations instead of client-side API calls
- **Direct Server Requests**: Eliminate the need for client-side data fetching libraries by making requests directly on the server, WHEN POSSIBLE AND CONVENIENT.

## Component Patterns

### Container/Presentation Pattern

The application follows the **Container/Presentation** pattern where:

- **Container components**: Handle business logic, data fetching, and state management
- **Presentation components**: Focus purely on UI rendering and user interactions

Even then, please notice i tried to move as much logic as possible to custom hooks, this allows to better separation of concerns, and more clear intention for each piece of logic. If all the logic lived inside the container, there would be no separation of concerns within the bussiness logic itself, this is why having custom hooks and utils allows for better modularization and readability. ALSO, having mappers that ensure all the data the UI/presentation component needs to consume is already formatted,is highly recommended as well. There should be no data formatting/mapping inside presentation components. (I might have missed some on this challenge, im speed running it)

### Component Sharing Opportunities

Some of the components created within specific parent folders could be extracted as common components:

- **Shared UI Package**: These components could be exported from the `packages/ui/mobile/` and `packages/ui/web/` directory directly,
- **Cross-App Reusability**: These components could be shared within different siblings, and of course the applications.

This architecture provides flexibility to gradually extract and share components as the application grows, while maintaining the current demo structure.

## Architectural Notes & Areas for Improvement

### Design System Considerations

- **Typography System**: Didn't think about UI that much, otherwise would've created a comprehensive typography system
- **Component Patterns**: Other patterns such as composition could be used for better component design
- **Generic Components**: It's possible to add more generic components to this solution, as mentioned above.
  Both of the above points and the inclusion of other patterns, could improve readability and also reduce the number of props some components recieve.
- **Accessibility**: Didn't consider accessibility requirements in the current implementation
- **External UI Libraries**: Didn't implement external UI libraries, focusing on custom components, but this is 100% possible.

### Testing & Quality

- **Test Coverage**: Tests are basic - I focused primarily on architecture rather than comprehensive testing
- **Focus**: All these limitations exist because the focus was primarily on architecture and structure

### Service Sharing

Applications can share services too, not just UI components. The monorepo structure allows for:

- Shared business logic
- Common API clients
- Shared utilities and helpers
- Cross-platform service implementations

### Architecture Consistency

The intention is for mobile and web UI to share the same architecture patterns:

- Similar component structure
- Consistent data flow
- Unified state management approaches

### API Design Pattern

Instead of creating two separate endpoints, the solution uses two functions, since we are treating with mocked data anyway. In a real project, those functions could just call external services/APIs as needed, and also have an arg that tells if the function caller is mobile or web. If its web, at least since on this demo we have a next app, we could easily call the function on the server via server action or server component.

### Component Organization Principles

- **Keep Related Code Close**: Hooks, mappers, constants, and utils should be kept close to the component they serve
- **Mapper Responsibility**: Mappers should map any needed props before they go to the presentation component
- **Separation of Concerns**: Clear boundaries between data fetching, transformation and presentation logic

---

## Screenshots

<img width="1382" height="946" alt="image" src="https://github.com/user-attachments/assets/7b179cd6-4a80-44d3-8ef2-49d5f8178ade" />
<img width="1067" height="733" alt="image" src="https://github.com/user-attachments/assets/0fe67cd7-dce3-4cdf-b571-9ab0234b7a19" />
<img width="1073" height="810" alt="image" src="https://github.com/user-attachments/assets/b549c014-6ea7-444a-9bfa-273eec6bb04a" />
<img width="435" height="912" alt="image" src="https://github.com/user-attachments/assets/8eec2c97-60d5-4c7a-9ca9-fa1f2cc21b95" />
<img width="434" height="920" alt="image" src="https://github.com/user-attachments/assets/401c9401-afa1-46f8-8b27-8a28795f6964" />
<img width="431" height="935" alt="image" src="https://github.com/user-attachments/assets/126d24d5-7f95-4cd6-b627-a632311a19b8" />
<img width="432" height="925" alt="image" src="https://github.com/user-attachments/assets/9c083fdb-795e-406c-9d32-d01afd2966b9" />
