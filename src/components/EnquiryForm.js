import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./EnquiryForm.css";

export default function EnquiryForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_vxmh7io', // Your Service ID
      'template_6zquujl', 
      form.current, 
      '098SI5YHRUKfuDKMV' // Your Public Key
    )
      .then((result) => {
          alert("Enquiry sent successfully!");
          form.current.reset();
      }, (error) => {
          alert("Failed to send. Please try again.");
          console.error(error.text);
      });
  };

  return (
    <section className="enquiry-section fade-up" id="enquire">
      <div className="enquiry-container">
        <h2 className="enquiry-heading">Enquire With Us</h2>
        <p className="enquiry-subtext">Reach out for POSH training support.</p>

        <form ref={form} onSubmit={sendEmail} className="enquiry-form">
          {/* Use name="name" to match {{name}} in your template */}
          <div className="form-row">
            <input type="text" name="name" placeholder="Full Name" required />
            <input type="email" name="email" placeholder="Email Address" required />
          </div>

          <div className="form-row">
            <input type="text" name="organization" placeholder="Organization Name" />
            <input type="tel" name="phone" placeholder="Phone Number" required />
          </div>

          {/* Hidden input to provide the {{time}} variable */}
          <input type="hidden" name="time" value={new Date().toLocaleString()} />

          {/* Use name="message" to match {{message}} */}
          <textarea name="message" placeholder="Your requirement" rows="4" required></textarea>

          <button type="submit" className="submit-button">Submit Enquiry</button>
        </form>
      </div>
    </section>
  );
}