import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline" | "link";
  onDark?: boolean;
  glyph?: boolean;
  className?: string;
};

const isExternal = (href: string) => /^(https?:|mailto:|tel:)/.test(href);

export default function Button({ href, children, variant = "primary", onDark, glyph = true, className = "" }: Props) {
  const cls = ["btn", `btn--${variant}`, onDark ? "btn--on-dark" : "", className].filter(Boolean).join(" ");
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
