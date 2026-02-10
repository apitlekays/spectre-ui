import { describe, it, expect } from "vitest";
import { tokens, tailwindTheme, utilities, colors } from "../data/design-system/index.js";

describe("tokens", () => {
  it("is an array of CSSToken objects", () => {
    expect(Array.isArray(tokens)).toBe(true);
    expect(tokens.length).toBeGreaterThanOrEqual(16);
  });

  it("every token has required fields", () => {
    for (const t of tokens) {
      expect(t.variable).toBeTruthy();
      expect(t.darkValue).toBeTruthy();
      expect(t.lightValue).toBeTruthy();
      expect(t.description).toBeTruthy();
      expect(["color", "font", "effect"]).toContain(t.category);
    }
  });
});

describe("tailwindTheme", () => {
  it("has colors key", () => {
    expect(tailwindTheme.colors).toBeDefined();
    expect(tailwindTheme.colors.spectre).toBeDefined();
  });

  it("has fonts key", () => {
    expect(tailwindTheme.fontFamily).toBeDefined();
    expect(tailwindTheme.fontFamily["spectre-mono"]).toBeDefined();
  });

  it("has borderRadius key", () => {
    expect(tailwindTheme.borderRadius).toBeDefined();
    expect(tailwindTheme.borderRadius.spectre).toBe("0px");
  });

  it("has keyframes key", () => {
    expect(tailwindTheme.keyframes).toBeDefined();
    expect(tailwindTheme.keyframes["spectre-scanline-move"]).toBeDefined();
  });

  it("has animation key", () => {
    expect(tailwindTheme.animation).toBeDefined();
    expect(tailwindTheme.animation["spectre-scanline"]).toBeDefined();
  });
});

describe("utilities", () => {
  it("is an array of utility class definitions", () => {
    expect(Array.isArray(utilities)).toBe(true);
    expect(utilities.length).toBeGreaterThan(0);
  });

  it("every utility has className, description, css", () => {
    for (const u of utilities) {
      expect(u.className).toBeTruthy();
      expect(u.description).toBeTruthy();
      expect(u.css).toBeTruthy();
    }
  });
});

describe("colors", () => {
  it("has dark and light palette objects", () => {
    expect(colors.dark).toBeDefined();
    expect(colors.light).toBeDefined();
  });

  it("dark palette has expected keys", () => {
    expect(colors.dark.background).toBe("#020617");
    expect(colors.dark.primary).toBe("#0ea5e9");
    expect(colors.dark.foreground).toBe("#e2e8f0");
  });

  it("light palette has expected keys", () => {
    expect(colors.light.background).toBe("#f8fafc");
    expect(colors.light.primary).toBe("#0284c7");
  });
});
