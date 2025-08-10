"use client";

import { useQuery } from "@tanstack/react-query";
import { getDistributions } from "@uplift/network";
import { mapDistributionsToChartData } from "./DistributionCharts.mappers";
import { DistributionChartsPresentation } from "./DistributionChartsPresentation";

export const DistributionChartsContainer = () => {
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
      error={error}
    />
  );
};
