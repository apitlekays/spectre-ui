import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../utils/cn";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 border px-2.5 py-0.5 font-mono text-xs uppercase tracking-widest transition-colors",
  {
    variants: {
      variant: {
        default: "border-spectre-border bg-spectre-secondary text-spectre-foreground",
        primary: "border-spectre-primary/30 bg-spectre-primary/10 text-spectre-primary",
        success: "border-spectre-success/30 bg-spectre-success/10 text-spectre-success",
        warning: "border-spectre-warning/30 bg-spectre-warning/10 text-spectre-warning",
        destructive: "border-spectre-destructive/30 bg-spectre-destructive/10 text-spectre-destructive",
        outline: "border-spectre-border bg-transparent text-spectre-muted-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  dot?: boolean;
}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant, dot, children, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(badgeVariants({ variant, className }))}
        {...props}
      >
        {dot && (
          <span className="h-1.5 w-1.5 shrink-0 bg-current animate-pulse" />
        )}
        {children}
      </span>
    );
  }
);

Badge.displayName = "Badge";

export { Badge, badgeVariants };
