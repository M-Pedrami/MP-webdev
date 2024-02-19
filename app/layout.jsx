import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import "./globals.css";
import Header from "./components/Header";
import { ThemeProvider } from "./Libraries";
import { Footer } from "./components/Footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MPWEB Solutions",
  description: "My Portfolio Website",
  keywords:
    "web development, portfolio, full-stack web development, react, angular, node, html, css",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ThemeProvider>
        <body className={inter.className}>
          <Header />
          <main>{children}</main>
          <Footer/>
          <ToastContainer/>
        </body>
      </ThemeProvider>
    </html>
  );
}
