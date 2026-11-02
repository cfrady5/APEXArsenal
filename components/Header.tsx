"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navigation } from "@/lib/content";
import { links } from "@/lib/links";
import Button from "./Button";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const current = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <>
      <header className="header" data-scrolled={scrolled}>
        <div className="container header__inner">
          <Link href="/" className="header__logo" aria-label="APEX Arsenal Marketplace home">
            <img src="/brand/logo-primary.svg" alt="APEX Arsenal Marketplace" width={156} height={60} />
          </Link>

          <nav className="header__nav" aria-label="Primary">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} aria-current={current(item.href) ? "page" : undefined}>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="header__cta">
            <Button href={links.submit}>Submit a Solution</Button>
          </div>

          <button
            type="button"
            className="header__toggle"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="header__toggle-bars" aria-hidden="true" />
            Menu
          </button>
        </div>

        <div id="mobile-nav" className="header__mobile" data-open={open}>
          <div>
            <div className="container">
              <ul>
                {navigation.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} aria-current={current(item.href) ? "page" : undefined} tabIndex={open ? 0 : -1}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <Button href={links.submit}>Submit a Solution</Button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
