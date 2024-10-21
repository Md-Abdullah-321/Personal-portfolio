"use client"

import { BASE_URL } from "@/env";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { useSelector } from "react-redux";
import Cart from "./cart";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [tooltip, setTooltip] = useState(false);
  const user = useSelector((state) => state.user);
  const isLoggedIn = useSelector((state) => state.userState.isLoggedIn);
  const router = useRouter()

  useEffect(() => {
      //Temprary Solution:
      if(!isLoggedIn){
          return router.push('/admin/login', { scroll: false });
      }
  }, []);

    useEffect(() => {
        const fetchProject = async () => {
            const res = await fetch(`${BASE_URL}/project`);
            const data = await res.json();
            setProjects([...data.payload]);
        }

        fetchProject();
    }, [])

    const handleDeleteProject = async (id) => {
      const isAgree = confirm("Are you sure to delete this project?");
      if(isAgree){
       const response = await fetch(`${BASE_URL}/project/${id}`, {
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
      <div className="w-full h-auto p-10 flex flex-col justify-center items-center bg-violet-50 overflow-visible">
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
    )
}

export default Projects;