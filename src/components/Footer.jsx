import React from 'react';
import "../App.css"; // Import the CSS file for styling

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <p className="text">© {new Date().getFullYear()} LinkWire. All rights reserved.</p>
                <div className="links">
                    <a href="/privacy-policy" className="link">Privacy Policy</a>
                    <a href="/terms-of-service" className="link">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;