import React, { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000, // 1 minute
        retry: 1,
        refetchOnWindowFocus: false, // Disable for mobile
      },
    },
  });
}

let mobileQueryClient: QueryClient | undefined = undefined;

function getQueryClient() {
  if (!mobileQueryClient) mobileQueryClient = makeQueryClient();
  return mobileQueryClient;
}

export const Provider = ({ children }: { children: React.ReactNode }) => {
  const [queryClient] = useState(() => getQueryClient());

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
