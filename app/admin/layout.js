"use client";

import AdminTopBar from "@/components/adminTopBar";
import Sidebar from "@/components/sidebar";
import { useState } from "react";

export default function RootLayout({ children }) {
  const [sidebar, setSidebar] = useState(false);
  const isBrowser = typeof window !== 'undefined';
  const pathnameFromWindow = isBrowser ? window.location.pathname : '';

  const isAdminPath = pathnameFromWindow.startsWith("/admin");
  const isAdminLoginPath = pathnameFromWindow.endsWith("/login");
  const handleSidebar = () => setSidebar(!sidebar);
  
  return (
    <html lang="en">
        <body className='flex' >
            {isAdminPath && !isAdminLoginPath && <Sidebar sidebar={sidebar}/>}
            <div className="w-full">
                {isAdminPath && !isAdminLoginPath && <AdminTopBar handleSidebar={handleSidebar} sidebar={sidebar}/>}
                <div className={`${sidebar ? 'ml-[300px] overflow-visible h-auto mt-20' : 'ml-20 overflow-visible h-auto mt-20'} ${isAdminLoginPath ? 'h-screen overflow-hidden ml-0 -000mt-0': ''}`}>{children}</div>
            </div>
        </body>
      </html>
  );
}
