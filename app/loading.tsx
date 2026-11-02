export default function Loading() {
  return (
    <div className="route-loading" role="status" aria-live="polite">
      <img src="/brand/x-icon-dark.svg" alt="" width={72} height={53} className="route-loading__mark" />
      <span className="route-loading__bar" aria-hidden="true" />
      <span className="route-loading__label">Loading</span>
    </div>
  );
}
