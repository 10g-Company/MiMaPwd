import React from 'react';
import './Footer.css';
import { Link, useLocation } from 'react-router-dom';

/*
 * 01 set hf=true in the URL to hide the footer 
 */

function Footer() {
    const location = useLocation();
    const params = new URLSearchParams(location.search);

    // Get "hf" parameter from URL
    const hideFooter = params.get('hf') === "true";

    if (hideFooter) return null;

    return (
        <>
            <footer className="footer">
                <div className="footer-links">
                    <Link to="/faq#about-us">About Us</Link>
                    <Link to="/version-compare">Version Comparison</Link>
                    <a href="changelog.html">What's New</a>
                    {/*<a href="#">Privacy Policy</a>*/}
                    <Link to="/privacy">Privacy Policy</Link>
                    <Link to="/tnc">Terms & Conditions</Link>
                    <Link to="/#help">Contact Us</Link>
                </div>
                <p>&copy; 2025 MiMaPwd. All rights reserved.</p>
            </footer>
        </>
    );
}

export default Footer;
