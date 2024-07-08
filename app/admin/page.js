"use client"

import Loader from "@/components/loading";
import Sidebar from "@/components/sidebar";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function AdminDashboard() {
    const [loading, setLoading] = useState(true);
    const router = useRouter();
    useEffect(() => {
      const timer = setTimeout(() => {
        setLoading(false); 
      }, 2000); 
  
      return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        //Temprary Solution:
        if(!localStorage.getItem("User")){
            return router.push('/admin/login', { scroll: false });
        }
    }, []);
    
    return loading ? <Loader/> : (
      <div className="w-full min-h-screen flex justify-between">
         <Sidebar/>
        <div className="h-screen w-10/12">

        </div>
      </div>
    )
  }