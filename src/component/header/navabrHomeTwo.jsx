import React from "react";
import logo from "../../images/header/logo.png";
import { useState } from "react";

const navbar = () => {
  return (
    <div className="font-montserrat sticky top-0 z-50">
      <div className="bg-white  shadow-md h-28 flex justify-start py-3 ">
        <div className=" md:w-1/4 flex items-center justify-center">
          <img src={logo} alt="Logo" className="h-10 ml-4" />
        </div>
        <ul className="flex  flex-col md:flex-row md:space-x-1 md:p-0 items-center ">
          <li className="relative group  ">
            <p className="block text-black cursor-pointer font-bold">
              Home<span className="icon-cheveron-down"></span>
            </p>
            <ul className="absolute left-0 hidden  group-hover:block bg-white shadow-lg mt-1 pr-10 border-t-2 border-yellow-500 ">
              <li>
                <a
                  className="block mx-2 px-4 py-2 hover:text-customYellow text-black"
                  href="/"
                >
                  HomeOne
                </a>
                <hr className="ml-3 border-customLightGray" />
              </li>
              <li>
                <a
                  className="block mx-2 px-4 py-2  text-customYellow "
                  href="/homeTwo"
                >
                  HomeTwo
                </a>
              </li>
            </ul>
          </li>
          <li className="relative group">
            <p className="block px-4 py-2  text-black cursor-pointer font-bold">
              Company<span className="icon-cheveron-down"></span>
            </p>
            <ul className="absolute left-0 hidden group-hover:block bg-white shadow-lg mt-1 border-t-2 border-yellow-500">
              <li>
                <a
                  className="block px-4 py-2  text-customDarkGray hover:text-customYellow"
                  href="/about"
                >
                  AboutUs
                </a>
                <hr className="ml-3 border-customLightGray" />
              </li>
              <li>
                <a
                  className="block px-4 py-2  text-customDarkGray hover:text-customYellow"
                  href="/ourTeam"
                >
                  OurPeople
                </a>
                <hr className="ml-3 border-customLightGray" />
              </li>
              <li>
                <a
                  className="block px-4 py-2  text-customDarkGray hover:text-customYellow"
                  href="/testimonials"
                >
                  Testimonials
                </a>
                <hr className="ml-3 border-customLightGray" />
              </li>
              <li>
                <a
                  className="block px-4 py-2  text-customDarkGray hover:text-customYellow"
                  href="/faq"
                >
                  Faq
                </a>
                <hr className="ml-3 border-customLightGray" />
              </li>
              <li>
                <a
                  className="block px-4 py-2  text-customDarkGray hover:text-customYellow"
                  href="/pricing"
                >
                  Pricing
                </a>
                <hr className="ml-3 border-customLightGray" />
              </li>
            </ul>
          </li>
          <li className="relative group">
            <p className="block px-4 py-2  text-black  cursor-pointer font-bold">
              Projects<span className="icon-cheveron-down"></span>
            </p>
            <ul className="absolute left-0 hidden group-hover:block bg-white shadow-lg mt-1 border-t-2 border-yellow-500">
              <li>
                <a
                  className="block px-4 py-2  text-customDarkGray hover:text-customYellow"
                  href="/projectAll"
                >
                  ProjectAll
                </a>
                <hr className="ml-3 border-customLightGray" />
              </li>
              <li>
                <a
                  className="block px-4 py-2  text-customDarkGray hover:text-customYellow"
                  href="/projectSingle"
                >
                  ProjectSingle
                </a>
              </li>
            </ul>
          </li>
          <li className="relative group">
            <p className="block px-4 py-2  text-black  cursor-pointer font-bold">
              Services<span className="icon-cheveron-down"></span>
            </p>
            <ul className="absolute left-0 hidden group-hover:block bg-white shadow-lg mt-1 border-t-2 border-yellow-500">
              <li>
                <a
                  className="block px-4 py-2  text-customDarkGray hover:text-customYellow"
                  href="/serviceALL"
                >
                  ServiceAll
                </a>
                <hr className="ml-3 border-customLightGray" />
              </li>
              <li>
                <a
                  className="block px-4 py-2 text-customDarkGray hover:text-customYellow"
                  href="/serviceSingle"
                >
                  ServiceSingle
                </a>
              </li>
            </ul>
          </li>
          <li className="relative group">
            <p className="block px-4 py-2 text-black  cursor-pointer font-bold">
              Features
              <span className="icon-cheveron-down"></span>
            </p>
            <ul className="absolute left-0 hidden group-hover:block bg-white shadow-lg mt-1 border-t-2 border-yellow-500">
              <li>
                <a
                  className="block px-4 py-2 text-customDarkGray hover:text-customYellow"
                  href="/typography"
                >
                  Typography
                </a>
                <hr className="ml-3 border-customLightGray" />
              </li>
              <li>
                <a
                  className="block px-4 py-2 text-customDarkGray hover:text-customYellow"
                  href="/404"
                >
                  404
                </a>
                <hr className="ml-3 border-customLightGray" />
              </li>
              <li className="relative group">
                <p className="block px-4 py-2 text-customDarkGray  hover:text-customYellow cursor-pointer">
                  ParentMenu
                  <span className="icon-arrow_forward_ios"></span>
                </p>
                <ul className="absolute left-full top-0 hidden  bg-white shadow-lg mt-1 border-t-2 border-yellow-500 hover:block">
                  <li>
                    <p className="block px-4 py-2 text-customDarkGray hover:text-customYellow">
                      ChildMenu1
                    </p>
                    <hr className="ml-3 border-customLightGray" />
                  </li>
                  <li>
                    <p className="block px-4 py-2 text-customDarkGray hover:text-customYellow">
                      ChildMenu2
                    </p>
                    <hr className="ml-3 border-customLightGray" />
                  </li>
                  <li>
                    <p className="block px-4 py-2 text-customDarkGray hover:text-customYellow">
                      ChildMenu3
                    </p>
                  </li>
                </ul>
              </li>
            </ul>
          </li>

          <li className="relative group">
            <p className="block px-4 py-2  text-black  cursor-pointer font-bold">
              News<span className="icon-cheveron-down"></span>
            </p>
            <ul className="absolute left-0 hidden group-hover:block bg-white shadow-lg mt-1 border-t-2 border-yellow-500">
              <li>
                <a
                  className="block px-4 py-2  text-customDarkGray hover:text-customYellow"
                  href="/newsLeftSidebar"
                >
                  NewsLeftSidebar
                </a>
                <hr className="ml-3 border-customLightGray" />
              </li>
              <li>
                <a
                  className="block px-4 py-2 text-customDarkGray hover:text-customYellow"
                  href="/newsRightSidebar"
                >
                  NewsRightSidebar
                </a>
                <hr className="ml-3 border-customLightGray" />
              </li>
              <li>
                <a
                  className="block px-4 py-2 text-customDarkGray hover:text-customYellow"
                  href="/newsSingle"
                >
                  NewsSingle
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a
              className="block px-4 py-2 text-black  cursor-pointer font-bold"
              href="/contact"
            >
              Contact
            </a>
          </li>
        </ul>
        {/* <a href="/contact"> */}
          <div className="w-full md:w-1/4 flex justify-center my-5 md:justify-items-start">
            <button className="bg-customYellow font-bold text-black px-6  rounded hover:bg-gray-800 hover:text-yellow-400 transition duration-300">
              Get A Free Quote
            </button>
          </div>
        {/* </a> */}
      </div>
    </div>
  );
};

export default navbar;
