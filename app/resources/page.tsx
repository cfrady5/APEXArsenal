import type { Metadata } from "next";
import Button from "@/components/Button";
import Faq from "@/components/Faq";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import SectionHead from "@/components/SectionHead";
import VideoCard from "@/components/VideoCard";
import { links } from "@/lib/links";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Guidance for assessing solution fit, preparing a pitch, understanding assessment results, and exploring capabilities for a government mission.",
};

const tiles = [
  ["Workforce", "/images/stock/tile-workforce.jpg"],
  ["Microelectronics", "/images/stock/tile-microelectronics.jpg"],
  ["Emerging Technology", "/images/stock/tile-emerging-technology.jpg"],
  ["Sustainment", "/images/stock/tile-sustainment.jpg"],
];

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Prepare your submission or find your next step"
        intro="Find guidance for assessing solution fit, preparing a pitch, understanding assessment results, and exploring capabilities for a government mission."
      >
        <div className="actions">
          <Button href="#videos" variant="outline" onDark>
            Explainer Videos
          </Button>
          <Button href="#faq" variant="outline" onDark>
            Frequently Asked Questions
          </Button>
        </div>
      </PageHero>

      <Section tone="hazy" labelledBy="start-title">
        <div className="split">
          <div data-reveal>
            <p className="eyebrow">Start With the Strategic Focus Areas</p>
            <h2 id="start-title">Identify where your solution fits</h2>
            <p style={{ marginTop: 20 }} className="measure">
              Review the ten Strategic Focus Areas to identify where your solution fits. Select the predominant area in
              your submission form and explain relevant alignment in your video. Read the solicitation for complete
              definitions and requirements.
            </p>
            <div className="actions">
              <Button href="/#focus-areas">Explore Strategic Focus Areas</Button>
              <Button href={links.solicitation} variant="outline">
                Read the Solicitation
              </Button>
            </div>
          </div>
          <div className="tile-grid" data-reveal-group>
            {tiles.map(([label, src]) => (
              <figure key={label} className="wash" style={{ margin: 0 }}>
                <img src={src} alt="" width={640} height={640} loading="lazy" decoding="async" />
                <figcaption className="wash__caption">{label}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </Section>

      <Section id="videos" tone="dark" labelledBy="videos-title">
        <SectionHead eyebrow="Explainer Videos" title="Learn the Marketplace in minutes" id="videos-title" />
        <div className="grid grid--3" data-reveal-group>
          <VideoCard
            title="Get to Know the Marketplace"
            body="Learn what the Marketplace offers, who can participate, and how submission, assessment, and government discovery work."
            poster="/images/stock/poster-marketplace.jpg"
            embedUrl={links.videoMarketplace || undefined}
          />
          <VideoCard
            title="Preparing Your Submission"
            body="Learn how to identify solution fit, address the four required pitch elements, and complete your five-minute video and submission form."
            poster="/images/stock/poster-submission.jpg"
            embedUrl={links.videoSubmission || undefined}
          />
          <VideoCard
            title="For Government Users"
            body="Learn how to access the Marketplace, review awardable solutions, and connect with providers."
            poster="/images/stock/poster-government.jpg"
            embedUrl={links.videoGovernment || undefined}
          />
        </div>
        <div className="links-row" data-reveal>
          <a href="/industry#checklist">Submission Checklist</a>
          <a href={links.solicitation}>Read the Solicitation</a>
        </div>
      </Section>

      <Section id="faq" tone="light" labelledBy="faq-title">
        <SectionHead title="Frequently asked questions" id="faq-title" />
        <Faq />
      </Section>

      <Section tone="hazy" labelledBy="helpdesk-title">
        <div className="grid grid--2" data-reveal-group>
          <article className="card card--light">
            <span className="card__index">Help Desk</span>
            <h2 id="helpdesk-title" className="h2" style={{ fontSize: "clamp(1.7rem, 3vw, 2.4rem)" }}>
              Questions? Email the team
            </h2>
            <p>
              Questions about eligibility, solution fit, submission requirements, account registration, government
              access, or a technical issue? Email <a href={links.helpDesk}>{links.helpDeskEmail}</a>.
            </p>
            <div className="actions">
              <Button href={links.helpDesk}>Contact the Help Desk</Button>
            </div>
          </article>
          <article className="card card--light">
            <span className="card__index">Office Hours and Assessment Feedback</span>
            <h2 className="h2" style={{ fontSize: "clamp(1.7rem, 3vw, 2.4rem)" }}>
              Plan your next submission
            </h2>
            <p>
              Connect with the Marketplace team for process guidance or a one-on-one session to review assessment
              feedback and plan a revised submission. Feedback sessions are offered through APEX Arsenal Real People
              Time.
            </p>
            <div className="actions">
              <Button href={links.officeHours}>Schedule Office Hours</Button>
            </div>
          </article>
        </div>
      </Section>
    </>
  );
}
