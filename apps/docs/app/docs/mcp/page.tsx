import React from "react";
import type { Metadata } from "next";
import { getPageMetadata, SITE_CONFIG } from "@/lib/seo-data";

const seo = getPageMetadata("/docs/mcp")!;

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  alternates: { canonical: `/docs/mcp` },
  openGraph: {
    title: seo.title,
    description: seo.description,
    url: `${SITE_CONFIG.url}/docs/mcp`,
    images: [{ url: `/api/og?path=/docs/mcp`, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: [`/api/og?path=/docs/mcp`],
  },
};

export default function McpPage() {
  return (
    <div className="docs-prose">
      <h1>MCP Server</h1>

      <p>
        The <code>@spectre-ui/mcp</code> package is a{" "}
        <strong>Model Context Protocol (MCP) server</strong> that gives AI
        coding assistants full access to the spectre-ui documentation. It
        exposes <strong>59 resources</strong> (component docs, hook docs,
        guides, and design system data) along with{" "}
        <strong>7 prompt templates</strong> for common UI building tasks.
      </p>
      <p>
        Once configured, your AI assistant can read any spectre-ui
        documentation on demand, use the correct component APIs, and follow
        the project&apos;s design conventions without you needing to paste
        docs into the chat.
      </p>

      <h2>Configuration</h2>

      <p>
        All supported clients use the same server definition. Add the
        configuration below to the appropriate file for your tool.
      </p>

      <h3>Claude Code</h3>
      <p>
        Create or edit <code>.mcp.json</code> in your project root:
      </p>
      <pre><code>{`{
  "mcpServers": {
    "spectre-ui": {
      "command": "npx",
      "args": ["-y", "@spectre-ui/mcp"]
    }
  }
}`}</code></pre>

      <h3>Cursor</h3>
      <p>
        Create or edit <code>.cursor/mcp.json</code> in your project root:
      </p>
      <pre><code>{`{
  "mcpServers": {
    "spectre-ui": {
      "command": "npx",
      "args": ["-y", "@spectre-ui/mcp"]
    }
  }
}`}</code></pre>

      <h3>Claude Desktop</h3>
      <p>
        Edit{" "}
        <code>~/Library/Application Support/Claude/claude_desktop_config.json</code>
        :
      </p>
      <pre><code>{`{
  "mcpServers": {
    "spectre-ui": {
      "command": "npx",
      "args": ["-y", "@spectre-ui/mcp"]
    }
  }
}`}</code></pre>

      <h2>Available Resources</h2>

      <p>
        The MCP server exposes 59 resources via <code>spectre://</code> URIs.
        Your AI assistant can read any of these to get up-to-date
        documentation.
      </p>

      <table>
        <thead>
          <tr>
            <th>URI Pattern</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>spectre://overview</code></td>
            <td>Project overview, philosophy, and feature summary</td>
          </tr>
          <tr>
            <td><code>spectre://components</code></td>
            <td>Full list of all available components</td>
          </tr>
          <tr>
            <td><code>spectre://component/&#123;name&#125;</code></td>
            <td>
              Detailed docs for a specific component (props, variants,
              examples)
            </td>
          </tr>
          <tr>
            <td><code>spectre://hooks</code></td>
            <td>Full list of all available hooks</td>
          </tr>
          <tr>
            <td><code>spectre://hook/&#123;name&#125;</code></td>
            <td>
              Detailed docs for a specific hook (parameters, return value,
              examples)
            </td>
          </tr>
          <tr>
            <td><code>spectre://guides/&#123;slug&#125;</code></td>
            <td>
              Guide content by slug (e.g. getting-started, theming,
              installation)
            </td>
          </tr>
          <tr>
            <td><code>spectre://design-system/tokens</code></td>
            <td>
              Design tokens including colors, spacing, typography, and
              border radius values
            </td>
          </tr>
          <tr>
            <td><code>spectre://design-system/colors</code></td>
            <td>Full color palette with CSS variable mappings</td>
          </tr>
          <tr>
            <td><code>spectre://design-system/typography</code></td>
            <td>Font families, sizes, weights, and line heights</td>
          </tr>
        </tbody>
      </table>

      <h2>Available Prompts</h2>

      <p>
        The server includes 7 prompt templates that give your AI assistant a
        head start on common tasks. These prompts automatically pull in
        relevant component and design system documentation.
      </p>

      <table>
        <thead>
          <tr>
            <th>Prompt</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>build-dashboard</code></td>
            <td>
              Scaffold a full dashboard layout using Card, Stat, DataTable,
              Grid, and Sidebar
            </td>
          </tr>
          <tr>
            <td><code>build-landing-page</code></td>
            <td>
              Create a landing page with Navbar, Container, GridBackground,
              and TerminalText
            </td>
          </tr>
          <tr>
            <td><code>build-form</code></td>
            <td>
              Build an accessible form with Input, Select, Checkbox, Switch,
              and Toast feedback
            </td>
          </tr>
          <tr>
            <td><code>build-data-view</code></td>
            <td>
              Set up a data display view with DataTable, Badge, Avatar, and
              Skeleton loaders
            </td>
          </tr>
          <tr>
            <td><code>setup-project</code></td>
            <td>
              Initialize a new project with SpectreThemeProvider, styles
              import, and Tailwind config
            </td>
          </tr>
          <tr>
            <td><code>build-navigation</code></td>
            <td>
              Build a navigation system with Navbar, Sidebar, Breadcrumb,
              and CommandPalette
            </td>
          </tr>
          <tr>
            <td><code>add-theme-switching</code></td>
            <td>
              Add dark/light theme switching using useSpectreTheme and
              Switch
            </td>
          </tr>
        </tbody>
      </table>

      <h2>Usage Example</h2>

      <p>
        After configuration, your AI assistant automatically has access to
        all spectre-ui documentation. You can ask it things like:
      </p>
      <ul>
        <li>
          &ldquo;Build me a dashboard page using spectre-ui components&rdquo;
        </li>
        <li>
          &ldquo;Create a form with validation using spectre-ui Input and
          Select&rdquo;
        </li>
        <li>
          &ldquo;What props does the Card component accept?&rdquo;
        </li>
        <li>
          &ldquo;Set up theming with dark/light mode toggle&rdquo;
        </li>
      </ul>
      <p>
        The assistant will read the relevant resources from the MCP server
        to produce accurate, up-to-date code that follows spectre-ui
        conventions.
      </p>
    </div>
  );
}
