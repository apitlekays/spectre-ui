import { describe, it, expect } from "vitest";
import { overview } from "../data/overview.js";

describe("overview", () => {
  it("is a non-empty string", () => {
    expect(typeof overview).toBe("string");
    expect(overview.length).toBeGreaterThan(100);
  });

  it('contains "spectre-ui"', () => {
    expect(overview).toContain("spectre-ui");
  });

  it("contains package list", () => {
    expect(overview).toContain("@spectre-ui/core");
    expect(overview).toContain("@spectre-ui/hooks");
    expect(overview).toContain("@spectre-ui/themes");
    expect(overview).toContain("@spectre-ui/tailwind-config");
  });
});
