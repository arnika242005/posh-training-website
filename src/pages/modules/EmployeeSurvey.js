import { useEffect } from "react";
import "./EmployeeSurvey.css";

export default function EmployeeSurvey() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleEnquiry = () => {
    const phoneNumber = "919819304104"; 
    const email = "ronetterodricks@getstructured.in";
    const subject = "Enquiry: POSH Employee Culture Survey";
    const body = "Hello, I am interested in conducting an anonymous POSH employee survey.";

    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(body)}`, '_blank');
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    /* This class MUST match your CSS .survey-page selector */
    <div className="module-page survey-page">
      <div className="module-image-hero">
        <img src="/images/module10.jpg" alt="Employee Survey" />
        <div className="image-overlay">
          <h1>Employee Culture Survey</h1>
          <p>Gain deep insights into your workplace climate with anonymous, data-driven surveys.</p>
          <div className="module-meta">
            <span>🔒 100% Anonymous</span>
            <span>📊 Data Insights</span>
            <span>📈 Culture Mapping</span>
          </div>
        </div>
      </div>

      <div className="module-content">
        <div className="content-grid">
          <div className="content-card">
            <h2>Safety Perception Mapping</h2>
            <ul>
              <li>Measuring safety across different work settings</li>
              <li>Identifying high-risk zones or departments</li>
              <li>Assessing trust in the Internal Committee (IC)</li>
            </ul>
          </div>

          <div className="content-card">
            <h2>Awareness Gap Analysis</h2>
            <ul>
              <li>Testing knowledge of harassment definitions</li>
              <li>Checking if employees know how to reach the IC</li>
              <li>Gauging awareness of the company's POSH policy</li>
            </ul>
          </div>

          <div className="content-card">
            <h2>Anonymous Feedback</h2>
            <ul>
              <li>Secure platforms ensuring respondent privacy</li>
              <li>Open-ended sections for qualitative feedback</li>
              <li>Encouraging reporting without fear of retaliation</li>
            </ul>
          </div>

          <div className="content-card">
            <h2>Actionable Analytics</h2>
            <ul>
              <li>Comprehensive reports with visual benchmarks</li>
              <li>Executive summaries for Leadership and HR</li>
              <li>Strategic recommendations for improvement</li>
            </ul>
          </div>

          <div className="content-card full-width">
            <h2>Why Conduct a Survey?</h2>
            <p>
              Compliance isn't just about having a policy; it's about the lived experience of your employees. 
              A POSH survey acts as an early warning system to address cultural issues.
            </p>
          </div>
        </div>

        <div className="module-cta">
          <button onClick={handleEnquiry}>Enquire for Employee Survey</button>
        </div>
      </div>
    </div>
  );
}