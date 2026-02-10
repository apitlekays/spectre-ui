"use client";

import React from "react";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@spectre-ui/core";
import { ComponentPreview } from "@/components/ComponentPreview";
import { PropsTable, type PropDef } from "@/components/PropsTable";

const selectProps: PropDef[] = [
  {
    name: "value",
    type: "string",
    description: "Controlled selected value.",
  },
  {
    name: "defaultValue",
    type: "string",
    description: "Default selected value for uncontrolled usage.",
  },
  {
    name: "onValueChange",
    type: "(value: string) => void",
    description: "Callback fired when the selected value changes.",
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "Whether the select is disabled.",
  },
];

export default function SelectPageContent() {
  return (
    <div className="docs-prose">
      <h1>Select</h1>
      <p>
        Dropdown select built on Radix UI Select primitives. Composed from{" "}
        <code>Select</code>, <code>SelectTrigger</code>,{" "}
        <code>SelectContent</code>, <code>SelectItem</code>, and{" "}
        <code>SelectValue</code> for full control over structure and styling.
      </p>

      <h2>Basic</h2>
      <ComponentPreview
        code={`<Select>
  <SelectTrigger>
    <SelectValue placeholder="Select clearance level..." />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="alpha">Alpha</SelectItem>
    <SelectItem value="bravo">Bravo</SelectItem>
    <SelectItem value="charlie">Charlie</SelectItem>
  </SelectContent>
</Select>`}
      >
        <div className="max-w-sm">
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select clearance level..." />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="alpha">Alpha</SelectItem>
              <SelectItem value="bravo">Bravo</SelectItem>
              <SelectItem value="charlie">Charlie</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </ComponentPreview>

      <h2>Props</h2>
      <p>
        Props for the <code>Select</code> root component.
      </p>
      <PropsTable props={selectProps} />

      <h2>Accessibility</h2>
      <ul>
        <li>
          Built on Radix UI Select which provides full WAI-ARIA combobox pattern
          compliance
        </li>
        <li>
          Trigger is keyboard-focusable and opens the listbox with{" "}
          <code>Enter</code>, <code>Space</code>, or arrow keys
        </li>
        <li>
          Options are navigable via arrow keys with automatic focus management
        </li>
        <li>
          Selected value is announced to screen readers via{" "}
          <code>aria-selected</code>
        </li>
        <li>
          Pressing <code>Escape</code> closes the dropdown and returns focus to
          the trigger
        </li>
      </ul>
    </div>
  );
}
