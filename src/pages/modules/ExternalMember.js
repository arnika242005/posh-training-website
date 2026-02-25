import { useEffect } from "react";
import "./ExternalMember.css";

export default function ExternalMember() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleEnquiry = () => {
    const phoneNumber = "918951291065"; 
    const email = "ronetterodricks@getstructured.in";
    const subject = "Enquiry: External Member Services";
    const body = "Hello, I would like to enquire about engaging an experienced External Member for our Internal Committee.";

    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(body)}`, '_blank');
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section className="module-page external-member-page">
      {/* HERO SECTION */}
      <div className="module-image-hero">
        <img
          src="/images/mod5.jpg" 
          alt="External Member Services"
        />
        <div className="image-overlay">
          <h1>External Member Services</h1>
          <p>
            Bridging the gap between corporate culture and legal compliance with 
            unbiased, expert representation on your Internal Committee.
          </p>
          <div className="module-meta">
            <span>⚖️ Social Expertise</span>
            <span>🤝 Unbiased Inquiry</span>
            <span>📄 Annual Support</span>
          </div>
        </div>
      </div>

      {/* CONTENT AREA */}
      <div className="module-content">
        <div className="content-grid">
          
          <div className="content-card">
            <h2>The Legal Mandate</h2>
            <ul>
              <li>Fulfilling the Section 4(2)(c) requirement of the POSH Act.</li>
              <li>Ensuring the presence of a person familiar with sexual harassment issues.</li>
              <li>Providing an objective perspective to internal disputes.</li>
              <li>Validating the integrity of the inquiry process.</li>
            </ul>
          </div>

          <div className="content-card">
            <h2>Inquiry Support</h2>
            <ul>
              <li>Expert guidance on drafting notices and interim orders.</li>
              <li>Maintaining strict adherence to the Principles of Natural Justice.</li>
              <li>Reviewing evidence and cross-examination procedures.</li>
              <li>Drafting final inquiry reports to prevent legal appeals.</li>
            </ul>
          </div>

          

          <div className="content-card">
            <h2>Advisory & Compliance</h2>
            <ul>
              <li>Quarterly reviews of IC activities and documentation.</li>
              <li>Assistance in filing the Annual Report to the District Officer.</li>
              <li>Updating the committee on latest Supreme Court judgments.</li>
              <li>Proactive risk identification within the organization.</li>
            </ul>
          </div>

          <div className="content-card">
            <h2>Conflict Resolution</h2>
            <ul>
              <li>Acting as a neutral mediator where appropriate.</li>
              <li>Ensuring the Respondent and Complainant are treated fairly.</li>
              <li>Managing high-stakes or sensitive leadership-level cases.</li>
              <li>Reducing the risk of "bias" claims against the organization.</li>
            </ul>
          </div>

          <div className="content-card full-width">
            <h2>Why Choose Our External Members?</h2>
            <p>
              Our External Members are seasoned professionals with years of experience 
              handling complex workplace investigations. By bringing in an outsider with 
              social expertise, your organization demonstrates a commitment 
              to transparency and fairness, significantly reducing the likelihood of 
              litigation or reputational damage.
            </p>
          </div>
        </div>

        <div className="module-cta">
          <button onClick={handleEnquiry}>
            Enquire for External Member Services
          </button>
        </div>
      </div>
    </section>
  );
}