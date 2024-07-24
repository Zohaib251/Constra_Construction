import React from "react";
import Navbar from "../../../header/navbar.jsx";
import Topbar from "../../../header/topbar.jsx";
import Bg_Image from "../../../main/bg_Image.jsx";
import Queries from "./queries.jsx";
import AboutUS from "../../../footer/aboutUS.jsx";
import Footer from "../../../footer/footer.jsx";
const faq = () => {
  return (
    <div>
      <Topbar />
      <Navbar />
      <Bg_Image
        mainText="FAQ"
        subText="HOME / COMPANY / FAQ"
      />
      <Queries />
      <AboutUS />
      <Footer />
    </div>
  );
};

export default faq;
