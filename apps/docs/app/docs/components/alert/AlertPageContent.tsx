"use client";

import React from "react";
import { Alert } from "@spectre-ui/core";
import { ComponentPreview } from "@/components/ComponentPreview";
import { PropsTable, type PropDef } from "@/components/PropsTable";

const alertProps: PropDef[] = [
  {
    name: "variant",
    type: '"default" | "info" | "success" | "warning" | "destructive"',
    default: '"default"',
    description: "Visual style variant of the alert.",
  },
  {
    name: "title",
    type: "string",
    description: "Bold title displayed at the top of the alert.",
  },
  {
    name: "icon",
    type: "ReactNode",
    description: "Optional icon displayed on the left side of the alert.",
  },
  {
    name: "className",
    type: "string",
    description: "Additional CSS classes.",
  },
];

export default function AlertPageContent() {
  return (
    <div className="docs-prose">
      <h1>Alert</h1>
      <p>
        Alert banners for displaying informational, success, warning, and error
        messages. Each variant uses distinct color coding for quick visual
        identification.
      </p>

      <h2>Variants</h2>
      <ComponentPreview
        code={`<Alert variant="info" title="Information">
  System update available.
</Alert>
<Alert variant="success" title="Success">
  Mission completed successfully.
</Alert>
<Alert variant="warning" title="Warning">
  Security clearance expiring.
</Alert>
<Alert variant="destructive" title="Error">
  Connection lost to headquarters.
</Alert>`}
      >
        <div className="space-y-4">
          <Alert variant="info" title="Information">
            System update available.
          </Alert>
          <Alert variant="success" title="Success">
            Mission completed successfully.
          </Alert>
          <Alert variant="warning" title="Warning">
            Security clearance expiring.
          </Alert>
          <Alert variant="destructive" title="Error">
            Connection lost to headquarters.
          </Alert>
        </div>
      </ComponentPreview>

      <h2>Props</h2>
      <PropsTable props={alertProps} />

      <h2>Accessibility</h2>
      <ul>
        <li>
          Renders with <code>role=&quot;alert&quot;</code> for screen reader
          announcements
        </li>
        <li>
          The <code>destructive</code> variant uses{" "}
          <code>aria-live=&quot;assertive&quot;</code> for immediate
          announcement
        </li>
        <li>
          Other variants use <code>aria-live=&quot;polite&quot;</code> for
          non-intrusive announcements
        </li>
        <li>Supports <code>ref</code> forwarding for DOM access</li>
        <li>
          Passes through all standard HTML attributes including{" "}
          <code>aria-*</code> and <code>role</code>
        </li>
      </ul>
    </div>
  );
}
