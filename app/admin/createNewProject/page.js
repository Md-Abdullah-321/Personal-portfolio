"use client"

import { useState } from "react";

const init = {
    title: "",
    overview: "",
    features: [],
    projectImages: [],
    frontEnd: [],
    backEnd: [],
    tools: [],
    live_url: "",
    github_url: "",
}

function CreateNewProject() {
    const [formData, setFormData] = useState({...init});
    const [featureCount, setFeatureCount] = useState(1);
    const handleChange = (e) => {
        if((e.target.name === "title") || (e.target.name === "overview") || (e.target.name === "live_url") || (e.target.name === "github_url")){
            setFormData((prev) => {
                return {
                    ...prev,
                    [e.target.name]: e.target.value
                }
            })
        }else if (e.target.name === "feature"){
            
        }
    }
    return <div className="flex justify-center items-center w-full h-screen">
        <div className="bg-violet-300 w-1/2 p-4">
        <h3 className="uppercase font-semibold mb-5 text-xl">Create New Project</h3>
        <form action="POST" className="flex flex-col gap-y-2">
                <input type="text" placeholder="Project title" className="p-1 outline-none text-sm text-gray-600 rounded-sm" name="title" value={formData.title} onChange={(e) => handleChange(e)}/>
                <textarea type="text" placeholder="Project Overview" className="p-1 outline-none text-sm text-gray-600 rounded-sm h-20" name="overview" value={formData.overview} onChange={(e) => handleChange(e)}/>
                {
                    
                }
                <input type="text" placeholder="Front-end technology"className="p-1 outline-none text-sm text-gray-600 rounded-sm" name="frontEnd" value={formData.frontEnd} onChange={(e) => handleChange(e)}/>  
                <input type="text" placeholder="Back-end technology"className="p-1 outline-none text-sm text-gray-600 rounded-sm" name="backEnd" value={formData.backEnd} onChange={(e) => handleChange(e)}/>
                <input type="text" placeholder="Tools" className="p-1 outline-none text-sm text-gray-600 rounded-sm" name="tools" value={formData.tools} onChange={(e) => handleChange(e)}/>
                <input type="text" placeholder="Live URL" className="p-1 outline-none text-sm text-gray-600 rounded-sm" name="live_url" value={formData.live_url} onChange={(e) => handleChange(e)}/>
                <input type="text" placeholder="GitHub URL" className="p-1 outline-none text-sm text-gray-600 rounded-sm" name="github_url" value={formData.github_url} onChange={(e) => handleChange(e)}/>
                <input type="submit" className="w-2/6 bg-violet-400 py-2 uppercase font-semibold hover:shadow-md cursor-pointer" value="Create"/>
            </form>
        </div>
            
    </div>;
}

export default CreateNewProject;