"use client";

import React, { useState } from "react";
import { Sidebar } from "@spectre-ui/core";
import { ComponentPreview } from "@/components/ComponentPreview";
import { PropsTable, type PropDef } from "@/components/PropsTable";

const sidebarProps: PropDef[] = [
  { name: "collapsed", type: "boolean", description: "Controlled collapsed state. When provided, the component becomes fully controlled." },
  { name: "defaultCollapsed", type: "boolean", default: "false", description: "Initial collapsed state for uncontrolled usage." },
  { name: "onCollapsedChange", type: "(collapsed: boolean) => void", description: "Callback fired when the collapsed state changes." },
  { name: "width", type: "string", default: '"260px"', description: "Width of the sidebar when expanded." },
  { name: "collapsedWidth", type: "string", default: '"60px"', description: "Width of the sidebar when collapsed." },
  { name: "children", type: "ReactNode", description: "Sidebar content, typically navigation links or menu items." },
  { name: "className", type: "string", description: "Additional CSS classes for the aside element." },
];

function SidebarNav({ collapsed }: { collapsed: boolean }) {
  const items = ["Dashboard", "Agents", "Logs", "Settings"];
  return (
    <nav className="flex flex-col gap-1 p-2">
      {items.map((item) => (
        <a key={item} href="#" className="flex items-center gap-3 px-3 py-2 text-sm text-spectre-muted-foreground hover:text-spectre-primary hover:bg-spectre-secondary/50 transition-colors">
          <span className="shrink-0 text-xs">&#9679;</span>
          {!collapsed && <span>{item}</span>}
        </a>
      ))}
    </nav>
  );
}

export default function SidebarPageContent() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="docs-prose">
      <h1>Sidebar</h1>
      <p>
        Collapsible sidebar navigation component with a built-in toggle button.
        Supports controlled and uncontrolled modes, configurable widths, and
        smooth transition animations.
      </p>

      <h2>Uncontrolled Sidebar</h2>
      <ComponentPreview
        code={`<Sidebar width="260px" collapsedWidth="60px">
  <nav className="flex flex-col gap-1 p-2">
    <a href="#">Dashboard</a>
    <a href="#">Agents</a>
    <a href="#">Logs</a>
    <a href="#">Settings</a>
  </nav>
</Sidebar>`}
      >
        <div className="flex h-64 border border-spectre-border overflow-hidden">
          <Sidebar width="220px" collapsedWidth="60px">
            <SidebarNav collapsed={false} />
          </Sidebar>
          <div className="flex-1 flex items-center justify-center text-sm text-spectre-muted-foreground p-4">
            Click the arrow to collapse
          </div>
        </div>
      </ComponentPreview>

      <h2>Controlled Sidebar</h2>
      <ComponentPreview
        code={`const [collapsed, setCollapsed] = useState(false);

<Sidebar
  collapsed={collapsed}
  onCollapsedChange={setCollapsed}
  width="260px"
  collapsedWidth="60px"
>
  <nav>...</nav>
</Sidebar>`}
      >
        <div className="flex flex-col gap-3">
          <div className="flex gap-2">
            <button
              onClick={() => setCollapsed(false)}
              className={`px-3 py-1 text-xs border transition-colors ${!collapsed ? "border-spectre-primary text-spectre-primary" : "border-spectre-border text-spectre-muted-foreground"}`}
            >
              Expanded
            </button>
            <button
              onClick={() => setCollapsed(true)}
              className={`px-3 py-1 text-xs border transition-colors ${collapsed ? "border-spectre-primary text-spectre-primary" : "border-spectre-border text-spectre-muted-foreground"}`}
            >
              Collapsed
            </button>
          </div>
          <div className="flex h-64 border border-spectre-border overflow-hidden">
            <Sidebar
              collapsed={collapsed}
              onCollapsedChange={setCollapsed}
              width="220px"
              collapsedWidth="60px"
            >
              <SidebarNav collapsed={collapsed} />
            </Sidebar>
            <div className="flex-1 flex items-center justify-center text-sm text-spectre-muted-foreground p-4">
              Main content area
            </div>
          </div>
        </div>
      </ComponentPreview>

      <h2>Default Collapsed</h2>
      <ComponentPreview
        code={`<Sidebar defaultCollapsed width="260px" collapsedWidth="60px">
  <nav>...</nav>
</Sidebar>`}
      >
        <div className="flex h-48 border border-spectre-border overflow-hidden">
          <Sidebar defaultCollapsed width="220px" collapsedWidth="60px">
            <SidebarNav collapsed />
          </Sidebar>
          <div className="flex-1 flex items-center justify-center text-sm text-spectre-muted-foreground p-4">
            Starts collapsed
          </div>
        </div>
      </ComponentPreview>

      <h2>Props</h2>
      <PropsTable props={sidebarProps} />

      <h2>Accessibility</h2>
      <ul>
        <li>Renders as a semantic <code>&lt;aside&gt;</code> element.</li>
        <li>The toggle button includes an <code>aria-label</code> that updates based on the collapsed state (&quot;Expand sidebar&quot; / &quot;Collapse sidebar&quot;).</li>
        <li>The <code>data-collapsed</code> attribute is set on the aside element for CSS-based styling hooks.</li>
        <li>Navigation links inside the sidebar should use proper anchor tags or accessible link components.</li>
        <li>The transition uses CSS <code>transition-all</code> for smooth width changes.</li>
      </ul>
    </div>
  );
}
