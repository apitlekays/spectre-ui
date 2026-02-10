import type { ComponentDoc } from "../types.js";

export const gridDoc: ComponentDoc = {
  name: "Grid",
  slug: "grid",
  category: "layout",
  description: "CSS Grid layout component with responsive column and gap controls. Provides a simple API for grid-based layouts.",
  importStatement: 'import { Grid } from "@spectre-ui/core";',
  props: [
    { name: "cols", type: "1 | 2 | 3 | 4 | 5 | 6 | 12", default: "1", description: "Number of grid columns." },
    { name: "gap", type: '"none" | "sm" | "md" | "lg" | "xl"', default: '"md"', description: "Gap between grid items." },
    { name: "className", type: "string", description: "Additional CSS classes." },
    { name: "children", type: "ReactNode", required: true, description: "Grid items." },
  ],
  variants: [
    { name: "cols", values: ["1", "2", "3", "4", "5", "6", "12"], default: "1" },
    { name: "gap", values: ["none", "sm", "md", "lg", "xl"], default: "md" },
  ],
  examples: [
    {
      title: "Three Column Grid",
      code: `<Grid cols={3} gap="md">\n  <div>Column 1</div>\n  <div>Column 2</div>\n  <div>Column 3</div>\n</Grid>`,
    },
    {
      title: "Responsive Dashboard Layout",
      code: `<Grid cols={4} gap="lg">\n  <Card><Stat label="Users" value={1234} /></Card>\n  <Card><Stat label="Revenue" value="$5.6k" /></Card>\n  <Card><Stat label="Orders" value={89} /></Card>\n  <Card><Stat label="Growth" value="12%" changeType="positive" /></Card>\n</Grid>`,
    },
  ],
};
