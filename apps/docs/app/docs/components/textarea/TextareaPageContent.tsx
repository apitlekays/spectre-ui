"use client";

import React from "react";
import { Textarea } from "@spectre-ui/core";
import { ComponentPreview } from "@/components/ComponentPreview";
import { PropsTable, type PropDef } from "@/components/PropsTable";

const textareaProps: PropDef[] = [
  {
    name: "label",
    type: "string",
    description: "Label text displayed above the textarea.",
  },
  {
    name: "placeholder",
    type: "string",
    description: "Placeholder text shown when the textarea is empty.",
  },
  {
    name: "error",
    type: "string",
    description: "Error message displayed below the textarea.",
  },
  {
    name: "hint",
    type: "string",
    description: "Hint text displayed below the textarea.",
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "Whether the textarea is disabled.",
  },
  {
    name: "className",
    type: "string",
    description: "Additional CSS classes.",
  },
];

export default function TextareaPageContent() {
  return (
    <div className="docs-prose">
      <h1>Textarea</h1>
      <p>
        Multi-line text input with label, hint, and error states. Useful for
        collecting longer-form text such as reports, descriptions, or notes.
      </p>

      <h2>Basic</h2>
      <ComponentPreview
        code={`<Textarea label="Mission Report" placeholder="Enter details..." />`}
      >
        <div className="max-w-sm">
          <Textarea label="Mission Report" placeholder="Enter details..." />
        </div>
      </ComponentPreview>

      <h2>Error State</h2>
      <ComponentPreview
        code={`<Textarea label="Mission Report" error="Report is required" />`}
      >
        <div className="max-w-sm">
          <Textarea label="Mission Report" error="Report is required" />
        </div>
      </ComponentPreview>

      <h2>Props</h2>
      <PropsTable props={textareaProps} />

      <h2>Accessibility</h2>
      <ul>
        <li>
          Renders a native <code>&lt;textarea&gt;</code> element with an
          associated <code>&lt;label&gt;</code>
        </li>
        <li>
          Label is linked to the textarea via <code>htmlFor</code> for screen
          reader support
        </li>
        <li>
          Error messages are announced to assistive technology via{" "}
          <code>aria-describedby</code>
        </li>
        <li>
          Supports <code>disabled</code> state which prevents interaction and
          conveys the state to assistive technology
        </li>
      </ul>
    </div>
  );
}
