"use client";

import React from "react";
import { Button } from "@spectre-ui/core";
import { ComponentPreview } from "@/components/ComponentPreview";
import { PropsTable, type PropDef } from "@/components/PropsTable";

const buttonProps: PropDef[] = [
  {
    name: "variant",
    type: '"primary" | "secondary" | "outline" | "ghost" | "destructive" | "link"',
    default: '"primary"',
    description: "Visual style variant of the button.",
  },
  {
    name: "size",
    type: '"sm" | "md" | "lg" | "icon"',
    default: '"md"',
    description: "Size of the button.",
  },
  {
    name: "loading",
    type: "boolean",
    default: "false",
    description: "Show loading spinner and disable interactions.",
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "Disable the button.",
  },
  {
    name: "className",
    type: "string",
    description: "Additional CSS classes.",
  },
];

export default function ButtonPageContent() {
  return (
    <div className="docs-prose">
      <h1>Button</h1>
      <p>
        Interactive button component with multiple variants and sizes. Features
        the signature FUI aesthetic with sharp edges, uppercase tracking, and
        glow effects on the primary variant.
      </p>

      <h2>Variants</h2>
      <ComponentPreview
        code={`<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="link">Link</Button>`}
      >
        <div className="flex flex-wrap gap-3">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="link">Link</Button>
        </div>
      </ComponentPreview>

      <h2>Sizes</h2>
      <ComponentPreview
        code={`<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>`}
      >
        <div className="flex flex-wrap items-center gap-3">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </div>
      </ComponentPreview>

      <h2>Loading State</h2>
      <ComponentPreview code={`<Button loading>Processing...</Button>`}>
        <Button loading>Processing...</Button>
      </ComponentPreview>

      <h2>Disabled</h2>
      <ComponentPreview code={`<Button disabled>Disabled</Button>`}>
        <Button disabled>Disabled</Button>
      </ComponentPreview>

      <h2>Props</h2>
      <PropsTable props={buttonProps} />

      <h2>Accessibility</h2>
      <ul>
        <li>Uses native <code>&lt;button&gt;</code> element</li>
        <li>Supports keyboard focus with visible ring</li>
        <li>Disabled state prevents click and tab focus</li>
        <li>Loading state adds <code>disabled</code> attribute</li>
      </ul>
    </div>
  );
}
