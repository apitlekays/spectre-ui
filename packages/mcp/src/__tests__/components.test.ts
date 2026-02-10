import { describe, it, expect } from "vitest";
import { allComponents, componentsBySlug } from "../data/components/index.js";

describe("allComponents", () => {
  it("has 38 items", () => {
    expect(allComponents).toHaveLength(38);
  });

  it("is sorted alphabetically by name", () => {
    const names = allComponents.map((c) => c.name);
    const sorted = [...names].sort((a, b) => a.localeCompare(b));
    expect(names).toEqual(sorted);
  });

  it("every component has required fields", () => {
    for (const c of allComponents) {
      expect(c.name).toBeTruthy();
      expect(c.slug).toBeTruthy();
      expect(c.category).toBeTruthy();
      expect(c.description).toBeTruthy();
      expect(c.importStatement).toBeTruthy();
      expect(Array.isArray(c.props)).toBe(true);
      expect(Array.isArray(c.examples)).toBe(true);
      expect(c.examples.length).toBeGreaterThan(0);
    }
  });

  it("has no duplicate slugs", () => {
    const slugs = allComponents.map((c) => c.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });
});

describe("componentsBySlug", () => {
  it("is a Record keyed by slug", () => {
    expect(typeof componentsBySlug).toBe("object");
    expect(Object.keys(componentsBySlug)).toHaveLength(38);
  });

  it('componentsBySlug["button"] returns Button doc', () => {
    const btn = componentsBySlug["button"];
    expect(btn).toBeDefined();
    expect(btn.name).toBe("Button");
    expect(btn.slug).toBe("button");
  });

  it("every slug key matches the component slug field", () => {
    for (const [key, doc] of Object.entries(componentsBySlug)) {
      expect(key).toBe(doc.slug);
    }
  });
});
