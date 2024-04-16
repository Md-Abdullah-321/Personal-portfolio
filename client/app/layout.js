import { Inter } from "next/font/google";
import ReturnFooter from "./footer";
import "./globals.css";
import { ReturnCurrentNavbar } from "./navbar/ReturnCurrentNavbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Md Abdullah",
  description: "Personal Portfolio",
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {<ReturnCurrentNavbar/>}
        {children}
        {<ReturnFooter/>}
        </body>
    </html>
  );
}
