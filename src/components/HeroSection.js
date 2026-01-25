// src/components/HeroSection.js

import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
    return (
        <div className="hero-container">
            <div className="hero-content">
                <h1 className="hero-headline">
                    Expert POSH Training for Legal Compliance in Mumbai & Bangalore
                </h1>
                <p className="hero-subheading">
                    Empower your team and ensure a safe, respectful, and legally compliant workplace. Book your customized session today.
                </p>
                
                {/* This uses the global cta-button class from index.css */}
                <button className="cta-button">
                    Secure Your Training Slot
                </button>
            </div>
            
            {/* Visual area for the image/illustration */}
            <div className="hero-image-placeholder">
                
            </div>
        </div>
    );
};

export default HeroSection;