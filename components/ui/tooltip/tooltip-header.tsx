"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface TooltipHeaderProps {
  /** The main title of the tooltip */
  title: string;
  /** Optional description or subtitle */
  description?: string;
  /** Optional icon to display next to the title */
  icon?: ReactNode;
  /** Optional additional classes to apply to the header */
  className?: string;
}

/**
 * Header component for tooltips. Provides a consistent header structure with optional
 * description and icon support.
 *
 * This component should be used as the first child of TooltipContainer when a header
 * is needed.
 */
export function TooltipHeader({
  title,
  description,
  icon,
  className,
}: TooltipHeaderProps) {
  return (
    <div className={cn("space-y-1", className)}>
      <div className="flex items-center gap-2">
        {icon}
        <h3 className="font-bold text-lg">{title}</h3>
      </div>
      {description && (
        <p className="text-sm text-muted-foreground">{description}</p>
      )}
    </div>
  );
}
