import React from "react";
import Navbar from "../../header/navbar.jsx";
import Topbar from "../../header/topbar.jsx";
import Bg_Image from "../../main/bg_Image.jsx";
import Contact_info from "./contact_info.jsx";
import GoogleMap from "./googleMap.jsx";
import Message from "./message.jsx";
import AboutUS from "../../footer/aboutUS.jsx";
import Footer from "../../footer/footer.jsx";

const contact = () => {
  return (
    <div>
      <Topbar />
      <Navbar />
      <Bg_Image mainText="CONTACT" subText="HOME / COMPANY / CONTACT US" />
      <Contact_info />
      <GoogleMap />
      <Message/>
      <AboutUS />
      <Footer />
    </div>
  );
};

export default contact;
