export type ChartData = {
  pieData: PieChartData[];
  lineData: LineChartData[];
  summaryStats: SummaryStats;
};

export type PieChartData = {
  name: string;
  value: number;
};

export type LineChartData = {
  name: string;
  beneficiaries: number;
};

export type SummaryStats = {
  totalDistributions: number;
  totalBeneficiaries: number;
  averageBeneficiaries: number;
  uniqueRegions: number;
};
