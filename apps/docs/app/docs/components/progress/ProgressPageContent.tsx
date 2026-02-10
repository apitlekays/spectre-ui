"use client";

import React from "react";
import { Progress } from "@spectre-ui/core";
import { ComponentPreview } from "@/components/ComponentPreview";
import { PropsTable, type PropDef } from "@/components/PropsTable";

const progressProps: PropDef[] = [
  {
    name: "value",
    type: "number",
    description: "Progress value from 0 to 100.",
  },
  {
    name: "variant",
    type: '"default" | "success" | "warning" | "destructive"',
    default: '"default"',
    description: "Color variant for the progress bar.",
  },
  {
    name: "label",
    type: "string",
    description: "Label text displayed above the progress bar.",
  },
  {
    name: "max",
    type: "number",
    default: "100",
    description: "Maximum value for the progress bar range.",
  },
  {
    name: "showValue",
    type: "boolean",
    description: "Show the percentage value alongside the label.",
  },
  {
    name: "className",
    type: "string",
    description: "Additional CSS classes.",
  },
];

export default function ProgressPageContent() {
  return (
    <div className="docs-prose">
      <h1>Progress</h1>
      <p>
        Progress bar with glow effect, labels, and variant colors. Visualizes
        completion status for uploads, tasks, or system metrics.
      </p>

      <h2>Variants</h2>
      <ComponentPreview
        code={`<Progress value={65} label="Upload Progress" showValue />
<Progress value={100} variant="success" label="Complete" showValue />
<Progress value={30} variant="warning" label="Storage" showValue />
<Progress value={85} variant="destructive" label="CPU Load" showValue />`}
      >
        <div className="space-y-6 max-w-md">
          <Progress value={65} label="Upload Progress" showValue />
          <Progress value={100} variant="success" label="Complete" showValue />
          <Progress value={30} variant="warning" label="Storage" showValue />
          <Progress value={85} variant="destructive" label="CPU Load" showValue />
        </div>
      </ComponentPreview>

      <h2>Without Label</h2>
      <ComponentPreview
        code={`<Progress value={50} />
<Progress value={75} variant="success" />`}
      >
        <div className="space-y-6 max-w-md">
          <Progress value={50} />
          <Progress value={75} variant="success" />
        </div>
      </ComponentPreview>

      <h2>Props</h2>
      <PropsTable props={progressProps} />

      <h2>Accessibility</h2>
      <ul>
        <li>
          Uses <code>role=&quot;progressbar&quot;</code> with{" "}
          <code>aria-valuenow</code>, <code>aria-valuemin</code>, and{" "}
          <code>aria-valuemax</code> attributes
        </li>
        <li>
          The <code>label</code> prop is linked via <code>aria-labelledby</code>{" "}
          so screen readers announce the progress context
        </li>
        <li>
          Color variants should not be the sole indicator of meaning — use the
          label to convey status
        </li>
        <li>
          Passes through all standard HTML attributes including{" "}
          <code>aria-*</code>
        </li>
      </ul>
    </div>
  );
}
