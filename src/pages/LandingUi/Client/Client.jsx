import React, { useState, useEffect } from "react";
import Contact1 from "../../../assets/Contact1.png";
import Contact2 from "../../../assets/Contact2.png";
import Contact3 from "../../../assets/Contact3.png";
import Contact4 from "../../../assets/Contact4.png";
import Contact5 from "../../../assets/Contact5.png";
import arrowleft from "../../../assets/arrow_back_ios.png";
import arrowright from "../../../assets/arrow_back_ios (1).png";
import { Fade } from "react-awesome-reveal";
import "./Client.scss";
import { Box, Container, Typography } from "@mui/material";

const Client = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const images = [
    Contact1,
    Contact2,
    Contact3,
    Contact4,
    Contact5,
    Contact3,
    Contact4,
    Contact5,
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box sx={{ textAlign: "center" }}>
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Typography variant="h3" fontWeight="bold" sx={{ color: "#03517A" }}>
          Our Partners
        </Typography>
        <div className="carousell">
          <div className="carousell-main">
            <button onClick={prevSlide} style={{ border: "none" }}>
              <img src={arrowleft} alt="Previous" />
            </button>
            <div className="carousell-track">
              {images
                .slice(currentSlide, currentSlide + (isSmallScreen ? 1 : 5))
                .map((img, index) => (
                  <span key={index}>
                    <Fade
                      // direction="right"
                      duration={2000}
                      triggerOnce
                      key={`${currentSlide}-${index}`}
                    >
                      <img
                        src={img}
                        alt={`Slide ${currentSlide + index + 1}`}
                        className="carousell-track-img"
                      />
                    </Fade>
                  </span>
                ))}
            </div>
            <button onClick={nextSlide} style={{ border: "none" }}>
              <img src={arrowright} alt="Next" />
            </button>
          </div>
        </div>
        <Typography>
          Over 32+ Retail Pharma Store growing with Evolving Health Care.
        </Typography>
      </Container>
    </Box>
  );
};

export default Client;
