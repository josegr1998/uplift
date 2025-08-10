import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { DistributionTablePresentation } from "../components/DistributionTable/DistributionTablePresentation";
import { Distribution } from "@uplift/types";

// Mock the child components
jest.mock("../components/DistributionTable/components/Filter/Filter", () => ({
  Filter: ({ name, value, onChange, options, placeholder }: any) => (
    <select
      data-testid={`filter-${name}`}
      value={value}
      onChange={(e) => onChange(name, e.target.value)}
    >
      <option value="">{placeholder}</option>
      {options.map((option: string) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  ),
}));

jest.mock(
  "../components/DistributionTable/components/DistributionCard/DistributionCard",
  () => ({
    DistributionCard: ({ distribution }: any) => (
      <div data-testid="distribution-card">
        <span>Distribution {distribution.id}</span>
      </div>
    ),
  })
);

jest.mock(
  "../components/DistributionTable/components/Pagination/Pagination",
  () => ({
    Pagination: ({ currentPage, totalPages, onPageChange }: any) => (
      <div data-testid="pagination">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
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
  TouchableOpacity: ({ children, onPress, style, ...props }: any) => (
    <button
      onClick={onPress}
      style={style}
      data-testid="touchable-opacity"
      {...props}
    >
      {children}
    </button>
  ),
  FlatList: ({ data, renderItem, keyExtractor, style }: any) => (
    <div data-testid="flat-list" style={style}>
      {data.map((item: any) => (
        <div key={keyExtractor(item)}>{renderItem({ item })}</div>
      ))}
    </div>
  ),
  Alert: {
    alert: jest.fn(),
  },
}));

// Mock the styles
jest.mock(
  "../components/DistributionTable/DistributionTablePresentation.styles",
  () => ({
    createStyles: () => ({
      container: { padding: 16 },
      title: { fontSize: 24, fontWeight: "bold" },
      filterToggleButton: { padding: 12, backgroundColor: "#007AFF" },
      filterToggleText: { color: "#FFFFFF" },
      filterToggleIcon: { color: "#FFFFFF" },
      filtersContainer: { padding: 16 },
      filterRow: { marginBottom: 12 },
      filterLabel: { fontSize: 16, fontWeight: "600" },
      resultsText: { fontSize: 14, color: "#666" },
      list: { flex: 1 },
      bottomSpacer: { height: 100 },
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

describe("DistributionTablePresentation Component", () => {
  const defaultProps = {
    distributions: [
      {
        id: "dist-1",
        name: "Distribution 1",
        region: "North",
        date: "2025-01-15",
        status: "Active",
        beneficiaries: 25,
        aidType: "Food",
        deliveryChannel: "Direct",
      } as Distribution,
      {
        id: "dist-2",
        name: "Distribution 2",
        region: "South",
        date: "2025-01-16",
        status: "Completed",
        beneficiaries: 30,
        aidType: "Medicine",
        deliveryChannel: "Partner",
      } as Distribution,
    ],
    isLoading: false,
    error: null,
    filters: { region: "", status: "" },
    regions: ["North", "South", "East", "West"],
    statuses: ["Active", "Completed", "Pending"],
    onFilterChange: jest.fn(),
    onDistributionSelect: jest.fn(),
    currentPage: 1,
    totalPages: 2,
    onPageChange: jest.fn(),
    totalItems: 2,
    areFiltersVisible: false,
    handleFilterToggle: jest.fn(),
  };

  it("shows loading state when isLoading is true", () => {
    render(
      <DistributionTablePresentation {...defaultProps} isLoading={true} />
    );

    const loading = screen.getByTestId("loading");
    expect(loading).toBeInTheDocument();
    expect(loading).toHaveTextContent("Loading");
    expect(loading).toHaveTextContent("Loading distributions...");
  });

  it("shows error state when error occurs", () => {
    const errorMessage = "Failed to load distributions";
    render(
      <DistributionTablePresentation
        {...defaultProps}
        error={{ message: errorMessage } as Error}
      />
    );

    const errorDisplay = screen.getByTestId("error-display");
    expect(errorDisplay).toBeInTheDocument();
    expect(errorDisplay).toHaveTextContent(errorMessage);
  });

  it("renders distribution list and filters when data is available", () => {
    render(
      <DistributionTablePresentation
        {...defaultProps}
        areFiltersVisible={true}
      />
    );

    // Check title
    expect(screen.getByText("Distribution List")).toBeInTheDocument();

    // Check filter toggle button (when filters are visible, button shows "Hide Filters")
    const toggleButton = screen.getByText("Hide Filters");
    expect(toggleButton).toBeInTheDocument();

    // Check that filters are visible
    expect(screen.getByText("Region")).toBeInTheDocument();
    expect(screen.getByText("Status")).toBeInTheDocument();
    expect(screen.getByTestId("filter-region")).toBeInTheDocument();
    expect(screen.getByTestId("filter-status")).toBeInTheDocument();

    // Check results count
    expect(
      screen.getByText("2 distributions found (Page 1 of 2)")
    ).toBeInTheDocument();

    // Check distribution cards
    const cards = screen.getAllByTestId("distribution-card");
    expect(cards).toHaveLength(2);

    // Check pagination
    const pagination = screen.getByTestId("pagination");
    expect(pagination).toBeInTheDocument();
  });

  it("shows correct filter toggle button text based on filter visibility", () => {
    // Test when filters are hidden
    const { rerender } = render(
      <DistributionTablePresentation
        {...defaultProps}
        areFiltersVisible={false}
      />
    );
    expect(screen.getByText("Show Filters")).toBeInTheDocument();

    // Test when filters are visible
    rerender(
      <DistributionTablePresentation
        {...defaultProps}
        areFiltersVisible={true}
      />
    );
    expect(screen.getByText("Hide Filters")).toBeInTheDocument();
  });
});
