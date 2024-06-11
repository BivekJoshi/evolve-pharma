import React, { useState, useEffect } from 'react';
import Contact1 from "../../../assets/Contact1.png";
import Contact2 from "../../../assets/Contact2.png";
import Contact3 from "../../../assets/Contact3.png";
import Contact4 from "../../../assets/Contact4.png";
import Contact5 from "../../../assets/Contact5.png";
import arrowleft from "../../../assets/arrow_back_ios.png";
import arrowright from "../../../assets/arrow_back_ios (1).png";

import './Client.scss';

const Client = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const images = [Contact1, Contact2, Contact3, Contact4, Contact5, Contact3, Contact4, Contact5];

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 5) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 5 + images.length) % images.length);
  };

  return (
    <div className="carousel">
      <div className="carousel-main">
        <button onClick={prevSlide} style={{ border: 'none' }}>
          <img src={arrowleft} alt="Previous" />
        </button>
        <div className="carousel-track">
          {images.slice(currentSlide, currentSlide + (isSmallScreen ? 1 : 5)).map((img, index) => (
            <span key={index}><img src={img} alt={`Slide ${currentSlide + index + 1}`} className="carousel-track-img"/></span>
          ))}
        </div>
        <button onClick={nextSlide} style={{ border: 'none' }}>
          <img src={arrowright} alt="Next" />
        </button>
      </div>
    </div>
  );
}

export default Client;
