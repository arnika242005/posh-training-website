import { useEffect } from "react";
import "./SupervisorTraining.css";

export default function SupervisorTraining() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    /* Added style={{ marginTop: "-80px" }} to pull the page up and hide the gap */
    /* Ensure -80px matches your Navbar height */
    <section className="module-page supervisor-page" style={{ marginTop: "-80px" }}>

      {/* HERO - Now snaps to top */}
      <div className="supervisor-hero">
        <img
          src="/images/modules2.jpg"
          alt="Supervisor POSH Training"
        />

        <div className="supervisor-overlay">
          <h1>Supervisor Training</h1>
          <p>
            Empowering supervisors to respond to workplace concerns with
            confidence, sensitivity, and legal clarity
          </p>

          <div className="supervisor-meta">
            <span>3 Hours</span>
            <span>Online / Offline / Hybrid</span>
            <span>Supervisors & Managers</span>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="supervisor-content">
        <div className="supervisor-grid">

          <div className="supervisor-card">
            <h2>What This Training Covers</h2>
            <ul>
              <li>Supervisor duties under the POSH Act, 2013</li>
              <li>Recognising early warning signs</li>
              <li>Handling complaints responsibly</li>
              <li>Maintaining confidentiality</li>
              <li>Preventing retaliation</li>
              <li>Legal consequences of mishandling cases</li>
            </ul>
          </div>

          <div className="supervisor-card">
            <h2>Who Should Attend</h2>
            <ul>
              <li>Supervisors and team leads</li>
              <li>People managers</li>
              <li>Department heads</li>
              <li>Senior leadership</li>
            </ul>
          </div>

          <div className="supervisor-card">
            <h2>Training Methodology</h2>
            <ul>
              <li>Interactive instructor-led sessions</li>
              <li>Real-life workplace case studies</li>
              <li>Role-based discussions</li>
              <li>Practical guidance and Q&A</li>
            </ul>
          </div>

          <div className="supervisor-card">
            <h2>Key Outcomes</h2>
            <ul>
              <li>Clear understanding of supervisory role</li>
              <li>Improved decision-making confidence</li>
              <li>Reduced organisational risk</li>
              <li>Healthier workplace culture</li>
            </ul>
          </div>

          <div className="supervisor-card full-width">
            <h2>Delivery & Certification</h2>
            <p>
              Sessions are conducted by POSH-certified professionals with deep
              corporate experience. Participation certificates are provided.
            </p>
          </div>

        </div>

        <div className="supervisor-cta">
          <button>Enquire for Supervisor Training</button>
        </div>
      </div>
    </section>
  );
}