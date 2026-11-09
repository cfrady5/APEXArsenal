import { OPENING_NOTE } from "@/lib/links";

/** Short notice shown beneath grayed-out submit / explore actions. */
export default function OpeningNote({ className = "" }: { className?: string }) {
  return <p className={`opening-note ${className}`.trim()}>{OPENING_NOTE}</p>;
}
