import { describe, it, expect } from "vitest";
import { McpServer, ResourceTemplate } from "@modelcontextprotocol/sdk/server/mcp.js";
import { allComponents, componentsBySlug } from "../data/components/index.js";
import { allHooks, hooksBySlug } from "../data/hooks/index.js";
import { allGuides } from "../data/guides/index.js";
import { overview } from "../data/overview.js";
import { tokens, tailwindTheme, utilities, colors } from "../data/design-system/index.js";
import { renderComponentMarkdown } from "../renderers/component.js";
import { renderHookMarkdown } from "../renderers/hook.js";
import { prompts } from "../prompts/templates.js";

describe("server data integrity", () => {
  it("has all expected resource data loaded", () => {
    expect(allComponents.length).toBe(38);
    expect(allHooks.length).toBe(10);
    expect(allGuides.length).toBe(4);
    expect(typeof overview).toBe("string");
    expect(tokens.length).toBeGreaterThan(0);
    expect(tailwindTheme).toBeDefined();
    expect(utilities.length).toBeGreaterThan(0);
    expect(colors.dark).toBeDefined();
    expect(colors.light).toBeDefined();
  });

  it("reading component/button returns valid markdown", () => {
    const doc = componentsBySlug["button"];
    expect(doc).toBeDefined();
    const md = renderComponentMarkdown(doc);
    expect(md).toContain("# Button");
    expect(md).toContain("## Import");
    expect(md).toContain("## Props");
    expect(md).toContain("## Examples");
  });

  it("reading hook/use-clipboard returns valid markdown", () => {
    const doc = hooksBySlug["use-clipboard"];
    expect(doc).toBeDefined();
    const md = renderHookMarkdown(doc);
    expect(md).toContain("# useClipboard");
    expect(md).toContain("## Signature");
    expect(md).toContain("## Return Value");
  });

  it("components index returns valid JSON-serializable array", () => {
    const index = allComponents.map((c) => ({
      name: c.name,
      slug: c.slug,
      category: c.category,
      description: c.description,
      importStatement: c.importStatement,
      uri: `spectre://component/${c.slug}`,
    }));
    const json = JSON.stringify(index);
    const parsed = JSON.parse(json);
    expect(parsed).toHaveLength(38);
    expect(parsed[0]).toHaveProperty("name");
    expect(parsed[0]).toHaveProperty("uri");
  });

  it("design-system/tokens returns valid JSON-serializable data", () => {
    const json = JSON.stringify(tokens);
    const parsed = JSON.parse(json);
    expect(Array.isArray(parsed)).toBe(true);
    expect(parsed[0]).toHaveProperty("variable");
    expect(parsed[0]).toHaveProperty("darkValue");
    expect(parsed[0]).toHaveProperty("lightValue");
  });

  it("prompts list includes all expected prompt names", () => {
    const names = prompts.map((p) => p.name);
    expect(names).toContain("build-dashboard");
    expect(names).toContain("build-landing-page");
    expect(names).toContain("build-form");
    expect(names).toContain("build-data-view");
    expect(names).toContain("setup-project");
    expect(names).toContain("build-navigation");
    expect(names).toContain("add-theme-switching");
  });
});

describe("McpServer instantiation", () => {
  it("server can be created without error", () => {
    const server = new McpServer({
      name: "@spectre-ui/mcp",
      version: "1.0.0",
    });
    expect(server).toBeDefined();
  });

  it("resources can be registered", () => {
    const server = new McpServer({
      name: "@spectre-ui/mcp",
      version: "1.0.0",
    });

    server.registerResource(
      "overview",
      "spectre://overview",
      { description: "Framework overview", mimeType: "text/markdown" },
      async (uri) => ({
        contents: [{ uri: uri.href, mimeType: "text/markdown", text: overview }],
      })
    );

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
      { description: "Component doc", mimeType: "text/markdown" },
      async (uri, variables) => {
        const slug = String(variables.name);
        const doc = componentsBySlug[slug];
        return {
          contents: [
            {
              uri: uri.href,
              mimeType: "text/markdown",
              text: doc ? renderComponentMarkdown(doc) : "Not found",
            },
          ],
        };
      }
    );

    // No error thrown means registration works
    expect(true).toBe(true);
  });

  it("prompts can be registered", () => {
    const server = new McpServer({
      name: "@spectre-ui/mcp",
      version: "1.0.0",
    });

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

    // No error thrown means registration works
    expect(true).toBe(true);
  });
});

describe("resource count verification", () => {
  it("total resource count matches expected (59)", () => {
    const staticResources = 3; // overview, components-index, hooks-index
    const guides = allGuides.length; // 4
    const designSystem = 4; // tokens, tailwind-theme, utilities, colors
    const templatedComponents = allComponents.length; // 38
    const templatedHooks = allHooks.length; // 10

    const total =
      staticResources + guides + designSystem + templatedComponents + templatedHooks;
    expect(total).toBe(59);
  });

  it("prompt count matches expected (7)", () => {
    expect(prompts.length).toBe(7);
  });
});
