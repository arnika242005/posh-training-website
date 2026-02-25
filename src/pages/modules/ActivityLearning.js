import { useEffect } from "react";
import "./ActivityLearning.css";

export default function ActivityLearning() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleEnquiry = () => {
    const phoneNumber = "918951291065"; 
    const email = "ronetterodricks@getstructured.in";
    const subject = "Enquiry: Activity-Based POSH Learning";
    const body = "Hello, I am interested in your Activity-Based Learning module. Please share how we can implement these interactive sessions for our teams.";

    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(body)}`, '_blank');
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section className="module-page activity-page">
      <div className="module-image-hero">
        <img
          src="/images/module7.jpg" 
          alt="Activity Based Learning"
        />
        <div className="image-overlay">
          <h1>Activity-Based Learning</h1>
          <p>
            Moving beyond theory with immersive role-plays, case-study marathons, 
            and gamified assessments that make POSH concepts stick.
          </p>
          <div className="module-meta">
            <span>🎭 Role Plays</span>
            <span>🎲 Gamification</span>
            <span>🧠 Brainstorming</span>
          </div>
        </div>
      </div>

      <div className="module-content">
        <div className="content-grid">
          
          <div className="content-card">
            <h2>Immersive Role-Plays</h2>
            <ul>
              <li>Simulating "First Response" scenarios for Managers.</li>
              <li>Practicing IC interview techniques in a safe environment.</li>
              <li>Demonstrating the difference between 'intent' and 'impact'.</li>
              <li>Rehearsing conciliation vs. inquiry procedures.</li>
            </ul>
          </div>

          <div className="content-card">
            <h2>Gamified Assessments</h2>
            <ul>
              <li>"Spot the Harassment" visual card games.</li>
              <li>Interactive digital quizzes with real-time leaderboards.</li>
              <li>The 'Safety Ladder' group competition.</li>
              <li>Puzzle-solving for complex legal compliance steps.</li>
            </ul>
          </div>

          <div className="content-card">
            <h2>Case-Study Marathons</h2>
            <ul>
              <li>Analyzing real-world redacted judgments.</li>
              <li>Group debates on "Grey Area" workplace scenarios.</li>
              <li>Identifying procedural lapses in sample investigation reports.</li>
              <li>Drafting interim measure recommendations as a team.</li>
            </ul>
          </div>

          <div className="content-card">
            <h2>Behavioral Workshops</h2>
            <ul>
              <li>Unconscious bias identification exercises.</li>
              <li>Power dynamics mapping in corporate hierarchies.</li>
              <li>Active listening and empathy building for IC members.</li>
              <li>Workshop on bystander intervention techniques.</li>
            </ul>
          </div>

          <div className="content-card full-width">
            <h2>Why Activity-Based?</h2>
            <p>
              Studies show that people retain only 10% of what they read, but 90% of 
              what they do. By simulating high-pressure situations and complex 
              ethical dilemmas, we prepare your employees and IC members for the 
              realities of workplace dynamics, ensuring they act with confidence 
              and legal precision.
            </p>
          </div>
        </div>

        <div className="module-cta">
          <button onClick={handleEnquiry}>
            Enquire for Activity-Based Training
          </button>
        </div>
      </div>
    </section>
  );
}