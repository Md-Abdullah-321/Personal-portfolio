import Image from 'next/image';
import Link from 'next/link';
import { BsFillSendFill } from "react-icons/bs";
import { FaArrowRight, FaEarthAsia } from "react-icons/fa6";
import { GiSettingsKnobs } from "react-icons/gi";
import { MdContentPasteSearch, MdDashboardCustomize } from "react-icons/md";

function Sidebar() {
    return ( 
    <div className="w-3/12 h-screen bg-violet-600 flex flex-col">
        {/* header  */}
        <div className="h-40 w-full bg-white border-2 border-violet-600 shadow-md flex items-center justify-around rounded-lg">
        <div className='w-[110px] h-[110px] rounded-full border-2 border-violet-600 flex justify-center items-center'>
        <Image
              className='w-[100px] h-[100px] rounded-full object-cover'
               src={"/Dashboard.JPG"}
               width={1024}
               height={1024}
               alt="Md Abdullah Login page Image"
            />
        </div>
        <h1 className='text-2xl font-extrabold'>Md Abdullah</h1>
        </div>

        {/* Menu  */}
        <div className='p-4 flex flex-col gap-y-4 text-violet-950'>
            <div className='flex items-center gap-x-4'>
                <MdDashboardCustomize className='w-8 h-8'/>
                <Link href="/admin" className='text-2xl uppercase font-medium'>Dashboard</Link> 
            </div>
            <hr className='w-full'/>
            <div className='flex items-center gap-x-4'>
                <MdContentPasteSearch className='w-8 h-8'/>
                <Link href="/admin/content" className='text-2xl uppercase font-medium'>Content</Link> 
            </div>
            <hr className='w-full'/>
            <div className='flex items-center gap-x-4'>
                <FaEarthAsia className='w-8 h-8'/>
                <Link href="/admin/projects" className='text-2xl uppercase font-medium'>Projects</Link> 
            </div>
            <hr className='w-full'/>
            <div className='flex items-center gap-x-4'>
                <BsFillSendFill className='w-8 h-8'/>
                <Link href="/admin/contact" className='text-2xl uppercase font-medium'>Contact</Link> 
            </div>
            <hr className='w-full'/>
        </div>

        <div className='h-3/6'></div>
        {/* Footer  */}
        <div className='h-20 w-full bg-white border-2 border-violet-600 shadow-md flex items-center justify-around rounded-lg'>
            <GiSettingsKnobs className='w-8 h-8'/>
                <Link href="/admin/settings" className='text-2xl uppercase font-medium'>Settings</Link> 
            <FaArrowRight className='w-8 h-8'/>
        </div>
    </div> );
}

export default Sidebar;