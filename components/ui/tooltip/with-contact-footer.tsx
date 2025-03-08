import * as React from "react";
import { TooltipContainer, TooltipContent, TooltipFooter } from "./";

interface ContactFooterProps {
  notes?: string[];
  sources?: Array<{
    label: string;
    url: string;
  }>;
}

interface TooltipProps {
  children: React.ReactNode;
}

interface ComponentWithDisplayName {
  displayName?: string;
}

const contactFooter: ContactFooterProps = {
  notes: ["Problems with the data calculations or sources? Get in touch"],
  sources: [
    {
      label: "Get in touch",
      url: "mailto:luca@inneuro.ai?subject=Car%20Tax%20Calculator%20-%20Data%20Issue",
    },
  ],
};

/**
 * A higher-order component that wraps tooltips and adds a consistent contact footer.
 * This ensures that all tooltips have a standardized way to contact for data issues.
 */
export function withContactFooter(tooltip: React.ReactNode): React.ReactNode {
  // If the tooltip is not a TooltipContainer, wrap it in one
  if (!isTooltipContainer(tooltip)) {
    return (
      <TooltipContainer>
        <TooltipContent>{tooltip}</TooltipContent>
        <TooltipFooter {...contactFooter} />
      </TooltipContainer>
    );
  }

  // If it's already a TooltipContainer, clone it and add the footer
  const container = tooltip as React.ReactElement<TooltipProps>;
  const children = React.Children.toArray(container.props.children);

  // Find if there's already a TooltipFooter
  const footerIndex = children.findIndex(
    (child) =>
      React.isValidElement(child) &&
      isReactComponentType(child.type, "TooltipFooter")
  );

  if (footerIndex === -1) {
    // If no footer exists, add our contact footer
    return React.cloneElement(container, {
      children: [
        ...children,
        <TooltipFooter key="contact-footer" {...contactFooter} />,
      ],
    });
  }

  // If a footer exists, merge our contact info with it
  const existingFooter = children[
    footerIndex
  ] as React.ReactElement<ContactFooterProps>;
  const updatedChildren = [...children];
  updatedChildren[footerIndex] = React.cloneElement(existingFooter, {
    notes: [
      ...(existingFooter.props.notes || []),
      ...(contactFooter.notes || []),
    ],
    sources: [
      ...(existingFooter.props.sources || []),
      ...(contactFooter.sources || []),
    ],
  });

  return React.cloneElement(container, {
    children: updatedChildren,
  });
}

function isReactComponentType(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  type: string | React.JSXElementConstructor<any>,
  displayName: string
): boolean {
  return (
    typeof type === "function" &&
    (type as ComponentWithDisplayName).displayName === displayName
  );
}

function isTooltipContainer(node: React.ReactNode): boolean {
  return (
    React.isValidElement(node) &&
    isReactComponentType(node.type, "TooltipContainer")
  );
}
