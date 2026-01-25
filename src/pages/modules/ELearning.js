import { useEffect } from "react";
import "./ELearning.css";

export default function ELearning() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleEnquiry = () => {
    const phoneNumber = "919819304104"; 
    const email = "ronetterodricks@getstructured.in";
    const subject = "Enquiry: POSH E-learning Solutions";
    const body = "Hello, I would like to enquire about your digital POSH training and E-learning modules.";

    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(body)}`, '_blank');
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section className="module-page elearning-page">
      {/* FULL WIDTH HERO - Styled like Policy Design */}
      <div className="module-image-hero">
        <img
          src="/images/mod4.jpg" 
          alt="POSH E-learning Training"
        />
        <div className="image-overlay">
          <h1>E-learning for Employees & Managers</h1>
          <p>
            Interactive, scalable, and self-paced digital training solutions 
            designed to ensure 100% compliance across your entire workforce.
          </p>
          <div className="module-meta">
            <span>⏱ Self-Paced</span>
            <span>📱 Mobile Friendly</span>
            <span>🎓 Certification</span>
          </div>
        </div>
      </div>

      {/* CONTENT AREA */}
      <div className="module-content">
        <div className="content-grid">
          
          <div className="content-card">
            <h2>Interactive Modules</h2>
            <ul>
              <li>Scenario-based learning with real-world examples</li>
              <li>Quizzes and knowledge checks after every chapter</li>
              <li>Engaging video content and storytelling</li>
              <li>Separate tracks for Employees vs. Managers</li>
            </ul>
          </div>

          <div className="content-card">
            <h2>LMS & Tracking</h2>
            <ul>
              <li>Easy integration with your existing LMS (SCORM/xAPI)</li>
              <li>Real-time tracking of completion rates</li>
              <li>Automated reminders for pending users</li>
              <li>Detailed analytics for HR compliance reporting</li>
            </ul>
          </div>

          <div className="content-card">
            <h2>Key Topics Covered</h2>
            <ul>
              <li>Defining Sexual Harassment in the digital age</li>
              <li>Understanding "Hostile Work Environment"</li>
              <li>Step-by-step guide on how to file a complaint</li>
              <li>The role and power of the Internal Committee</li>
            </ul>
          </div>

          <div className="content-card">
            <h2>Benefits of Digital</h2>
            <ul>
              <li>Consistency in training quality across all locations</li>
              <li>Cost-effective for large-scale deployments</li>
              <li>Available in multiple regional languages</li>
              <li>Regular content updates reflecting legal changes</li>
            </ul>
          </div>

          <div className="content-card full-width">
            <h2>Digital Certification</h2>
            <p>
              Upon successful completion of the final assessment, employees receive 
              an automated certificate of completion. This serves as a vital record 
              for your organization's annual POSH compliance report.
            </p>
          </div>
        </div>

        <div className="module-cta">
          <button onClick={handleEnquiry}>
            Enquire for E-learning Demo
          </button>
        </div>
      </div>
    </section>
  );
}