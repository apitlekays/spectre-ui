"use client";

import React from "react";
import { Navbar, Button } from "@spectre-ui/core";
import { ComponentPreview } from "@/components/ComponentPreview";
import { PropsTable, type PropDef } from "@/components/PropsTable";

const navbarProps: PropDef[] = [
  {
    name: "brand",
    type: "ReactNode",
    description:
      "Content rendered in the left brand area. Typically a logo or text.",
  },
  {
    name: "ticker",
    type: "string",
    description:
      "When provided, renders a subtle gradient line at the bottom of the navbar.",
  },
  {
    name: "children",
    type: "ReactNode",
    description:
      "Content rendered in the right section, typically navigation links or action buttons.",
  },
  {
    name: "className",
    type: "string",
    description: "Additional CSS classes to apply to the nav element.",
  },
];

export default function NavbarPageContent() {
  return (
    <div className="docs-prose">
      <h1>Navbar</h1>
      <p>
        Sticky top navigation bar with a brand area on the left, content slots
        on the right, and an optional decorative ticker line.
      </p>

      <h2>Basic Navbar</h2>
      <ComponentPreview
        code={`<Navbar brand="SPECTRE-UI">
  <a href="#" className="text-sm text-spectre-muted-foreground hover:text-spectre-primary">Docs</a>
  <a href="#" className="text-sm text-spectre-muted-foreground hover:text-spectre-primary">Components</a>
</Navbar>`}
      >
        <div className="relative w-full overflow-hidden border border-spectre-border">
          <Navbar brand="SPECTRE-UI">
            <a
              href="#"
              className="text-sm text-spectre-muted-foreground hover:text-spectre-primary"
            >
              Docs
            </a>
            <a
              href="#"
              className="text-sm text-spectre-muted-foreground hover:text-spectre-primary"
            >
              Components
            </a>
          </Navbar>
        </div>
      </ComponentPreview>

      <h2>With Ticker and Actions</h2>
      <ComponentPreview
        code={`<Navbar brand="SYSTEM-V2" ticker="active">
  <a href="#" className="text-sm text-spectre-muted-foreground hover:text-spectre-primary">Dashboard</a>
  <a href="#" className="text-sm text-spectre-muted-foreground hover:text-spectre-primary">Agents</a>
  <Button variant="primary" size="sm">Deploy</Button>
</Navbar>`}
      >
        <div className="relative w-full overflow-hidden border border-spectre-border">
          <Navbar brand="SYSTEM-V2" ticker="active">
            <a
              href="#"
              className="text-sm text-spectre-muted-foreground hover:text-spectre-primary"
            >
              Dashboard
            </a>
            <a
              href="#"
              className="text-sm text-spectre-muted-foreground hover:text-spectre-primary"
            >
              Agents
            </a>
            <Button variant="primary" size="sm">
              Deploy
            </Button>
          </Navbar>
        </div>
      </ComponentPreview>

      <h2>Props</h2>
      <PropsTable props={navbarProps} />

      <h2>Accessibility</h2>
      <ul>
        <li>
          Renders as a semantic <code>&lt;nav&gt;</code> element for assistive
          technology.
        </li>
        <li>
          Uses <code>sticky</code> positioning so it remains visible when
          scrolling.
        </li>
        <li>
          Navigation links inside the navbar should use proper anchor tags or
          accessible link components.
        </li>
        <li>
          Consider adding an <code>aria-label</code> such as &quot;Main
          navigation&quot; for screen readers when multiple navs are present.
        </li>
      </ul>
    </div>
  );
}
