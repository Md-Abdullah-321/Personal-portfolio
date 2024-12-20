"use client"
import ShowContentModal from '@/components/showContentModal';
import { BASE_URL } from '@/env';
import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
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
  const user = useSelector((state) => state.user);
  const isLoggedIn = useSelector((state) => state.userState.isLoggedIn);

  const fetchMessages = async () => {
    try {
      const res = await fetch(`${BASE_URL}/message`, {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: "include",
      });
      
      // if (!res.ok) {
        //   throw new Error('Failed to fetch messages');
        // }
        const data = await res.json();
        console.log(data);
      setMessages([...data.payload]);
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };

  useEffect(() => {
    if (!isLoggedIn) {
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
    await fetch(`${BASE_URL}/message/seen/${id}`);
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
      await fetch(`${BASE_URL}/message/${id}`, {
        method: 'DELETE'
      });
      setMessages(prevMessages => prevMessages.filter(item => item._id !== id));
      alert("Message deleted successfully");
    }
  };

  return (
    <div className="w-full min-h-screen p-10 flex justify-center items-center bg-violet-50">
        <div className="flex items-center justify-center gap-2 w-full flex-wrap">
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
  );
}

export default Contact;
