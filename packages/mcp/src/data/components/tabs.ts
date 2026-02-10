import type { ComponentDoc } from "../types.js";

export const tabsDoc: ComponentDoc = {
  name: "Tabs",
  slug: "tabs",
  category: "navigation",
  description: "Tabbed interface component built on Radix UI Tabs. Features active state with bottom border and glow effect.",
  importStatement: 'import { Tabs, TabsList, TabsTrigger, TabsContent } from "@spectre-ui/core";',
  props: [
    { name: "defaultValue", type: "string", description: "The default active tab value." },
    { name: "value", type: "string", description: "Controlled active tab value." },
    { name: "onValueChange", type: "(value: string) => void", description: "Callback when active tab changes." },
    { name: "className", type: "string", description: "Additional CSS classes." },
  ],
  subComponents: [
    {
      name: "TabsList",
      description: "Container for tab triggers. Renders with a bottom border.",
      props: [{ name: "className", type: "string", description: "Additional CSS classes." }],
    },
    {
      name: "TabsTrigger",
      description: "Individual tab button. Shows active state with bottom border and glow.",
      props: [
        { name: "value", type: "string", required: true, description: "Unique value identifying this tab." },
        { name: "className", type: "string", description: "Additional CSS classes." },
      ],
    },
    {
      name: "TabsContent",
      description: "Content panel shown when its corresponding tab is active.",
      props: [
        { name: "value", type: "string", required: true, description: "Value matching a TabsTrigger." },
        { name: "className", type: "string", description: "Additional CSS classes." },
      ],
    },
  ],
  examples: [
    {
      title: "Basic Tabs",
      code: `<Tabs defaultValue="overview">\n  <TabsList>\n    <TabsTrigger value="overview">Overview</TabsTrigger>\n    <TabsTrigger value="code">Code</TabsTrigger>\n    <TabsTrigger value="api">API</TabsTrigger>\n  </TabsList>\n  <TabsContent value="overview">Overview content</TabsContent>\n  <TabsContent value="code">Code examples</TabsContent>\n  <TabsContent value="api">API reference</TabsContent>\n</Tabs>`,
    },
  ],
  accessibility: "Built on Radix UI Tabs with full keyboard navigation (arrow keys, Home, End) and ARIA roles.",
};
