"use client";

import { Distribution } from "@uplift/types";
import { ChartData } from "./DistributionCharts.types";

export const mapDistributionsToChartData = (
  distributions: Distribution[]
): ChartData => {
  // Process data for pie chart (distributions by aid type)
  const typeData = distributions.reduce((acc, distribution) => {
    const type = distribution.aidType;
    acc[type] = (acc[type] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const pieData = Object.entries(typeData).map(([name, value]) => ({
    name,
    value,
  }));

  // Process data for line chart (beneficiaries over time)
  const timeData = distributions.reduce((acc, distribution) => {
    const month = new Date(distribution.date).toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    });
    acc[month] = (acc[month] || 0) + distribution.beneficiaries;
    return acc;
  }, {} as Record<string, number>);

  const lineData = Object.entries(timeData)
    .map(([name, value]) => ({
      name,
      beneficiaries: value,
    }))
    .sort((a, b) => new Date(a.name).getTime() - new Date(b.name).getTime());

  // Calculate summary statistics
  const totalBeneficiaries = distributions.reduce(
    (sum, d) => sum + d.beneficiaries,
    0
  );
  const averageBeneficiaries =
    distributions.length > 0
      ? Math.round(totalBeneficiaries / distributions.length)
      : 0;
  const uniqueRegions = new Set(distributions.map((d) => d.region)).size;

  const summaryStats = {
    totalDistributions: distributions.length,
    totalBeneficiaries,
    averageBeneficiaries,
    uniqueRegions,
  };

  return {
    pieData,
    lineData,
    summaryStats,
  };
};
