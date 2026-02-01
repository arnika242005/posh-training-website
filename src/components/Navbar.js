import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    return (
        <header className="navbar">
            <div className="navbar-logo">
                <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                    POSH Advisory
                </Link>
            </div>

            <nav className="navbar-links">
                <Link to="/" className="nav-item">Home</Link>

                {/* Adding / before # ensures it works from module pages */}
                <a href="/#training" className="nav-item">Training</a>
                <a href="/#testimonials" className="nav-item">Testimonials</a>
                <a href="/#enquire" className="nav-item help-link">Help/Enquire</a>
            </nav>
        </header>
    );
};

export default Navbar;