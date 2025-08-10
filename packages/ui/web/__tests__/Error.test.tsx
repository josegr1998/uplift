import React from "react";
import { render, screen } from "@testing-library/react";
import { Error } from "../components/Error/Error";

describe("Error Component", () => {
  it("renders with default props", () => {
    render(<Error />);

    const errorElement = screen.getByRole("alert");
    expect(errorElement).toBeInTheDocument();
    expect(errorElement).toHaveTextContent("An error occurred");
    expect(errorElement).toHaveClass("p-4");
    expect(errorElement).toHaveClass("rounded-md");
    expect(errorElement).toHaveClass("bg-[var(--error)]/10");
    expect(errorElement).toHaveClass("text-[var(--error)]");
    expect(errorElement).toHaveClass("text-sm");
  });

  it("renders with custom message", () => {
    const customMessage = "Something went wrong with the operation";
    render(<Error message={customMessage} />);

    const errorElement = screen.getByRole("alert");
    expect(errorElement).toBeInTheDocument();
    expect(errorElement).toHaveTextContent(customMessage);
  });

  it("renders with empty message", () => {
    render(<Error message="" />);

    const errorElement = screen.getByRole("alert");
    expect(errorElement).toBeInTheDocument();
    expect(errorElement).toHaveTextContent("");
  });

  it("renders with undefined message", () => {
    render(<Error message={undefined} />);

    const errorElement = screen.getByRole("alert");
    expect(errorElement).toBeInTheDocument();
    expect(errorElement).toHaveTextContent("An error occurred");
  });

  it("applies custom className", () => {
    const customClass = "custom-error-class";
    render(<Error className={customClass} />);

    const errorElement = screen.getByRole("alert");
    expect(errorElement).toHaveClass(customClass);
    expect(errorElement).toHaveClass("p-4"); // Default classes should still be present
  });

  it("applies multiple custom classes", () => {
    const customClasses = "custom-error-class another-class third-class";
    render(<Error className={customClasses} />);

    const errorElement = screen.getByRole("alert");
    expect(errorElement).toHaveClass("custom-error-class");
    expect(errorElement).toHaveClass("another-class");
    expect(errorElement).toHaveClass("third-class");
  });

  it("forwards ref correctly", () => {
    const ref = React.createRef<HTMLDivElement>();
    render(<Error ref={ref} />);

    expect(ref.current).toBeInstanceOf(HTMLDivElement);
    expect(ref.current).toHaveAttribute("role", "alert");
  });

  it("has correct accessibility attributes", () => {
    render(<Error message="Accessibility test" />);

    const errorElement = screen.getByRole("alert");
    expect(errorElement).toHaveAttribute("role", "alert");
  });

  it("renders with long message", () => {
    const longMessage =
      "This is a very long error message that should wrap properly and display all the text content without any truncation or overflow issues";
    render(<Error message={longMessage} />);

    const errorElement = screen.getByRole("alert");
    expect(errorElement).toHaveTextContent(longMessage);
  });

  it("renders with special characters in message", () => {
    const specialMessage =
      "Error with special chars: !@#$%^&*()_+-=[]{}|;':\",./<>?";
    render(<Error message={specialMessage} />);

    const errorElement = screen.getByRole("alert");
    expect(errorElement).toHaveTextContent(specialMessage);
  });

  it("renders with HTML-like content in message", () => {
    const htmlLikeMessage = "Error with <script>alert('test')</script> content";
    render(<Error message={htmlLikeMessage} />);

    const errorElement = screen.getByRole("alert");
    expect(errorElement).toHaveTextContent(htmlLikeMessage);
    // Should not render as actual HTML
    expect(errorElement.innerHTML).toContain("&lt;script&gt;");
  });

  it("renders with emoji in message", () => {
    const emojiMessage = "🚨 Critical error occurred! ⚠️";
    render(<Error message={emojiMessage} />);

    const errorElement = screen.getByRole("alert");
    expect(errorElement).toHaveTextContent(emojiMessage);
  });

  it("renders with numbers in message", () => {
    const numericMessage = "Error code: 404, Status: 500";
    render(<Error message={numericMessage} />);

    const errorElement = screen.getByRole("alert");
    expect(errorElement).toHaveTextContent(numericMessage);
  });

  it("renders multiple instances without conflicts", () => {
    const { container } = render(
      <div>
        <Error message="First error" />
        <Error message="Second error" />
        <Error message="Third error" />
      </div>
    );

    const errorElements = screen.getAllByRole("alert");
    expect(errorElements).toHaveLength(3);
    expect(errorElements[0]).toHaveTextContent("First error");
    expect(errorElements[1]).toHaveTextContent("Second error");
    expect(errorElements[2]).toHaveTextContent("Third error");
  });

  it("maintains consistent styling across renders", () => {
    const { rerender } = render(<Error message="Initial message" />);

    const initialElement = screen.getByRole("alert");
    const initialClasses = initialElement.className;

    rerender(<Error message="Updated message" />);

    const updatedElement = screen.getByRole("alert");
    expect(updatedElement.className).toBe(initialClasses);
  });

  it("handles null className gracefully", () => {
    render(<Error className={null as any} />);

    const errorElement = screen.getByRole("alert");
    expect(errorElement).toBeInTheDocument();
    // Should still have default classes
    expect(errorElement).toHaveClass("p-4");
    expect(errorElement).toHaveClass("rounded-md");
  });

  it("handles undefined className gracefully", () => {
    render(<Error className={undefined} />);

    const errorElement = screen.getByRole("alert");
    expect(errorElement).toBeInTheDocument();
    // Should still have default classes
    expect(errorElement).toHaveClass("p-4");
    expect(errorElement).toHaveClass("rounded-md");
  });

  it("has correct display name", () => {
    expect(Error.displayName).toBe("Error");
  });

  it("renders with complex className combinations", () => {
    const complexClasses = "mt-4 mb-2 px-6 py-3 border-l-4 border-red-500";
    render(<Error className={complexClasses} />);

    const errorElement = screen.getByRole("alert");
    expect(errorElement).toHaveClass("mt-4");
    expect(errorElement).toHaveClass("mb-2");
    expect(errorElement).toHaveClass("px-6");
    expect(errorElement).toHaveClass("py-3");
    expect(errorElement).toHaveClass("border-l-4");
    expect(errorElement).toHaveClass("border-red-500");
    // Default classes should still be present
    expect(errorElement).toHaveClass("p-4");
    expect(errorElement).toHaveClass("rounded-md");
  });
});
