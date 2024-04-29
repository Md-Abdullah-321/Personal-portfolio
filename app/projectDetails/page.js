"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { IoIosShareAlt } from "react-icons/io";


const ButtonBackground = {
  background: 'rgb(66,29,136)',
  backgroundImage: 'linear-gradient(90deg, rgba(66,29,136,1) 0%, rgba(59,18,135,1) 50%, rgba(0,0,0,0.7) 100%)'
};

export default function ProjectDetails() {
  const [project, setProject] = useState({});
  const [featureImage, setFeatureImage] = useState(null);
  const id = useSearchParams().get("id");
  
  useEffect(() => {
    const fetchProject = async () => {
        const res = await fetch(`https://portfolio-server-c0fa.onrender.com/api/project/${id}`);
        const data = await res.json();
        setProject({...data?.payload});
        setFeatureImage(data?.payload?.projectImages[0]);
    }

    fetchProject();
}, [])

console.log(project);
  return (
      <div className="min-h-screen w-full flex justify-center items-center flex-col">
        <div className="flex flex-col justify-center items-center w-full">
            <h2 className=" uppercase text-4xl sm:text-5xl md:text-7xl font-extrabold text-gray-200 text-center">Project Details</h2>
            <h3 className="absolute text-2xl sm:text-3xl md:text-4xl uppercase font-extrabold md:mt-1.5 bg-gradient-to-r from-violet-600 to-violet-300 ... inline-block ... text-transparent ... bg-clip-text">See project details</h3>
      </div>

      {/* project info  */}
      <div className="w-full flex flex-col md:flex-row justify-between items-center p-10 gap-x-4">
        <div className="md:w-7/12 lg:w-8/12 flex flex-col gap-y-4">
            <div className="full md:h-[500px]">
              <img 
                src={featureImage}
                alt="Project Image - Md Abdullah" 
                className='rounded-md object-cover object-center h-full border border-violet-200 cursor-pointer hover:bg-blend-darken p-0.5'
                style={{ objectFit: 'cover', objectPosition: 'center', width: '100%', height: '100%', overflow: 'hidden' }}
              />
            </div>

         <div className="w-full flex gap-x-2 overflow-scroll md:overflow-hidden">
           {
            project?.projectImages?.slice(1)?.map((image, index) => {
              // console.log(image);
              return <img src={image} alt="Project Image - Md Abdullah" className='rounded-md object-cover object-center self-center border border-violet-200 overflow-clip cursor-pointer hover:bg-blend-darken h-32 p-0.5 md:w-[200px] lg:w-full' onClick={() => setFeatureImage(image)}/>
            })
           }
        </div>
        </div>
        {/* left side for images  */}
        

        {/* right side for details  */}
        <div className="md:w-5/12 lg:w-4/12 h-full flex flex-col md:h-[650px] md:overflow-scroll p-1 mt-5 md:mt-0">
          <div className="flex justify-between items-center">
          <a href={project?.live_url} style={ButtonBackground} className="px-8 lg:px-12 py-2 hover:brightness-125 text-white" target="_blank">Live Side</a>
          
          <a href={project?.github_url} style={ButtonBackground} className="px-8 lg:px-12 py-2 hover:brightness-125 text-white " target="_blank">Github URL</a>
          </div>

          <div className="w-full mt-5 flex flex-col gap-y-2">
            <h1 className="text-2xl font-semibold">{project?.title}</h1>
            <p className="text-sm text-gray-600 text-justify">
              <strong>Overview: </strong>
              {project?.overview}
            </p>
            <div className="mt-5">
              <h3 className="flex items-center gap-x-2 text-xl font-semibold"><IoIosShareAlt className="w-6 h-6"/> Features: </h3>

              <ul className="text-sm flex flex-col gap-y-1">
                {project?.features?.map((item, index) => (
                  <li className="text-justify" key={index} dangerouslySetInnerHTML={{ __html: item }} />
                ))}
              </ul>
            </div>
            
            <div className="mt-5 flex flex-col gap-y-2">
              <h3 className="flex items-center gap-x-2 text-xl font-semibold"><IoIosShareAlt className="w-6 h-6"/> Tech Stack: </h3>

                <div>
                  <h4 className="text-md font-semibold">FrontEnd: </h4>
                  <p>{project?.frontEnd?.map((tech, index) => <span className='mr-1 bg-violet-200 text-sm p-0.5 rounded-sm'>{tech.trim()}{index < project.frontEnd.length - 1? ",": ""}</span>)}</p>
                </div>

                <div>
                  <h4 className="text-md font-semibold">BackEnd: </h4>
                  <p>{project?.backEnd?.map((tech, index) => <span className='mr-1 bg-violet-200 text-sm p-0.5 rounded-sm'>{tech.trim()}{index < project.backEnd.length - 1? ",": ""}</span>)}</p>
                </div>

                <div>
                  <h4 className="text-md font-semibold">Tools: </h4>
                  <p>{project?.tools?.map((tech, index) => <span className='mr-1 bg-violet-200 text-sm p-0.5 rounded-sm'>{tech.trim()}{index < project.tools.length - 1? ",": ""}</span>)}</p>
                </div>
            </div>
          </div>
        </div>
      </div>
      </div>
  );
}
