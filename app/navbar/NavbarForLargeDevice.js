import { motion } from "framer-motion";
import Link from "next/link";

const ButtonBackground = {
    background: 'rgb(66,29,136)',
    backgroundImage: 'linear-gradient(90deg, rgba(66,29,136,1) 0%, rgba(59,18,135,1) 50%, rgba(0,0,0,0.7) 100%)'
};

export default function Navbar (){
    return (
        <motion.nav 
        initial={{y: "-500px"}}
        animate={{y: "0px"}}
        exit={{y: "-500px"}}
        transition={{ type: "smooth", stiffness: 100, duration: 0.75 }}
        className="lg:flex justify-between items-center px-20 h-20 bg-[#0F0715] text-white text-lg fixed w-full z-50 hidden">
            <div>
                <p>abdullah.dev.it@gmail.com</p>
            </div>
            <ul className="flex items-center gap-x-6">
                <li>
                    <Link href="#home">Home</Link>
                </li> 
                <li>
                    <Link href="#about">About</Link>
                </li> 
                <li>
                    <Link href="#skills">Skills</Link>
                </li> 
                <li>
                    <Link href="#services">Services</Link>
                </li> 
                <li>
                    <Link href="#portfolio">Portfolio</Link>
                </li> 
                <li>
                    <a href="#contact" style={ButtonBackground} className="px-6 py-1.5 rounded-3xl hover:bg-white hover:brightness-110">Hire Me!</a>
                </li>
            </ul>
        </motion.nav>
    );
}
