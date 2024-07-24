import React from "react";
import Navbar from "../../../header/navbar.jsx";
import Topbar from "../../../header/topbar.jsx";
import Bg_Image from "../../../main/bg_Image.jsx";
import PricingCard from "./PricingCard.jsx";
import AboutUS from "../../../footer/aboutUS.jsx";
import Footer from "../../../footer/footer.jsx";

const pricing = () => {
  const pricingData = [
    {
      title: "BUILDING REMODELS",
      price: "89.9",
      bgColor: "bg-black",
      buttonColor: "bg-black",
    },
    {
      title: "RENOVATION",
      price: "179.9",
      bgColor: "bg-customYellow",
      buttonColor: "bg-customYellow",
    },
    {
      title: "HOME CONSTRUCTION",
      price: "279.9",
      bgColor: "bg-black",
      buttonColor: "bg-black",
    },
  ];
  return (
    <div>
      <Topbar />
      <Navbar />
      <Bg_Image mainText="PRICING" subText="HOME / COMPANY / PRICING" />
      <div className="my-12">
        <p className="text-center text-4xl font-bold mb-10 z-10">
          <span className="text-gray-500 font-normal text-xl">
            GRAB THE PACKAGES
          </span>
          <br />
          PRICING
        </p>
      </div>
      <div className="text-center justify-center px-20 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
          {pricingData.map((card, index) => (
            <PricingCard key={index} {...card} />
          ))}
        </div>
      </div>
      <AboutUS />
      <Footer />
    </div>
  );
};

export default pricing;
