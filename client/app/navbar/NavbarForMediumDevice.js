"use client"

import { useState } from "react";
import { FaFacebookSquare, FaGithubSquare, FaLinkedin, FaWhatsappSquare } from "react-icons/fa";


const ButtonBackground = {
    background: 'rgb(66,29,136)',
    backgroundImage: 'linear-gradient(90deg, rgba(66,29,136,1) 0%, rgba(59,18,135,1) 50%, rgba(0,0,0,0.7) 100%)'
};

export default function MediumDeviceNavbar() {
    const [toggleTabMenu, setToggleTabMenu] = useState(false);
    return (<div className="flex justify-end items-center pr-1 h-20 bg-[#0F0715] text-white text-lg">
            <div className="">
                    <button className="text-white p-5 focus:outline-none" style={ButtonBackground} onClick={() => setToggleTabMenu(true)}>
                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
            </div>
            {
                toggleTabMenu &&  <div className="fixed w-4/6 flex flex-col justify-between items-end bg-black h-screen right-0 top-0 list-none opacity-90 z-50">
                <div className="w-full">
                <div className="flex justify-between items-center w-full h-20" style={ButtonBackground}>
                    <p className="ml-10 text-3xl uppercase  font-extrabold">Md Abdullah</p>
                    <span className="bg-white mr-1.5 px-4 py-2 text-black text-3xl cursor-pointer fixed right-2 top-4" onClick={() => setToggleTabMenu(false)}>&#10006;</span>
                </div>
                <nav className="w-full px-10 mt-10">
                <li className="hover:bg-gray-500 w-full flex justify-end items-center px-2 py-1.5 rounded-sm">
                    <a href="#">Home</a>
                    </li> 
                    <hr />
                    <br />
                    <li className="hover:bg-gray-500 w-full flex justify-end items-center px-2 py-1.5 rounded-sm">
                        <a href="#">About</a>
                    </li> 
                    <hr />
                        <br />
                    <li className="hover:bg-gray-500 w-full flex justify-end items-center px-2 py-1.5 rounded-sm">
                        <a href="#">Skills</a>
                    </li> 
                    <hr />
                        <br />
                    <li className="hover:bg-gray-500 w-full flex justify-end items-center px-2 py-1.5 rounded-sm">
                        <a href="#">Services</a>
                    </li> 
                    <hr />
                        <br />
                    <li className="hover:bg-gray-500 w-full flex justify-end items-center px-2 py-1.5 rounded-sm">
                        <a href="#">Projects</a>
                    </li> 
                    <hr />
                        <br />
                    <li className="hover:bg-gray-500 w-full flex justify-end items-center px-2 py-1.5 rounded-sm">
                        <a href="#">Contact</a>
                    </li>
                    <hr />
                        <br />
                    <li className="w-full flex justify-end items-center">
                        <button style={ButtonBackground} className="px-12 py-2 hover:bg-white ">Hire Me!</button>
                    </li>
                </nav>
                </div>

            <div className="w-full flex items-center gap-x-4 py-4 px-10">
                <a href="https://www.facebook.com/profile.php?id=100086184884085" className="bg-white p-2 rounded-full hover:bg-gray-200"><FaFacebookSquare className="w-6 h-6 text-blue-600"/></a>
                <a href="https://www.linkedin.com/in/md-abdullah-1907b8173/" className="bg-white p-2 rounded-full hover:bg-gray-200"><FaLinkedin className="w-6 h-6 text-[#0077B5]" /></a>
                <a href="https://wa.me/01780073651" className="bg-white p-2 rounded-full hover:bg-gray-200"><FaWhatsappSquare className="w-6 h-6 text-[#25D366]"/></a> <a href="https://github.com/Md-Abdullah-321" className="bg-white p-2 rounded-full hover:bg-gray-200"><FaGithubSquare  className="w-6 h-6 text-[#333]"/></a>
            </div>
            </div>
            }
    </div>)
}