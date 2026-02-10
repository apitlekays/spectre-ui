"use client";

import React from "react";
import { cn } from "../../utils/cn";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", label, error, hint, id, ...props }, ref) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label
            htmlFor={inputId}
            className="text-xs font-mono uppercase tracking-widest text-spectre-muted-foreground"
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          type={type}
          className={cn(
            "flex h-10 w-full border bg-spectre-input px-3 py-2 font-mono text-sm text-spectre-foreground transition-colors",
            "placeholder:text-spectre-muted-foreground",
            "focus-visible:outline-none focus-visible:border-spectre-primary focus-visible:shadow-[0_0_10px_var(--spectre-glow-sm)]",
            "disabled:cursor-not-allowed disabled:opacity-50",
            error ? "border-spectre-destructive" : "border-spectre-border",
            className
          )}
          {...props}
        />
        {error && (
          <p className="text-xs font-mono text-spectre-destructive">{error}</p>
        )}
        {hint && !error && (
          <p className="text-xs font-mono text-spectre-muted-foreground">{hint}</p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
