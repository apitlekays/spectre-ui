"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItem {
  title: string;
  href?: string;
  items?: NavItem[];
}

const navigation: NavItem[] = [
  {
    title: "Getting Started",
    items: [
      { title: "Introduction", href: "/docs/getting-started" },
      { title: "Installation", href: "/docs/installation" },
      { title: "Theming", href: "/docs/theming" },
      { title: "Design Brief", href: "/docs/design-brief" },
      { title: "MCP Server", href: "/docs/mcp" },
    ],
  },
  {
    title: "Layout",
    items: [
      { title: "Container", href: "/docs/components/container" },
      { title: "Grid", href: "/docs/components/grid" },
      { title: "Stack", href: "/docs/components/stack" },
      { title: "Separator", href: "/docs/components/separator" },
      { title: "Sidebar", href: "/docs/components/sidebar" },
    ],
  },
  {
    title: "Data Display",
    items: [
      { title: "Card", href: "/docs/components/card" },
      { title: "Badge", href: "/docs/components/badge" },
      { title: "Avatar", href: "/docs/components/avatar" },
      { title: "Table", href: "/docs/components/table" },
      { title: "DataTable", href: "/docs/components/data-table" },
      { title: "Timeline", href: "/docs/components/timeline" },
      { title: "Stat", href: "/docs/components/stat" },
      { title: "Skeleton", href: "/docs/components/skeleton" },
      { title: "Progress", href: "/docs/components/progress" },
    ],
  },
  {
    title: "Forms",
    items: [
      { title: "Button", href: "/docs/components/button" },
      { title: "Input", href: "/docs/components/input" },
      { title: "Textarea", href: "/docs/components/textarea" },
      { title: "Select", href: "/docs/components/select" },
      { title: "Checkbox", href: "/docs/components/checkbox" },
      { title: "Switch", href: "/docs/components/switch" },
      { title: "Slider", href: "/docs/components/slider" },
      { title: "Form", href: "/docs/components/form" },
    ],
  },
  {
    title: "Feedback",
    items: [
      { title: "Alert", href: "/docs/components/alert" },
      { title: "Toast", href: "/docs/components/toast" },
      { title: "Dialog", href: "/docs/components/dialog" },
      { title: "Tooltip", href: "/docs/components/tooltip" },
      { title: "Popover", href: "/docs/components/popover" },
    ],
  },
  {
    title: "Navigation",
    items: [
      { title: "Navbar", href: "/docs/components/navbar" },
      { title: "Tabs", href: "/docs/components/tabs" },
      { title: "Breadcrumb", href: "/docs/components/breadcrumb" },
      { title: "DropdownMenu", href: "/docs/components/dropdown-menu" },
      { title: "CommandPalette", href: "/docs/components/command-palette" },
    ],
  },
  {
    title: "Decorative",
    items: [
      { title: "GridBackground", href: "/docs/components/grid-background" },
      { title: "ScanlineOverlay", href: "/docs/components/scanline-overlay" },
      { title: "SystemTicker", href: "/docs/components/system-ticker" },
      { title: "TerminalText", href: "/docs/components/terminal-text" },
      { title: "GlowBorder", href: "/docs/components/glow-border" },
      { title: "ScanBeam", href: "/docs/components/scan-beam" },
    ],
  },
  {
    title: "Hooks",
    items: [
      { title: "useSpectreTheme", href: "/docs/hooks/use-theme" },
      { title: "useMediaQuery", href: "/docs/hooks/use-media-query" },
      { title: "useClickOutside", href: "/docs/hooks/use-click-outside" },
      { title: "useScrollLock", href: "/docs/hooks/use-scroll-lock" },
      { title: "useClipboard", href: "/docs/hooks/use-clipboard" },
      { title: "useLocalStorage", href: "/docs/hooks/use-local-storage" },
      { title: "useKeyboardShortcut", href: "/docs/hooks/use-keyboard-shortcut" },
      { title: "useReducedMotion", href: "/docs/hooks/use-reduced-motion" },
      { title: "useIsMounted", href: "/docs/hooks/use-is-mounted" },
      { title: "useDebounce", href: "/docs/hooks/use-debounce" },
    ],
  },
];

export function DocsSidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState<Record<string, boolean>>({});

  const toggleSection = (title: string) => {
    setCollapsed((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  return (
    <aside className="sticky top-14 hidden h-[calc(100vh-3.5rem)] w-64 shrink-0 overflow-y-auto border-r border-spectre-border bg-spectre-muted/30 p-4 lg:block">
      <nav className="space-y-6">
        {navigation.map((section) => (
          <div key={section.title}>
            <button
              onClick={() => toggleSection(section.title)}
              className="flex w-full items-center justify-between text-xs font-semibold uppercase tracking-widest text-spectre-muted-foreground hover:text-spectre-foreground transition-colors"
            >
              {section.title}
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                className={`transition-transform ${collapsed[section.title] ? "" : "rotate-90"}`}
              >
                <path d="M3 1L7 5L3 9" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </button>
            {!collapsed[section.title] && section.items && (
              <ul className="mt-2 space-y-1 border-l border-spectre-border pl-3">
                {section.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href!}
                      className={`block py-1 text-sm transition-colors ${
                        pathname === item.href
                          ? "text-spectre-primary font-medium"
                          : "text-spectre-muted-foreground hover:text-spectre-foreground"
                      }`}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
}
