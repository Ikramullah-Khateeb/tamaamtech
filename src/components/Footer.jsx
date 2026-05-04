"use client";

import { FaFacebookF, FaYoutube, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FiSend } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-[#1f2e4a] text-gray-300 px-4 sm:px-6 py-14 sm:py-16 md:py-18">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-10 sm:gap-y-12 gap-x-10 sm:gap-x-12 text-left">

          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 sm:w-11 sm:h-11 bg-blue-600 rounded-md"></div>
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
                  className="w-12 h-12 sm:w-14 sm:h-14 sm:2 sm:mt-3 bg-[#2b3c5a] rounded-full flex items-center justify-center hover:bg-[#1e40af] transition cursor-pointer"
                >
                  <Icon size={20} />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white text-2xl font-semibold mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm sm:text-lg pt-2 font-medium text-gray-400">
              <li>AI Powered Solutions</li>
              <li>Web and Mobile Apps</li>
              <li>Cloud Services (Google/Azure/AWS)</li>
              <li>IT Infra and TechOps Solutions</li>
              <li>Digital Marketing and Social Media</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-2xl font-semibold mb-4">
              Cybersecurity
            </h4>
            <ul className="space-y-2.5 text-sm sm:text-lg pt-2 font-medium text-gray-400">
              <li>Threat Detection & Protection</li>
              <li>Cloud Security Assessments</li>
              <li>Network Infrastructure Testing</li>
              <li>Access Control Management</li>
              <li>Compliance Services</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-2xl font-semibold mb-4">
              Stay Updated
            </h4>
            <p className="text-base font-medium mb-5 ">
              Subscribe to our newsletter for the latest insights and technology trends.
            </p>

            <div className="flex items-center bg-[#2b3c5a] rounded-lg overflow-hidden">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent px-4 py-3 text-sm sm:text-base outline-none w-full text-white placeholder-gray-400"
              />
              <button className="bg-[#3b4d6b] px-4 py-3 hover:bg-[#1e40af] transition">
                <FiSend className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>

        <div className="border-t border-gray-600 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm sm:text-base">

          <p className="text-sm sm:text-lg pt-2 font-medium text-gray-400 text-center md:text-left">
            © 2020 Qutbee Technologies. All rights reserved.
          </p>

          <div className="flex flex-wrap justify-center md:justify-end gap-6 text-sm sm:text-lg pt-2 font-medium text-gray-400">
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer">Terms of Service</span>
            <span className="hover:text-white cursor-pointer">Cookie Policy</span>
          </div>

        </div>

      </div>
    </footer>
  );
}