"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FaWhatsapp, FaLinkedinIn, FaEnvelope, FaPhone } from "react-icons/fa";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed left-1/2 z-50 w-[90%] max-w-1100px
      -translate-x-1/2 transition-all duration-300 
      rounded-2xl border backdrop-blur-xl
      ${scrolled
          ? "top-3 bg-white/10 shadow-xl border-white/20"
          : "top-[5%] bg-white/5 shadow-lg border-white/30"
        }`}
    >
      <div className="flex items-center justify-between px-6 py-3">

        {/* Logo */}
        <Link href="/" className="flex items-center ml-2">
          <Image
            src="/tamamtechlogo.png"
            alt="TamamTechlogo"
            width={0}   // max size (like 350w in srcset)
            height={0}
            sizes="(max-width: 600px) 175px, 350px"
            className="w-[80px] sm:w-40px] md:w-[60px] h-auto object-contain"
            priority
          />
        </Link>


        {/* Nav Menu */}
        <div className="hidden md:flex items-center w-full px-5">

          {/* Center Links */}
          <div className="flex gap-8 mx-auto">
            {["Home", "About", "Services", "Blogs", "Contact"].map((item, i) => (
              <Link
                key={i}
                href={
                  item === "Home"
                    ? "/"
                    : `/${item.toLowerCase()}`
                }
                className="relative text-gray-800 font-medium transition-all duration-300 hover:text-[#20283f]"
              >
                {item}

                {/* underline animation */}
                <span className="absolute left-0 -bottom-1 w-0 h-2px bg-[#20283f] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex gap-5 items-center">
            <a href="https://wa.me/+971509853664" target="_blank">
              <FaWhatsapp className="text-gray-800 hover:text-[#20283f] hover:scale-125 transition" />
            </a>
            <a href="https://www.linkedin.com/company/qutbeetechnology/" target="_blank">
              <FaLinkedinIn className="text-gray-800 hover:text-[#20283f] hover:scale-125 transition" />
            </a>
            <a href="mailto:support@qutbee.com">
              <FaEnvelope className="text-gray-800 hover:text-[#20283f] hover:scale-125 transition" />
            </a>
            <a href="tel:+971509853664">
              <FaPhone className="text-gray-800 hover:text-[#20283f] hover:scale-125 transition" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}