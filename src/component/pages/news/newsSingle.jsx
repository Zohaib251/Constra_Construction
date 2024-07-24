import React from "react";
import Navbar from "../../header/navbar.jsx";
import Topbar from "../../header/topbar.jsx";
import Bg_Image from "../../main/bg_Image.jsx";
import NewsDescription from "./newsDescription.jsx";
import AboutUS from "../../footer/aboutUS.jsx";
import Footer from "../../footer/footer.jsx";

const newsSingle = () => {
  return (
    <div>
      <Topbar />
      <Navbar />
      <Bg_Image mainText="NEWS" subText="HOME / NEWS / NEWS SINGLE" />
      <NewsDescription />
      <AboutUS />
      <Footer />
    </div>
  );
};

export default newsSingle;
