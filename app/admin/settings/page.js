"use client"

import Sidebar from "@/components/sidebar";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

function Settings() {
    const router = useRouter();
    useEffect(() => {
        //Temprary Solution:
        if(!localStorage.getItem("User")){
            return router.push('/admin/login', { scroll: false });
        }
    }, [])
    return (
      <div className="w-full min-h-screen flex justify-between">
        <Sidebar/>
        <div className="w-9/12 h-screen">Settings</div>
      </div>
    )
}

export default Settings;