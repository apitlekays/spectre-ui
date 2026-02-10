"use client";

import React from "react";
import { Input } from "@spectre-ui/core";
import { ComponentPreview } from "@/components/ComponentPreview";
import { PropsTable, type PropDef } from "@/components/PropsTable";

const inputProps: PropDef[] = [
  {
    name: "label",
    type: "string",
    description: "Label text displayed above the input.",
  },
  {
    name: "placeholder",
    type: "string",
    description: "Placeholder text shown when the input is empty.",
  },
  {
    name: "error",
    type: "string",
    description: "Error message displayed below the input.",
  },
  {
    name: "hint",
    type: "string",
    description: "Hint text displayed below the input.",
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "Disables the input and applies muted styling.",
  },
  {
    name: "className",
    type: "string",
    description: "Additional CSS classes.",
  },
];

export default function InputPageContent() {
  return (
    <div className="docs-prose">
      <h1>Input</h1>
      <p>
        Text input with built-in label, error message, and hint support.
        Handles common form patterns with consistent HUD styling.
      </p>

      <h2>Variants</h2>
      <ComponentPreview
        code={`<Input label="Agent Name" placeholder="Enter codename..." />
<Input label="With Error" error="This field is required" />
<Input label="With Hint" hint="Use your assigned codename" />
<Input label="Disabled" disabled placeholder="Locked" />`}
      >
        <div className="max-w-sm space-y-4">
          <Input label="Agent Name" placeholder="Enter codename..." />
          <Input label="With Error" error="This field is required" />
          <Input label="With Hint" hint="Use your assigned codename" />
          <Input label="Disabled" disabled placeholder="Locked" />
        </div>
      </ComponentPreview>

      <h2>Props</h2>
      <PropsTable props={inputProps} />

      <h2>Accessibility</h2>
      <ul>
        <li>
          Renders a semantic <code>&lt;input&gt;</code> element with an
          associated <code>&lt;label&gt;</code>
        </li>
        <li>
          The <code>label</code> prop automatically generates a linked{" "}
          <code>htmlFor</code> / <code>id</code> pair
        </li>
        <li>
          Error messages are linked via <code>aria-describedby</code> and set{" "}
          <code>aria-invalid=&quot;true&quot;</code>
        </li>
        <li>
          Hint text is linked via <code>aria-describedby</code> for screen
          reader context
        </li>
        <li>
          Disabled state applies <code>aria-disabled</code> alongside the native{" "}
          <code>disabled</code> attribute
        </li>
        <li>Supports <code>ref</code> forwarding for DOM access</li>
      </ul>
    </div>
  );
}
