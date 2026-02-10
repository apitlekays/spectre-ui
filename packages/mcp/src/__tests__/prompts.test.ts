import { describe, it, expect } from "vitest";
import { prompts } from "../prompts/templates.js";

describe("prompts", () => {
  it("has 7 prompt definitions", () => {
    expect(prompts).toHaveLength(7);
  });

  it("each prompt has name, description, and render function", () => {
    for (const p of prompts) {
      expect(p.name).toBeTruthy();
      expect(typeof p.name).toBe("string");
      expect(p.description).toBeTruthy();
      expect(typeof p.description).toBe("string");
      expect(typeof p.render).toBe("function");
    }
  });

  it("prompt names are unique", () => {
    const names = prompts.map((p) => p.name);
    expect(new Set(names).size).toBe(names.length);
  });

  it("each prompt with argsSchema has descriptive args", () => {
    for (const p of prompts) {
      if (p.argsSchema) {
        expect(Object.keys(p.argsSchema).length).toBeGreaterThan(0);
      }
    }
  });

  it("render() returns valid messages", () => {
    for (const p of prompts) {
      const mockArgs: Record<string, string> = {};
      if (p.argsSchema) {
        for (const key of Object.keys(p.argsSchema)) {
          mockArgs[key] = "test-value";
        }
      }
      const messages = p.render(mockArgs);
      expect(Array.isArray(messages)).toBe(true);
      expect(messages.length).toBeGreaterThan(0);
      for (const msg of messages) {
        expect(msg.role).toBe("user");
        expect(msg.content.type).toBe("text");
        expect(msg.content.text.length).toBeGreaterThan(0);
      }
    }
  });
});
