
function ContactCard({ message, openModal, deleteModal }) {
  return (
    <div className="w-full sm:w-80 flex justify-between bg-slate-100 h-32 p-2 rounded-sm">
      <div className="w-5/6">
        <h3 className="font-semibold">{message?.name}</h3>
        <p className="line-clamp-1 text-xs mt-2"><span className="font-semibold">Subject:</span> {message.subject}</p>
        <p className="line-clamp-2 text-xs mt-0.5"><span className="font-semibold">Email:</span> {message.email}</p>
        <p className="line-clamp-2 text-xs mt-0.5"><span className="font-semibold">Message:</span> {message.message}</p>
      </div>
      <div className="w-1/6 flex flex-col justify-between">
        <div className="flex justify-end items-start">
          {!message.seen && (
            <span className="mt-1 mr-1 bg-violet-700 rounded-full h-3 w-3 border border-green-700"></span>
          )}
        </div>
        <div className="flex flex-col items-end gap-y-1">
          <button
            className="text-xs bg-red-700 w-10 rounded-sm font-medium text-white py-0.5 px-0.5"
            onClick={() => deleteModal(message._id)}
          >
            Delete
          </button>
          <button
            className="text-xs bg-green-700 w-10 rounded-sm font-medium text-white py-0.5 px-0.5"
            onClick={() => openModal()}
          >
            View
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContactCard;
