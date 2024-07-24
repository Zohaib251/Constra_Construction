import React from "react";
import Navbar from '../../header/navbar.jsx';
import Topbar from "../../header/topbar.jsx";
import ImageSlider from "../../main/imageSlider.jsx";
import About from "../../main/About.jsx";
import Facts from "../../main/facts.jsx";
import Service from "../../main/service.jsx";
import Testimonials from "../../main/testimonials.jsx";
import ProjectCategories from "../../main/ProjectCategories.jsx";
import Contact from "../../main/contact.jsx";
import RecentProject from "../../main/recentProject.jsx";
import AboutUS from "../../footer/aboutUS.jsx";
import Footer from "../../footer/footer.jsx";

const HomeOne = () => {
  return (
    <div>
      <Topbar />
      <Navbar />
      <ImageSlider />
      <About />
      <Facts />
      <Service />
      <ProjectCategories />
      <Testimonials />
      <Contact />
      <RecentProject />
      <AboutUS />
      <Footer />
    </div>
  );
};

export default HomeOne;
