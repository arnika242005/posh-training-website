import { useEffect } from "react";
import "./CaseHandlingWorkshop.css";

export default function CaseHandlingWorkshop() {
  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="module-page case-page">

      {/* HERO */}
      <div className="case-hero">
        <img
          src="/images/case-handling.jpg"
          alt="POSH Case Handling Workshop"
        />

        <div className="case-overlay">
          <h1>Case Handling & Inquiry Workshop</h1>
          <p>
            Practical, step-by-step guidance for Internal Committee members on
            handling complaints, conducting inquiries, and ensuring fair,
            compliant outcomes under the POSH Act.
          </p>

          <div className="case-meta">
            <span>⚖ Inquiry Process</span>
            <span>📂 Case Documentation</span>
            <span>👥 IC Members & HR</span>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="case-content">
        <div className="case-grid">

          {/* Card 1 */}
          <div className="case-card">
            <h2>What This Workshop Covers</h2>
            <ul>
              <li>Receiving and assessing complaints</li>
              <li>Jurisdiction and maintainability checks</li>
              <li>Principles of natural justice</li>
              <li>Inquiry timelines and procedures</li>
              <li>Evidence collection and evaluation</li>
              <li>Drafting inquiry reports and recommendations</li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="case-card">
            <h2>Who Should Attend</h2>
            <ul>
              <li>Internal Committee members</li>
              <li>Presiding Officers</li>
              <li>HR and compliance teams</li>
              <li>Legal and ethics officers</li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className="case-card">
            <h2>Workshop Methodology</h2>
            <ul>
              <li>Real-life POSH case discussions</li>
              <li>Mock inquiries and role plays</li>
              <li>Documentation templates and checklists</li>
              <li>Interactive Q&A sessions</li>
            </ul>
          </div>

          {/* Card 4 */}
          <div className="case-card">
            <h2>Key Takeaways</h2>
            <ul>
              <li>Confidence in handling sensitive cases</li>
              <li>Legally sound inquiry practices</li>
              <li>Reduced procedural errors</li>
              <li>Stronger compliance and credibility</li>
            </ul>
          </div>

          {/* Full Width */}
          <div className="case-card full-width">
            <h2>Delivery & Support</h2>
            <p>
              The workshop is conducted by experienced POSH practitioners.
              Participants receive practical toolkits, templates, and
              post-session support for ongoing case handling needs.
            </p>
          </div>

        </div>

        {/* CTA */}
        <div className="case-cta">
          <button>Enquire for Case Handling Workshop</button>
        </div>

      </div>
    </section>
  );
}
