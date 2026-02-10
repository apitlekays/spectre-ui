"use client";

import React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";
import { cn } from "../../utils/cn";

export interface SwitchProps
  extends React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root> {
  label?: string;
}

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitive.Root>,
  SwitchProps
>(({ className, label, id, ...props }, ref) => {
  const switchId = id || label?.toLowerCase().replace(/\s+/g, "-");

  const switchEl = (
    <SwitchPrimitive.Root
      ref={ref}
      id={switchId}
      className={cn(
        "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center border border-spectre-border transition-colors",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-spectre-ring focus-visible:ring-offset-2 focus-visible:ring-offset-spectre-background",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "data-[state=checked]:border-spectre-primary data-[state=checked]:bg-spectre-primary/20",
        "data-[state=unchecked]:bg-spectre-input",
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        className={cn(
          "pointer-events-none block h-4 w-4 border border-spectre-border bg-spectre-muted-foreground transition-transform",
          "data-[state=checked]:translate-x-[22px] data-[state=checked]:bg-spectre-primary data-[state=checked]:border-spectre-primary data-[state=checked]:shadow-[0_0_8px_var(--spectre-glow-sm)]",
          "data-[state=unchecked]:translate-x-1"
        )}
      />
    </SwitchPrimitive.Root>
  );

  if (label) {
    return (
      <div className="flex items-center gap-2">
        {switchEl}
        <label
          htmlFor={switchId}
          className="font-mono text-sm text-spectre-foreground cursor-pointer peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          {label}
        </label>
      </div>
    );
  }

  return switchEl;
});

Switch.displayName = "Switch";

export { Switch };
