import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../utils/cn";

const alertVariants = cva(
  "relative w-full border p-4 font-mono text-sm spectre-hud-corners",
  {
    variants: {
      variant: {
        default: "border-spectre-border bg-spectre-muted text-spectre-foreground",
        info: "border-spectre-primary/30 bg-spectre-primary/5 text-spectre-primary",
        success: "border-spectre-success/30 bg-spectre-success/5 text-spectre-success",
        warning: "border-spectre-warning/30 bg-spectre-warning/5 text-spectre-warning",
        destructive: "border-spectre-destructive/30 bg-spectre-destructive/5 text-spectre-destructive",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {
  title?: string;
  icon?: React.ReactNode;
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant, title, icon, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        role="alert"
        className={cn(alertVariants({ variant, className }))}
        {...props}
      >
        <div className="flex gap-3">
          {icon && <span className="shrink-0 mt-0.5">{icon}</span>}
          <div className="flex-1">
            {title && (
              <h5 className="mb-1 text-sm font-semibold uppercase tracking-widest">
                {title}
              </h5>
            )}
            <div className="text-sm opacity-90">{children}</div>
          </div>
        </div>
      </div>
    );
  }
);

Alert.displayName = "Alert";

export { Alert, alertVariants };
