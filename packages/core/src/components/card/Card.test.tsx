import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./Card";

describe("Card", () => {
  it("renders children", () => {
    render(<Card>Card content</Card>);
    expect(screen.getByText("Card content")).toBeInTheDocument();
  });

  it("applies default variant", () => {
    const { container } = render(<Card>Content</Card>);
    expect(container.firstChild).toHaveClass("border-spectre-border");
  });

  it("applies hud variant with corner brackets class", () => {
    const { container } = render(<Card variant="hud">HUD Card</Card>);
    expect(container.firstChild).toHaveClass("spectre-hud-corners-full");
  });

  it("applies elevated variant with glow shadow", () => {
    const { container } = render(<Card variant="elevated">Elevated</Card>);
    const classList = (container.firstChild as HTMLElement).className;
    expect(classList).toContain("shadow");
  });

  it("applies padding variants", () => {
    const { container, rerender } = render(<Card padding="none">None</Card>);
    expect(container.firstChild).toHaveClass("p-0");

    rerender(<Card padding="lg">Large</Card>);
    expect(container.firstChild).toHaveClass("p-8");
  });

  it("renders full card composition", () => {
    render(
      <Card>
        <CardHeader>
          <CardTitle>Title</CardTitle>
          <CardDescription>Description</CardDescription>
        </CardHeader>
        <CardContent>Content</CardContent>
        <CardFooter>Footer</CardFooter>
      </Card>
    );

    expect(screen.getByText("Title")).toBeInTheDocument();
    expect(screen.getByText("Description")).toBeInTheDocument();
    expect(screen.getByText("Content")).toBeInTheDocument();
    expect(screen.getByText("Footer")).toBeInTheDocument();
  });

  it("forwards ref", () => {
    const ref = { current: null as HTMLDivElement | null };
    render(<Card ref={ref}>Ref</Card>);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});
