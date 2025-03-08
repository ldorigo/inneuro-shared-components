"use client";

interface DisabledOptionTooltipProps {
  /** The feature name that is not yet implemented */
  featureName: string;
  /** Optional additional explanation about why the feature is not implemented */
  explanation?: string;
  /** The subject line for the sponsorship email */
  emailSubject: string;
}

/**
 * A consistent tooltip component for disabled options across the application.
 * Used to explain why an option is disabled and provide a way to request its implementation.
 */
export function DisabledOptionTooltip({
  featureName,
  explanation,
  emailSubject,
}: DisabledOptionTooltipProps) {
  return (
    <div className="space-y-4">
      <div className="prose prose-sm">
        <p>
          Support for {featureName} is not yet implemented.{" "}
          {explanation ??
            "This requires careful development and thorough testing to ensure accuracy."}
        </p>
      </div>
      <div className="bg-muted/50 rounded-lg p-4 flex flex-col items-center text-center">
        <p className="text-sm font-medium mb-2">
          Want to see this feature implemented?
        </p>
        <p className="text-sm text-muted-foreground mb-3">
          You can sponsor this feature to make it available for the entire
          Belgian freelance community - and optionally display a link to your
          website as "sponsored by xxx"!
        </p>
        <a
          href={`mailto:luca@inneuro.ai?subject=${encodeURIComponent(
            emailSubject
          )}`}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width="20" height="16" x="2" y="4" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
          Contact for Sponsorship
        </a>
      </div>
    </div>
  );
}
