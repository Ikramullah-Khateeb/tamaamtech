"use client";

import { FaFacebookF, FaYoutube, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FiSend } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="relative bg-[#0f2f24] text-gray-300 px-4 sm:px-6 py-14 sm:py-16 md:py-18">

      {/* Top Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-[#01cb58] to-transparent opacity-70" />

      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-10 sm:gap-y-12 gap-x-10 sm:gap-x-12 text-left">

          {/* Logo + About */}
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 sm:w-11 sm:h-11 bg-linear-to-br from-black to-[#01cb58] rounded-md"></div>
              <span className="text-white text-lg sm:text-xl font-semibold italic">
                Tamaam
              </span>
            </div>

            <p className="text-sm sm:text-lg pt-2 font-medium leading-relaxed mb-4 text-gray-400">
              Transforming businesses through innovative technology solutions and exceptional digital experiences.
            </p>

            <div className="flex gap-4">
              {[FaFacebookF, FaYoutube, FaLinkedinIn, FaInstagram].map((Icon, i) => (
                <div
                  key={i}
                  className="w-12 h-12 sm:w-14 sm:h-14 bg-[#111111] rounded-full flex items-center justify-center hover:bg-[#01cb58] hover:text-black transition-all duration-300 cursor-pointer"
                >
                  <Icon size={20} />
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

            <div className="flex items-center bg-[#111111] rounded-lg overflow-hidden border border-[#01cb58]/20">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent px-4 py-3 text-sm sm:text-base outline-none w-full text-white placeholder-gray-500"
              />
              <button className="bg-[#01cb58] px-4 py-3 hover:bg- transition">
                <FiSend className="w-5 h-5 text-black" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#01cb58]/20 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm sm:text-base">

          <p className="text-sm sm:text-lg pt-2 font-medium text-gray-400 text-center md:text-left">
            © 2020 Tamaam Technologies. All rights reserved.
          </p>

          <div className="flex flex-wrap justify-center md:justify-end gap-6 text-sm sm:text-lg pt-2 font-medium text-gray-400">
            <span className="hover:text-[#01cb58] cursor-pointer">Privacy Policy</span>
            <span className="hover:text-[#01cb58] cursor-pointer">Terms of Service</span>
            <span className="hover:text-[#01cb58] cursor-pointer">Cookie Policy</span>
          </div>

        </div>

      </div>
    </footer>
  );
}