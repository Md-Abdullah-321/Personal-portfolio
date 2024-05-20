"use client"; // Ensure this is the first line

import { Inter } from 'next/font/google';
import Head from 'next/head';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import ReturnFooter from "./footer";
import './globals.css';
import { ReturnCurrentNavbar } from "./navbar/ReturnCurrentNavbar";

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    const handleRouteChange = (url) => {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('config', 'G-EYTDVT5GPF', {
          page_path: url,
        });
      }
    };

    if (typeof window !== 'undefined' && !window.GA_INITIALIZED) {
      window.GA_INITIALIZED = true;
      // Initialize GA4
      const script = document.createElement('script');
      script.src = `https://www.googletagmanager.com/gtag/js?id=G-EYTDVT5GPF`;
      script.async = true;
      document.head.appendChild(script);

      const script2 = document.createElement('script');
      script2.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-EYTDVT5GPF', {
          page_path: window.location.pathname,
        });
      `;
      document.head.appendChild(script2);
    }

    if (typeof window !== 'undefined') {
      handleRouteChange(window.location.pathname);
    }

    return () => {
      // Clean up if needed (e.g., removing event listeners)
    };
  }, [pathname]);

  if (typeof window !== 'undefined' && !window.location.pathname.startsWith("/admin")) {
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
  } else {
    return (
      <html lang="en" style={{ scrollBehavior: 'smooth' }}>
        <Head>
          <title>Md Abdullah</title>
          <meta name="description" content="Personal Portfolio" />
        </Head>
        <body className={inter.className}>
          {children}
        </body>
      </html>
    );
  }
}
