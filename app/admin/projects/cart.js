import Image from "next/image";


const Cart = ({project, handleDeleteProject, handleEditProject}) => {
    
    return <div className="h-[400px] w-72 shadow-md rounded-md bg-gray-50 border border-violet-200 flex flex-col justify-between">
        <div className="h-[220px] w-full">
        <Image src={project?.projectImages[0]} alt="Project-Image - Engify" srcSet="" className='w-full h-full object-cover object-center self-center rounded-br-full' width={1920} height={1080}/>
        </div>
        <div className="flex flex-col justify-center h-40  p-2 text-[14px] gap-y-2">
            <div className="w-full flex flex-col gap-y-1">
                <h5 className="text-[15px] font-semibold uppercase text-violet-700">{project?.title}</h5>
                <p className="flex items-center gap-1 flex-wrap">FrontEnd: {project?.frontEnd?.map((item, index) => index < 2 && <span key={index} className="bg-violet-200 mx-0.5 p-1 rounded-lg">{item}</span>)}</p>
                <p className="flex items-center gap-1 flex-wrap">Backend : {project?.backEnd?.map((item, index) => index < 2 && <span key={index} className="bg-violet-200  p-1 rounded-lg">{item}</span>)}</p>
            </div>

            <div className="flex justify-between items-center mt-2">
                <button className=" bg-violet-600 text-white text-sm px-4 py-1 uppercase rounded-sm hover:shadow-md" onClick={() => handleEditProject(project)}>Edit</button>
                <button className="bg-red-600 text-white text-sm px-4 py-1 uppercase rounded-sm hover:shadow-md" onClick={() => handleDeleteProject(project._id)}>Delete</button>
            </div>
        </div>
    </div>
}


export default Cart;