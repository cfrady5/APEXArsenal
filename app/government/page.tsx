import type { Metadata } from "next";
import Button from "@/components/Button";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import SectionHead from "@/components/SectionHead";
import Steps from "@/components/Steps";
import { links } from "@/lib/links";

export const metadata: Metadata = {
  title: "For Government",
  description:
    "Find assessed capabilities for your mission. Access the Marketplace, review awardable solutions, and connect with providers.",
};

const governmentSteps = [
  {
    title: "Access the Marketplace",
    body: "Use your federal government account to register or sign in and review solutions available in the Marketplace. Need help with account registration or access? Contact the Help Desk.",
  },
  {
    title: "Review Assessed Solutions",
    body: "Explore awardable solutions by Strategic Focus Area and review videos and supporting solution information to identify capabilities relevant to your mission.",
  },
  {
    title: "Connect With Providers",
    body: "Engage directly with solution providers to discuss your requirements, technical fit, and potential next steps. Explore applicable acquisition pathways and assisted acquisition support where appropriate.",
  },
];

export default function GovernmentPage() {
  return (
    <>
      <PageHero
        eyebrow="For Government"
        title="Find assessed capabilities for your mission"
        intro="Explore solutions that support critical production and sustainment, emerging technology, workforce development, critical materials and components, weapon and space systems, and industrial base readiness."
      >
        <div className="actions">
          <Button href={links.governmentMarketplace}>Access the Government Marketplace</Button>
        </div>
      </PageHero>

      <Section tone="hazy" labelledBy="steps-title">
        <SectionHead title="Three steps to a provider conversation" id="steps-title" row>
          <p>
            Registration help and access questions go to <a href={links.helpDesk}>{links.helpDeskEmail}</a>.
          </p>
        </SectionHead>
        <Steps steps={governmentSteps} />
        <div className="actions" data-reveal>
          <Button href={links.governmentMarketplace}>Access the Government Marketplace</Button>
        </div>
      </Section>

      <div className="wash wash--band" aria-hidden="true">
        <img src="/images/stock/government-band.jpg" alt="" width={1000} height={381} loading="lazy" decoding="async" />
      </div>

      <Section tone="light" labelledBy="awardable-title">
        <div className="split">
          <div data-reveal>
            <p className="eyebrow">Understand What Awardable Means</p>
            <h2 id="awardable-title">Competitively assessed, not pre-awarded</h2>
            <p className="lead" style={{ marginTop: 22 }}>
              Awardable solutions have completed the Marketplace&rsquo;s competitive assessment process and received an
              awardable determination from the Government Selecting Official.
            </p>
            <p style={{ marginTop: 16 }} className="measure">
              An awardable determination does not guarantee funding or a contract. Any acquisition remains subject to
              applicable authorities, requirements, and award terms.
            </p>
          </div>
          <div className="pair" data-reveal>
            <div className="card card--black" style={{ borderTop: 0 }}>
              <span className="card__index">Awardable means</span>
              <p>
                The solution completed compliance review and expert peer assessment, and the Government Selecting
                Official issued an awardable determination. It is available to authorized government users for
                potential acquisition through applicable pathways.
              </p>
            </div>
            <div className="card" style={{ borderTop: 0 }}>
              <span className="card__index">Awardable does not mean</span>
              <p>A contract has been awarded, funding has been committed, or a government purchase is guaranteed.</p>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="hazy" labelledBy="resources-title">
        <SectionHead title="Resources for government users" id="resources-title" />
        <ul className="resource-list" data-reveal-group>
          <li>
            <h4>For Government Users video</h4>
            <p>Learn how to access the Marketplace, review solutions, and connect with providers.</p>
            <Button href="/resources#videos" variant="outline">
              Watch the Government Overview
            </Button>
          </li>
          <li>
            <h4>Strategic Focus Areas</h4>
            <p>Review the mission areas supported by the Marketplace.</p>
            <Button href="/#focus-areas" variant="outline">
              Explore Strategic Focus Areas
            </Button>
          </li>
          <li>
            <h4>Official solicitation</h4>
            <p>Review participation terms, assessment criteria, and acquisition information.</p>
            <Button href={links.solicitation} variant="outline">
              Read the Solicitation
            </Button>
          </li>
        </ul>
      </Section>

      <Section tone="dark" labelledBy="support-title">
        <div className="support" data-reveal-group>
          <div>
            <p className="eyebrow">Access and Acquisition Support</p>
            <h2 id="support-title">Talk to the Marketplace team</h2>
            <p style={{ marginTop: 18, maxWidth: "62ch" }}>
              Contact the Marketplace team for help with government access, the Marketplace process, or questions about
              pursuing a solution.
            </p>
            <div className="links-row">
              <a href={links.helpDesk}>Contact the Help Desk</a>
              <a href={links.officeHours}>Schedule Office Hours</a>
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
