import React, { useState, useEffect, useRef } from "react";
import fact1 from "../../images/main/fact/fact1.png";
import fact2 from "../../images/main/fact/fact2.png";
import fact3 from "../../images/main/fact/fact3.png";
import fact4 from "../../images/main/fact/fact4.png";

const Facts = () => {
  const [projectCount, setProjectCount] = useState(0);
  const [staffCount, setStaffCount] = useState(0);
  const [hoursCount, setHoursCount] = useState(0);
  const [countriesCount, setCountriesCount] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  // Initialize Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  // Animation Logic
  useEffect(() => {
    if (isInView) {
      const duration = 2000; 
      const steps = 100; 
      const incrementProjects = 1789 / steps;
      const incrementStaff = 647 / steps;
      const incrementHours = 4000 / steps;
      const incrementCountries = 44 / steps;

      const interval = setInterval(() => {
        setProjectCount((prev) => {
          const nextValue = prev + incrementProjects;
          return nextValue >= 1789 ? 1789 : nextValue;
        });
        setStaffCount((prev) => {
          const nextValue = prev + incrementStaff;
          return nextValue >= 647 ? 647 : nextValue;
        });
        setHoursCount((prev) => {
          const nextValue = prev + incrementHours;
          return nextValue >= 4000 ? 4000 : nextValue;
        });
        setCountriesCount((prev) => {
          const nextValue = prev + incrementCountries;
          return nextValue >= 44 ? 44 : nextValue;
        });
      }, duration / steps);

      return () => clearInterval(interval);
    }
  }, [isInView]);

  return (
    <div
      ref={ref}
      className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-28 bg-customFactGray py-16 px-4"
    >
      <div className="flex flex-col items-center gap-4">
        <img src={fact1} alt="Total Projects" className="w-14 h-14" />
        <h1 className="text-3xl md:text-5xl font-bold text-white">
          {Math.round(projectCount)}
        </h1>
        <p className="text-xs md:text-sm text-yellow-500 font-medium">
          TOTAL PROJECTS
        </p>
      </div>
      <div className="flex flex-col items-center gap-4">
        <img src={fact2} alt="Staff Members" className="w-14 h-14" />
        <h1 className="text-3xl md:text-5xl font-bold text-white">
          {Math.round(staffCount)}
        </h1>
        <p className="text-xs md:text-sm text-yellow-500 font-medium">
          STAFF MEMBERS
        </p>
      </div>
      <div className="flex flex-col items-center gap-4">
        <img src={fact3} alt="Hours of Work" className="w-14 h-14" />
        <h1 className="text-3xl md:text-5xl font-bold text-white">
          {Math.round(hoursCount)}
        </h1>
        <p className="text-xs md:text-sm text-yellow-500 font-medium">
          HOURS OF WORK
        </p>
      </div>
      <div className="flex flex-col items-center gap-4">
        <img src={fact4} alt="Countries Experience" className="w-14 h-14" />
        <h1 className="text-3xl md:text-5xl font-bold text-white">
          {Math.round(countriesCount)}
        </h1>
        <p className="text-xs md:text-sm text-yellow-500 font-medium">
          COUNTRIES EXPERIENCE
        </p>
      </div>
    </div>
  );
};

export default Facts;
