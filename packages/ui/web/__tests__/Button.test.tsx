import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "../components/Button/Button";

describe("Button Component", () => {
  it("renders with default props", () => {
    render(<Button>Click me</Button>);

    const button = screen.getByRole("button", { name: /click me/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("bg-[var(--primary)]");
    expect(button).toHaveClass("h-10 px-4 py-2");
    expect(button).toHaveClass("rounded-md");
  });

  it("renders with custom variant", () => {
    render(<Button variant="secondary">Secondary Button</Button>);

    const button = screen.getByRole("button", { name: /secondary button/i });
    expect(button).toHaveClass("bg-[var(--secondary)]");
  });

  it("renders with custom size", () => {
    render(<Button size="sm">Small Button</Button>);

    const button = screen.getByRole("button", { name: /small button/i });
    expect(button).toHaveClass("h-9 px-3");
  });

  it("renders with custom size lg", () => {
    render(<Button size="lg">Large Button</Button>);

    const button = screen.getByRole("button", { name: /large button/i });
    expect(button).toHaveClass("h-11 px-8");
  });

  it("renders with custom size xl", () => {
    render(<Button size="xl">Extra Large Button</Button>);

    const button = screen.getByRole("button", { name: /extra large button/i });
    expect(button).toHaveClass("h-12 px-10");
  });

  it("renders with outline variant", () => {
    render(<Button variant="outline">Outline Button</Button>);

    const button = screen.getByRole("button", { name: /outline button/i });
    expect(button).toHaveClass("border border-[var(--input)]");
    expect(button).toHaveClass("bg-[var(--background)]");
  });

  it("renders with ghost variant", () => {
    render(<Button variant="ghost">Ghost Button</Button>);

    const button = screen.getByRole("button", { name: /ghost button/i });
    expect(button).toHaveClass("hover:bg-[var(--accent)]");
    expect(button).toHaveClass("hover:text-[var(--accent-foreground)]");
  });

  it("renders with destructive variant", () => {
    render(<Button variant="destructive">Destructive Button</Button>);

    const button = screen.getByRole("button", { name: /destructive button/i });
    expect(button).toHaveClass("bg-[var(--error)]");
    expect(button).toHaveClass("text-white");
  });

  it("renders with disabled state", () => {
    render(<Button disabled>Disabled Button</Button>);

    const button = screen.getByRole("button", { name: /disabled button/i });
    expect(button).toBeDisabled();
    expect(button).toHaveClass("disabled:opacity-50");
  });

  it("handles click events", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Clickable Button</Button>);

    const button = screen.getByRole("button", { name: /clickable button/i });
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("does not handle click events when disabled", () => {
    const handleClick = jest.fn();
    render(
      <Button disabled onClick={handleClick}>
        Disabled Button
      </Button>
    );

    const button = screen.getByRole("button", { name: /disabled button/i });
    fireEvent.click(button);

    expect(handleClick).not.toHaveBeenCalled();
  });

  it("applies custom className", () => {
    render(<Button className="custom-class">Custom Button</Button>);

    const button = screen.getByRole("button", { name: /custom button/i });
    expect(button).toHaveClass("custom-class");
  });

  it("forwards ref correctly", () => {
    const ref = React.createRef<HTMLButtonElement>();
    render(<Button ref={ref}>Ref Button</Button>);

    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
  });

  it("renders with all variants and sizes", () => {
    const variants = [
      "primary",
      "secondary",
      "outline",
      "ghost",
      "destructive",
      "success",
      "warning",
    ] as const;
    const sizes = ["sm", "default", "lg", "xl", "icon"] as const;

    variants.forEach((variant) => {
      sizes.forEach((size) => {
        const { container } = render(
          <Button variant={variant} size={size}>
            {variant} {size}
          </Button>
        );

        const button = screen.getByRole("button", {
          name: new RegExp(`${variant} ${size}`, "i"),
        });
        expect(button).toBeInTheDocument();
      });
    });
  });

  it("renders with loading state", () => {
    render(<Button loading>Loading Button</Button>);

    const button = screen.getByRole("button", { name: /loading button/i });
    expect(button).toBeDisabled();
    expect(button.querySelector("svg")).toBeInTheDocument();
  });

  it("renders with left icon", () => {
    const leftIcon = <span data-testid="left-icon">←</span>;
    render(<Button leftIcon={leftIcon}>Button with Left Icon</Button>);

    expect(screen.getByTestId("left-icon")).toBeInTheDocument();
  });

  it("renders with right icon", () => {
    const rightIcon = <span data-testid="right-icon">→</span>;
    render(<Button rightIcon={rightIcon}>Button with Right Icon</Button>);

    expect(screen.getByTestId("right-icon")).toBeInTheDocument();
  });

  it("renders with custom rounded variant", () => {
    render(<Button rounded="full">Full Rounded Button</Button>);

    const button = screen.getByRole("button", { name: /full rounded button/i });
    expect(button).toHaveClass("rounded-full");
  });
});
