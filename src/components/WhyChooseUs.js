import "./WhyChooseUs.css";

export default function WhyChooseUs() {
  return (
    <section className="why-choose-us">
      <div className="choose-container">

        <h2 className="choose-heading">Why Choose Us?</h2>

        <div className="choose-grid">

          <div className="choose-item">
            <div className="number">01</div>
            <h3>Expert Trainers</h3>
            <p>Learn from certified professionals with years of experience.</p>
          </div>

          <div className="choose-item">
            <div className="number">02</div>
            <h3>Practical Approach</h3>
            <p>Hands-on sessions and real-world examples for better understanding.</p>
          </div>

          <div className="choose-item">
            <div className="number">03</div>
            <h3>Flexible Learning</h3>
            <p>Access resources anytime and learn at your own pace.</p>
          </div>

          <div className="choose-item">
            <div className="number">04</div>
            <h3>Certified Programs</h3>
            <p>Receive valid certifications that boost your professional profile.</p>
          </div>

          <div className="choose-item">
            <div className="number">05</div>
            <h3>High-Quality Content</h3>
            <p>Get access to well-structured and industry-ready training material.</p>
          </div>

        </div>
      </div>
    </section>
  );
}