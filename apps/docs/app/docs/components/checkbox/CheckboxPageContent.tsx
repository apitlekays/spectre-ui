"use client";

import React from "react";
import { Checkbox } from "@spectre-ui/core";
import { ComponentPreview } from "@/components/ComponentPreview";
import { PropsTable, type PropDef } from "@/components/PropsTable";

const checkboxProps: PropDef[] = [
  {
    name: "label",
    type: "string",
    description: "Label text displayed next to the checkbox.",
  },
  {
    name: "defaultChecked",
    type: "boolean",
    default: "false",
    description: "Default checked state for uncontrolled usage.",
  },
  {
    name: "checked",
    type: "boolean",
    description: "Controlled checked state.",
  },
  {
    name: "onCheckedChange",
    type: "(checked: boolean) => void",
    description: "Callback fired when the checked state changes.",
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "Whether the checkbox is disabled.",
  },
  {
    name: "className",
    type: "string",
    description: "Additional CSS classes.",
  },
];

export default function CheckboxPageContent() {
  return (
    <div className="docs-prose">
      <h1>Checkbox</h1>
      <p>
        Checkbox with spectre styling built on Radix UI Checkbox. Supports labels,
        controlled and uncontrolled checked state, and disabled styling.
      </p>

      <h2>Basic</h2>
      <ComponentPreview
        code={`<Checkbox label="Accept mission terms" />`}
      >
        <div className="space-y-3">
          <Checkbox label="Accept mission terms" />
        </div>
      </ComponentPreview>

      <h2>Default Checked</h2>
      <ComponentPreview
        code={`<Checkbox label="Enable encryption" defaultChecked />`}
      >
        <div className="space-y-3">
          <Checkbox label="Enable encryption" defaultChecked />
        </div>
      </ComponentPreview>

      <h2>Disabled</h2>
      <ComponentPreview
        code={`<Checkbox label="Disabled option" disabled />`}
      >
        <div className="space-y-3">
          <Checkbox label="Disabled option" disabled />
        </div>
      </ComponentPreview>

      <h2>Props</h2>
      <PropsTable props={checkboxProps} />

      <h2>Accessibility</h2>
      <ul>
        <li>
          Built on Radix UI Checkbox which provides full WAI-ARIA checkbox
          pattern compliance
        </li>
        <li>
          Label is associated with the checkbox for screen reader support
        </li>
        <li>
          Togglable via <code>Space</code> key when focused
        </li>
        <li>
          Checked state is conveyed to assistive technology via{" "}
          <code>aria-checked</code>
        </li>
        <li>
          Disabled state prevents interaction and is communicated to assistive
          technology
        </li>
      </ul>
    </div>
  );
}
