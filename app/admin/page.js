"use client"

import Sidebar from "@/components/sidebar";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AdminDashboard() {
    const router = useRouter();
    useEffect(() => {
        //Temprary Solution:
        if(!localStorage.getItem("User")){
            return router.push('/admin/login', { scroll: false });
        }
    }, []);

    
    return (
      <div className="w-full min-h-screen flex justify-between">
         <Sidebar/>
        <div className="h-screen w-10/12">

        </div>
      </div>
    )
  }