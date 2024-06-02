"use client"

import Sidebar from "@/components/sidebar";
import { useEffect, useState } from "react";
import Cart from "./cart";

function Projects() {
  const [projects, setProjects] = useState( [
    {
        "_id": "662722b2908c49180ce93ad5",
        "title": "Tangail Polytechnic Institute",
        "overview": "The Institute Management System Web App features a React frontend with Tailwind CSS, providing user-friendly access to student information and admin controls. Its Node.js backend, powered by MongoDB and Mongoose, facilitates secure authentication and efficient data management.",
        "features": [
            "<li><strong>Public Navigation:</strong> Allows users to navigate to different sections of the website, including Home, About, Department, Gallery, and Contact Us.</li>",
            "<li><strong>Admin Dashboard Navigation:</strong> Provides administrators with navigation options to manage various aspects of the website, such as Teachers, Students, Notices, Messages, Attendance, and Settings.</li>",
            "<li><strong>Interactive Home Page:</strong> Likely includes dynamic content and interactive elements to engage users and provide important information about the institute.</li>",
            "<li><strong>Department Descriptions:</strong> Users can access detailed descriptions of the institute's different Engineering Departments, helping them make informed decisions about their academic pursuits.</li>",
            "<li><strong>Contact Form:</strong> The Contact Us page includes a form that allows users to send inquiries or messages to the institute, facilitating communication between users and administrators.</li>"
        ],
        "frontEnd": [
            "React.js",
            "Tailwind CSS"
        ],
        "backEnd": [
            "Node.js",
            "Express.js",
            "MongoDB"
        ],
        "tools": [
            "VS Code",
            "Postman"
        ],
        "live_url": "https://tangail-polytechnic-institute.netlify.app/",
        "github_url": "https://github.com/Md-Abdullah-321/tangail-polytechnic-institute",
        "createdAt": "2024-04-23T02:53:38.664Z",
        "updatedAt": "2024-04-23T03:29:25.748Z",
        "__v": 0,
        "projectImages": [
            "https://firebasestorage.googleapis.com/v0/b/personal-portfolio-1b57c.appspot.com/o/projects%2FTangail%20Polytechnic%20Institute%2FScreenshot_4%20-%20Copy.png?alt=media&token=4126ba3a-30f5-4d23-be22-39e6990434d5",
            "https://firebasestorage.googleapis.com/v0/b/personal-portfolio-1b57c.appspot.com/o/projects%2FTangail%20Polytechnic%20Institute%2FScreenshot_5%20-%20Copy.png?alt=media&token=cd6f3d2d-b562-46a4-894c-c1dd9c149ce8",
            "https://firebasestorage.googleapis.com/v0/b/personal-portfolio-1b57c.appspot.com/o/projects%2FTangail%20Polytechnic%20Institute%2FScreenshot_6%20-%20Copy.png?alt=media&token=8d803982-08f5-477f-a550-e008a88058eb",
            "https://firebasestorage.googleapis.com/v0/b/personal-portfolio-1b57c.appspot.com/o/projects%2FTangail%20Polytechnic%20Institute%2FScreenshot_7%20-%20Copy.png?alt=media&token=4aaffffd-ee49-420f-8764-97de28a920db",
            "https://firebasestorage.googleapis.com/v0/b/personal-portfolio-1b57c.appspot.com/o/projects%2FTangail%20Polytechnic%20Institute%2FScreenshot_8%20-%20Copy.png?alt=media&token=da0e01a7-d4d3-4df1-bacf-3a8c2a5f4230"
        ]
    },
    {
        "_id": "662729d6a4a610c717a362d7",
        "title": "School Management System",
        "overview": "Welcome to the School Management System, a fully dynamic web solution built with the MERN stack. This system provides various features for both public users and administrators, including dynamic pages for public users and a comprehensive admin dashboard with functionalities for managing teachers, students, notices, and settings.",
        "features": [
            "<li><strong>Public User Pages:</strong> Allows users to access dynamic pages such as Home, About, Department, Gallery, and Contact Us, providing information about the school and its departments.</li>",
            "<li><strong>Admin Dashboard:</strong> Provides administrators with a comprehensive dashboard to manage various aspects of the school system, including Teachers, Students, Notices, Messages, Attendance, and Settings.</li>",
            "<li><strong>Framer Motion Animation:</strong> Utilizes Framer Motion for animated transitions and effects, enhancing the user experience with smooth animations throughout the application.</li>",
            "<li><strong>Firebase Integration:</strong> Integrates Firebase for handling cloud storage and other relevant features, ensuring efficient data management and storage capabilities.</li>",
            "<li><strong>Attendance Tracking:</strong> Enables administrators to monitor the attendance of both teachers and students, helping maintain accountability and track participation.</li>"
        ],
        "frontEnd": [
            "React Js",
            "Tailwind CSS",
            "React Animation Library"
        ],
        "backEnd": [
            "Node JS",
            "Express JS",
            "Mongo DB"
        ],
        "tools": [
            "VS Code",
            "Postman"
        ],
        "projectImages": [
            "https://firebasestorage.googleapis.com/v0/b/personal-portfolio-1b57c.appspot.com/o/projects%2FSchool%20Management%20System%2FScreenshot_6.png?alt=media&token=4a53c796-b065-4bb3-8756-a81fbf5d71a5",
            "https://firebasestorage.googleapis.com/v0/b/personal-portfolio-1b57c.appspot.com/o/projects%2FSchool%20Management%20System%2FScreenshot_7.png?alt=media&token=63f97a8e-c283-413b-a010-dbdb1ca4869f",
            "https://firebasestorage.googleapis.com/v0/b/personal-portfolio-1b57c.appspot.com/o/projects%2FSchool%20Management%20System%2FScreenshot_8.png?alt=media&token=ce515b8f-6582-44bc-b1ff-1e1cea78cfb8",
            "https://firebasestorage.googleapis.com/v0/b/personal-portfolio-1b57c.appspot.com/o/projects%2FSchool%20Management%20System%2FScreenshot_5.png?alt=media&token=bedb2d0e-aa3f-4a24-8e5b-0e72ce899468",
            "https://firebasestorage.googleapis.com/v0/b/personal-portfolio-1b57c.appspot.com/o/projects%2FSchool%20Management%20System%2FScreenshot_4.png?alt=media&token=09773efc-f53c-46b2-8458-5e9a9aa97e0b"
        ],
        "live_url": "https://creepy-duck-glasses.cyclic.app/",
        "github_url": "https://github.com/Md-Abdullah-321/School-Management-System",
        "createdAt": "2024-04-23T03:24:06.168Z",
        "updatedAt": "2024-04-23T03:32:14.436Z",
        "__v": 0
    },
    {
        "_id": "662d255989bcbcf28cf91d32",
        "title": "Real Estate Website",
        "overview": "Discover your perfect property with our MERN-powered real estate hub. From detailed listings to interactive maps, find homes tailored to your needs. Connect with trusted agents effortlessly and manage your search with personalized accounts. Experience seamless browsing on any device, ensuring convenience and security at every step.",
        "features": [
            "<li><strong>Comprehensive Property Listings:</strong> Offers an extensive database of properties, including residential homes, apartments, commercial spaces, and land parcels, with detailed descriptions, images, and virtual tours for informed decision-making.</li>",
            "<li><strong>User-Friendly Interface:</strong> Provides an intuitive and visually appealing interface designed for easy navigation, ensuring a seamless browsing experience for users exploring property listings and interacting with the platform's features.</li>",
            "<li><strong>Advanced Search Filters:</strong> Empowers users to customize their property search with advanced filters based on location, price range, property type, amenities, and more, allowing for precise results tailored to their preferences.</li>",
            "<li><strong>Mobile Responsiveness:</strong> Ensures a consistent and enjoyable user experience across all devices, with responsive design optimizing accessibility and functionality on smartphones, tablets, and desktops for on-the-go property search and browsing.</li>"
        ],
        "frontEnd": [
            "React JS",
            "Tailwind CSS",
            "Redux Toolkit"
        ],
        "backEnd": [
            "Node JS",
            "Express JS",
            "Mongo DB"
        ],
        "tools": [
            "VS Code",
            "Postman"
        ],
        "projectImages": [
            "https://firebasestorage.googleapis.com/v0/b/personal-portfolio-1b57c.appspot.com/o/projects%2FReal%20Estate%20Website%2FScreenshot_1.png?alt=media&token=8f28f03a-93cf-46dc-bf48-45d6688fa2c1",
            "https://firebasestorage.googleapis.com/v0/b/personal-portfolio-1b57c.appspot.com/o/projects%2FReal%20Estate%20Website%2FScreenshot_2.png?alt=media&token=c17cc93c-51e9-4b0d-91d6-b551aa3f5e94",
            "https://firebasestorage.googleapis.com/v0/b/personal-portfolio-1b57c.appspot.com/o/projects%2FReal%20Estate%20Website%2FScreenshot_4.png?alt=media&token=ef49574f-0b1b-4abb-b42e-9540d704aad3",
            "https://firebasestorage.googleapis.com/v0/b/personal-portfolio-1b57c.appspot.com/o/projects%2FReal%20Estate%20Website%2FScreenshot_4.png?alt=media&token=ef49574f-0b1b-4abb-b42e-9540d704aad3"
        ],
        "live_url": "https://creepy-duck-glasses.cyclic.app/",
        "github_url": "https://github.com/Md-Abdullah-321/School-Management-System",
        "createdAt": "2024-04-27T16:18:33.750Z",
        "updatedAt": "2024-04-28T15:22:03.651Z",
        "__v": 0
    }
]);
  useEffect(() => {
      //Temprary Solution:
      if(!localStorage.getItem("User")){
          return router.push('/admin/login', { scroll: false });
      }
  }, []);

    useEffect(() => {
        const fetchProject = async () => {
            const res = await fetch("https://portfolio-server-c0fa.onrender.com/api/project");
            const data = await res.json();
            setProjects([...data.payload]);
        }

        fetchProject();
    }, [])

  
    return (
      <div className="w-full min-h-screen flex justify-between">
         <Sidebar/>
        <div className="h-screen w-full md:w-10/12 my-10">
            <div className="flex flex-col justify-center items-center w-full">
                <h2 className=" uppercase text-5xl sm:text-6xl md:text-8xl font-extrabold text-gray-200">Portfolio</h2>
                <h3 className="absolute text-3xl sm:text-4xl md:text-5xl uppercase font-extrabold md:mt-1.5 bg-gradient-to-r from-violet-600 to-violet-300 ... inline-block ... text-transparent ... bg-clip-text">my recent work</h3>
          </div>


          <div className="md:p-20 flex gap-10 flex-wrap w-full justify-center items-center mt-10">
             {projects?.map((item, index) => <Cart key={index} project={item}/>)}
          </div>
        </div>
      </div>
    )
}

export default Projects;