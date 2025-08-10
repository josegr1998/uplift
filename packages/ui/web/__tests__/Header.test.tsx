import React from "react";
import { render, screen } from "@testing-library/react";
import { Header } from "../components/Header/Header";

// Mock Next.js Link component
jest.mock("next/link", () => {
  return function MockLink({ href, children, ...props }: any) {
    return (
      <a href={href} {...props}>
        {children}
      </a>
    );
  };
});

describe("Header Component", () => {
  it("renders header element", () => {
    render(<Header />);

    const header = screen.getByRole("banner");
    expect(header).toBeInTheDocument();
  });

  it("renders navigation element", () => {
    render(<Header />);

    const nav = screen.getByRole("navigation");
    expect(nav).toBeInTheDocument();
  });

  it("renders Home link", () => {
    render(<Header />);

    const homeLink = screen.getByRole("link", { name: /home/i });
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute("href", "/");
  });

  it("renders Charts link", () => {
    render(<Header />);

    const chartsLink = screen.getByRole("link", { name: /charts/i });
    expect(chartsLink).toBeInTheDocument();
    expect(chartsLink).toHaveAttribute("href", "/charts");
  });

  it("applies correct styling classes", () => {
    render(<Header />);

    const header = screen.getByRole("banner");
    expect(header).toHaveClass("bg-[var(--background)]");
    expect(header).toHaveClass("shadow-md");
  });

  it("applies navigation container styling", () => {
    render(<Header />);

    const nav = screen.getByRole("navigation");
    expect(nav).toHaveClass("max-w-7xl");
    expect(nav).toHaveClass("mx-auto");
    expect(nav).toHaveClass("px-4");
    expect(nav).toHaveClass("sm:px-6");
    expect(nav).toHaveClass("lg:px-8");
  });

  it("applies link styling", () => {
    render(<Header />);

    const homeLink = screen.getByRole("link", { name: /home/i });
    expect(homeLink).toHaveClass("text-[var(--black)]");
    expect(homeLink).toHaveClass("hover:text-[var(--primary)]");
    expect(homeLink).toHaveClass("px-3");
    expect(homeLink).toHaveClass("py-2");
    expect(homeLink).toHaveClass("text-lg");
    expect(homeLink).toHaveClass("font-medium");
  });

  it("renders both navigation links", () => {
    render(<Header />);

    const links = screen.getAllByRole("link");
    expect(links).toHaveLength(2);

    expect(links[0]).toHaveTextContent("Home");
    expect(links[1]).toHaveTextContent("Charts");
  });

  it("has correct semantic structure", () => {
    render(<Header />);

    const header = screen.getByRole("banner");
    const nav = screen.getByRole("navigation");

    expect(header).toContainElement(nav);
    expect(nav).toContainElement(screen.getByRole("link", { name: /home/i }));
    expect(nav).toContainElement(screen.getByRole("link", { name: /charts/i }));
  });
});
