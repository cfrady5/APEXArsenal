import { focusAreas } from "@/lib/content";

/** Numbered ledger of the ten Strategic Focus Areas. */
export default function FocusAreas() {
  return (
    <ol className="ledger" data-reveal-group>
      {focusAreas.map((area, i) => (
        <li key={area.id} id={`focus-${area.id}`}>
          <span className="ledger__num" aria-hidden="true">
            {String(i + 1).padStart(2, "0")}
          </span>
          <span className="ledger__thumb" aria-hidden="true">
            <img src={area.image} alt="" width={640} height={480} loading="lazy" decoding="async" />
          </span>
          <h4>{area.title}</h4>
          <p>{area.summary}</p>
        </li>
      ))}
    </ol>
  );
}
