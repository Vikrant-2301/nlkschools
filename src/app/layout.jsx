import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Popup from "../components/ui/Popup";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NLK Group of Schools | Education since 1947",
  description:
    "Official website of NLK Group of Schools, Kanpur. Adopting modern pedagogy to teach children how to think, not what to think.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* FIX: Added 'overflow-x-hidden' here to handle global overflow properly */}
      <body className={`${inter.className} bg-blue-950 overflow-x-hidden`}>
        <Navbar />
        <Popup />
        <main className="relative z-10 bg-slate-50 min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
