import React from 'react'
import recentProject1 from "../../images/main/recentProject/recentProject1.jpg"
import recentProject2 from "../../images/main/recentProject/recentProject2.jpg" 
import recentProject3 from "../../images/main/recentProject/recentProject3.jpg" 

const recentProject = () => {
  return (
    <div className='justify-center text-center'>
    <div className='my-16'>
       <p className="text-center text-4xl font-bold mb-10 z-10">
          <span className="text-gray-500 font-normal text-xl">
            WORK OF EXCELLENCE
          </span>
          <br />
          RECENT PROJECTS
        </p>
    </div>
    <div className='flex justify-center text-center gap-8'>
    <div className='justify-center text-center flex '>
        <div>
        <a href="/">
            <div className='w-80 ' >
                <img  src={recentProject1} alt="recentProject" />
            </div>
            <div className='text-left mt-6 w-80  '>
              <h2 className='font-semibold text-base hover:text-customYellow'>
              WE JUST COMPLETES $17.6 MILLION MEDICAL CLINIC IN MID-MISSOURI
              </h2>
              <p className='text-sm text-customMediumGray'>JULY 20, 2017</p>
            </div>
            </a>
        </div>

    </div>
    <div className='justify-center text-center flex '>
        <div>
        <a href="/">
            <div className='w-80 ' >
                <img  src={recentProject2} alt="recentProject" />
            </div>
            <div className='text-left mt-6 w-80  '>
              <h2 className='font-semibold text-base hover:text-customYellow'>
              THANDLER AIRPORT WATER RECLAMATION FACILITY EXPANSION PROJECT NAMED
              </h2>
              <p className='text-sm text-customMediumGray'> JUNE 17, 2017</p>
            </div>
            </a>
        </div>

    </div>
    <div className='justify-center text-center flex '>
        <div>
        <a href="/">
            <div className='w-80 ' >
                <img  src={recentProject3} alt="recentProject" />
            </div>
            <div className='text-left mt-6 w-80  '>
              <h2 className='font-semibold text-base hover:text-customYellow'>
              SILICON BENCH AND CORNIKE BEGIN CONSTRUCTION SOLAR FACILITIES
              </h2>
              <p className='text-sm text-customMediumGray'> AUG 13, 2017</p>
            </div>
            </a>
        </div>

    </div>
    </div>
    <div className="mt-16 justify-center text-center">
        <a href="/newsLeftSidebar">
          <button className="bg-customYellow p-3 text-white cursor-pointer font-bold rounded-sm hover:bg-[#000000]">
            SEE ALL POSTS
          </button>
        </a>
      </div>
    </div>
  )
}

export default recentProject
