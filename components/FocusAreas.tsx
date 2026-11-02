import { focusAreas } from "@/lib/content";
import { links } from "@/lib/links";

/** Numbered ledger of the ten Strategic Focus Areas. */
export default function FocusAreas() {
  const external = links.solicitation.startsWith("http");
  return (
    <ol className="ledger" data-reveal-group>
      {focusAreas.map((area, i) => (
        <li key={area.id} id={`focus-${area.id}`}>
          <span className="ledger__num" aria-hidden="true">
            {String(i + 1).padStart(2, "0")}
          </span>
          <h4>{area.title}</h4>
          <p>{area.summary}</p>
          <a className="ledger__link" href={links.solicitation} target={external ? "_blank" : undefined} rel="noopener noreferrer">
            View Full Definition
          </a>
        </li>
      ))}
    </ol>
  );
}
