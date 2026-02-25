import { useEffect } from "react";
import "./PolicyDesign.css"; 

export default function PolicyDesign() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleEnquiry = () => {
    const phoneNumber = "918951291065"; 
    const email = "ronetterodricks@getstructured.in";
    const subject = "Enquiry for POSH Policy Design and Review";
    const body = "Hello, I would like to enquire about the Policy Design and Review services for my organization.";

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(body)}`;
    window.open(whatsappUrl, '_blank');

    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section className="module-page awareness-page">

      <div className="module-image-hero">
        <img
          src="/images/mod1.jpg" 
          alt="POSH Policy Design and Review"
        />

        <div className="image-overlay">
          <h1>Policy Design and Review</h1>
          <p>
            Establishing a robust legal framework to ensure safety, compliance, and workplace integrity.
          </p>

          <div className="module-meta">
            <span>💻 Consultation & Drafting</span>
            <span>👥 Employers & HR Leadership</span>
          </div>
        </div>
      </div>

      <div className="module-content">

        <div className="content-grid">

          <div className="content-card">
            <h2>Drafting & Design</h2>
            <ul>
              <li>Draft and design a custom company POSH policy.</li>
              <li>Clearly outline roles and responsibilities of employers and employees.</li>
              <li>Specify behaviors considered inappropriate by the company.</li>
              <li>Establish a clear governance mechanism and process.</li>
            </ul>
          </div>

          <div className="content-card">
            <h2>Supporting Policies</h2>
            <p>We recommend and develop integrated guidelines including:</p>
            <ul>
              <li>Professional Dress Code policy.</li>
              <li>Workplace Relationship guidelines.</li>
              <li>Disciplinary action frameworks.</li>
              <li>Whistleblowing policy development.</li>
            </ul>
          </div>

          <div className="content-card">
            <h2>Review & Revision</h2>
            <ul>
              <li>Comprehensive review of existing POSH policies.</li>
              <li>Revising documentation to meet 2013 Act standards.</li>
              <li>Aligning internal rules with industry best practices.</li>
              <li>Ensuring the policy reflects current organizational culture.</li>
            </ul>
          </div>

          <div className="content-card">
            <h2>Why It Matters</h2>
            <ul>
              <li>Ensures credibility remains intact by adhering to the Act.</li>
              <li>Protects your brand and avoids legal repercussions.</li>
              <li>Prevents fines up to INR 50,000 for non-compliance.</li>
              <li>Builds a foundation for a safer work culture.</li>
            </ul>
          </div>

          <div className="content-card full-width">
            <h2>Delivery & Consultation</h2>
            <p>
              Our experts work closely with your leadership team to create a governance framework 
              that promotes compliance and emphasizes preventive measures. 
              This ensures your organization is protected legally and culturally.
            </p>
          </div>

        </div>

        <div className="module-cta">
          <button onClick={handleEnquiry}>
            Enquire for Policy Design and Review
          </button>
        </div>

      </div>
    </section>
  );
}