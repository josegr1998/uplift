import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { ErrorDisplay } from "../components/ErrorDisplay/ErrorDisplay";

// Mock the styles file
jest.mock("../components/ErrorDisplay/ErrorDisplay.styles", () => ({
  createStyles: () => ({
    container: { padding: 24, backgroundColor: "#FFFFFF" },
    centered: { flex: 1, justifyContent: "center", alignItems: "center" },
    title: { fontSize: 20, fontWeight: "600", color: "#FF3B30" },
    message: { fontSize: 16, color: "#8E8E93" },
    retryButton: { backgroundColor: "#007AFF", padding: 16, borderRadius: 8 },
    retryButtonText: { fontSize: 16, color: "#FFFFFF", fontWeight: "600" },
  }),
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
  TouchableOpacity: ({
    children,
    onPress,
    style,
    activeOpacity,
    ...props
  }: any) => (
    <button
      onClick={onPress}
      style={style}
      data-testid="touchable-opacity"
      {...props}
    >
      {children}
    </button>
  ),
}));

describe("ErrorDisplay Component", () => {
  it("renders error message and title", () => {
    const { getByText, getByTestId } = render(
      <ErrorDisplay message="Something went wrong" title="Oops!" />
    );

    expect(getByText("Oops!")).toBeInTheDocument();
    expect(getByText("Something went wrong")).toBeInTheDocument();
    expect(getByTestId("view")).toBeInTheDocument();
  });

  it("shows retry button when onRetry is provided", () => {
    const mockOnRetry = jest.fn();
    const { getByText, getByTestId } = render(
      <ErrorDisplay
        message="Network error"
        onRetry={mockOnRetry}
        retryText="Try Again"
      />
    );

    const retryButton = getByText("Try Again");
    expect(retryButton).toBeInTheDocument();
    expect(getByTestId("touchable-opacity")).toBeInTheDocument();

    // Test button click
    fireEvent.click(retryButton);
    expect(mockOnRetry).toHaveBeenCalledTimes(1);
  });

  it("applies custom styling and centered layout", () => {
    const customStyle = { backgroundColor: "red" };
    const { getByTestId } = render(
      <ErrorDisplay
        message="Custom styled error"
        containerStyle={customStyle}
        centered={true}
      />
    );

    const container = getByTestId("view");
    expect(container).toBeInTheDocument();
  });

  it("does not show retry button when showRetryButton is false", () => {
    const mockOnRetry = jest.fn();
    const { queryByText } = render(
      <ErrorDisplay
        message="Error without retry"
        onRetry={mockOnRetry}
        showRetryButton={false}
      />
    );

    expect(queryByText("Retry")).not.toBeInTheDocument();
  });
});
