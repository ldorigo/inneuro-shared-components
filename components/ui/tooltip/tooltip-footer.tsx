"use client";

import { cn } from "../../lib/utils";
import { ReactNode } from "react";

interface Source {
  /** The text to display for the source */
  label: string;
  /** The URL the source links to */
  url: string;
}

interface TooltipFooterProps {
  /** Optional array of sources to display */
  sources?: Source[];
  /** Optional array of notes to display */
  notes?: string[];
  /** Optional additional content */
  children?: ReactNode;
  /** Optional additional classes to apply to the footer */
  className?: string;
}

/**
 * Footer component for tooltips. Provides a consistent structure for sources and additional notes.
 *
 * This component should be used as the last child of TooltipContainer when sources or notes
 * need to be displayed.
 */
export function TooltipFooter({
  sources,
  notes,
  children,
  className,
}: TooltipFooterProps) {
  const hasContent = sources?.length || notes?.length || children;

  if (!hasContent) return null;

  return (
    <div
      className={cn(
        // Base styles
        "space-y-2 text-xs text-muted-foreground",
        // Custom classes
        className
      )}
    >
      {sources?.length ? (
        <div className="space-y-1">
          <p className="font-medium">Sources:</p>
          <ul className="space-y-1">
            {sources.map((source, index) => (
              <li key={index}>
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  {source.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {notes?.length ? (
        <div className="space-y-1">
          {notes.map((note, index) => (
            <p key={index}>{note}</p>
          ))}
        </div>
      ) : null}

      {children}
    </div>
  );
}
