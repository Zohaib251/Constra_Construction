import React from "react";
import { useState } from "react";

const navbar = () => {
  const [isSearchOpen, setSearchOpen] = useState(false);

  const toggleSearch = () => {
    setSearchOpen(!isSearchOpen);
  };
  return (
    <div className="font-montserrat sticky top-0 z-50">
      <div className="bg-customGray shadow-md h-13 flex justify-center space-x-48 py-3 ">
        <ul className="flex flex-col md:flex-row md:space-x-4 md:p-0 items-center ">
          <li className="relative group ">
            <p className="block text-customYellow cursor-pointer font-bold">
              Home<span className="icon-cheveron-down"></span>
            </p>
            <ul className="absolute left-0 hidden  group-hover:block bg-white shadow-lg mt-1 pr-10 border-t-2 border-yellow-500 ">
              <li>
                <a className="block mx-2 px-4 py-2 text-customYellow" href="/">
                  HomeOne
                </a>
                <hr className="ml-3 border-customLightGray" />
              </li>
              <li>
                <a
                  className="block mx-2 px-4 py-2  text-customDarkGray hover:text-customYellow"
                  href="/homeTwo"
                >
                  HomeTwo
                </a>
              </li>
            </ul>
          </li>
          <li className="relative group">
            <p className="block px-4 py-2  text-white hover:text-customYellow cursor-pointer font-bold">
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
            <p className="block px-4 py-2  text-white hover:text-customYellow cursor-pointer font-bold">
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
            <p className="block px-4 py-2  text-white hover:text-customYellow cursor-pointer font-bold">
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
            <p className="block px-4 py-2 text-white hover:text-customYellow cursor-pointer font-bold">
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
            <p className="block px-4 py-2  text-white hover:text-customYellow cursor-pointer font-bold">
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
              className="block px-4 py-2 text-white hover:text-customYellow cursor-pointer font-bold"
              href="/contact"
            >
              Contact
            </a>
          </li>
        </ul>
        <div className=" py-2">
          <span
            className="icon-search text-customMediumGray cursor-pointer"
            onClick={toggleSearch}
          ></span>
          {isSearchOpen && (
            <div className="flex pr-24  z-10">
              <div className="absolute mt-2  shadow-lg w-40 border border-gray-300 rounded-lg">
                <input
                  type="text"
                  className="w-full py-2  px-3 bg-transparent focus:outline-none"
                  placeholder="Type what you want to enter"
                />
                <span
                  className="icon-cross absolute top-2 right-2 cursor-pointer text-customMediumGray"
                  onClick={toggleSearch}
                ></span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default navbar;
