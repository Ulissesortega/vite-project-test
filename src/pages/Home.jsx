import React from "react";
import './Home.css';
import Slider from '../components/Slider/Slider'; 
// import heroImage from '../assets/MilzenKC/M31.webp';

export default function Home() {
  return (     
      <div className="hero-container">
        <div className="hero-left">
           <Slider />
           {/* <img src={heroImage} alt="Modern Kitchen" /> */}
        </div>
        <div className="hero-right">
          <h1>Designed for Life,<br/>Styled for You.</h1>
          <p>
            Transform your kitchen into a masterpiece with our premium cabinetry collection. 
            Blending functionality with timeless aesthetics to create the heart of your home.
          </p>
          <a href="/milzen-kc" className="hero-btn">Explore Collection</a>
        </div>
      </div>
  );
}
