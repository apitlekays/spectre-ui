"use client";

import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@spectre-ui/core";
import { ComponentPreview } from "@/components/ComponentPreview";
import { PropsTable, type PropDef } from "@/components/PropsTable";

const tabsProps: PropDef[] = [
  {
    name: "defaultValue",
    type: "string",
    description: "The value of the tab to select by default.",
  },
  {
    name: "value",
    type: "string",
    description: "Controlled active tab value.",
  },
  {
    name: "onValueChange",
    type: "(value: string) => void",
    description: "Callback invoked when the active tab changes.",
  },
  {
    name: "className",
    type: "string",
    description: "Additional CSS classes.",
  },
];

export default function TabsPageContent() {
  return (
    <div className="docs-prose">
      <h1>Tabs</h1>
      <p>
        Tab navigation built on Radix UI Tabs primitives. Supports both
        controlled and uncontrolled usage with keyboard navigation.
      </p>

      <h2>Basic Tabs</h2>
      <ComponentPreview
        code={`<Tabs defaultValue="overview">
  <TabsList>
    <TabsTrigger value="overview">Overview</TabsTrigger>
    <TabsTrigger value="missions">Missions</TabsTrigger>
    <TabsTrigger value="agents">Agents</TabsTrigger>
  </TabsList>
  <TabsContent value="overview">
    System overview panel.
  </TabsContent>
  <TabsContent value="missions">
    Active missions list.
  </TabsContent>
  <TabsContent value="agents">
    Agent roster.
  </TabsContent>
</Tabs>`}
      >
        <Tabs defaultValue="overview">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="missions">Missions</TabsTrigger>
            <TabsTrigger value="agents">Agents</TabsTrigger>
          </TabsList>
          <TabsContent value="overview">
            <p className="text-sm text-spectre-muted-foreground">
              System overview panel.
            </p>
          </TabsContent>
          <TabsContent value="missions">
            <p className="text-sm text-spectre-muted-foreground">
              Active missions list.
            </p>
          </TabsContent>
          <TabsContent value="agents">
            <p className="text-sm text-spectre-muted-foreground">
              Agent roster.
            </p>
          </TabsContent>
        </Tabs>
      </ComponentPreview>

      <h2>Props</h2>
      <PropsTable props={tabsProps} />

      <h2>Accessibility</h2>
      <ul>
        <li>
          Built on Radix UI Tabs which provides full WAI-ARIA tabs pattern
          support
        </li>
        <li>
          <code>&lt;TabsList&gt;</code> renders with{" "}
          <code>role=&quot;tablist&quot;</code> and each{" "}
          <code>&lt;TabsTrigger&gt;</code> with <code>role=&quot;tab&quot;</code>
        </li>
        <li>
          <code>&lt;TabsContent&gt;</code> renders with{" "}
          <code>role=&quot;tabpanel&quot;</code> and is linked to its trigger
          via <code>aria-labelledby</code>
        </li>
        <li>
          Arrow keys navigate between tabs, <code>Home</code> and{" "}
          <code>End</code> jump to first and last tab
        </li>
        <li>
          Active tab trigger has <code>aria-selected=&quot;true&quot;</code> and{" "}
          inactive triggers have <code>aria-selected=&quot;false&quot;</code>
        </li>
      </ul>
    </div>
  );
}
