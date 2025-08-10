import React from "react";
import { render, screen } from "@testing-library/react";
import { DistributionTablePresentation } from "../components/DistributionTable/DistributionTablePresentation";
import { Distribution } from "@uplift/types";

// Mock the child components
jest.mock("../components/DistributionTable/components/Filter/Filter", () => ({
  Filter: ({ name, value, placeholder, onChange }: any) => (
    <select
      data-testid={`filter-${name}`}
      value={value}
      onChange={(e) => onChange && onChange(name, e.target.value)}
    >
      <option value="">{placeholder}</option>
    </select>
  ),
}));

jest.mock("../components/DistributionTable/components/Table/Table", () => ({
  Table: ({ table }: any) => (
    <table data-testid="distribution-table">
      <tbody>
        <tr>
          <td>Mock Table Content</td>
        </tr>
      </tbody>
    </table>
  ),
}));

jest.mock(
  "../components/DistributionTable/components/Pagination/Pagination",
  () => ({
    Pagination: ({ table }: any) => (
      <div data-testid="pagination">Pagination</div>
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

// Helper function to create a mock table
const createMockTable = (data: Distribution[] = []) => {
  return {
    getHeaderGroups: () => [],
    getRowModel: () => ({ rows: [] }),
    getState: () => ({}),
    setPageIndex: jest.fn(),
    getPageCount: () => 1,
    getCanPreviousPage: () => false,
    getCanNextPage: () => false,
    previousPage: jest.fn(),
    nextPage: jest.fn(),
  } as any;
};

describe("DistributionTablePresentation Component", () => {
  const defaultProps = {
    table: createMockTable(),
    isLoading: false,
    error: null,
    filters: { region: "", status: "" },
    regions: ["Region 1", "Region 2"],
    statuses: ["Completed", "In Progress"],
    onFilterChange: jest.fn(),
    hasResults: true,
  };

  it("renders loading state when isLoading is true", () => {
    render(
      <DistributionTablePresentation {...defaultProps} isLoading={true} />
    );

    const loader = screen.getByTestId("loader");
    expect(loader).toBeInTheDocument();
    expect(loader).toHaveAttribute("data-size", "lg");
    expect(loader).toHaveTextContent("Loading...");
  });

  it("renders error state when error is present", () => {
    const errorMessage = "Failed to load distributions";
    const error = new Error(errorMessage);

    render(<DistributionTablePresentation {...defaultProps} error={error} />);

    const errorElement = screen.getByTestId("error");
    expect(errorElement).toBeInTheDocument();
    expect(errorElement).toHaveTextContent(
      `Error loading distributions: ${errorMessage}`
    );
    expect(errorElement).toHaveAttribute("role", "alert");
  });

  it("renders table and filters when data is available", () => {
    render(<DistributionTablePresentation {...defaultProps} />);

    // Check that filters are rendered
    const regionFilter = screen.getByTestId("filter-region");
    const statusFilter = screen.getByTestId("filter-status");
    expect(regionFilter).toBeInTheDocument();
    expect(statusFilter).toBeInTheDocument();

    // Check that table is rendered
    const table = screen.getByTestId("distribution-table");
    expect(table).toBeInTheDocument();

    // Check that pagination is rendered
    const pagination = screen.getByTestId("pagination");
    expect(pagination).toBeInTheDocument();

    // Check filter labels
    expect(screen.getByText("Region")).toBeInTheDocument();
    expect(screen.getByText("Status")).toBeInTheDocument();
  });

  it("renders no results message when hasResults is false", () => {
    render(
      <DistributionTablePresentation {...defaultProps} hasResults={false} />
    );

    // Check that filters are still rendered
    const regionFilter = screen.getByTestId("filter-region");
    const statusFilter = screen.getByTestId("filter-status");
    expect(regionFilter).toBeInTheDocument();
    expect(statusFilter).toBeInTheDocument();

    // Check that no results message is displayed
    expect(screen.getByText("No results found")).toBeInTheDocument();

    // Check that table and pagination are not rendered
    expect(screen.queryByTestId("distribution-table")).not.toBeInTheDocument();
    expect(screen.queryByTestId("pagination")).not.toBeInTheDocument();
  });
});
