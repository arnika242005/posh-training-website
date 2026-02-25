import { useEffect } from "react";
import "./AnnualReport.css";

export default function AnnualReport() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleEnquiry = () => {
    const phoneNumber = "918951291065"; 
    const email = "ronetterodricks@getstructured.in";
    const subject = "Enquiry: POSH Annual Report Filing Support";
    const body = "Hello, I need assistance with compiling and filing our POSH Annual Report for the current calendar year.";

    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(body)}`, '_blank');
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section className="module-page annual-report-page">
      {/* HERO SECTION */}
      <div className="module-image-hero">
        <img
          src="/images/module9.jpg" 
          alt="POSH Annual Report Filing"
        />
        <div className="image-overlay">
          <h1>Annual Report Filing</h1>
          <p>
            Ensuring 100% legal compliance through the meticulous preparation 
            and timely submission of your organization's POSH Annual Report.
          </p>
          <div className="module-meta">
            <span>📅 Deadline: 31st January</span>
            <span>📑 Statutory Filing</span>
            <span>✅ Compliance Audit</span>
          </div>
        </div>
      </div>

      {/* CONTENT AREA */}
      <div className="module-content">
        <div className="content-grid">
          
          <div className="content-card">
            <h2>Report Compilation</h2>
            <ul>
              <li>Consolidating the number of complaints received and resolved.</li>
              <li>Documenting all awareness programs and IC workshops held.</li>
              <li>Tracking cases pending for more than 90 days with reasons.</li>
              <li>Summarizing actions taken by the employer or District Officer.</li>
            </ul>
          </div>

          <div className="content-card">
            <h2>Statutory Submission</h2>
            <ul>
              <li>Identifying the correct District Officer/Local Authority for filing.</li>
              <li>Ensuring the report is submitted on the organization's letterhead.</li>
              <li>Coordinating with HR for the "Director's Report" disclosure.</li>
              <li>Securing proof of submission for legal records.</li>
            </ul>
          </div>

          

          <div className="content-card">
            <h2>Compliance Audit</h2>
            <ul>
              <li>Reviewing IC meeting minutes for the entire year.</li>
              <li>Verifying if the Internal Committee was properly constituted.</li>
              <li>Checking if statutory posters were displayed in all branches.</li>
              <li>Ensuring consistency between the Annual Report and financial audits.</li>
            </ul>
          </div>

          <div className="content-card">
            <h2>Strategic Advisory</h2>
            <ul>
              <li>Analyzing year-on-year trends in workplace grievances.</li>
              <li>Recommendations for the upcoming year's training calendar.</li>
              <li>Drafting the "Nil Report" if no complaints were filed.</li>
              <li>Managing filings for multiple branch locations across India.</li>
            </ul>
          </div>

          <div className="content-card full-width">
            <h2>The Importance of Filing</h2>
            <p>
              Failure to file the Annual Report or providing false information 
              can lead to a fine of up to ₹50,000. Repeated offenses can result 
              in the cancellation of your business license. Our expert team 
              removes the administrative burden, ensuring your filings are 
              accurate, professional, and always on time.
            </p>
          </div>
        </div>

        <div className="module-cta">
          <button onClick={handleEnquiry}>
            Enquire for Annual Report Support
          </button>
        </div>
      </div>
    </section>
  );
}