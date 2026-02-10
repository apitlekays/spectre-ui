import type { ComponentDoc } from "../types.js";

export const glowBorderDoc: ComponentDoc = {
  name: "GlowBorder",
  slug: "glow-border",
  category: "decorative",
  description: "Decorative glowing border effect wrapper. Supports configurable color, intensity levels, and animated pulsing mode.",
  importStatement: 'import { GlowBorder } from "@spectre-ui/core";',
  props: [
    { name: "color", type: "string", default: "var(--spectre-primary)", description: "CSS color for the glow effect." },
    { name: "intensity", type: '"low" | "medium" | "high"', default: '"medium"', description: "Glow intensity. low = 5px, medium = 10px, high = 20px." },
    { name: "animated", type: "boolean", default: "false", description: "Enable pulsing glow animation." },
    { name: "className", type: "string", description: "Additional CSS classes." },
    { name: "children", type: "ReactNode", description: "Content to wrap with the glow border." },
  ],
  variants: [
    { name: "intensity", values: ["low", "medium", "high"], default: "medium" },
  ],
  examples: [
    {
      title: "Intensity Levels",
      code: '<GlowBorder intensity="low">\n  <div className="p-6">Low intensity</div>\n</GlowBorder>\n<GlowBorder intensity="medium">\n  <div className="p-6">Medium intensity</div>\n</GlowBorder>\n<GlowBorder intensity="high">\n  <div className="p-6">High intensity</div>\n</GlowBorder>',
    },
    {
      title: "Animated Pulse",
      code: '<GlowBorder animated>\n  <div className="p-6">Pulsing glow animation</div>\n</GlowBorder>',
    },
    {
      title: "Custom Color",
      code: '<GlowBorder color="#ff4444" intensity="high">\n  <div className="p-6">Red glow</div>\n</GlowBorder>',
    },
  ],
  accessibility: "Purely visual. Do not rely solely on the glow to indicate state changes — pair with text or icon indicators. Consider respecting prefers-reduced-motion for the animated mode.",
};
