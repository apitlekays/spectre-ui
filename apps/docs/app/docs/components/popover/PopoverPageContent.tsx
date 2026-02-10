"use client";

import React from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
} from "@spectre-ui/core";
import { ComponentPreview } from "@/components/ComponentPreview";
import { PropsTable, type PropDef } from "@/components/PropsTable";

const popoverContentProps: PropDef[] = [
  {
    name: "side",
    type: '"top" | "right" | "bottom" | "left"',
    default: '"bottom"',
    description: "Preferred side of the trigger to render the popover.",
  },
  {
    name: "sideOffset",
    type: "number",
    default: "4",
    description: "Distance in pixels from the trigger.",
  },
  {
    name: "align",
    type: '"start" | "center" | "end"',
    default: '"center"',
    description: "Alignment of the popover relative to the trigger.",
  },
  {
    name: "className",
    type: "string",
    description: "Additional CSS classes.",
  },
];

export default function PopoverPageContent() {
  return (
    <div className="docs-prose">
      <h1>Popover</h1>
      <p>
        Click-triggered popover built on Radix UI Popover primitives. Displays
        rich content in a floating panel anchored to a trigger element.
      </p>

      <h2>Basic Popover</h2>
      <ComponentPreview
        code={`<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">Open Popover</Button>
  </PopoverTrigger>
  <PopoverContent>
    <div className="space-y-2">
      <h4 className="font-mono text-sm font-semibold">Settings</h4>
      <p className="text-sm text-spectre-muted-foreground">
        Configure your display preferences.
      </p>
    </div>
  </PopoverContent>
</Popover>`}
      >
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">Open Popover</Button>
          </PopoverTrigger>
          <PopoverContent>
            <div className="space-y-2">
              <h4 className="font-mono text-sm font-semibold">Settings</h4>
              <p className="text-sm text-spectre-muted-foreground">
                Configure your display preferences.
              </p>
            </div>
          </PopoverContent>
        </Popover>
      </ComponentPreview>

      <h2>Popover Positions</h2>
      <ComponentPreview
        code={`<Popover>
  <PopoverTrigger asChild><Button variant="outline">Top</Button></PopoverTrigger>
  <PopoverContent side="top">Popover on top</PopoverContent>
</Popover>
<Popover>
  <PopoverTrigger asChild><Button variant="outline">Right</Button></PopoverTrigger>
  <PopoverContent side="right">Popover on right</PopoverContent>
</Popover>
<Popover>
  <PopoverTrigger asChild><Button variant="outline">Bottom</Button></PopoverTrigger>
  <PopoverContent side="bottom">Popover on bottom</PopoverContent>
</Popover>
<Popover>
  <PopoverTrigger asChild><Button variant="outline">Left</Button></PopoverTrigger>
  <PopoverContent side="left">Popover on left</PopoverContent>
</Popover>`}
      >
        <div className="flex flex-wrap gap-3">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">Top</Button>
            </PopoverTrigger>
            <PopoverContent side="top">
              <p className="text-sm">Popover on top</p>
            </PopoverContent>
          </Popover>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">Right</Button>
            </PopoverTrigger>
            <PopoverContent side="right">
              <p className="text-sm">Popover on right</p>
            </PopoverContent>
          </Popover>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">Bottom</Button>
            </PopoverTrigger>
            <PopoverContent side="bottom">
              <p className="text-sm">Popover on bottom</p>
            </PopoverContent>
          </Popover>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">Left</Button>
            </PopoverTrigger>
            <PopoverContent side="left">
              <p className="text-sm">Popover on left</p>
            </PopoverContent>
          </Popover>
        </div>
      </ComponentPreview>

      <h2>Rich Content</h2>
      <ComponentPreview
        code={`<Popover>
  <PopoverTrigger asChild>
    <Button variant="primary">Agent Status</Button>
  </PopoverTrigger>
  <PopoverContent>
    <div className="space-y-3">
      <h4 className="font-mono text-sm font-semibold">Agent #042</h4>
      <div className="space-y-1 text-sm">
        <p>Status: <span className="text-spectre-success">Online</span></p>
        <p>Uptime: 99.7%</p>
        <p>Last ping: 2ms</p>
      </div>
    </div>
  </PopoverContent>
</Popover>`}
      >
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="primary">Agent Status</Button>
          </PopoverTrigger>
          <PopoverContent>
            <div className="space-y-3">
              <h4 className="font-mono text-sm font-semibold">Agent #042</h4>
              <div className="space-y-1 text-sm">
                <p>
                  Status:{" "}
                  <span className="text-spectre-success">Online</span>
                </p>
                <p>Uptime: 99.7%</p>
                <p>Last ping: 2ms</p>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </ComponentPreview>

      <h2>PopoverContent Props</h2>
      <PropsTable props={popoverContentProps} />

      <h2>Accessibility</h2>
      <ul>
        <li>
          Built on Radix UI Popover which follows the WAI-ARIA Dialog pattern
          for non-modal popovers
        </li>
        <li>
          Focus is trapped within the popover when open, and returned to the
          trigger on close
        </li>
        <li>Pressing <code>Escape</code> closes the popover</li>
        <li>Clicking outside the popover dismisses it</li>
        <li>
          Use <code>asChild</code> on <code>PopoverTrigger</code> to ensure the
          trigger is a focusable interactive element
        </li>
      </ul>
    </div>
  );
}
