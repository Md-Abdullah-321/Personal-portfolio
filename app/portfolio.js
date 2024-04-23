"use client"

import { useEffect, useState } from "react";
import ImageSlider from "./slider/slider";

export default function Portfolio() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchProject = async () => {
            const res = await fetch("https://portfolio-server-c0fa.onrender.com/api/project");
            const data = await res.json();
            const projectImageArray = [];
            data.payload.forEach(project => projectImageArray.push(project.projectImages));
            setProjects([...projectImageArray]);
        }

        fetchProject();
    }, [])

   
  return (
    <div className="w-full min-h-[700px]  py-20 flex flex-col justify-center items-center" id="portfolio">
     <div className="flex flex-col justify-center items-center w-full">
            <h2 className=" uppercase text-5xl sm:text-6xl md:text-8xl font-extrabold text-gray-200">Portfolio</h2>
            <h3 className="absolute text-3xl sm:text-4xl md:text-5xl uppercase font-extrabold md:mt-1.5 bg-gradient-to-r from-violet-600 to-violet-300 ... inline-block ... text-transparent ... bg-clip-text">my recent work</h3>
      </div>

      {projects.length > 0 && <ImageSlider imageArray={projects}/>}
    </div>
  )
}
