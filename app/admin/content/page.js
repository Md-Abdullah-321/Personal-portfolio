"use client"

import Sidebar from "@/components/sidebar";
import { getCookie } from "@/helpers/getCookie";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

function Content() {
  const router = useRouter();

  useEffect(() => {
      if(!getCookie("token")){
          return router.push('/admin/login', { scroll: false });
      }
  }, []);

    return (
      <div className="w-full min-h-screen flex justify-between">
         <Sidebar/>
         <div className="lg:w-[300px] hidden lg:block"></div>
        <div className="h-screen w-10/12">

        </div>
      </div>
    )
}

export default Content;