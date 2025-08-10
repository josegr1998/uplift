import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getDistributions } from "@uplift/network";
import { mapDistributionsToChartData } from "./DistributionCharts.mappers";
import { DistributionChartsPresentation } from "./DistributionChartsPresentation";
import { Dimensions } from "react-native";
import { useTheme } from "../../context/ThemeContext";
import {
  createChartConfig,
  mapLineChartData,
  mapPieChartData,
} from "./DistributionCharts.utils";

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

  const chartApiData = mapDistributionsToChartData(distributions);

  const theme = useTheme();

  const { pieData, lineData, summaryStats } = chartApiData;

  const screenWidth = Dimensions.get("window").width;

  const chartConfig = createChartConfig(theme);

  const pieChartData = mapPieChartData(pieData);

  const lineChartData = mapLineChartData({ lineData, theme });

  return (
    <DistributionChartsPresentation
      chartApiData={chartApiData}
      isLoading={isLoading}
      error={error as Error | null}
      pieChartData={pieChartData}
      lineChartData={lineChartData}
      summaryStats={summaryStats}
      screenWidth={screenWidth}
      chartConfig={chartConfig}
    />
  );
};
