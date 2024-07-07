"use client"

import { motion } from "framer-motion";
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
    <div className=" min-h-[95vh] sm:min-h-[650px] flex flex-col-reverse md:flex-row justify-around items-center gap-x-10 p-6 lg:p-0 font-sans" style={ButtonBackground} id='home'>
      {/* text, button and links  */}
      <div className=' w-full md:w-1/2 flex flex-col gap-y-2 md:gap-y-4 mt-10 md:mt-0 p-2'>
        <motion.h5 
        initial={{x: "-500px", opacity: "0"}}
        animate={{ x: "0px", opacity: "1"}}
        transition={{
               type: "spring",
               stiffness: 30,
               duration: 1,
       }}
        className='text-white text-xl sm:text-2xl font-semibold'>I am Md Abdullah</motion.h5>
        <motion.h2 
          initial={{x: "-500px", opacity: "0"}}
          animate={{ x: "0px", opacity: "1"}}
         transition={{
                type: "spring",
                stiffness: 30,
                duration: 1,
        }}
        className='bg-gradient-to-r from-violet-600 to-violet-300 ... inline-block ... text-transparent ... bg-clip-text text-3xl sm:text-4xl md:text-5xl font-extrabold'>Full Stack Web Developer</motion.h2>
        <motion.p 
       initial={{x: "-500px", opacity: "0"}}
       animate={{ x: "0px", opacity: "1"}}
         transition={{
                type: "spring",
                stiffness: 30,
                duration: 1,
        }}
        className='text-gray-300'>Web expert with {new Date().getFullYear() - 2022} years' experience, adept at problem-solving and innovation. Passionate about pushing boundaries and actively engaged in the developer community.</motion.p>

        <div className='flex flex-col sm:flex-row items-center gap-x-2 md:gap-x-3 mt-10 transition-all'>
            <motion.a 
            href="https://drive.google.com/file/d/1b3HIQlO_CrCF_bo9_jCSK0S4O5dI_MDz/view?usp=sharing"
             initial={{x: "-500px"}}
             animate={{ x: "0px" }}
             transition={{
                    type: "spring",
                    stiffness: 30,
                    duration: 1,
                    delay: 1.5,
            }}
            className='flex items-center gap-x-3 border border-violet-500 px-16 md:px-8 lg:px-16 py-2.5 rounded-md bg-gradient-to-r from-violet-950 to-violet-500 text-white  transition-all hover:bg-gradient-to-l'>Download CV <MdOutlineFileDownload className='w-5 h-5'/></motion.a>

            <div className='flex gap-x-8 mt-4 sm:mt-0 sm:gap-x-4'>
            <motion.a
             initial={{y: "-1000px"}}
             animate={{ y: "0px" }}
             transition={{
                    type: "spring",
                    stiffness: 50,
                    duration: 1,
                    delay: 0.5,
            }}
            href="https://www.facebook.com/profile.php?id=100086184884085" className="hover:text-white roun] rounded-full bg-violet-700 text-white  transition-all hover:bg-violet-800 p-2 px-2" target="_blank"><FaFacebookF   className='w-8 h-8 p-0.5'/></motion.a>
            <motion.a 
            initial={{y: "-1000px"}}
            animate={{ y: "0px" }}
            transition={{
                   type: "spring",
                   stiffness: 70,
                   duration: 1,
                   delay: 0.5,
           }}
            href="https://www.linkedin.com/in/md-abdullah-1907b8173/" className="hover:text-white roun] rounded-full bg-violet-700 text-white  transition-all hover:bg-violet-800 p-2 px-2"target="_blank"><FaLinkedinIn  className='w-8 h-8 p-0.5'/></motion.a>
            <motion.a
            initial={{y: "-1000px"}}
            animate={{ y: "0px" }}
            transition={{
                   type: "spring",
                   stiffness: 40,
                   duration: 1,
                   delay: 0.5,
           }}
            href="https://wa.me/01780073651" className="hover:text-white roun] rounded-full bg-violet-700 text-white  transition-all hover:bg-violet-800 p-2 px-2" target="_blank"><FaWhatsapp className='w-8 h-8 p-0.5'/></motion.a> 
            
            <motion.a 
            initial={{y: "-1000px"}}
            animate={{ y: "0px" }}
            transition={{
                   type: "spring",
                   stiffness: 80,
                   duration: 1,
                   delay: 0.5,
           }}
            href="https://github.com/Md-Abdullah-321" className="hover:text-white roun] rounded-full bg-violet-700 text-white  transition-all hover:bg-violet-800 p-2 px-2" target="_blank"><FaGithub  className='w-8 h-8 p-0.5'/></motion.a>
            </div>
        </div>
      </div>
      {/* picture  */}
      <motion.div 
       initial={{x: "5000px"}}
       animate={{x: "0px" }}
       transition={{
              type: "spring",
              stiffness: 30,
              duration: 1,
              delay: 0.5,
      }}
      >
        <Image
            src="https://firebasestorage.googleapis.com/v0/b/personal-portfolio-1b57c.appspot.com/o/user%2FMd%20Abdullah.jpg?alt=media&token=ed37ab31-93a6-471a-9c59-7bbe927236f2"
            alt="Md Abdullah"
            width={1000}
            height={1000}
            className='w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full  border-2 border-violet-700 shadow-md hover:rotate-3 transition-all object-cover hover:scale-105'
        />
      </motion.div>
    </div>
  )
}
