"use client"

import { useState } from "react";
import { GoArrowRight } from "react-icons/go";
import DetailsAbout from "./detailsAbout";
import Education from "./education";
import Experience from "./experience";


export default function MyDetails() {
  const [section, setSection] = useState("about");
  console.log(section);
  return (
    <div className="bg-gray-50 font-sans ">
      <div className="md:h-[700px] flex flex-col md:flex-row justify-between items-center md:w-11/12 lg:w-9/12 mx-auto ">
        <div className="p-6 md:p-0 md:w-3/12">
          <h5 className="text-orange-500 font-semibold text-xl">Resume</h5>
          <h2 className="text-5xl font-extrabold">All over my details find here...</h2>

          <div className="mt-5 flex flex-col justify-center items-center gap-y-2">
            <div className={section === "about"? "w-full bg-black text-white flex justify-between items-center px-5 py-3 font-semibold group transition-all rounded-md cursor-pointer hover:bg-black hover:text-white": "w-full bg-white flex justify-between items-center px-5 py-3 font-semibold group transition-all rounded-md cursor-pointer hover:bg-black hover:text-white"} onClick={() => setSection("about")}>About Me <GoArrowRight  className='w-5 h-5 -rotate-45 group-hover:rotate-0'/></div>            
            
            <div className={section === "education"? "w-full bg-black text-white flex justify-between items-center px-5 py-3 font-semibold group transition-all rounded-md cursor-pointer hover:bg-black hover:text-white": "w-full bg-white flex justify-between items-center px-5 py-3 font-semibold group transition-all rounded-md cursor-pointer hover:bg-black hover:text-white"} onClick={() => setSection("education")}> Education <GoArrowRight  className='w-5 h-5 -rotate-45 group-hover:rotate-0'/></div>  

            <div className={section === "experience"? "w-full bg-black text-white flex justify-between items-center px-5 py-3 font-semibold group transition-all rounded-md cursor-pointer hover:bg-black hover:text-white": "w-full bg-white flex justify-between items-center px-5 py-3 font-semibold group transition-all rounded-md cursor-pointer hover:bg-black hover:text-white"} onClick={() => setSection("experience")}> Experience <GoArrowRight  className='w-5 h-5 -rotate-45 group-hover:rotate-0'/></div>
          </div>
        </div>
        <div className="p-6 md:p-0 w-full md:w-8/12">
          {section === "about" && <DetailsAbout/>}
          {section === "education" && <Education/>}
          {section === "experience" && <Experience/>}
        </div>
    </div>
    </div>
  )
}
