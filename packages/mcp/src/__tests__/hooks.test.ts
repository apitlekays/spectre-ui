import { describe, it, expect } from "vitest";
import { allHooks, hooksBySlug } from "../data/hooks/index.js";

describe("allHooks", () => {
  it("has 10 items", () => {
    expect(allHooks).toHaveLength(10);
  });

  it("every hook has required fields", () => {
    for (const h of allHooks) {
      expect(h.name).toBeTruthy();
      expect(h.slug).toBeTruthy();
      expect(h.description).toBeTruthy();
      expect(h.importStatement).toBeTruthy();
      expect(h.signature).toBeTruthy();
      expect(Array.isArray(h.params)).toBe(true);
      expect(h.returnType).toBeTruthy();
      expect(h.returnDescription).toBeTruthy();
      expect(Array.isArray(h.examples)).toBe(true);
      expect(h.examples.length).toBeGreaterThan(0);
    }
  });

  it("has no duplicate slugs", () => {
    const slugs = allHooks.map((h) => h.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });
});

describe("hooksBySlug", () => {
  it("is keyed by slug", () => {
    expect(Object.keys(hooksBySlug)).toHaveLength(10);
    for (const [key, doc] of Object.entries(hooksBySlug)) {
      expect(key).toBe(doc.slug);
    }
  });

  it('hooksBySlug["use-media-query"] returns correct doc', () => {
    const doc = hooksBySlug["use-media-query"];
    expect(doc).toBeDefined();
    expect(doc.name).toBe("useMediaQuery");
  });

  it('hooksBySlug["use-spectre-theme"] returns correct doc', () => {
    const doc = hooksBySlug["use-spectre-theme"];
    expect(doc).toBeDefined();
    expect(doc.name).toBe("useSpectreTheme");
  });
});
