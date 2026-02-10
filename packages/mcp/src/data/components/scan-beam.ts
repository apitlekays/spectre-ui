import type { ComponentDoc } from "../types.js";

export const scanBeamDoc: ComponentDoc = {
  name: "ScanBeam",
  slug: "scan-beam",
  category: "decorative",
  description: "Animated scanning beam effect that sweeps vertically across its container. Adds a futuristic scanning visual to any section.",
  importStatement: 'import { ScanBeam } from "@spectre-ui/core";',
  props: [
    { name: "color", type: "string", default: "var(--spectre-primary)", description: "Beam color." },
    { name: "opacity", type: "number", default: "0.3", description: "Beam opacity (0 to 1)." },
    { name: "speed", type: '"slow" | "normal" | "fast"', default: '"normal"', description: "Animation speed. slow = 6s, normal = 3s, fast = 1.5s." },
    { name: "size", type: "number", default: "20", description: "Beam height as percentage of container." },
    { name: "direction", type: '"down" | "up"', default: '"down"', description: "Scan direction." },
    { name: "className", type: "string", description: "Additional CSS classes." },
  ],
  examples: [
    {
      title: "Basic Scan Beam",
      code: '<div className="relative h-64 border border-spectre-border">\n  <ScanBeam />\n  <div className="relative z-10 flex h-full items-center justify-center">\n    Scanning...\n  </div>\n</div>',
    },
    {
      title: "Fast Upward Scan",
      code: '<div className="relative h-48">\n  <ScanBeam speed="fast" direction="up" color="#22c55e" opacity={0.5} />\n</div>',
    },
  ],
  accessibility: "Purely decorative with aria-hidden='true' and pointer-events-none.",
};
