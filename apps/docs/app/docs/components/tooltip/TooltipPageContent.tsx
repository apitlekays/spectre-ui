"use client";

import React from "react";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  Button,
} from "@spectre-ui/core";
import { ComponentPreview } from "@/components/ComponentPreview";
import { PropsTable, type PropDef } from "@/components/PropsTable";

const tooltipContentProps: PropDef[] = [
  {
    name: "side",
    type: '"top" | "right" | "bottom" | "left"',
    default: '"top"',
    description: "Preferred side of the trigger to render the tooltip.",
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
    description: "Alignment of the tooltip relative to the trigger.",
  },
  {
    name: "className",
    type: "string",
    description: "Additional CSS classes.",
  },
];

const tooltipProviderProps: PropDef[] = [
  {
    name: "delayDuration",
    type: "number",
    default: "700",
    description:
      "Delay in milliseconds before the tooltip opens on hover.",
  },
  {
    name: "skipDelayDuration",
    type: "number",
    default: "300",
    description:
      "Duration to skip the delay when rapidly moving between triggers.",
  },
];

export default function TooltipPageContent() {
  return (
    <div className="docs-prose">
      <h1>Tooltip</h1>
      <p>
        Hover-activated tooltip built on Radix UI Tooltip primitives. Provides
        contextual information when users hover over or focus a trigger element.
      </p>

      <h2>Basic Tooltip</h2>
      <ComponentPreview
        code={`<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild>
      <Button variant="outline">Hover me</Button>
    </TooltipTrigger>
    <TooltipContent>
      Tooltip message here
    </TooltipContent>
  </Tooltip>
</TooltipProvider>`}
      >
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline">Hover me</Button>
            </TooltipTrigger>
            <TooltipContent>Tooltip message here</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </ComponentPreview>

      <h2>Tooltip Positions</h2>
      <ComponentPreview
        code={`<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild><Button variant="outline">Top</Button></TooltipTrigger>
    <TooltipContent side="top">Top tooltip</TooltipContent>
  </Tooltip>
  <Tooltip>
    <TooltipTrigger asChild><Button variant="outline">Right</Button></TooltipTrigger>
    <TooltipContent side="right">Right tooltip</TooltipContent>
  </Tooltip>
  <Tooltip>
    <TooltipTrigger asChild><Button variant="outline">Bottom</Button></TooltipTrigger>
    <TooltipContent side="bottom">Bottom tooltip</TooltipContent>
  </Tooltip>
  <Tooltip>
    <TooltipTrigger asChild><Button variant="outline">Left</Button></TooltipTrigger>
    <TooltipContent side="left">Left tooltip</TooltipContent>
  </Tooltip>
</TooltipProvider>`}
      >
        <TooltipProvider>
          <div className="flex flex-wrap gap-3">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">Top</Button>
              </TooltipTrigger>
              <TooltipContent side="top">Top tooltip</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">Right</Button>
              </TooltipTrigger>
              <TooltipContent side="right">Right tooltip</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">Bottom</Button>
              </TooltipTrigger>
              <TooltipContent side="bottom">Bottom tooltip</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">Left</Button>
              </TooltipTrigger>
              <TooltipContent side="left">Left tooltip</TooltipContent>
            </Tooltip>
          </div>
        </TooltipProvider>
      </ComponentPreview>

      <h2>TooltipContent Props</h2>
      <PropsTable props={tooltipContentProps} />

      <h2>TooltipProvider Props</h2>
      <PropsTable props={tooltipProviderProps} />

      <h2>Accessibility</h2>
      <ul>
        <li>
          Built on Radix UI Tooltip which follows the WAI-ARIA Tooltip pattern
        </li>
        <li>Tooltip opens on hover and focus for keyboard accessibility</li>
        <li>
          Content is associated with the trigger via{" "}
          <code>aria-describedby</code>
        </li>
        <li>Pressing <code>Escape</code> closes the tooltip</li>
        <li>
          Use <code>asChild</code> on <code>TooltipTrigger</code> to ensure the
          trigger element is a focusable button or link
        </li>
      </ul>
    </div>
  );
}
