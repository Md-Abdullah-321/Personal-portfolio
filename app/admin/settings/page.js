"use client"

import Sidebar from "@/components/sidebar";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function Settings() {
  // const [screenWidth, setScreenWidth] = useState(0);
  const [formData, setFormData] = useState({});
  const user = useSelector((state) => state.user);
  const router = useRouter();

  useEffect(() => {
      if(!user){
          return router.push('/admin/login', { scroll: false });
      }
      setFormData({...user, password : ""})
  }, []);

  // useEffect(() => {
  //   const updateScreenWidth = () => setScreenWidth(window.innerWidth);
  //   updateScreenWidth();
  //   window.addEventListener('resize', updateScreenWidth);
  //   return () => window.removeEventListener('resize', updateScreenWidth);
  // }, []);
    return (
      <div className="w-full min-h-screen flex justify-between">
         <Sidebar/>
         <div className="lg:w-[300px] hidden lg:block"></div>
        <div className="h-screen w-10/12 my-20">
            {/* Personal info */}
            <div className="bg-violet-200 w-full lg:w-2/3 mx-auto p-4 rounded-md">
              <form className="w-full flex flex-col gap-y-2">
                <input type="text" name="username" value={formData.username} className="outline-none p-3 rounded-md text-gray-600" placeholder="Enter name"/>
                <input type="email" name="email" value={formData.email} className="outline-none p-3 rounded-md text-gray-600" placeholder="Enter email"/>
                <input type="number" name="phoneNumber" value={formData.phoneNumber} className="outline-none p-3 rounded-md text-gray-600" placeholder="Enter number"/>
                <input type="password" name="password" value={formData.password} className="outline-none p-3 rounded-md text-gray-600" placeholder="Enter password"/>
                <textarea name="bio"  value={formData.bio} className="outline-none p-3 rounded-md text-gray-600 min-h-24"/>
                

                <div className="flex items-center gap-x-4">
                <div className="flex text-gray-600" >
                  <label htmlFor="resume" className="bg-violet-600 text-white px-4 py-2 rounded-sm hover:bg-violet-700 transition-all duration-500 cursor-pointer">Add Resume</label>
                  <input type="file" name="resume" id="resume" className="hidden"/>
                </div>
                <div className="flex text-gray-700">
                <label htmlFor="profilePicture" className="bg-violet-600 text-white px-4 py-2 rounded-sm hover:bg-violet-700 transition-all duration-500 cursor-pointer">Change Profile</label>
                <input type="file" name="profilePicture" id="profilePicture" className="hidden"/>
                </div>
                </div>
                

                <button type="submit" className="bg-violet-600 text-white px-4 py-2 rounded-sm hover:bg-violet-700 transition-all duration-500 cursor-pointer">Update info</button>
              </form>
            </div>
        </div>
      </div>
    )
}

export default Settings;


// username

// email

// phoneNumber

// password

// profilePicture

// bio

// resume

