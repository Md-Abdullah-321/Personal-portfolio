import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BsFillSendFill } from "react-icons/bs";
import { FaEarthAsia } from "react-icons/fa6";
import { FiSettings } from "react-icons/fi";
import { MdContentPasteSearch, MdDashboardCustomize } from "react-icons/md";
import { useSelector } from 'react-redux';

function Sidebar({ sidebar = false }) {
  const pathname = usePathname();
  const user = useSelector((state) => state.user);

  return (
    <div className={`${sidebar ? 'w-[300px]' : 'w-20'} h-screen bg-violet-600 flex flex-col rounded-tr-lg rounded-br-lg z-50 fixed left-0`}>
      {/* Header */}
      <div className={`${sidebar? 'h-32' : 'h-20'} w-full bg-white border-2 border-violet-600 shadow-md flex flex-col items-center justify-around rounded-lg`}>
        <div className={`${sidebar ? 'w-[90px] h-[90px]' : 'w-16 h-16'} rounded-full border-2 border-violet-600 flex justify-center items-center`}>
          <Image
            className='w-full h-full rounded-full object-cover'
            src={user?.profilePicture || ""}
            width={1024}
            height={1024}
            alt="Md Abdullah's Profile Picture"
          />
        </div>
        {sidebar && <h1 className='text-lg md:text-2xl font-extrabold text-violet-600'>Md Abdullah</h1>}
      </div>

      {/* Menu */}
      <div className='p-2 xl:p-4 flex flex-col'>
        {menuItems.map(item => (
          <Link 
            href={item.path}
            key={item.path} 
            className={`${
              pathname.endsWith(item.path) 
              ? 'bg-violet-950 text-white' 
              : 'text-gray-100 bg-violet-50 bg-opacity-10 hover:bg-violet-950 hover:text-white'
            } flex items-center gap-x-4 mt-4 mb-1 p-2 rounded-md cursor-pointer transition-colors duration-200 ease-in-out`}
          >
            <div className={`${pathname.endsWith(item.path) ? 'text-white' : 'text-gray-100 hover:text-white'}`}>
              {item.icon}
            </div>
            {sidebar && <Link href={item.path} className='text-xl font-medium'>{item.title}</Link>}
          </Link>
        ))}
      </div>
    </div>
  );
}

// Define menu items
const menuItems = [
  {
    title: "Dashboard",
    path: "/admin",
    icon: <MdDashboardCustomize className='w-6 h-6 sm:w-8 sm:h-8' />,
  },
  {
    title: "Content",
    path: "/admin/content",
    icon: <MdContentPasteSearch className='w-6 h-6 sm:w-8 sm:h-8' />,
  },
  {
    title: "Projects",
    path: "/admin/projects",
    icon: <FaEarthAsia className='w-6 h-6 sm:w-8 sm:h-8' />,
  },
  {
    title: "Contact",
    path: "/admin/contact",
    icon: <BsFillSendFill className='w-6 h-6 sm:w-8 sm:h-8' />,
  },
  {
    title: "Settings",
    path: "/admin/settings",
    icon:  <FiSettings className='w-6 h-6 sm:w-8 sm:h-8' />,
  }
];

export default Sidebar;
