import type { ComponentDoc } from "../types.js";

export const breadcrumbDoc: ComponentDoc = {
  name: "Breadcrumb",
  slug: "breadcrumb",
  category: "navigation",
  description: "Navigation breadcrumb trail showing the current page location within a hierarchy. Supports custom separators.",
  importStatement: 'import { Breadcrumb } from "@spectre-ui/core";',
  props: [
    { name: "items", type: "BreadcrumbItem[]", required: true, description: "Array of breadcrumb items. Each has `label: string` and optional `href: string`." },
    { name: "separator", type: "ReactNode", description: "Custom separator between items. Defaults to an arrow SVG icon." },
    { name: "className", type: "string", description: "Additional CSS classes." },
  ],
  examples: [
    {
      title: "Basic Breadcrumb",
      code: `<Breadcrumb\n  items={[\n    { label: "Home", href: "/" },\n    { label: "Docs", href: "/docs" },\n    { label: "Components" },\n  ]}\n/>`,
    },
  ],
  accessibility: "Renders as a nav element with aria-label='Breadcrumb'. The current page item has aria-current='page'.",
};
