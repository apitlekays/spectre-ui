"use client";

import React from "react";
import { Stat, Grid } from "@spectre-ui/core";
import { ComponentPreview } from "@/components/ComponentPreview";
import { PropsTable, type PropDef } from "@/components/PropsTable";

const statProps: PropDef[] = [
  { name: "label", type: "string", required: true, description: "Uppercase label displayed above the value." },
  { name: "value", type: "string | number", required: true, description: "The main statistic value to display." },
  { name: "change", type: "string", description: "Change indicator text displayed below the value." },
  { name: "changeType", type: '"positive" | "negative" | "neutral"', default: '"neutral"', description: "Color coding for the change indicator." },
  { name: "icon", type: "ReactNode", description: "Optional icon displayed in the top-right corner." },
  { name: "className", type: "string", description: "Additional CSS classes." },
];

export default function StatPageContent() {
  return (
    <div className="docs-prose">
      <h1>Stat</h1>
      <p>Statistic display card with label, value, and optional change indicator. Features the HUD corner styling for a tactical dashboard aesthetic.</p>

      <h2>Basic Usage</h2>
      <ComponentPreview code={`<Stat label="Active Agents" value={42} />`}>
        <div className="max-w-xs"><Stat label="Active Agents" value={42} /></div>
      </ComponentPreview>

      <h2>Change Indicators</h2>
      <ComponentPreview code={`<Stat label="Revenue" value="$12,450" change="+12.5%" changeType="positive" />\n<Stat label="Errors" value={7} change="-3 from yesterday" changeType="negative" />\n<Stat label="Latency" value="42ms" change="No change" changeType="neutral" />`}>
        <Grid cols={3} gap="md">
          <Stat label="Revenue" value="$12,450" change="+12.5%" changeType="positive" />
          <Stat label="Errors" value={7} change="-3 from yesterday" changeType="negative" />
          <Stat label="Latency" value="42ms" change="No change" changeType="neutral" />
        </Grid>
      </ComponentPreview>

      <h2>With Icons</h2>
      <ComponentPreview code={`<Stat\n  label="Uptime"\n  value="99.9%"\n  change="+0.1%"\n  changeType="positive"\n  icon={<span>&#9650;</span>}\n/>`}>
        <div className="max-w-xs">
          <Stat label="Uptime" value="99.9%" change="+0.1%" changeType="positive" icon={<span>&#9650;</span>} />
        </div>
      </ComponentPreview>

      <h2>Props</h2>
      <PropsTable props={statProps} />

      <h2>Accessibility</h2>
      <ul>
        <li>Renders a semantic <code>&lt;div&gt;</code> element</li>
        <li>Label text is rendered as a visible <code>&lt;span&gt;</code> for screen readers</li>
        <li>Change type is conveyed visually through color; consider adding{" "}<code>aria-label</code> for screen reader context when using change indicators</li>
        <li>Supports <code>ref</code> forwarding for DOM access</li>
      </ul>
    </div>
  );
}
