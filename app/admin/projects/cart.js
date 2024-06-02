
const Cart = (project) => {
    return <div className="h-80 w-60 shadow-md rounded-md">
        <div className="h-48 w-full ">

        </div>
        <div className="flex flex-col justify-center h-32 p-2">
            <h5 className="text-sm">Title: </h5>
            <p>FrontEnd: {project?.frontEnd?.map((item, index) => <span key={index}>{item}</span>)}</p>
            <p>Backend : {project?.backEnd?.map((item, index) => <span key={index}>{item}</span>)}</p>

            <div className="flex justify-between items-center mt-2">
                <button className=" bg-violet-600 text-white text-sm px-4 py-1 uppercase rounded-sm hover:shadow-md">Edit</button>
                <button className="bg-red-600 text-white text-sm px-4 py-1 uppercase rounded-sm hover:shadow-md">Delete</button>
            </div>
        </div>
    </div>
}


export default Cart;