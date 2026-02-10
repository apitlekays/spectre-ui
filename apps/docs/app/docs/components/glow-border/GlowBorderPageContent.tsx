"use client";

import React from "react";
import { GlowBorder } from "@spectre-ui/core";
import { ComponentPreview } from "@/components/ComponentPreview";
import { PropsTable, type PropDef } from "@/components/PropsTable";

const glowBorderProps: PropDef[] = [
  {
    name: "color",
    type: "string",
    default: "var(--spectre-primary)",
    description:
      "CSS color value for the glow effect. Defaults to the theme primary color.",
  },
  {
    name: "intensity",
    type: '"low" | "medium" | "high"',
    default: '"medium"',
    description:
      "Intensity of the glow. low = 5px spread, medium = 10px, high = 20px.",
  },
  {
    name: "animated",
    type: "boolean",
    default: "false",
    description:
      "When true, applies a pulsing glow animation instead of a static box-shadow.",
  },
  {
    name: "children",
    type: "ReactNode",
    description: "Content to wrap with the glowing border.",
  },
  {
    name: "className",
    type: "string",
    description: "Additional CSS classes for the container.",
  },
];

export default function GlowBorderPageContent() {
  return (
    <div className="docs-prose">
      <h1>GlowBorder</h1>
      <p>
        Decorative glowing border effect for highlighting important elements.
        Supports configurable color, intensity levels, and an animated pulsing
        mode.
      </p>

      <h2>Intensity Levels</h2>
      <ComponentPreview
        code={`<GlowBorder intensity="low">
  <div className="p-6 text-center text-sm">Low intensity</div>
</GlowBorder>
<GlowBorder intensity="medium">
  <div className="p-6 text-center text-sm">Medium intensity</div>
</GlowBorder>
<GlowBorder intensity="high">
  <div className="p-6 text-center text-sm">High intensity</div>
</GlowBorder>`}
      >
        <div className="flex flex-col gap-6">
          <GlowBorder intensity="low">
            <div className="p-6 text-center text-sm text-spectre-foreground">
              Low intensity (5px)
            </div>
          </GlowBorder>
          <GlowBorder intensity="medium">
            <div className="p-6 text-center text-sm text-spectre-foreground">
              Medium intensity (10px)
            </div>
          </GlowBorder>
          <GlowBorder intensity="high">
            <div className="p-6 text-center text-sm text-spectre-foreground">
              High intensity (20px)
            </div>
          </GlowBorder>
        </div>
      </ComponentPreview>

      <h2>Animated</h2>
      <ComponentPreview
        code={`<GlowBorder animated>
  <div className="p-6 text-center text-sm">Pulsing glow animation</div>
</GlowBorder>`}
      >
        <GlowBorder animated>
          <div className="p-6 text-center text-sm text-spectre-foreground">
            Pulsing glow animation
          </div>
        </GlowBorder>
      </ComponentPreview>

      <h2>Custom Color</h2>
      <ComponentPreview
        code={`<GlowBorder color="#ff4444" intensity="high">
  <div className="p-6 text-center text-sm">Red glow</div>
</GlowBorder>
<GlowBorder color="#44aaff" intensity="high">
  <div className="p-6 text-center text-sm">Blue glow</div>
</GlowBorder>`}
      >
        <div className="flex flex-col gap-6">
          <GlowBorder color="#ff4444" intensity="high">
            <div className="p-6 text-center text-sm text-spectre-foreground">
              Red glow
            </div>
          </GlowBorder>
          <GlowBorder color="#44aaff" intensity="high">
            <div className="p-6 text-center text-sm text-spectre-foreground">
              Blue glow
            </div>
          </GlowBorder>
        </div>
      </ComponentPreview>

      <h2>Props</h2>
      <PropsTable props={glowBorderProps} />

      <h2>Accessibility</h2>
      <ul>
        <li>
          The glow effect is purely visual and does not convey information on its
          own.
        </li>
        <li>
          Do not rely solely on the glow to indicate state changes -- pair with
          text or icon indicators.
        </li>
        <li>
          The animated pulse may be distracting for users with motion
          sensitivities. Consider respecting{" "}
          <code>prefers-reduced-motion</code>.
        </li>
      </ul>
    </div>
  );
}
