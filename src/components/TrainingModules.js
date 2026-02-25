import React from "react";
import "./TrainingModules.css";
import { Link } from "react-router-dom";

export default function TrainingModules() {
  const modules = [
    {
      id: "01",
      title: "Policy Design and Review",
      desc: "Drafting custom POSH policies, outlining roles, and establishing governance mechanisms.",
      img: "/images/mod1.jpg",
      link: "/module/awareness"
    },
    {
      id: "02",
      title: "Internal Committee (IC) Training",
      desc: "Comprehensive training for IC members on legal clarity, investigation skills, and decision-making.",
      img: "/images/modules2.jpg",
      link: "/module/ic-training"
    },
    {
      id: "03",
      title: "Audits & Assessments",
      desc: "Comprehensive workplace audits to identify gaps in compliance and safety culture.",
      img: "/images/module3.jpg",
      link: "/module/compliance-audit"
    },
    {
      id: "04",
      title: "External Member Services",
      desc: "Providing experienced External Members for impartial case investigations and legal guidance.",
      img: "/images/mod5.jpg",
      link: "/module/external-member"
    },
    {
      id: "05",
      title: "Workshops for Teams",
      desc: "Specialized training for Employees, Managers, Leaders, and the Internal Committee.",
      img: "/images/caro3.jpg",
      link: "/module/workshops"
    },
    {
      id: "06",
      title: "Activity-Based Learning",
      desc: "Impactful training through Roleplay, Theatre, and Real-Time Case Investigations.",
      img: "/images/module7.jpg", 
      link: "/module/activity-learning"
    },
    {
      id: "07",
      title: "Regional Language Training",
      desc: "Training available in English, Hindi, Marathi and Kannada.",
      img: "/images/module8.jpg",
      link: "/module/regional-training"
    },
    {
      id: "08",
      title: "Annual Report Filing",
      desc: "Assistance with mandatory annual compliance reporting and documentation.",
      img: "/images/module9.jpg",
      link: "/module/annual-report"
    },
    {
      id: "09",
      title: "Employee Survey",
      desc: "Analyzing workplace safety and culture through structured feedback and sentiment analysis.",
      img: "/images/module10.jpg",
      link: "/module/employee-survey" 
    }
  ];

  return (
    <section className="training-section">
      <h2 className="training-title">Our POSH Training Modules</h2>
      <p className="training-sub">
        Comprehensive POSH training programs designed for every role and responsibility.
      </p>

      <div className="training-list">
        {modules.map((mod, index) => (
          <div
            key={mod.id}
            className={`training-item ${index % 2 === 1 ? "reverse" : ""}`}
          >
            <div className="training-text">
              <h3>{mod.id}. {mod.title}</h3>
              <p>{mod.desc}</p>

              <Link to={mod.link} className="explore-link">
                Explore Module →
              </Link>
            </div>

            <div className="training-image">
              <div className="shine"></div>
              <img src={mod.img} alt={mod.title} loading="lazy" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}