// Hero.jsx
import React from 'react';
import './Hero.css'
const Hero = () => {
  return (
    <section className="hero">
      <div className="container first-intro">
        <h1>Welcome to Springdale Public School</h1>
        <p>A place where young minds grow and thrive</p>
        <button className="btn btn-primary">Learn More</button>
      </div>
    </section>
  );
};

export default Hero;