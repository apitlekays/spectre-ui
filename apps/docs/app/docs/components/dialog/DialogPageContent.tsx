"use client";

import React from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  Button,
} from "@spectre-ui/core";
import { ComponentPreview } from "@/components/ComponentPreview";
import { PropsTable, type PropDef } from "@/components/PropsTable";

const dialogProps: PropDef[] = [
  {
    name: "open",
    type: "boolean",
    description: "Controlled open state of the dialog.",
  },
  {
    name: "onOpenChange",
    type: "(open: boolean) => void",
    description: "Callback invoked when the open state changes.",
  },
  {
    name: "className",
    type: "string",
    description: "Additional CSS classes for the dialog content.",
  },
];

export default function DialogPageContent() {
  return (
    <div className="docs-prose">
      <h1>Dialog</h1>
      <p>
        Modal dialog built on Radix UI Dialog primitives with HUD styling.
        Supports controlled and uncontrolled usage with compound sub-components.
      </p>

      <h2>Basic Dialog</h2>
      <ComponentPreview
        code={`<Dialog>
  <DialogTrigger asChild>
    <Button variant="primary">Open Dialog</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Confirm Operation</DialogTitle>
      <DialogDescription>
        Are you sure you want to proceed with this mission?
      </DialogDescription>
    </DialogHeader>
    <DialogFooter>
      <Button variant="outline" size="sm">Cancel</Button>
      <Button variant="primary" size="sm">Confirm</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`}
      >
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="primary">Open Dialog</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Confirm Operation</DialogTitle>
              <DialogDescription>
                Are you sure you want to proceed with this mission?
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button variant="outline" size="sm">Cancel</Button>
              <Button variant="primary" size="sm">Confirm</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </ComponentPreview>

      <h2>Props</h2>
      <PropsTable props={dialogProps} />

      <h2>Accessibility</h2>
      <ul>
        <li>
          Built on Radix UI Dialog which provides full WAI-ARIA dialog pattern
          support
        </li>
        <li>
          Focus is automatically trapped inside the dialog when open and
          restored on close
        </li>
        <li>
          Pressing <code>Escape</code> closes the dialog
        </li>
        <li>
          Clicking the overlay backdrop closes the dialog
        </li>
        <li>
          <code>&lt;DialogTitle&gt;</code> is linked via{" "}
          <code>aria-labelledby</code> and <code>&lt;DialogDescription&gt;</code>{" "}
          via <code>aria-describedby</code>
        </li>
        <li>
          The trigger element receives <code>aria-haspopup=&quot;dialog&quot;</code>{" "}
          and <code>aria-expanded</code> state
        </li>
      </ul>
    </div>
  );
}
