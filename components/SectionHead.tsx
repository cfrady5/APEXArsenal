import type { ReactNode } from "react";

type Props = { eyebrow?: string; title: string; id?: string; children?: ReactNode; row?: boolean };

export default function SectionHead({ eyebrow, title, id, children, row }: Props) {
  return (
    <div className={`section-head${row ? " section-head--row" : ""}`} data-reveal>
      <div>
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h2 id={id}>{title}</h2>
      </div>
      {children}
    </div>
  );
}
