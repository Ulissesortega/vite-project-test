import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">LOGO</div>

      <ul className={`links ${isOpen ? 'open' : ''}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/MilzenKC">Kitchen Cabinets</Link></li>
        <li className="dropdown">
          <Link to="/countertops">Countertops <span className="arrow">▼</span></Link>
          <ul className="dropdown-content">
            <li><Link to="/quartz">Quartz</Link></li>
            <li><Link to="/granite">Granite</Link></li>
          </ul>
        </li>
      </ul>

      <div className="cta">
        <button>Contact</button>
      </div>

      <div className="burger">
        <button onClick={() => setIsOpen(!isOpen)}>Menu</button>
      </div>
    </nav>
  );
}
