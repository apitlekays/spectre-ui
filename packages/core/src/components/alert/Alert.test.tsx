import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Alert } from "./Alert";

describe("Alert", () => {
  it("renders with children", () => {
    render(<Alert>Alert message</Alert>);
    expect(screen.getByRole("alert")).toBeInTheDocument();
    expect(screen.getByText("Alert message")).toBeInTheDocument();
  });

  it("renders title when provided", () => {
    render(<Alert title="Warning">Message</Alert>);
    expect(screen.getByText("Warning")).toBeInTheDocument();
  });

  it("applies info variant", () => {
    render(<Alert variant="info">Info</Alert>);
    expect(screen.getByRole("alert")).toHaveClass("text-spectre-primary");
  });

  it("applies success variant", () => {
    render(<Alert variant="success">Success</Alert>);
    expect(screen.getByRole("alert")).toHaveClass("text-spectre-success");
  });

  it("applies warning variant", () => {
    render(<Alert variant="warning">Warning</Alert>);
    expect(screen.getByRole("alert")).toHaveClass("text-spectre-warning");
  });

  it("applies destructive variant", () => {
    render(<Alert variant="destructive">Error</Alert>);
    expect(screen.getByRole("alert")).toHaveClass("text-spectre-destructive");
  });

  it("renders icon when provided", () => {
    render(<Alert icon={<span data-testid="icon">!</span>}>With icon</Alert>);
    expect(screen.getByTestId("icon")).toBeInTheDocument();
  });

  it("has HUD corners class", () => {
    render(<Alert>Content</Alert>);
    expect(screen.getByRole("alert")).toHaveClass("spectre-hud-corners");
  });
});
