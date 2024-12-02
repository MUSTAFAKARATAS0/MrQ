import React from 'react';
import '../App.css';
import './HeroSection.css';


function HeroSection() {
  return (
    <div className='hero-container'>
      <img src='/videos/a.png' autoPlay loop muted />
      <h1>Mustafa Karataş</h1>
    </div>
  );
}

export default HeroSection;