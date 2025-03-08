"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface TooltipContainerProps {
  /** The tooltip content */
  children: ReactNode;
  /** Optional additional classes to apply to the container */
  className?: string;
}

/**
 * Base container for all tooltips. Provides consistent padding, spacing, and scrolling behavior.
 *
 * This component should be used as the root element for all tooltips to ensure consistent styling
 * and behavior across the application.
 */
export function TooltipContainer({
  children,
  className,
}: TooltipContainerProps) {
  return (
    <div
      className={cn(
        // Base styles
        "space-y-4 text-sm",
        // Typography and list styles
        "[&_ul]:list-disc [&_ul]:pl-4 [&_ol]:list-decimal [&_ol]:pl-4",
        // Link styles
        "[&_a]:text-primary [&_a]:underline [&_a]:hover:text-primary/80",
        // Custom classes
        className
      )}
    >
      {children}
    </div>
  );
}
