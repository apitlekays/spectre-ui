"use client";

import React from "react";
import Link from "next/link";
import { useSpectreTheme, Button } from "@spectre-ui/core";

interface DocsNavbarProps {
  onMenuToggle?: () => void;
}

export function DocsNavbar({ onMenuToggle }: DocsNavbarProps) {
  const { theme, toggleTheme } = useSpectreTheme();

  return (
    <nav className="sticky top-0 z-50 flex h-14 items-center justify-between border-b border-spectre-border bg-spectre-background/95 px-4 font-mono backdrop-blur-sm">
      <div className="flex items-center gap-4">
        {/* Mobile menu toggle */}
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          onClick={onMenuToggle}
          aria-label="Toggle sidebar"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M2 4h12M2 8h12M2 12h12" />
          </svg>
        </Button>
        <Link
          href="/"
          className="text-sm font-bold uppercase tracking-widest text-spectre-primary"
        >
          spectre-ui
        </Link>
        <div className="hidden items-center gap-4 sm:flex">
          <Link
            href="/docs/getting-started"
            className="text-xs uppercase tracking-widest text-spectre-muted-foreground hover:text-spectre-foreground transition-colors"
          >
            Docs
          </Link>
          <Link
            href="/docs/components/button"
            className="text-xs uppercase tracking-widest text-spectre-muted-foreground hover:text-spectre-foreground transition-colors"
          >
            Components
          </Link>
          <Link
            href="/docs/hooks/use-theme"
            className="text-xs uppercase tracking-widest text-spectre-muted-foreground hover:text-spectre-foreground transition-colors"
          >
            Hooks
          </Link>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          {theme === "dark" ? (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="8" r="4" stroke="currentColor" strokeWidth="1.5" />
              <path d="M8 1V3M8 13V15M1 8H3M13 8H15M3 3L4.5 4.5M11.5 11.5L13 13M13 3L11.5 4.5M4.5 11.5L3 13" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M14 10A6 6 0 016 2a6 6 0 108 8z" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          )}
        </Button>
        <a
          href="https://github.com/apitlekays/spectre-ui"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="ghost" size="icon" aria-label="GitHub">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
            </svg>
          </Button>
        </a>
      </div>
    </nav>
  );
}
