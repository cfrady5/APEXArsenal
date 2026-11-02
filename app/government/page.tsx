import type { Metadata } from "next";
import Button from "@/components/Button";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import SectionHead from "@/components/SectionHead";
import { links } from "@/lib/links";

export const metadata: Metadata = {
  title: "For Government",
  description:
    "Find assessed capabilities for your mission. Access the Marketplace, review awardable solutions, and connect with providers.",
};

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
        <SectionHead eyebrow="Connect. Accelerate. Deliver." title="Three steps to a provider conversation" id="steps-title" />
        <ol className="steps">
          <li>
            <h4>Access the Marketplace</h4>
            <p>
              Use your federal government account to register or sign in and review solutions available in the
              Marketplace. Need help with account registration or access? Contact{" "}
              <a href={links.helpDesk}>{links.helpDeskEmail}</a>.
            </p>
          </li>
          <li>
            <h4>Review Assessed Solutions</h4>
            <p>
              Explore awardable solutions by Strategic Focus Area and review videos and supporting solution information
              to identify capabilities relevant to your mission.
            </p>
          </li>
          <li>
            <h4>Connect With Providers</h4>
            <p>
              Engage directly with solution providers to discuss your requirements, technical fit, and potential next
              steps. Explore applicable acquisition pathways and assisted acquisition support where appropriate.
            </p>
          </li>
        </ol>
        <div className="actions">
          <Button href={links.governmentMarketplace}>Access the Government Marketplace</Button>
        </div>
      </Section>

      <div className="wash wash--band" aria-hidden="true">
        <img src="/images/operators-wide.jpg" alt="" width={1354} height={511} loading="lazy" />
      </div>

      <Section tone="light" labelledBy="awardable-title">
        <div className="split">
          <div>
            <SectionHead eyebrow="Understand What Awardable Means" title="Competitively assessed, not pre-awarded" id="awardable-title" />
            <p className="lead">
              Awardable solutions have completed the Marketplace&rsquo;s competitive assessment process and received an
              awardable determination from the Government Selecting Official.
            </p>
            <p style={{ marginTop: 16 }}>
              An awardable determination does not guarantee funding or a contract. Any acquisition remains subject to
              applicable authorities, requirements, and award terms.
            </p>
          </div>
          <div className="grid">
            <article className="card">
              <span className="card__index">Awardable means</span>
              <p>
                The solution completed compliance review and expert peer assessment, and the Government Selecting
                Official issued an awardable determination. It is available to authorized government users for
                potential acquisition through applicable pathways.
              </p>
            </article>
            <article className="card">
              <span className="card__index">Awardable does not mean</span>
              <p>A contract has been awarded, funding has been committed, or a government purchase is guaranteed.</p>
            </article>
          </div>
        </div>
      </Section>

      <Section tone="hazy" labelledBy="resources-title">
        <SectionHead eyebrow="Resources for Government Users" title="Get oriented before you sign in" id="resources-title" />
        <ul className="resource-list">
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
        <div className="support">
          <div>
            <p className="eyebrow">Get Access and Acquisition Support</p>
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
