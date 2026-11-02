"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

/**
 * Slim APEX Purple progress bar under the header while a client-side
 * navigation is in flight. Starts on internal link clicks, completes when the
 * pathname changes.
 */
export default function NavigationProgress() {
  const pathname = usePathname();
  const [state, setState] = useState<"idle" | "loading" | "done">("idle");
  const timer = useRef<number | null>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = (e.target as Element | null)?.closest("a");
      if (!a || a.target === "_blank" || a.hasAttribute("download")) return;
      const url = new URL(a.href, location.href);
      if (url.origin !== location.origin) return;
      if (url.pathname === location.pathname) {
        // Same-page anchor: smooth scroll (unless reduced motion) without a route change.
        if (!url.hash) return;
        const target = document.getElementById(decodeURIComponent(url.hash.slice(1)));
        if (!target) return;
        e.preventDefault();
        const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        target.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "start" });
        history.pushState(null, "", url.hash);
        return;
      }
      setState("loading");
      if (timer.current) window.clearTimeout(timer.current);
      timer.current = window.setTimeout(() => setState("idle"), 8000);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  useEffect(() => {
    setState((s) => (s === "loading" ? "done" : s));
    if (timer.current) window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setState("idle"), 500);
    return () => {
      if (timer.current) window.clearTimeout(timer.current);
    };
  }, [pathname]);

  return <div className="nav-progress" data-state={state} aria-hidden="true" />;
}
