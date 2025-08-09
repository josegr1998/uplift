# Mobile Distribution List

A comprehensive React Native component for displaying and managing distribution lists with filtering, pagination, and navigation capabilities.

## Features

- **Scrollable List**: Displays distributions in a clean card format
- **Filtering**: Filter by Region and Status with dropdown selectors
- **Pagination**: Handles large datasets with page navigation
- **Navigation**: Tap to view detailed distribution information
- **Loading States**: Shows loading indicators during data fetching
- **Error Handling**: Displays error messages with retry options
- **Responsive Design**: Optimized for mobile screens

## Components

### DistributionListContainer

The main container component that handles:

- Data fetching using the `getDistributions` network function
- State management for filters and loading states
- Navigation to detail screens
- Error handling

### DistributionListPresentation

The presentation component that handles:

- UI rendering and styling
- Filter interactions
- Pagination logic
- Loading and error state displays

### Filter

A reusable dropdown component for filtering distributions by:

- Region
- Status

### Pagination

A pagination component that provides:

- Page navigation buttons
- Page number display
- Smart ellipsis for large page counts

## Usage

```tsx
import { DistributionList } from "@uplift/ui/mobile";

export default function DistributionsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <DistributionList />
    </SafeAreaView>
  );
}
```

## Navigation

The component automatically handles navigation to detail screens using Expo Router:

- Tapping a distribution card navigates to `/distribution/[id]`
- The detail screen shows comprehensive distribution information
- Back navigation is handled automatically

## Styling

The component uses a consistent design system with:

- Material Design-inspired colors
- Card-based layouts
- Status badges with color coding
- Responsive typography
- Touch-friendly interaction areas

## Data Structure

Expects `Distribution` objects with:

- `id`: Unique identifier
- `region`: Geographic region
- `date`: Distribution date
- `status`: Current status (Planned, Completed, In Progress, Pending)
- `beneficiaries`: Number of beneficiaries
- `aidType`: Type of aid being distributed
- `deliveryChannel`: Method of distribution

## Network Integration

Uses the shared `@uplift/network` package for data fetching:

- `getDistributions()`: Fetches the list of distributions
- `getDistributionDetails(id)`: Fetches detailed information for a specific distribution

## Performance

- Implements pagination to handle large datasets efficiently
- Uses React Native's FlatList for optimal scrolling performance
- Memoized filter calculations to prevent unnecessary re-renders
- Efficient state management with proper dependency arrays
