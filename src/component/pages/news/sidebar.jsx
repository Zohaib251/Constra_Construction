import React from "react";
import recentProject1 from "../../../images/main/recentProject/recentProject1.jpg";
import recentProject2 from "../../../images/main/recentProject/recentProject2.jpg";
import recentProject3 from "../../../images/main/recentProject/recentProject3.jpg";
const sidebar = () => {
  return (
    <div>
       <div className="flex  ">
      <div className="w-full max-w-4xl  ">
        <h2 className="text-2xl mb-8 pl-3 border-l-4 border-customYellow font-bold text-black">
          RECENT PROJECTS
        </h2>

        <div className="space-y-6">
          <div className="flex pb-6 border-b-2 border-customDarkGray border-opacity-10">
            <img src={recentProject1} alt="" className="h-24 w-36 object-cover" />
            <div className="pl-4 text-customGray flex-1">
              <p>
                WE JUST COMPLETED A $17.6 MILLION MEDICAL CLINIC IN MID-MISSOURI
              </p>
            </div>
          </div>

          <div className="flex pb-6 border-b-2 border-customDarkGray border-opacity-10">
            <img src={recentProject2} alt="" className="h-24 w-36 object-cover" />
            <div className="pl-4 text-customGray flex-1">
              <p>
                THANDLER AIRPORT WATER RECLAMATION FACILITY EXPANSION PROJECT
                NAMED
              </p>
            </div>
          </div>

          <div className="flex">
            <img src={recentProject3} alt="" className="h-24 w-36 object-cover" />
            <div className="pl-4 text-customGray flex-1">
              <p>
                SILICON BENCH AND CORNIKE BEGIN CONSTRUCTION OF SOLAR FACILITIES
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

      <div className="my-10 ">
        <div>
          <h2 className="text-customGray text-xl mb-10 font-bold border-l-2 pl-3 border-customYellow ">
            CATEGORIES
          </h2>
        </div>
        <div className=" hover:text-customYellow  my-3 border-b-2 border-black border-opacity-20 pb-3 w-52">
          Construction
        </div>
        <div className=" hover:text-customYellow my-3 border-b-2 border-black border-opacity-20 pb-3 w-52">
          Commercial
        </div>
        <div className=" hover:text-customYellow my-3 border-b-2 border-black border-opacity-20 pb-3 w-52">
          Building
        </div>
        <div className=" hover:text-customYellow my-3 border-b-2 border-black border-opacity-20 pb-3 w-52">
          Safety
        </div>
        <div className=" hover:text-customYellow my-3 pb-3 w-52">Structure</div>
      </div>

      <div className="my-10 ">
        <div>
          <h2 className="text-customGray text-xl mb-10  font-bold border-l-2 pl-3 border-customYellow ">
            ARCHIVES
          </h2>
        </div>
        <div className=" hover:text-customYellow  my-3 border-b-2 border-black border-opacity-20 pb-3 w-52">
          Feburay 2016
        </div>
        <div className=" hover:text-customYellow my-3 border-b-2 border-black border-opacity-20 pb-3 w-52">
          January 2016
        </div>
        <div className=" hover:text-customYellow my-3 border-b-2 border-black border-opacity-20 pb-3 w-52">
          December 2015
        </div>
        <div className=" hover:text-customYellow my-3 border-b-2 border-black border-opacity-20 pb-3 w-52">
          November 2015
        </div>
        <div className=" hover:text-customYellow my-3 pb-3 w-52">
          October 2015
        </div>
      </div>

      <div className="my-10 ">
        <div>
          <h2 className="text-customGray text-xl mb-10  font-bold border-l-2 pl-3 border-customYellow ">
            TAGS
          </h2>
        </div>

        <div className="flex my-3 space-x-2">
          <div className="border-2 py-1 text-sm border-customMediumGray border-opacity-20 w-24 text-center text-customDarkGray cursor-pointer hover:bg-customYellow ">
            Construction
          </div>
          <div className="border-2 py-1 text-sm border-customMediumGray border-opacity-20 w-20 text-center text-customDarkGray cursor-pointer hover:bg-customYellow ">
            Design
          </div>
          <div className="border-2 py-1 text-sm border-customMediumGray border-opacity-20 w-20 text-center text-customDarkGray cursor-pointer hover:bg-customYellow ">
            Project
          </div>
        </div>

        <div className="flex my-3  space-x-2">
          <div className="border-2 py-1 text-sm border-customMediumGray border-opacity-20 w-20 text-center text-customDarkGray cursor-pointer hover:bg-customYellow ">
            Building
          </div>
          <div className="border-2 py-1 text-sm border-customMediumGray border-opacity-20 w-20 text-center text-customDarkGray cursor-pointer hover:bg-customYellow ">
            Finance
          </div>
          <div className="border-2 py-1 text-sm border-customMediumGray border-opacity-20 w-20 text-center text-customDarkGray cursor-pointer hover:bg-customYellow ">
            Safety
          </div>
        </div>

        <div className="flex my-3 space-x-2">
          <div className="border-2 py-1 text-sm border-customMediumGray border-opacity-20 w-24 text-center text-customDarkGray cursor-pointer hover:bg-customYellow ">
            Contracting
          </div>
          <div className="border-2 py-1 text-sm border-customMediumGray border-opacity-20 w-20 text-center text-customDarkGray cursor-pointer hover:bg-customYellow ">
            Planning
          </div>
        </div>
      </div>
    </div>
  );
};

export default sidebar;
