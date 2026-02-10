import React from "react";
import { cn } from "../../utils/cn";

export interface GridBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
  gridSize?: "sm" | "md" | "lg";
  animated?: boolean;
  fade?: boolean;
}

const gridSizeMap = {
  sm: "20px",
  md: "40px",
  lg: "80px",
};

const GridBackground = React.forwardRef<HTMLDivElement, GridBackgroundProps>(
  ({ className, gridSize = "md", animated = false, fade = true, children, style, ...props }, ref) => {
    const size = gridSizeMap[gridSize];
    return (
      <div
        ref={ref}
        className={cn("relative overflow-hidden", className)}
        style={{
          backgroundImage: `linear-gradient(var(--spectre-border) 1px, transparent 1px), linear-gradient(90deg, var(--spectre-border) 1px, transparent 1px)`,
          backgroundSize: `${size} ${size}`,
          ...(animated
            ? { animation: `spectre-grid-scroll ${size === "20px" ? "2s" : size === "40px" ? "4s" : "6s"} linear infinite` }
            : {}),
          ...style,
        }}
        {...props}
      >
        {animated && (
          <style>{`@keyframes spectre-grid-scroll { 0% { background-position: 0 0; } 100% { background-position: 0 ${size}; } }`}</style>
        )}
        {fade && (
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-spectre-background via-transparent to-spectre-background" />
        )}
        {children}
      </div>
    );
  }
);

GridBackground.displayName = "GridBackground";

export { GridBackground };
