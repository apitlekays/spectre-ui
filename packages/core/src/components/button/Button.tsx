"use client";

import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../utils/cn";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-mono text-sm font-medium uppercase tracking-wider transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-spectre-ring focus-visible:ring-offset-2 focus-visible:ring-offset-spectre-background disabled:pointer-events-none disabled:opacity-50 border",
  {
    variants: {
      variant: {
        primary:
          "border-spectre-primary bg-spectre-primary text-spectre-primary-foreground hover:bg-spectre-primary/90 shadow-[0_0_10px_var(--spectre-glow-sm)]",
        secondary:
          "border-spectre-border bg-spectre-secondary text-spectre-secondary-foreground hover:bg-spectre-secondary/80 hover:border-spectre-primary/50",
        outline:
          "border-spectre-border bg-transparent text-spectre-foreground hover:border-spectre-primary hover:text-spectre-primary",
        ghost:
          "border-transparent bg-transparent text-spectre-muted-foreground hover:bg-spectre-secondary hover:text-spectre-foreground",
        destructive:
          "border-spectre-destructive bg-spectre-destructive text-white hover:bg-spectre-destructive/90",
        link:
          "border-transparent bg-transparent text-spectre-primary underline-offset-4 hover:underline",
      },
      size: {
        sm: "h-8 px-3 text-xs",
        md: "h-10 px-5 text-sm",
        lg: "h-12 px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  loading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, loading, disabled, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        disabled={disabled || loading}
        {...props}
      >
        {loading && (
          <svg
            className="h-4 w-4 animate-spin"
            viewBox="0 0 24 24"
            fill="none"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            />
          </svg>
        )}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
