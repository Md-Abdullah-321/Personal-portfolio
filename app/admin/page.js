"use client"

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AdminDashboard() {
    const router = useRouter();
    useEffect(() => {
        //Temprary Solution:
        if(!localStorage.getItem("User")){
            return router.push('/admin/login', { scroll: false });
        }
    }, [])
    return (
      <div>
        Admin Dashboard
      </div>
    )
  }