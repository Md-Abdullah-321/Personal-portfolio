"use client"
import { useState } from "react";
import { AiOutlinePicture } from "react-icons/ai";
import { CiHome, CiUser } from "react-icons/ci";
import { IoDocumentTextOutline, IoGridOutline } from "react-icons/io5";
import { MdOutlineHomeRepairService } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { VscSend } from "react-icons/vsc";


export default function NavbarForSmallDevices () {
    const [toggleTabMenu, setToggleTabMenu] = useState(false);
    return (
        <div>
           {!toggleTabMenu &&  <div className="flex justify-between items-center bg-[#0F0715] text-white p-2 fixed bottom-0 w-full">
                <p className="text-lg">Md Abdullah</p>
                <IoGridOutline className="w-6 h-6 cursor-pointer" onClick={() => setToggleTabMenu(true)}/>
            </div>}

            {
            toggleTabMenu && <div className="fixed flex flex-col bottom-0 w-full p-4 bg-[#0F0715] text-white rounded-tl-lg rounded-tr-lg gap-4 z-50">
                <div className="flex justify-evenly items-center">
                    <div className="flex flex-col justify-center items-center">
                        <CiHome className="w-6 h-6 font-medium"/>
                        <a href="#">Home</a>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                    <CiUser className="w-6 h-6 font-medium"/>
                        <a href="#">About</a>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                    <IoDocumentTextOutline className="w-6 h-6 font-medium"/>
                        <a href="#">Skills</a>
                    </div>
                </div>
                
                <div className="flex justify-evenly items-center">
                    <div className="flex flex-col justify-center items-center">
                    <MdOutlineHomeRepairService className="w-6 h-6 font-medium"/>
                        <a href="#">Services</a>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                    <AiOutlinePicture className="w-6 h-6 font-medium"/>
                        <a href="#">Portfolio</a>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                    <VscSend className="w-6 h-6 font-medium"/>
                        <a href="#">Contact</a>
                    </div>
                </div>
                <div className="flex justify-end items-center w-full">
                    <RxCross2 className="w-6 h-6 cursor-pointer" onClick={() => setToggleTabMenu(false)}/>
                </div>
            </div>
            }
        </div>
    )
}