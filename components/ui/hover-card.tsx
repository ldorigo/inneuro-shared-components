"use client";

import * as React from "react";
import * as HoverCardPrimitive from "@radix-ui/react-hover-card";

import { cn } from "../../lib/utils";

const HoverCard = HoverCardPrimitive.Root;

const HoverCardTrigger = HoverCardPrimitive.Trigger;

const HoverCardContent = React.forwardRef<
  React.ElementRef<typeof HoverCardPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Content> & {
    hideFooter?: boolean;
    noPadding?: boolean;
  }
>(
  (
    {
      className,
      align = "center",
      sideOffset = 8,
      children,
      hideFooter = false,
      noPadding = false,
      ...props
    },
    ref
  ) => {
    const [boundary, setBoundary] = React.useState<Element | null>(null);

    React.useEffect(() => {
      setBoundary(document.documentElement);
    }, []);

    return (
      <HoverCardPrimitive.Content
        ref={ref}
        align={align}
        sideOffset={sideOffset}
        side="right"
        avoidCollisions={true}
        collisionPadding={8}
        collisionBoundary={boundary}
        className={cn(
          // Base styles
          "z-50 rounded-md border bg-popover text-popover-foreground shadow-md outline-none",
          // Padding - conditionally applied
          !noPadding && "p-4",
          // Default width for simple tooltips
          "w-[min(95vw,400px)] sm:w-[min(85vw,450px)]",
          // Scrolling behavior
          "overflow-y-auto max-h-[calc(100vh-64px)]",
          // Animations with improved side handling
          "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
          "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
          // Wide variant - using more reasonable max widths
          "[&[data-wide=true]]:!w-[min(95vw,800px)]",
          "[&[data-wide=true]]:!sm:w-[min(90vw,900px)]",
          "[&[data-wide=true]]:!md:w-[min(85vw,1000px)]",
          className
        )}
        {...props}
      >
        {children}
        {!hideFooter && (
          <div
            className={cn(
              "border-t text-xs text-muted-foreground",
              !noPadding ? "mt-4 pt-3" : "mt-0 p-4 bg-muted/50"
            )}
          >
            <p>
              Problems with the data, calculations, or sources?{" "}
              <a
                href="mailto:luca@inneuro.ai?subject=Car%20Tax%20Calculator%20-%20Data%20Issue"
                className="text-primary hover:underline"
              >
                Get in touch
              </a>
            </p>
          </div>
        )}
      </HoverCardPrimitive.Content>
    );
  }
);
HoverCardContent.displayName = HoverCardPrimitive.Content.displayName;

export { HoverCard, HoverCardTrigger, HoverCardContent };
