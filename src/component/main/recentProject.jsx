import React from 'react';
import recentProject1 from "../../images/main/recentProject/recentProject1.jpg";
import recentProject2 from "../../images/main/recentProject/recentProject2.jpg"; 
import recentProject3 from "../../images/main/recentProject/recentProject3.jpg";

const RecentProject = () => {
  return (
    <div className='md:justify-center  p-4 md:p-8'>
      <div className='my-8 md:my-16'>
        <p className="text-center text-3xl md:text-4xl font-bold mb-6 md:mb-10 z-10">
          <span className="text-gray-500 font-normal text-lg md:text-xl">
            WORK OF EXCELLENCE
          </span>
          <br />
          RECENT PROJECTS
        </p>
      </div>
      <div className='md:justify-center  flex flex-col md:flex-row md:gap-8'>
        {/* Project 1 */}
        <div className='flex flex-col items-center mb-8 md:mb-0'>
          <a href="/">
            <div className='w-full md:w-80 mb-4'>
              <img src={recentProject1} alt="recentProject" className='w-full h-auto object-cover' />
            </div>
            <div className='text-left md:w-80'>
              <h2 className='font-semibold text-base md:text-base hover:text-customYellow'>
                WE JUST COMPLETED $17.6 MILLION MEDICAL CLINIC IN MID-MISSOURI
              </h2>
              <p className='text-sm text-customMediumGray'>JULY 20, 2017</p>
            </div>
          </a>
        </div>

        {/* Project 2 */}
        <div className='flex flex-col items-center mb-8 md:mb-0'>
          <a href="/">
            <div className='w-full md:w-80 mb-4'>
              <img src={recentProject2} alt="recentProject" className='w-full h-auto object-cover' />
            </div>
            <div className='text-left md:w-80'>
              <h2 className='font-semibold text-base md:text-base hover:text-customYellow'>
                THANDLER AIRPORT WATER RECLAMATION FACILITY EXPANSION PROJECT NAMED
              </h2>
              <p className='text-sm text-customMediumGray'>JUNE 17, 2017</p>
            </div>
          </a>
        </div>

        {/* Project 3 */}
        <div className='flex flex-col items-center'>
          <a href="/">
            <div className='w-full md:w-80 mb-4'>
              <img src={recentProject3} alt="recentProject" className='w-full h-auto object-cover' />
            </div>
            <div className='text-left md:w-80'>
              <h2 className='font-semibold text-base md:text-base hover:text-customYellow'>
                SILICON BENCH AND CORNIKE BEGIN CONSTRUCTION SOLAR FACILITIES
              </h2>
              <p className='text-sm text-customMediumGray'>AUG 13, 2017</p>
            </div>
          </a>
        </div>
      </div>
      <div className="mt-8 md:mt-16 flex justify-center">
        <a href="/newsLeftSidebar">
          <button className="bg-customYellow p-3 text-white cursor-pointer font-bold rounded-sm hover:bg-black">
            SEE ALL POSTS
          </button>
        </a>
      </div>
    </div>
  );
};

export default RecentProject;
