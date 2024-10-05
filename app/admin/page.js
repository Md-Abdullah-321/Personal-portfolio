"use client"

import { getCookie } from "@/lib/getCookie";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function page() {
    const [loading, setLoading] = useState(true);
    const user = useSelector((state) => state.user);
    
    const router = useRouter();
    useEffect(() => {
      const timer = setTimeout(() => {
        setLoading(false); 
      }, 2000); 
  
      return () => clearTimeout(timer);
    }, []);

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