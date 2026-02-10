"use client";

import React from "react";
import { Stack } from "@spectre-ui/core";
import { ComponentPreview } from "@/components/ComponentPreview";
import { PropsTable, type PropDef } from "@/components/PropsTable";

const stackProps: PropDef[] = [
  { name: "direction", type: '"vertical" | "horizontal"', default: '"vertical"', description: "Stack layout direction." },
  { name: "gap", type: '"none" | "xs" | "sm" | "md" | "lg" | "xl"', default: '"md"', description: "Spacing between items." },
  { name: "align", type: '"start" | "center" | "end" | "stretch"', default: '"stretch"', description: "Cross-axis alignment of items." },
  { name: "justify", type: '"start" | "center" | "end" | "between" | "around"', default: '"start"', description: "Main-axis distribution of items." },
  { name: "className", type: "string", description: "Additional CSS classes." },
];

function StackItem({ children }: { children: React.ReactNode }) {
  return (
    <div className="border border-spectre-primary/30 bg-spectre-secondary px-4 py-2 text-center font-mono text-sm text-spectre-foreground">
      {children}
    </div>
  );
}

export default function StackPageContent() {
  return (
    <div className="docs-prose">
      <h1>Stack</h1>
      <p>Flexbox layout component for arranging items vertically or horizontally with consistent spacing. A simple abstraction over common flex patterns.</p>

      <h2>Vertical Stack</h2>
      <ComponentPreview code={`<Stack direction="vertical" gap="md">\n  <div>Item 1</div>\n  <div>Item 2</div>\n  <div>Item 3</div>\n</Stack>`}>
        <Stack direction="vertical" gap="md">
          <StackItem>Item 1</StackItem>
          <StackItem>Item 2</StackItem>
          <StackItem>Item 3</StackItem>
        </Stack>
      </ComponentPreview>

      <h2>Horizontal Stack</h2>
      <ComponentPreview code={`<Stack direction="horizontal" gap="md">\n  <div>Item 1</div>\n  <div>Item 2</div>\n  <div>Item 3</div>\n</Stack>`}>
        <Stack direction="horizontal" gap="md">
          <StackItem>Item 1</StackItem>
          <StackItem>Item 2</StackItem>
          <StackItem>Item 3</StackItem>
        </Stack>
      </ComponentPreview>

      <h2>Alignment and Justify</h2>
      <ComponentPreview code={`<Stack direction="horizontal" gap="md" align="center" justify="between">\n  <div>Left</div>\n  <div>Center</div>\n  <div>Right</div>\n</Stack>`}>
        <Stack direction="horizontal" gap="md" align="center" justify="between">
          <StackItem>Left</StackItem>
          <StackItem>Center</StackItem>
          <StackItem>Right</StackItem>
        </Stack>
      </ComponentPreview>

      <h2>Gap Sizes</h2>
      <ComponentPreview code={`<Stack direction="horizontal" gap="xs">...</Stack>\n<Stack direction="horizontal" gap="sm">...</Stack>\n<Stack direction="horizontal" gap="lg">...</Stack>\n<Stack direction="horizontal" gap="xl">...</Stack>`}>
        <div className="space-y-4">
          <div><p className="mb-2 text-xs font-mono uppercase tracking-widest text-spectre-muted-foreground">gap=&quot;xs&quot;</p><Stack direction="horizontal" gap="xs"><StackItem>A</StackItem><StackItem>B</StackItem><StackItem>C</StackItem></Stack></div>
          <div><p className="mb-2 text-xs font-mono uppercase tracking-widest text-spectre-muted-foreground">gap=&quot;sm&quot;</p><Stack direction="horizontal" gap="sm"><StackItem>A</StackItem><StackItem>B</StackItem><StackItem>C</StackItem></Stack></div>
          <div><p className="mb-2 text-xs font-mono uppercase tracking-widest text-spectre-muted-foreground">gap=&quot;lg&quot;</p><Stack direction="horizontal" gap="lg"><StackItem>A</StackItem><StackItem>B</StackItem><StackItem>C</StackItem></Stack></div>
          <div><p className="mb-2 text-xs font-mono uppercase tracking-widest text-spectre-muted-foreground">gap=&quot;xl&quot;</p><Stack direction="horizontal" gap="xl"><StackItem>A</StackItem><StackItem>B</StackItem><StackItem>C</StackItem></Stack></div>
        </div>
      </ComponentPreview>

      <h2>Props</h2>
      <PropsTable props={stackProps} />

      <h2>Accessibility</h2>
      <ul>
        <li>Renders a semantic <code>&lt;div&gt;</code> with flexbox layout</li>
        <li>Supports <code>ref</code> forwarding for DOM access</li>
        <li>Passes through all standard HTML attributes including{" "}<code>aria-*</code> and <code>role</code></li>
        <li>DOM order matches visual order for consistent screen reader navigation</li>
      </ul>
    </div>
  );
}
