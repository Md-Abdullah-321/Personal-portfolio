import Image from 'next/image';
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { MdOutlineFileDownload } from "react-icons/md";

const ButtonBackground = {
    background: 'rgb(15,7,21)',
    backgroundImage: 'linear-gradient(90deg, rgba(15,7,21,1) 0%, rgba(39,16,55,1) 50%, rgba(15,7,21,1) 100%)'
};

export default function HeroSection() {
  return (
    <div className="min-h-[600px] flex flex-col-reverse md:flex-row justify-around items-center gap-x-10 p-6 lg:p-0 font-sans" style={ButtonBackground}>
      {/* text, button and links  */}
      <div className='md:w-1/2 flex flex-col gap-y-2 md:gap-y-4 mt-10 md:mt-0'>
        <h5 className='text-white text-2xl font-semibold'>I am Md Abdullah</h5>
        <h2 className='bg-gradient-to-r from-violet-600 to-violet-300 ... inline-block ... text-transparent ... bg-clip-text text-4xl md:text-5xl font-extrabold'>Full Stack Web Developer</h2>
        <p className='text-gray-300'>Web expert with {new Date().getFullYear() - 2022} years' experience, adept at problem-solving and innovation. Passionate about pushing boundaries and actively engaged in the developer community.</p>

        <div className='flex items-center gap-x-2 md:gap-x-3 mt-10 transition-all'>
            <button className='text-violet-700 flex items-center gap-x-2 border border-violet-700 px-3 py-2 rounded-3xl hover:bg-violet-700 hover:text-white'>Download CV <MdOutlineFileDownload className='w-5 h-5'/></button>

            <a href="https://www.facebook.com/profile.php?id=100086184884085" className="text-violet-700  hover:bg-violet-700 hover:text-white roun] rounded-full" target="_blank"><FaFacebookF   className='w-8 h-8 border border-violet-700 p-1 rounded-full'/></a>
            <a href="https://www.linkedin.com/in/md-abdullah-1907b8173/" className="text-violet-700  hover:bg-violet-700 hover:text-white rounded-full" target="_blank"><FaLinkedinIn  className='w-8 h-8 border border-violet-700 p-1 rounded-full'/></a>
            <a href="https://wa.me/01780073651" className="text-violet-700  hover:bg-violet-700 hover:text-white rounded-full" target="_blank"><FaWhatsapp className='w-9 h-9'/></a> <a href="https://github.com/Md-Abdullah-321" className="text-violet-700  hover:bg-violet-700 hover:text-white rounded-full" target="_blank"><FaGithub  className='w-8 h-8 border border-violet-700 p-1 rounded-full'/></a>
        </div>
      </div>
      {/* picture  */}
      <div className=''>
        <Image
            src="/DSC_0167.png"
            alt="Md Abdullah"
            width={400}
            height={400}
            className='w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-3xl md:rotate-6 border-2 border-violet-700 shadow-md hover:rotate-3 transition-all'
        />
      </div>
    </div>
  )
}
