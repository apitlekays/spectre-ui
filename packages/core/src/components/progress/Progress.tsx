"use client";

import React from "react";
import { cn } from "../../utils/cn";

export interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number;
  max?: number;
  label?: string;
  showValue?: boolean;
  variant?: "default" | "success" | "warning" | "destructive";
}

const variantColors = {
  default: "bg-spectre-primary shadow-[0_0_8px_var(--spectre-glow-sm)]",
  success: "bg-spectre-success",
  warning: "bg-spectre-warning",
  destructive: "bg-spectre-destructive",
};

const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  ({ className, value = 0, max = 100, label, showValue, variant = "default", ...props }, ref) => {
    const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

    return (
      <div ref={ref} className={cn("flex flex-col gap-1.5", className)} {...props}>
        {(label || showValue) && (
          <div className="flex items-center justify-between">
            {label && (
              <span className="font-mono text-xs uppercase tracking-widest text-spectre-muted-foreground">
                {label}
              </span>
            )}
            {showValue && (
              <span className="font-mono text-xs tabular-nums text-spectre-muted-foreground">
                {Math.round(percentage)}%
              </span>
            )}
          </div>
        )}
        <div
          className="relative h-2 w-full overflow-hidden border border-spectre-border bg-spectre-secondary"
          role="progressbar"
          aria-valuenow={value}
          aria-valuemin={0}
          aria-valuemax={max}
        >
          <div
            className={cn("h-full transition-all duration-500 ease-out", variantColors[variant])}
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    );
  }
);

Progress.displayName = "Progress";

export { Progress };
