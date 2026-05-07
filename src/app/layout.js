import { Nata_Sans, Raleway } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollTop from "./scrolltop/page";

const nataSans = Nata_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable:"--font-nata-sans",
  display: "swap",
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable:"--font-raleway",
  display: "swap",
});

export const metadata = {
  title: "Tamaam Technologies",
  description: "Tamaam Technologies - Your Partner in Digital Innovation",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${nataSans.variable} ${raleway.variable}`}>
        <Navbar />
        <ScrollTop />
        {children}
        {/* <Footer /> */}
        <Footer />
      </body>
    </html>
  );
}
