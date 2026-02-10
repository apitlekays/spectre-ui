"use client";

import React, { useState, useEffect, useCallback, useMemo } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { cn } from "../../utils/cn";

export interface CommandItem {
  id: string;
  label: string;
  description?: string;
  icon?: React.ReactNode;
  shortcut?: string;
  group?: string;
  onSelect: () => void;
}

export interface CommandPaletteProps {
  items: CommandItem[];
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  placeholder?: string;
}

export function CommandPalette({
  items,
  open: controlledOpen,
  onOpenChange,
  placeholder = "Type a command...",
}: CommandPaletteProps) {
  const [internalOpen, setInternalOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);

  const isOpen = controlledOpen ?? internalOpen;
  const setOpen = onOpenChange ?? setInternalOpen;

  // Ctrl/Cmd+K shortcut
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen(!isOpen);
      }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [isOpen, setOpen]);

  const filtered = useMemo(() => {
    if (!query) return items;
    const q = query.toLowerCase();
    return items.filter(
      (item) =>
        item.label.toLowerCase().includes(q) ||
        item.description?.toLowerCase().includes(q) ||
        item.group?.toLowerCase().includes(q)
    );
  }, [items, query]);

  const groups = useMemo(() => {
    const map = new Map<string, CommandItem[]>();
    for (const item of filtered) {
      const group = item.group || "Commands";
      if (!map.has(group)) map.set(group, []);
      map.get(group)!.push(item);
    }
    return map;
  }, [filtered]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((i) => Math.min(i + 1, filtered.length - 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((i) => Math.max(i - 1, 0));
      } else if (e.key === "Enter" && filtered[selectedIndex]) {
        e.preventDefault();
        filtered[selectedIndex].onSelect();
        setOpen(false);
        setQuery("");
      }
    },
    [filtered, selectedIndex, setOpen]
  );

  return (
    <DialogPrimitive.Root
      open={isOpen}
      onOpenChange={(open) => {
        setOpen(open);
        if (!open) {
          setQuery("");
          setSelectedIndex(0);
        }
      }}
    >
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <DialogPrimitive.Content
          className="fixed left-[50%] top-[20%] z-50 w-full max-w-lg translate-x-[-50%] border border-spectre-border bg-spectre-background font-mono shadow-[0_0_40px_var(--spectre-glow-md)] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95"
          onKeyDown={handleKeyDown}
        >
          <DialogPrimitive.Title className="sr-only">Command Palette</DialogPrimitive.Title>
          <DialogPrimitive.Description className="sr-only">
            Search and execute commands
          </DialogPrimitive.Description>
          <div className="flex items-center border-b border-spectre-border px-3">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0 text-spectre-muted-foreground">
              <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.5" />
              <path d="M11 11L14 14" stroke="currentColor" strokeWidth="1.5" />
            </svg>
            <input
              className="flex h-11 w-full bg-transparent px-3 py-3 text-sm text-spectre-foreground outline-none placeholder:text-spectre-muted-foreground"
              placeholder={placeholder}
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setSelectedIndex(0);
              }}
              autoFocus
            />
          </div>
          <div className="max-h-[300px] overflow-y-auto p-2">
            {filtered.length === 0 ? (
              <div className="py-6 text-center text-sm text-spectre-muted-foreground">
                No results found.
              </div>
            ) : (
              Array.from(groups.entries()).map(([group, groupItems]) => (
                <div key={group}>
                  <div className="px-2 py-1.5 text-xs uppercase tracking-widest text-spectre-muted-foreground">
                    {group}
                  </div>
                  {groupItems.map((item) => {
                    const flatIndex = filtered.indexOf(item);
                    return (
                      <button
                        key={item.id}
                        className={cn(
                          "flex w-full items-center gap-3 px-3 py-2 text-sm text-spectre-foreground transition-colors",
                          flatIndex === selectedIndex
                            ? "bg-spectre-secondary text-spectre-primary"
                            : "hover:bg-spectre-secondary/50"
                        )}
                        onClick={() => {
                          item.onSelect();
                          setOpen(false);
                          setQuery("");
                        }}
                        onMouseEnter={() => setSelectedIndex(flatIndex)}
                      >
                        {item.icon && <span className="shrink-0">{item.icon}</span>}
                        <div className="flex-1 text-left">
                          <div>{item.label}</div>
                          {item.description && (
                            <div className="text-xs text-spectre-muted-foreground">
                              {item.description}
                            </div>
                          )}
                        </div>
                        {item.shortcut && (
                          <kbd className="ml-auto shrink-0 border border-spectre-border px-1.5 py-0.5 text-[10px] uppercase text-spectre-muted-foreground">
                            {item.shortcut}
                          </kbd>
                        )}
                      </button>
                    );
                  })}
                </div>
              ))
            )}
          </div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}
