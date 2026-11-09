import Link from "next/link";
import { navigation } from "@/lib/content";
import { SUBMISSIONS_CLOSED, links } from "@/lib/links";
import OpeningNote from "@/components/OpeningNote";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <img src="/brand/logo-reversed.svg" alt="APEX Arsenal Marketplace" width={190} height={73} loading="lazy" />
          <p>
            Connecting innovative solutions with mission-driven partners to accelerate adoption and deliver real impact.
          </p>
          <p className="footer__tagline">
            Built for <span>what&rsquo;s next.</span>
          </p>
        </div>

        <div>
          <h3>Explore</h3>
          <ul>
            {navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
            <li>
              <Link href="/#focus-areas">Strategic Focus Areas</Link>
            </li>
            <li>
              <Link href="/resources#faq">FAQs</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3>Participate</h3>
          <ul>
            {SUBMISSIONS_CLOSED ? (
              <>
                <li className="footer__muted">Submit a Solution</li>
                <li className="footer__muted">Manage Your Submission</li>
                <li className="footer__muted">Government Access</li>
              </>
            ) : (
              <>
                <li>
                  <a href={links.submit}>Submit a Solution</a>
                </li>
                <li>
                  <a href={links.manageSubmission}>Manage Your Submission</a>
                </li>
                <li>
                  <a href={links.governmentMarketplace}>Government Access</a>
                </li>
              </>
            )}
            <li>
              <a href={links.solicitation}>Read the Solicitation</a>
            </li>
            <li>
              <a href={links.rubric}>Assessment Rubric</a>
            </li>
          </ul>
          {SUBMISSIONS_CLOSED && <OpeningNote className="opening-note--footer" />}
        </div>

        <div>
          <h3>Get Support</h3>
          <ul>
            <li>
              <a href={links.helpDesk}>{links.helpDeskEmail}</a>
            </li>
            <li>
              <a href={links.officeHours}>Schedule Office Hours</a>
            </li>
          </ul>
          <h3 style={{ marginTop: 28 }}>Sponsor</h3>
          <p style={{ fontSize: "0.95rem" }}>
            Sponsored by the Department of War&rsquo;s Office of Industrial Base Growth.
          </p>
        </div>
      </div>

      <div className="container footer__bottom">
        <span>&copy; {new Date().getFullYear()} APEX Arsenal Marketplace</span>
        <span>An awardable determination does not guarantee funding or a contract.</span>
      </div>
    </footer>
  );
}
