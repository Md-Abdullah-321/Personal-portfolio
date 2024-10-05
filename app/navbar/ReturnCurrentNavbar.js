"use client";

import dynamic from 'next/dynamic';
import { Suspense, useEffect, useState } from "react";

const Navbar = dynamic(() => import("./NavbarForLargeDevice"));
const MediumDeviceNavbar = dynamic(() => import("./NavbarForMediumDevice"));
const NavbarForSmallDevices = dynamic(() => import("./NavbarForSmallDevices"));

export const ReturnCurrentNavbar = () => {
  const [width, setWidth] = useState(null);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    if (typeof window !== 'undefined') {
      setWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);

      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  return (
    <Suspense>
      {width > 1024 ? (
        <Navbar />
      ) : width >= 768 ? (
        <MediumDeviceNavbar />
      ) : (
        <NavbarForSmallDevices />
      )}
    </Suspense>
  );
};
