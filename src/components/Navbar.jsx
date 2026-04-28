import { FaWhatsapp, FaLinkedinIn, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className="w-full bg-white py-4 flex justify-center">
      <div className="w-[95%] max-w-7xl bg-gray-100 rounded-2xl px-6 py-4 flex items-center justify-between shadow-sm">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
            Q
          </div>
          <span className="text-xl font-semibold text-gray-700">
            qutbee
          </span>
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex gap-8 text-gray-600 font-medium">
          <a href="/" className="hover:text-black">Home</a>
          <a href="/about" className="hover:text-black">About</a>
          <a href="/services" className="hover:text-black">Services</a>
          <a href="#" className="hover:text-black">Blogs</a>
          <a href="/contact" className="hover:text-black">Contact</a>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-5 text-gray-600">
          <FaWhatsapp className="cursor-pointer hover:text-black" />
          <FaLinkedinIn className="cursor-pointer hover:text-black" />
          <FaEnvelope className="cursor-pointer hover:text-black" />
          <FaPhone className="cursor-pointer hover:text-black" />
        </div>
      </div>
    </div>
  );
}