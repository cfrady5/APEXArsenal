import type { Step } from "@/lib/content";

export default function Steps({ steps, columns }: { steps: Step[]; columns?: 4 }) {
  return (
    <ol className={`steps ${columns === 4 ? "steps--4" : ""}`.trim()}>
      {steps.map((step) => (
        <li key={step.title}>
          <h4>{step.title}</h4>
          <p>{step.body}</p>
        </li>
      ))}
    </ol>
  );
}
