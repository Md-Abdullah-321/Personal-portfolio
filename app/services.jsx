import { BiQrScan } from "react-icons/bi";
import { HiBugAnt } from "react-icons/hi2";
import { SiVisualstudiocode } from "react-icons/si";


const ServicesCart = ({icon, title, description}) => {
    return <div className="flex w-full md:w-[48.85%] lg:w-[32%] justify-between p-4 h-44 rounded-md shadow-md border">
        <div className="w-1/4">
            <p>{icon}</p>
        </div>
        <div className="flex flex-col justify-center w-3/4 text-end">
            <h3>{title}</h3>
            <p className="text-xs">{description}</p>
        </div>
    </div>
}

export default function Services() {
  return (
    <div className="min-h-[700px] bg-gray-50 py-20 flex flex-col justify-center items-center" id="services">
        <div className="flex flex-col justify-center items-center w-full">
            <h2 className=" uppercase text-5xl sm:text-6xl md:text-8xl font-extrabold text-gray-200">Services</h2>
            <h3 className="absolute text-3xl sm:text-4xl md:text-5xl uppercase font-extrabold md:mt-1.5 bg-gradient-to-r from-violet-600 to-violet-300 ... inline-block ... text-transparent ... bg-clip-text">What i do</h3>
      </div>

      <div className="mt-10 lg:w-9/12 mx-auto flex justify-center lg:justify-between items-center flex-wrap gap-4 lg:gap-0 p-4 lg:p-0">
        <ServicesCart icon={<BiQrScan className="w-16 h-16 -rotate-45 text-gray-300"/>} title="Responsive Design" description="I make responsive and pixel-perfect UI"/>

        <ServicesCart icon={<SiVisualstudiocode className="w-16 h-16 -rotate-45 text-gray-300"/>} title="Web Development" description="I build web application with modern technology"/>

        <ServicesCart icon={<HiBugAnt className="w-16 h-16 -rotate-45 text-gray-300"/>} title="Bug Fixing" description="I fix bugs and redesign UI"/>
      </div>
    </div>
  )
}
