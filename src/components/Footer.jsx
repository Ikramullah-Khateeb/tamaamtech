"use client";

import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaYoutube, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FiSend } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="relative bg-[#0f2f24]/90 text-gray-300 px-4 sm:px-6 pt-14 sm:pt-16 md:pt-18">

      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-10 sm:gap-y-12 gap-x-10 sm:gap-x-12 text-left">

          {/* Logo + About */}
          <div>
            <div className="flex items-center gap-3 mb-2">
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
            </div>

            <p className="text-sm sm:text-lg pt-2 font-medium leading-relaxed mb-4 text-gray-400">
              Transforming businesses through innovative technology solutions and exceptional digital experiences.
            </p>

            <div className="flex gap-4">
              {[FaFacebookF, FaYoutube, FaLinkedinIn, FaInstagram].map((Icon, i) => (
                <div
                  key={i}
                  className="size-10 bg-[#111111] rounded-full flex items-center justify-center hover:bg-[#01cb58] hover:text-black transition-all duration-300 cursor-pointer"
                >
                  <Icon size={18} />
                </div>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white text-2xl font-semibold mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm sm:text-lg pt-2 font-medium text-gray-400">
              <li className="hover:text-[#01cb58] cursor-pointer">AI Powered Solutions</li>
              <li className="hover:text-[#01cb58] cursor-pointer">Web and Mobile Apps</li>
              <li className="hover:text-[#01cb58] cursor-pointer">Cloud Services (Google/Azure/AWS)</li>
              <li className="hover:text-[#01cb58] cursor-pointer">IT Infra and TechOps Solutions</li>
              <li className="hover:text-[#01cb58] cursor-pointer">Digital Marketing and Social Media</li>
            </ul>
          </div>

          {/* Cybersecurity */}
          <div>
            <h4 className="text-white text-2xl font-semibold mb-4">
              Cybersecurity
            </h4>
            <ul className="space-y-2.5 text-sm sm:text-lg pt-2 font-medium text-gray-400">
              <li className="hover:text-[#01cb58] cursor-pointer">Threat Detection & Protection</li>
              <li className="hover:text-[#01cb58] cursor-pointer">Cloud Security Assessments</li>
              <li className="hover:text-[#01cb58] cursor-pointer">Network Infrastructure Testing</li>
              <li className="hover:text-[#01cb58] cursor-pointer">Access Control Management</li>
              <li className="hover:text-[#01cb58] cursor-pointer">Compliance Services</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white text-2xl font-semibold mb-4">
              Stay Updated
            </h4>
            <p className="text-base font-medium mb-5 text-gray-400">
              Subscribe to our newsletter for the latest insights and technology trends.
            </p>

            <div className="w-full max-w-md mx-auto flex items-center gap-3 border-b border-white/20 focus-within:border-[#01cb58] transition">

              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-transparent py-3 text-white placeholder-gray-500 outline-none"
              />

              <button className="h-10 w-10 rounded-md bg-[#01cb58] hover:bg-[#00b34d] flex items-center justify-center transition">
                <FiSend className="w-4 h-4 text-black" />
              </button>

            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#01cb58]/20 mt-12 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm sm:text-base">

          <p className="text-sm sm:text-lg pt-2 font-medium text-gray-400 text-center md:text-left">
            © 2026 Tamaam Technologies. All rights reserved.
          </p>

          <div className="flex flex-wrap justify-center md:justify-end gap-6 text-sm sm:text-lg pt-2 font-medium text-gray-400">

            <Link
              href="/privacypage"
              className="hover:text-[#01cb58] transition"
            >
              Privacy Policy
            </Link>

            <Link
              href="/termspage"
              className="hover:text-[#01cb58] transition"
            >
              Terms of Service
            </Link>

            <Link
              href="/cookiespage"
              className="hover:text-[#01cb58] transition"
            >
              Cookie Policy
            </Link>

          </div>

        </div>

      </div>
    </footer>
  );
}