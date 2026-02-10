import type { ComponentDoc } from "../types.js";

export const alertDoc: ComponentDoc = {
  name: "Alert",
  slug: "alert",
  category: "feedback",
  description: "Contextual alert banner with color-coded variants for different message types. Supports title, icon, and content.",
  importStatement: 'import { Alert } from "@spectre-ui/core";',
  props: [
    { name: "variant", type: '"default" | "info" | "success" | "warning" | "destructive"', default: '"default"', description: "Color variant." },
    { name: "title", type: "string", description: "Alert heading." },
    { name: "icon", type: "ReactNode", description: "Icon element on the left." },
    { name: "className", type: "string", description: "Additional CSS classes." },
    { name: "children", type: "ReactNode", description: "Alert body content." },
  ],
  variants: [
    { name: "variant", values: ["default", "info", "success", "warning", "destructive"], default: "default" },
  ],
  examples: [
    {
      title: "Alert Variants",
      code: '<Alert variant="info" title="Info">System update available.</Alert>\n<Alert variant="success" title="Success">Deployment completed.</Alert>\n<Alert variant="warning" title="Warning">High memory usage detected.</Alert>\n<Alert variant="destructive" title="Error">Connection lost.</Alert>',
    },
  ],
  accessibility: "Uses role='alert' for urgent messages. Title is rendered as a heading for screen readers.",
};
