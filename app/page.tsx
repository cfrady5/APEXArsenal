import Link from "next/link";
import Button from "@/components/Button";
import FocusAreas from "@/components/FocusAreas";
import Panel from "@/components/Panel";
import Section from "@/components/Section";
import SectionHead from "@/components/SectionHead";
import Steps from "@/components/Steps";
import { homeSteps } from "@/lib/content";
import { OPENING_NOTE, SUBMISSIONS_CLOSED, links } from "@/lib/links";
import OpeningNote from "@/components/OpeningNote";
import { heroPlaceholder } from "@/lib/placeholders";

export default function HomePage() {
  return (
    <>
      {SUBMISSIONS_CLOSED && (
        <div className="notice-banner" role="status">
          <div className="container notice-banner__inner">{OPENING_NOTE}</div>
        </div>
      )}

      {/* Hero */}
      <section className="hero" aria-labelledby="hero-title">
        <div
          className="hero__media"
          aria-hidden="true"
          style={{ backgroundImage: `url(/images/stock/hero.jpg), url(${heroPlaceholder})` }}
        />
        <div className="container">
          <div className="hero__inner hero-enter">
            <p className="eyebrow">APEX Arsenal Marketplace</p>
            <h1 id="hero-title">Bring your solution to government customers</h1>
            <p className="lead">
              Submit a five-minute video pitch for expert assessment and feedback. Solutions determined to be awardable
              become discoverable by authorized government customers for potential acquisition.
            </p>
            <div className="actions">
              <Button href="/industry">Industry Users</Button>
              <Button href="/government" variant="outline" onDark>
                Government Users
              </Button>
              <Button href="/#how-it-works" variant="link" glyph={false}>
                How It Works
              </Button>
            </div>
            <p className="hero__sponsor">
              Help sustain, modernize, and grow the American defense industrial base, and deliver critical capabilities
              to the warfighter.
            </p>
          </div>
        </div>
      </section>

      {/* Program facts */}
      <div className="facts" aria-label="Program at a glance">
        <div className="container">
          <ul className="facts__list" data-reveal-group>
            <li>
              <span className="facts__value">
                5<small>min</small>
              </span>
              <span className="facts__label">One video pitch per solution</span>
            </li>
            <li>
              <span className="facts__value">10</span>
              <span className="facts__label">Strategic Focus Areas</span>
            </li>
            <li>
              <span className="facts__value">Expert</span>
              <span className="facts__label">Peer assessment with written feedback</span>
            </li>
            <li>
              <span className="facts__value">Direct</span>
              <span className="facts__label">Discovery by authorized government users</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Strategic Focus Areas */}
      <Section id="focus-areas" tone="hazy" labelledBy="focus-title">
        <div className="ledger-layout">
          <div className="ledger-layout__intro" data-reveal>
            <p className="eyebrow">Strategic Focus Areas</p>
            <h2 id="focus-title">What solutions are we seeking</h2>
            <p style={{ marginTop: 20 }} className="measure">
              Does your solution address one or more of these Strategic Focus Areas? Explore the areas, then review the
              solicitation for complete definitions and requirements.
            </p>
            <div className="actions">
              <Button href={links.solicitation}>Read the Solicitation</Button>
            </div>
          </div>
          <FocusAreas />
        </div>
      </Section>

      {/* How It Works */}
      <Section id="how-it-works" tone="dark" labelledBy="how-title">
        <SectionHead eyebrow="Connect. Accelerate. Deliver." title="How it works" id="how-title" row>
          <p className="note">An awardable determination does not guarantee funding or a contract.</p>
        </SectionHead>
        <Steps steps={homeSteps} />
      </Section>

      {/* Audiences */}
      <section aria-labelledby="audience-title">
        <h2 id="audience-title" className="visually-hidden">
          Who the Marketplace serves
        </h2>
        <div className="panels">
          <Panel eyebrow="For Industry" title="Pitch your capability in five minutes" image="/images/stock/panel-industry.jpg">
            <p>
              Present your capability in a five-minute pitch. Receive expert feedback on its technical merit. If your
              solution is determined to be awardable, make it discoverable by government customers seeking capabilities
              that support the defense industrial base.
            </p>
            <div className="actions">
              <Button href="/industry#pitch">Prepare Your Five-Minute Pitch</Button>
            </div>
          </Panel>
          <Panel eyebrow="For Government" title="Find capabilities for your mission" image="/images/stock/panel-government.jpg">
            <p>
              Find competitively assessed capabilities that support your mission. Access the Marketplace, review
              solutions, and connect directly with providers to explore potential acquisition.
            </p>
            <div className="actions">
              <Button href="/government" variant="outline" onDark disabled={SUBMISSIONS_CLOSED}>
                Explore Assessed Solutions
              </Button>
            </div>
            {SUBMISSIONS_CLOSED && <OpeningNote className="opening-note--on-dark" />}
          </Panel>
        </div>
      </section>

      {/* Get Support */}
      <Section tone="hazy" labelledBy="support-title">
        <div className="support" data-reveal-group>
          <div>
            <h2 id="support-title">Questions about fit, submissions, or access?</h2>
            <p style={{ marginTop: 18 }} className="measure">
              Contact the Marketplace team or schedule office hours for process guidance.
            </p>
            <div className="links-row">
              <a href={links.helpDesk}>Contact the Help Desk</a>
              <a href={links.officeHours}>Schedule Office Hours</a>
              <Link href="/resources#faq">Read the FAQs</Link>
            </div>
          </div>
          <div className="card card--black">
            <span className="card__index">Help Desk</span>
            <p>
              <a href={links.helpDesk} style={{ fontWeight: 700, fontSize: "1.1rem" }}>
                {links.helpDeskEmail}
              </a>
            </p>
            <p style={{ color: "var(--smoke)", fontSize: "0.95rem" }}>
              Eligibility, solution fit, submission requirements, account registration, government access, and
              technical issues.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
