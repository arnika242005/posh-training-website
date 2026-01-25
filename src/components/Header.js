// src/components/Header.js

import React from 'react';
import './Header.css'; // Import the dedicated styles

const Header = () => {
    return (
        <header className="posh-header">
            {/* Logo/Brand Name */}
            <div className="logo">
                POSH Training Expert
            </div>
            
            {/* Navigation Links */}
            <nav className="nav-links">
                <a href="/" className="nav-link">Home</a>
                <a href="/training" className="nav-link">Training</a>
                <a href="/contact" className="nav-link">Contact</a>
                
                {/* Primary CTA Button - Soft Gold Accent */}
                <a href="/booking" className="nav-link cta-link">
                    Book Session
                </a>
            </nav>
        </header>
    );
};

export default Header;