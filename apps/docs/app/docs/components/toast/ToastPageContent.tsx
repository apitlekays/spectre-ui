"use client";

import React, { useState } from "react";
import {
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
  Button,
} from "@spectre-ui/core";
import { ComponentPreview } from "@/components/ComponentPreview";
import { PropsTable, type PropDef } from "@/components/PropsTable";

const toastProps: PropDef[] = [
  {
    name: "variant",
    type: '"default" | "success" | "warning" | "destructive"',
    default: '"default"',
    description: "Visual style variant of the toast.",
  },
  {
    name: "duration",
    type: "number",
    default: "5000",
    description: "Auto-dismiss duration in milliseconds.",
  },
  {
    name: "open",
    type: "boolean",
    description: "Controlled open state of the toast.",
  },
  {
    name: "onOpenChange",
    type: "(open: boolean) => void",
    description: "Callback when the open state changes.",
  },
];

const toastSubComponents: PropDef[] = [
  {
    name: "ToastProvider",
    type: "component",
    description:
      "Wraps the toast system. Place once at the root of your app.",
  },
  {
    name: "ToastViewport",
    type: "component",
    description:
      "Renders the toast container. Place inside the provider, typically at app root.",
  },
  {
    name: "ToastTitle",
    type: "component",
    description: "Title text for the toast notification.",
  },
  {
    name: "ToastDescription",
    type: "component",
    description: "Description text for the toast notification.",
  },
  {
    name: "ToastAction",
    type: "component",
    description:
      "Action button rendered inside the toast. Requires altText prop for accessibility.",
  },
  {
    name: "ToastClose",
    type: "component",
    description:
      "Close button with an X icon. Appears on hover by default.",
  },
];

function ToastDemo() {
  const [open, setOpen] = useState(false);

  return (
    <ToastProvider>
      <Button variant="outline" onClick={() => setOpen(true)}>
        Show Toast
      </Button>
      <Toast open={open} onOpenChange={setOpen}>
        <div className="grid gap-1">
          <ToastTitle>Notification</ToastTitle>
          <ToastDescription>Mission data synchronized.</ToastDescription>
        </div>
        <ToastClose />
      </Toast>
      <ToastViewport />
    </ToastProvider>
  );
}

function ToastVariantsDemo() {
  const [openDefault, setOpenDefault] = useState(false);
  const [openSuccess, setOpenSuccess] = useState(false);
  const [openWarning, setOpenWarning] = useState(false);
  const [openDestructive, setOpenDestructive] = useState(false);

  return (
    <ToastProvider>
      <div className="flex flex-wrap gap-3">
        <Button variant="outline" onClick={() => setOpenDefault(true)}>
          Default
        </Button>
        <Button variant="outline" onClick={() => setOpenSuccess(true)}>
          Success
        </Button>
        <Button variant="outline" onClick={() => setOpenWarning(true)}>
          Warning
        </Button>
        <Button variant="outline" onClick={() => setOpenDestructive(true)}>
          Destructive
        </Button>
      </div>
      <Toast open={openDefault} onOpenChange={setOpenDefault}>
        <div className="grid gap-1">
          <ToastTitle>Default</ToastTitle>
          <ToastDescription>Standard notification.</ToastDescription>
        </div>
        <ToastClose />
      </Toast>
      <Toast variant="success" open={openSuccess} onOpenChange={setOpenSuccess}>
        <div className="grid gap-1">
          <ToastTitle>Success</ToastTitle>
          <ToastDescription>Operation completed.</ToastDescription>
        </div>
        <ToastClose />
      </Toast>
      <Toast variant="warning" open={openWarning} onOpenChange={setOpenWarning}>
        <div className="grid gap-1">
          <ToastTitle>Warning</ToastTitle>
          <ToastDescription>Resource usage is high.</ToastDescription>
        </div>
        <ToastClose />
      </Toast>
      <Toast
        variant="destructive"
        open={openDestructive}
        onOpenChange={setOpenDestructive}
      >
        <div className="grid gap-1">
          <ToastTitle>Error</ToastTitle>
          <ToastDescription>Connection lost.</ToastDescription>
        </div>
        <ToastClose />
      </Toast>
      <ToastViewport />
    </ToastProvider>
  );
}

function ToastWithActionDemo() {
  const [open, setOpen] = useState(false);

  return (
    <ToastProvider>
      <Button variant="outline" onClick={() => setOpen(true)}>
        Show Toast with Action
      </Button>
      <Toast open={open} onOpenChange={setOpen}>
        <div className="grid gap-1">
          <ToastTitle>Update Available</ToastTitle>
          <ToastDescription>
            A new firmware version is ready to install.
          </ToastDescription>
        </div>
        <ToastAction altText="Install update now">Install</ToastAction>
      </Toast>
      <ToastViewport />
    </ToastProvider>
  );
}

export default function ToastPageContent() {
  return (
    <div className="docs-prose">
      <h1>Toast</h1>
      <p>
        Toast notifications built on Radix UI Toast primitives. Provides
        non-intrusive feedback messages that appear temporarily and can be
        dismissed.
      </p>

      <h2>Basic Toast</h2>
      <ComponentPreview
        code={`<ToastProvider>
  <Toast open={open} onOpenChange={setOpen}>
    <ToastTitle>Notification</ToastTitle>
    <ToastDescription>Mission data synchronized.</ToastDescription>
    <ToastClose />
  </Toast>
  <ToastViewport />
</ToastProvider>`}
      >
        <ToastDemo />
      </ComponentPreview>

      <h2>Variants</h2>
      <ComponentPreview
        code={`<Toast variant="default">...</Toast>
<Toast variant="success">...</Toast>
<Toast variant="warning">...</Toast>
<Toast variant="destructive">...</Toast>`}
      >
        <ToastVariantsDemo />
      </ComponentPreview>

      <h2>With Action</h2>
      <ComponentPreview
        code={`<Toast open={open} onOpenChange={setOpen}>
  <ToastTitle>Update Available</ToastTitle>
  <ToastDescription>A new firmware version is ready.</ToastDescription>
  <ToastAction altText="Install update now">Install</ToastAction>
</Toast>`}
      >
        <ToastWithActionDemo />
      </ComponentPreview>

      <h2>Toast Props</h2>
      <PropsTable props={toastProps} />

      <h2>Sub-Components</h2>
      <PropsTable props={toastSubComponents} />

      <h2>Accessibility</h2>
      <ul>
        <li>
          Built on Radix UI Toast which uses <code>role=&quot;status&quot;</code>{" "}
          and <code>aria-live=&quot;polite&quot;</code> for screen reader
          announcements
        </li>
        <li>
          <code>ToastAction</code> requires an <code>altText</code> prop that
          describes the action for screen readers
        </li>
        <li>Toasts support swipe-to-dismiss on touch devices</li>
        <li>
          Focus management is handled automatically by the Radix primitives
        </li>
        <li>
          <code>ToastClose</code> renders a close button accessible via keyboard
        </li>
      </ul>
    </div>
  );
}
