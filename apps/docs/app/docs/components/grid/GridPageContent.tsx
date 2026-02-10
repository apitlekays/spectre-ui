"use client";

import React from "react";
import { Grid } from "@spectre-ui/core";
import { ComponentPreview } from "@/components/ComponentPreview";
import { PropsTable, type PropDef } from "@/components/PropsTable";

const gridProps: PropDef[] = [
  {
    name: "cols",
    type: "1 | 2 | 3 | 4 | 5 | 6 | 12",
    default: "1",
    description: "Number of grid columns.",
  },
  {
    name: "gap",
    type: '"none" | "sm" | "md" | "lg" | "xl"',
    default: '"md"',
    description: "Spacing between grid items.",
  },
  {
    name: "className",
    type: "string",
    description: "Additional CSS classes.",
  },
];

function GridItem({ children }: { children: React.ReactNode }) {
  return (
    <div className="border border-spectre-primary/30 bg-spectre-secondary p-4 text-center font-mono text-sm text-spectre-foreground">
      {children}
    </div>
  );
}

export default function GridPageContent() {
  return (
    <div className="docs-prose">
      <h1>Grid</h1>
      <p>
        CSS Grid utility component with preset column and gap configurations.
        Simplifies common grid layouts without writing custom grid classes.
      </p>

      <h2>Column Counts</h2>
      <ComponentPreview
        code={`<Grid cols={3} gap="md">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</Grid>`}
      >
        <div className="space-y-6">
          <div>
            <p className="mb-2 text-xs font-mono uppercase tracking-widest text-spectre-muted-foreground">2 columns</p>
            <Grid cols={2} gap="md">
              <GridItem>1</GridItem>
              <GridItem>2</GridItem>
            </Grid>
          </div>
          <div>
            <p className="mb-2 text-xs font-mono uppercase tracking-widest text-spectre-muted-foreground">3 columns</p>
            <Grid cols={3} gap="md">
              <GridItem>1</GridItem>
              <GridItem>2</GridItem>
              <GridItem>3</GridItem>
            </Grid>
          </div>
          <div>
            <p className="mb-2 text-xs font-mono uppercase tracking-widest text-spectre-muted-foreground">4 columns</p>
            <Grid cols={4} gap="md">
              <GridItem>1</GridItem>
              <GridItem>2</GridItem>
              <GridItem>3</GridItem>
              <GridItem>4</GridItem>
            </Grid>
          </div>
        </div>
      </ComponentPreview>

      <h2>Gap Sizes</h2>
      <ComponentPreview
        code={`<Grid cols={3} gap="none">...</Grid>
<Grid cols={3} gap="sm">...</Grid>
<Grid cols={3} gap="lg">...</Grid>
<Grid cols={3} gap="xl">...</Grid>`}
      >
        <div className="space-y-6">
          <div>
            <p className="mb-2 text-xs font-mono uppercase tracking-widest text-spectre-muted-foreground">gap=&quot;none&quot;</p>
            <Grid cols={3} gap="none">
              <GridItem>1</GridItem>
              <GridItem>2</GridItem>
              <GridItem>3</GridItem>
            </Grid>
          </div>
          <div>
            <p className="mb-2 text-xs font-mono uppercase tracking-widest text-spectre-muted-foreground">gap=&quot;sm&quot;</p>
            <Grid cols={3} gap="sm">
              <GridItem>1</GridItem>
              <GridItem>2</GridItem>
              <GridItem>3</GridItem>
            </Grid>
          </div>
          <div>
            <p className="mb-2 text-xs font-mono uppercase tracking-widest text-spectre-muted-foreground">gap=&quot;lg&quot;</p>
            <Grid cols={3} gap="lg">
              <GridItem>1</GridItem>
              <GridItem>2</GridItem>
              <GridItem>3</GridItem>
            </Grid>
          </div>
          <div>
            <p className="mb-2 text-xs font-mono uppercase tracking-widest text-spectre-muted-foreground">gap=&quot;xl&quot;</p>
            <Grid cols={3} gap="xl">
              <GridItem>1</GridItem>
              <GridItem>2</GridItem>
              <GridItem>3</GridItem>
            </Grid>
          </div>
        </div>
      </ComponentPreview>

      <h2>Props</h2>
      <PropsTable props={gridProps} />

      <h2>Accessibility</h2>
      <ul>
        <li>Renders a semantic <code>&lt;div&gt;</code> with CSS Grid layout</li>
        <li>Supports <code>ref</code> forwarding for DOM access</li>
        <li>
          Passes through all standard HTML attributes including{" "}
          <code>aria-*</code> and <code>role</code>
        </li>
        <li>Grid items maintain their DOM reading order for screen readers</li>
      </ul>
    </div>
  );
}
