"use client"

import Sidebar from "@/components/sidebar";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from "react";
import { IoMdAdd } from "react-icons/io";
import Cart from "./cart";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [tooltip, setTooltip] = useState(false);
  const router = useRouter()
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

    const handleDeleteProject = async (id) => {
      const isAgree = confirm("Are you sure to delete this project?");
      if(isAgree){
       const response = await fetch(`https://portfolio-server-c0fa.onrender.com/api/project/${id}`, {
           method: "DELETE"
       });

       const data = await response.json();

       if(data.success){
           alert(data.messege);
       }else{
           alert("Could not delete project.");
       }
      }
     

      //Remove project from state:
      setProjects((prev) => {
        const updatedState = prev.filter((item) => item._id !== id);

        return updatedState;
      })
   }

   const handleEditProject = (project) => {
      localStorage.setItem("project", JSON.stringify(project));
      router.push('/admin/createNewProject')
   }
  
    return (
      <div className="w-full min-h-screen flex justify-between">
         <Sidebar/>
         <div className="lg:w-[300px] hidden lg:block"></div>
        <div className="min-h-screen w-full md:w-10/12 my-10">
            <div className="flex flex-col justify-center items-center w-full">
                <h2 className=" uppercase text-5xl sm:text-6xl md:text-8xl font-extrabold text-gray-200">Portfolio</h2>
                <h3 className="absolute text-3xl sm:text-4xl md:text-5xl uppercase font-extrabold md:mt-1.5 bg-gradient-to-r from-violet-600 to-violet-300 ... inline-block ... text-transparent ... bg-clip-text">my recent work</h3>
          </div>


          <div className="lg:p-10 flex gap-10 flex-wrap w-full justify-center items-center mt-10">
             {projects?.map((item, index) => <Cart key={index} project={item} handleDeleteProject={handleDeleteProject} handleEditProject={handleEditProject}/>)}
          </div>

          {tooltip && <p className="fixed right-0 bottom-2 text-xs uppercase bg-gray-200 p-0.5 rounded-md" >Create new project!</p>}
          <Link className="fixed right-5 bottom-5 lg:right-10 lg:bottom-8 bg-gray-200 p-5 rounded-full cursor-pointer" onMouseEnter={() => setTooltip(true)}
        onMouseLeave={() => setTooltip(false)} href={"/admin/createNewProject"}>
              <IoMdAdd className="w-6 h-6"/>
          </Link>
        </div>
      </div>
    )
}

export default Projects;