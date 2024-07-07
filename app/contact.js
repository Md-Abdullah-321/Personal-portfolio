"use client"

import { useState } from "react";
import { FaFacebookSquare, FaLinkedin, FaWhatsappSquare } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { IoMailUnreadOutline } from "react-icons/io5";
import { SlLocationPin } from "react-icons/sl";
import { VscGithub } from "react-icons/vsc";

const init = {
    name: "",
    email:"",
    subject:"",
    message: ""
}

export default function Contact() {
    const [formData, setFormData] = useState({...init});

    const handleChange = (e) => {
        setFormData((prev) => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            }
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(!formData.name || !formData.email || !formData.subject || !formData.message){
            return alert("Please Fill all the required field");
        }
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        };
        const response = await fetch('https://portfolio-server-c0fa.onrender.com/api/message', requestOptions);
        const data = await response.json();
        alert(data.message);
    }

  return (
    <div className="min-h-[700px] bg-[#0F0F0F] flex justify-center items-center w-full" id="contact">
        <div className="w-full px-5 lg:px-0 lg:w-10/12 2xl:w-9/12 mx-auto py-20 sm:py-10 flex flex-col-reverse lg:flex-row justify-between items-center gap-x-4">
                    {/* contact info & social info */}
        <div className="w-full lg:w-5/12 mt-10">
            {/* contact info  */}
            <div>
                <h3 className="text-white uppercase font-semibold">Contact info</h3>
                <div className="flex justify-between items-center lg:items-start md:flex-row lg:flex-col gap-y-10 mt-4 flex-wrap sm:flex-nowrap">
                    <div className="flex items-center gap-x-4">
                        {/* icon  */}
                        <div>
                            <p className="bg-[#171717] p-4 rounded-md shadow-md">{<IoMailUnreadOutline className="text-white w-8 h-8"/>}</p>
                        </div>
                        {/* text  */}
                        <div>
                            <h4 className="text-gray-600 font-semibold uppercase">Mail Me</h4>
                            <p className="text-white text-sm">abdullah.dev.it@gmail.com</p>
                            <p className="text-white text-sm">md201945@gmail.com</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-x-4">
                        {/* icon  */}
                        <div>
                            <p className="bg-[#171717] p-4 rounded-md shadow-md">{<FiPhone className="text-white w-8 h-8"/>}</p>
                        </div>
                        {/* text  */}
                        <div>
                            <h4 className="text-gray-600 font-semibold uppercase">Contact Me</h4>
                            <p className="text-white text-sm">+880 17800 73651</p>
                            <p className="text-white text-sm">+880 16457 39121</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-x-4">
                        {/* icon  */}
                        <div>
                            <p className="bg-[#171717] p-4 rounded-md shadow-md">{<SlLocationPin className="text-white w-8 h-8"/>}</p>
                        </div>
                        {/* text  */}
                        <div>
                            <h4 className="text-gray-600 font-semibold uppercase">Location</h4>
                            <p className="text-white text-sm">Shajahanpur, Dhaka 1217</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* social info  */}
            <div className="mt-10 lg:mt-20">
            <h3 className="text-white uppercase font-semibold">Social info</h3>
            <div className="flex gap-x-6 items-center mt-5">
                <a href="https://github.com/Md-Abdullah-321" className="bg-[#171717] p-4 sm:p-6 md:p-4 rounded-full shadow-md" target="_blank">{<VscGithub className="text-white w-8 h-8 cursor-pointer"/>}</a> 
                
                <a href="https://www.facebook.com/profile.php?id=100086184884085" className="bg-[#171717] p-4 sm:p-6 md:p-4  rounded-full shadow-md" target="_blank">{<FaFacebookSquare className="text-white w-8 h-8 cursor-pointer"/>}</a>

                <a href="https://www.linkedin.com/in/md-abdullah-1907b8173/"  className="bg-[#171717] p-4 sm:p-6 md:p-4  rounded-full shadow-md" target="_blank">{<FaLinkedin className="text-white w-8 h-8 cursor-pointer"/>}</a>

                <a href="https://wa.me/+8801780073651" className="bg-[#171717] p-4 sm:p-6 md:p-4  rounded-full shadow-md" target="_blank">{<FaWhatsappSquare className="text-white w-8 h-8 cursor-pointer"/>}</a>
            </div>
            </div>
        </div>

        {/* contact form  */}
        <div className="w-full lg:w-7/12 flex justify-center items-center lg:mt-0">
            <div className="bg-[#171717] p-6 rounded-2xl w-full">
                <h2 className="text-white text-5xl text-start font-semibold">Let's work <span className=" text-violet-500">together</span></h2>

                <form method="post" onSubmit = {(e) => handleSubmit(e)} className="flex flex-col justify-center items-center w-full gap-y-6 mt-5">
                    <input 
                    type="text" 
                    name="name" 
                    value = {formData.name} 
                    onChange = {(e) => handleChange(e)}
                    placeholder="Name *"  
                    className="w-full p-3 rounded-md bg-[#222222] outline-none text-white"/>
                    <input type="email" name="email"   value = {formData.email} 
                    onChange = {(e) => handleChange(e)} placeholder="Email *" className="w-full p-3 rounded-md bg-[#222222] outline-none text-white" />
                    <input type="text" name="subject"   value = {formData.subject} 
                    onChange = {(e) => handleChange(e)} placeholder="Your Subject *" className="w-full p-3 rounded-md bg-[#222222] outline-none text-white"/>
                    <textarea name="message"   value = {formData.message} 
                    onChange = {(e) => handleChange(e)} placeholder="Your Message *" className="w-full p-3 rounded-md bg-[#222222] outline-none text-white h-36"/>
                    <button className="w-full p-3 rounded-md bg-[#323232] text-white hover:bg-[#222222]">Send Message</button>
                </form>
            </div>
        </div>
        </div>
    </div>
  )
}
