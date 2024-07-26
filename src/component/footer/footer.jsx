import React from "react";

const Footer = () => {
  return (
    <footer className="bg-customYellow text-black py-8 w-full">
      <div className="text-center">
        <div className="container text-sm font-semibold mx-auto flex flex-col lg:flex-row justify-around items-center gap-4 lg:gap-0">
          <div>
            <p>&copy; 2024, Designed & Developed by Themefisher</p>
          </div>
          <div className="flex flex-wrap justify-center lg:justify-start space-x-4">
            <a href="/about" className="hover:text-white">
              About
            </a>
            <a href="/ourTeam" className="hover:text-white">
              Our people
            </a>
            <a href="/faq" className="hover:text-white">
              Faq
            </a>
            <a href="/newsLeftSidebar" className="hover:text-white">
              Blog
            </a>
            <a href="/pricing" className="hover:text-white">
              Pricing
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
