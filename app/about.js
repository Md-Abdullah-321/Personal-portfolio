import Image from 'next/image';
import { GoArrowRight } from "react-icons/go";

export default function About() {
  return (
    <div className="lg:w-9/12 mx-auto flex flex-col md:flex-row justify-between items-center md:h-[700px] font-sans px-4 py-20 md:py-0 gap-x-4" id='about'>
      <div className='md:w-1/2'>
        <Image 
            src="/about-left.png"
            alt='Md Abdullah - Full Stack Web Developer'
            width={400}
            height={400}
            className='w-[500px] h-[500px]'
        />
      </div>
      <div className='md:w-1/2 flex flex-col gap-y-2'>
        {/* <h5 className='text-orange-500 font-semibold text-xl'>Hello I'm</h5> */}
        <h1 className='text-5xl font-extrabold'>Expertise in delivering, <br /> top-notch digital solutions </h1>
        <h4 className='text-3xl font-extrabold'>Based in Bangladesh</h4>
        <p className='text-gray-400'>Tech aficionado skilled in HTML, CSS, JavaScript, ReactJS, Node.js, MongoDB, SQL, Flask, Python, Java, WordPress, and more. Thriving on problem-solving and crafting dynamic digital experiences, I'm constantly seeking new challenges to conquer and innovative solutions to create.</p>
        <a href="#" className='flex items-center gap-x-4 bg-black text-white w-60 py-2.5 px-2 justify-center rounded-md mt-5 group transition-all font-medium'>Download My Resume <GoArrowRight  className='w-5 h-5 -rotate-45 group-hover:rotate-0'/></a>
      </div>
    </div>
  )
}
