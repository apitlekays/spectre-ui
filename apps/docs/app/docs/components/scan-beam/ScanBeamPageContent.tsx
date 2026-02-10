"use client";

import React from "react";
import { ScanBeam } from "@spectre-ui/core";
import { ComponentPreview } from "@/components/ComponentPreview";
import { PropsTable, type PropDef } from "@/components/PropsTable";

const scanBeamProps: PropDef[] = [
  {
    name: "color",
    type: "string",
    default: "var(--spectre-primary)",
    description:
      "Beam color. Accepts any CSS color value or CSS variable. Defaults to the theme primary.",
  },
  {
    name: "opacity",
    type: "number",
    default: "0.3",
    description: "Opacity of the sweep beam (0 to 1).",
  },
  {
    name: "speed",
    type: '"slow" | "normal" | "fast"',
    default: '"normal"',
    description:
      "Animation speed of the sweep. slow = 6s, normal = 3s, fast = 1.5s.",
  },
  {
    name: "size",
    type: "number",
    default: "20",
    description:
      "Height of the beam as a percentage of the container (e.g. 20 = 20%).",
  },
  {
    name: "direction",
    type: '"down" | "up"',
    default: '"down"',
    description: "Direction of the sweep animation.",
  },
  {
    name: "className",
    type: "string",
    description: "Additional CSS classes for the overlay container.",
  },
];

