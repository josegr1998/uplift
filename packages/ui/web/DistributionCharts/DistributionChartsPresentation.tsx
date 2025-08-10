"use client";

import { ChartData } from "./DistributionCharts.types";

import { Loader } from "../Loader/Loader";
import { Error } from "../Error/Error";
import { PieChart } from "./components/PieChart/PieChart";
import { LineChart } from "./components/LineChart/LineChart";

export type Props = {
  chartData: ChartData;
  isLoading: boolean;
  error: Error | null;
};

export const DistributionChartsPresentation = ({
  chartData,
  isLoading,
  error,
}: Props) => {
  if (isLoading) {
    return (
      <div className="flex justify-center items-center p-8">
        <Loader size="lg" />
      </div>
    );
  }

  if (error) {
    return <Error message={`Error loading distributions: ${error.message}`} />;
  }

  const { pieData, lineData, summaryStats } = chartData;

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-[var(--black)] mb-8">
        Distribution Analytics
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Pie Chart - Distributions by Aid Type */}
        <div className="bg-[var(--background)] rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-[var(--black)] mb-4">
            Distributions by Aid Type
          </h2>
          <PieChart pieData={pieData} />
        </div>

        {/* Line Chart - Beneficiaries Over Time */}
        <div className="bg-[var(--background)] rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-[var(--black)] mb-4">
            Beneficiaries Over Time
          </h2>
          <LineChart lineData={lineData} />
        </div>
      </div>

      {/* Summary Statistics */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-[var(--background)] rounded-lg shadow-lg p-6">
          <h3 className="text-lg font-medium text-[var(--black)]">
            Total Distributions
          </h3>
          <p className="text-3xl font-bold text-[var(--primary)]">
            {summaryStats.totalDistributions}
          </p>
        </div>
        <div className="bg-[var(--background)] rounded-lg shadow-lg p-6">
          <h3 className="text-lg font-medium text-[var(--black)]">
            Total Beneficiaries
          </h3>
          <p className="text-3xl font-bold text-[var(--success)]">
            {summaryStats.totalBeneficiaries.toLocaleString()}
          </p>
        </div>
        <div className="bg-[var(--background)] rounded-lg shadow-lg p-6">
          <h3 className="text-lg font-medium text-[var(--black)]">
            Average Beneficiaries
          </h3>
          <p className="text-3xl font-bold text-[var(--secondary)]">
            {summaryStats.averageBeneficiaries.toLocaleString()}
          </p>
        </div>
        <div className="bg-[var(--background)] rounded-lg shadow-lg p-6">
          <h3 className="text-lg font-medium text-[var(--black)]">
            Unique Regions
          </h3>
          <p className="text-3xl font-bold text-[var(--warning)]">
            {summaryStats.uniqueRegions}
          </p>
        </div>
      </div>
    </div>
  );
};
