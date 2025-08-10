import React from "react";
import { render, screen } from "@testing-library/react";
import { DistributionChartsPresentation } from "../components/DistributionCharts/DistributionChartsPresentation";
import { ChartData } from "../components/DistributionCharts/DistributionCharts.types";

// Mock the child components
jest.mock(
  "../components/DistributionCharts/components/PieChart/PieChart",
  () => ({
    PieChart: ({ pieData }: any) => (
      <div data-testid="pie-chart">
        <h3>Pie Chart</h3>
        <div>Data points: {pieData.length}</div>
      </div>
    ),
  })
);

jest.mock(
  "../components/DistributionCharts/components/LineChart/LineChart",
  () => ({
    LineChart: ({ lineData }: any) => (
      <div data-testid="line-chart">
        <h3>Line Chart</h3>
        <div>Data points: {lineData.length}</div>
      </div>
    ),
  })
);

jest.mock("../components/Loader/Loader", () => ({
  Loader: ({ size }: any) => (
    <div data-testid="loader" data-size={size}>
      Loading...
    </div>
  ),
}));

jest.mock("../components/Error/Error", () => ({
  Error: ({ message }: any) => (
    <div data-testid="error" role="alert">
      {message}
    </div>
  ),
}));

describe("DistributionChartsPresentation Component", () => {
  const mockChartData: ChartData = {
    pieData: [
      { name: "Food", value: 5 },
      { name: "Medical", value: 3 },
      { name: "Water", value: 2 },
    ],
    lineData: [
      { name: "Jan 2025", beneficiaries: 1000 },
      { name: "Feb 2025", beneficiaries: 1500 },
      { name: "Mar 2025", beneficiaries: 1200 },
    ],
    summaryStats: {
      totalDistributions: 10,
      totalBeneficiaries: 3700,
      averageBeneficiaries: 370,
      uniqueRegions: 5,
    },
  };

  const defaultProps = {
    chartData: mockChartData,
    isLoading: false,
    error: null,
  };

  it("renders loading state when isLoading is true", () => {
    render(
      <DistributionChartsPresentation {...defaultProps} isLoading={true} />
    );

    const loader = screen.getByTestId("loader");
    expect(loader).toBeInTheDocument();
    expect(loader).toHaveAttribute("data-size", "lg");
    expect(loader).toHaveTextContent("Loading...");
  });

  it("renders error state when error is present", () => {
    const errorMessage = "Failed to load chart data";
    const error = new Error(errorMessage);

    render(<DistributionChartsPresentation {...defaultProps} error={error} />);

    const errorElement = screen.getByTestId("error");
    expect(errorElement).toBeInTheDocument();
    expect(errorElement).toHaveTextContent(
      `Error loading distributions: ${errorMessage}`
    );
    expect(errorElement).toHaveAttribute("role", "alert");
  });

  it("renders charts and analytics when data is available", () => {
    render(<DistributionChartsPresentation {...defaultProps} />);

    // Check that the main title is rendered
    expect(screen.getByText("Distribution Analytics")).toBeInTheDocument();

    // Check that pie chart is rendered
    const pieChart = screen.getByTestId("pie-chart");
    expect(pieChart).toBeInTheDocument();
    expect(pieChart).toHaveTextContent("Pie Chart");
    expect(pieChart).toHaveTextContent("Data points: 3");

    // Check that line chart is rendered
    const lineChart = screen.getByTestId("line-chart");
    expect(lineChart).toBeInTheDocument();
    expect(lineChart).toHaveTextContent("Line Chart");
    expect(lineChart).toHaveTextContent("Data points: 3");

    // Check that chart section titles are rendered
    expect(screen.getByText("Distributions by Aid Type")).toBeInTheDocument();
    expect(screen.getByText("Beneficiaries Over Time")).toBeInTheDocument();

    // Check that summary statistics are rendered
    expect(screen.getByText("10")).toBeInTheDocument(); // totalDistributions
    expect(screen.getByText("3,700")).toBeInTheDocument(); // totalBeneficiaries
    expect(screen.getByText("370")).toBeInTheDocument(); // averageBeneficiaries
    expect(screen.getByText("5")).toBeInTheDocument(); // uniqueRegions
  });
});
