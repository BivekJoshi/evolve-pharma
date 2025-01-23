import React from "react";
import AboutUs from "../AboutUs/AboutUs";
import News from "./News/News";
import Client from "./Client/Client";
import MidBavbar from "../../components/navbar/MidBavbar";
import BusinessModal from "./BusinessModal/BusinessModal";
import SOPManual from "./SOPManual/SOPManual";
import WhyUs from "./WhyUs/WhyUs";
import ImageCarousel from "./InitialUI/ImageCarousel";

const LandingUIPage = () => {
  return (
    <>
      <MidBavbar />
      <ImageCarousel/>
      <AboutUs />
      <Client />
      <News />
      <BusinessModal/>
      <SOPManual/>
      <WhyUs/>
    </>
  );
};

export default LandingUIPage;
