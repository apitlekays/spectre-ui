import { describe, it, expect } from "vitest";
import { allGuides, guidesBySlug } from "../data/guides/index.js";

describe("allGuides", () => {
  it("has 4 items", () => {
    expect(allGuides).toHaveLength(4);
  });

  it("every guide has required fields", () => {
    for (const g of allGuides) {
      expect(g.slug).toBeTruthy();
      expect(g.title).toBeTruthy();
      expect(g.content).toBeTruthy();
      expect(typeof g.content).toBe("string");
      expect(g.content.length).toBeGreaterThan(100);
    }
  });
});

describe("guidesBySlug", () => {
  it("is keyed by slug", () => {
    expect(Object.keys(guidesBySlug)).toHaveLength(4);
    for (const [key, doc] of Object.entries(guidesBySlug)) {
      expect(key).toBe(doc.slug);
    }
  });

  it('guidesBySlug["installation"] exists', () => {
    expect(guidesBySlug["installation"]).toBeDefined();
    expect(guidesBySlug["installation"].title).toBe("Installation");
  });

  it('guidesBySlug["getting-started"] exists', () => {
    expect(guidesBySlug["getting-started"]).toBeDefined();
  });

  it('guidesBySlug["theming"] exists', () => {
    expect(guidesBySlug["theming"]).toBeDefined();
  });

  it('guidesBySlug["design-brief"] exists', () => {
    expect(guidesBySlug["design-brief"]).toBeDefined();
  });
});
