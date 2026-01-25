import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
    return (
        <section className="hero-section">
            <div className="hero-content">
                <h1 className="hero-title">
                    Expert POSH Training & Legal Compliance Services
                </h1>
                <p className="hero-description">
                    Empower your workplace with certified POSH awareness. We provide 
                    Internal Committee (IC) training and compliance audits in Mumbai, 
                    Bangalore, and across India.
                </p>
                
                <div className="hero-actions">
                    <a href="#contact" className="hero-btn">
                        Secure Your Training Slot
                    </a>
                </div>
            </div>
            
            {/* Kept simple to avoid LCP delay; add an <img> here with width/height later */}
            <div className="hero-image-placeholder"></div>
        </section>
    );
};

export default HeroSection;