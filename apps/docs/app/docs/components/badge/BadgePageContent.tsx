"use client";

import React from "react";
import { Badge } from "@spectre-ui/core";
import { ComponentPreview } from "@/components/ComponentPreview";
import { PropsTable, type PropDef } from "@/components/PropsTable";

const badgeProps: PropDef[] = [
  {
    name: "variant",
    type: '"default" | "primary" | "success" | "warning" | "destructive" | "outline"',
    default: '"default"',
    description: "Badge style variant.",
  },
  {
    name: "dot",
    type: "boolean",
    description: "Show status dot indicator.",
  },
  {
    name: "className",
    type: "string",
    description: "Additional CSS classes.",
  },
];

export default function BadgePageContent() {
  return (
    <div className="docs-prose">
      <h1>Badge</h1>
      <p>
        Status badges with multiple variants and optional dot indicator. Use
        badges to label, categorize, or indicate status across your interface.
      </p>

      <h2>Variants</h2>
      <ComponentPreview
        code={`<Badge variant="default">Default</Badge>
<Badge variant="primary" dot>Online</Badge>
<Badge variant="success">Secure</Badge>
<Badge variant="warning">Caution</Badge>
<Badge variant="destructive">Critical</Badge>
<Badge variant="outline">Outline</Badge>`}
      >
        <div className="flex flex-wrap gap-3">
          <Badge variant="default">Default</Badge>
          <Badge variant="primary" dot>Online</Badge>
          <Badge variant="success">Secure</Badge>
          <Badge variant="warning">Caution</Badge>
          <Badge variant="destructive">Critical</Badge>
          <Badge variant="outline">Outline</Badge>
        </div>
      </ComponentPreview>

      <h2>With Dot Indicator</h2>
      <ComponentPreview
        code={`<Badge variant="primary" dot>Online</Badge>
<Badge variant="success" dot>Connected</Badge>
<Badge variant="destructive" dot>Error</Badge>`}
      >
        <div className="flex flex-wrap gap-3">
          <Badge variant="primary" dot>Online</Badge>
          <Badge variant="success" dot>Connected</Badge>
          <Badge variant="destructive" dot>Error</Badge>
        </div>
      </ComponentPreview>

      <h2>Props</h2>
      <PropsTable props={badgeProps} />

      <h2>Accessibility</h2>
      <ul>
        <li>Renders as an inline <code>&lt;span&gt;</code> element</li>
        <li>
          Dot indicator is purely decorative and hidden from screen readers
        </li>
        <li>
          Use descriptive text content so the badge meaning is conveyed without
          relying on color alone
        </li>
        <li>
          Passes through all standard HTML attributes including{" "}
          <code>aria-*</code> and <code>role</code>
        </li>
      </ul>
    </div>
  );
}
