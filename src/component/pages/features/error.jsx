import React from "react";
import Navbar from "../../header/navbar.jsx";
import Topbar from "../../header/topbar.jsx";
import Bg_Image from "../../main/bg_Image.jsx";
import AboutUS from "../../footer/aboutUS.jsx";
import Footer from "../../footer/footer.jsx";
const error = () => {
  return (
    <div>
      <Topbar />
      <Navbar />
      <Bg_Image mainText="FEATURES" subText="HOME / FEATURES / 404" />
      <div className="justify-center text-center my-20">
        <div>
          <p className="text-9xl font-extrabold my-4" >404</p>
          <p className="text-xl font-bold my-4">OOPS... PAGE NOT FOUND</p>
          <p className="text-base my-4">Try using the button below to go to main page of the site</p>
        </div>
        <div>
          <a href="/">
          <button className="bg-customYellow p-3 font-bold text-white hover:bg-black rounded-md">BACK TO HOME PAGE</button>
          </a>
        </div>
      </div>
      <AboutUS />
      <Footer />
    </div>
  );
};

export default error;
