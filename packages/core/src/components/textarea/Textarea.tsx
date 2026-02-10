"use client";

import React from "react";
import { cn } from "../../utils/cn";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  hint?: string;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, hint, id, ...props }, ref) => {
    const textareaId = id || label?.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label
            htmlFor={textareaId}
            className="text-xs font-mono uppercase tracking-widest text-spectre-muted-foreground"
          >
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={textareaId}
          className={cn(
            "flex min-h-[80px] w-full border bg-spectre-input px-3 py-2 font-mono text-sm text-spectre-foreground transition-colors",
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

Textarea.displayName = "Textarea";

export { Textarea };
