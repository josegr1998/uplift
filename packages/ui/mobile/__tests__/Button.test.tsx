import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Button } from "../components/Button/Button";

// Mock React Native components
jest.mock("react-native", () => ({
  TouchableOpacity: ({ children, onPress, disabled, style, ...props }: any) => (
    <button
      onClick={onPress}
      disabled={disabled}
      style={style}
      data-testid="touchable-opacity"
      {...props}
    >
      {children}
    </button>
  ),
  Text: ({ children, style, ...props }: any) => (
    <span style={style} data-testid="text" {...props}>
      {children}
    </span>
  ),
  StyleSheet: {
    create: (styles: any) => styles,
  },
}));

describe("Button Component", () => {
  it("renders with title text", () => {
    const { getByText, getByTestId } = render(<Button title="Click me" />);

    expect(getByText("Click me")).toBeInTheDocument();
    expect(getByTestId("touchable-opacity")).toBeInTheDocument();
    expect(getByTestId("text")).toBeInTheDocument();
  });

  it("applies disabled styles when disabled", () => {
    const { getByTestId } = render(
      <Button title="Disabled Button" disabled={true} />
    );

    const button = getByTestId("touchable-opacity");
    expect(button).toBeDisabled();
  });

  it("calls onPress when button is tapped", () => {
    const mockOnPress = jest.fn();
    const { getByTestId } = render(
      <Button title="Tap me" onPress={mockOnPress} />
    );

    const button = getByTestId("touchable-opacity");
    fireEvent.click(button);

    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });

  it("is enabled by default when no disabled prop is passed", () => {
    const { getByTestId } = render(<Button title="Default Button" />);

    const button = getByTestId("touchable-opacity");
    expect(button).not.toBeDisabled();
  });
});
