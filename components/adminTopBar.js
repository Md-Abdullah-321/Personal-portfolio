
import { HiMiniBars3CenterLeft } from "react-icons/hi2";

export default function AdminTopBar({handleSidebar, sidebar}) {
  return (
    <div className={`${sidebar ? 'ml-[300px]' : 'ml-20'} w-full h-20 bg-white fixed top-0 flex justify-between items-center px-4`}>
        <HiMiniBars3CenterLeft className='w-6 h-6 cursor-pointer' onClick={handleSidebar}/>
    </div>
  )
}
