import React from "react";
import image1 from "../../images/main/services/service-icon1.png";
import image2 from "../../images/main/services/service-icon2.png";
import image3 from "../../images/main/services/service-icon3.png";
import image4 from "../../images/main/services/service-icon4.png";
import image5 from "../../images/main/services/service-icon5.png";
import image6 from "../../images/main/services/service-icon6.png";
import imagePerson from "../../images/main/services/service-center.jpg";

const Service = () => {
  return (
    <div className="bg-white pt-12 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className=" font-SANS  text-lg leading-8 text-gray-600">
            WE ARE SPECIALISTS IN
          </p>
          <h2 className="font-montserrat text-5xl font-bold tracking-tight text-gray-900 ">
            What We Do
          </h2>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-y-16 gap-x-8 md:grid-cols-3">
          {/* Left Section */}
          <div className="md:col-span-1">
            <div className="flex items-center justify-between">
              <div className=" flex gap-5 items-center ">
                <div className="w-auto">
                  <img
                    src={image1}
                    alt="Service Icon"
                    className="h-16 w-20 text-yellow-500"
                  />
                </div>
                <div>
                  <h3 className="font-montserrat pt-10 text-xl font-bold tracking-tight text-gray-900">
                    HOME CONSTRUCTION
                  </h3>
                  <p className="font-SANS  text-base w-64 leading-7 text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer nec odio.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className=" flex gap-5 items-center ">
                <div className="w-auto">
                  <img
                    src={image2}
                    alt="Service Icon"
                    className="h-16 w-20 text-yellow-500"
                  />
                </div>
                <div>
                  <h3 className="font-montserrat pt-10 text-xl font-bold tracking-tight text-gray-900">
                    BUILDING REMODELS
                  </h3>
                  <p className="font-SANS  text-base w-64 leading-7 text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer nec odio.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className=" flex gap-5 items-center ">
                <div className="w-auto">
                  <img
                    src={image3}
                    alt="Service Icon"
                    className="h-16 w-20 text-yellow-500"
                  />
                </div>
                <div>
                  <h3 className="font-montserrat pt-10 text-xl font-bold tracking-tight text-gray-900">
                    INTERIOR DESIGN
                  </h3>
                  <p className="font-SANS  text-base w-64 leading-7 text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer nec odio.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Center Section - Central Image */}
          <div className="md:col-span-1 flex items-center justify-center">
            <img src={imagePerson} alt="Central Image" className="max-w-full" />
          </div>

          {/* Right Section */}
          <div className="md:col-span-1">
            <div className="flex items-center justify-between">
              <div className=" flex gap-5 items-center ">
                <div className="w-auto">
                  <img
                    src={image4}
                    alt="Service Icon"
                    className="h-16 w-20 text-yellow-500"
                  />
                </div>
                <div>
                  <h3 className=" font-montserrat pt-10 text-xl font-bold tracking-tight text-gray-900">
                    EXTERIOR DESIGN
                  </h3>
                  <p className="font-SANS  text-base w-64 leading-7 text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer nec odio.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className=" flex gap-5 items-center ">
                <div className="w-auto">
                  <img
                    src={image5}
                    alt="Service Icon"
                    className="h-16 w-20 text-yellow-500"
                  />
                </div>
                <div>
                  <h3 className="font-montserrat pt-10 text-xl font-bold tracking-tight text-gray-900">
                    RENOVATION
                  </h3>
                  <p className="font-SANS  text-base w-64 leading-7 text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer nec odio.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className=" flex gap-5 items-center ">
                <div className="w-auto">
                  <img
                    src={image6}
                    alt="Service Icon"
                    className="h-16 w-20 text-yellow-500"
                  />
                </div>
                <div>
                  <h3 className="font-montserrat pt-10 text-xl font-bold tracking-tight text-gray-900">
                    SAFETY MANAGEMENT
                  </h3>
                  <p className="font-SANS  text-base w-64 leading-7 text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer nec odio.
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

export default Service;
