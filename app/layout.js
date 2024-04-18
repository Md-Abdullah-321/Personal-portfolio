import { Inter } from "next/font/google";
import ReturnFooter from "./footer";
import "./globals.css";
import { ReturnCurrentNavbar } from "./navbar/ReturnCurrentNavbar";

const inter = Inter({ subsets: ["latin"] });
const metadata = {
  title: "Md Abdullah",
  description: "Personal Portfolio"
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className={inter.className}>
        <ReturnCurrentNavbar />
        {children}
        <ReturnFooter />
      </body>
    </html>
  );
}
