import { BiLogoFlask, BiLogoTypescript } from "react-icons/bi";
import { DiBootstrap, DiDart } from "react-icons/di";
import { FaDocker, FaJava, FaNode, FaPython, FaShopify, FaWordpressSimple } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiReactjsFill } from "react-icons/ri";
import { SiExpress, SiFlutter, SiMongodb, SiMysql, SiRedux, SiTailwindcss } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import SkillCart from "./skillCart";

export default function Skills() {
  return (
    <div className="md:min-h-[700px] flex flex-col justify-center w-full md:w-11/12 lg:w-9/12 mx-auto py-20 px-4 md:px-0" id="skills">
      <div className="flex flex-col justify-center items-center w-full">
        <h2 className=" uppercase text-5xl sm:text-6xl md:text-8xl font-extrabold text-gray-200">Experience</h2>
        <h3 className="absolute text-3xl sm:text-4xl md:text-5xl uppercase font-extrabold -mt-12 sm:-mt-6 md:-mt-4 bg-gradient-to-r from-violet-600 to-violet-300 ... inline-block ... text-transparent ... bg-clip-text">Skills</h3>
        <p className="text-gray-600 text-center">Programming Languages, Fraeworks, Libraries, Tools and Technologies I'm working on.</p>
      </div>

      <div className="mt-10">
           <div>
            <h4 className="uppercase font-extrabold text-gray-300">FrontEnd:</h4>
            <div className="flex gap-4 items-center mt-6 flex-wrap">
                <SkillCart name="React JS" description="JS Library" icon={<RiReactjsFill className=" -rotate-45" />}/> 
                
                <SkillCart name="Next JS" description="React Framework" icon={<TbBrandNextjs className=" -rotate-45"/>}/>  

                <SkillCart name="Redux" description="GSM Library" icon={<SiRedux  className=" -rotate-45"/>}/>

                <SkillCart name="Tailwind CSS" description="CSS Framework" icon={<SiTailwindcss className=" -rotate-45"/>}/>

                <SkillCart name="Bootstrap" description="CSS Framework" icon={<DiBootstrap className=" -rotate-45"/>}/>
            </div>
           </div>

           <div className="mt-5">
            <h4 className="uppercase font-extrabold text-gray-300">BackEnd:</h4>
            <div className="flex  gap-4 items-center mt-6 flex-wrap">
                <SkillCart name="Node JS" description="JS Runtime" icon={<FaNode  className=" -rotate-45" />}/> 
                
                <SkillCart name="Express JS" description="Node Framework" icon={<SiExpress  className=" -rotate-45"/>}/>                
                
                <SkillCart name="Flask" description="Python Framework" icon={<BiLogoFlask  className=" -rotate-45"/>}/>       

                <SkillCart name="Docker" description="Docker container" icon={<FaDocker  className=" -rotate-45"/>}/>
            </div>
           </div>

           <div className="mt-5">
            <h4 className="uppercase font-extrabold text-gray-300">Database:</h4>
            <div className="flex  gap-4 items-center mt-6 flex-wrap">
                <SkillCart name="Mongo DB" description="No SQL Database" icon={<SiMongodb  className=" -rotate-45" />}/> 
                
                <SkillCart name="MySQL" description="SQL Database" icon={<SiMysql  className=" -rotate-45"/>}/>
            </div>
           </div>

           <div className="mt-5">
            <h4 className="uppercase font-extrabold text-gray-300">Languages:</h4>
            <div className="flex  gap-4 items-center mt-6 flex-wrap">
                <SkillCart name="JavaScript" description="Expert" icon={<IoLogoJavascript   className=" -rotate-45" />}/> 
                
                <SkillCart name="Java" description="Expert" icon={<FaJava  className=" -rotate-45"/>}/>             
                <SkillCart name="Python" description="Intermediate" icon={<FaPython  className=" -rotate-45"/>}/>  

                <SkillCart name="TypeScript" description="Intermediate" icon={<BiLogoTypescript  className=" -rotate-45"/>}/>

                <SkillCart name="Dart" description="Intermediate" icon={<DiDart  className=" -rotate-45"/>}/>
            </div>
           </div>


           <div className="mt-5">
            <h4 className="uppercase font-extrabold text-gray-300">Mobile App:</h4>
            <div className="flex  gap-4 items-center mt-6 flex-wrap">
                <SkillCart name="Flutter" description="Basic" icon={<SiFlutter  className=" -rotate-45" />}/> 
            </div>
           </div>
           
           <div className="mt-5">
            <h4 className="uppercase font-extrabold text-gray-300">CMS:</h4>
            <div className="flex  gap-4 items-center mt-6 flex-wrap">
                <SkillCart name="Wordpress" description="Built on PHP" icon={<FaWordpressSimple  className=" -rotate-45" />}/> 
                
                <SkillCart name="Shopify" description="Built on Ruby on Rails" icon={<FaShopify  className=" -rotate-45"/>}/>
            </div>
           </div>
      </div>
    </div>
  )
}
