import type { ReactNode } from "react";

type Props = {
  id?: string;
  tone?: "light" | "hazy" | "dark";
  children: ReactNode;
  className?: string;
  labelledBy?: string;
};

export default function Section({ id, tone = "light", children, className = "", labelledBy }: Props) {
  return (
    <section id={id} className={`section section--${tone} ${className}`.trim()} aria-labelledby={labelledBy}>
      <div className="container">{children}</div>
    </section>
  );
}
