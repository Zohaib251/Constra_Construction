import React, { useState } from "react";

const Navbar = () => {
  const [isSearchOpen, setSearchOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleSearch = () => {
    setSearchOpen(!isSearchOpen);
  };

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="font-montserrat sticky top-0 z-50 bg-customGray shadow-md">
      <div className="h-13 flex justify-around items-center px-4 md:px-16 py-3">
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex space-x-4">
            <ul className="flex space-x-4">
              <li className="relative group">
                <p className="block text-customYellow cursor-pointer mt-2 font-bold">
                  Home<span className="icon-cheveron-down"></span>
                </p>
                <ul className="absolute left-0 hidden group-hover:block bg-white shadow-lg mt-1 pr-10 border-t-2 border-yellow-500">
                  <li>
                    <a
                      className="block mx-2 px-4 py-2 text-customYellow"
                      href="/"
                    >
                      HomeOne
                    </a>
                    <hr className="ml-3 border-customLightGray" />
                  </li>
                  <li>
                    <a
                      className="block mx-2 px-4 py-2 text-customDarkGray hover:text-customYellow"
                      href="/homeTwo"
                    >
                      HomeTwo
                    </a>
                  </li>
                </ul>
              </li>
              <li className="relative group">
                <p className="block px-4 py-2 text-white hover:text-customYellow cursor-pointer font-bold">
                  Company<span className="icon-cheveron-down"></span>
                </p>
                <ul className="absolute left-0 hidden group-hover:block bg-white shadow-lg mt-1 border-t-2 border-yellow-500">
                  <li>
                    <a
                      className="block px-4 py-2 text-customDarkGray hover:text-customYellow"
                      href="/about"
                    >
                      AboutUs
                    </a>
                    <hr className="ml-3 border-customLightGray" />
                  </li>
                  <li>
                    <a
                      className="block px-4 py-2 text-customDarkGray hover:text-customYellow"
                      href="/ourTeam"
                    >
                      OurPeople
                    </a>
                    <hr className="ml-3 border-customLightGray" />
                  </li>
                  <li>
                    <a
                      className="block px-4 py-2 text-customDarkGray hover:text-customYellow"
                      href="/testimonials"
                    >
                      Testimonials
                    </a>
                    <hr className="ml-3 border-customLightGray" />
                  </li>
                  <li>
                    <a
                      className="block px-4 py-2 text-customDarkGray hover:text-customYellow"
                      href="/faq"
                    >
                      Faq
                    </a>
                    <hr className="ml-3 border-customLightGray" />
                  </li>
                  <li>
                    <a
                      className="block px-4 py-2 text-customDarkGray hover:text-customYellow"
                      href="/pricing"
                    >
                      Pricing
                    </a>
                    <hr className="ml-3 border-customLightGray" />
                  </li>
                </ul>
              </li>
              <li className="relative group">
                <p className="block px-4 py-2 text-white hover:text-customYellow cursor-pointer font-bold">
                  Projects<span className="icon-cheveron-down"></span>
                </p>
                <ul className="absolute left-0 hidden group-hover:block bg-white shadow-lg mt-1 border-t-2 border-yellow-500">
                  <li>
                    <a
                      className="block px-4 py-2 text-customDarkGray hover:text-customYellow"
                      href="/projectAll"
                    >
                      ProjectAll
                    </a>
                    <hr className="ml-3 border-customLightGray" />
                  </li>
                  <li>
                    <a
                      className="block px-4 py-2 text-customDarkGray hover:text-customYellow"
                      href="/projectSingle"
                    >
                      ProjectSingle
                    </a>
                  </li>
                </ul>
              </li>
              <li className="relative group">
                <p className="block px-4 py-2 text-white hover:text-customYellow cursor-pointer font-bold">
                  Services<span className="icon-cheveron-down"></span>
                </p>
                <ul className="absolute left-0 hidden group-hover:block bg-white shadow-lg mt-1 border-t-2 border-yellow-500">
                  <li>
                    <a
                      className="block px-4 py-2 text-customDarkGray hover:text-customYellow"
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
                  Features<span className="icon-cheveron-down"></span>
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
                    <p className="block px-4 py-2 text-customDarkGray hover:text-customYellow cursor-pointer">
                      ParentMenu<span className="icon-arrow_forward_ios"></span>
                    </p>
                    <ul className="absolute left-full top-0 hidden bg-white shadow-lg mt-1 border-t-2 border-yellow-500 hover:block">
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
                <p className="block px-4 py-2 text-white hover:text-customYellow cursor-pointer font-bold">
                  News<span className="icon-cheveron-down"></span>
                </p>
                <ul className="absolute left-0 hidden group-hover:block bg-white shadow-lg mt-1 border-t-2 border-yellow-500">
                  <li>
                    <a
                      className="block px-4 py-2 text-customDarkGray hover:text-customYellow"
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
          </div>
        </div>

        <div className="py-2 flex md:space-x-4">
          <div className="menu-toggle md:hidden mr-60 " onClick={toggleMenu}>
            <span className="block w-6 h-0.5 bg-customYellow  mb-1"></span>
            <span className="block w-6 h-0.5 bg-customYellow  mb-1"></span>
            <span className="block w-6 h-0.5 bg-customYellow "></span>
          </div>
          <span
            className="icon-search text-customMediumGray cursor-pointer"
            onClick={toggleSearch}
          ></span>
          {isSearchOpen && (
            <div className="">
              <div className="absolute md:left-3/4 right-14 overflow-hidden mt-10 shadow-lg w-40 border border-gray-300 rounded-lg">
                <input
                  type="text"
                  className="w-full py-2 px-2 text-white bg-transparent focus:outline-none"
                  placeholder="Type"
                />
                <span
                  className="icon-cross text-white absolute top-2 right-2 cursor-pointer"
                  onClick={toggleSearch}
                ></span>
              </div>
            </div>
          )}
        </div>
      </div>
      <div
        className={`${isMenuOpen ? "block" : "hidden"} md:hidden bg-customGray`}
      >
        <ul className="flex flex-col space-y-2 p-4">
          <li className="relative group">
            <p className="block text-customYellow cursor-pointer font-bold">
              Home<span className="icon-cheveron-down"></span>
            </p>
            <ul className="hidden group-hover:block bg-white shadow-lg mt-1 pr-10 border-t-2 border-yellow-500">
              <li>
                <a className="block mx-2 px-4 py-2 text-customYellow" href="/">
                  HomeOne
                </a>
                <hr className="ml-3 border-customLightGray" />
              </li>
              <li>
                <a
                  className="block mx-2 px-4 py-2 text-customDarkGray hover:text-customYellow"
                  href="/homeTwo"
                >
                  HomeTwo
                </a>
              </li>
            </ul>
          </li>
          <li className="relative group">
            <p className="block text-white hover:text-customYellow cursor-pointer font-bold">
              Company<span className="icon-cheveron-down"></span>
            </p>
            <ul className="hidden group-hover:block bg-white shadow-lg mt-1 border-t-2 border-yellow-500">
              <li>
                <a
                  className="block px-4 py-2 text-customDarkGray hover:text-customYellow"
                  href="/about"
                >
                  AboutUs
                </a>
                <hr className="ml-3 border-customLightGray" />
              </li>
              <li>
                <a
                  className="block px-4 py-2 text-customDarkGray hover:text-customYellow"
                  href="/ourTeam"
                >
                  OurPeople
                </a>
                <hr className="ml-3 border-customLightGray" />
              </li>
              <li>
                <a
                  className="block px-4 py-2 text-customDarkGray hover:text-customYellow"
                  href="/testimonials"
                >
                  Testimonials
                </a>
                <hr className="ml-3 border-customLightGray" />
              </li>
              <li>
                <a
                  className="block px-4 py-2 text-customDarkGray hover:text-customYellow"
                  href="/faq"
                >
                  Faq
                </a>
                <hr className="ml-3 border-customLightGray" />
              </li>
              <li>
                <a
                  className="block px-4 py-2 text-customDarkGray hover:text-customYellow"
                  href="/pricing"
                >
                  Pricing
                </a>
                <hr className="ml-3 border-customLightGray" />
              </li>
            </ul>
          </li>
          <li className="relative group">
            <p className="block text-white hover:text-customYellow cursor-pointer font-bold">
              Projects<span className="icon-cheveron-down"></span>
            </p>
            <ul className="hidden group-hover:block bg-white shadow-lg mt-1 border-t-2 border-yellow-500">
              <li>
                <a
                  className="block px-4 py-2 text-customDarkGray hover:text-customYellow"
                  href="/projectAll"
                >
                  ProjectAll
                </a>
                <hr className="ml-3 border-customLightGray" />
              </li>
              <li>
                <a
                  className="block px-4 py-2 text-customDarkGray hover:text-customYellow"
                  href="/projectSingle"
                >
                  ProjectSingle
                </a>
              </li>
            </ul>
          </li>
          <li className="relative group">
            <p className="block text-white hover:text-customYellow cursor-pointer font-bold">
              Services<span className="icon-cheveron-down"></span>
            </p>
            <ul className="hidden group-hover:block bg-white shadow-lg mt-1 border-t-2 border-yellow-500">
              <li>
                <a
                  className="block px-4 py-2 text-customDarkGray hover:text-customYellow"
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
            <p className="block text-white hover:text-customYellow cursor-pointer font-bold">
              Features<span className="icon-cheveron-down"></span>
            </p>
            <ul className="hidden group-hover:block bg-white shadow-lg mt-1 border-t-2 border-yellow-500">
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
                <p className="block px-4 py-2 text-customDarkGray hover:text-customYellow cursor-pointer">
                  ParentMenu<span className="icon-arrow_forward_ios"></span>
                </p>
                <ul className="hidden bg-white shadow-lg mt-1 border-t-2 border-yellow-500 group-hover:block">
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
            <p className="block text-white hover:text-customYellow cursor-pointer font-bold">
              News<span className="icon-cheveron-down"></span>
            </p>
            <ul className="hidden group-hover:block bg-white shadow-lg mt-1 border-t-2 border-yellow-500">
              <li>
                <a
                  className="block px-4 py-2 text-customDarkGray hover:text-customYellow"
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
      </div>
    </div>
  );
};

export default Navbar;
