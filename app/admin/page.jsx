"use client"

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function AdminDashboard() {   
    const isLoggedIn = useSelector((state) => state.userState.isLoggedIn); 
    const router = useRouter();

    useEffect(() => {
      // Ensure the code runs only on the client side
      if (typeof window !== 'undefined') {
        if (!isLoggedIn)  {
          router.push('/admin/login');
        }
      }
    }, [router]);
    
    return (
      <div className="w-full min-h-screen flex justify-between bg-violet-50">
          
      </div>)
  }