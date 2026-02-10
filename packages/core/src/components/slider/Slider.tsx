"use client";

import React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { cn } from "../../utils/cn";

export interface SliderProps
  extends React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> {
  label?: string;
}

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  SliderProps
>(({ className, label, id, ...props }, ref) => {
  const sliderId = id || label?.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label
          htmlFor={sliderId}
          className="text-xs font-mono uppercase tracking-widest text-spectre-muted-foreground"
        >
          {label}
        </label>
      )}
      <SliderPrimitive.Root
        ref={ref}
        id={sliderId}
        className={cn(
          "relative flex w-full touch-none select-none items-center",
          className
        )}
        {...props}
      >
        <SliderPrimitive.Track className="relative h-1.5 w-full grow overflow-hidden bg-spectre-secondary border border-spectre-border">
          <SliderPrimitive.Range className="absolute h-full bg-spectre-primary shadow-[0_0_8px_var(--spectre-glow-sm)]" />
        </SliderPrimitive.Track>
        <SliderPrimitive.Thumb className="block h-4 w-4 border-2 border-spectre-primary bg-spectre-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-spectre-ring focus-visible:ring-offset-2 focus-visible:ring-offset-spectre-background disabled:pointer-events-none disabled:opacity-50 hover:shadow-[0_0_10px_var(--spectre-glow-sm)]" />
      </SliderPrimitive.Root>
    </div>
  );
});

Slider.displayName = "Slider";

export { Slider };
