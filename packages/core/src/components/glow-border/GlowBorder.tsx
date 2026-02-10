"use client";

import React from "react";
import { cn } from "../../utils/cn";

export interface GlowBorderProps extends React.HTMLAttributes<HTMLDivElement> {
  color?: string;
  intensity?: "low" | "medium" | "high";
  animated?: boolean;
}

const GlowBorder = React.forwardRef<HTMLDivElement, GlowBorderProps>(
  (
    {
      className,
      color,
      intensity = "medium",
      animated = false,
      children,
      style,
      ...props
    },
    ref
  ) => {
    const glowColor = color || "var(--spectre-primary)";
    const glowSizes = {
      low: "5px",
      medium: "10px",
      high: "20px",
    };

    return (
      <div
        ref={ref}
        className={cn(
          "relative border border-spectre-primary/50",
          animated && "animate-spectre-pulse-glow",
          className
        )}
        style={{
          boxShadow: animated
            ? undefined
            : `0 0 ${glowSizes[intensity]} ${glowColor}40, inset 0 0 ${glowSizes[intensity]} ${glowColor}10`,
          ...style,
        }}
        {...props}
      >
        {children}
      </div>
    );
  }
);

GlowBorder.displayName = "GlowBorder";

export { GlowBorder };
