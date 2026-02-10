import type { ComponentDoc } from "../types.js";

export const cardDoc: ComponentDoc = {
  name: "Card",
  slug: "card",
  category: "data-display",
  description: "Compound card component with header, title, description, content, and footer sections. Supports multiple visual variants including HUD-style corners.",
  importStatement: 'import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@spectre-ui/core";',
  props: [
    { name: "variant", type: '"default" | "elevated" | "outlined" | "hud"', default: '"default"', description: "Visual style variant." },
    { name: "padding", type: '"none" | "sm" | "md" | "lg"', default: '"md"', description: "Internal padding." },
    { name: "className", type: "string", description: "Additional CSS classes." },
    { name: "children", type: "ReactNode", required: true, description: "Card content (typically CardHeader, CardContent, CardFooter)." },
  ],
  variants: [
    { name: "variant", values: ["default", "elevated", "outlined", "hud"], default: "default" },
    { name: "padding", values: ["none", "sm", "md", "lg"], default: "md" },
  ],
  subComponents: [
    { name: "CardHeader", description: "Top section of the card, typically contains title and description.", props: [{ name: "className", type: "string", description: "Additional CSS classes." }] },
    { name: "CardTitle", description: "Card heading element.", props: [{ name: "className", type: "string", description: "Additional CSS classes." }] },
    { name: "CardDescription", description: "Subtitle or description text below the title.", props: [{ name: "className", type: "string", description: "Additional CSS classes." }] },
    { name: "CardContent", description: "Main content area of the card.", props: [{ name: "className", type: "string", description: "Additional CSS classes." }] },
    { name: "CardFooter", description: "Bottom section for actions or metadata.", props: [{ name: "className", type: "string", description: "Additional CSS classes." }] },
  ],
  examples: [
    {
      title: "Basic Card",
      code: `<Card>\n  <CardHeader>\n    <CardTitle>System Status</CardTitle>\n    <CardDescription>Current operational metrics</CardDescription>\n  </CardHeader>\n  <CardContent>\n    <p>All systems operational.</p>\n  </CardContent>\n  <CardFooter>\n    <Button variant="outline" size="sm">View Details</Button>\n  </CardFooter>\n</Card>`,
    },
    {
      title: "HUD Variant",
      code: `<Card variant="hud">\n  <CardHeader>\n    <CardTitle>SENSOR ARRAY</CardTitle>\n  </CardHeader>\n  <CardContent>\n    <Stat label="Signal Strength" value="98.7%" changeType="positive" />\n  </CardContent>\n</Card>`,
    },
  ],
};
