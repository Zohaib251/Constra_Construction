import React from "react";
import { useState } from "react";
import Navbar from "../../header/navbar.jsx";
import Topbar from "../../header/topbar.jsx";
import Bg_Image from "../../main/bg_Image.jsx";
import team1 from "../../../images/main/team/team3.jpg";
import ServiceImageSlide from "./serviceImageSlide.jsx";
import AboutUS from "../../footer/aboutUS.jsx";
import Footer from "../../footer/footer.jsx";

const serviceSingle = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };
  const [ExpandedSection, SetExpandedSection] = useState(null);

  const ToggleSection = (section) => {
    SetExpandedSection(ExpandedSection === section ? null : section);
  };
  return (
    <div>
      <Topbar />
      <Navbar />
      <Bg_Image mainText="SERVICE" subText="HOME / SERVICES/ SERVICE SINGLE" />

      <div className="my-10 px-4 sm:px-8 md:px-16">
        <div className="flex flex-col md:flex-row justify-center">
          {/* Left Side */}
          <div className="md:w-1/3 flex flex-col items-start">
            {/* Section Title */}
            <h2 className="text-customGray text-xl font-bold border-l-2 pl-3 border-customYellow mb-4">
              Solution
            </h2>

            {/* Service Links */}
            <div className="space-y-3 w-60">
              <div className="bg-customLightGray hover:bg-customYellow p-3 text-customDarkGray hover:text-white   cursor-pointer">
                Home Construction
              </div>
              <div className="bg-customYellow p-3  text-white">
                Building Models
              </div>
              <div className="bg-customLightGray hover:bg-customYellow p-3 text-customDarkGray hover:text-white  cursor-pointer">
                Interior Design
              </div>
              <div className="bg-customLightGray hover:bg-customYellow p-3 text-customDarkGray hover:text-white cursor-pointer">
                Exterior Design
              </div>
              <div className="bg-customLightGray hover:bg-customYellow p-3 text-customDarkGray hover:text-white cursor-pointer">
                Renovation
              </div>
              <div className="bg-customLightGray hover:bg-customYellow p-3  text-customDarkGray hover:text-white cursor-pointer">
                Safety Management
              </div>
            </div>

            {/* Testimonial */}
            <div className="mt-6 w-60 p-4 text-center">
              <p className="text-base border-2 border-customYellow p-2 pb-8 mb-2 relative">
                Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson ad squid.
                <span className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-t-customYellow border-l-transparent  border-r-transparent"></span>
              </p>
              <img
                src={team1}
                alt="Gabriel Denis"
                className="w-24 ml-14 mt-6 rounded-md"
              />
              <p className="text-base font-bold text-customYellow mt-2">
                WELDON CASH
              </p>
              <p className="text-base text-gray-600">CEO, First Choice Group</p>
            </div>
          </div>

          {/* Right Side */}
          <div className="md:w-3/6">
            {/* Building Remodels Title */}
            <h2 className="text-customGray font-bold text-2xl mb-4">
              BUILDING REMODELS
            </h2>

            {/* Description */}
            <div className="py-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              adipiscing erat eget risus sollicitudin pellentesque et non erat.
              Maecenas nibh dolor, malesuada et bibendum a, sagittis accumsan
              ipsum. Pellentesque ultrices ultrices sapien.
              <br />
              <br />
              Nam scelerisque tristique dolor vitae tincidunt. Aenean quis massa
              uada mi elementum elementum. , nec tincidunt nunc posuere ut.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              commodo iaculis ligula, ac dapibus quam ornare ut. Praesent ac
              hendrerit sem, et tempus sem
            </div>

            {/* Image Slider */}
            <ServiceImageSlide />

            <div className="flex flex-col md:flex-row  md:space-x-5  ">
              {/* Left Column */}
              <div className="flex-1">
                <h2 className="text-customGray font-bold text-xl mb-4">
                  WHAT MAKES US DIFFERENT
                </h2>
                <p className="py-5">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. 3 wolf moon officia aute,
                  non cupidatat skateboard dolor brunch. Food truck quinoa
                  nesciunt laborum eiusmod. Consectetur adipiscing elit. Integer
                  adipiscing erat eget risus sollicitudin pellentesque et non
                  erat tincidunt nunc posuere.
                </p>
                <div className="text-customDarkGray space-y-2">
                  <div className="text-sm flex items-center">
                    <span className="icon-arrow_forward_ios mr-1 text-customYellow"></span>
                    Partnership Strategy tristique eleifend.
                  </div>
                  <div className="text-sm flex items-center">
                    <span className="icon-arrow_forward_ios mr-1 text-customYellow"></span>
                    Opportunity to work with amet elit a.
                  </div>
                  <div className="text-sm flex items-center">
                    <span className="icon-arrow_forward_ios mr-1 text-customYellow"></span>
                    Saving Time to Deal with commodo iaculis
                  </div>
                  <div className="text-sm flex items-center">
                    <span className="icon-arrow_forward_ios mr-1 text-customYellow"></span>
                    Leadership skills to manage erat volutpat
                  </div>
                  <div className="text-sm flex items-center">
                    <span className="icon-arrow_forward_ios mr-1 text-customYellow"></span>
                    Cut cost without sacrificing dolore magna
                  </div>
                  <div className="text-sm flex items-center">
                    <span className="icon-arrow_forward_ios mr-1 text-customYellow"></span>
                    Automate your business elis tristique
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="flex-1">
                <h2 className="text-customGray font-bold text-xl mb-4">
                  YOU SHOULD KNOW
                </h2>
                <div className="">
                  <div
                    className="border rounded-md p-4 cursor-pointer transition-colors duration-300"
                    onClick={() => toggleSection("safety")}
                  >
                    <div className="flex justify-between items-center">
                      <h3
                        className={`text-base font-bold transition-colors duration-300 ${
                          expandedSection === "safety"
                            ? "text-customYellow"
                            : "text-black"
                        }`}
                      >
                        DOES THE LAW REQUIRED HEAD PROTECTION ON CONSTRUCTION
                        SITE?
                      </h3>
                    </div>
                    {expandedSection === "safety" && (
                      <div className="mt-2 transition-opacity duration-300 ease-in-out">
                        <hr className="w-full " />
                        <p className="text-sm">
                          Anim pariatur cliche reprehenderit, enim eiusmod high
                          life accusamus terry richardson ad squid. 3 wolf moon
                          officia aute, non cupidatat
                        </p>
                      </div>
                    )}
                  </div>

                  <div
                    className="border rounded-md p-4 cursor-pointer transition-colors duration-300 mt-4"
                    onClick={() => toggleSection("customerService")}
                  >
                    <div className="flex justify-between items-center">
                      <h3
                        className={`text-base font-bold transition-colors duration-300 ${
                          expandedSection === "customerService"
                            ? "text-customYellow"
                            : "text-black"
                        }`}
                      >
                        WHAT ARE THE FIRST AID REQUIREMENTS FOR SITES?
                      </h3>
                    </div>
                    {expandedSection === "customerService" && (
                      <div className="mt-2 transition-opacity duration-300 ease-in-out">
                        <hr className="w-full " />
                        <p className="text-sm">
                          Anemi nim veniam, quis nostrud exercitation ullamco
                          laboris nisi ut aliquip ex ea commodo consequat. Duis
                          aute irure dolor in reprehenderit in voluptate velit
                          esse cillum dolore eu fugiat nulla pariatur. Excepteur
                          sint occaecat cupidatat non proident, sunt in culpa
                          qui officia deserunt mollit anim id est laborum.
                        </p>
                      </div>
                    )}
                  </div>

                  <div
                    className="border rounded-md p-4 cursor-pointer transition-colors duration-300 mt-4"
                    onClick={() => toggleSection("integrity")}
                  >
                    <div className="flex justify-between items-center">
                      <h3
                        className={`text-base font-bold transition-colors duration-300 ${
                          expandedSection === "integrity"
                            ? "text-customYellow"
                            : "text-black"
                        }`}
                      >
                        WHAT IS AN APPOINTED PERSON?
                      </h3>
                    </div>
                    {expandedSection === "integrity" && (
                      <div className="mt-2 transition-opacity duration-300 ease-in-out">
                        <hr className="w-full" />
                        <p className="text-sm">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry’s standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="md:flex mt-10 " style={{ width: "100%" }}>
              <div className=" md:flex px-10 justify-center text-center bg-customGray ">
                <p className=" text-center p-5 mt-2 ml-10 md:ml-0   font-bold text-lg md:text-xs  text-white mr-20">
                  INTERESTED WITH THIS SERVICE.
                </p>
                <button
                  className="bg-customYellow hover:bg-black px-4 py-2 font-bold my-4
                 text-white"
                >
                  GET A QUOTE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AboutUS />
      <Footer />
    </div>
  );
};

export default serviceSingle;
