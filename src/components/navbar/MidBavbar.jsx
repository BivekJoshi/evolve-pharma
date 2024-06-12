import React, { useState, useEffect } from 'react';
import { Box, useTheme, useMediaQuery } from "@mui/material";
import arrowleft from "../../assets/arrow_back_ios.png";
import arrowright from "../../assets/arrow_back_ios (1).png";

const MidNavbarSlider = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isLaptopScreen = useMediaQuery(theme.breakpoints.between('md', 'lg'));
  const [currentSlide, setCurrentSlide] = useState(0);
  const items = ["Medicine", "Lab Tests", "Health Care", "Health Blogs", "Plus", "Offer", "Value Store"];

  const itemsPerView = isSmallScreen ? 3 : 7;

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + itemsPerView) % items.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - itemsPerView + items.length) % items.length);
  };

  return (
    <Box sx={{ width: "100%", boxShadow: "0 1px 10px -2px rgba(0,0,0,0.1)", marginBottom: "3px" }}>
      <Box
        sx={{
          padding: "8px",
          color: "#7c7d82",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#ffff",
          gap: "2rem",
          position: "relative"
        }}
      >
        {!isLaptopScreen && (
          <button onClick={prevSlide} style={{ border: 'none', background: 'none', position: 'absolute', left: 0 }}>
            <img src={arrowleft} alt="Previous"  style={{width:"10px",height:"10px"}}/>
          </button>
        )}
        <Box sx={{ display: 'flex', overflow: 'hidden', width: isLaptopScreen ? '100%' : 'auto' ,gap:"2rem"}}>
          {isLaptopScreen
            ? items.map((item, index) => (
                <Box key={index} sx={{ flex: '1 0 auto', textAlign: 'center' }}>{item}</Box>
              ))
            : items.slice(currentSlide, currentSlide + itemsPerView).map((item, index) => (
                <Box key={index} sx={{ flex: '1 0 auto', textAlign: 'center' }}>{item}</Box>
              ))}
        </Box>
        {!isLaptopScreen && (
          <button onClick={nextSlide} style={{ border: 'none', background: 'none', position: 'absolute', right: 0 }}>
            <img src={arrowright} alt="Next" style={{width:"10px",height:"10px"}}/>
          </button>
        )}
      </Box>
    </Box>
  );
};

export default MidNavbarSlider;
