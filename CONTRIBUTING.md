# Contributing to spectre-ui

Thank you for your interest in contributing to spectre-ui! This guide will help you get started.

## Development Setup

### Prerequisites

- Node.js 18+
- pnpm 10+

### Getting Started

1. Fork and clone the repository:

```bash
git clone https://github.com/apitlekays/spectre-ui.git
cd spectre-ui
```

2. Install dependencies:

```bash
pnpm install
```

3. Build all packages:

```bash
pnpm build
```

4. Start development mode:

```bash
pnpm dev
```

## Project Structure

```
spectre-ui/
  apps/docs/          # Documentation website (Next.js)
  packages/
    core/             # @spectre-ui/core - Components
    hooks/            # @spectre-ui/hooks - Utility hooks
    themes/           # @spectre-ui/themes - Theme presets
    tailwind-config/  # @spectre-ui/tailwind-config - Tailwind plugin
    tsconfig/         # Shared TypeScript config
    eslint-config/    # Shared ESLint config
```

## Adding a Component

1. Create a new directory under `packages/core/src/components/your-component/`
2. Create `YourComponent.tsx` with:
   - `React.forwardRef` pattern
   - TypeScript props interface
   - CVA variants (if applicable)
   - Tailwind classes with `cn()` utility
   - `"use client"` directive (if interactive)
3. Create `index.ts` re-exporting the component
4. Add the export to `packages/core/src/index.ts`
5. Add a test file `YourComponent.test.tsx`
6. Add a documentation page under `apps/docs/app/docs/components/your-component/page.tsx`

## Component Guidelines

- Use `spectre-` prefixed CSS variable colors (`text-spectre-primary`, `bg-spectre-muted`, etc.)
- Never use border-radius (sharp edges are core to the aesthetic)
- Use monospace font (`font-mono`) by default
- Use uppercase tracking-widest for labels
- Add HUD corner brackets on container-style components
- Use Radix UI primitives for accessible interactive components

## Testing

```bash
pnpm test          # Run all tests
pnpm test:a11y     # Run accessibility tests
pnpm lint          # Run linting
pnpm typecheck     # Run type checking
```

## Pull Requests

1. Create a feature branch from `main`
2. Make your changes
3. Add a changeset: `pnpm changeset`
4. Push and open a PR

## Code Style

- TypeScript strict mode
- ESLint with the shared config
- Prettier for formatting

## License

By contributing, you agree that your contributions will be licensed under the MIT License.
