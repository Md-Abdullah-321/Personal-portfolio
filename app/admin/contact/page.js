"use client"
import ShowContentModal from '@/components/showContentModal';
import Sidebar from '@/components/sidebar';
import { getCookie } from '@/helpers/getCookie';
import { useEffect, useRef, useState } from 'react';
import ContactCard from './contactCard';


function Contact() {
  const [messages, setMessages] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalData, setModalData] = useState({
    name: '',
    subject: '',
    message: ''
  });


  const modalRef = useRef(null);
  const modalContentRef = useRef(null);

  const fetchMessages = async () => {
    try {
      const res = await fetch('https://portfolio-server-c0fa.onrender.com/api/message/');
      if (!res.ok) {
        throw new Error('Failed to fetch messages');
      }
      const data = await res.json();
      setMessages([...data.payload]);
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };

  useEffect(() => {
    if (!getCookie("token")) {
      return window.location.href = '/admin/login'; 
    }

    fetchMessages();
  }, []);

  const openModal = (id, name, subject, message, seen) => {
    setModalData({ name, subject, message });
    setModalVisible(true);
    if (!seen) seenComponent(id);
  };

  const seenComponent = async (id) => {
    await fetch(`https://portfolio-server-c0fa.onrender.com/api/message/seen/${id}`);
    setMessages(prevMessages => prevMessages.map(item => {
      if (item._id === id) {
        return { ...item, seen: true };
      }
      return item;
    }));
  };

  const closeModal = () => {
    modalContentRef.current.classList.add('modal-slide-out');
    setTimeout(() => {
      modalRef.current.classList.remove('modal-overlay-active');
      setModalVisible(false);
    }, 300); 
  };

  const deleteModal = async (id) => {
    const isConfirm = window.confirm("Are you sure to delete this message?");
    if(isConfirm){
      await fetch(`https://portfolio-server-c0fa.onrender.com/api/message/${id}`, {
        method: 'DELETE'
      });
      setMessages(prevMessages => prevMessages.filter(item => item._id !== id));
      alert("Message deleted successfully");
    }
  };

  return (
    <div className="w-full min-h-screen flex justify-between relative">
      <Sidebar />
      <div className="lg:w-[300px] hidden lg:block"></div>
      <div className="h-screen lg:w-10/12 p-2 mt-14 lg:mt-0 sm:p-10 relative">
        <div className="flex items-start gap-4 w-full flex-wrap">
          {messages.length > 0 && messages.map(message => (
            <ContactCard
              key={message._id}
              message={message}
              openModal={() => openModal(message._id, message.name, message.subject, message.message, message.seen)}
              deleteModal={() => deleteModal(message._id)}
            />
          ))}
        </div>
        {modalVisible && (
          <div ref={modalRef} className="modal-overlay modal-overlay-active flex justify-center items-center">
            <div ref={modalContentRef} className="modal-slide-in bg-white w-full p-2 sm:p-0 sm:w-80 h-60 z-50 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-md">
              <ShowContentModal
                name={modalData.name}
                subject={modalData.subject}
                message={modalData.message}
                closeModal={closeModal}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Contact;
