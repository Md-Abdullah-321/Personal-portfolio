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
                    <a href="#">Home</a>
                </li> 
                <li>
                    <a href="#">About</a>
                </li> 
                <li>
                    <a href="#">Skills</a>
                </li> 
                <li>
                    <a href="#">Services</a>
                </li> 
                <li>
                    <a href="#">Projects</a>
                </li> 
                <li>
                    <a href="#">Contact</a>
                </li>
                <li>
                    <button style={ButtonBackground} className="px-6 py-1.5 rounded-3xl hover:bg-white ">Hire Me!</button>
                </li>
            </ul>
        </nav>
    );
}
