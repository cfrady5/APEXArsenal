"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Reveals elements marked with `data-reveal` as they scroll into view and
 * staggers the children of `data-reveal-group` containers.
 *
 * Safety first: the hidden state only applies under `html.js`, so content is
 * always visible without JavaScript; a timed fallback reveals anything that is
 * already on screen even if the observer never reports it; and bfcache
 * restores reveal everything immediately.
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

    const revealAll = () => document.querySelectorAll("[data-reveal]").forEach((el) => el.classList.add("is-visible"));

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -6% 0px", threshold: 0.08 },
    );

    const prepare = () => {
      document.querySelectorAll<HTMLElement>("[data-reveal-group]").forEach((group) => {
        Array.from(group.children).forEach((child, i) => {
          const el = child as HTMLElement;
          if (!el.hasAttribute("data-reveal")) el.setAttribute("data-reveal", "");
          el.style.setProperty("--reveal-i", String(Math.min(i, 8)));
        });
      });
      document.querySelectorAll<HTMLElement>("[data-reveal]:not(.is-visible)").forEach((el) => io.observe(el));
    };

    // Reveal anything already on screen if the observer has not reported yet.
    const sweep = () => {
      document.querySelectorAll<HTMLElement>("[data-reveal]:not(.is-visible)").forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight && r.bottom > 0) el.classList.add("is-visible");
      });
    };

    prepare();
    const fallback = window.setTimeout(sweep, 900);
    const mo = new MutationObserver(prepare);
    mo.observe(document.body, { childList: true, subtree: true });
    const onPageShow = (e: PageTransitionEvent) => {
      if (e.persisted) revealAll();
    };
    window.addEventListener("pageshow", onPageShow);

    return () => {
      window.clearTimeout(fallback);
      io.disconnect();
      mo.disconnect();
      window.removeEventListener("pageshow", onPageShow);
    };
  }, [pathname]);

  return null;
}
