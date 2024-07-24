import React, { useState } from "react";
import project1 from "../../images/main/projectCategories/project1.jpg";
import project2 from "../../images/main/projectCategories/project2.jpg";
import project3 from "../../images/main/projectCategories/project3.jpg";
import project4 from "../../images/main/projectCategories/project4.jpg";
import project5 from "../../images/main/projectCategories/project5.jpg";
import project6 from "../../images/main/projectCategories/project6.jpg";

function ProjectCategories() {
  const [activeCategory, setActiveCategory] = useState("SHOW ALL");

  const images = [
    {
      id: 1,
      src: project1,
      category: "SHOW ALL",
      overlayText: "CAPITAL TELTWAY BUILDING",
      buttonText: "COMMERCIAL, INTERIORS",
    },
    {
      id: 2,
      src: project2,
      category: "SHOW ALL",
      overlayText: "GHUM TOUCH HOSPITAL",
      buttonText: "HEALTHCARE",
    },
    {
      id: 3,
      src: project3,
      category: "SHOW ALL",
      overlayText: "TNT EAST FACILITY",
      buttonText: "GOVERNMENT",
    },
    {
      id: 4,
      src: project4,
      category: "SHOW ALL",
      overlayText: "NARRIOT HEADQUARTERS",
      buttonText: "INFRASTRUCTURE",
    },
    {
      id: 5,
      src: project5,
      category: "SHOW ALL",
      overlayText: "KALAS METRORAIL",
      buttonText: "INFRASTRUCTURE",
    },
    {
      id: 6,
      src: project6,
      category: "SHOW ALL",
      overlayText: "ANCRAFT AVENUE HOUSE",
      buttonText: "RESIDENTIAL",
    },
  ];

  const filteredImages = images.filter((image) => {
    if (activeCategory === "SHOW ALL") return true;
    if (activeCategory === "COMMERCIAL") return [3].includes(image.id);
    if (activeCategory === "EDUCATION") return [4, 5].includes(image.id);
    if (activeCategory === "GOVERNMENT") return [1].includes(image.id);
    if (activeCategory === "INFRASTRUCTURE")
      return [3, 4, 5].includes(image.id);
    if (activeCategory === "RESIDENTIAL") return [6].includes(image.id);
    if (activeCategory === "HEALTHCARE") return [1, 2].includes(image.id);
  });

  const categories = [
    "SHOW ALL",
    "COMMERCIAL",
    "EDUCATION",
    "GOVERNMENT",
    "INFRASTRUCTURE",
    "RESIDENTIAL",
    "HEALTHCARE",
  ];

  return (
    <div className="bg-[#F9F9F9] py-10">
      <div className="container mx-auto py-10">
        <p className="text-center text-4xl font-bold mb-10 z-10">
          <span className="text-gray-500 font-normal text-xl">
            WORK OF EXCELLENCE
          </span>
          <br />
          RECENT PROJECTS
        </p>
        <div className="relative">
          <div className="flex justify-center mb-8">
            <div className="border-b-2 border-yellow-500">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-8 py-3 font-bold cursor-pointer ${
                    activeCategory === category
                      ? "bg-yellow-500 text-white"
                      : "text-gray-900"
                  }`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-10 mx-auto ">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="relative w-full h-64 overflow-hidden shadow-md transition-transform duration-300 group"
              >
                <img
                  src={image.src}
                  alt={`Category: ${image.category}`}
                  className="w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center p-4 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-left text-white">
                    <div className="mb-4">
                      <a href="/">
                        <span className="text-xl cursor-pointer hover:text-customYellow font-bold">
                          {image.overlayText}
                        </span>
                      </a>
                    </div>
                    <button className="bg-yellow-500 p-2 text-black cursor-pointer text-sm font-semibold rounded-md hover:bg-yellow-600">
                      {image.buttonText}
                    </button>
                  </div>
                </div>
                <div className="absolute top-0 right-0 opacity-0 group-hover:opacity-100 bg-yellow-500 px-3 py-2">
                   <span className="text-white icon-plus"></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="justify-center text-center">
        <a href="/projectAll">
          <button className="bg-customYellow p-3 text-white cursor-pointer font-bold rounded-md hover:bg-[#000000]">
            VIEW ALL PROJECTS
          </button>
        </a>
      </div>
    </div>
  );
}

export default ProjectCategories;
