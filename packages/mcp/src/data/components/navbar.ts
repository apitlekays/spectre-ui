import type { ComponentDoc } from "../types.js";

export const navbarDoc: ComponentDoc = {
  name: "Navbar",
  slug: "navbar",
  category: "navigation",
  description: "Sticky top navigation bar with brand slot and optional animated gradient ticker line. Designed for app-wide primary navigation.",
  importStatement: 'import { Navbar } from "@spectre-ui/core";',
  props: [
    { name: "brand", type: "ReactNode", description: "Brand/logo content displayed on the left side." },
    { name: "ticker", type: "string", description: "Optional animated gradient ticker line text." },
    { name: "className", type: "string", description: "Additional CSS classes." },
    { name: "children", type: "ReactNode", description: "Navigation items and actions." },
  ],
  examples: [
    {
      title: "Basic Navbar",
      code: `<Navbar brand={<span className="font-mono font-bold">SPECTRE</span>}>\n  <a href="/docs">Docs</a>\n  <a href="/components">Components</a>\n</Navbar>`,
    },
    {
      title: "With Ticker",
      code: `<Navbar brand="MyApp" ticker="SYSTEM ONLINE">\n  <Button variant="ghost" size="sm">Login</Button>\n</Navbar>`,
    },
  ],
};
