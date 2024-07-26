import React from "react";
import service1 from "../../../images/main/services/service1.jpg";
import service2 from "../../../images/main/services/service2.jpg";
import service3 from "../../../images/main/services/service3.jpg";
import serviceIcon1 from "../../../images/main/services/service-icon1.png";
import serviceIcon2 from "../../../images/main/services/service-icon2.png";
import serviceIcon3 from "../../../images/main/services/service-icon3.png";

const About = () => {
  return (
    <div className="py-10 px-4 md:px-8">
      <div className="text-center mb-14">
        <div className="flex flex-wrap justify-center gap-6">
          {/* Service 1 */}
          <div className="w-full sm:w-80 md:w-96 lg:w-80">
            <img src={service1} alt="Service 1" className="w-full h-auto" />
            <div className="flex mt-4 gap-4">
              <div className="mt-6">
                <img src={serviceIcon1} alt="Icon 1" className="" />
              </div>
              <div className="text-left mt-6 w-80 ">
                <h2 className="font-bold text-base hover:text-customYellow">
                  ZERO HARM EVERYDAY
                </h2>
                <p className="text-sm text-customDarkGray mt-2 mx-4 sm:mx-0">
                  You have ideas, goals, and dreams. We have a culturally
                  diverse, forward-thinking team looking for talent like. Lorem
                  ipsum dolor suscipit.
                </p>
                <p className="hover:text-customYellow my-2 text-customDarkGray">
                  <a href="/serviceSingle">
                    <span class="icon-play_arrow"></span>
                    Learn More
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Service 2 */}
          <div className="w-full sm:w-80 md:w-96 lg:w-80">
            <img src={service2} alt="Service 1" className="w-full h-auto" />
            <div className="flex mt-4 gap-4">
              <div className="mt-6">
                <img src={serviceIcon2} alt="Icon 1" className="" />
              </div>
              <div className="text-left mt-6 w-80 ">
                <h2 className="font-bold text-base hover:text-customYellow">
                  VIRTUAL CONSTRUCTION
                </h2>
                <p className="text-sm text-customDarkGray mt-2 mx-4 sm:mx-0">
                  You have ideas, goals, and dreams. We have a culturally
                  diverse, forward-thinking team looking for talent like. Lorem
                  ipsum dolor suscipit.
                </p>
                <p className="hover:text-customYellow my-2 text-customDarkGray">
                  <a href="/serviceSingle">
                    <span class="icon-play_arrow"></span>
                    Learn More
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Service 3 */}
          <div className="w-full sm:w-80 md:w-96 lg:w-80">
            <img src={service3} alt="Service 1" className="w-full h-auto" />
            <div className="flex mt-4 gap-4">
              <div className="mt-6">
                <img src={serviceIcon3} alt="Icon 1" className="" />
              </div>
              <div className="text-left mt-6 w-80 ">
                <h2 className="font-bold text-base hover:text-customYellow">
                  BUILD TO LAST
                </h2>
                <p className="text-sm text-customDarkGray mt-2 mx-4 sm:mx-0">
                  You have ideas, goals, and dreams. We have a culturally
                  diverse, forward-thinking team looking for talent like. Lorem
                  ipsum dolor suscipit.
                </p>
                <p className="hover:text-customYellow my-2 text-customDarkGray">
                  <a href="/serviceSingle">
                    <span class="icon-play_arrow"></span>
                    Learn More
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
