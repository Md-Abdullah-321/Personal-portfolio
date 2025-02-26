"use client";

import { store } from "@/features/store";
import { Inter } from "next/font/google";
import Head from "next/head";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { Provider } from "react-redux";
import ReturnFooter from "./footer";
import "./globals.css";
import { ReturnCurrentNavbar } from "./navbar/ReturnCurrentNavbar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    const handleRouteChange = (url) => {
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("config", "G-WFQKYNQLCZ", {
          page_path: url,
        });
      }
    };

    if (typeof window !== "undefined" && !window.GA_INITIALIZED) {
      window.GA_INITIALIZED = true;

      const script = document.createElement("script");
      script.src = `https://www.googletagmanager.com/gtag/js?id=G-WFQKYNQLCZ`;
      script.async = true;
      document.head.appendChild(script);

      const script2 = document.createElement("script");
      script2.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-WFQKYNQLCZ', {
          page_path: window.location.pathname || "",
        });
      `;
      document.head.appendChild(script2);
    }

    if (typeof window !== "undefined") {
      handleRouteChange(window.location.pathname || "");
    }
  }, [pathname]);

  const isBrowser = typeof window !== "undefined";
  const pathnameFromWindow = isBrowser ? window.location.pathname : "";

  const isAdminPath = pathnameFromWindow?.startsWith("/admin") ?? false;
  const isProjectDetailsPath =
    pathnameFromWindow?.startsWith("/projectDetails") ?? false;

  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
      <Head>
        {/* Primary Meta Tags */}
        <title>Md Abdullah | Full Stack Developer</title>
        <meta
          name="description"
          content="Personal portfolio of Md Abdullah – Full Stack Developer specializing in Next.js, Laravel, and modern web technologies."
        />
        <meta
          name="keywords"
          content="Md Abdullah, Full Stack Developer, Next.js, Laravel, JavaScript, Web Development, Portfolio"
        />
        <meta name="author" content="Md Abdullah" />
        <meta name="application-name" content="Md Abdullah Portfolio" />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="content-type" content="text/html; charset=UTF-8" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://mdabdullah.info" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mdabdullah.info" />
        <meta
          property="og:title"
          content="Md Abdullah | Full Stack Developer"
        />
        <meta
          property="og:description"
          content="Explore my projects, skills, and experience as a Full Stack Developer specializing in Next.js and Laravel."
        />
        <meta
          property="og:image"
          content="https://mdabdullah.info/og-image.jpg"
        />
      </Head>

      <body className={inter.className}>
        {!isAdminPath && !isProjectDetailsPath && <ReturnCurrentNavbar />}
        <Provider store={store}>{children}</Provider>
        {!isAdminPath && !isProjectDetailsPath && <ReturnFooter />}
      </body>
    </html>
  );
}
