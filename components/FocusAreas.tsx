import { focusAreas } from "@/lib/content";
import { links } from "@/lib/links";

export default function FocusAreas() {
  return (
    <div className="focus-grid">
      {focusAreas.map((area, i) => (
        <article className="card" key={area.id} id={`focus-${area.id}`}>
          <span className="card__index">{String(i + 1).padStart(2, "0")}</span>
          <h4>{area.title}</h4>
          <p>{area.summary}</p>
          <a className="card__link" href={links.solicitation} target={links.solicitation.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
            View Full Definition
          </a>
        </article>
      ))}
    </div>
  );
}
