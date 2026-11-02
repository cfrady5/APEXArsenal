import type { ReactNode } from "react";

type Props = { eyebrow?: string; title: string; id?: string; children?: ReactNode };

export default function SectionHead({ eyebrow, title, id, children }: Props) {
  return (
    <div className="section-head">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 id={id}>{title}</h2>
      {children}
    </div>
  );
}
