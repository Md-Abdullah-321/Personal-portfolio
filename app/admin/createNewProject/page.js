"use client"

import { storage } from "@/lib/firebase";
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { useState } from "react";
import { v4 } from 'uuid';

const init = {
    title: "",
    overview: "",
    features: [""],
    projectImages: [],
    frontEnd: [],
    backEnd: [],
    tools: [],
    live_url: "",
    github_url: "",
}

function CreateNewProject() {
    const [formData, setFormData] = useState({ ...init });
    const [featureCount, setFeatureCount] = useState([...init.features]);
    const [projectImages, setProjectImages] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (["title", "overview", "live_url", "github_url"].includes(name)) {
            setFormData(prev => ({
                ...prev,
                [name]: value
            }));
        } else if (["frontEnd", "backEnd", "tools"].includes(name)) {
            setFormData(prev => ({
                ...prev,
                [name]: [value]
            }));
        }
    }

    const handleProjectFeature = (e) => {
        const { name, value } = e.target;
        setFeatureCount(prev => {
            prev[parseInt(name)] = value; 
            return [...prev]; 
        });
    }

    const addFeature = () => {
        setFeatureCount(prev => [...prev, ""]); 
    }

    const removeFeature = (index) => {
        setFeatureCount(prev => {
            const newFeatures = [...prev];
            newFeatures.splice(index, 1);
            return newFeatures; 
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        // Check if project image quantity is valid
        if (projectImages === null) {
            return alert("Please add some project images.");
        }
        if (projectImages.length > 4 || projectImages.length < 2) {
            return alert("Project images quantity should be between 2 and 4");
        }
    
        // Return if any required field is empty
        if (!formData.title || !formData.overview) {
            return alert("Please provide project title and overview.");
        }
    
        // Formatting features as list items
        const addStrongTag = featureCount.map(item => {
            const title = item.split(":")[0];
            const description = item.split(":")[1];
            return `<strong>${title} : </strong>${description};`
        })
        const formattedFeatures = addStrongTag.map(item => `<li>${item}</li>`);
    
        // Upload images to Firebase Storage and get URLs
        const storageRef = ref(storage, 'projects');
        const imageURLs = await uploadImagesAndGetUrls(projectImages, storageRef);
    
        // Prepare data to send in POST request
        const postData = {
            title: formData.title,
            overview: formData.overview,
            features: formattedFeatures,
            frontEnd: formData.frontEnd[0].split(" "),
            backEnd: formData.backEnd[0].split(" "),
            tools: formData.tools[0].split(" "),
            projectImages: imageURLs,
            live_url: formData.live_url,
            github_url: formData.github_url,
        };
    
        // Send POST request
        try {
            const response = await fetch('https://portfolio-server-c0fa.onrender.com/api/project/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    // Add any additional headers if needed
                },
                body: JSON.stringify(postData),
            });
    
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
    
            // Handle successful response
            const responseData = await response.json();
            console.log('Success:', responseData);
    
            // Optionally, show success message to user
            alert('Project submitted successfully!');
        } catch (error) {
            console.error('Error:', error);
            // Handle error - show error message to user or retry
            alert('Failed to submit project. Please try again later.');
        }
    };
    


    async function uploadImagesAndGetUrls(images, storageRef) {
        const urls = [];
    
        for (const image of images) {
            const imageRef = ref(storageRef, `${formData.title}/${image.name + v4()}`);
    
            try {
                await uploadBytes(imageRef, image);
                const downloadURL = await getDownloadURL(imageRef);
                urls.push(downloadURL);
            } catch (error) {
                console.error(`Error uploading ${image.name}`, error);
            }            
        }
    
        return urls;
    }

    return (
        <div className="flex justify-center items-center w-full h-screen">
            <div className="bg-violet-300 mx-2 sm:mx-0 w-full sm:w-2/3 lg:w-1/2 p-4">
                <h3 className="uppercase font-semibold mb-5 text-xl">Create New Project</h3>
                <form className="flex flex-col gap-y-2">
                    <input type="text" placeholder="Project title" className="p-1 outline-none text-sm text-gray-600 rounded-sm" name="title" value={formData.title} onChange={handleChange}/>
                    <textarea type="text" placeholder="Project Overview" className="p-1 outline-none text-sm text-gray-600 rounded-sm h-20" name="overview" value={formData.overview} onChange={handleChange}/>
                    
                    {featureCount.map((item, index) => (
                        <div className="flex" key={index}>
                            <input type="text" name={index} value={item} placeholder="Project Feature" className="w-full p-1 rounded-sm text-sm text-gray-600 outline-none" onChange={handleProjectFeature}/>
                            {index === (featureCount.length - 1) ?
                                <button type="button" className="w-2/12 sm:w-1/12 bg-violet-400 hover:shadow-md p-1 rounded-sm text-sm" onClick={addFeature}>Add</button> :
                                <button type="button" className="w-2/12 sm:w-1/12 bg-violet-400 hover:shadow-md p-1 rounded-sm text-sm" onClick={() => removeFeature(index)}>X</button>
                            }
                        </div>
                    ))}
                    
                    <input type="text" placeholder="Front-end technology" className="p-1 outline-none text-sm text-gray-600 rounded-sm" name="frontEnd" value={formData.frontEnd} onChange={handleChange}/>
                    <input type="text" placeholder="Back-end technology" className="p-1 outline-none text-sm text-gray-600 rounded-sm" name="backEnd" value={formData.backEnd} onChange={handleChange}/>
                    <input type="text" placeholder="Tools" className="p-1 outline-none text-sm text-gray-600 rounded-sm" name="tools" value={formData.tools} onChange={handleChange}/>
                    <input type="text" placeholder="Live URL" className="p-1 outline-none text-sm text-gray-600 rounded-sm" name="live_url" value={formData.live_url} onChange={handleChange}/>
                    <input type="text" placeholder="GitHub URL" className="p-1 outline-none text-sm text-gray-600 rounded-sm" name="github_url" value={formData.github_url} onChange={handleChange}/>

                    <input 
                        type="file" 
                        name="projectImages" 
                        accept="image/*" 
                        className="outline-none text-sm text-gray-600 rounded-sm"
                        multiple
                        onChange={(e) => setProjectImages(e.target.files)}
                    />


                    
                    <input type="submit" className="w-2/6 bg-violet-400 py-2 uppercase font-semibold hover:shadow-md cursor-pointer" value="Create" onClick={handleSubmit}/>
                </form>
            </div>
        </div>
    );
}

export default CreateNewProject;


