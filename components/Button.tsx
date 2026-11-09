import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline" | "link";
  onDark?: boolean;
  glyph?: boolean;
  className?: string;
  /** Render as an inert, grayed-out control (no navigation). */
  disabled?: boolean;
};

const isExternal = (href: string) => /^(https?:|mailto:|tel:)/.test(href);

export default function Button({ href, children, variant = "primary", onDark, glyph = true, className = "", disabled }: Props) {
  const cls = ["btn", `btn--${variant}`, onDark ? "btn--on-dark" : "", disabled ? "btn--disabled" : "", className]
    .filter(Boolean)
    .join(" ");
  const inner = (
    <>
      <span>{children}</span>
      {glyph && (
        <span className="btn__glyph" aria-hidden="true">
          ↗
        </span>
      )}
    </>
  );
  if (disabled) {
    return (
      <span className={cls} aria-disabled="true" role="link">
        {inner}
      </span>
    );
  }
  if (isExternal(href)) {
    const external = href.startsWith("http");
    return (
      <a className={cls} href={href} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
        {inner}
      </a>
    );
  }
  return (
    <Link className={cls} href={href}>
      {inner}
    </Link>
  );
}
