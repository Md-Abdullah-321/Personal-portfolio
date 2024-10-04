"use client"

import { useEffect, useState } from "react";
import ImageSlider from "./slider/slider";

export default function Portfolio() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchProject = async () => {
            const res = await fetch("https://backend.server.mdabdullah.info/api/project");
            const data = await res.json();
            setProjects([...data.payload]);
        }

        fetchProject();
    }, [])

  return (
    <div className="w-full h-[500px] sm:min-h-[700px]  py-20 flex flex-col justify-center items-center" id="portfolio">
     <div className="flex flex-col justify-center items-center w-full">
            <h2 className=" uppercase text-5xl sm:text-6xl md:text-8xl font-extrabold text-gray-200">Portfolio</h2>
            <h3 className="absolute text-3xl sm:text-4xl md:text-5xl uppercase font-extrabold md:mt-1.5 bg-gradient-to-r from-violet-600 to-violet-300 ... inline-block ... text-transparent ... bg-clip-text">my recent work</h3>
      </div>

      <div className="w-full lg:w-5/6 mx-auto mt-20 px-2 sm:px-5 lg:px-0 h-2/3 flex justify-center items-center">
      {projects.length > 0 && <ImageSlider projects={projects}/>}
      {!(projects.length > 0) && <p className="text-xl uppercase font-extrabold text-gray-200">Fetching Projects...</p>}
      </div>
    </div>
  )
}
