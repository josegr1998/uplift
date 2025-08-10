# Mobile UI Package

This package contains React Native components for the mobile app, now powered by TanStack Query for efficient data fetching and state management.

## TanStack Query Implementation

### What Changed

The mobile components have been refactored from manual state management to use TanStack Query:

**Before (Manual State Management):**

```tsx
const [distributions, setDistributions] = useState<Distribution[]>([]);
const [isLoading, setIsLoading] = useState(true);
const [error, setError] = useState<Error | null>(null);

useEffect(() => {
  const fetchDistributions = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const data = await getDistributions();
      setDistributions(data);
    } catch (err) {
      setError(
        err instanceof Error ? err : new Error("Failed to fetch distributions")
      );
    } finally {
      setIsLoading(false);
    }
  };
  fetchDistributions();
}, []);
```

**After (TanStack Query):**

```tsx
const { data: distributions = [], isLoading, error } = useDistributions();
```

### Benefits

1. **Automatic Caching**: Data is automatically cached and shared between components
2. **Background Updates**: Data stays fresh with automatic background refetching
3. **Error Handling**: Built-in error handling and retry logic
4. **Loading States**: Automatic loading state management
5. **Optimistic Updates**: Support for optimistic UI updates
6. **Request Deduplication**: Multiple components requesting the same data won't trigger duplicate API calls
7. **Offline Support**: Built-in offline detection and handling
8. **DevTools**: Excellent debugging experience with React Query DevTools

### Components Using TanStack Query

- `DistributionTable` - Fetches and displays distribution list
- `DistributionDetails` - Fetches individual distribution details

### Setup

The QueryClientProvider is set up in the mobile app's root layout (`apps/mobile/app/_layout.tsx`) to wrap the entire application.

### Query Keys

- `["distributions"]` - For the distributions list
- `["distribution", id]` - For individual distribution details

### Configuration

The QueryClient is configured with:

- `staleTime: 60 * 1000` (1 minute) - Data is considered fresh for 1 minute
- `retry: 1` - Retry failed requests once

## Usage Example

```tsx
import { useDistributions } from "@uplift/ui/mobile";

function MyComponent() {
  const { data, isLoading, error } = useDistributions();

  if (isLoading) return <LoadingSpinner />;
  if (error) return <ErrorMessage error={error} />;

  return <DataDisplay data={data} />;
}
```
