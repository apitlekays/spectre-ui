# @spectre-ui/mcp

MCP (Model Context Protocol) server for **spectre-ui** — gives AI coding assistants full access to framework documentation, component APIs, hook references, design tokens, and prompt templates.

## What it does

When connected to an AI assistant (Claude Code, Cursor, Claude Desktop, etc.), this MCP server exposes:

- **59 resources** — component docs, hook docs, guides, design system data, and more
- **7 prompt templates** — pre-built prompts for building dashboards, landing pages, forms, etc.

## Configuration

### Claude Code

Add to `.mcp.json` in your project root:

```json
{
  "mcpServers": {
    "spectre-ui": {
      "command": "npx",
      "args": ["-y", "@spectre-ui/mcp"]
    }
  }
}
```

### Cursor

Add to `.cursor/mcp.json`:

```json
{
  "mcpServers": {
    "spectre-ui": {
      "command": "npx",
      "args": ["-y", "@spectre-ui/mcp"]
    }
  }
}
```

### Claude Desktop

Add to `~/Library/Application Support/Claude/claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "spectre-ui": {
      "command": "npx",
      "args": ["-y", "@spectre-ui/mcp"]
    }
  }
}
```

## Available Resources

| URI | Type | Description |
|-----|------|-------------|
| `spectre://overview` | Markdown | Framework overview, packages, quick start |
| `spectre://components` | JSON | Index of all 38 components |
| `spectre://hooks` | JSON | Index of all 10 hooks |
| `spectre://component/{name}` | Markdown | Full docs for a component (38 available) |
| `spectre://hook/{name}` | Markdown | Full docs for a hook (10 available) |
| `spectre://guides/getting-started` | Markdown | Getting started guide |
| `spectre://guides/installation` | Markdown | Installation instructions |
| `spectre://guides/theming` | Markdown | Theming system guide |
| `spectre://guides/design-brief` | Markdown | Design principles and aesthetic |
| `spectre://design-system/tokens` | JSON | All CSS custom properties with dark/light values |
| `spectre://design-system/tailwind-theme` | JSON | Tailwind theme extensions |
| `spectre://design-system/utilities` | JSON | Utility class definitions |
| `spectre://design-system/colors` | JSON | Full color palettes for both themes |

## Available Prompts

| Prompt | Description |
|--------|-------------|
| `build-dashboard` | Build a monitoring/analytics dashboard |
| `build-landing-page` | Build a futuristic landing page |
| `build-form` | Build a form with validation |
| `build-data-view` | Build a data display page |
| `setup-project` | Set up a new project from scratch |
| `build-navigation` | Build navigation with navbar/sidebar |
| `add-theme-switching` | Add dark/light theme switching |

## Development

```bash
# Install dependencies
pnpm install

# Run tests
pnpm --filter @spectre-ui/mcp test

# Build
pnpm --filter @spectre-ui/mcp build

# Run locally
node packages/mcp/dist/server.js
```

## License

MIT
