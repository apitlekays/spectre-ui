"use client";

import React from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import { cn } from "../../utils/cn";

export interface SeparatorProps
  extends React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root> {
  label?: string;
}

const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  SeparatorProps
>(({ className, orientation = "horizontal", decorative = true, label, ...props }, ref) => {
  if (label) {
    return (
      <div className={cn("flex items-center gap-3", orientation === "vertical" && "flex-col")}>
        <SeparatorPrimitive.Root
          ref={ref}
          decorative={decorative}
          orientation={orientation}
          className={cn(
            "shrink-0 bg-spectre-border",
            orientation === "horizontal" ? "h-[1px] flex-1" : "w-[1px] flex-1",
            className
          )}
          {...props}
        />
        <span className="text-xs font-mono uppercase tracking-widest text-spectre-muted-foreground">
          {label}
        </span>
        <SeparatorPrimitive.Root
          decorative={decorative}
          orientation={orientation}
          className={cn(
            "shrink-0 bg-spectre-border",
            orientation === "horizontal" ? "h-[1px] flex-1" : "w-[1px] flex-1"
          )}
        />
      </div>
    );
  }

  return (
    <SeparatorPrimitive.Root
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "shrink-0 bg-spectre-border",
        orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        className
      )}
      {...props}
    />
  );
});

Separator.displayName = "Separator";

export { Separator };
