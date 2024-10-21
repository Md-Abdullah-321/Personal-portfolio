"use client"

import { getCookie } from "@/lib/getCookie";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AdminDashboard() {    
    const router = useRouter();

    useEffect(() => {
      // Ensure the code runs only on the client side
      if (typeof window !== 'undefined') {
        if (!getCookie('accessToken')) {
          router.push('/admin/login');
        }
      }
    }, [router]);
    
    return (
      <div className="w-full min-h-screen flex justify-between bg-violet-50">
          
      </div>)
  }