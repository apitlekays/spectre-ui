import type { ComponentDoc } from "../types.js";

export const systemTickerDoc: ComponentDoc = {
  name: "SystemTicker",
  slug: "system-ticker",
  category: "decorative",
  description: "Horizontally scrolling ticker tape displaying system-style messages. Supports custom messages, speed, and separator.",
  importStatement: 'import { SystemTicker } from "@spectre-ui/core";',
  props: [
    { name: "messages", type: "string[]", description: "Custom messages to display. Defaults to system-themed messages." },
    { name: "speed", type: '"slow" | "normal" | "fast"', default: '"normal"', description: "Scroll speed. slow = 40s, normal = 25s, fast = 15s." },
    { name: "separator", type: "string", default: '" // "', description: "Separator between messages." },
    { name: "className", type: "string", description: "Additional CSS classes." },
  ],
  examples: [
    {
      title: "Default System Ticker",
      code: '<SystemTicker />',
      description: "Displays default messages: sys.status: online, sec.level: classified, net.latency: 12ms, etc.",
    },
    {
      title: "Custom Messages",
      code: '<SystemTicker\n  messages={["ALERT: System maintenance in 2h", "CPU: 42%", "MEM: 67%", "UPTIME: 99.9%"]}\n  speed="fast"\n  separator=" | "\n/>',
    },
  ],
};
