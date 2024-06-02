"use client"

import Sidebar from "@/components/sidebar";
import { useEffect, useState } from "react";
import Cart from "./cart";

function Projects() {
  const [projects, setProjects] = useState( []);
  useEffect(() => {
      //Temprary Solution:
      if(!localStorage.getItem("User")){
          return router.push('/admin/login', { scroll: false });
      }
  }, []);

    useEffect(() => {
        const fetchProject = async () => {
            const res = await fetch("https://portfolio-server-c0fa.onrender.com/api/project");
            const data = await res.json();
            setProjects([...data.payload]);
        }

        fetchProject();
    }, [])

  
    return (
      <div className="w-full min-h-screen flex justify-between">
         <Sidebar/>
        <div className="min-h-screen w-full md:w-10/12 my-10">
            <div className="flex flex-col justify-center items-center w-full">
                <h2 className=" uppercase text-5xl sm:text-6xl md:text-8xl font-extrabold text-gray-200">Portfolio</h2>
                <h3 className="absolute text-3xl sm:text-4xl md:text-5xl uppercase font-extrabold md:mt-1.5 bg-gradient-to-r from-violet-600 to-violet-300 ... inline-block ... text-transparent ... bg-clip-text">my recent work</h3>
          </div>


          <div className="md:p-20 flex gap-10 flex-wrap w-full justify-center items-center mt-10">
             {projects?.map((item, index) => <Cart key={index} project={item}/>)}
          </div>
        </div>
      </div>
    )
}

export default Projects;