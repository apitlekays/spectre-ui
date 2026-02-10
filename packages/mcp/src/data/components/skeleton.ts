import type { ComponentDoc } from "../types.js";

export const skeletonDoc: ComponentDoc = {
  name: "Skeleton",
  slug: "skeleton",
  category: "data-display",
  description: "Loading placeholder component with pulse animation. Supports text, circular, and rectangular shapes for content loading states.",
  importStatement: 'import { Skeleton } from "@spectre-ui/core";',
  props: [
    { name: "variant", type: '"default" | "text" | "circular" | "rectangular"', default: '"default"', description: "Shape variant." },
    { name: "width", type: "string | number", description: "Custom width." },
    { name: "height", type: "string | number", description: "Custom height." },
    { name: "className", type: "string", description: "Additional CSS classes." },
  ],
  variants: [
    { name: "variant", values: ["default", "text", "circular", "rectangular"], default: "default" },
  ],
  examples: [
    {
      title: "Loading Card",
      code: `<Card>\n  <CardHeader>\n    <Skeleton variant="text" width="60%" />\n    <Skeleton variant="text" width="40%" />\n  </CardHeader>\n  <CardContent>\n    <Skeleton variant="rectangular" height={120} />\n  </CardContent>\n</Card>`,
    },
    {
      title: "Avatar Skeleton",
      code: `<Skeleton variant="circular" width={48} height={48} />`,
    },
  ],
};
