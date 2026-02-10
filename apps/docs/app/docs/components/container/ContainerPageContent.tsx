"use client";

import React from "react";
import { Container } from "@spectre-ui/core";
import { ComponentPreview } from "@/components/ComponentPreview";
import { PropsTable, type PropDef } from "@/components/PropsTable";

const containerProps: PropDef[] = [
  {
    name: "maxWidth",
    type: '"sm" | "md" | "lg" | "xl" | "2xl" | "full"',
    default: '"xl"',
    description: "Maximum width constraint for the container.",
  },
  {
    name: "className",
    type: "string",
    description: "Additional CSS classes.",
  },
];

export default function ContainerPageContent() {
  return (
    <div className="docs-prose">
      <h1>Container</h1>
      <p>
        Max-width wrapper with responsive horizontal padding. Centers content
        and constrains it to a readable width at each breakpoint.
      </p>

      <h2>Max Width Variants</h2>
      <ComponentPreview
        code={`<Container maxWidth="sm">Small container</Container>
<Container maxWidth="md">Medium container</Container>
<Container maxWidth="lg">Large container</Container>
<Container maxWidth="xl">Extra-large container</Container>
<Container maxWidth="2xl">2XL container</Container>
<Container maxWidth="full">Full-width container</Container>`}
      >
        <div className="space-y-4">
          <Container maxWidth="sm" className="border border-dashed border-spectre-primary/60 bg-spectre-secondary p-3">
            <span className="text-xs font-mono text-spectre-muted-foreground">sm</span>
          </Container>
          <Container maxWidth="md" className="border border-dashed border-spectre-primary/60 bg-spectre-secondary p-3">
            <span className="text-xs font-mono text-spectre-muted-foreground">md</span>
          </Container>
          <Container maxWidth="lg" className="border border-dashed border-spectre-primary/60 bg-spectre-secondary p-3">
            <span className="text-xs font-mono text-spectre-muted-foreground">lg</span>
          </Container>
          <Container maxWidth="xl" className="border border-dashed border-spectre-primary/60 bg-spectre-secondary p-3">
            <span className="text-xs font-mono text-spectre-muted-foreground">xl (default)</span>
          </Container>
          <Container maxWidth="2xl" className="border border-dashed border-spectre-primary/60 bg-spectre-secondary p-3">
            <span className="text-xs font-mono text-spectre-muted-foreground">2xl</span>
          </Container>
          <Container maxWidth="full" className="border border-dashed border-spectre-primary/60 bg-spectre-secondary p-3">
            <span className="text-xs font-mono text-spectre-muted-foreground">full</span>
          </Container>
        </div>
      </ComponentPreview>

      <h2>Props</h2>
      <PropsTable props={containerProps} />

      <h2>Accessibility</h2>
      <ul>
        <li>Renders a semantic <code>&lt;div&gt;</code> element</li>
        <li>Supports <code>ref</code> forwarding for DOM access</li>
        <li>
          Passes through all standard HTML attributes including{" "}
          <code>aria-*</code> and <code>role</code>
        </li>
      </ul>
    </div>
  );
}
