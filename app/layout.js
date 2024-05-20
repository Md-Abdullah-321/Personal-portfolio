"use client";

import { Inter } from "next/font/google";
import Head from 'next/head';
import { usePathname } from "next/navigation";
import ReturnFooter from "./footer";
import "./globals.css";
import { ReturnCurrentNavbar } from "./navbar/ReturnCurrentNavbar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const pathname = usePathname();
  return (
    <html lang="en" style={{ scrollBehavior: 'smooth' }}>
      <Head>
        <title>Md Abdullah</title>
        <meta name="description" content="Personal Portfolio" />
      </Head>
      <body className={inter.className}>
        <ReturnCurrentNavbar />
        {children}
        {pathname !== "/projectDetails" && <ReturnFooter />}
      </body>
    </html>
  );
}
