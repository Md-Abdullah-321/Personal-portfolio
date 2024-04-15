"use client"

import { useState } from "react";


const ButtonBackground = {
    background: 'rgb(66,29,136)',
    backgroundImage: 'linear-gradient(90deg, rgba(66,29,136,1) 0%, rgba(59,18,135,1) 50%, rgba(0,0,0,0.7) 100%)'
};

export default function MediumDeviceNavbar() {
    const [toggleTabMenu, setToggleTabMenu] = useState(false);
    return (<div className="flex justify-end items-center pr-1 h-20 bg-[#0F0715] text-white text-lg">
            <div className="">
                    <button className="text-white p-5 bg-[#5E4293] focus:outline-none" onClick={() => setToggleTabMenu(true)}>
                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
            </div>
            {
                toggleTabMenu &&  <div className="fixed w-4/6 flex flex-col justify-start items-end bg-black min-h-screen right-0 top-0 list-none opacity-90">
                <div className="flex justify-between items-center w-full h-20">
                    <p className="ml-10">abdullah.dev.it@gmail.com</p>
                    <span className="bg-white mr-1.5 px-6 py-4 text-black text-3xl cursor-pointer" onClick={() => setToggleTabMenu(false)}>&#10006;</span>
                </div>
            <nav className="w-full p-10">
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
            }
    </div>)
}