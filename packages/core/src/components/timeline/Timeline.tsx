import React from "react";
import { cn } from "../../utils/cn";

export interface TimelineItemData {
  title: string;
  description?: string;
  date?: string;
  status?: "completed" | "active" | "pending";
}

export interface TimelineProps extends React.HTMLAttributes<HTMLDivElement> {
  items: TimelineItemData[];
}

const Timeline = React.forwardRef<HTMLDivElement, TimelineProps>(
  ({ className, items, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("relative space-y-0", className)} {...props}>
        {items.map((item, index) => (
          <div key={index} className="relative flex gap-4 pb-8 last:pb-0">
            {/* Vertical line */}
            {index < items.length - 1 && (
              <div className="absolute left-[9px] top-5 h-full w-[1px] bg-spectre-border" />
            )}
            {/* Diamond marker */}
            <div className="relative shrink-0 mt-1">
              <div
                className={cn(
                  "h-[18px] w-[18px] rotate-45 border-2",
                  item.status === "completed" && "border-spectre-success bg-spectre-success/20",
                  item.status === "active" && "border-spectre-primary bg-spectre-primary/20 shadow-[0_0_8px_var(--spectre-glow-sm)]",
                  (!item.status || item.status === "pending") && "border-spectre-border bg-spectre-muted"
                )}
              />
            </div>
            {/* Content */}
            <div className="flex-1 min-w-0 pt-0.5">
              <div className="flex items-center justify-between gap-2">
                <h4 className="font-mono text-sm font-medium text-spectre-foreground truncate">
                  {item.title}
                </h4>
                {item.date && (
                  <span className="shrink-0 font-mono text-xs text-spectre-muted-foreground">
                    {item.date}
                  </span>
                )}
              </div>
              {item.description && (
                <p className="mt-1 font-mono text-sm text-spectre-muted-foreground">
                  {item.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  }
);

Timeline.displayName = "Timeline";

export { Timeline };
