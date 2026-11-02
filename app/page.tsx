import Link from "next/link";
import Button from "@/components/Button";
import FocusAreas from "@/components/FocusAreas";
import Section from "@/components/Section";
import SectionHead from "@/components/SectionHead";
import Steps from "@/components/Steps";
import { homeSteps } from "@/lib/content";
import { links } from "@/lib/links";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__media" aria-hidden="true">
          <img src="/images/hero-jet.jpg" alt="" width={1800} height={1621} fetchPriority="high" />
        </div>
        <div className="container">
          <div className="hero__inner">
            <p className="eyebrow">APEX Arsenal Marketplace</p>
            <h1 id="hero-title">Bring your solution to government customers</h1>
            <p className="lead">
              Submit a five-minute video pitch for expert assessment and feedback. Solutions determined to be awardable
              become discoverable by authorized government customers for potential acquisition.
            </p>
            <p className="lead">
              Help sustain, modernize, and grow the American defense industrial base, and deliver critical capabilities
              to the warfighter.
            </p>
            <div className="actions">
              <Button href="/#focus-areas">See If Your Solution Fits</Button>
              <Button href="/government" variant="outline" onDark>
                Explore Assessed Solutions
              </Button>
              <Button href="/#how-it-works" variant="link" glyph={false}>
                How It Works
              </Button>
            </div>
            <p className="hero__sponsor">Sponsored by the Department of War&rsquo;s Office of Industrial Base Growth.</p>
            <div className="hero__rule" aria-hidden="true" />
          </div>
        </div>
      </section>

      {/* Strategic Focus Areas */}
      <Section id="focus-areas" tone="hazy" labelledBy="focus-title">
        <SectionHead eyebrow="Strategic Focus Areas" title="What solutions are we seeking" id="focus-title">
          <p>
            Does your solution address one or more of these Strategic Focus Areas? Explore the areas below, then review
            the solicitation for complete definitions and requirements.
          </p>
        </SectionHead>
        <FocusAreas />
        <div className="actions">
          <Button href={links.solicitation}>Read the Solicitation</Button>
        </div>
      </Section>

      {/* How It Works */}
      <Section id="how-it-works" tone="dark" labelledBy="how-title">
        <SectionHead eyebrow="Connect. Accelerate. Deliver." title="How it works" id="how-title" />
        <Steps steps={homeSteps} />
        <p className="note" style={{ marginTop: 32 }}>
          An awardable determination does not guarantee funding or a contract.
        </p>
      </Section>

      {/* Audiences */}
      <Section tone="hazy" labelledBy="audience-title">
        <h2 id="audience-title" className="visually-hidden">
          Who the Marketplace serves
        </h2>
        <div className="audience">
          <article className="audience__panel">
            <p className="eyebrow">For Industry</p>
            <h2 className="h2">Pitch your capability in five minutes</h2>
            <p>
              Present your capability in a five-minute pitch. Receive expert feedback on its technical merit. If your
              solution is determined to be awardable, make it discoverable by government customers seeking capabilities
              that support the defense industrial base.
            </p>
            <div className="actions">
              <Button href="/industry#pitch">Prepare Your Five-Minute Pitch</Button>
            </div>
          </article>
          <article className="audience__panel">
            <p className="eyebrow">For Government</p>
            <h2 className="h2">Find capabilities for your mission</h2>
            <p>
              Find competitively assessed capabilities that support your mission. Access the Marketplace, review
              solutions, and connect directly with providers to explore potential acquisition.
            </p>
            <div className="actions">
              <Button href="/government">Explore Assessed Solutions</Button>
            </div>
          </article>
        </div>
      </Section>

      {/* Get Support */}
      <Section tone="dark" labelledBy="support-title">
        <div className="support">
          <div>
            <p className="eyebrow">Get Support</p>
            <h2 id="support-title">Questions about fit, submissions, or access?</h2>
            <p className="lead" style={{ marginTop: 18, fontWeight: 400 }}>
              Contact the Marketplace team or schedule office hours for process guidance.
            </p>
            <div className="links-row">
              <a href={links.helpDesk}>Contact the Help Desk</a>
              <a href={links.officeHours}>Schedule Office Hours</a>
              <Link href="/resources#faq">Read the FAQs</Link>
            </div>
          </div>
          <div className="support__contact">
            <p className="eyebrow">Help Desk</p>
            <p>
              <a href={links.helpDesk}>{links.helpDeskEmail}</a>
            </p>
            <p style={{ marginTop: 12, color: "var(--smoke-gray)", fontSize: "0.95rem" }}>
              Eligibility, solution fit, submission requirements, account registration, government access, and
              technical issues.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
