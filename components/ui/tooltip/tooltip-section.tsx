"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type TooltipSectionVariant =
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "info";

interface TooltipSectionProps {
  /** The section content */
  children: ReactNode;
  /** The visual style variant for the section */
  variant?: TooltipSectionVariant;
  /** Optional title for the section */
  title?: string;
  /** Optional additional classes to apply to the section */
  className?: string;
}

const variantStyles: Record<TooltipSectionVariant, string> = {
  primary: "bg-slate-50 dark:bg-slate-900",
  secondary: "bg-blue-50 dark:bg-blue-950",
  success: "bg-green-50 dark:bg-green-950",
  warning: "bg-amber-50 dark:bg-amber-950",
  info: "bg-purple-50 dark:bg-purple-950",
};

/**
 * Section component for tooltips. Provides consistent styling for different types of content sections.
 *
 * Each section can have a different visual style based on its variant, and optionally include a title.
 * Use this to group related information within a tooltip.
 */
export function TooltipSection({
  children,
  variant = "primary",
  title,
  className,
}: TooltipSectionProps) {
  return (
    <div
      className={cn(
        // Base styles
        "p-3 rounded-md space-y-2",
        // Variant styles
        variantStyles[variant],
        // Custom classes
        className
      )}
    >
      {title && <h4 className="font-medium mb-2">{title}</h4>}
      <div className="text-sm">{children}</div>
    </div>
  );
}
