"use client"

import { BASE_URL } from "@/env";
import { clearUser, setUser } from "@/features/store";
import { storage } from "@/lib/firebase";
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { useDispatch, useSelector } from "react-redux";
import { v4 } from 'uuid';


function Settings() {
  // const [screenWidth, setScreenWidth] = useState(0);
  const [formData, setFormData] = useState({});
  const user = useSelector((state) => state.user);
  const router = useRouter();
  const dispatch = useDispatch();  

  
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
      }else if(e.target.name === "primaryPhoneNumber" || e.target.name === "secondaryPhoneNumber"){
         if(e.target.name === "primaryPhoneNumber"){ 
            setFormData((prev) => {
              return {
                ...prev,
                phoneNumbers: [e.target.value, prev.phoneNumbers[1]]
              }
            })
          }else {
            setFormData((prev) => {
              return {
                ...prev,
                phoneNumbers: [prev.phoneNumbers[0], e.target.value]
              }
            })
          }
      }
      else if(e.target.name === "facebook" || e.target.name === "github" || e.target.name === "linkedin" || e.target.name === "whatsApp"){
        setFormData((prev) => {
          return {
            ...prev,
            socialLinks: {
              ...prev.socialLinks,
              [e.target.name]: e.target.value
            }
          }
        })
      }
      else {
        setFormData((prev) => {
          return {
            ...prev,
            [e.target.name]: e.target.value
          }
        })
      }
    }
    
    console.log(formData);
    
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
      
      const response = await fetch(`${BASE_URL}/user/`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include', 
        body: JSON.stringify({
          ...updatedInfo,
          id: updatedInfo._id
        }),
      });

      const data = await response.json();
      if(data.success){
        dispatch(setUser(data.payload));
        alert(data.messege)
      }
      console.log('Response:', data);
      
    } catch (error) {
      console.error('Error:', error);
      // Handle error - show error message to user or retry
      alert('Failed to submit project. Please try again later.');
    }
    
  }
  
  const handleLogoutUser = async() => {
    const isAgree = confirm("Are you sure to logout?");
    
    if(isAgree){
      try {
        const response = await fetch(`${BASE_URL}/auth/signout`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
        });
        
        const data = await response.json();
        if(data.success){
          dispatch(clearUser());
          alert(data.messege);
          return router.push('/admin/login', { scroll: false });
        }
        console.log('Response:', data);
        
      } catch (error) {
        console.error('Error:', error);
        // Handle error - show error message to user or retry
        alert('Failed to logout. Please try again later.');
      }
    }
  }
  
  
  
  return (
    <div className="w-full min-h-screen flex justify-between">
         {/* <Sidebar/>
         <div className="lg:w-[300px] hidden lg:block"></div> */}
        <div className="h-screen w-full md:w-10/12 my-16 md:my-20 mx-auto px-2">
            {/* Personal info */}
            <div className="bg-violet-200 w-full lg:w-2/3 mx-auto p-4 rounded-md relative">
              <h2 className="text-xl uppercase mb-4 font-bold text-gray-500">Basic info</h2>

              <div className="absolute right-4 top-4 bg-red-500 text-white p-1 text-sm cursor-pointer shadow-sm rounded-sm">
                <button onClick={handleLogoutUser}>Logout</button>
              </div>
              <form className="w-full flex flex-col gap-y-2">
                <div div className="flex text-gray-700 mx-auto">
                  <label htmlFor="profilePicture" className="cursor-pointer">
                    <Image src={formData.profilePicture} width={1000} height={1000} alt="Profile Image" className="w-40 h-40 rounded-full mx-auto mb-4"/>
                  </label>
                  <input type="file" name="profilePicture" id="profilePicture" className="hidden" onChange={handleChangeBasicInfo}/>
                </div>

                <input type="text" name="name" value={formData.name} className="outline-none p-3 rounded-md text-gray-600" placeholder="Enter name" onChange={handleChangeBasicInfo}/>
                <input type="text" name="jobTitle" value={formData.jobTitle} className="outline-none p-3 rounded-md text-gray-600" placeholder="Enter Job Title" onChange={handleChangeBasicInfo}/>
                <input type="text" name="jobSubTitle" value={formData.jobSubTitle} className="outline-none p-3 rounded-md text-gray-600" placeholder="Enter Job Sub Title " onChange={handleChangeBasicInfo}/>
                <input type="email" name="email" value={formData.email} className="outline-none p-3 rounded-md text-gray-600" placeholder="Enter email" onChange={handleChangeBasicInfo}/>
                <input type="secondaryEmail" name="secondaryEmail" value={formData.secondaryEmail} className="outline-none p-3 rounded-md text-gray-600" placeholder="Enter secondary email" onChange={handleChangeBasicInfo}/>
                <input
                type="text"
                name="primaryPhoneNumber"
                value={(formData.phoneNumbers && formData.phoneNumbers.length > 0 ? formData.phoneNumbers[0] : "") || ""}
                className="outline-none p-3 rounded-md text-gray-600"
                placeholder="Enter Primary number"
                onChange={handleChangeBasicInfo}
              />
              
              <input
                type="text"
                name="secondaryPhoneNumber"
                value={(formData.phoneNumbers && formData.phoneNumbers.length > 0 ? formData.phoneNumbers[1] : "") || ""}
                className="outline-none p-3 rounded-md text-gray-600"
                placeholder="Enter Secondary number"
                onChange={handleChangeBasicInfo}
              />


                <textarea name="bioOne"  value={formData.bioOne} className="outline-none p-3 rounded-md text-gray-600 md:h-32 lg:-h-28" onChange={handleChangeBasicInfo} placeholder="Write bio 01"/>

                <textarea name="bioTwo"  value={formData.bioTwo} className="outline-none p-3 rounded-md text-gray-600 md:h-32 lg:-h-28" onChange={handleChangeBasicInfo} placeholder="Write bio 02"/>

                {/* social links  */}
                <div>
                  <h2 className="text-xl uppercase font-bold text-gray-500 mt-5">Social Links</h2>
                  <div className="flex flex-col gap-y-2 mt-2">
                    <div className="flex items-center relative">
                      <input
                        type="text"
                        name="facebook"
                        value={formData?.socialLinks?.facebook || ""}
                        className="outline-none p-3 rounded-md text-gray-600 flex-grow"
                        placeholder="Enter facebook link"
                        onChange={handleChangeBasicInfo}
                      />
                      <FaFacebook className="ml-2 text-blue-600 absolute w-6 h-6 right-2" />
                    </div>
                    <div className="flex items-center relative">
                      <input
                        type="text"
                        name="whatsApp"
                        value={formData?.socialLinks?.whatsApp || ""}
                        className="outline-none p-3 rounded-md text-gray-600 flex-grow"
                        placeholder="Enter WhatsApp number"
                        onChange={handleChangeBasicInfo}
                      />
                      <FaWhatsapp className="ml-2 text-green-500 absolute w-6 h-6 right-2" />
                    </div>
                    <div className="flex items-center relative">
                      <input
                        type="text"
                        name="linkedin"
                        value={formData?.socialLinks?.linkedin || ""}
                        className="outline-none p-3 rounded-md text-gray-600 flex-grow"
                        placeholder="Enter LinkedIn link"
                        onChange={handleChangeBasicInfo}
                      />
                      <FaLinkedin className="ml-2 text-blue-700 absolute w-6 h-6 right-2" />
                    </div>
                    <div className="flex items-center relative">
                      <input
                        type="text"
                        name="github"
                        value={formData?.socialLinks?.github || ""}
                        className="outline-none p-3 rounded-md text-gray-600 flex-grow"
                        placeholder="Enter GitHub link"
                        onChange={handleChangeBasicInfo}
                      />
                      <FaGithub className="ml-2 text-gray-700 absolute w-6 h-6 right-2" />
                    </div>
                  </div>
                </div>
                
                <div className="flex text-gray-600" >
                  <label htmlFor="resume" className="bg-violet-600 text-white px-4 py-2 rounded-sm hover:bg-violet-700 transition-all duration-500 cursor-pointer ">Add Resume</label>
                  <input type="file" name="resume" id="resume" className="hidden" onChange={handleChangeBasicInfo}/>
                </div>
                

                <button type="submit" className="bg-violet-600 text-white px-4 py-2 rounded-sm hover:bg-violet-700 transition-all duration-500 cursor-pointer" onClick={(e) => handleUpdateUserInfo(e)}>Update info</button>
              </form>
            </div>
        </div>
      </div>
    )
}

export default Settings;



