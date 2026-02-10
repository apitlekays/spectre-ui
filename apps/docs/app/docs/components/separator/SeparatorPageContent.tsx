"use client";

import React from "react";
import { Separator } from "@spectre-ui/core";
import { ComponentPreview } from "@/components/ComponentPreview";
import { PropsTable, type PropDef } from "@/components/PropsTable";

const separatorProps: PropDef[] = [
  {
    name: "orientation",
    type: '"horizontal" | "vertical"',
    default: '"horizontal"',
    description: "Direction of the separator line.",
  },
  {
    name: "decorative",
    type: "boolean",
    default: "true",
    description:
      "When true, the separator is purely visual and hidden from assistive technology.",
  },
  {
    name: "label",
    type: "string",
    description: "Optional text label displayed in the center of the separator.",
  },
  {
    name: "className",
    type: "string",
    description: "Additional CSS classes.",
  },
];

export default function SeparatorPageContent() {
  return (
    <div className="docs-prose">
      <h1>Separator</h1>
      <p>
        Visual divider with optional label. Built on Radix UI Separator
        primitives for proper accessibility semantics.
      </p>

      <h2>Horizontal Separator</h2>
      <ComponentPreview code={`<Separator />`}>
        <div className="space-y-4">
          <p className="font-mono text-sm text-spectre-muted-foreground">
            Content above
          </p>
          <Separator />
          <p className="font-mono text-sm text-spectre-muted-foreground">
            Content below
          </p>
        </div>
      </ComponentPreview>

      <h2>With Label</h2>
      <ComponentPreview code={`<Separator label="OR" />`}>
        <div className="space-y-4">
          <p className="font-mono text-sm text-spectre-muted-foreground">
            Option A
          </p>
          <Separator label="OR" />
          <p className="font-mono text-sm text-spectre-muted-foreground">
            Option B
          </p>
        </div>
      </ComponentPreview>

      <h2>Vertical Separator</h2>
      <ComponentPreview
        code={`<Separator orientation="vertical" />`}
      >
        <div className="flex h-8 items-center gap-4">
          <span className="font-mono text-sm text-spectre-muted-foreground">
            Left
          </span>
          <Separator orientation="vertical" />
          <span className="font-mono text-sm text-spectre-muted-foreground">
            Right
          </span>
        </div>
      </ComponentPreview>

      <h2>Props</h2>
      <PropsTable props={separatorProps} />

      <h2>Accessibility</h2>
      <ul>
        <li>
          Built on Radix UI Separator with proper <code>role=&quot;separator&quot;</code>{" "}
          when <code>decorative</code> is <code>false</code>
        </li>
        <li>
          Decorative separators (default) are hidden from assistive technology
          via <code>role=&quot;none&quot;</code>
        </li>
        <li>
          Supports <code>aria-orientation</code> for vertical separators
        </li>
        <li>Label text is accessible to screen readers when provided</li>
      </ul>
    </div>
  );
}
