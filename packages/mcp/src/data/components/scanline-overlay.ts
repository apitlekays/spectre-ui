import type { ComponentDoc } from "../types.js";

export const scanlineOverlayDoc: ComponentDoc = {
  name: "ScanlineOverlay",
  slug: "scanline-overlay",
  category: "decorative",
  description: "CRT-style scanline overlay effect. Renders absolutely positioned over its parent container. The parent must have position: relative.",
  importStatement: 'import { ScanlineOverlay } from "@spectre-ui/core";',
  props: [
    { name: "opacity", type: "number", default: "0.05", description: "Opacity of the scanline stripes (0 to 1)." },
    { name: "speed", type: '"slow" | "normal" | "fast"', default: '"normal"', description: "Animation speed. slow = 12s, normal = 8s, fast = 4s." },
    { name: "className", type: "string", description: "Additional CSS classes." },
  ],
  examples: [
    {
      title: "Basic Scanline Effect",
      code: '<div className="relative h-40 bg-spectre-background border border-spectre-border">\n  <ScanlineOverlay />\n  <div className="relative z-10 flex h-full items-center justify-center">\n    Content with scanline overlay\n  </div>\n</div>',
    },
    {
      title: "Full-Page Overlay",
      code: '<section className="relative min-h-screen">\n  <ScanlineOverlay opacity={0.06} />\n  <div className="relative z-10">\n    {/* Your page content */}\n  </div>\n</section>',
    },
  ],
  accessibility: "Has aria-hidden='true' and pointer-events-none. Purely decorative.",
};
