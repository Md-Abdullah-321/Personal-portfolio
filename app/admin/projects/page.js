"use client"

import Sidebar from "@/components/sidebar";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function Projects() {
  const [screenWidth, setScreenWidth] = useState(0);
  const router = useRouter();
  useEffect(() => {
      //Temprary Solution:
      if(!localStorage.getItem("User")){
          return router.push('/admin/login', { scroll: false });
      }
  }, []);

  useEffect(() => {
    const updateScreenWidth = () => setScreenWidth(window.innerWidth);
    updateScreenWidth();
    window.addEventListener('resize', updateScreenWidth);
    return () => window.removeEventListener('resize', updateScreenWidth);
  }, []);
    return (
      <div className="w-full min-h-screen flex justify-between">
         {screenWidth > 1024 && <Sidebar/>}
        <div className="w-10/12 h-screen">Projects</div>
      </div>
    )
}

export default Projects;