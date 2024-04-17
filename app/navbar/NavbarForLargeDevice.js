import Link from "next/link";

const ButtonBackground = {
    background: 'rgb(66,29,136)',
    backgroundImage: 'linear-gradient(90deg, rgba(66,29,136,1) 0%, rgba(59,18,135,1) 50%, rgba(0,0,0,0.7) 100%)'
};

export default function Navbar (){
    return (
        <nav className="flex justify-between items-center px-20 h-20 bg-[#0F0715] text-white text-lg">
            <div>
                <p>abdullah.dev.it@gmail.com</p>
            </div>
            <ul className="flex items-center gap-x-6">
                <li>
                    <Link href="#">Home</Link>
                </li> 
                <li>
                    <Link href="#">About</Link>
                </li> 
                <li>
                    <Link href="#">Skills</Link>
                </li> 
                <li>
                    <Link href="#">Services</Link>
                </li> 
                <li>
                    <Link href="#">Projects</Link>
                </li> 
                <li>
                    <button style={ButtonBackground} className="px-6 py-1.5 rounded-3xl hover:bg-white ">Hire Me!</button>
                </li>
            </ul>
        </nav>
    );
}
