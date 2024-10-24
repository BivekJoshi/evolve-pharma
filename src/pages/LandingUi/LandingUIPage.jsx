import React from "react";
import AboutUs from "../AboutUs/AboutUs";
import News from "./News/News";
import Client from "./Client/Client";
import MidBavbar from "../../components/navbar/MidBavbar";
import BusinessModal from "./BusinessModal/BusinessModal";

const LandingUIPage = () => {
  return (
    <>
      <MidBavbar />
      <AboutUs />
      <Client />
      <News />
      <BusinessModal/>
    </>
  );
};

export default LandingUIPage;
