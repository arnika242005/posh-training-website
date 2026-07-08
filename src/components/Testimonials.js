import "./Testimonials.css";

export default function Testimonials() {
  return (
    /* Added id="testimonials" here */
    <section className="testimonials-section fade-up" id="testimonials">
      <div className="testimonials-container">

        {/* HEADING */}
        <h2 className="testimonials-heading">Testimonials</h2>
        <p className="testimonials-subheading">
          Hear from organizations and professionals who have experienced our POSH training
        </p>

        {/* TESTIMONIAL GRID */}
        <div className="testimonials-grid">

          <div className="testimonial-card">
            <p className="testimonial-text">
              “The POSH training was insightful, legally accurate, and highly engaging.
              Employees felt safe to participate and ask questions.”
            </p>
            <h4 className="testimonial-name">HR Manager</h4>
            <span className="testimonial-org">Corporate Organization</span>
          </div>

          <div className="testimonial-card">
            <p className="testimonial-text">
              “Ronette conducted the POSH training for close to 60 employees at 21 Knots as part of our bi-annual refresher program. The session was crisp, to the point, and thoughtfully designed with relevant examples, engaging videos, and real-life experiences. Given our diverse group, including minority women, it was crucial for the training to foster awareness and reinforce a safe and inclusive work environment. Ronette’s approach resonated strongly with the participants and truly hit the mark.”
            </p>
            <h4 className="testimonial-name">Priya</h4>
            <span className="testimonial-org">COO, 21Knots</span>
          </div>

          <div className="testimonial-card">
            <p className="testimonial-text">
              “A well-structured POSH workshop with real-life scenarios.
              Perfect balance of law, awareness, and practical guidance.”
            </p>
            <h4 className="testimonial-name">Faculty Coordinator</h4>
            <span className="testimonial-org">Educational Institution</span>
          </div>

          <div className="testimonial-card">
            <p className="testimonial-text">
              “The case-handling workshop was extremely helpful for our IC members.
              It boosted confidence and procedural clarity.”
            </p>
            <h4 className="testimonial-name">Compliance Officer</h4>
            <span className="testimonial-org">IT Organization</span>
          </div>

        </div>
      </div>
    </section>
  );
}