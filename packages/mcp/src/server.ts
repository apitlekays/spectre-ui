import { McpServer, ResourceTemplate } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { allComponents, componentsBySlug } from "./data/components/index.js";
import { allHooks, hooksBySlug } from "./data/hooks/index.js";
import { allGuides } from "./data/guides/index.js";
import { overview } from "./data/overview.js";
import { tokens, tailwindTheme, utilities, colors } from "./data/design-system/index.js";
import { renderComponentMarkdown } from "./renderers/component.js";
import { renderHookMarkdown } from "./renderers/hook.js";
import { prompts } from "./prompts/templates.js";

const server = new McpServer({
  name: "@spectre-ui/mcp",
  version: "1.0.0",
});

// ── Static Resources ──────────────────────────────────────────────

server.registerResource(
  "overview",
  "spectre://overview",
  { description: "Framework philosophy, packages, and quick-start guide", mimeType: "text/markdown" },
  async (uri) => ({
    contents: [{ uri: uri.href, mimeType: "text/markdown", text: overview }],
  })
);

server.registerResource(
  "components-index",
  "spectre://components",
  { description: "Index of all components with name, category, import, and URI", mimeType: "application/json" },
  async (uri) => ({
    contents: [
      {
        uri: uri.href,
        mimeType: "application/json",
        text: JSON.stringify(
          allComponents.map((c) => ({
            name: c.name,
            slug: c.slug,
            category: c.category,
            description: c.description,
            importStatement: c.importStatement,
            uri: `spectre://component/${c.slug}`,
          })),
          null,
          2
        ),
      },
    ],
  })
);

server.registerResource(
  "hooks-index",
  "spectre://hooks",
  { description: "Index of all hooks with name, signature, import, and URI", mimeType: "application/json" },
  async (uri) => ({
    contents: [
      {
        uri: uri.href,
        mimeType: "application/json",
        text: JSON.stringify(
          allHooks.map((h) => ({
            name: h.name,
            slug: h.slug,
            description: h.description,
            importStatement: h.importStatement,
            signature: h.signature,
            uri: `spectre://hook/${h.slug}`,
          })),
          null,
          2
        ),
      },
    ],
  })
);

// ── Guides ────────────────────────────────────────────────────────

for (const guide of allGuides) {
  server.registerResource(
    `guide-${guide.slug}`,
    `spectre://guides/${guide.slug}`,
    { description: guide.title, mimeType: "text/markdown" },
    async (uri) => ({
      contents: [{ uri: uri.href, mimeType: "text/markdown", text: guide.content }],
    })
  );
}

// ── Design System ─────────────────────────────────────────────────

server.registerResource(
  "design-system-tokens",
  "spectre://design-system/tokens",
  { description: "All --spectre-* CSS custom properties with dark/light values", mimeType: "application/json" },
  async (uri) => ({
    contents: [{ uri: uri.href, mimeType: "application/json", text: JSON.stringify(tokens, null, 2) }],
  })
);

server.registerResource(
  "design-system-tailwind-theme",
  "spectre://design-system/tailwind-theme",
  { description: "Tailwind theme extensions (colors, fonts, keyframes)", mimeType: "application/json" },
  async (uri) => ({
    contents: [{ uri: uri.href, mimeType: "application/json", text: JSON.stringify(tailwindTheme, null, 2) }],
  })
);

server.registerResource(
  "design-system-utilities",
  "spectre://design-system/utilities",
  { description: "All .spectre-* utility/component classes", mimeType: "application/json" },
  async (uri) => ({
    contents: [{ uri: uri.href, mimeType: "application/json", text: JSON.stringify(utilities, null, 2) }],
  })
);

server.registerResource(
  "design-system-colors",
  "spectre://design-system/colors",
  { description: "Full color palette for both themes", mimeType: "application/json" },
  async (uri) => ({
    contents: [{ uri: uri.href, mimeType: "application/json", text: JSON.stringify(colors, null, 2) }],
  })
);

// ── Templated Resources ───────────────────────────────────────────

server.registerResource(
  "component",
  new ResourceTemplate("spectre://component/{name}", {
    list: async () => ({
      resources: allComponents.map((c) => ({
        uri: `spectre://component/${c.slug}`,
        name: c.name,
        description: c.description,
      })),
    }),
  }),
  { description: "Full documentation for a single component", mimeType: "text/markdown" },
  async (uri, variables) => {
    const slug = String(variables.name);
    const doc = componentsBySlug[slug];
    if (!doc) {
      return { contents: [{ uri: uri.href, mimeType: "text/plain", text: `Component "${slug}" not found.` }] };
    }
    return {
      contents: [{ uri: uri.href, mimeType: "text/markdown", text: renderComponentMarkdown(doc) }],
    };
  }
);

server.registerResource(
  "hook",
  new ResourceTemplate("spectre://hook/{name}", {
    list: async () => ({
      resources: allHooks.map((h) => ({
        uri: `spectre://hook/${h.slug}`,
        name: h.name,
        description: h.description,
      })),
    }),
  }),
  { description: "Full documentation for a single hook", mimeType: "text/markdown" },
  async (uri, variables) => {
    const slug = String(variables.name);
    const doc = hooksBySlug[slug];
    if (!doc) {
      return { contents: [{ uri: uri.href, mimeType: "text/plain", text: `Hook "${slug}" not found.` }] };
    }
    return {
      contents: [{ uri: uri.href, mimeType: "text/markdown", text: renderHookMarkdown(doc) }],
    };
  }
);

// ── Prompts ──────────────────────────────────────────────────────

for (const prompt of prompts) {
  if (prompt.argsSchema) {
    server.prompt(
      prompt.name,
      prompt.description,
      prompt.argsSchema,
      async (args) => ({
        messages: prompt.render(args as Record<string, string>),
      })
    );
  } else {
    server.prompt(prompt.name, prompt.description, async () => ({
      messages: prompt.render({}),
    }));
  }
}

// ── Start ─────────────────────────────────────────────────────────

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
