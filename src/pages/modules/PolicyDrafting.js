import { useEffect } from "react";
import "./PolicyDrafting.css";

export default function PolicyDrafting() {
  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="module-page policy-page">

      {/* HERO */}
      <div className="policy-hero">
        <img
          src="/images/policy-drafting.jpg"
          alt="POSH Policy Drafting"
        />

        <div className="policy-overlay">
          <h1>POSH Policy Drafting</h1>
          <p>
            Expert-led drafting and review of POSH policies to ensure legal
            compliance, clarity, and practical implementation across the
            organization.
          </p>

          <div className="policy-meta">
            <span>📄 Custom Drafting</span>
            <span>⚖ POSH Act, 2013 Compliant</span>
            <span>🏢 All Organization Sizes</span>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="policy-content">
        <div className="policy-grid">

          {/* Card 1 */}
          <div className="policy-card">
            <h2>What This Module Covers</h2>
            <ul>
              <li>Drafting a POSH policy aligned with the POSH Act, 2013</li>
              <li>Clear definitions, scope, and applicability</li>
              <li>Complaint redressal procedure and timelines</li>
              <li>Roles and responsibilities of the Internal Committee</li>
              <li>Confidentiality and non-retaliation clauses</li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="policy-card">
            <h2>Who Should Opt for This</h2>
            <ul>
              <li>Organizations without an existing POSH policy</li>
              <li>Companies updating outdated policies</li>
              <li>Startups and growing businesses</li>
              <li>HR and compliance teams</li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className="policy-card">
            <h2>Drafting Approach</h2>
            <ul>
              <li>Understanding organization structure and culture</li>
              <li>Review of existing HR and compliance frameworks</li>
              <li>Customization based on workforce needs</li>
              <li>Legal vetting for statutory compliance</li>
            </ul>
          </div>

          {/* Card 4 */}
          <div className="policy-card">
            <h2>Benefits</h2>
            <ul>
              <li>Clear and legally compliant POSH framework</li>
              <li>Reduced legal and reputational risk</li>
              <li>Improved employee confidence and trust</li>
              <li>Smooth complaint handling process</li>
            </ul>
          </div>

          {/* Full Width */}
          <div className="policy-card full-width">
            <h2>Delivery & Support</h2>
            <p>
              The final POSH policy is delivered in editable format along with
              implementation guidance. Ongoing support for updates and queries
              can be provided as required.
            </p>
          </div>

        </div>

        {/* CTA */}
        <div className="policy-cta">
          <button>Enquire for POSH Policy Drafting</button>
        </div>

      </div>
    </section>
  );
}
