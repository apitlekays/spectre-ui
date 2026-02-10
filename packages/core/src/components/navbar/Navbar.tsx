"use client";

import React from "react";
import { cn } from "../../utils/cn";

export interface NavbarProps extends React.HTMLAttributes<HTMLElement> {
  brand?: React.ReactNode;
  ticker?: string;
}

const Navbar = React.forwardRef<HTMLElement, NavbarProps>(
  ({ className, brand, ticker, children, ...props }, ref) => {
    return (
      <nav
        ref={ref}
        className={cn(
          "sticky top-0 z-40 flex h-14 items-center justify-between border-b border-spectre-border bg-spectre-background/95 px-4 font-mono backdrop-blur-sm",
          className
        )}
        {...props}
      >
        <div className="flex items-center gap-4">
          {brand && (
            <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-spectre-primary">
              {brand}
            </div>
          )}
        </div>
        <div className="flex items-center gap-4">
          {children}
        </div>
        {ticker && (
          <div className="absolute bottom-0 left-0 right-0 h-[1px] overflow-hidden">
            <div className="h-full w-full bg-gradient-to-r from-transparent via-spectre-primary/50 to-transparent" />
          </div>
        )}
      </nav>
    );
  }
);

Navbar.displayName = "Navbar";

export { Navbar };
