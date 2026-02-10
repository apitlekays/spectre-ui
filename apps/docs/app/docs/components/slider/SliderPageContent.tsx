"use client";

import React from "react";
import { Slider } from "@spectre-ui/core";
import { ComponentPreview } from "@/components/ComponentPreview";
import { PropsTable, type PropDef } from "@/components/PropsTable";

const sliderProps: PropDef[] = [
  { name: "label", type: "string", description: "Label text displayed above the slider." },
  { name: "defaultValue", type: "number[]", description: "Default slider value for uncontrolled usage." },
  { name: "value", type: "number[]", description: "Controlled slider value." },
  { name: "onValueChange", type: "(value: number[]) => void", description: "Callback fired when the slider value changes." },
  { name: "min", type: "number", default: "0", description: "Minimum value of the slider range." },
  { name: "max", type: "number", default: "100", description: "Maximum value of the slider range." },
  { name: "step", type: "number", default: "1", description: "Step increment between values." },
  { name: "disabled", type: "boolean", default: "false", description: "Whether the slider is disabled." },
  { name: "className", type: "string", description: "Additional CSS classes." },
];

export default function SliderPageContent() {
  return (
    <div className="docs-prose">
      <h1>Slider</h1>
      <p>Range slider built on Radix UI Slider. Allows users to select a numeric value within a defined range with configurable min, max, and step.</p>

      <h2>Basic</h2>
      <ComponentPreview code={`<Slider label="Volume" defaultValue={[50]} max={100} step={1} />`}>
        <div className="max-w-sm"><Slider label="Volume" defaultValue={[50]} max={100} step={1} /></div>
      </ComponentPreview>

      <h2>Custom Step</h2>
      <ComponentPreview code={`<Slider label="Opacity" defaultValue={[75]} max={100} step={5} />`}>
        <div className="max-w-sm"><Slider label="Opacity" defaultValue={[75]} max={100} step={5} /></div>
      </ComponentPreview>

      <h2>Props</h2>
      <PropsTable props={sliderProps} />

      <h2>Accessibility</h2>
      <ul>
        <li>Built on Radix UI Slider which provides full WAI-ARIA slider role compliance</li>
        <li>Label is associated with the slider for screen reader support</li>
        <li>Navigable via arrow keys with <code>step</code>-based increments</li>
        <li>Current value, min, and max are conveyed to assistive technology via{" "}<code>aria-valuenow</code>, <code>aria-valuemin</code>, and{" "}<code>aria-valuemax</code></li>
        <li><code>Home</code> and <code>End</code> keys jump to minimum and maximum values respectively</li>
      </ul>
    </div>
  );
}
