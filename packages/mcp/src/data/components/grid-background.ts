import type { ComponentDoc } from "../types.js";

export const gridBackgroundDoc: ComponentDoc = {
  name: "GridBackground",
  slug: "grid-background",
  category: "decorative",
  description: "Decorative CSS grid background pattern overlay. Adds a subtle grid pattern behind content with optional animation and fade gradient.",
  importStatement: 'import { GridBackground } from "@spectre-ui/core";',
  props: [
    { name: "gridSize", type: '"sm" | "md" | "lg"', default: '"md"', description: "Grid cell size. sm = 20px, md = 40px, lg = 60px." },
    { name: "animated", type: "boolean", default: "false", description: "Enable subtle grid animation." },
    { name: "fade", type: "boolean", default: "true", description: "Apply a radial gradient fade at the edges." },
    { name: "className", type: "string", description: "Additional CSS classes." },
    { name: "children", type: "ReactNode", description: "Content to render above the grid." },
  ],
  variants: [
    { name: "gridSize", values: ["sm", "md", "lg"], default: "md" },
  ],
  examples: [
    {
      title: "Page Background",
      code: '<div className="relative min-h-screen">\n  <GridBackground fade>\n    <Container>\n      <h1>Welcome to Spectre</h1>\n    </Container>\n  </GridBackground>\n</div>',
    },
    {
      title: "Small Animated Grid",
      code: '<GridBackground gridSize="sm" animated>\n  <Card variant="hud">\n    <CardContent>Content with animated grid behind it</CardContent>\n  </Card>\n</GridBackground>',
    },
  ],
};
