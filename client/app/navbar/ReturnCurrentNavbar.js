"use client";

import { useEffect, useState } from "react";
import Navbar from "./NavbarForLargeDevice";
import MediumDeviceNavbar from "./NavbarForMediumDevice";
import NavbarForSmallDevices from "./NavbarForSmallDevices";

export const ReturnCurrentNavbar = () => {
    const [width, setWidth] = useState(null);
    useEffect(()=> {
        window.addEventListener('resize', ()=> {
            setWidth(window.innerWidth);
        })
     }, [])

     return <>
        {
        width > 1024? <Navbar/>: width >= 768? <MediumDeviceNavbar/>: <NavbarForSmallDevices/>
     }
     </>
}