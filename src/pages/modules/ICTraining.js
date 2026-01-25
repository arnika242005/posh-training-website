import { useEffect } from "react";
import "./ICTraining.css"; 

export default function ICTraining() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleEnquiry = () => {
    const phoneNumber = "919819304104"; 
    const email = "ronetterodricks@getstructured.in";
    const subject = "Enquiry: Internal Committee (IC) Workshop & Training";
    const body = "Hello, I would like to enquire about the advanced IC Training/Workshop for our committee members.";

    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(body)}`, '_blank');
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section className="module-page ic-page">
      <div className="module-image-hero">
        <img src="/images/modules2.jpg" alt="Internal Committee Training" />
        <div className="image-overlay">
          <h1>Internal Committee (IC) Training</h1>
          <p>
            Strengthening IC members with legal clarity, investigation skills, and 
            impartial decision-making confidence.
          </p>
          <div className="module-meta">
            <span>⏱ Full-Day Workshop</span>
            <span>💻 Online / Offline / Hybrid</span>
            <span>👥 IC Members & Presiding Officers</span>
          </div>
        </div>
      </div>

      <div className="module-content">
        <div className="content-grid">
          <div className="content-card fade-up">
            <h2>Roles & Responsibilities</h2>
            <ul>
              <li>Detailed roles of an IC Member & Presiding Officer</li>
              <li>Guidelines for appropriate conduct during investigations</li>
              <li>Essential investigation skills and step-by-step procedures</li>
              <li>Maintaining confidentiality and legal code of conduct</li>
            </ul>
          </div>

          <div className="content-card fade-up">
            <h2>Investigation Techniques</h2>
            <ul>
              <li>Interviewing complainants, respondents, and witnesses</li>
              <li>Methods for evaluating evidence and cross-examination</li>
              <li>Adhering to the principles of "Natural Justice"</li>
              <li>Handling hostile witnesses and sensitive evidence</li>
            </ul>
          </div>

          

          <div className="content-card fade-up">
            <h2>Documentation & Reporting</h2>
            <ul>
              <li>Writing legally sound inquiry reports and interim orders</li>
              <li>Preparing recommendations for the employer</li>
              <li>Record-keeping and annual compliance reporting</li>
              <li>Timelines for completion (90-day inquiry mandate)</li>
            </ul>
          </div>

          <div className="content-card fade-up">
            <h2>Advanced Methodology</h2>
            <ul>
              <li>Roleplays and mock inquiry simulations</li>
              <li>Real-time case study analysis and latest case laws</li>
              <li>Regular updates on legal changes and implications</li>
              <li>Expert consultation for complex or high-profile cases</li>
            </ul>
          </div>

          <div className="content-card full-width fade-up">
            <h2>Certification & Support</h2>
            <p>
              Participants will receive a completion certificate. Our sessions are led by 
              POSH-certified trainers with extensive experience serving as External Members 
              across various industries, ensuring your committee acts with the authority of a Civil Court.
            </p>
          </div>
        </div>

        <div className="module-cta fade-up">
          <button onClick={handleEnquiry}>Enquire for IC Training Workshop</button>
        </div>
      </div>
    </section>
  );
}