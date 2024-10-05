"use client";

import { BASE_URL } from "@/env";
import { useState } from "react";
import { FaFacebookSquare, FaLinkedin, FaWhatsappSquare } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { IoMailUnreadOutline } from "react-icons/io5";
import { SlLocationPin } from "react-icons/sl";
import { VscGithub } from "react-icons/vsc";
import { useSelector } from "react-redux";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const init = {
    name: "",
    email: "",
    subject: "",
    message: ""
};

export default function Contact() {
    const user = useSelector((state) => state.user);
    const [formData, setFormData] = useState({ ...init });

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.subject || !formData.message) {
            return alert("Please fill all the required fields.");
        }

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        };
        
        try {
            const response = await fetch(`${BASE_URL}/message`, requestOptions);
            const data = await response.json();
           
            console.log(data)
            if(data.success){
                toast.success(`${data.messege}`, {
                    position: "top-right"
                  });
            }
        } catch (error) {
            alert("An error occurred. Please try again.");
        }
    };

    const formatPhoneNumber = (phone) => {
        return phone?.length === 11
            ? phone.slice(0, 4) + " " + phone.slice(4, 9) + " " + phone.slice(9)
            : phone;
    };

    return (
        <div className="min-h-[700px] bg-[#0F0F0F] flex justify-center items-center w-full" id="contact">
            <div className="w-full px-5 lg:px-0 lg:w-10/12 2xl:w-9/12 mx-auto py-20 sm:py-10 flex flex-col-reverse lg:flex-row justify-between items-center gap-x-4">
                
                {/* Contact info & social info */}
                <div className="w-full lg:w-5/12 mt-10">
                    
                    {/* Contact Info */}
                    <div>
                        <h3 className="text-white uppercase font-semibold">Contact info</h3>
                        <div className="flex justify-between items-center lg:items-start md:flex-row lg:flex-col gap-y-10 mt-4 flex-wrap sm:flex-nowrap">
                            <div className="flex items-center gap-x-4">
                                {/* Icon */}
                                <div>
                                    <p className="bg-[#171717] p-4 rounded-md shadow-md">
                                        <IoMailUnreadOutline className="text-white w-8 h-8" />
                                    </p>
                                </div>
                                {/* Text */}
                                <div>
                                    <h4 className="text-gray-600 font-semibold uppercase">Mail Me</h4>
                                    <p className="text-white text-sm">{user?.email || "Email not available"}</p>
                                    <p className="text-white text-sm">{user?.secondaryEmail || "Secondary email not available"}</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-x-4">
                                {/* Icon */}
                                <div>
                                    <p className="bg-[#171717] p-4 rounded-md shadow-md">
                                        <FiPhone className="text-white w-8 h-8" />
                                    </p>
                                </div>
                                {/* Text */}
                                <div>
                                    <h4 className="text-gray-600 font-semibold uppercase">Contact Me</h4>
                                    <p className="text-white text-sm">
                                        {user?.phoneNumbers?.[0] ? formatPhoneNumber(user.phoneNumbers[0]) : "Phone not available"}
                                    </p>
                                    <p className="text-white text-sm">
                                        {user?.phoneNumbers?.[1] ? formatPhoneNumber(user.phoneNumbers[1]) : "Phone not available"}
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-x-4">
                                {/* Icon */}
                                <div>
                                    <p className="bg-[#171717] p-4 rounded-md shadow-md">
                                        <SlLocationPin className="text-white w-8 h-8" />
                                    </p>
                                </div>
                                {/* Text */}
                                <div>
                                    <h4 className="text-gray-600 font-semibold uppercase">Location</h4>
                                    <p className="text-white text-sm">Shajahanpur, Dhaka 1217</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Social Info */}
                    <div className="mt-10 lg:mt-20">
                        <h3 className="text-white uppercase font-semibold">Social info</h3>
                        <div className="flex gap-x-6 items-center mt-5">
                            {user?.socialLinks?.github && (
                                <a href={user.socialLinks.github} className="bg-[#171717] p-4 rounded-full shadow-md" target="_blank">
                                    <VscGithub className="text-white w-8 h-8 cursor-pointer" />
                                </a>
                            )}
                            {user?.socialLinks?.facebook && (
                                <a href={user.socialLinks.facebook} className="bg-[#171717] p-4 rounded-full shadow-md" target="_blank">
                                    <FaFacebookSquare className="text-white w-8 h-8 cursor-pointer" />
                                </a>
                            )}
                            {user?.socialLinks?.linkedin && (
                                <a href={user.socialLinks.linkedin} className="bg-[#171717] p-4 rounded-full shadow-md" target="_blank">
                                    <FaLinkedin className="text-white w-8 h-8 cursor-pointer" />
                                </a>
                            )}
                            {user?.phoneNumbers?.whatsApp && (
                                <a href={`https://wa.me/${user.phoneNumbers.whatsApp}`} className="bg-[#171717] p-4 rounded-full shadow-md" target="_blank">
                                    <FaWhatsappSquare className="text-white w-8 h-8 cursor-pointer" />
                                </a>
                            )}
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="w-full lg:w-7/12 flex justify-center items-center lg:mt-0">
                    <div className="bg-[#171717] p-6 rounded-2xl w-full">
                        <h2 className="text-white text-5xl text-start font-semibold">
                            Let's work <span className="text-violet-500">together</span>
                        </h2>

                        <form method="post" onSubmit={handleSubmit} className="flex flex-col justify-center items-center w-full gap-y-6 mt-5">
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Name *"
                                className="w-full p-3 rounded-md bg-[#222222] outline-none text-white"
                            />
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Email *"
                                className="w-full p-3 rounded-md bg-[#222222] outline-none text-white"
                            />
                            <input
                                type="text"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                placeholder="Your Subject *"
                                className="w-full p-3 rounded-md bg-[#222222] outline-none text-white"
                            />
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Your Message *"
                                className="w-full p-3 rounded-md bg-[#222222] outline-none text-white h-36"
                            />
                            <button className="w-full p-3 rounded-md bg-[#323232] text-white hover:bg-[#222222]">Send Message</button>
                        </form>
                    </div>
                </div>
                <ToastContainer />
            </div>
        </div>
    );
}
