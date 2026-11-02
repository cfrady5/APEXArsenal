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
          <div>
            <SectionHead eyebrow="Start With the Strategic Focus Areas" title="Identify where your solution fits" id="start-title" />
            <p>
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
          <div className="tile-grid">
            {[
              ["Air", "/images/tile-air.jpg"],
              ["Cyber", "/images/tile-cyber.jpg"],
              ["Space", "/images/tile-space.jpg"],
              ["C4ISR", "/images/tile-c4isr.jpg"],
            ].map(([label, src]) => (
              <figure key={label} className="wash" style={{ margin: 0, aspectRatio: "1 / 1" }}>
                <img src={src} alt="" width={310} height={294} loading="lazy" />
                <figcaption
                  style={{
                    position: "absolute",
                    left: 14,
                    bottom: 12,
                    zIndex: 1,
                    color: "var(--dod-white)",
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    fontSize: "0.78rem",
                  }}
                >
                  {label}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </Section>

      <Section id="videos" tone="dark" labelledBy="videos-title">
        <SectionHead eyebrow="Explainer Videos" title="Learn the Marketplace in minutes" id="videos-title" />
        <div className="grid grid--3">
          <VideoCard
            title="Get to Know the Marketplace"
            body="Learn what the Marketplace offers, who can participate, and how submission, assessment, and government discovery work."
            poster="/images/jet-portrait.jpg"
            embedUrl={links.videoMarketplace || undefined}
          />
          <VideoCard
            title="Preparing Your Submission"
            body="Learn how to identify solution fit, address the four required pitch elements, and complete your five-minute video and submission form."
            poster="/images/hero-jet.jpg"
            embedUrl={links.videoSubmission || undefined}
          />
          <VideoCard
            title="For Government Users"
            body="Learn how to access the Marketplace, review awardable solutions, and connect with providers."
            poster="/images/operators-wide.jpg"
            embedUrl={links.videoGovernment || undefined}
          />
        </div>
        <div className="links-row">
          <a href="/industry#checklist">Submission Checklist</a>
          <a href={links.solicitation}>Read the Solicitation</a>
        </div>
      </Section>

      <Section id="faq" tone="light" labelledBy="faq-title">
        <SectionHead eyebrow="Frequently Asked Questions" title="Answers before you submit" id="faq-title" />
        <Faq />
      </Section>

      <Section tone="hazy" labelledBy="helpdesk-title">
        <div className="audience">
          <article className="audience__panel">
            <p className="eyebrow">Help Desk</p>
            <h2 id="helpdesk-title" className="h2">
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
          <article className="audience__panel">
            <p className="eyebrow">Office Hours and Assessment Feedback</p>
            <h2 className="h2">Plan your next submission</h2>
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
