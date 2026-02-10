"use client";

import React from "react";
import { Breadcrumb } from "@spectre-ui/core";
import { ComponentPreview } from "@/components/ComponentPreview";
import { PropsTable, type PropDef } from "@/components/PropsTable";

const breadcrumbProps: PropDef[] = [
  {
    name: "items",
    type: "BreadcrumbItem[]",
    description:
      "Array of breadcrumb items. Each item has a label (string) and optional href (string). The last item is rendered as the current page.",
  },
  {
    name: "separator",
    type: "ReactNode",
    description: "Custom separator between items. Defaults to a slash.",
  },
  {
    name: "className",
    type: "string",
    description: "Additional CSS classes.",
  },
];

export default function BreadcrumbPageContent() {
  return (
    <div className="docs-prose">
      <h1>Breadcrumb</h1>
      <p>
        Breadcrumb navigation with customizable separators. Displays the current
        page location within a navigational hierarchy.
      </p>

      <h2>Basic Usage</h2>
      <ComponentPreview
        code={`<Breadcrumb items={[
  { label: "Home", href: "/" },
  { label: "Components", href: "/docs/components" },
  { label: "Breadcrumb" },
]} />`}
      >
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Components", href: "/docs/components" },
            { label: "Breadcrumb" },
          ]}
        />
      </ComponentPreview>

      <h2>Two Levels</h2>
      <ComponentPreview
        code={`<Breadcrumb items={[
  { label: "Home", href: "/" },
  { label: "Dashboard" },
]} />`}
      >
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Dashboard" },
          ]}
        />
      </ComponentPreview>

      <h2>Props</h2>
      <PropsTable props={breadcrumbProps} />

      <h2>Accessibility</h2>
      <ul>
        <li>
          Renders inside a <code>&lt;nav&gt;</code> element with{" "}
          <code>aria-label=&quot;Breadcrumb&quot;</code>
        </li>
        <li>
          Uses an <code>&lt;ol&gt;</code> list so screen readers announce the
          number of items
        </li>
        <li>
          The current page item uses <code>aria-current=&quot;page&quot;</code>{" "}
          to indicate the active location
        </li>
        <li>
          Separator characters are hidden from assistive technology with{" "}
          <code>aria-hidden</code>
        </li>
      </ul>
    </div>
  );
}
