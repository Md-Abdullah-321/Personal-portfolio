"use client"

import Sidebar from "@/components/sidebar";
import { useEffect, useState } from "react";
import ContactCard from "./contactCard";

function Contact() {
  const [messages, setMessages] = useState([]);
  const fetchMessages = async() => {
    const res = await fetch('https://portfolio-server-c0fa.onrender.com/api/message/');
    const data = await res.json();
    setMessages([...data.payload]);
  }
  useEffect(() => {
      //Temprary Solution:
      if(!localStorage.getItem("User")){
          return router.push('/admin/login', { scroll: false });
      }

      fetchMessages();
  }, []);

    console.log(messages);
    return (
      <div className="w-full min-h-screen flex justify-between">
         <Sidebar/>
        <div className="h-screen w-10/12 p-10">
            {messages.length > 0 && messages.map(message => {
              return <ContactCard key = {message._id} message={message}/>
            })}
        </div>
      </div>
    )
}

export default Contact;