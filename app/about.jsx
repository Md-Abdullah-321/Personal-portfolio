"use client"
import { motion } from "framer-motion";
import Image from 'next/image';
import { GoArrowRight } from "react-icons/go";
import { useSelector } from "react-redux";


export default function About() {
  const user = useSelector((state) => state?.user);
  return (
    <div className="lg:w-9/12 mx-auto flex flex-col md:flex-row justify-between items-center md:h-[700px] font-sans px-4 py-20 md:py-0 gap-x-4" id='about'>
      <motion.div
        initial={{x: "-50vw"}}
        animate={{x: "0vw"}}
        exit={{x: "-50vw"}}
        transition={{ type: "smooth", stiffness: 100, duration: 1 }}
      className='md:w-1/2'>
        <Image 
            src="/about-left.png"
            alt='Md Abdullah - Full Stack Web Developer'
            width={400}
            height={400}
            className='w-[500px] h-[500px]'
        />
      </motion.div>
      <motion.div
          initial={{x: "50vw"}}
          animate={{x: "0vw"}}
          exit={{x: "50vw"}}
          transition={{ type: "smooth", stiffness: 100, duration: 1 }}
      className='md:w-1/2 flex flex-col gap-y-2'>
        {/* <h5 className='text-orange-500 font-semibold text-xl'>Hello I'm</h5> */}
        <h1 className='text-5xl font-extrabold'>Expertise in delivering, <br /> top-notch digital solutions </h1>
        <h4 className='text-3xl font-extrabold'>Based in Bangladesh</h4>
        <p className='text-gray-400'>{user?.bioTwo}</p>
        <motion.a
            href = {user?.resume}
            initial={{x: "50vw"}}
            animate={{x: "0vw"}}
            exit={{x: "50vw"}}
            transition={{ type: "smooth", stiffness: 100, duration: 1.2, delay: 1 }}
       className='flex items-center gap-x-4 bg-black text-white w-60 py-2.5 px-2 justify-center rounded-md mt-5 group transition-all font-medium'>Download My Resume <GoArrowRight  className='w-5 h-5 -rotate-45 group-hover:rotate-0'/></motion.a>
      </motion.div>
    </div>
  )
}
