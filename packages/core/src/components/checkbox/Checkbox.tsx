"use client";

import React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { cn } from "../../utils/cn";

export interface CheckboxProps
  extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {
  label?: string;
}

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(({ className, label, id, ...props }, ref) => {
  const checkboxId = id || label?.toLowerCase().replace(/\s+/g, "-");

  const checkbox = (
    <CheckboxPrimitive.Root
      ref={ref}
      id={checkboxId}
      className={cn(
        "peer h-5 w-5 shrink-0 border border-spectre-border bg-spectre-input transition-colors",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-spectre-ring focus-visible:ring-offset-2 focus-visible:ring-offset-spectre-background",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "data-[state=checked]:border-spectre-primary data-[state=checked]:bg-spectre-primary data-[state=checked]:text-spectre-primary-foreground",
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator className="flex items-center justify-center text-current">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M2 6L5 9L10 3" stroke="currentColor" strokeWidth="2" />
        </svg>
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );

  if (label) {
    return (
      <div className="flex items-center gap-2">
        {checkbox}
        <label
          htmlFor={checkboxId}
          className="font-mono text-sm text-spectre-foreground cursor-pointer peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          {label}
        </label>
      </div>
    );
  }

  return checkbox;
});

Checkbox.displayName = "Checkbox";

export { Checkbox };
