import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand Column */}
        <div className="footer-column">
          <h3>MilzenKC</h3>
          <p>
            Crafting the heart of your home with premium cabinetry and timeless designs.
            Elevate your kitchen experience properly.
          </p>
        </div>

        {/* Links Column */}
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/milzenkc">Kitchen Cabinets</Link></li>
            <li><Link to="/countertops">Countertops</Link></li>
            <li><Link to="#">About Us</Link></li>
          </ul>
        </div>

        {/* Contact Column */}
        <div className="footer-column">
          <h3>Contact Us</h3>
          <ul className="footer-links">
            <li>123 Design Avenue</li>
            <li>New York, NY 10012</li>
            <li>(212) 555-0199</li>
            <li>hello@milzenkc.com</li>
          </ul>
        </div>

        {/* Newsletter Column */}
        <div className="footer-column">
          <h3>Newsletter</h3>
          <p>Subscribe for latest trends and offers.</p>
          <div className="footer-newsletter">
            <input type="email" placeholder="Your Email Address" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Milzen Kitchen Cabinets. All rights reserved.</p>
      </div>
    </footer>
  );
}
