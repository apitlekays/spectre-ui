"use client";

import React from "react";
import { Avatar } from "@spectre-ui/core";
import { ComponentPreview } from "@/components/ComponentPreview";
import { PropsTable, type PropDef } from "@/components/PropsTable";

const avatarProps: PropDef[] = [
  {
    name: "src",
    type: "string",
    description: "Image source URL.",
  },
  {
    name: "alt",
    type: "string",
    description: "Image alt text.",
  },
  {
    name: "fallback",
    type: "string",
    description: "Fallback initials when no image is available.",
  },
  {
    name: "size",
    type: '"sm" | "md" | "lg" | "xl"',
    default: '"md"',
    description: "Avatar size.",
  },
  {
    name: "status",
    type: '"online" | "busy" | "away" | "offline"',
    description: "Status indicator displayed on the avatar.",
  },
  {
    name: "className",
    type: "string",
    description: "Additional CSS classes.",
  },
];

export default function AvatarPageContent() {
  return (
    <div className="docs-prose">
      <h1>Avatar</h1>
      <p>
        User avatar with fallback initials and status indicator. Displays an
        image when available, falling back to initials with an optional presence
        status dot.
      </p>

      <h2>Sizes</h2>
      <ComponentPreview
        code={`<Avatar size="sm" fallback="A" />
<Avatar size="md" fallback="B" />
<Avatar size="lg" fallback="C" />
<Avatar size="xl" fallback="D" />`}
      >
        <div className="flex items-center gap-4">
          <Avatar size="sm" fallback="A" />
          <Avatar size="md" fallback="B" />
          <Avatar size="lg" fallback="C" />
          <Avatar size="xl" fallback="D" />
        </div>
      </ComponentPreview>

      <h2>Status Indicators</h2>
      <ComponentPreview
        code={`<Avatar size="lg" fallback="A" status="online" />
<Avatar size="lg" fallback="B" status="busy" />
<Avatar size="lg" fallback="C" status="away" />
<Avatar size="lg" fallback="D" status="offline" />`}
      >
        <div className="flex items-center gap-4">
          <Avatar size="lg" fallback="A" status="online" />
          <Avatar size="lg" fallback="B" status="busy" />
          <Avatar size="lg" fallback="C" status="away" />
          <Avatar size="lg" fallback="D" status="offline" />
        </div>
      </ComponentPreview>

      <h2>Props</h2>
      <PropsTable props={avatarProps} />

      <h2>Accessibility</h2>
      <ul>
        <li>
          Renders an <code>&lt;img&gt;</code> element when <code>src</code> is
          provided, with <code>alt</code> text for screen readers
        </li>
        <li>
          Fallback initials are wrapped in an <code>aria-label</code> so the
          user identity is still announced
        </li>
        <li>
          Status indicator uses <code>aria-label</code> to convey presence
          state (e.g. &quot;online&quot;, &quot;busy&quot;) to assistive
          technology
        </li>
        <li>
          Passes through all standard HTML attributes including{" "}
          <code>aria-*</code> and <code>role</code>
        </li>
      </ul>
    </div>
  );
}
