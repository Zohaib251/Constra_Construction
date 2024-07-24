import React from "react";
import { useState } from "react";
import recentProject1 from "../../../../images/main/recentProject/recentProject1.jpg";
import recentProject2 from "../../../../images/main/recentProject/recentProject2.jpg";
import recentProject3 from "../../../../images/main/recentProject/recentProject3.jpg";
const queries = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };
  const [ExpandedSection, SetExpandedSection] = useState(null);

  const ToggleSection = (section) => {
    SetExpandedSection(ExpandedSection === section ? null : section);
  };
  return (
    <div className="container mx-auto py-10 text-customDarkGray">
      <div className="flex md:flex-row ml-16 space-x-20 justify-center">
        <div className="flex flex-col gap-4 md:w-1/2 ">
          <h2 className="text-2xl ml-3 border-l-2 border-black border-opacity-10 font-bold text-black">
            CONSTRUCTION GENERAL
          </h2>
          <div className="p-3 text-customDarkGray">
            {/* SAFETY Section */}
            <div
              className="border rounded-md p-4 cursor-pointer transition-colors duration-300 w-full"
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
                  DOES THE LAW REQUIRED HEAD PROTECTION ON CONSTRUCTION SITE?
                </h3>
              </div>
              {expandedSection === "safety" && (
                <div className="mt-2 transition-opacity duration-300 ease-in-out">
                  <hr className="w-full h-2" />
                  <p className="text-sm">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. 3 wolf moon officia
                    aute, non cupidata
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
                    Anemi nim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea com modo consequat. Duis aute irure
                    dolor in reprehenderit in voluptate velit esse cillum dolore
                    eu fugiat nulla pariatur. Excepteur sint occaecat cupid
                    henderit in voluptate velit esse cillu oris nisi ut aliquip
                    ex ea com matat.
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
                    typesetting industry. Lorem Ipsum has been the industry’s
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                </div>
              )}
            </div>
          </div>




          <h2 className="text-2xl ml-3 border-l-2 border-black border-opacity-10 font-bold text-black">
          SAFETY
          </h2>
          <div className="p-3 text-customDarkGray">
            {/* SAFETY Section */}
            <div
              className="border rounded-md p-4 cursor-pointer transition-colors duration-300 w-full"
              onClick={() => ToggleSection("safety")}
            >
              <div className="flex justify-between items-center">
                <h3
                  className={`text-base font-bold transition-colors duration-300 ${
                    ExpandedSection === "safety"
                      ? "text-customYellow"
                      : "text-black"
                  }`}
                >
                 MAURIS RHONCUS PRETIUM PORTTITOR CRAS SCELRISQUE COMMODO ODIO ?
                </h3>
              </div>
              {ExpandedSection === "safety" && (
                <div className="mt-2 transition-opacity duration-300 ease-in-out">
                  <hr className="w-full h-2" />
                  <p className="text-sm">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. 3 wolf moon officia
                    aute, non cupidata
                  </p>
                </div>
              )}
            </div>

            {/* CUSTOMER SERVICE Section */}
            <div
              className="border rounded-md p-4 cursor-pointer transition-colors duration-300 mt-4"
              onClick={() => ToggleSection("customerService")}
            >
              <div className="flex justify-between items-center">
                <h3
                  className={`text-BASE font-bold transition-colors duration-300 ${
                    ExpandedSection === "customerService"
                      ? "text-customYellow"
                      : "text-black"
                  }`}
                >
                  WHAT ARE THE FIRST AID REQUIREMNETS FOR SITES?
                </h3>
              </div>
              {ExpandedSection === "customerService" && (
                <div className="mt-2 transition-opacity duration-300 ease-in-out">
                  <hr className="w-full h-2" />
                  <p className="text-sm ">
                    Anemi nim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea com modo consequat. Duis aute irure
                    dolor in reprehenderit in voluptate velit esse cillum dolore
                    eu fugiat nulla pariatur. Excepteur sint occaecat cupid
                    henderit in voluptate velit esse cillu oris nisi ut aliquip
                    ex ea com matat.
                  </p>
                </div>
              )}
            </div>

            {/* INTEGRITY Section */}
            <div
              className="border rounded-md p-4 cursor-pointer transition-colors duration-300 mt-4"
              onClick={() => ToggleSection("integrity")}
            >
              <div className="flex justify-between items-center">
                <h3
                  className={`text-base font-bold transition-colors duration-300 ${
                    ExpandedSection === "integrity"
                      ? "text-customYellow"
                      : "text-black"
                  }`}
                >
                  WHAT IS AN APPOINTED PERSON?
                </h3>
              </div>
              {ExpandedSection === "integrity" && (
                <div className="mt-2 transition-opacity duration-300 ease-in-out">
                  <hr className="w-full h-2" />
                  <p className="text-sm">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry’s
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>











        <div className="w-2/6" >
          <h2 className="text-xl ml-3 border-l-2 border-black border-opacity-10 font-bold text-black">
            RECENT PROJECTS
          </h2>
          <div className="flex mx-2 my-6 pb-6 w-3/4 border-b-2 border-customDarkGray border-opacity-10">
            <div className="">
              <img src={recentProject1} alt="" className="h-20 w-40" />
            </div>
            <div className="pl-2 pt-2 text-customGray">
              <p>
                WE JUST COMPLETES $17.6 MILLION MEDICAL CLINIC IN MID-MISSOURI
              </p>
            </div>
          </div>
          <div className="flex mx-2 my-5  pb-6 w-3/4 border-b-2 border-customDarkGray border-opacity-10">
            <div className="">
              <img src={recentProject2} alt="" className="h-20 w-40" />
            </div>
            <div className="pl-2 pt-2 text-customGray">
              <p>
                THANDLER AIRPORT WATER RECLAMATION FACILITY EXPANSION PROJECT
                NAMED
              </p>
            </div>
          </div>
          <div className="flex mx-2  my-5 w-3/4">
            <div className="">
              <img src={recentProject3} alt="" className="h-20 w-40" />
            </div>
            <div className="pl-2 pt-2 text-customGray">
              <p>
                SILICON BENCH AND CORNIKE BEGIN CONSTRUCTION SOLAR FACILITIES
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default queries;
