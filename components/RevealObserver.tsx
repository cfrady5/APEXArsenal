"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Reveals elements marked with `data-reveal` as they scroll into view, and
 * staggers the children of `data-reveal-group` containers. Before this runs
 * (no JS, or JS still loading) everything stays visible, because the hidden
 * state is only applied under `html.js`.
 */
export default function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || !("IntersectionObserver" in window)) {
      root.classList.remove("js");
      return;
    }
    root.classList.add("js");

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );

    const prepare = () => {
      document.querySelectorAll<HTMLElement>("[data-reveal-group]").forEach((group) => {
        Array.from(group.children).forEach((child, i) => {
          const el = child as HTMLElement;
          if (!el.hasAttribute("data-reveal")) el.setAttribute("data-reveal", "");
          el.style.setProperty("--reveal-i", String(Math.min(i, 8)));
        });
      });
      document.querySelectorAll<HTMLElement>("[data-reveal]:not(.is-visible):not([data-observed])").forEach((el) => {
        el.setAttribute("data-observed", "");
        io.observe(el);
      });
    };

    prepare();
    const mo = new MutationObserver(prepare);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, [pathname]);

  return null;
}
