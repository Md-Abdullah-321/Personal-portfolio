"use client"; // Ensure this is the first line

import { store } from '@/features/store';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { Provider } from 'react-redux';
import ReturnFooter from "./footer";
import './globals.css';
import { ReturnCurrentNavbar } from "./navbar/ReturnCurrentNavbar";

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    const handleRouteChange = (url) => {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('config', 'G-WFQKYNQLCZ', {
          page_path: url,
        });
      }
    };

    if (typeof window !== 'undefined' && !window.GA_INITIALIZED) {
      window.GA_INITIALIZED = true;
      // Initialize GA4
      const script = document.createElement('script');
      script.src = `https://www.googletagmanager.com/gtag/js?id=G-WFQKYNQLCZ`;
      script.async = true;
      document.head.appendChild(script);

      const script2 = document.createElement('script');
      script2.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-WFQKYNQLCZ', {
          page_path: window.location.pathname,
        });
      `;
      document.head.appendChild(script2);
    }

    if (typeof window !== 'undefined') {
      handleRouteChange(window.location.pathname);
    }
  }, [pathname]);

  const isBrowser = typeof window !== 'undefined';
  const pathnameFromWindow = isBrowser ? window.location.pathname : '';

  const isAdminPath = pathnameFromWindow.startsWith("/admin");
  const isProjectDetailsPath = pathnameFromWindow.startsWith("/projectDetails");

  return (
    <html lang="en" style={{ scrollBehavior: 'smooth' }}>
      <Head>
        <title>Md Abdullah</title>
        <meta name="description" content="Personal Portfolio" />
      </Head>
      <body className={inter.className}>
        {!isAdminPath && !isProjectDetailsPath && <ReturnCurrentNavbar />}
        <Provider store={store}>
          {children}
        </Provider>
        {!isAdminPath && !isProjectDetailsPath && <ReturnFooter />}
      </body>
    </html>
  );
}
