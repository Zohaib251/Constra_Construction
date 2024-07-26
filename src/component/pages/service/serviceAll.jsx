import React from "react";
import Navbar from "../../header/navbar.jsx";
import Topbar from "../../header/topbar.jsx";
import Bg_Image from "../../main/bg_Image.jsx";
import ServiceCard from "./serviceCard";
import AboutUS from "../../footer/aboutUS.jsx";
import Footer from "../../footer/footer.jsx";
import service1 from "../../../images/main/services/service1.jpg";
import service2 from "../../../images/main/services/service2.jpg";
import service3 from "../../../images/main/services/service3.jpg";
import service4 from "../../../images/main/services/service4.jpg";
import service5 from "../../../images/main/services/service5.jpg";
import service6 from "../../../images/main/services/service6.jpg";
import serviceIcon1 from "../../../images/main/services/service-icon1.png";
import serviceIcon2 from "../../../images/main/services/service-icon2.png";
import serviceIcon3 from "../../../images/main/services/service-icon3.png";
import serviceIcon4 from "../../../images/main/services/service-icon4.png";
import serviceIcon5 from "../../../images/main/services/service-icon5.png";
import serviceIcon6 from "../../../images/main/services/service-icon6.png";

const serviceAll = () => {
  const services = [
    {
      image: service1,
      icon: serviceIcon1,
      title: "ZERO HARM EVERYDAY",
      description:
        "You have ideas, goals, and dreams. We have a culturally diverse, forward thinking team looking for talent like. Lorem ipsum dolor suscipit.",
      link: "/serviceSingle",
    },
    {
      image: service2,
      icon: serviceIcon2,
      title: "VIRTUAL CONSTRUCTION",
      description:
        "You have ideas, goals, and dreams. We have a culturally diverse, forward thinking team looking for talent like. Lorem ipsum dolor suscipit.",
      link: "/serviceSingle",
    },
    {
      image: service3,
      icon: serviceIcon3,
      title: "BUILD TO LAST",
      description:
        "You have ideas, goals, and dreams. We have a culturally diverse, forward thinking team looking for talent like. Lorem ipsum dolor suscipit.",
      link: "/serviceSingle",
    },
    {
      image: service4,
      icon: serviceIcon4,
      title: "EXTERIOR DESIGN",
      description:
        "You have ideas, goals, and dreams. We have a culturally diverse, forward thinking team looking for talent like. Lorem ipsum dolor suscipit.",
      link: "/serviceSingle",
    },
    {
      image: service5,
      icon: serviceIcon5,
      title: "RENOVATION",
      description:
        "You have ideas, goals, and dreams. We have a culturally diverse, forward thinking team looking for talent like. Lorem ipsum dolor suscipit.",
      link: "/serviceSingle",
    },
    {
      image: service6,
      icon: serviceIcon6,
      title: "SAFETY MANAGEMENT",
      description:
        "You have ideas, goals, and dreams. We have a culturally diverse, forward thinking team looking for talent like. Lorem ipsum dolor suscipit.",
      link: "/serviceSingle",
    },
  ];
  return (
    <div>
      <Topbar />
      <Navbar />
      <Bg_Image mainText="SERVICE" subText="HOME / SERVICES/ ALL SERVICES" />
    

<div className="my-14 flex justify-center">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-7xl w-full px-4 sm:px-6 md:px-10">
    {services.map((service, index) => (
      <ServiceCard key={index} {...service} />
    ))}
  </div>
</div>
      <AboutUS />
      <Footer />
    </div>
  );
};

export default serviceAll;
