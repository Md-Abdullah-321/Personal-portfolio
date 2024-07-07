function ContactCard({message}) {
    return <div className="w-1/3 flex justify-between bg-slate-100 h-32 p-2 rounded-sm">
        <div className = "w-2/3">
            <h3 className="font-semibold text-sm">{message?.name}</h3>
            <p className="line-clamp-2 text-xs mt-2">SUBJECT: {message.message}</p>
        </div>
        <div className="w-1/2 flex flex-col justify-between">
            <div className="flex justify-end items-start">
                {!message.seen && <span className="mt-1 mr-1 bg-violet-700 rounded-full h-3 w-3 border border-geen-700"></span>}
            </div>
            <div className="flex flex-col items-end gap-y-1">
                <button className="text-xs bg-red-700 w-10 rounded-sm font-medium text-white py-0.5 px-0.5">Delete</button>
                <button className="text-xs bg-green-700 w-10 rounded-sm font-medium text-white py-0.5 px-0.5">View</button>
            </div>
        </div>
    </div>;
}

export default ContactCard;