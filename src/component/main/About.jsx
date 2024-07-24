import React from "react";
import { useState } from "react";
const About = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="container mx-auto py-10 text-customDarkGray">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex flex-col gap-4 ml-20 md:w-1/2">
          <p className="text-xl">ABOUT US</p>
          <h3 className="text-4xl font-bold text-black ">
            WE DELIVER LANDMARK PROJECTS
          </h3>
          <p className="text-lg w-auto">
            We are rethoric question ran over her cheek When she reached the
            first hills of the Italic Mountains, she had a last view back on the
            skyline of her hometown Bookmarksgrove, the headline of Alphabet
            Village and the subline of her own road, the Line Lane.
          </p>

          <div className=" gap-4">
            <div className="flex justify-evenly ">
              <div className="flex items-center gap-4">
                <span className="icon-trophy p-3 text-customYellow font-extrabold text-4xl"></span>
                <p className="text-lg font-bold text-black">
                  WE'VE REPUTION FOR EXCELLENCE
                </p>
              </div>
              <div className="flex items-center gap-4">
                <span className="icon-equalizer text-customYellow text-4xl"></span>

                <p className="text-lg font-bold text-black">
                  WE BUILD PARTNERSHIPS
                </p>
              </div>
            </div>
            <br />
            <div className="flex justify-evenly">
              <div className="flex items-center gap-4">
                <span className="icon-thumbs-up p-3 text-customYellow font-extrabold text-4xl"></span>
                <p className="text-lg font-bold pr-24 text-black">
                  GUIDED BY COMMITMENT
                </p>
              </div>
              <div className="flex items-center gap-4">
                <span className="icon-group text-customYellow text-4xl"></span>

                <p className="text-lg font-bold text-black">
                  A TEAM OF PROFESSIONALS
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 md:w-1/2 pr-20">
          <h2 className="text-4xl font-bold text-black">OUR VALUES</h2>
          <p className="text-base">
            Minim Austin 3 wolf moon scenester aesthetic, umami odio pariatur
            bitters. Pop-up occaecat taxidermy street art, tattooed beard
            literally.
          </p>

          <div className="p-3 text-customDarkGray">
            {/* SAFETY Section */}
            <div
              className="border rounded-md p-4 cursor-pointer transition-colors duration-300"
              onClick={() => toggleSection("safety")}
            >
              <div className="flex justify-between items-center">
                <h3
                  className={`text-lg font-bold transition-colors duration-300 ${
                    expandedSection === "safety"
                      ? "text-customYellow"
                      : "text-black"
                  }`}
                >
                  SAFETY
                </h3>
                <span
                  className={`${
                    expandedSection === "safety"
                      ? "icon-cheveron-up"
                      : "icon-cheveron-down"
                  } text-center ${
                    expandedSection === "safety"
                      ? "bg-customYellow"
                      : "bg-slate-800"
                  } text-white w-6 h-6 transition-colors duration-300`}
                ></span>
              </div>
              {expandedSection === "safety" && (
                <div className="mt-2 transition-opacity duration-300 ease-in-out">
                  <hr className="w-full h-2" />
                  <p className="text-sm">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. 3 wolf moon officia
                    aute, non cupidata.
                  </p>
                </div>
              )}
            </div>

            {/* CUSTOMER SERVICE Section */}
            <div
              className="border rounded-md p-4 cursor-pointer transition-colors duration-300 mt-4"
              onClick={() => toggleSection("customerService")}
            >
              <div className="flex justify-between items-center">
                <h3
                  className={`text-lg font-bold transition-colors duration-300 ${
                    expandedSection === "customerService"
                      ? "text-customYellow"
                      : "text-black"
                  }`}
                >
                  CUSTOMER SERVICE
                </h3>
                <span
                  className={`${
                    expandedSection === "customerService"
                      ? "icon-cheveron-up"
                      : "icon-cheveron-down"
                  } text-center ${
                    expandedSection === "customerService"
                      ? "bg-customYellow"
                      : "bg-slate-800"
                  } text-white w-6 h-6 transition-colors duration-300`}
                ></span>
              </div>
              {expandedSection === "customerService" && (
                <div className="mt-2 transition-opacity duration-300 ease-in-out">
                  <hr className="w-full h-2" />
                  <p className="text-sm ">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. 3 wolf moon officia
                    aute, non cupidata.
                  </p>
                </div>
              )}
            </div>

            {/* INTEGRITY Section */}
            <div
              className="border rounded-md p-4 cursor-pointer transition-colors duration-300 mt-4"
              onClick={() => toggleSection("integrity")}
            >
              <div className="flex justify-between items-center">
                <h3
                  className={`text-lg font-bold transition-colors duration-300 ${
                    expandedSection === "integrity"
                      ? "text-customYellow"
                      : "text-black"
                  }`}
                >
                  INTEGRITY
                </h3>
                <span
                  className={`${
                    expandedSection === "integrity"
                      ? "icon-cheveron-up"
                      : "icon-cheveron-down"
                  } text-center ${
                    expandedSection === "integrity"
                      ? "bg-customYellow"
                      : "bg-slate-800"
                  } text-white w-6 h-6 transition-colors duration-300`}
                ></span>
              </div>
              {expandedSection === "integrity" && (
                <div className="mt-2 transition-opacity duration-300 ease-in-out">
                  <hr className="w-full h-2" />
                  <p className="text-sm">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. 3 wolf moon officia
                    aute, non cupidata.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
