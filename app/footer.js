"use client";
import { Suspense, useEffect, useState } from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0F0715] flex flex-col gap-y-2 py-4">
        <ul className="flex justify-center items-center gap-x-6 text-white font-semibold">
                <li>
                    <a href="#home">Home</a>
                </li> 
                <li>
                    <a href="#about">About</a>
                </li> 
                <li>
                    <a href="#skills">Skills</a>
                </li> 
                <li>
                    <a href="#services">Services</a>
                </li> 
                <li>
                    <a href="#portfolio">Portfolio</a>
                </li> 
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
            <p className="text-center text-violet-700">@{new Date().getFullYear()} All rights reserved by <span className="font-semibold">Md Abdullah</span></p>
    </footer>
  )
}


export default function ReturnFooter() {
    const [width, setWidth] = useState(null);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    if (typeof window !== 'undefined') {
      // Set initial width
      setWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);

      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  return (
    <Suspense>
    {width >= 768 && <Footer/> }
  </Suspense>
);
  
}

