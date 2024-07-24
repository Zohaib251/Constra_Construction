import React from "react";
import Navbar from "../../header/navbar.jsx";
import Topbar from "../../header/topbar.jsx";
import Bg_Image from "../../main/bg_Image.jsx";
import Sidebar from "./sidebar.jsx";
import News from "./news.jsx";
import AboutUS from "../../footer/aboutUS.jsx";
import Footer from "../../footer/footer.jsx";
import image1 from "../../../images/main/recentProject/recentProject1.jpg";
import image2 from "../../../images/video.png";
import image3 from "../../../images/main/recentProject/recentProject3.jpg";

const newsLeftSidebar = () => {
  return (
    <div>
      <Topbar />
      <Navbar />
      <Bg_Image mainText="NEWS" subText="HOME / NEWS / LEFT SIDEBAR" />

      <div className="flex my-10 space-x-20  justify-center ">
        <div style={{ width: "30%" }}>
          <Sidebar />
        </div>

        <div>
          <News
            imageSrc={image1}
            heading="We Just Completed $17.6 Million Medical Clinic In Mid-Missouri"
          />
          <News
            imageSrc={image2}
            heading="Thandler Airport Water Reclamation Facility Expansion Project Named"
          />
          <News
            imageSrc={image3}
            heading="Silicon Bench And Cornike Begin Construction Of Solar Facilities"
          />
             <div className="flex mt-6 space-x-2">
            <div className="border-2 border-customDarkGray border-opacity-10 px-3 py-1 hover:bg-customYellow ">
              <span class="icon-angle-double-left font-bold text-customMediumGray text-lg"></span>
            </div>
            <div className="border-2 border-customDarkGray border-opacity-10 px-3 py-1 hover:bg-customYellow ">
              <p className="text-lg text-customMediumGray">1</p>
            </div>
            <div className="border-2 border-customDarkGray border-opacity-10 px-3 py-1 hover:bg-customYellow ">
              <p className="text-lg text-customMediumGray">2</p>
            </div>
            <div className="border-2 border-customDarkGray border-opacity-10 px-3 py-1 hover:bg-customYellow ">
              <p className="text-lg text-customMediumGray">3</p>
            </div>
            <div className="border-2 border-customDarkGray border-opacity-10 px-3 py-1 hover:bg-customYellow ">
              <span class="icon-angle-double-right font-bold text-customMediumGray text-lg"></span>
            </div>
          </div>
        </div>
      </div>

      <AboutUS />
      <Footer />
    </div>
  );
};

export default newsLeftSidebar;
