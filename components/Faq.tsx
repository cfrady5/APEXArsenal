import { faqs } from "@/lib/content";

export default function Faq() {
  return (
    <div className="faq">
      {faqs.map((item) => (
        <details key={item.q}>
          <summary>{item.q}</summary>
          <div>
            <p>{item.a}</p>
          </div>
        </details>
      ))}
    </div>
  );
}
