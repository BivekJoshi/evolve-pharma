import React, { useState, useEffect } from "react";
import Img1 from "../../../assets/Casourel/Img6.jpeg";
import Img2 from "../../../assets/Casourel/Img7.jpeg";
import Img3 from "../../../assets/Casourel/Img8.jpeg";
import Img4 from "../../../assets/Casourel/Img4.jpg";
import Img5 from "../../../assets/Casourel/Img5.jpg";
import "./ImageCarousel.css";
import { Box, Container } from "@mui/material";
import OfferImage from "../../../assets/OfferImage.jpg";

const images = [
  { src: Img1, caption: "High Quality Products" },
  { src: Img2, caption: "Reliable and Fast Shipping" },
  { src: Img3, caption: "Trusted by Pharmacies Nationwide" },
  // { src: Img4, caption: "Affordable Pricing" },
  // { src: Img5, caption: "Customer Satisfaction" },
];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
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
          <img
            src={OfferImage}
            style={{ width: "100%", height: "100%", overflow: "hidden" }}
          />
        </div>
      </div>
    </Container>
  );
};

export default ImageCarousel;
