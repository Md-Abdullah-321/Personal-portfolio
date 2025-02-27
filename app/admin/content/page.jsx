"use client"

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";

function Content() {
  const router = useRouter();
  const user = useSelector((state) => state.user);
  const isLoggedIn = useSelector((state) => state.userState.isLoggedIn);

  useEffect(() => {
      if(!isLoggedIn){
          return router.push('/admin/login', { scroll: false });
      }
  }, []);

    return (
      <div className="w-full min-h-screen flex justify-between">
         {/* <Sidebar/>
         <div className="lg:w-[300px] hidden lg:block"></div> */}
        <div className="h-screen w-10/12">

        </div>
      </div>
    )
}

export default Content;