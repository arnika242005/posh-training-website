import "./WhatIsPOSH.css";

export default function WhatIsPOSH() {
  return (
    <section className="what-is-posh">
      <div className="container">

        {/* Heading - Motion Removed */}
        <h2 className="posh-heading">
          What is POSH?
        </h2>

        {/* Description - Motion Removed */}
        <p className="posh-description">
          The POSH Act (Prevention of Sexual Harassment Act, 2013) is a law that
          ensures a safe, respectful, and harassment‑free workplace for all
          employees. It outlines clear guidelines for prevention, awareness,
          redressal mechanisms, and responsibilities of organizations.
        </p>

        {/* Boxes / Cards */}
        <div className="posh-grid">

          {/* Card 1 - Motion Removed */}
          <div className="posh-card">
            <h3>Objective of POSH</h3>
            <p>
              To create safe working environments by preventing and addressing
              sexual harassment through legal frameworks and structured
              procedures.
            </p>
          </div>

          {/* Card 2 - Motion Removed */}
          <div className="posh-card">
            <h3>Why It Matters</h3>
            <p>
              Ensuring dignity, equity, safety, and respect in the workplace is essential
              for employee well‑being, retention, and organizational growth.
            </p>
          </div>

          {/* Card 3 - Motion Removed */}
          <div className="posh-card">
            <h3>Who Must Comply?</h3>
            <p>
              Every workplace with 10 or more employees—corporate offices,
              institutions, hospitals, NGOs, start‑ups, factories, and more.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}