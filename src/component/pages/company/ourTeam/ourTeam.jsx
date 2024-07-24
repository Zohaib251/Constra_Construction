import React, { useState } from "react";
import Navbar from "../../../header/navbar.jsx";
import Topbar from "../../../header/topbar.jsx";
import Bg_Image from "../../../main/bg_Image.jsx";
import Team from "./team.jsx";
import AboutUS from "../../../footer/aboutUS.jsx";
import Footer from "../../../footer/footer.jsx";

const ourTeam = () => {
  return (
    <div>
      <Topbar />
      <Navbar />
      <Bg_Image mainText="OUR TEAM" subText="HOME / COMPANY / OUR TEAM" />
      <div className="my-12">
        <p className="text-center text-4xl font-bold mb-10 z-10">
          OUR LEADERSHIPS
        </p>
      </div>
      <Team />
      <AboutUS />
      <Footer />
    </div>
  );
};

export default ourTeam;
