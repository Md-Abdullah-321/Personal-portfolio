import { useEffect, useRef } from 'react';

function ShowContentModal({ name, subject, message, closeModal }) {
  const modalRef = useRef(null);

  useEffect(() => {
    modalRef.current.classList.add('modal-slide-in');
  }, []);

  const handleCloseModal = () => {
    modalRef.current.classList.remove('modal-slide-in');
    setTimeout(() => {
      closeModal();
    }, 300); 
  };

  return (
    <div ref={modalRef} id="message-dialogue" className="text-black p-4 flex flex-col justify-between h-full bg-gray-100 shadow-md">
      <h3 className="font-bold text-lg">{name}</h3>
      <p className="text-xs mt-0.5">Subject: {subject}</p>
      <p className="text-xs mt-0.5">Message: {message}</p>
      <div className="flex justify-end h-1/6">
        <button className="cursor-pointer bg-gray-200 px-2 hover:bg-gray-300" onClick={handleCloseModal}>Close</button>
      </div>
    </div>
  );
}

export default ShowContentModal;
