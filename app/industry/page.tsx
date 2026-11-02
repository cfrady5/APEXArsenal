import type { Metadata } from "next";
import Button from "@/components/Button";
import FocusAreas from "@/components/FocusAreas";
import PageHero from "@/components/PageHero";
import Rows from "@/components/Rows";
import Section from "@/components/Section";
import SectionHead from "@/components/SectionHead";
import Steps from "@/components/Steps";
import { industrySteps, pitchElements, submissionChecklist } from "@/lib/content";
import { links } from "@/lib/links";

export const metadata: Metadata = {
  title: "For Industry",
  description:
    "Turn your capability into a five-minute pitch. Streamlined submission, expert assessment and feedback, and potential visibility to authorized government customers.",
};

export default function IndustryPage() {
  return (
    <>
      <PageHero
        eyebrow="For Industry"
        title="Turn your capability into a five-minute pitch"
        intro="Show how your solution addresses a Strategic Focus Area and strengthens the American defense industrial base. The Marketplace provides a streamlined submission process, expert assessment and feedback, and potential visibility to authorized government customers."
      >
        <div className="actions">
          <Button href={links.submit}>Submit a Solution</Button>
          <Button href="#fit" variant="outline" onDark>
            See If Your Solution Fits
          </Button>
          <Button href="#pitch" variant="link" glyph={false}>
            Prepare Your Five-Minute Pitch
          </Button>
        </div>
      </PageHero>

      <Section id="fit" tone="hazy" labelledBy="fit-title">
        <div className="ledger-layout">
          <div className="ledger-layout__intro" data-reveal>
            <p className="eyebrow">Strategic Focus Areas</p>
            <h2 id="fit-title">See if your solution fits</h2>
            <p style={{ marginTop: 20 }} className="measure">
              The Marketplace seeks hardware, software, systems, components, materials, manufacturing capabilities,
              workforce solutions, and services aligned with its Strategic Focus Areas.
            </p>
            <p className="note" style={{ marginTop: 24 }}>
              A solution may relate to more than one focus area. Select its predominant focus area in the submission
              form and explain relevant alignment in your pitch.
            </p>
          </div>
          <FocusAreas />
        </div>
      </Section>

      <Section tone="light" labelledBy="who-title">
        <div className="split">
          <div data-reveal>
            <h2 id="who-title">Who can participate</h2>
            <p className="lead" style={{ marginTop: 22 }}>
              U.S.-based businesses of all sizes, traditional and nontraditional defense contractors, new entrants,
              universities, nonprofit organizations, and individuals are welcome to participate.
            </p>
            <p style={{ marginTop: 16 }} className="measure">
              Foreign universities, research institutions, and entities may submit subject to applicable international
              and export laws. Review the solicitation for eligibility requirements.
            </p>
            <div className="links-row">
              <a href={links.solicitation}>Read the Solicitation</a>
            </div>
          </div>
          <div className="wash wash--tall" aria-hidden="true" data-reveal>
            <img src="/images/jet-portrait.jpg" alt="" width={834} height={933} loading="lazy" />
          </div>
        </div>
      </Section>

      <Section tone="hazy" labelledBy="expect-title">
        <SectionHead title="What you can expect" id="expect-title" />
        <ul className="rule-list" data-reveal-group>
          <li>
            <h4>A focused submission</h4>
            <p>Present one solution per video, no longer than five minutes, and complete the online submission form.</p>
          </li>
          <li>
            <h4>Expert assessment and feedback</h4>
            <p>
              Receive ratings and assessor comments on your solution, whether it is determined to be awardable or
              non-awardable.
            </p>
          </li>
          <li>
            <h4>Potential government discovery</h4>
            <p>
              Awardable solutions are available to authorized government customers for consideration through applicable
              acquisition pathways.
            </p>
          </li>
        </ul>
      </Section>

      <Section id="how-it-works" tone="dark" labelledBy="how-title">
        <SectionHead title="How it works" id="how-title" row>
          <p className="note">
            An awardable determination does not guarantee funding or a contract. You are responsible for the costs of
            preparing and submitting your materials.
          </p>
        </SectionHead>
        <Steps steps={industrySteps} />
      </Section>

      <Section id="pitch" tone="light" labelledBy="pitch-title">
        <SectionHead eyebrow="Four Required Elements" title="Prepare your five-minute pitch" id="pitch-title" row>
          <p>
            Address all four required content elements in your video. Use the solicitation and assessment rubric to
            guide your preparation.
          </p>
        </SectionHead>
        <Rows items={pitchElements} />
        <div className="links-row">
          <a href={links.solicitation}>Read the Solicitation</a>
          <a href={links.rubric}>View Assessment Rubric</a>
        </div>
      </Section>

      <Section id="checklist" tone="hazy" labelledBy="checklist-title">
        <SectionHead title="Submission checklist" id="checklist-title" row>
          <p>
            Review the full solicitation before submitting. It governs submission requirements, assessment criteria, and
            participation terms.
          </p>
        </SectionHead>
        <ul className="checklist" data-reveal-group>
          {submissionChecklist.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div className="actions" data-reveal>
          <Button href={links.submit}>Submit a Solution</Button>
          <Button href={links.manageSubmission} variant="outline">
            Already participating? Manage Your Submission
          </Button>
        </div>
      </Section>

      <Section tone="dark" labelledBy="help-title">
        <div className="support" data-reveal-group>
          <div>
            <p className="eyebrow">Before or After Submission</p>
            <h2 id="help-title">Office hours and feedback sessions</h2>
            <p style={{ marginTop: 18, maxWidth: "62ch" }}>
              Schedule office hours for process guidance or a feedback session to review assessment comments. If your
              solution is non-awardable, use the feedback to address weaknesses and prepare a resubmission for a
              subsequent collection period.
            </p>
            <div className="links-row">
              <a href={links.officeHours}>Schedule Office Hours</a>
              <a href={links.helpDesk}>Contact the Help Desk</a>
              <a href="/resources#faq">Read the FAQs</a>
            </div>
          </div>
          <div className="support__contact">
            <p className="eyebrow">Help Desk</p>
            <p>
              <a href={links.helpDesk}>{links.helpDeskEmail}</a>
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
