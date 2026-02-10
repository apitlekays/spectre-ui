"use client";

import React from "react";
import {
  Button,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
} from "@spectre-ui/core";
import { ComponentPreview } from "@/components/ComponentPreview";
import { PropsTable, type PropDef } from "@/components/PropsTable";

const dropdownMenuItemProps: PropDef[] = [
  {
    name: "inset",
    type: "boolean",
    default: "false",
    description: "Adds left padding to align with items that have icons or checkboxes.",
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "Prevents the item from being selected or focused.",
  },
];

const dropdownMenuContentProps: PropDef[] = [
  {
    name: "sideOffset",
    type: "number",
    default: "4",
    description: "Distance in pixels from the trigger element.",
  },
  {
    name: "align",
    type: '"start" | "center" | "end"',
    default: '"center"',
    description: "Alignment of the content relative to the trigger.",
  },
];

const dropdownMenuCheckboxItemProps: PropDef[] = [
  {
    name: "checked",
    type: "boolean",
    description: "Whether the checkbox item is checked.",
    required: true,
  },
  {
    name: "onCheckedChange",
    type: "(checked: boolean) => void",
    description: "Callback when the checked state changes.",
  },
];

export default function DropdownMenuPageContent() {
  const [showGrid, setShowGrid] = React.useState(true);
  const [showPanel, setShowPanel] = React.useState(false);

  return (
    <div className="docs-prose">
      <h1>DropdownMenu</h1>
      <p>
        Dropdown menu built on Radix UI DropdownMenu primitives. Supports items,
        labels, separators, checkbox items, sub-menus, and keyboard shortcuts.
      </p>

      <h2>Basic Menu</h2>
      <ComponentPreview
        code={`<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="secondary">Options</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>Actions</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>
      Edit <DropdownMenuShortcut>Ctrl+E</DropdownMenuShortcut>
    </DropdownMenuItem>
    <DropdownMenuItem>
      Duplicate <DropdownMenuShortcut>Ctrl+D</DropdownMenuShortcut>
    </DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Delete</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`}
      >
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="secondary">Options</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              Edit <DropdownMenuShortcut>Ctrl+E</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              Duplicate <DropdownMenuShortcut>Ctrl+D</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </ComponentPreview>

      <h2>With Checkbox Items</h2>
      <ComponentPreview
        code={`<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="secondary">View</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>Toggle Panels</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuCheckboxItem checked={showGrid} onCheckedChange={setShowGrid}>
      Show Grid
    </DropdownMenuCheckboxItem>
    <DropdownMenuCheckboxItem checked={showPanel} onCheckedChange={setShowPanel}>
      Show Panel
    </DropdownMenuCheckboxItem>
  </DropdownMenuContent>
</DropdownMenu>`}
      >
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="secondary">View</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Toggle Panels</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuCheckboxItem
              checked={showGrid}
              onCheckedChange={setShowGrid}
            >
              Show Grid
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
              checked={showPanel}
              onCheckedChange={setShowPanel}
            >
              Show Panel
            </DropdownMenuCheckboxItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </ComponentPreview>

      <h2>With Sub-Menu</h2>
      <ComponentPreview
        code={`<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="secondary">More</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuGroup>
      <DropdownMenuItem>Profile</DropdownMenuItem>
      <DropdownMenuItem>Settings</DropdownMenuItem>
    </DropdownMenuGroup>
    <DropdownMenuSeparator />
    <DropdownMenuSub>
      <DropdownMenuSubTrigger>Invite Users</DropdownMenuSubTrigger>
      <DropdownMenuSubContent>
        <DropdownMenuItem>Email</DropdownMenuItem>
        <DropdownMenuItem>Link</DropdownMenuItem>
      </DropdownMenuSubContent>
    </DropdownMenuSub>
  </DropdownMenuContent>
</DropdownMenu>`}
      >
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="secondary">More</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuGroup>
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>Invite Users</DropdownMenuSubTrigger>
              <DropdownMenuSubContent>
                <DropdownMenuItem>Email</DropdownMenuItem>
                <DropdownMenuItem>Link</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuSub>
          </DropdownMenuContent>
        </DropdownMenu>
      </ComponentPreview>

      <h2>DropdownMenuItem Props</h2>
      <PropsTable props={dropdownMenuItemProps} />

      <h2>DropdownMenuContent Props</h2>
      <PropsTable props={dropdownMenuContentProps} />

      <h2>DropdownMenuCheckboxItem Props</h2>
      <PropsTable props={dropdownMenuCheckboxItemProps} />

      <h2>Accessibility</h2>
      <ul>
        <li>Built on Radix UI DropdownMenu for full WAI-ARIA compliance.</li>
        <li>
          Supports keyboard navigation: Arrow keys to move between items, Enter
          or Space to select, Escape to close.
        </li>
        <li>Focus is automatically trapped within the open menu.</li>
        <li>Sub-menus are accessible via Arrow Right and Arrow Left keys.</li>
        <li>
          The trigger element should have descriptive text for screen reader
          users.
        </li>
      </ul>
    </div>
  );
}
