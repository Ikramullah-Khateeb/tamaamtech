"use client";

import { FaFacebookF, FaYoutube, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FiSend } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-[#1f2e4a] text-gray-300 pt-16 pb-6 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* LEFT - BRAND */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-md"></div>
              <span className="text-white text-lg font-semibold">Qutbee</span>
            </div>

            <p className="text-sm leading-relaxed mb-6">
              Transforming businesses through innovative technology solutions and exceptional digital experiences.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3">
              {[FaFacebookF, FaYoutube, FaLinkedinIn, FaInstagram].map((Icon, i) => (
                <div
                  key={i}
                  className="w-10 h-10 bg-[#2b3c5a] rounded-full flex items-center justify-center hover:bg-[#1e40af] transition cursor-pointer"
                >
                  <Icon size={16} />
                </div>
              ))}
            </div>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>AI Powered Solutions</li>
              <li>Web and Mobile Apps</li>
              <li>Cloud Services (Google/Azure/AWS)</li>
              <li>IT Infra and TechOps Solutions</li>
              <li>Digital Marketing and Social Media</li>
            </ul>
          </div>

          {/* CYBERSECURITY */}
          <div>
            <h4 className="text-white font-semibold mb-4">Cybersecurity</h4>
            <ul className="space-y-2 text-sm">
              <li>Threat Detection & Protection</li>
              <li>Cloud Security Assessments</li>
              <li>Network Infrastructure Testing</li>
              <li>Access Control Management</li>
              <li>Compliance Services</li>
            </ul>
          </div>

          {/* NEWSLETTER */}
          <div>
            <h4 className="text-white font-semibold mb-4">Stay Updated</h4>
            <p className="text-sm mb-4">
              Subscribe to our newsletter for the latest insights and technology trends.
            </p>

            {/* Input */}
            <div className="flex items-center bg-[#2b3c5a] rounded-lg overflow-hidden">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent px-4 py-2 text-sm outline-none w-full text-white placeholder-gray-400"
              />
              <button className="bg-[#3b4d6b] px-4 py-2 hover:bg-[#1e40af] transition">
                <FiSend />
              </button>
            </div>
          </div>

        </div>

        {/* DIVIDER */}
        <div className="border-t border-gray-600 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-sm gap-4">

          <p className="text-gray-400">
            © 2020 Qutbee Technologies. All rights reserved.
          </p>

          <div className="flex gap-6 text-gray-400">
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer">Terms of Service</span>
            <span className="hover:text-white cursor-pointer">Cookie Policy</span>
          </div>

        </div>

      </div>
    </footer>
  );
}