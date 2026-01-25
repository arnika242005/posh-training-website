import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { FaWhatsapp, FaEnvelope, FaPhoneAlt } from "react-icons/fa"; 

const Footer = () => {
    const whatsappLink = "https://wa.me/919819304104";
    const phoneLink = "tel:+919819304104"; 
    // UPDATED EMAIL ADDRESS HERE
    const emailLink = "mailto:ronetterodricks@getstructured.in"; 

    const services = [
        { name: "Policy Design", path: "/module/awareness" },
        { name: "IC Training", path: "/module/ic-training" },
        { name: "Supervisor Training", path: "/module/supervisor" },
        { name: "Compliance Audit", path: "/module/compliance-audit" },
        { name: "E-Learning", path: "/module/elearning" },
        { name: "External Member", path: "/module/external-member" },
        { name: "Workshops", path: "/module/workshops" },
        { name: "Activity Learning", path: "/module/activity-learning" },
        { name: "Regional Training", path: "/module/regional-training" },
        { name: "Annual Report", path: "/module/annual-report" },
        { name: "Employee Survey", path: "/module/employee-survey" },
    ];

    return (
        <footer className="footer" id="contact">
            <div className="footer-container">
                <div className="footer-content">
                    <div className="footer-column">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><a href="/#training">Training</a></li>
                            <li><a href="/#testimonials">Testimonials</a></li>
                            <li><a href="/#enquire">Help/Enquire</a></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h3>Our Services</h3>
                        <ul className="footer-services-grid">
                            {services.map((service, index) => (
                                <li key={index}>
                                    <Link to={service.path} className="footer-service-link">
                                        {service.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>© 2026 POSH Training Expert. All rights reserved.</p>
                    
                    <div className="footer-socials">
                        <a href={phoneLink} className="social-icon" title="Call Us">
                            <FaPhoneAlt />
                        </a>
                        {/* THE FIX: ensure href is using {emailLink} */}
                        <a href={emailLink} className="social-icon" title="Email Us">
                            <FaEnvelope />
                        </a>
                        <a 
                            href={whatsappLink} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="social-icon" 
                            title="WhatsApp"
                        >
                            <FaWhatsapp />
                        </a>
                    </div>
                </div>
            </div>
            
            <a href={whatsappLink} className="floating-whatsapp" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp />
            </a>
        </footer>
    );
};

export default Footer;