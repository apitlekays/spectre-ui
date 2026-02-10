"use client";

import React, { useState, useCallback } from "react";
import { cn } from "../../utils/cn";

export interface SidebarProps extends React.HTMLAttributes<HTMLElement> {
  collapsed?: boolean;
  defaultCollapsed?: boolean;
  onCollapsedChange?: (collapsed: boolean) => void;
  width?: string;
  collapsedWidth?: string;
}

const Sidebar = React.forwardRef<HTMLElement, SidebarProps>(
  (
    {
      className,
      collapsed: controlledCollapsed,
      defaultCollapsed = false,
      onCollapsedChange,
      width = "260px",
      collapsedWidth = "60px",
      children,
      ...props
    },
    ref
  ) => {
    const [internalCollapsed, setInternalCollapsed] = useState(defaultCollapsed);
    const isCollapsed = controlledCollapsed ?? internalCollapsed;

    const toggle = useCallback(() => {
      const next = !isCollapsed;
      setInternalCollapsed(next);
      onCollapsedChange?.(next);
    }, [isCollapsed, onCollapsedChange]);

    return (
      <aside
        ref={ref}
        data-collapsed={isCollapsed}
        className={cn(
          "relative flex flex-col border-r border-spectre-border bg-spectre-muted transition-all duration-300 ease-in-out",
          className
        )}
        style={{ width: isCollapsed ? collapsedWidth : width }}
        {...props}
      >
        <button
          onClick={toggle}
          className="absolute -right-3 top-6 z-10 flex h-6 w-6 items-center justify-center border border-spectre-border bg-spectre-background text-spectre-muted-foreground hover:text-spectre-primary hover:border-spectre-primary transition-colors"
          aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            className={cn("transition-transform", isCollapsed && "rotate-180")}
          >
            <path d="M7.5 2L4.5 6L7.5 10" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </button>
        <div className="flex-1 overflow-hidden">
          {children}
        </div>
      </aside>
    );
  }
);

Sidebar.displayName = "Sidebar";

export { Sidebar };
