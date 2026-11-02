import Button from "@/components/Button";

export default function NotFound() {
  return (
    <section className="page-hero" aria-labelledby="nf-title">
      <div className="container">
        <div className="page-hero__inner hero-enter">
          <p className="eyebrow">404</p>
          <h1 id="nf-title">That page is not in the Marketplace</h1>
          <p className="lead">The link may be out of date. Start from the home page or contact the Help Desk.</p>
          <div className="actions">
            <Button href="/">Back to Home</Button>
            <Button href="/resources#faq" variant="outline" onDark>
              Read the FAQs
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
