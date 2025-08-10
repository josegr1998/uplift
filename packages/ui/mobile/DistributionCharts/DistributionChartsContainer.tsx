import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getDistributions } from "@uplift/network";
import { mapDistributionsToChartData } from "./DistributionCharts.mappers";
import { DistributionChartsPresentation } from "./DistributionChartsPresentation";

export const DistributionChartsContainer = () => {
  // Use React Query for data fetching
  const {
    data: distributions = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["distributions"],
    queryFn: getDistributions,
  });

  const chartData = mapDistributionsToChartData(distributions);

  return (
    <DistributionChartsPresentation
      chartData={chartData}
      isLoading={isLoading}
      error={error as Error | null}
    />
  );
};
