"use client";

import React from "react";
import { Switch } from "@spectre-ui/core";
import { ComponentPreview } from "@/components/ComponentPreview";
import { PropsTable, type PropDef } from "@/components/PropsTable";

const switchProps: PropDef[] = [
  { name: "label", type: "string", description: "Label text displayed next to the switch." },
  { name: "defaultChecked", type: "boolean", default: "false", description: "Default checked state for uncontrolled usage." },
  { name: "checked", type: "boolean", description: "Controlled checked state." },
  { name: "onCheckedChange", type: "(checked: boolean) => void", description: "Callback fired when the checked state changes." },
  { name: "disabled", type: "boolean", default: "false", description: "Whether the switch is disabled." },
  { name: "className", type: "string", description: "Additional CSS classes." },
];

export default function SwitchPageContent() {
  return (
    <div className="docs-prose">
      <h1>Switch</h1>
      <p>Toggle switch built on Radix UI Switch. Ideal for binary on/off settings such as enabling features or toggling modes.</p>

      <h2>Basic</h2>
      <ComponentPreview code={`<Switch label="Dark mode" />`}>
        <div className="space-y-3"><Switch label="Dark mode" /></div>
      </ComponentPreview>

      <h2>Default Checked</h2>
      <ComponentPreview code={`<Switch label="Notifications" defaultChecked />`}>
        <div className="space-y-3"><Switch label="Notifications" defaultChecked /></div>
      </ComponentPreview>

      <h2>Props</h2>
      <PropsTable props={switchProps} />

      <h2>Accessibility</h2>
      <ul>
        <li>Built on Radix UI Switch which provides full WAI-ARIA switch role compliance</li>
        <li>Label is associated with the switch for screen reader support</li>
        <li>Togglable via <code>Space</code> key when focused</li>
        <li>On/off state is conveyed to assistive technology via{" "}<code>aria-checked</code></li>
        <li>Disabled state prevents interaction and is communicated to assistive technology</li>
      </ul>
    </div>
  );
}