export default function ScanBeamPageContent() {
  return (
    <div className="docs-prose">
      <h1>ScanBeam</h1>
      <p>
        Animated gradient beam that sweeps across its container, creating a
        radar/scanner aesthetic. Renders as an absolutely positioned overlay with
        configurable color, speed, size, and direction.
      </p>

      <h2>Default Scan Beam</h2>
      <ComponentPreview
        code={`<div className="relative h-48 bg-spectre-background border border-spectre-border">
  <ScanBeam />
  <div className="relative z-10 flex h-full items-center justify-center">
    Content with scan beam overlay
  </div>
</div>`}
      >
        <div className="relative h-48 bg-spectre-background border border-spectre-border overflow-hidden">
          <ScanBeam />
          <div className="relative z-10 flex h-full items-center justify-center text-sm text-spectre-foreground">
            Content with scan beam overlay
          </div>
        </div>
      </ComponentPreview>

      <h2>Speed Variants</h2>
      <ComponentPreview
        code={`<ScanBeam speed="slow" />
<ScanBeam speed="normal" />
<ScanBeam speed="fast" />`}
      >
        <div className="flex flex-col gap-4">
          <div className="relative h-32 bg-spectre-background border border-spectre-border overflow-hidden">
            <ScanBeam speed="slow" />
            <div className="relative z-10 flex h-full items-center justify-center text-sm text-spectre-foreground">
              Slow (6s)
            </div>
          </div>
          <div className="relative h-32 bg-spectre-background border border-spectre-border overflow-hidden">
            <ScanBeam speed="normal" />
            <div className="relative z-10 flex h-full items-center justify-center text-sm text-spectre-foreground">
              Normal (3s)
            </div>
          </div>
          <div className="relative h-32 bg-spectre-background border border-spectre-border overflow-hidden">
            <ScanBeam speed="fast" />
            <div className="relative z-10 flex h-full items-center justify-center text-sm text-spectre-foreground">
              Fast (1.5s)
            </div>
          </div>
        </div>
      </ComponentPreview>

      <h2>Direction</h2>
      <ComponentPreview
        code={`<ScanBeam direction="down" />
<ScanBeam direction="up" />`}
      >
        <div className="grid grid-cols-2 gap-4">
          <div className="relative h-40 bg-spectre-background border border-spectre-border overflow-hidden">
            <ScanBeam direction="down" />
            <div className="relative z-10 flex h-full items-center justify-center text-sm text-spectre-foreground">
              Sweep Down
            </div>
          </div>
          <div className="relative h-40 bg-spectre-background border border-spectre-border overflow-hidden">
            <ScanBeam direction="up" />
            <div className="relative z-10 flex h-full items-center justify-center text-sm text-spectre-foreground">
              Sweep Up
            </div>
          </div>
        </div>
      </ComponentPreview>

      <h2>Custom Color & Opacity</h2>
      <ComponentPreview
        code={`<ScanBeam color="#22c55e" opacity={0.5} speed="fast" />
<ScanBeam color="#ef4444" opacity={0.4} />`}
      >
        <div className="grid grid-cols-2 gap-4">
          <div className="relative h-40 bg-spectre-background border border-spectre-border overflow-hidden">
            <ScanBeam color="#22c55e" opacity={0.5} speed="fast" />
            <div className="relative z-10 flex h-full items-center justify-center text-sm text-spectre-foreground">
              Green beam
            </div>
          </div>
          <div className="relative h-40 bg-spectre-background border border-spectre-border overflow-hidden">
            <ScanBeam color="#ef4444" opacity={0.4} />
            <div className="relative z-10 flex h-full items-center justify-center text-sm text-spectre-foreground">
              Red beam
            </div>
          </div>
        </div>
      </ComponentPreview>

      <h2>Beam Size</h2>
      <ComponentPreview
        code={`<ScanBeam size={10} speed="fast" />
<ScanBeam size={40} speed="slow" />`}
      >
        <div className="grid grid-cols-2 gap-4">
          <div className="relative h-40 bg-spectre-background border border-spectre-border overflow-hidden">
            <ScanBeam size={10} speed="fast" />
            <div className="relative z-10 flex h-full items-center justify-center text-sm text-spectre-foreground">
              Thin beam (10%)
            </div>
          </div>
          <div className="relative h-40 bg-spectre-background border border-spectre-border overflow-hidden">
            <ScanBeam size={40} speed="slow" />
            <div className="relative z-10 flex h-full items-center justify-center text-sm text-spectre-foreground">
              Wide beam (40%)
            </div>
          </div>
        </div>
      </ComponentPreview>

      <h2>Props</h2>
      <PropsTable props={scanBeamProps} />

      <h2>Usage Tips</h2>
      <ul>
        <li>
          The parent container <strong>must</strong> have{" "}
          <code>position: relative</code> and <code>overflow: hidden</code> for
          the beam to be contained properly.
        </li>
        <li>
          Content inside the container should use{" "}
          <code>className=&quot;relative z-10&quot;</code> to appear above the
          beam layer.
        </li>
        <li>
          Recommended opacity range: <code>0.05</code>&ndash;<code>0.15</code>{" "}
          for subtle ambiance, <code>0.15</code>&ndash;<code>0.3</code> for a
          prominent sweep effect.
        </li>
        <li>
          When using a custom <code>color</code>, pass a full CSS color value
          (e.g. <code>#22c55e</code>, <code>rgb(34, 197, 94)</code>). CSS
          variables like <code>var(--spectre-primary)</code> also work.
        </li>
        <li>
          Works great as a hero section effect, dashboard headers, or card
          decorations.
        </li>
        <li>
          Combine with <code>ScanlineOverlay</code> for a layered CRT +
          radar aesthetic.
        </li>
      </ul>
      <ComponentPreview
        code={`{/* Combined with ScanlineOverlay */}
<section className="relative overflow-hidden min-h-screen">
  <ScanBeam speed="slow" opacity={0.2} />
  <ScanlineOverlay opacity={0.05} />
  <div className="relative z-10">
    {/* Your content here */}
  </div>
</section>`}
      >
        <div className="relative h-48 bg-spectre-background border border-spectre-border overflow-hidden">
          <ScanBeam speed="slow" opacity={0.25} />
          <div className="relative z-10 flex h-full flex-col items-center justify-center gap-2">
            <span className="text-xs font-mono uppercase tracking-widest text-spectre-primary">
              Combined effects
            </span>
            <span className="text-sm text-spectre-muted-foreground">
              ScanBeam + your content
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
          Purely decorative - no interactive elements or meaningful content.
        </li>
      </ul>
    </div>
  );
}
