import { useEffect } from "react";
import "./POSHAudit.css";

export default function POSHAudit() {
  // ✅ Ensures the page opens at the top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // ✅ Unified Enquiry Function (WhatsApp + Email)
  const handleEnquiry = () => {
    const phoneNumber = "919819304104"; 
    const email = "ronetterodricks@getstructured.in";
    const subject = "Enquiry: POSH Audits & Assessments";
    const body = "Hello, I would like to enquire about your POSH Audit and Workplace Assessment services to evaluate our compliance status.";

    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(body)}`, '_blank');
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section className="module-page audit-page">

      {/* HERO SECTION */}
      <div className="audit-hero">
        <img
          src="/images/module3.jpg" // Using module3.jpg for consistency
          alt="POSH Audits & Assessments"
        />

        <div className="audit-overlay">
          <h1>Audits & Assessments</h1>
          <p>
            A structured review to assess compliance with the POSH Act, 2013 and
            strengthen workplace systems, documentation, and processes.
          </p>

          <div className="audit-meta">
            <span>⏱ Half Day / Full Day</span>
            <span>💻 Online / Offline</span>
            <span>👥 HR / Management / IC</span>
          </div>
        </div>
      </div>

      {/* CONTENT AREA */}
      <div className="audit-content">
        <div className="audit-grid">

          <div className="audit-card">
            <h2>What This Audit Covers</h2>
            <ul>
              <li>Review of POSH policy and internal procedures</li>
              <li>Evaluation of Internal Committee (IC) constitution</li>
              <li>Assessment of complaint handling process</li>
              <li>Training records and awareness initiatives</li>
              <li>Documentation and statutory compliance check</li>
            </ul>
          </div>

          <div className="audit-card">
            <h2>Who Should Participate</h2>
            <ul>
              <li>HR and Compliance teams</li>
              <li>Internal Committee members</li>
              <li>Senior management</li>
              <li>Legal and risk management teams</li>
            </ul>
          </div>

          

          <div className="audit-card">
            <h2>Audit Methodology</h2>
            <ul>
              <li>Document and policy review</li>
              <li>Structured compliance checklist</li>
              <li>One-on-one discussions with stakeholders</li>
              <li>Gap analysis and risk identification</li>
            </ul>
          </div>

          <div className="audit-card">
            <h2>Key Outcomes</h2>
            <ul>
              <li>Clear understanding of compliance gaps</li>
              <li>Actionable recommendations for improvement</li>
              <li>Improved legal readiness and risk mitigation</li>
              <li>Reduced compliance and reputational risks</li>
            </ul>
          </div>

          <div className="audit-card full-width">
            <h2>Delivery & Reporting</h2>
            <p>
              A detailed audit report with findings, observations, and practical
              recommendations is shared post-audit. This report serves as a roadmap
              for your organization to achieve 100% legal safety and build a 
              respectful culture.
            </p>
          </div>

        </div>

        {/* ✅ Updated Button with onClick handler */}
        <div className="audit-cta">
          <button onClick={handleEnquiry}>
            Enquire for POSH Audits & Assessments
          </button>
        </div>

      </div>
    </section>
  );
}