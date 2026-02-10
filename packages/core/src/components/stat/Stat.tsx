import React from "react";
import { cn } from "../../utils/cn";

export interface StatProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  value: string | number;
  change?: string;
  changeType?: "positive" | "negative" | "neutral";
  icon?: React.ReactNode;
}

const Stat = React.forwardRef<HTMLDivElement, StatProps>(
  ({ className, label, value, change, changeType = "neutral", icon, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "relative border border-spectre-border bg-spectre-muted p-4 font-mono spectre-hud-corners-full",
          className
        )}
        {...props}
      >
        <div className="flex items-center justify-between">
          <span className="text-xs uppercase tracking-widest text-spectre-muted-foreground">
            {label}
          </span>
          {icon && (
            <span className="text-spectre-primary">{icon}</span>
          )}
        </div>
        <div className="mt-2 text-2xl font-bold text-spectre-foreground tabular-nums">
          {value}
        </div>
        {change && (
          <div className="mt-1 flex items-center gap-1">
            <span
              className={cn(
                "text-xs",
                changeType === "positive" && "text-spectre-success",
                changeType === "negative" && "text-spectre-destructive",
                changeType === "neutral" && "text-spectre-muted-foreground"
              )}
            >
              {change}
            </span>
          </div>
        )}
      </div>
    );
  }
);

Stat.displayName = "Stat";

export { Stat };
