import { useEffect } from "react";
import "./RegionalTraining.css";

export default function RegionalTraining() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleEnquiry = () => {
    const phoneNumber = "918951291065"; 
    const email = "ronetterodricks@getstructured.in";
    const subject = "Enquiry: POSH Training in Regional Languages";
    const body = "Hello, I am interested in POSH training sessions delivered in regional languages for our diverse workforce.";

    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(body)}`, '_blank');
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section className="module-page regional-training-page">
      {/* HERO SECTION */}
      <div className="module-image-hero">
        <img
          src="/images/module8.jpg" 
          alt="Regional Language POSH Training"
        />
        <div className="image-overlay">
          <h1>Regional Language Training</h1>
          <p>
            Breaking the language barrier to ensure every employee, regardless 
            of their linguistic background, understands their rights and 
            responsibilities under the POSH Act.
          </p>
          <div className="module-meta">
            <span>🌍 Multiple Languages</span>
            <span>📢 Local Dialects</span>
            <span>🏢 Factory & Site Friendly</span>
          </div>
        </div>
      </div>

      {/* CONTENT AREA */}
      <div className="module-content">
        <div className="content-grid">
          
          <div className="content-card">
            <h2>Multilingual Delivery</h2>
            <ul>
              <li>Training sessions available in English, Hindi, Marathi and Kannada</li>
              <li>Content adapted to local cultural nuances and contexts</li>
              <li>Expert trainers fluent in native languages</li>
              <li>Interactive Q&A sessions in the employees' preferred language</li>
            </ul>
          </div>

          <div className="content-card">
            <h2>Inclusive Learning</h2>
            <ul>
              <li>Special focus on blue-collar and frontline staff</li>
              <li>Simplified legal terminology for better understanding</li>
              <li>Visual-heavy presentations for varying literacy levels</li>
              <li>Bridging the gap between corporate policy and ground reality</li>
            </ul>
          </div>

          {/* Text placeholder removed here for a cleaner grid flow */}

          <div className="content-card">
            <h2>Localized Content</h2>
            <ul>
              <li>Regional language posters and statutory notices</li>
              <li>Handbooks and pocket guides in native scripts</li>
              <li>Case studies reflecting local workplace environments</li>
              <li>Digital content and videos with regional voiceovers</li>
            </ul>
          </div>

          <div className="content-card">
            <h2>Impact & Compliance</h2>
            <ul>
              <li>Ensuring "Substantial Compliance" across all branches</li>
              <li>Higher retention of information through mother-tongue instruction</li>
              <li>Creating a safer environment for reporting grievances</li>
              <li>Documenting training reach for the Annual POSH Report</li>
            </ul>
          </div>

          <div className="content-card full-width">
            <h2>Why Regional Language Training?</h2>
            <p>
              True safety is only possible when communication is crystal clear. 
              By providing training in regional languages, you remove the 
              intimidation factor of legal jargon, empower your entire workforce, 
              and demonstrate a genuine commitment to an inclusive and 
              respectful workplace for everyone.
            </p>
          </div>
        </div>

        <div className="module-cta">
          <button onClick={handleEnquiry}>
            Enquire for Regional Training
          </button>
        </div>
      </div>
    </section>
  );
}