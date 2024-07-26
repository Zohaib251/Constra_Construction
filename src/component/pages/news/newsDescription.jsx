import React from "react";
import Sidebar from "./sidebar.jsx";
import image1 from "../../../images/main/recentProject/recentProject1.jpg";
import person1 from "../../../images/main/testimonials/testimonial1.png";
import person2 from "../../../images/main/testimonials/testimonial2.png";
import person3 from "../../../images/main/testimonials/testimonial3.png";

const NewsDescription = () => {
  return (
    <div className="flex flex-col md:flex-row my-10 space-x-0 md:space-x-20 justify-center">
      <div className="flex flex-col pb-8 ">
        <div className="">
          <img src={image1} className="w-full md:w-4/5" alt="Recent Project" />
          <div className="space-x-3 my-3 text-sm text-customMediumGray">
            <span className="icon-user hover:text-customYellow pr-3 border-r-2 border-customMediumGray border-opacity-20">
              Admin
            </span>
            <span className="icon-folder-open-o hover:text-customYellow pr-3 border-r-2 border-customMediumGray border-opacity-20">
              News
            </span>
            <span className="icon-calendar_today hover:text-customYellow pr-3 border-r-2 border-customMediumGray border-opacity-20">
              June 14, 2016
            </span>
            <span className="icon-bubble2 hover:text-customYellow">
              03 Comments
            </span>
          </div>

          <h2 className="font-bold text-xl text-black hover:text-customYellow">
            We Just Completed $17.6 Million Medical Clinic In Mid-Missouri
          </h2>
          <p className="text-customDarkGray text-sm my-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et
            <br /> dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip
            <br /> ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore
            <br /> eu fugiat nulla pariatur.
            <br />
            <br />
            Kucididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco
            <br /> laboris nisi ut aliquip ex ea commodo consequat. Duis aute
            irure dolor in reprehenderit in voluptate velit
            <br /> esse cillum dolore eu fugiat nulla pariatur. Excepteur Lorem
            ipsum dolor sit amet, consectetur adipisicing
            <br /> elit, sed do
            <br />
            <br />
            Eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud
            <br /> exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in
            <br /> reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat
            <br /> cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum. Sed ut perspiciatis
            <br /> unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium.
          </p>

          {/* BlockQuote */}
          <div className="flex bg-gray-100 py-5 pl-5 mt-8 border-l-4 border-customYellow">
            <div className="mt-[-20px] mr-4">
              <span className="icon-quote-left text-4xl text-customLightGray"></span>
            </div>
            <div>
              <blockquote className="text-gray-600 text-xs">
                <p>
                  Eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud <br /> exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor.
                </p>
                <p className="text-xs">- Anger Mathe</p>
              </blockquote>
            </div>
          </div>
          <p className="text-customDarkGray text-sm my-3">
            <br />
            Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et
            quasi architecto beatae vitae dicta
            <br /> sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia
            <br /> consequuntur magni dolores eos quira tione voluptatem sequi
            nesciunt. Neque porro quisquam est, qui
            <br /> dolorem ipsum quia dolor sit amet, consectetur, adipisci
            velit, sed quia non numquam eius modi tempora
            <br /> incidunt ue magnam aliquam quaerat voluptatem.
          </p>
          {/* Share Button */}
          <div className="flex flex-col md:flex-row my-3 space-y-2 md:space-y-0 md:space-x-8">
            <div className="flex flex-wrap space-x-2">
              <div className="border-2 py-1 text-sm border-customMediumGray border-opacity-20 w-24 text-center text-customDarkGray cursor-pointer hover:bg-customYellow">
                Construction
              </div>
              <div className="border-2 py-1 text-sm border-customMediumGray border-opacity-20 w-20 text-center text-customDarkGray cursor-pointer hover:bg-customYellow">
                Safety
              </div>
              <div className="border-2 py-1 text-sm border-customMediumGray border-opacity-20 w-20 text-center text-customDarkGray cursor-pointer hover:bg-customYellow">
                Planning
              </div>
            </div>
            <div className="flex space-x-2">
              <p className="text-customDarkGray text-sm">Share:</p>
              <span className="icon-facebook bg-blue-900 cursor-pointer text-xs px-2 py-1 text-white"></span>
              <span className="icon-twitter bg-sky-400 cursor-pointer text-xs px-2 py-1 text-white"></span>
              <span className="icon-google-plus3 bg-red-700 cursor-pointer text-xs px-2 py-1 text-white"></span>
              <span className="icon-linkedin-square bg-cyan-600 cursor-pointer text-xs px-2 py-1 text-white"></span>
            </div>
          </div>

          <div className="border-2 border-black border-opacity-10 p-3">
            <div className="md:flex space-x-4">
              <img src={person1} alt="Profile Picture" className="w-12 h-14 md:w-24 md:h-24" />
              <div>
                <h2 className="text-xl text:left mt-4 md:mt-0 font-semibold">
                  ELTON THEMEN{" "}
                  <span className="text-xs text-customMediumGray font-semibold border-l-2 border-customMediumGray border-opacity-25 pl-2">
                    SITE ENGINEER
                  </span>
                </h2>
                <p className="text-sm text-customDarkGray">
                  Lisicing elit, sed do eiusmod tempor ut labore et dolore magna
                  aliqua. Ut enim
                  <br /> ad vene minim veniam, quis nostrud exercitation nisi ex
                  ea commodo.
                  <br />
                  <br />
                  Website: http://www.example.com
                </p>
              </div>
            </div>
          </div>

          {/* Comments */}
          <h2 className="font-bold text-xl my-6">07 COMMENTS</h2>
          {/* Comment 1 */}
          <div className="border-b-2 border-black border-opacity-5 mb-3 p-3">
            <div className="flex space-x-4">
              <img src={person1} alt="Profile Picture" className="w-18 h-16" />
              <div>
                <h2 className="text-lg font-semibold">
                  Michelle Aimber
                  <span className="text-xs text-customMediumGray font-semibold pl-2">
                    January 17, 2016 at 1:38 pm
                  </span>
                </h2>
                <p className="text-sm my-4 text-customDarkGray">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor
                  <br /> incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis
                  <br /> nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat.
                  <br /> Duis aute irure dolor in reprehen
                </p>
                <p className="font-bold mt-3 hover:text-customYellow">Reply</p>
              </div>
            </div>
          </div>
          {/* Comment 2 */}
          <div className="border-b-2 border-black border-opacity-5 mb-3 p-3 ml-0 md:ml-20">
            <div className="flex space-x-4">
              <img src={person2} alt="Profile Picture" className="w-18 h-16" />
              <div>
                <h2 className="text-lg font-semibold">
                  Tom Harnandez
                  <span className="text-xs text-customMediumGray font-semibold pl-2">
                    January 17, 2016 at 1:38 pm
                  </span>
                </h2>
                <p className="text-sm my-4 text-customDarkGray">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor
                  <br /> incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis
                  <br /> nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat.
                  <br /> Duis aute irure dolor in reprehen
                </p>
                <p className="font-bold mt-3 hover:text-customYellow">Reply</p>
              </div>
            </div>
          </div>
          {/* Comment 3 */}
          <div className="border-b-2 border-black border-opacity-5 mb-3 p-3 ml-0 md:ml-20">
            <div className="flex space-x-4">
              <img src={person3} alt="Profile Picture" className="w-18 h-16" />
              <div>
                <h2 className="text-lg font-semibold">
                  Lauren Paul
                  <span className="text-xs text-customMediumGray font-semibold pl-2">
                    January 17, 2016 at 1:38 pm
                  </span>
                </h2>
                <p className="text-sm my-4 text-customDarkGray">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor
                  <br /> incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis
                  <br /> nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat.
                  <br /> Duis aute irure dolor in reprehen
                </p>
                <p className="font-bold mt-3 hover:text-customYellow">Reply</p>
              </div>
            </div>
          </div>
          {/* Comment Form */}
          <div className=" p-3 my-6">
            <h2 className="font-bold text-xl mb-3">ADD A COMMENT</h2>
            <form>
              <div className="flex flex-col space-y-4">
                <textarea
                  placeholder="Comment"
                  className="border-2 border-black border-opacity-10 p-2 w-full focus:border-customYellow focus:border-opacity-30 focus:outline-none"
                  rows="4"
                ></textarea>
                <div className="md:flex justify-between md:space-x-3  text-left mb-10">
                  <div className="md:w-1/3 ">
                    <input
                      type="text"
                      className="w-full px-4 py-2  text-black border-black border-2 border-opacity-10 focus:border-customYellow focus:border-opacity-30  focus:outline-none "
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="md:w-1/3 ">
                    <input
                      type="text"
                      className="w-full px-4 py-2  border-black border-2 border-opacity-10 focus:border-customYellow focus:border-opacity-30  focus:outline-none "
                      placeholder="Your Email"
                    />
                  </div>
                  <div className="md:w-1/3 ">
                    <input
                      type="text"
                      className="w-full px-4 py-2 border-black border-2 border-opacity-10 focus:border-customYellow focus:border-opacity-30  focus:outline-none "
                      placeholder="Your Website"
                    />
                  </div>
                </div>

              </div>
                <button
                  type="submit"
                  className="bg-customYellow text-white py-2 mt-5 rounded-sm font-semibold px-4 hover:bg-black"
                >
                  Post Comment
                </button>
            </form>
          </div>
        </div>
      </div>
      {/* Sidebar */}
      <div style={{ width: "30%" }}>
        <Sidebar />
      </div>
    </div>
  );
};

export default NewsDescription;
