import { useEffect } from "react";
import "./Workshops.css";

export default function Workshops() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleEnquiry = () => {
    const phoneNumber = "919819304104"; 
    const email = "ronetterodricks@getstructured.in";
    const subject = "Enquiry: POSH Workshops for Teams";
    const body = "Hello, I would like to enquire about specialized POSH workshops for our Employees, Managers, and Leadership teams.";

    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(body)}`, '_blank');
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section className="module-page workshops-page">
      {/* HERO SECTION */}
      <div className="module-image-hero">
        <img
          src="/images/caro3.jpg" 
          alt="Workshops for Teams"
        />
        <div className="image-overlay">
          <h1>Workshops for Teams</h1>
          <p>
            Engaging, high-impact training sessions tailored for different levels 
            of your organization to foster a culture of respect and safety.
          </p>
          <div className="module-meta">
            <span>👥 Team Focused</span>
            <span>💡 Interactive Q&A</span>
            <span>📍 On-site / Virtual</span>
          </div>
        </div>
      </div>

      {/* CONTENT AREA */}
      <div className="module-content">
        <div className="content-grid">
          
          <div className="content-card">
            <h2>Employee Awareness</h2>
            <ul>
              <li>Understanding what constitutes sexual harassment</li>
              <li>Impact of harassment on workplace productivity</li>
              <li>Rights of the Complainant and the Respondent</li>
              <li>Detailed walkthrough of the redressal mechanism</li>
            </ul>
          </div>

          <div className="content-card">
            <h2>Managerial Training</h2>
            <ul>
              <li>Identifying early warning signs of a hostile environment</li>
              <li>Handling informal disclosures professionally</li>
              <li>Maintaining neutrality and preventing victimization</li>
              <li>Building an "Open-Door" culture for reporting</li>
            </ul>
          </div>

          

          <div className="content-card">
            <h2>Leadership Sensitization</h2>
            <ul>
              <li>Legal liabilities for the employer and Board</li>
              <li>Creating a "Top-Down" culture of zero tolerance</li>
              <li>Strategic importance of workplace safety and brand value</li>
              <li>Overview of compliance and annual reporting</li>
            </ul>
          </div>

          <div className="content-card">
            <h2>Custom Team Sessions</h2>
            <ul>
              <li>Workshops for Field Staff and Regional Sales teams</li>
              <li>Sensitization for Support Staff and blue-collar workers</li>
              <li>Gender-neutrality workshops for modern workplaces</li>
              <li>Scenario-based discussions specific to your industry</li>
            </ul>
          </div>

          <div className="content-card full-width">
            <h2>Impactful Engagement</h2>
            <p>
              Our workshops go beyond simple PowerPoint presentations. We use 
              real-time polling, breakout group discussions, and interactive 
              storytelling to ensure that the message of workplace safety is 
              internalized by every team member.
            </p>
          </div>
        </div>

        <div className="module-cta">
          <button onClick={handleEnquiry}>
            Enquire for Team Workshops
          </button>
        </div>
      </div>
    </section>
  );
}