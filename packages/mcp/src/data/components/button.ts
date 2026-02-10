import type { ComponentDoc } from "../types.js";

export const buttonDoc: ComponentDoc = {
  name: "Button",
  slug: "button",
  category: "forms",
  description: "Primary interactive button with multiple visual variants and sizes. Supports a loading spinner state that disables interaction.",
  importStatement: 'import { Button } from "@spectre-ui/core";',
  props: [
    { name: "variant", type: '"primary" | "secondary" | "outline" | "ghost" | "destructive" | "link"', default: '"primary"', description: "Visual style variant." },
    { name: "size", type: '"sm" | "md" | "lg" | "icon"', default: '"md"', description: "Button size." },
    { name: "loading", type: "boolean", description: "Show loading spinner and disable interaction." },
    { name: "disabled", type: "boolean", description: "Disable the button." },
    { name: "className", type: "string", description: "Additional CSS classes." },
    { name: "children", type: "ReactNode", required: true, description: "Button label content." },
  ],
  variants: [
    { name: "variant", values: ["primary", "secondary", "outline", "ghost", "destructive", "link"], default: "primary" },
    { name: "size", values: ["sm", "md", "lg", "icon"], default: "md" },
  ],
  examples: [
    {
      title: "Variants",
      code: '<Button variant="primary">Primary</Button>\n<Button variant="secondary">Secondary</Button>\n<Button variant="outline">Outline</Button>\n<Button variant="ghost">Ghost</Button>\n<Button variant="destructive">Destructive</Button>\n<Button variant="link">Link</Button>',
    },
    {
      title: "Sizes",
      code: '<Button size="sm">Small</Button>\n<Button size="md">Medium</Button>\n<Button size="lg">Large</Button>',
    },
    {
      title: "Loading State",
      code: '<Button loading>Saving...</Button>',
    },
  ],
  accessibility: "Uses native button element. Disabled state adds aria-disabled. Loading state disables interaction.",
};
