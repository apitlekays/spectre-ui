import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Progress } from "./Progress";

describe("Progress", () => {
  it("renders a progressbar", () => {
    render(<Progress value={50} />);
    expect(screen.getByRole("progressbar")).toBeInTheDocument();
  });

  it("sets aria-valuenow", () => {
    render(<Progress value={75} />);
    expect(screen.getByRole("progressbar")).toHaveAttribute("aria-valuenow", "75");
  });

  it("renders label when provided", () => {
    render(<Progress value={50} label="Upload" />);
    expect(screen.getByText("Upload")).toBeInTheDocument();
  });

  it("shows percentage when showValue is true", () => {
    render(<Progress value={65} showValue />);
    expect(screen.getByText("65%")).toBeInTheDocument();
  });

  it("clamps value between 0 and 100", () => {
    const { container } = render(<Progress value={150} max={100} />);
    const bar = container.querySelector("[role=progressbar]")?.firstChild as HTMLElement;
    expect(bar.style.width).toBe("100%");
  });

  it("forwards ref", () => {
    const ref = { current: null as HTMLDivElement | null };
    render(<Progress ref={ref} value={50} />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});
