import type { Step } from "@/lib/content";

/** Numbered editorial rows (title left, explanation right). */
export default function Rows({ items }: { items: Step[] }) {
  return (
    <ol className="rows" data-reveal-group>
      {items.map((item) => (
        <li key={item.title}>
          <h4>{item.title}</h4>
          <p>{item.body}</p>
        </li>
      ))}
    </ol>
  );
}
