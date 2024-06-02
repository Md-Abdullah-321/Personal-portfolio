import Image from 'next/image';
import Link from 'next/link';
import { BsFillSendFill } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { FaArrowRight, FaEarthAsia } from "react-icons/fa6";
import { GiSettingsKnobs } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { MdContentPasteSearch, MdDashboardCustomize } from "react-icons/md";

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
function Sidebar() {
  const [screenWidth, setScreenWidth] = useState(0);
  const [sidebar, setSidebar] = useState(false);
  const pathname = usePathname();


    useEffect(() => {
      const updateScreenWidth = () => setScreenWidth(window.innerWidth);
      updateScreenWidth();
      window.addEventListener('resize', updateScreenWidth);
      return () => window.removeEventListener('resize', updateScreenWidth);
    }, []);
    useEffect(() => {
        const style = document.createElement('style');
        style.innerHTML = `
          .button_slide {
            letter-spacing: 1px;
            display: flex;
            cursor: pointer;
            box-shadow: inset 0 0 0 0 #2E1065;
            -webkit-transition: ease-out 0.4s;
            -moz-transition: ease-out 0.4s;
            transition: ease-out 0.8s;
          }
          .button_slide:hover {
            box-shadow: inset 400px 0 0 0 #2E1065;
          }
          .arrow_right {
            left: -20px; 
            opacity: 0;
            transition: left 1s ease, opacity 1s ease; 
          }
    
          .hover-container:hover .arrow_right {
            left: 0;
            opacity: 1;
          }

          .sidebar_position {
            left: -400px;
            transition:  0.8s;
          }
          
          .show_sidebar {
            left: 0;
            transition: ease-out 0.8s; 
          }
          
        `;
        document.head.appendChild(style);
        return () => {
          document.head.removeChild(style);
        };
      }, []);

      console.log(sidebar);
    return <>
    {screenWidth < 1024 && !sidebar && <div className=' bg-violet-600 h-10 flex justify-center items-center w-12 sm:w-14 m-2 rounded-sm cursor-pointer absolute' onClick={() => setSidebar(true)}><FaBars className='w-6 h-6 sm:w-8 sm:h-8 text-white'/></div>}
    <div className={screenWidth < 1024 ? sidebar ? "show_sidebar w-[300px] h-screen bg-violet-600 flex flex-col absolute rounded-tr-lg rounded-br-lg z-50": "sidebar_position w-[300px] h-screen bg-violet-600 flex flex-col absolute rounded-tr-lg rounded-br-lg z-50": "w-[300px] h-screen bg-violet-600 flex flex-col rounded-tr-lg rounded-br-lg z-50"}>
        {/* header  */}
        <div className="h-40 md:h-60 w-full bg-white border-2 border-violet-600 shadow-md flex items-center justify-around rounded-lg">
        <div className='w-[90px] h-[90px] rounded-full border-2 border-violet-600 flex justify-center items-center'>
        {screenWidth < 1024 && <IoClose className='absolute top-0 right-0 w-8 h-8 m-2 bg-gray-200 rounded-sm cursor-pointer' onClick={() => setSidebar(false)}/>}
        <Image
              className='w-[85px] h-[85px] rounded-full object-cover'
               src={"/Dashboard.JPG"}
               width={1024}
               height={1024}
               alt="Md Abdullah Login page Image"
            />
        </div>
        <h1 className='text-lg md:text-2xl font-extrabold'>Md Abdullah</h1>
        </div>

        {/* Menu  */}
        <div className='p-2 xl:p-4 flex flex-col text-violet-950'>
            <div className={pathname.endsWith("/admin")? ' bg-violet-950 text-white p-2 flex items-center gap-x-4 mt-4 mb-1': 'flex items-center gap-x-4 mt-4 hover:bg-violet-950 hover:text-white p-2 button_slide mb-1'}>
                <MdDashboardCustomize className='w-6 h-6 sm:w-8 sm:h-8'/>
                <Link href="/admin" className='text-2xl uppercase font-medium'>Dashboard</Link> 
            </div>
            <hr className='w-full'/>
            <div className={pathname.endsWith("/content")? ' bg-violet-950 text-white p-2 flex items-center gap-x-4 mt-4 mb-1': 'button_slide flex items-center gap-x-4 mt-4 mb-1 hover:bg-violet-950 hover:text-white p-2'}>
                <MdContentPasteSearch className='w-6 h-6 sm:w-8 sm:h-8'/>
                <Link href="/admin/content" className='text-2xl uppercase font-medium'>Content</Link> 
            </div>
            <hr className='w-full'/>
            <div className={pathname.endsWith("/projects")? ' bg-violet-950 text-white p-2 flex items-center gap-x-4 mt-4 mb-1': 'flex items-center gap-x-4 mt-4 mb-1 hover:bg-violet-950 hover:text-white p-2 button_slide'}>
                <FaEarthAsia className='w-6 h-6 sm:w-8 sm:h-8'/>
                <Link href="/admin/projects" className='text-2xl uppercase font-medium'>Projects</Link> 
            </div>
            <hr className='w-full'/>
            <div className={pathname.endsWith("/contact")? ' bg-violet-950 text-white p-2 flex items-center gap-x-4 mt-4 mb-1': 'flex items-center gap-x-4 mt-4 mb-1 hover:bg-violet-950 hover:text-white p-2 button_slide'}>
                <BsFillSendFill className='w-6 h-6 sm:w-8 sm:h-8'/>
                <Link href="/admin/contact" className='text-2xl uppercase font-medium'>Contact</Link> 
            </div>
            <hr className='w-full'/>
        </div>

        <div className='h-3/6'></div>
        {/* Footer  */}
        <div className='h-16 sm:h-20 w-full bg-white border-2 border-violet-600 shadow-md flex items-center justify-around rounded-lg hover-container'  >
            <GiSettingsKnobs className='w-6 h-6 sm:w-8 sm:h-8'/>
                <Link href="/admin/settings" className='text-2xl uppercase font-medium'>Settings</Link> 
            <FaArrowRight className='w-6 h-6 sm:w-8 sm:h-8 relative arrow_right'/>
        </div>
    </div>
    </>;
}

export default Sidebar;