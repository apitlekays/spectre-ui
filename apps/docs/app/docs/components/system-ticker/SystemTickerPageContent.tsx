"use client";

import React from "react";
import { SystemTicker } from "@spectre-ui/core";
import { ComponentPreview } from "@/components/ComponentPreview";
import { PropsTable, type PropDef } from "@/components/PropsTable";

const systemTickerProps: PropDef[] = [
  { name: "messages", type: "string[]", default: '["sys.status: online", "sec.level: classified", "net.latency: 12ms", ...]', description: "Array of status messages to display in the scrolling ticker." },
  { name: "speed", type: '"slow" | "normal" | "fast"', default: '"normal"', description: "Scroll speed of the ticker. slow = 40s, normal = 25s, fast = 15s." },
  { name: "separator", type: "string", default: '" // "', description: "String used to separate individual messages." },
  { name: "className", type: "string", description: "Additional CSS classes for the ticker container." },
];

export default function SystemTickerPageContent() {
  return (
    <div className="docs-prose">
      <h1>SystemTicker</h1>
      <p>Scrolling horizontal ticker bar that continuously displays system status messages. Renders a seamless infinite-scroll animation using duplicated content. Ideal for status bars, dashboards, and decorative system UI.</p>

      <h2>Default Messages</h2>
      <ComponentPreview code={`<SystemTicker />`}><SystemTicker /></ComponentPreview>

      <h2>Custom Messages</h2>
      <ComponentPreview code={`<SystemTicker\n  messages={[\n    "agent.alpha: deployed",\n    "agent.bravo: standby",\n    "net.status: nominal",\n    "threat.level: low",\n  ]}\n  speed="fast"\n/>`}>
        <SystemTicker messages={["agent.alpha: deployed", "agent.bravo: standby", "net.status: nominal", "threat.level: low"]} speed="fast" />
      </ComponentPreview>

      <h2>Speed Variants</h2>
      <ComponentPreview code={`<SystemTicker speed="slow" messages={["slow.ticker: 40s cycle"]} />\n<SystemTicker speed="normal" messages={["normal.ticker: 25s cycle"]} />\n<SystemTicker speed="fast" messages={["fast.ticker: 15s cycle"]} />`}>
        <div className="flex flex-col gap-4">
          <SystemTicker speed="slow" messages={["slow.ticker: 40s cycle", "demo: running"]} />
          <SystemTicker speed="normal" messages={["normal.ticker: 25s cycle", "demo: running"]} />
          <SystemTicker speed="fast" messages={["fast.ticker: 15s cycle", "demo: running"]} />
        </div>
      </ComponentPreview>

      <h2>Custom Separator</h2>
      <ComponentPreview code={`<SystemTicker\n  messages={["alpha: online", "bravo: online", "charlie: offline"]}\n  separator=" | "\n/>`}>
        <SystemTicker messages={["alpha: online", "bravo: online", "charlie: offline"]} separator=" | " />
      </ComponentPreview>

      <h2>Props</h2>
      <PropsTable props={systemTickerProps} />

      <h2>Accessibility</h2>
      <ul>
        <li>The ticker is decorative and contains duplicated content for the infinite scroll effect.</li>
        <li>Consider adding <code>aria-hidden=&quot;true&quot;</code> if the ticker content is purely decorative.</li>
        <li>Users who prefer reduced motion may benefit from a{" "}<code>prefers-reduced-motion</code> media query to pause the animation.</li>
        <li>The text uses a very small font size (10px) -- ensure critical information is also available elsewhere.</li>
      </ul>
    </div>
  );
}
