import type { Step } from "@/lib/content";

/** Three-step process timeline. */
export default function Steps({ steps }: { steps: Step[] }) {
  return (
    <ol className="timeline" data-reveal-group>
      {steps.map((step, i) => (
        <li key={step.title}>
          <span className="timeline__num" aria-hidden="true">
            {String(i + 1).padStart(2, "0")}
          </span>
          <h4>{step.title}</h4>
          <p>{step.body}</p>
        </li>
      ))}
    </ol>
  );
}
