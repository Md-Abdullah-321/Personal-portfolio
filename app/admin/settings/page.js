"use client"

import Sidebar from "@/components/sidebar";
import { storage } from "@/lib/firebase";
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { v4 } from 'uuid';


function Settings() {
  // const [screenWidth, setScreenWidth] = useState(0);
  const [formData, setFormData] = useState({});
  const user = useSelector((state) => state.user);
  const router = useRouter();

  useEffect(() => {
      if(!user){
          return router.push('/admin/login', { scroll: false });
      }
      setFormData({...user})
  }, []);

  const handleChangeBasicInfo = (e) => {
    if(e.target.name === "resume" || e.target.name === "profilePicture"){
      setFormData((prev) => {
        return {
          ...prev,
          [e.target.name]: e.target.files[0]
        }
      })
    }else {
      setFormData((prev) => {
        return {
          ...prev,
          [e.target.name]: e.target.value
        }
      })
    }
  }

  const handleUpdateUserInfo = async (e) => {
    e.preventDefault();

    const updatedInfo = formData;
    const storageRef = ref(storage, 'user');
    if(updatedInfo.resume.name){
      const imageRef = ref(storageRef, `${updatedInfo.resume.name + v4()}`);
      await uploadBytes(imageRef, updatedInfo.resume);
      updatedInfo.resume =  await getDownloadURL(imageRef);
    }

    if(updatedInfo.profilePicture.name){
      const imageRef = ref(storageRef, `${updatedInfo.profilePicture.name + v4()}`);
      await uploadBytes(imageRef, updatedInfo.profilePicture);
      updatedInfo.profilePicture =  await getDownloadURL(imageRef);
    }

     // Send POST request
     try {
      const token = localStorage.getItem('token');

      const response = await fetch(`https://portfolio-server-c0fa.onrender.com/api/user/`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`, 
          'Content-Type': 'application/json',
        },
        credentials: 'include', 
        body: JSON.stringify({
          ...updatedInfo,
          id: updatedInfo._id
        }),
      });

      const data = await response.json();
      console.log('Response:', data);

  } catch (error) {
      console.error('Error:', error);
      // Handle error - show error message to user or retry
      alert('Failed to submit project. Please try again later.');
  }

  }

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
        <div className="h-screen w-full md:w-10/12 my-16 md:my-20 mx-auto px-2">
            {/* Personal info */}
            <div className="bg-violet-200 w-full lg:w-2/3 mx-auto p-4 rounded-md">
              <h2 className="text-xl uppercase mb-4 font-bold text-gray-500">Basic info</h2>
              <form className="w-full flex flex-col gap-y-2">
                <input type="text" name="username" value={formData.username} className="outline-none p-3 rounded-md text-gray-600" placeholder="Enter name" onChange={handleChangeBasicInfo}/>
                <input type="email" name="email" value={formData.email} className="outline-none p-3 rounded-md text-gray-600" placeholder="Enter email" onChange={handleChangeBasicInfo}/>
                <input type="number" name="phoneNumber" value={formData.phoneNumber} className="outline-none p-3 rounded-md text-gray-600" placeholder="Enter number" onChange={handleChangeBasicInfo}/>
                <textarea name="bio"  value={formData.bio} className="outline-none p-3 rounded-md text-gray-600 md:h-32 lg:-h-28" onChange={handleChangeBasicInfo}/>
    
                <div className="flex items-center gap-x-4 w-full">
                <div className="flex text-gray-600" >
                  <label htmlFor="resume" className="bg-violet-600 text-white px-4 py-2 rounded-sm hover:bg-violet-700 transition-all duration-500 cursor-pointer ">Add Resume</label>
                  <input type="file" name="resume" id="resume" className="hidden" onChange={handleChangeBasicInfo}/>
                </div>
                <div className="flex text-gray-700">
                <label htmlFor="profilePicture" className="bg-violet-600 text-white px-4 py-2 rounded-sm hover:bg-violet-700 transition-all duration-500 cursor-pointer">Change Profile</label>
                <input type="file" name="profilePicture" id="profilePicture" className="hidden" onChange={handleChangeBasicInfo}/>
                </div>
                </div>
                

                <button type="submit" className="bg-violet-600 text-white px-4 py-2 rounded-sm hover:bg-violet-700 transition-all duration-500 cursor-pointer" onClick={(e) => handleUpdateUserInfo(e)}>Update info</button>
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

