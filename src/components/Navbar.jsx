"use client";

import Link from "next/link";
import Image from "next/image";
import { FaWhatsapp, FaLinkedinIn, FaEnvelope, FaPhone } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";

export default function Navbar() {
  const navItems = ["Home", "About", "Services", "Blogs", "Contact"];

  return (
    <nav className="fixed left-1/2 -translate-x-1/2 top-6 z-50 w-[90%] max-w-7xl 
    rounded-2xl border bg-white/10 backdrop-blur-xl border-white/20 shadow-lg">

      {/* ✅ MOVE INPUT HERE */}
      <input
        id="menu-toggle"
        type="checkbox"
        className="peer absolute opacity-0"
      />

      <div className="flex items-center justify-between px-6 py-3">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/tamamlogo.png"
            alt="Logo"
            width={140}
            height={40}
            className="w-26 h-13 sm:w-28 sm:h-14 md:w-32 md:h-16 object-cover"
          />
        </Link>

        {/* Hamburger */}
        <label
          htmlFor="menu-toggle"
          className="md:hidden text-2xl text-gray-800 cursor-pointer z-50"
        >
          <FiMenu />
        </label>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center w-full px-6">

          <div className="flex gap-8 mx-auto">
            {navItems.map((item) => (
              <Link
                key={item}
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="relative group text-gray-800 font-medium hover:text-[#20283f]"
              >
                {item}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#20283f] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-5">
            <FaWhatsapp className="text-gray-800 hover:text-[#20283f]" />
            <FaLinkedinIn className="text-gray-800 hover:text-[#20283f]" />
            <FaEnvelope className="text-gray-800 hover:text-[#20283f]" />
            <FaPhone className="text-gray-800 hover:text-[#20283f]" />
          </div>
        </div>
      </div>

      {/* ✅ Mobile Menu (must be sibling of peer) */}
      <div className="md:hidden max-h-0 overflow-hidden transition-all duration-300 
      peer-checked:max-h-125 peer-checked:opacity-100 opacity-0">

        <div className="px-6 pb-6 flex flex-col items-center gap-4 text-center">

          {navItems.map((item) => (
            <Link
              key={item}
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="text-gray-800 font-medium hover:text-[#20283f]"
            >
              {item}
            </Link>
          ))}

          <div className="flex gap-5 pt-4 border-t border-white/20">
            <FaWhatsapp className="text-gray-800" />
            <FaLinkedinIn className="text-gray-800" />
            <FaEnvelope className="text-gray-800" />
            <FaPhone className="text-gray-800" />
          </div>

        </div>
      </div>
    </nav>
  );
}