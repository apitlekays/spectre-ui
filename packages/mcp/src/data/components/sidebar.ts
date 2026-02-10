import type { ComponentDoc } from "../types.js";

export const sidebarDoc: ComponentDoc = {
  name: "Sidebar",
  slug: "sidebar",
  category: "layout",
  description: "Collapsible sidebar navigation panel with configurable width. Supports both controlled and uncontrolled collapsed state.",
  importStatement: 'import { Sidebar } from "@spectre-ui/core";',
  props: [
    { name: "collapsed", type: "boolean", description: "Controlled collapsed state." },
    { name: "defaultCollapsed", type: "boolean", default: "false", description: "Initial collapsed state (uncontrolled)." },
    { name: "onCollapsedChange", type: "(collapsed: boolean) => void", description: "Callback when collapsed state changes." },
    { name: "width", type: "string", default: '"260px"', description: "Width when expanded." },
    { name: "collapsedWidth", type: "string", default: '"60px"', description: "Width when collapsed." },
    { name: "className", type: "string", description: "Additional CSS classes." },
    { name: "children", type: "ReactNode", required: true, description: "Sidebar content (navigation links, etc.)." },
  ],
  examples: [
    {
      title: "Basic Sidebar",
      code: `<Sidebar>\n  <nav>\n    <a href="/dashboard">Dashboard</a>\n    <a href="/settings">Settings</a>\n  </nav>\n</Sidebar>`,
    },
    {
      title: "Controlled Collapsed State",
      code: `const [collapsed, setCollapsed] = useState(false);\n\n<Sidebar collapsed={collapsed} onCollapsedChange={setCollapsed}>\n  <nav>{/* links */}</nav>\n</Sidebar>`,
    },
  ],
};
