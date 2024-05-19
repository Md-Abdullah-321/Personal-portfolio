/* eslint-disable @next/next/next-script-for-ga */
"use client";

import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";
import ReturnFooter from "./footer";
import "./globals.css";
import { ReturnCurrentNavbar } from "./navbar/ReturnCurrentNavbar";

const inter = Inter({ subsets: ["latin"] });
const metadata = {
  title: "Md Abdullah",
  description: "Personal Portfolio"
}

export default function RootLayout({ children }) {
  const pathname = usePathname();

  // Google Analytics tracking code
  const googleAnalyticsScript = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-WFQKYNQLCZ');
  `;

  return (
    <html lang="en" style={{ scrollBehavior: 'smooth' }}>
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />

        {/* Google Analytics tracking code */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-WFQKYNQLCZ"></script>
        <script dangerouslySetInnerHTML={{ __html: googleAnalyticsScript }}></script>
      </head>
      <body className={inter.className}>
       {pathname !== "/projectDetails" &&  <ReturnCurrentNavbar />}
        {children}
       {pathname !== "/projectDetails" &&  <ReturnFooter />}
      </body>
    </html>
  );
}
