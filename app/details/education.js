
export default function Education() {
  return (
    <div className="w-full">
      <h2 className="text-3xl font-bold">Education</h2>
      <div className="flex flex-col gap-y-2">
        <div className="flex bg-gray-200 p-5 rounded-md mt-5">
            <div className="w-2/6 text-gray-500 text-sm">09/2021 - Present</div>
            <div className="w-4/6">
                <p className="text-gray-800 font-semibold text-md">Tangail Polytechnic Institute</p>
                <h3 className="text-xl font-bold">Diploma in Computer Technology</h3>
            </div>
        </div> 
        <div className="flex bg-gray-200 p-5 rounded-md">
            <div className="w-2/6 text-gray-500 text-sm">01/2018 - 02/2020</div>
            <div className="w-4/6">
                <p className="text-gray-800 font-semibold text-md">Nazmul Haque Madinatul Ulum Kamil Madrasah</p>
                <h3 className="text-xl font-bold">Secondary School Certificate</h3>
            </div>
        </div> 
      </div>
    </div>
  )
}
