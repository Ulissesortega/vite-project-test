
import React from 'react';
import './MilzenKC.css';
import modernWhite from '../assets/modern_white.png';
import luxuryWood from '../assets/luxury_wood.png';
import contempBlue from '../assets/contemporary_blue.png';

export default function MilzenKC() {
  const cabinets = [
    {
      id: 1,
      title: "Alpine Series",
      description: "Experience the purity of our Alpine Series. Featuring sleek, modern lines and a pristine white finish that brightens any space. Perfect for contemporary homes seeking a minimalist aesthetic.",
      image: modernWhite,
      tag: "Best Seller"
    },
    {
      id: 2,
      title: "Heritage Oak Collection",
      description: "Timeless elegance meets durability. Our Heritage Oak Collection brings warmth and sophistication with premium dark wood grains and gold accents. A true statement of luxury.",
      image: luxuryWood,
      tag: "Premium"
    },
    {
      id: 3,
      title: "Midnight Azure",
      description: "Bold, dramatic, and unmistakably modern. The Midnight Azure line offers a striking navy blue finish paired with industrial brass fixtures for a kitchen that commands attention.",
      image: contempBlue,
      tag: "New Arrival"
    }
  ];

  return (
    <div className="milzen-container">
      <div className="milzen-header">
        <h1>Milzen Kitchen Cabinets</h1>
        <p>Discover our exclusive collection of premium kitchen cabinetry. Designed for life, styled for you.</p>
      </div>

      <div className="card-grid">
        {cabinets.map((cabinet) => (
          <div key={cabinet.id} className="milzen-card">
            <div className="card-badge">{cabinet.tag}</div>
            <div className="card-image-wrapper">
              <img src={cabinet.image} alt={cabinet.title} className="card-image" />
              <div className="card-overlay"></div>
            </div>
            <div className="card-body">
              <h3 className="card-title">{cabinet.title}</h3>
              <p className="card-text">{cabinet.description}</p>
              <a href="#" className="card-button">View Collection</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
