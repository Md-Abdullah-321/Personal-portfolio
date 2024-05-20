"use client"

import Image from 'next/image';
import { useEffect, useState } from "react";

const ButtonBackground = {
  background: 'rgb(66,29,136)',
  backgroundImage: 'linear-gradient(90deg, rgba(66,29,136,1) 0%, rgba(59,18,135,1) 50%, rgba(0,0,0,0.7) 100%)'
};


const init = {
  email: "",
  password: ""
}
export default function Login() {
  const [formData, setFormData] = useState({...init});
  const [backgroundImage, setBackgroundImage] = useState('');

  useEffect(() => {
    const imageUrl = '/login.svg'; // Remove '/public' from the path
    setBackgroundImage(`url(${imageUrl})`);
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => {
      return {
        ...prev,
        [e.target.name] : e.target.value
      }
    })
  }

  const handleSubmit = async (e) => {
      e.preventDefault();

      if(formData.email == " " || formData.password === " "){
        return alert("Please, fill the black fields.")
      }

      try {
        const response = await fetch("https://portfolio-server-c0fa.onrender.com/api/auth/", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email: formData.email, password: formData.password })
        });
    
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        if(data.success){
          localStorage.setItem("User", "Md Abdullah");
        }
      } catch (error) {
        console.error('Error:', error);
      }
  }

 
  return (
    <div
      className="flex justify-center items-center w-full min-h-screen"
    >
      <div
      className="md:w-11/12 min-h-screen md:h-[90vh] flex justify-center items-center overflow-auto p-2 sm:p-0"
        style={{
          backgroundImage: backgroundImage,
          backgroundSize: 'cover',
          backgroundPosition: "center center",
        }}
      >
        <div className="md:w-11/12  lg:w-10/12 md:h-[75vh] bg-violet-600 rounded-md opacity-80 flex flex-col md:flex-row justify-between items-center">
            <div className="md:w-7/12 lg:w-4/6 p-10 bg-violet-400 h-[300px] sm:h-full overflow-hidden">
              <Image
              className='w-full h-full'
               src={"/login-left.svg"}
               width={1024}
               height={1024}
               alt="Md Abdullah Login page Image"
              />
            </div>
            <div className="md:w-5/12 lg:w-2/6 h-[350px] sm:h-full flex flex-col justify-center p-10">
              <h1 className='text-3xl font-extrabold text-white'>Welcome Back!</h1>
              <p className='text-gray-300'>Please Login, to see and change anything.</p>

              <form className="flex flex-col gap-y-4 mt-4">
                <div>
                  <input 
                  type="text" 
                  placeholder="Enter email" 
                  name='email'
                  onChange={handleChange}
                  value={formData.email}
                  className='w-full p-2 rounded-sm outline-none border-none'/>
                </div>
                <div>
                  <input 
                  type="text" 
                  placeholder="Enter password"  
                  name='password'
                  onChange={handleChange}
                  value={formData.password}
                  className='w-full p-2 rounded-sm  outline-none border-none'/>
                </div>

                <button style={ButtonBackground} className='text-gray-200 uppercase p-2 rounded-sm hover:shadow-md hover:brightness-110 w-full' onClick={handleSubmit}>Login</button>
              </form>
            </div>
        </div>
      </div>
    </div>
  )
}
