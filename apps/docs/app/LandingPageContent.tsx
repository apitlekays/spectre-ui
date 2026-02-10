"use client";

import React from "react";
import Link from "next/link";
import {
  Button,
  Badge,
  SystemTicker,
  ScanBeam,
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@spectre-ui/core";

const features = [
  {
    title: "36+ Components",
    description:
      "Production-ready components from Buttons to Command Palettes, all with the FUI aesthetic baked in.",
    badge: "Core",
  },
  {
    title: "Dark + Light Themes",
    description:
      "Cyber Dark and Cyber Light presets with full CSS variable theming system. Build your own themes.",
    badge: "Theming",
  },
  {
    title: "Framer Motion",
    description:
      "Built-in animations for every component. Entrance, hover, and exit transitions with reduced motion support.",
    badge: "Motion",
  },
  {
    title: "Radix Primitives",
    description:
      "Accessible by default. Built on Radix UI primitives for keyboard navigation, screen readers, and ARIA.",
    badge: "A11y",
  },
  {
    title: "Tailwind CSS",
    description:
      "Custom Tailwind plugin with spectre-ui design tokens, HUD corners, grid backgrounds, and glow effects.",
    badge: "CSS",
  },
  {
    title: "TypeScript First",
    description:
      "Full TypeScript support with exported interfaces, generic components, and IntelliSense-friendly APIs.",
    badge: "DX",
  },
];

const installCommand = "pnpm add @spectre-ui/core framer-motion";

export default function LandingPageContent() {
  return (
    <div className="min-h-screen">
      {/* System Ticker */}
      <SystemTicker
        messages={[
          "sys.status: online",
          "framework.version: 1.0.0",
          "components.count: 35",
          "sec.level: classified",
          "theme.active: cyber-dark",
          "build.status: stable",
        ]}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-spectre-border min-h-screen">
        <div className="mx-auto max-w-5xl px-4 py-24 sm:py-32">
          <div className="flex flex-col items-center text-center">
            {/* Status Indicator */}
            <div className="mb-6 flex items-center gap-2 text-xs font-mono text-spectre-primary">
              <span className="h-2 w-2 bg-spectre-primary animate-pulse" />
              <span className="uppercase tracking-widest">System Online</span>
            </div>

            {/* HUD Badge */}
            <Badge variant="primary" dot className="mb-6">
              v1.0.0 — Now Available
            </Badge>

            {/* Logo */}
            <div className="mb-4">
              <img
                src="/agentUI.svg"
                alt="spectre-ui logo"
                className="h-36 w-36 sm:h-44 sm:w-44 md:h-52 md:w-52 drop-shadow-[0_0_20px_rgba(14,165,233,0.4)]"
                style={{ filter: "brightness(0) saturate(100%) invert(56%) sepia(81%) saturate(1879%) hue-rotate(176deg) brightness(101%) contrast(91%)" }}
              />
            </div>

            {/* Title */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-spectre-foreground">
              SPECTRE_<span className="text-spectre-primary spectre-glow-text">UI</span>
            </h1>

            {/* Subtitle */}
            <p className="mt-6 max-w-2xl text-lg text-spectre-muted-foreground">
              A futuristic React component framework with dark cyber aesthetics,
              built-in animations, and full accessibility. Build interfaces that
              look like they belong in a covert ops HUD.
            </p>

            {/* Install Command */}
            <div className="mt-8 relative inline-flex items-center gap-3 bg-spectre-muted/80 border border-spectre-border px-6 py-3">
              {/* HUD corners */}
              <div className="absolute top-0 left-0 w-3 h-3 border-l-2 border-t-2 border-spectre-primary" />
              <div className="absolute top-0 right-0 w-3 h-3 border-r-2 border-t-2 border-spectre-primary" />
              <div className="absolute bottom-0 left-0 w-3 h-3 border-l-2 border-b-2 border-spectre-primary" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-r-2 border-b-2 border-spectre-primary" />
              <span className="text-spectre-primary">$</span>
              <code className="text-sm text-spectre-foreground">
                {installCommand}
              </code>
            </div>

            {/* CTAs */}
            <div className="mt-8 flex items-center gap-4">
              <Link href="/docs/getting-started">
                <Button variant="primary" size="lg">
                  Get Started
                </Button>
              </Link>
              <Link href="/docs/components/button">
                <Button variant="outline" size="lg">
                  Browse Components
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scan beam effect */}
        <ScanBeam speed="normal" opacity={0.1} size={20} className="z-10" />
      </section>

      {/* Features Grid */}
      <section className="mx-auto max-w-5xl px-4 py-20">
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-bold uppercase tracking-widest text-spectre-foreground">
            Features
          </h2>
          <p className="mt-2 text-spectre-muted-foreground">
            Everything you need to build futuristic interfaces
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="relative p-6 bg-spectre-secondary/50 border border-spectre-border hover:border-spectre-primary/50 transition-colors group"
            >
              {/* HUD corner brackets */}
              <div className="absolute top-0 left-0 w-3 h-3 border-l-2 border-t-2 border-spectre-primary" />
              <div className="absolute top-0 right-0 w-3 h-3 border-r-2 border-t-2 border-spectre-primary" />
              <div className="absolute bottom-0 left-0 w-3 h-3 border-l-2 border-b-2 border-spectre-primary" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-r-2 border-b-2 border-spectre-primary" />

              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-sm font-bold uppercase tracking-wider text-spectre-foreground group-hover:text-spectre-primary transition-colors">
                  {feature.title}
                </h3>
                <span className="text-[10px] font-mono text-spectre-primary/60 uppercase">
                  {feature.badge}
                </span>
              </div>
              <p className="text-sm text-spectre-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* MCP Section */}
      <section className="border-t border-spectre-border">
        <div className="mx-auto max-w-5xl px-4 py-20">
          <div className="mb-12 text-center">
            <div className="mb-4 flex items-center justify-center gap-2 text-xs font-mono text-spectre-primary">
              <span className="h-2 w-2 bg-spectre-primary animate-pulse" />
              <span className="uppercase tracking-widest">MCP Ready</span>
            </div>
            <h2 className="text-2xl font-bold uppercase tracking-widest text-spectre-foreground">
              AI-Powered Development
            </h2>
            <p className="mt-2 max-w-xl mx-auto text-spectre-muted-foreground">
              Ship faster with our MCP server. Your AI coding assistant gets full access to
              spectre-ui docs, component APIs, design tokens, and prompt templates.
            </p>
          </div>

          <div className="relative border border-spectre-border bg-spectre-secondary/30 p-6">
            {/* HUD corners */}
            <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-spectre-primary" />
            <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-spectre-primary" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-spectre-primary" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-spectre-primary" />

            <Tabs defaultValue="claude-code">
              <TabsList>
                <TabsTrigger value="claude-code">Claude Code</TabsTrigger>
                <TabsTrigger value="cursor">Cursor</TabsTrigger>
                <TabsTrigger value="claude-desktop">Claude Desktop</TabsTrigger>
              </TabsList>

              <TabsContent value="claude-code">
                <p className="mb-3 text-xs font-mono text-spectre-muted-foreground uppercase tracking-wider">
                  .mcp.json <span className="text-spectre-primary/60">// project root</span>
                </p>
                <div className="border border-spectre-border bg-spectre-muted p-4">
                  <pre className="overflow-x-auto text-sm text-spectre-foreground">
                    <code>{`{
  "mcpServers": {
    "spectre-ui": {
      "command": "npx",
      "args": ["-y", "@spectre-ui/mcp"]
    }
  }
}`}</code>
                  </pre>
                </div>
              </TabsContent>

              <TabsContent value="cursor">
                <p className="mb-3 text-xs font-mono text-spectre-muted-foreground uppercase tracking-wider">
                  .cursor/mcp.json
                </p>
                <div className="border border-spectre-border bg-spectre-muted p-4">
                  <pre className="overflow-x-auto text-sm text-spectre-foreground">
                    <code>{`{
  "mcpServers": {
    "spectre-ui": {
      "command": "npx",
      "args": ["-y", "@spectre-ui/mcp"]
    }
  }
}`}</code>
                  </pre>
                </div>
              </TabsContent>

              <TabsContent value="claude-desktop">
                <p className="mb-3 text-xs font-mono text-spectre-muted-foreground uppercase tracking-wider">
                  claude_desktop_config.json
                </p>
                <div className="border border-spectre-border bg-spectre-muted p-4">
                  <pre className="overflow-x-auto text-sm text-spectre-foreground">
                    <code>{`{
  "mcpServers": {
    "spectre-ui": {
      "command": "npx",
      "args": ["-y", "@spectre-ui/mcp"]
    }
  }
}`}</code>
                  </pre>
                </div>
              </TabsContent>
            </Tabs>

            <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-6 text-[10px] font-mono text-spectre-muted-foreground uppercase">
                <span>59 resources</span>
                <span>7 prompt templates</span>
                <span>38 component docs</span>
              </div>
              <Link href="/docs/mcp">
                <Button variant="outline" size="sm">
                  View Full MCP Docs
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Example */}
      <section className="border-t border-spectre-border">
        <div className="mx-auto max-w-5xl px-4 py-20">
          <div className="mb-12 text-center">
            <h2 className="text-2xl font-bold uppercase tracking-widest text-spectre-foreground">
              Quick Start
            </h2>
            <p className="mt-2 text-spectre-muted-foreground">
              Get up and running in under a minute
            </p>
          </div>

          <div className="border border-spectre-border bg-spectre-muted p-6">
            <pre className="overflow-x-auto text-sm text-spectre-foreground">
              <code>{`import { SpectreThemeProvider, Button, Card } from "@spectre-ui/core";
import "@spectre-ui/core/styles.css";

function App() {
  return (
    <SpectreThemeProvider defaultTheme="dark">
      <Card variant="hud">
        <Button variant="primary">
          Launch Mission
        </Button>
      </Card>
    </SpectreThemeProvider>
  );
}`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-spectre-border py-10 overflow-hidden">
        <div className="mx-auto max-w-5xl px-4">
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="flex items-center gap-2 text-spectre-foreground font-bold text-sm uppercase tracking-widest">
              SPECTRE_<span className="text-spectre-primary">UI</span>
            </div>
            <p className="text-xs uppercase tracking-widest text-spectre-muted-foreground">
              Created by{" "}
              <a
                href="https://drhafizhanif.net/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-spectre-primary hover:underline"
              >
                Hafiz Hanif, PhD
              </a>
            </p>
            <p className="text-xs uppercase tracking-widest text-spectre-muted-foreground">
              Open source under the MIT License
            </p>
            <p className="text-xs uppercase tracking-widest text-spectre-muted-foreground">
              Built with React, Tailwind CSS, Radix UI, and Framer Motion
            </p>
            <div className="mt-4 flex items-center gap-6 text-[10px] font-mono text-spectre-primary/50 uppercase">
              <span className="flex items-center gap-1">
                <span className="h-1.5 w-1.5 bg-spectre-success animate-pulse" />
                network_stable
              </span>
              <span className="flex items-center gap-1">
                <span className="h-1.5 w-1.5 bg-spectre-success animate-pulse" />
                system_optimal
              </span>
              <span className="flex items-center gap-1">
                <span className="h-1.5 w-1.5 bg-spectre-primary animate-pulse" />
                v1.0.0
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
