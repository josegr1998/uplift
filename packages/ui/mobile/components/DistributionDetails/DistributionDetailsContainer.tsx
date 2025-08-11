import React from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useQuery } from "@tanstack/react-query";
import { getDistributionDetails } from "@uplift/network";
import { DistributionDetailsPresentation } from "./DistributionDetailsPresentation";
import { mapDistributionDetails } from "./DistributionDetails.mappers";

export const DistributionDetailsContainer = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();

  // Use React Query for data fetching
  const {
    data: distribution,
    isLoading,
    error,
    refetch,
    isRefetching,
  } = useQuery({
    queryKey: ["distribution", id],
    queryFn: () => getDistributionDetails(id!),
    enabled: !!id, // Only run query when id is available
  });

  const handleBack = () => {
    router.back();
  };

  const handleRefresh = () => {
    refetch();
  };

  const mappedDistributionDetails = mapDistributionDetails(distribution);

  return (
    <DistributionDetailsPresentation
      distribution={mappedDistributionDetails || null}
      isLoading={isLoading}
      error={error?.message || null}
      onBack={handleBack}
      onRefresh={handleRefresh}
      isRefreshing={isRefetching}
    />
  );
};
