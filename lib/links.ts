/**
 * External destinations referenced throughout the site copy.
 * Each one can be overridden without a code change by setting the matching
 * NEXT_PUBLIC_* environment variable (see .env.example). Until a real URL is
 * configured the link falls back to the help desk so no call to action dead-ends.
 */
const HELP_DESK_EMAIL = "success@APEXarsenal.us";

const env = (key: string, fallback: string) => process.env[key] || fallback;

export const links = {
  helpDeskEmail: HELP_DESK_EMAIL,
  helpDesk: `mailto:${HELP_DESK_EMAIL}`,
  solicitation: env("NEXT_PUBLIC_SOLICITATION_URL", `mailto:${HELP_DESK_EMAIL}?subject=Solicitation%20request`),
  rubric: env("NEXT_PUBLIC_RUBRIC_URL", `mailto:${HELP_DESK_EMAIL}?subject=Assessment%20rubric%20request`),
  submit: env("NEXT_PUBLIC_SUBMIT_URL", `mailto:${HELP_DESK_EMAIL}?subject=Solution%20submission`),
  manageSubmission: env("NEXT_PUBLIC_MANAGE_SUBMISSION_URL", `mailto:${HELP_DESK_EMAIL}?subject=Manage%20my%20submission`),
  governmentMarketplace: env("NEXT_PUBLIC_GOVERNMENT_MARKETPLACE_URL", `mailto:${HELP_DESK_EMAIL}?subject=Government%20Marketplace%20access`),
  officeHours: env("NEXT_PUBLIC_OFFICE_HOURS_URL", `mailto:${HELP_DESK_EMAIL}?subject=Office%20hours%20request`),
  videoMarketplace: env("NEXT_PUBLIC_VIDEO_MARKETPLACE_URL", ""),
  videoSubmission: env("NEXT_PUBLIC_VIDEO_SUBMISSION_URL", ""),
  videoGovernment: env("NEXT_PUBLIC_VIDEO_GOVERNMENT_URL", ""),
};

/** True when a link is still pointing at the help-desk fallback. */
export const isFallback = (href: string) => href.startsWith("mailto:");
