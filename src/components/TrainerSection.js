import "./TrainerSection.css";

export default function TrainerSection() {
  return (
    <section className="trainer-section fade-up">
      <div className="trainer-container">

        {/* MAIN HEADING */}
        <h2 className="trainer-main-heading">About the Trainer</h2>

        <div className="trainer-content">

          {/* LEFT IMAGE */}
          <div className="trainer-image-wrapper">
            <img
              src="/images/trainer.jpg"
              alt="Trainer"
              className="trainer-image"
            />
            <h3 className="trainer-name">Ronette Rodricks</h3>
          </div>

          {/* RIGHT CONTENT */}
          <div className="trainer-text">
            <p>
              Ronette Rodricks is a seasoned POSH trainer and compliance expert
              with over <strong>15 years of experience</strong> in workplace
              sensitization, legal awareness, and organizational compliance.
            </p>

            <p>
              An <strong>ISO-certified training professional</strong>, she has
              worked closely with organizations to implement effective POSH
              frameworks aligned with the POSH Act, 2013. Her sessions focus on
              practical understanding, real-world scenarios, and ethical
              workplace conduct.
            </p>

            {/* CREDENTIAL BADGES */}
            <div className="trainer-badges">
              <span className="trainer-badge">ISO Certified Trainer</span>
              <span className="trainer-badge">POSH Consultant</span>
              <span className="trainer-badge">External IC Member</span>
              <span className="trainer-badge">15+ Years Experience</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
