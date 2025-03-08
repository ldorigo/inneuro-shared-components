"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface TooltipContentProps {
  /** The tooltip content */
  children: ReactNode;
  /** Optional additional classes to apply to the content */
  className?: string;
}

/**
 * Content wrapper for tooltips. Provides consistent spacing and styling for the main content area.
 *
 * This component should be used to wrap the main content sections of a tooltip, between the header
 * and footer components.
 */
export function TooltipContent({ children, className }: TooltipContentProps) {
  return (
    <div
      className={cn(
        // Base styles
        "space-y-4",
        // Custom classes
        className
      )}
    >
      {children}
    </div>
  );
}
