"use client"

import { getCookie } from "@/lib/getCookie";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AdminDashboard() {
    const router = useRouter();

    useEffect(() => {
        //Temprary Solution:
        if(!getCookie("accessToken")){
            return router.push('/admin/login', { scroll: false });
        }
    }, []);
    
    return (
      <div className="w-full min-h-screen flex justify-between bg-violet-50">
          
      </div>)
  }