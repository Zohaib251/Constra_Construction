import React, { useState } from "react";
import logo from "../../images/header/logo.png";

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
    <div className="font-montserrat sticky top-0 z-50">
      <div className="bg-white shadow-md h-28 flex justify-between items-center py-3 px-4 md:px-12">
        <img src={logo} alt="Logo" className="h-10" />

        <div className="menu-toggle md:hidden" onClick={toggleMenu}>
          <span className="block w-6 h-0.5 bg-customYellow mb-1"></span>
          <span className="block w-6 h-0.5 bg-customYellow mb-1"></span>
          <span className="block w-6 h-0.5 bg-customYellow"></span>
        </div>

        <ul className="hidden md:flex ml-6 items-center">
          <li className="relative group">
            <p className="block text-black cursor-pointer font-semibold">
              HOME<span className="icon-cheveron-down"></span>
            </p>
            <ul className="absolute left-0 hidden group-hover:block bg-white shadow-lg mt-1 pr-10 border-t-2 border-yellow-500">
              <li>
                <a className="block mx-2 px-4 py-2 hover:text-customYellow text-black" href="/">
                  HomeOne
                </a>
                <hr className="ml-3 border-customLightGray" />
              </li>
              <li>
                <a className="block mx-2 px-4 py-2 text-customYellow" href="/homeTwo">
                  HomeTwo
                </a>
              </li>
            </ul>
          </li>
          <li className="relative group">
            <p className="block px-4 py-2 text-black cursor-pointer font-bold">
              COMPANY<span className="icon-cheveron-down"></span>
            </p>
            <ul className="absolute left-0 hidden group-hover:block bg-white shadow-lg mt-1 border-t-2 border-yellow-500">
              <li>
                <a className="block px-4 py-2 text-customDarkGray hover:text-customYellow" href="/about">
                  AboutUs
                </a>
                <hr className="ml-3 border-customLightGray" />
              </li>
              <li>
                <a className="block px-4 py-2 text-customDarkGray hover:text-customYellow" href="/ourTeam">
                  OurPeople
                </a>
                <hr className="ml-3 border-customLightGray" />
              </li>
              <li>
                <a className="block px-4 py-2 text-customDarkGray hover:text-customYellow" href="/testimonials">
                  Testimonials
                </a>
                <hr className="ml-3 border-customLightGray" />
              </li>
              <li>
                <a className="block px-4 py-2 text-customDarkGray hover:text-customYellow" href="/faq">
                  Faq
                </a>
                <hr className="ml-3 border-customLightGray" />
              </li>
              <li>
                <a className="block px-4 py-2 text-customDarkGray hover:text-customYellow" href="/pricing">
                  Pricing
                </a>
                <hr className="ml-3 border-customLightGray" />
              </li>
            </ul>
          </li>
          <li className="relative group">
            <p className="block px-4 py-2 text-black cursor-pointer font-bold">
              PROJECTS<span className="icon-cheveron-down"></span>
            </p>
            <ul className="absolute left-0 hidden group-hover:block bg-white shadow-lg mt-1 border-t-2 border-yellow-500">
              <li>
                <a className="block px-4 py-2 text-customDarkGray hover:text-customYellow" href="/projectAll">
                  ProjectAll
                </a>
                <hr className="ml-3 border-customLightGray" />
              </li>
              <li>
                <a className="block px-4 py-2 text-customDarkGray hover:text-customYellow" href="/projectSingle">
                  ProjectSingle
                </a>
              </li>
            </ul>
          </li>
          <li className="relative group">
            <p className="block px-4 py-2 text-black cursor-pointer font-bold">
              SERVICES<span className="icon-cheveron-down"></span>
            </p>
            <ul className="absolute left-0 hidden group-hover:block bg-white shadow-lg mt-1 border-t-2 border-yellow-500">
              <li>
                <a className="block px-4 py-2 text-customDarkGray hover:text-customYellow" href="/serviceALL">
                  ServiceAll
                </a>
                <hr className="ml-3 border-customLightGray" />
              </li>
              <li>
                <a className="block px-4 py-2 text-customDarkGray hover:text-customYellow" href="/serviceSingle">
                  ServiceSingle
                </a>
              </li>
            </ul>
          </li>
          <li className="relative group">
            <p className="block px-4 py-2 text-black cursor-pointer font-bold">
              FEATURES<span className="icon-cheveron-down"></span>
            </p>
            <ul className="absolute left-0 hidden group-hover:block bg-white shadow-lg mt-1 border-t-2 border-yellow-500">
              <li>
                <a className="block px-4 py-2 text-customDarkGray hover:text-customYellow" href="/typography">
                  Typography
                </a>
                <hr className="ml-3 border-customLightGray" />
              </li>
              <li>
                <a className="block px-4 py-2 text-customDarkGray hover:text-customYellow" href="/404">
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
            <p className="block px-4 py-2 text-black cursor-pointer font-bold">
              NEWS<span className="icon-cheveron-down"></span>
            </p>
            <ul className="absolute left-0 hidden group-hover:block bg-white shadow-lg mt-1 border-t-2 border-yellow-500">
              <li>
                <a className="block px-4 py-2 text-customDarkGray hover:text-customYellow" href="/newsLeftSidebar">
                  NewsLeftSidebar
                </a>
                <hr className="ml-3 border-customLightGray" />
              </li>
              <li>
                <a className="block px-4 py-2 text-customDarkGray hover:text-customYellow" href="/newsRightSidebar">
                  NewsRightSidebar
                </a>
                <hr className="ml-3 border-customLightGray" />
              </li>
              <li>
                <a className="block px-4 py-2 text-customDarkGray hover:text-customYellow" href="/newsSingle">
                  NewsSingle
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a className="block px-4 py-2 text-black cursor-pointer font-bold" href="/contact">
              CONTACT
            </a>
          </li>
        </ul>
        
        <div className="hidden md:flex items-center">
          <button className="bg-customYellow font-semibold text-sm w-44 text-black px-6 py-3 rounded hover:bg-gray-800 hover:text-yellow-400 transition duration-300">
            Get A Free Quote
          </button>
        </div>
      </div>




      {/* Dropdown Menu for Small Screens */}
      <ul
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:hidden bg-white shadow-lg border-t-2 border-yellow-500 p-4`}
      >
        <li className="relative group">
          <p className="block text-black cursor-pointer font-bold">
            Home<span className="icon-cheveron-down"></span>
          </p>
          <ul className="pl-4 hidden group-hover:block">
            <li>
              <a className="block py-2 text-black hover:text-customYellow" href="/">
                HomeOne
              </a>
            </li>
            <li>
              <a className="block py-2 text-customYellow" href="/homeTwo">
                HomeTwo
              </a>
            </li>
          </ul>
        </li>
        <li className="relative group">
          <p className="block text-black cursor-pointer font-bold">
            Company<span className="icon-cheveron-down"></span>
          </p>
          <ul className="pl-4 hidden group-hover:block">
            <li>
              <a className="block py-2 text-customDarkGray hover:text-customYellow" href="/about">
                AboutUs
              </a>
            </li>
            <li>
              <a className="block py-2 text-customDarkGray hover:text-customYellow" href="/ourTeam">
                OurPeople
              </a>
            </li>
            <li>
              <a className="block py-2 text-customDarkGray hover:text-customYellow" href="/testimonials">
                Testimonials
              </a>
            </li>
            <li>
              <a className="block py-2 text-customDarkGray hover:text-customYellow" href="/faq">
                Faq
              </a>
            </li>
            <li>
              <a className="block py-2 text-customDarkGray hover:text-customYellow" href="/pricing">
                Pricing
              </a>
            </li>
          </ul>
        </li>
        <li className="relative group">
          <p className="block text-black cursor-pointer font-bold">
            Projects<span className="icon-cheveron-down"></span>
          </p>
          <ul className="pl-4 hidden group-hover:block">
            <li>
              <a className="block py-2 text-customDarkGray hover:text-customYellow" href="/projectAll">
                ProjectAll
              </a>
            </li>
            <li>
              <a className="block py-2 text-customDarkGray hover:text-customYellow" href="/projectSingle">
                ProjectSingle
              </a>
            </li>
          </ul>
        </li>
        <li className="relative group">
          <p className="block text-black cursor-pointer font-bold">
            Services<span className="icon-cheveron-down"></span>
          </p>
          <ul className="pl-4 hidden group-hover:block">
            <li>
              <a className="block py-2 text-customDarkGray hover:text-customYellow" href="/serviceALL">
                ServiceAll
              </a>
            </li>
            <li>
              <a className="block py-2 text-customDarkGray hover:text-customYellow" href="/serviceSingle">
                ServiceSingle
              </a>
            </li>
          </ul>
        </li>
        <li className="relative group">
          <p className="block text-black cursor-pointer font-bold">
            Features<span className="icon-cheveron-down"></span>
          </p>
          <ul className="pl-4 hidden group-hover:block">
            <li>
              <a className="block py-2 text-customDarkGray hover:text-customYellow" href="/typography">
                Typography
              </a>
            </li>
            <li>
              <a className="block py-2 text-customDarkGray hover:text-customYellow" href="/404">
                404
              </a>
            </li>
            <li className="relative group">
              <p className="block py-2 text-customDarkGray hover:text-customYellow cursor-pointer">
                ParentMenu<span className="icon-arrow_forward_ios"></span>
              </p>
              <ul className="pl-4 hidden">
                <li>
                  <p className="block py-2 text-customDarkGray hover:text-customYellow">
                    ChildMenu1
                  </p>
                </li>
                <li>
                  <p className="block py-2 text-customDarkGray hover:text-customYellow">
                    ChildMenu2
                  </p>
                </li>
                <li>
                  <p className="block py-2 text-customDarkGray hover:text-customYellow">
                    ChildMenu3
                  </p>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="relative group">
          <p className="block text-black cursor-pointer font-bold">
            News<span className="icon-cheveron-down"></span>
          </p>
          <ul className="pl-4 hidden group-hover:block">
            <li>
              <a className="block py-2 text-customDarkGray hover:text-customYellow" href="/newsLeftSidebar">
                NewsLeftSidebar
              </a>
            </li>
            <li>
              <a className="block py-2 text-customDarkGray hover:text-customYellow" href="/newsRightSidebar">
                NewsRightSidebar
              </a>
            </li>
            <li>
              <a className="block py-2 text-customDarkGray hover:text-customYellow" href="/newsSingle">
                NewsSingle
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a className="block py-2 text-black cursor-pointer font-bold" href="/contact">
            Contact
          </a>
        </li>
        <div className=" md:flex items-center">
          <button className="bg-customYellow font-bold text-black px-2 py-2 rounded hover:bg-gray-800 hover:text-yellow-400 transition duration-300">
            Get A Free Quote
          </button>
        </div>
      </ul>
     
    </div>
  );
};

export default Navbar;
