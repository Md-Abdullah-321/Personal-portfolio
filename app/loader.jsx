/**
 * Title: Loader 
 * Description: Global Page Loader with animation and enhanced design
 * Author: Md Abdullah
 * Date: 13/12/2024
 */

import { useEffect } from "react";

const Loader = () => {
    useEffect(() => {
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    return (
        <div className="w-full h-screen fixed left-0 top-0 bg-white z-50 flex justify-center items-center">
            <div className="text-center animate-pulse">
                <h1 className="bg-gradient-to-r from-violet-700 to-violet-500 ... inline-block ... text-transparent ... bg-clip-text text-3xl sm:text-4xl md:text-5xl font-extrabold">Md Abdullah</h1>
                <p className="text-gray-500">Full Stack Web Developer</p>
            </div>
        </div>
    );
};

export default Loader;
