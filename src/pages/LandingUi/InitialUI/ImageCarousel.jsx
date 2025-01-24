import React, { useState, useEffect } from "react";
import Img1 from "../../../assets/Casourel/Img1.jpg";
import Img2 from "../../../assets/Casourel/Img2.jpg";
import Img3 from "../../../assets/Casourel/Img3.jpg";
import Img4 from "../../../assets/Casourel/Img4.jpg";
import Img5 from "../../../assets/Casourel/Img5.jpg";
import "./ImageCarousel.css";
import { Box, Container } from "@mui/material";

const images = [
  { src: Img1, caption: "High Quality Products" },
  { src: Img2, caption: "Reliable and Fast Shipping" },
  { src: Img3, caption: "Trusted by Pharmacies Nationwide" },
  { src: Img4, caption: "Affordable Pricing" },
  { src: Img5, caption: "Customer Satisfaction" },
];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically change images at intervals
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, []);

  // Manually change image
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <Box sx={{ backgroundColor: "white" }}>
      <Container maxWidth="lg" sx={{ py: 1, pb: 3 }}>
        <div className="carousel-container">
          <div className="carousel">
            <button onClick={handlePrevious} className="carousel-control left">
              &#10094;
            </button>
            <button onClick={handleNext} className="carousel-control right">
              &#10095;
            </button>
            <div className="carousel-slide">
              <img
                src={images[currentIndex].src}
                alt={images[currentIndex].caption}
                className="carousel-image"
              />
              <div className="carousel-caption">
                {images[currentIndex].caption}
              </div>
            </div>
          </div>
          <div className="advertisement-section">
            <h3>Special Offer!</h3>
            <p>
              Get exclusive discounts
              <br /> on bulk orders.
            </p>
          </div>
        </div>
      </Container>
    </Box>
  );
};

export default ImageCarousel;
