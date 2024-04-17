import { Inter } from "next/font/google";
import ReturnFooter from "./footer";
import "./globals.css";
import { ReturnCurrentNavbar } from "./navbar/ReturnCurrentNavbar";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children, metadata }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReturnCurrentNavbar />
        {children}
        <ReturnFooter />
      </body>
    </html>
  );
}
