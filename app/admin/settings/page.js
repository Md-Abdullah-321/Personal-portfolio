"use client"

import Sidebar from "@/components/sidebar";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function Settings() {
  const [screenWidth, setScreenWidth] = useState(0);
  const user = useSelector((state) => state.user);
  const router = useRouter();

  useEffect(() => {
      if(!user){
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
        <div className="w-10/12 h-screen">Settings</div>
      </div>
    )
}

export default Settings;