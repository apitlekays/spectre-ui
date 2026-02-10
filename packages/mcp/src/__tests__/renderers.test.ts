import { describe, it, expect } from "vitest";
import { renderComponentMarkdown } from "../renderers/component.js";
import { renderHookMarkdown } from "../renderers/hook.js";
import { componentsBySlug } from "../data/components/index.js";
import { hooksBySlug } from "../data/hooks/index.js";

describe("renderComponentMarkdown", () => {
  const buttonDoc = componentsBySlug["button"];

  it("renders header with component name", () => {
    const md = renderComponentMarkdown(buttonDoc);
    expect(md).toContain("# Button");
  });

  it("renders import section", () => {
    const md = renderComponentMarkdown(buttonDoc);
    expect(md).toContain("## Import");
    expect(md).toContain(buttonDoc.importStatement);
  });

  it("renders props table with correct columns", () => {
    const md = renderComponentMarkdown(buttonDoc);
    expect(md).toContain("## Props");
    expect(md).toContain("| Prop | Type | Default | Required | Description |");
    expect(md).toContain("`variant`");
  });

  it("renders variants section", () => {
    const md = renderComponentMarkdown(buttonDoc);
    expect(md).toContain("## Variants");
  });

  it("renders examples section", () => {
    const md = renderComponentMarkdown(buttonDoc);
    expect(md).toContain("## Examples");
    expect(md).toContain("```tsx");
  });

  it("renders accessibility section when present", () => {
    const md = renderComponentMarkdown(buttonDoc);
    if (buttonDoc.accessibility) {
      expect(md).toContain("## Accessibility");
    }
  });

  it("renders sub-components for compound components", () => {
    const cardDoc = componentsBySlug["card"];
    const md = renderComponentMarkdown(cardDoc);
    if (cardDoc.subComponents && cardDoc.subComponents.length > 0) {
      expect(md).toContain("## Sub-Components");
      expect(md).toContain("### CardHeader");
    }
  });
});

describe("renderHookMarkdown", () => {
  const clipboardDoc = hooksBySlug["use-clipboard"];

  it("renders header with hook name", () => {
    const md = renderHookMarkdown(clipboardDoc);
    expect(md).toContain("# useClipboard");
  });

  it("renders import section", () => {
    const md = renderHookMarkdown(clipboardDoc);
    expect(md).toContain("## Import");
    expect(md).toContain(clipboardDoc.importStatement);
  });

  it("renders signature section", () => {
    const md = renderHookMarkdown(clipboardDoc);
    expect(md).toContain("## Signature");
    expect(md).toContain("```tsx");
    expect(md).toContain(clipboardDoc.signature);
  });

  it("renders parameters section", () => {
    const md = renderHookMarkdown(clipboardDoc);
    expect(md).toContain("## Parameters");
    expect(md).toContain("| Parameter | Type | Default | Required | Description |");
  });

  it("renders return value section", () => {
    const md = renderHookMarkdown(clipboardDoc);
    expect(md).toContain("## Return Value");
    expect(md).toContain(`**Type:** \`${clipboardDoc.returnType}\``);
  });

  it("renders examples section", () => {
    const md = renderHookMarkdown(clipboardDoc);
    expect(md).toContain("## Examples");
    expect(md).toContain("```tsx");
  });
});
