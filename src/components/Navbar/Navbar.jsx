import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">LOGO</div>

      <ul className={`links ${isOpen ? "open" : ""}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/milzenkc">Kitchen Cabinets</Link></li>
        <li><Link to="/countertops">Countertops</Link></li>
        <li><Link to="/bathroom">Bathroom</Link></li>
        <li><Link to="/flooring">Flooring</Link></li>
        <li><Link to="/tiles">Tiles</Link></li>
        <li><Link to="/tools">Tools</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      <div className="cta">
        <button>Contact</button>
      </div>

      <div className="burger">
        <button onClick={() => setIsOpen(!isOpen)}>
          Menu
        </button>
      </div>
    </nav>
  );
}
