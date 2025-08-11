import React from "react";
import { render, screen } from "@testing-library/react";
import { DistributionDetailsPresentation } from "../components/DistributionDetails/DistributionDetailsPresentation";
import { DistributionDetails } from "../components/DistributionDetails/DistributionDetails.types";

// Mock the child components
jest.mock(
  "../components/DistributionDetails/components/DistributionHeader/DistributionHeader",
  () => ({
    DistributionHeader: ({ distribution, onBack }: any) => (
      <div data-testid="distribution-header">
        <h1>Distribution {distribution.id}</h1>
        <button onClick={onBack}>Back</button>
      </div>
    ),
  })
);

jest.mock(
  "../components/DistributionDetails/components/DistributionInfo/DistributionInfo",
  () => ({
    DistributionInfo: ({ distribution }: any) => (
      <div data-testid="distribution-info">
        <span>Region: {distribution.region}</span>
        <span>Status: {distribution.status}</span>
        <span>Date: {distribution.date}</span>
        <span>Aid Type: {distribution.aidType}</span>
        <span>Delivery Channel: {distribution.deliveryChannel}</span>
        <span>Beneficiaries: {distribution.beneficiaries}</span>
      </div>
    ),
  })
);

jest.mock(
  "../components/DistributionDetails/components/BeneficiaryList/BeneficiaryList",
  () => ({
    BeneficiaryList: ({ distribution }: any) => (
      <div data-testid="beneficiary-list">
        <h3>Beneficiaries ({distribution.beneficiaryList.length})</h3>
        {distribution.beneficiaryList.map((ben: any) => (
          <div key={ben.id} data-testid="beneficiary-item">
            {ben.name}
          </div>
        ))}
      </div>
    ),
  })
);

jest.mock("../components/ErrorDisplay/ErrorDisplay", () => ({
  ErrorDisplay: ({ message, onRetry }: any) => (
    <div data-testid="error-display">
      <span>{message}</span>
      <button onClick={onRetry}>Retry</button>
    </div>
  ),
}));

jest.mock("../components/Loading/Loading", () => ({
  Loading: ({ message, title }: any) => (
    <div data-testid="loading">
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  ),
}));

// Mock React Native components
jest.mock("react-native", () => ({
  View: ({ children, style, ...props }: any) => (
    <div style={style} data-testid="view" {...props}>
      {children}
    </div>
  ),
  Text: ({ children, style, ...props }: any) => (
    <span style={style} data-testid="text" {...props}>
      {children}
    </span>
  ),
  ScrollView: ({
    children,
    style,
    showsVerticalScrollIndicator,
    refreshControl,
    ...props
  }: any) => (
    <div style={style} data-testid="scroll-view" {...props}>
      {refreshControl}
      {children}
    </div>
  ),
  RefreshControl: ({ refreshing, onRefresh, colors, tintColor }: any) => (
    <div data-testid="refresh-control" onClick={onRefresh}>
      {refreshing ? "Refreshing..." : "Pull to refresh"}
    </div>
  ),
}));

jest.mock("react-native-safe-area-context", () => ({
  SafeAreaView: ({ children, style, ...props }: any) => (
    <div style={style} data-testid="safe-area-view" {...props}>
      {children}
    </div>
  ),
}));

// Mock the styles
jest.mock(
  "../components/DistributionDetails/DistributionDetails.styles",
  () => ({
    createStyles: () => ({
      container: { flex: 1, backgroundColor: "#FFFFFF" },
      content: { padding: 16 },
    }),
  })
);

// Mock the theme context
jest.mock("../context/ThemeContext", () => ({
  useTheme: () => ({
    colors: { primary: "#007AFF" },
    spacing: { md: 16 },
  }),
}));

describe("DistributionDetailsPresentation Component", () => {
  const defaultProps = {
    distribution: {
      id: "dist-123",
      region: "Southern Region",
      date: "2025-01-15",
      status: "Completed",
      statusStyle: {
        backgroundColor: "#28A745",
        color: "#FFFFFF",
      },
      beneficiaries: 150,
      aidType: "Food",
      deliveryChannel: "Direct",
      beneficiaryList: [
        { id: "ben-1", name: "John Doe" },
        { id: "ben-2", name: "Jane Smith" },
      ],
    } as DistributionDetails,
    isLoading: false,
    error: null,
    onBack: jest.fn(),
    onRefresh: jest.fn(),
    isRefreshing: false,
  };

  it("shows loading state when isLoading is true", () => {
    render(
      <DistributionDetailsPresentation {...defaultProps} isLoading={true} />
    );

    const loading = screen.getByTestId("loading");
    expect(loading).toBeInTheDocument();
    expect(loading).toHaveTextContent("Loading");
    expect(loading).toHaveTextContent("Loading distribution details...");
  });

  it("shows error state when error occurs", () => {
    const errorMessage = "Failed to load distribution details";
    render(
      <DistributionDetailsPresentation {...defaultProps} error={errorMessage} />
    );

    const errorDisplay = screen.getByTestId("error-display");
    expect(errorDisplay).toBeInTheDocument();
    expect(errorDisplay).toHaveTextContent(errorMessage);
  });

  it("renders distribution details when data is available", () => {
    render(<DistributionDetailsPresentation {...defaultProps} />);

    // Check that header is rendered
    const header = screen.getByTestId("distribution-header");
    expect(header).toBeInTheDocument();
    expect(header).toHaveTextContent("Distribution dist-123");

    // Check that distribution info is rendered
    const info = screen.getByTestId("distribution-info");
    expect(info).toBeInTheDocument();
    expect(info).toHaveTextContent("Region: Southern Region");
    expect(info).toHaveTextContent("Status: Completed");
    expect(info).toHaveTextContent("Date: 2025-01-15");
    expect(info).toHaveTextContent("Aid Type: Food");
    expect(info).toHaveTextContent("Delivery Channel: Direct");
    expect(info).toHaveTextContent("Beneficiaries: 150");

    // Check that beneficiary list is rendered
    const beneficiaryList = screen.getByTestId("beneficiary-list");
    expect(beneficiaryList).toBeInTheDocument();
    expect(beneficiaryList).toHaveTextContent("Beneficiaries (2)");

    // Check individual beneficiaries
    const beneficiaryItems = screen.getAllByTestId("beneficiary-item");
    expect(beneficiaryItems).toHaveLength(2);
    expect(beneficiaryItems[0]).toHaveTextContent("John Doe");
    expect(beneficiaryItems[1]).toHaveTextContent("Jane Smith");

    // Check that refresh control is rendered
    const refreshControl = screen.getByTestId("refresh-control");
    expect(refreshControl).toBeInTheDocument();
    expect(refreshControl).toHaveTextContent("Pull to refresh");
  });

  it("shows refreshing state when isRefreshing is true", () => {
    render(
      <DistributionDetailsPresentation {...defaultProps} isRefreshing={true} />
    );

    const refreshControl = screen.getByTestId("refresh-control");
    expect(refreshControl).toBeInTheDocument();
    expect(refreshControl).toHaveTextContent("Refreshing...");
  });

  it("calls onRefresh when refresh control is clicked", () => {
    const mockOnRefresh = jest.fn();
    render(
      <DistributionDetailsPresentation
        {...defaultProps}
        onRefresh={mockOnRefresh}
      />
    );

    const refreshControl = screen.getByTestId("refresh-control");
    refreshControl.click();

    expect(mockOnRefresh).toHaveBeenCalledTimes(1);
  });
});
