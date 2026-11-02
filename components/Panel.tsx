import type { ReactNode } from "react";

type Props = { eyebrow: string; title: string; image: string; children: ReactNode };

/** Cinematic image panel with copy anchored to the bottom. */
export default function Panel({ eyebrow, title, image, children }: Props) {
  return (
    <article className="panel">
      <div className="panel__media" aria-hidden="true">
        <img src={image} alt="" loading="lazy" />
      </div>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {children}
    </article>
  );
}
