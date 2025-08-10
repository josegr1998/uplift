import React from "react";
import { render, screen } from "@testing-library/react";
import { DistributionDetailsPresentation } from "../components/DistributionDetails/DistributionDetailsPresentation";
import { DistributionDetails } from "../components/DistributionDetails/DistributionDetails.types";

// Mock the child components
jest.mock(
  "../components/DistributionDetails/components/DistributionHeader/DistributionHeader",
  () => ({
    DistributionHeader: ({ id }: any) => (
      <div data-testid="distribution-header">
        <h1>Distribution {id}</h1>
      </div>
    ),
  })
);

jest.mock(
  "../components/DistributionDetails/components/DistributionInfo/DistributionInfo",
  () => ({
    DistributionInfo: ({ distributionDetails }: any) => (
      <div data-testid="distribution-info">
        <div>Region: {distributionDetails.region}</div>
        <div>Status: {distributionDetails.status}</div>
        <div>Date: {distributionDetails.date}</div>
        <div>Aid Type: {distributionDetails.aidType}</div>
        <div>Delivery Channel: {distributionDetails.deliveryChannel}</div>
        <div>Beneficiaries: {distributionDetails.beneficiaries}</div>
      </div>
    ),
  })
);

jest.mock(
  "../components/DistributionDetails/components/BeneficiaryList/BeneficiaryList",
  () => ({
    BeneficiaryList: ({ beneficiaries }: any) => (
      <div data-testid="beneficiary-list">
        <h3>Beneficiaries ({beneficiaries.length})</h3>
        {beneficiaries.map((beneficiary: any, index: number) => (
          <div key={index} data-testid={`beneficiary-${index}`}>
            {beneficiary.name}
          </div>
        ))}
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

describe("DistributionDetailsPresentation Component", () => {
  const mockDistributionDetails: DistributionDetails = {
    id: "dist-123",
    region: "Southern Region",
    date: "2025-01-15",
    status: "Completed",
    statusColor: "bg-green-100 text-green-800",
    beneficiaries: 1500,
    aidType: "Food",
    deliveryChannel: "Direct Distribution",
    beneficiaryList: [
      { id: "ben-1", name: "John Doe" },
      { id: "ben-2", name: "Jane Smith" },
    ],
  };

  const defaultProps = {
    distributionDetails: mockDistributionDetails,
    isLoading: false,
    error: null,
  };

  it("renders loading state when isLoading is true", () => {
    render(
      <DistributionDetailsPresentation {...defaultProps} isLoading={true} />
    );

    const loader = screen.getByTestId("loader");
    expect(loader).toBeInTheDocument();
    expect(loader).toHaveAttribute("data-size", "lg");
    expect(loader).toHaveTextContent("Loading...");
  });

  it("renders error state when error is present", () => {
    const errorMessage = "Failed to load distribution details";
    const error = new Error(errorMessage);

    render(<DistributionDetailsPresentation {...defaultProps} error={error} />);

    const errorElement = screen.getByTestId("error");
    expect(errorElement).toBeInTheDocument();
    expect(errorElement).toHaveTextContent(
      `Error loading distribution details: ${errorMessage}`
    );
    expect(errorElement).toHaveAttribute("role", "alert");
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
    expect(info).toHaveTextContent("Delivery Channel: Direct Distribution");
    expect(info).toHaveTextContent("Beneficiaries: 1500");

    // Check that beneficiary list is rendered
    const beneficiaryList = screen.getByTestId("beneficiary-list");
    expect(beneficiaryList).toBeInTheDocument();
    expect(beneficiaryList).toHaveTextContent("Beneficiaries (2)");

    const beneficiary1 = screen.getByTestId("beneficiary-0");
    const beneficiary2 = screen.getByTestId("beneficiary-1");
    expect(beneficiary1).toHaveTextContent("John Doe");
    expect(beneficiary2).toHaveTextContent("Jane Smith");
  });

  it("renders error when distributionDetails is undefined", () => {
    render(
      <DistributionDetailsPresentation
        {...defaultProps}
        distributionDetails={undefined}
      />
    );

    const errorElement = screen.getByTestId("error");
    expect(errorElement).toBeInTheDocument();
    expect(errorElement).toHaveTextContent("No distribution details found.");
    expect(errorElement).toHaveAttribute("role", "alert");
  });
});
