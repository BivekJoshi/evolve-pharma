import React from "react";
import AboutUs from "../AboutUs/AboutUs";
import News from "./News/News";
import Client from "./Client/Client";
import MidBavbar from "../../components/navbar/MidBavbar";
import BusinessModal from "./BusinessModal/BusinessModal";
import SOPManual from "./SOPManual/SOPManual";
import WhyUs from "./WhyUs/WhyUs";
import ImageCarousel from "./InitialUI/ImageCarousel";
import JoinUs from "./JoinUs/JoinUs";
import ContactUs from "./ContactUs/ContactUs";
import BusinessProcess from "./BusinessModal/BusinessProcess";
import { Box } from "@mui/material";

const LandingUIPage = () => {
  return (
    <>
      <MidBavbar />
      <Box sx={{ backgroundColor: "white" }}>
        <ImageCarousel />
      </Box>
      <Client />
      <Box sx={{ backgroundColor: "white" }}>
        <AboutUs />
      </Box>
      <BusinessProcess />
      <Box sx={{ backgroundColor: "white" }}>
        <BusinessModal />
      </Box>
      <JoinUs />
      <Box sx={{ backgroundColor: "white" }}>
        <SOPManual />
      </Box>
      <WhyUs />
      <Box sx={{ backgroundColor: "white" }}>
        <News />
      </Box>
      <ContactUs />
    </>
  );
};

export default LandingUIPage;
