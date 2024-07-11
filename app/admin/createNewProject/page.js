function CreateNewProject() {
    return <div className="flex justify-center items-center w-full h-screen">
        <div className="bg-violet-300 w-1/2 p-4">
        <form action="POST" className="flex flex-col gap-y-2">
                <input type="text" placeholder="Project title" />
                <textarea type="text" placeholder="Project Overview" />
                <div>
                    <input type="text" placeholder={``}/>
                </div>
            </form>
        </div>
            
    </div>;
}

export default CreateNewProject;