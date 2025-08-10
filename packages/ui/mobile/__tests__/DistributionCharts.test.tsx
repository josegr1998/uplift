import React from "react";
import { render, screen } from "@testing-library/react";
import { DistributionChartsPresentation } from "../components/DistributionCharts/DistributionChartsPresentation";

// Mock the child components
jest.mock(
  "../components/DistributionCharts/components/PieChart/PieChart",
  () => ({
    PieChart: () => <div data-testid="pie-chart">Pie Chart</div>,
  })
);

jest.mock(
  "../components/DistributionCharts/components/LineChart/LineChart",
  () => ({
    LineChart: () => <div data-testid="line-chart">Line Chart</div>,
  })
);

jest.mock(
  "../components/DistributionCharts/components/Statistics/Statistics",
  () => ({
    Statistics: () => <div data-testid="statistics">Statistics</div>,
  })
);

jest.mock("../components/Loading/Loading", () => ({
  Loading: () => <div data-testid="loading">Loading...</div>,
}));

jest.mock("../components/ErrorDisplay/ErrorDisplay", () => ({
  ErrorDisplay: ({ message }: any) => (
    <div data-testid="error-display">{message}</div>
  ),
}));

// Mock React Native components and StyleSheet
jest.mock("react-native", () => ({
  View: ({ children, style, ...props }: any) => {
    // Filter out React Native specific props
    const { showsVerticalScrollIndicator, ...domProps } = props;
    return (
      <div data-testid="view" style={style} {...domProps}>
        {children}
      </div>
    );
  },
  Text: ({ children, style, ...props }: any) => {
    // Filter out React Native specific props
    const { numberOfLines, ellipsizeMode, ...domProps } = props;
    return (
      <span data-testid="text" style={style} {...domProps}>
        {children}
      </span>
    );
  },
  ScrollView: ({ children, style, ...props }: any) => {
    // Filter out React Native specific props
    const {
      showsVerticalScrollIndicator,
      showsHorizontalScrollIndicator,
      contentContainerStyle,
      ...domProps
    } = props;
    return (
      <div data-testid="scroll-view" style={style} {...domProps}>
        {children}
      </div>
    );
  },
  StyleSheet: {
    create: (styles: any) => styles,
  },
}));

// Mock the theme context
jest.mock("../context/ThemeContext", () => ({
  useTheme: () => ({
    colors: {
      surface: "#FFFFFF",
      background: "#F5F5F5",
      textPrimary: "#000000",
    },
  }),
}));

describe("DistributionChartsPresentation Component", () => {
  const mockProps = {
    chartApiData: {
      pieData: [{ name: "Food", value: 5 }],
      lineData: [{ name: "Jan 2025", beneficiaries: 1000 }],
      summaryStats: {
        totalDistributions: 10,
        totalBeneficiaries: 3700,
        averageBeneficiaries: 370,
        uniqueRegions: 5,
      },
    },
    isLoading: false,
    error: null,
    pieChartData: [{ name: "Food", value: 5, color: "#007AFF" }],
    lineChartData: { labels: ["Jan"], datasets: [{ data: [1000] }] },
    summaryStats: {
      totalDistributions: 10,
      totalBeneficiaries: 3700,
      averageBeneficiaries: 370,
      uniqueRegions: 5,
    },
    screenWidth: 375,
    chartConfig: {},
  };

  it("renders loading state when isLoading is true", () => {
    render(<DistributionChartsPresentation {...mockProps} isLoading={true} />);

    expect(screen.getByTestId("loading")).toBeInTheDocument();
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("renders error state when error is present", () => {
    const error = new Error("Failed to load data");
    render(<DistributionChartsPresentation {...mockProps} error={error} />);

    expect(screen.getByTestId("error-display")).toBeInTheDocument();
    expect(screen.getByText("Failed to load data")).toBeInTheDocument();
  });

  it("renders charts and analytics when data is available", () => {
    render(<DistributionChartsPresentation {...mockProps} />);

    expect(screen.getByText("Distribution Analytics")).toBeInTheDocument();
    expect(screen.getByTestId("statistics")).toBeInTheDocument();
    expect(screen.getByTestId("pie-chart")).toBeInTheDocument();
    expect(screen.getByTestId("line-chart")).toBeInTheDocument();
  });
});
