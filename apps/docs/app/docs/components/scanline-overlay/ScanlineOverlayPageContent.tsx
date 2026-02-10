"use client";

import React from "react";
import { ScanlineOverlay } from "@spectre-ui/core";
import { ComponentPreview } from "@/components/ComponentPreview";
import { PropsTable, type PropDef } from "@/components/PropsTable";

const scanlineOverlayProps: PropDef[] = [
  {
    name: "opacity",
    type: "number",
    default: "0.05",
    description: "Opacity of the scanline stripes (0 to 1).",
  },
  {
    name: "speed",
    type: '"slow" | "normal" | "fast"',
    default: '"normal"',
    description:
      "Animation speed of the scrolling scanlines. slow = 12s, normal = 8s, fast = 4s.",
  },
  {
    name: "className",
    type: "string",
    description: "Additional CSS classes for the overlay container.",
  },
];

export default function ScanlineOverlayPageContent() {
  return (
    <div className="docs-prose">
      <h1>ScanlineOverlay</h1>
      <p>
        Decorative CRT-style scanline overlay effect. Renders as an absolutely
        positioned layer over its parent container. Uses repeating linear
        gradients with configurable opacity and animation speed.
      </p>

      <h2>Default Scanlines</h2>
      <ComponentPreview
        code={`<div className="relative h-40 bg-spectre-background border border-spectre-border">
  <ScanlineOverlay />
  <div className="relative z-10 flex h-full items-center justify-center">
    Content with scanline overlay
  </div>
</div>`}
      >
        <div className="relative h-40 bg-spectre-background border border-spectre-border">
          <ScanlineOverlay />
          <div className="relative z-10 flex h-full items-center justify-center text-sm text-spectre-foreground">
            Content with scanline overlay
          </div>
        </div>
      </ComponentPreview>

      <h2>Speed Variants</h2>
      <ComponentPreview
        code={`<ScanlineOverlay speed="slow" />
<ScanlineOverlay speed="normal" />
<ScanlineOverlay speed="fast" />`}
      >
        <div className="flex flex-col gap-4">
          <div className="relative h-28 bg-spectre-background border border-spectre-border">
            <ScanlineOverlay speed="slow" />
            <div className="relative z-10 flex h-full items-center justify-center text-sm text-spectre-foreground">
              Slow (12s)
            </div>
          </div>
          <div className="relative h-28 bg-spectre-background border border-spectre-border">
            <ScanlineOverlay speed="normal" />
            <div className="relative z-10 flex h-full items-center justify-center text-sm text-spectre-foreground">
              Normal (8s)
            </div>
          </div>
          <div className="relative h-28 bg-spectre-background border border-spectre-border">
            <ScanlineOverlay speed="fast" />
            <div className="relative z-10 flex h-full items-center justify-center text-sm text-spectre-foreground">
              Fast (4s)
            </div>
          </div>
        </div>
      </ComponentPreview>

      <h2>Higher Opacity</h2>
      <ComponentPreview
        code={`<div className="relative h-40 bg-spectre-background border border-spectre-border">
  <ScanlineOverlay opacity={0.15} speed="fast" />
  <div className="relative z-10 flex h-full items-center justify-center">
    Stronger scanlines (opacity 0.15)
  </div>
</div>`}
      >
        <div className="relative h-40 bg-spectre-background border border-spectre-border">
          <ScanlineOverlay opacity={0.15} speed="fast" />
          <div className="relative z-10 flex h-full items-center justify-center text-sm text-spectre-foreground">
            Stronger scanlines (opacity 0.15)
          </div>
        </div>
      </ComponentPreview>

      <h2>Props</h2>
      <PropsTable props={scanlineOverlayProps} />

      <h2>Usage Tips</h2>
      <ul>
        <li>
          The parent container <strong>must</strong> have{" "}
          <code>position: relative</code> (use <code>className=&quot;relative&quot;</code>)
          for the overlay to position correctly.
        </li>
        <li>
          Content inside the container should use{" "}
          <code>className=&quot;relative z-10&quot;</code> to appear above the
          scanline layer.
        </li>
        <li>
          Recommended opacity range: <code>0.03</code>&ndash;<code>0.1</code>{" "}
          for subtle ambiance, <code>0.1</code>&ndash;<code>0.2</code> for a
          visible CRT effect.
        </li>
        <li>
          Works best as a full-section or full-page overlay. Wrap your page
          content in a relative container and add the overlay as the first child.
        </li>
      </ul>
      <ComponentPreview
        code={`{/* Full-section usage pattern */}
<section className="relative min-h-screen">
  <ScanlineOverlay opacity={0.06} />
  <div className="relative z-10">
    {/* Your page content here */}
  </div>
</section>`}
      >
        <div className="relative h-48 bg-spectre-background border border-spectre-border">
          <ScanlineOverlay opacity={0.08} />
          <div className="relative z-10 flex h-full flex-col items-center justify-center gap-2">
            <span className="text-xs font-mono uppercase tracking-widest text-spectre-primary">
              Full-section pattern
            </span>
            <span className="text-sm text-spectre-muted-foreground">
              Content sits above the scanline layer via z-10
            </span>
          </div>
        </div>
      </ComponentPreview>

      <h2>Accessibility</h2>
      <ul>
        <li>
          The overlay has <code>aria-hidden=&quot;true&quot;</code> and is
          invisible to screen readers.
        </li>
        <li>
          Uses <code>pointer-events-none</code> so it does not interfere with
          user interactions on content beneath it.
        </li>
        <li>
          Ensure content behind the overlay maintains sufficient contrast,
          especially at higher opacity values.
        </li>
      </ul>
    </div>
  );
}
