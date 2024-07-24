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
      <div className="my-10">
        <div className="flex justify-center">
          <div className="ml-20  ">
            <div>
              <h2 className="text-customGray text-xl font-bold border-l-2 pl-3 border-customYellow ">
                Solution
              </h2>
            </div>
            <div>
              <div className="bg-customLightGray hover:bg-customYellow my-3 p-3 w-52">
                Home Construction
              </div>
              <div className=" bg-customYellow my-3 p-3 w-52">
                Building Models
              </div>
              <div className="bg-customLightGray hover:bg-customYellow my-3 p-3 w-52">
                Interior Design
              </div>
              <div className="bg-customLightGray hover:bg-customYellow my-3 p-3 w-52">
                Exterior Design
              </div>
              <div className="bg-customLightGray hover:bg-customYellow my-3 p-3 w-52">
                Renovation
              </div>
              <div className="bg-customLightGray hover:bg-customYellow my-3 p-3 w-52">
                Safety Management
              </div>
            </div>

            <div className="flex flex-col  px-2 py-2 w-3/12 text-customDarkGray text-center relative">
              <p className="text-base  border-2 w-44 border-customYellow p-2 pb-8 mb-2 relative">
                Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson ad squid.
                <span className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-t-customYellow border-l-transparent  transparent border-r-transparent"></span>
              </p>
              <div className="mt-4">
                <img
                  src={team1}
                  alt="Gabriel Denis"
                  className="w-full text-center ml-12 h-full rounded-md"
                />
              </div>
              <p className="text-base text-center w-40  font-bold text-customYellow mt-2">
                WELDON CASH
              </p>
              <p className="text-base text-center w-44  text-gray-600">
                CEO, First Choice Group
              </p>
            </div>
          </div>

          <div className="w-3/6">
            <div>
              <h2 className="text-customGray font-bold text-2xl ">
                BUILDING REMODELS
              </h2>
            </div>
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

            {/*The image slider  */}
            <ServiceImageSlide />

            <div className="flex space-x-1  ">
              <div style={{ width: "70%" }}>
                <h2 className="text-customGray font-bold text-xl ">
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
                <div className="text-customDarkGray">
                  <div className="text-sm">
                    <span class="icon-arrow_forward_ios  mr-1 text-customYellow"></span>
                    Partnership Strategy tristique eleifend.
                  </div>
                  <div className="text-sm">
                    <span class="icon-arrow_forward_ios   mr-1 text-customYellow"></span>
                    Opporutnity to work with amet elit a.
                  </div>
                  <div className="text-sm">
                    <span class="icon-arrow_forward_ios  mr-1 text-customYellow"></span>
                    Saving Time to Deal with commodo iaculis
                  </div>
                  <div className="text-sm">
                    <span class="icon-arrow_forward_ios  mr-1 text-customYellow"></span>
                    Leadership skills to manage erat volutpat
                  </div>
                  <div className="text-sm">
                    <span class="icon-arrow_forward_ios  mr-1 text-customYellow"></span>
                    Cut cost without sacrificing dolore magna
                  </div>
                  <div className="text-sm">
                    <span class="icon-arrow_forward_ios  mr-1 text-customYellow"></span>
                    Automate your business elis tristique
                  </div>
                </div>
              </div>

              <div className="">
                <h2 className="text-customGray ml-4 font-bold text-xl ">
                  YOU SHOULD KNOW
                </h2>
                <div className="p-3 text-customDarkGray">
                  {/* SAFETY Section */}
                  <div
                    className="border rounded-md p-4 cursor-pointer transition-colors duration-300 w-80"
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
                        <hr className="w-full h-2" />
                        <p className="text-sm">
                          Anim pariatur cliche reprehenderit, enim eiusmod high
                          life accusamus terry richardson ad squid. 3 wolf moon
                          officia aute, non cupidata
                        </p>
                      </div>
                    )}
                  </div>

                  {/* CUSTOMER SERVICE Section */}
                  <div
                    className="border rounded-md p-4 cursor-pointer transition-colors duration-300 mt-4 w-80"
                    onClick={() => toggleSection("customerService")}
                  >
                    <div className="flex justify-between items-center">
                      <h3
                        className={`text-BASE font-bold transition-colors duration-300 ${
                          expandedSection === "customerService"
                            ? "text-customYellow"
                            : "text-black"
                        }`}
                      >
                        WHAT ARE THE FIRST AID REQUIREMNETS FOR SITES?
                      </h3>
                    </div>
                    {expandedSection === "customerService" && (
                      <div className="mt-2 transition-opacity duration-300 ease-in-out">
                        <hr className="w-full h-2" />
                        <p className="text-sm ">
                          Anemi nim veniam, quis nostrud exercitation ullamco
                          laboris nisi ut aliquip ex ea com modo consequat. Duis
                          aute irure dolor in reprehenderit in voluptate velit
                          esse cillum dolore eu fugiat nulla pariatur. Excepteur
                          sint occaecat cupid henderit in voluptate velit esse
                          cillu oris nisi ut aliquip ex ea com matat.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* INTEGRITY Section */}
                  <div
                    className="border rounded-md p-4 cursor-pointer transition-colors duration-300 mt-4 w-80"
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
                        <hr className="w-full h-2" />
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

            <div className="flex mt-10 " style={{width:"100%"}}>
              <div className=" flex px-10 justify-evenly bg-customGray ">
                <p className=" text-center p-5 mt-2  font-bold text-xs  text-white mr-20">
                INTERESTED WITH THIS SERVICE.
                </p>
                <button className="bg-customYellow hover:bg-black px-4 py-2 font-bold my-4 text-white">
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
