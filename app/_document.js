// app/layout.js
import { Inter } from 'next/font/google';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Md Abdullah',
  description: 'Personal Portfolio',
};

export default function RootLayout({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    const handleRouteChange = (url) => {
      window.gtag('config', 'G-EYTDVT5GPF', {
        page_path: url,
      });
    };

    if (!window.GA_INITIALIZED) {
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

    handleRouteChange(window.location.pathname);

    return () => {
    };
  }, [pathname]);

  return (
    <html lang="en" style={{ scrollBehavior: 'smooth' }}>
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
