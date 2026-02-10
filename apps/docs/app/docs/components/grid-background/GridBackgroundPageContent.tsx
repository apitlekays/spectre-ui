"use client";

import React from "react";
import { GridBackground } from "@spectre-ui/core";
import { ComponentPreview } from "@/components/ComponentPreview";
import { PropsTable, type PropDef } from "@/components/PropsTable";

const gridBackgroundProps: PropDef[] = [
  {
    name: "gridSize",
    type: '"sm" | "md" | "lg"',
    default: '"md"',
    description:
      "Size of the grid cells. sm = 20px, md = 40px, lg = 80px.",
  },
  {
    name: "animated",
    type: "boolean",
    default: "false",
    description: "Whether to animate the grid background.",
  },
  {
    name: "fade",
    type: "boolean",
    default: "true",
    description:
      "Applies a vertical gradient overlay that fades the grid into the background at the top and bottom edges.",
  },
  {
    name: "children",
    type: "ReactNode",
    description: "Content to render on top of the grid background.",
  },
  {
    name: "className",
    type: "string",
    description: "Additional CSS classes for the container.",
  },
];

export default function GridBackgroundPageContent() {
  return (
    <div className="docs-prose">
      <h1>GridBackground</h1>
      <p>
        Decorative grid pattern background for hero sections, landing pages, and
        content areas. Supports three grid sizes and an optional fade overlay.
      </p>

      <h2>Grid Sizes</h2>
      <ComponentPreview
        code={`<GridBackground gridSize="sm" className="h-40">
  <div className="relative z-10 flex h-full items-center justify-center text-sm">
    Small Grid (20px)
  </div>
</GridBackground>`}
      >
        <div className="flex flex-col gap-4">
          <GridBackground gridSize="sm" className="h-40">
            <div className="relative z-10 flex h-full items-center justify-center text-sm text-spectre-foreground">
              Small Grid (20px)
            </div>
          </GridBackground>
          <GridBackground gridSize="md" className="h-40">
            <div className="relative z-10 flex h-full items-center justify-center text-sm text-spectre-foreground">
              Medium Grid (40px)
            </div>
          </GridBackground>
          <GridBackground gridSize="lg" className="h-40">
            <div className="relative z-10 flex h-full items-center justify-center text-sm text-spectre-foreground">
              Large Grid (80px)
            </div>
          </GridBackground>
        </div>
      </ComponentPreview>

      <h2>Without Fade</h2>
      <ComponentPreview
        code={`<GridBackground gridSize="md" fade={false} className="h-40">
  <div className="relative z-10 flex h-full items-center justify-center text-sm">
    No fade overlay
  </div>
</GridBackground>`}
      >
        <GridBackground gridSize="md" fade={false} className="h-40">
          <div className="relative z-10 flex h-full items-center justify-center text-sm text-spectre-foreground">
            No fade overlay
          </div>
        </GridBackground>
      </ComponentPreview>

      <h2>Props</h2>
      <PropsTable props={gridBackgroundProps} />

      <h2>Accessibility</h2>
      <ul>
        <li>
          The grid pattern is purely decorative and does not affect content
          readability.
        </li>
        <li>
          Content placed inside should maintain sufficient color contrast against
          the grid background.
        </li>
        <li>
          The fade overlay helps ensure text remains readable near the top and
          bottom edges.
        </li>
      </ul>
    </div>
  );
}
