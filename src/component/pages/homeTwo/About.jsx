import React from "react";
import service1 from "../../../images/main/services/service1.jpg";
import service2 from "../../../images/main/services/service2.jpg";
import service3 from "../../../images/main/services/service3.jpg";
import serviceIcon1 from "../../../images/main/services/service-icon1.png";
import serviceIcon2 from "../../../images/main/services/service-icon2.png";
import serviceIcon3 from "../../../images/main/services/service-icon3.png";

const About = () => {
  return (
    <div>
      <div className="justify-center text-center mb-14">
        <div className="flex justify-center text-center">
          <div className="justify-center text-center flex ">
            <div>
              <div className="w-80 ">
                <img src={service1} alt="recentProject" />
              </div>
              <div className="flex gap-4">
                <div className="mt-6">
                  <img src={serviceIcon1} alt="" />
                </div>
                <div className="text-left mt-6 w-80  ">
                  <h2 className="font-bold text-base hover:text-customYellow">
                    ZERO HARM EVERYDAY
                  </h2>
                  <p className="text-sm text-customDarkGray w-60">
                    You have ideas, goals, and dreams. We have a culturally
                    diverse, forward thinking team looking for talent like.
                    Lorem ipsum dolor suscipit.
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

            <div>
              <div className="w-80 ">
                <img src={service2} alt="recentProject" />
              </div>
              <div className="flex gap-4">
                <div className="mt-6">
                  <img src={serviceIcon2} alt="" />
                </div>

                <div className="text-left mt-6 w-80  ">
                  <h2 className="font-bold text-base hover:text-customYellow">
                    VIRTUAL CONSTRUCTION
                  </h2>
                  <p className="text-sm text-customDarkGray w-60">
                    You have ideas, goals, and dreams. We have a culturally
                    diverse, forward thinking team looking for talent like.
                    Lorem ipsum dolor suscipit.
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

            <div>
              <div className="w-80 ">
                <img src={service3} alt="recentProject" />
              </div>
              <div className="flex gap-4">
                <div className="mt-6">
                  <img src={serviceIcon3} alt="" />
                </div>

                <div className="text-left mt-6 w-80  ">
                  <h2 className="font-bold text-base hover:text-customYellow">
                    BUILD TO LAST
                  </h2>
                  <p className="text-sm text-customDarkGray w-60">
                    You have ideas, goals, and dreams. We have a culturally
                    diverse, forward thinking team looking for talent like.
                    Lorem ipsum dolor suscipit.
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
    </div>
  );
};

export default About;
