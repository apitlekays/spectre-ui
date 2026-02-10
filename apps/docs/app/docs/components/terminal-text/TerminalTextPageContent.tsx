"use client";

import React from "react";
import { TerminalText } from "@spectre-ui/core";
import { ComponentPreview } from "@/components/ComponentPreview";
import { PropsTable, type PropDef } from "@/components/PropsTable";

const terminalTextProps: PropDef[] = [
  {
    name: "text",
    type: "string",
    description: "Text content to animate with the typewriter effect.",
  },
  {
    name: "speed",
    type: "number",
    default: "50",
    description: "Typing speed in milliseconds per character.",
  },
  {
    name: "prefix",
    type: "string",
    description: 'Prefix shown before the animated text (e.g. "$ ").',
  },
  {
    name: "cursor",
    type: "boolean",
    default: "true",
    description: "Show a blinking cursor at the end of the text.",
  },
  {
    name: "className",
    type: "string",
    description: "Additional CSS classes.",
  },
];

export default function TerminalTextPageContent() {
  return (
    <div className="docs-prose">
      <h1>TerminalText</h1>
      <p>
        Typewriter/terminal text animation effect. Renders text character by
        character with configurable speed, optional prefix, and blinking cursor.
      </p>

      <h2>Basic Usage</h2>
      <ComponentPreview
        code={`<TerminalText text="Initializing secure connection..." speed={40} />`}
      >
        <TerminalText text="Initializing secure connection..." speed={40} />
      </ComponentPreview>

      <h2>With Prefix</h2>
      <ComponentPreview
        code={`<TerminalText text="ACCESS GRANTED" speed={80} prefix="$ " />`}
      >
        <TerminalText text="ACCESS GRANTED" speed={80} prefix="$ " />
      </ComponentPreview>

      <h2>Props</h2>
      <PropsTable props={terminalTextProps} />

      <h2>Accessibility</h2>
      <ul>
        <li>
          The full text is available immediately via <code>aria-label</code> so
          screen readers do not need to wait for the animation
        </li>
        <li>
          The blinking cursor is decorative and hidden from assistive technology
          with <code>aria-hidden</code>
        </li>
        <li>
          Uses <code>aria-live=&quot;polite&quot;</code> to announce text
          content updates without interrupting the user
        </li>
        <li>
          Respects <code>prefers-reduced-motion</code> by showing text
          immediately when the user prefers reduced motion
        </li>
      </ul>
    </div>
  );
}
