import type { ReactNode } from "react";

type Props = { eyebrow: string; title: string; intro?: string; children?: ReactNode };

export default function PageHero({ eyebrow, title, intro, children }: Props) {
  return (
    <section className="page-hero" aria-labelledby="page-title">
      <div className="container">
        <div className="page-hero__inner">
          <p className="eyebrow">{eyebrow}</p>
          <h1 id="page-title">{title}</h1>
          {intro && <p className="lead">{intro}</p>}
          {children}
        </div>
      </div>
    </section>
  );
}
