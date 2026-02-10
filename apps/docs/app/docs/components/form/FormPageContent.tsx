"use client";

import React from "react";
import {
  Form,
  FormField,
  FormLabel,
  FormMessage,
  Input,
  Button,
} from "@spectre-ui/core";
import { ComponentPreview } from "@/components/ComponentPreview";
import { PropsTable, type PropDef } from "@/components/PropsTable";

const formProps: PropDef[] = [
  {
    name: "className",
    type: "string",
    description: "Additional CSS classes for the form element.",
  },
  {
    name: "children",
    type: "ReactNode",
    required: true,
    description: "Form content, typically FormField components.",
  },
  {
    name: "onSubmit",
    type: "FormEventHandler",
    description: "Form submission handler.",
  },
];

const formFieldProps: PropDef[] = [
  {
    name: "className",
    type: "string",
    description: "Additional CSS classes for the field wrapper.",
  },
  {
    name: "children",
    type: "ReactNode",
    required: true,
    description: "Field content: label, input, and optional message.",
  },
];

const formLabelProps: PropDef[] = [
  {
    name: "htmlFor",
    type: "string",
    description: "The id of the associated form control.",
  },
  {
    name: "children",
    type: "ReactNode",
    required: true,
    description: "Label text content.",
  },
];

const formMessageProps: PropDef[] = [
  {
    name: "error",
    type: "boolean",
    default: "false",
    description:
      "When true, renders the message in destructive (error) color instead of muted.",
  },
  {
    name: "children",
    type: "ReactNode",
    required: true,
    description: "Message text content.",
  },
];

export default function FormPageContent() {
  return (
    <div className="docs-prose">
      <h1>Form</h1>
      <p>
        Structured form layout with sub-components for fields, labels, and
        validation messages. Provides consistent spacing and typography for all
        form elements.
      </p>

      <h2>Basic Form</h2>
      <ComponentPreview
        code={`<Form>
  <FormField>
    <FormLabel htmlFor="agent-name">Agent Name</FormLabel>
    <Input id="agent-name" placeholder="Enter agent name" />
    <FormMessage>Alphanumeric characters only.</FormMessage>
  </FormField>
  <FormField>
    <FormLabel htmlFor="agent-code">Agent Code</FormLabel>
    <Input id="agent-code" placeholder="e.g. ALPHA-7" />
  </FormField>
  <Button type="submit">Register Agent</Button>
</Form>`}
      >
        <div className="max-w-md">
          <Form>
            <FormField>
              <FormLabel htmlFor="agent-name">Agent Name</FormLabel>
              <Input id="agent-name" placeholder="Enter agent name" />
              <FormMessage>Alphanumeric characters only.</FormMessage>
            </FormField>
            <FormField>
              <FormLabel htmlFor="agent-code">Agent Code</FormLabel>
              <Input id="agent-code" placeholder="e.g. ALPHA-7" />
            </FormField>
            <Button type="submit">Register Agent</Button>
          </Form>
        </div>
      </ComponentPreview>

      <h2>With Error Messages</h2>
      <ComponentPreview
        code={`<Form>
  <FormField>
    <FormLabel htmlFor="email">Email</FormLabel>
    <Input id="email" placeholder="agent@system.io" />
    <FormMessage error>A valid email address is required.</FormMessage>
  </FormField>
  <FormField>
    <FormLabel htmlFor="access-key">Access Key</FormLabel>
    <Input id="access-key" type="password" placeholder="Enter access key" />
    <FormMessage error>Access key must be at least 12 characters.</FormMessage>
  </FormField>
</Form>`}
      >
        <div className="max-w-md">
          <Form>
            <FormField>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input id="email" placeholder="agent@system.io" />
              <FormMessage error>
                A valid email address is required.
              </FormMessage>
            </FormField>
            <FormField>
              <FormLabel htmlFor="access-key">Access Key</FormLabel>
              <Input
                id="access-key"
                type="password"
                placeholder="Enter access key"
              />
              <FormMessage error>
                Access key must be at least 12 characters.
              </FormMessage>
            </FormField>
          </Form>
        </div>
      </ComponentPreview>

      <h2>Form Props</h2>
      <PropsTable props={formProps} />

      <h2>FormField Props</h2>
      <PropsTable props={formFieldProps} />

      <h2>FormLabel Props</h2>
      <PropsTable props={formLabelProps} />

      <h2>FormMessage Props</h2>
      <PropsTable props={formMessageProps} />

      <h2>Accessibility</h2>
      <ul>
        <li>
          Uses semantic <code>&lt;form&gt;</code>, <code>&lt;label&gt;</code>,
          and <code>&lt;p&gt;</code> elements.
        </li>
        <li>
          Connect labels to inputs using <code>htmlFor</code> and matching{" "}
          <code>id</code> attributes.
        </li>
        <li>
          Error messages should be associated with their fields using{" "}
          <code>aria-describedby</code> for screen reader announcements.
        </li>
        <li>
          Use <code>aria-invalid=&quot;true&quot;</code> on inputs with
          validation errors.
        </li>
      </ul>
    </div>
  );
}
