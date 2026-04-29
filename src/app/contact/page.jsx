"use client";

import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { FaWhatsapp, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function ContactPage() {
    return (
        <section className="relative bg-(--white) py-14 sm:py-16 md:py-20 px-3 sm:px-6 md:px-16 overflow-hidden">

            {/* SVG BACKGROUND */}
            <svg
                className="absolute inset-0 w-full h-full z-0 opacity-40"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <pattern
                        id="pattern"
                        x="0"
                        y="0"
                        width="300"
                        height="300"
                        patternUnits="userSpaceOnUse"
                    >
                        <g stroke="#94a3b8" strokeWidth="1.2" fill="none">
                            <path transform="translate(20 40)" d="M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z" />
                            <path transform="translate(120 140)" d="M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z" />
                        </g>
                    </pattern>
                </defs>

                {/* Apply pattern */}
                <rect width="100%" height="100%" fill="url(#pattern)" />
            </svg>

            {/* CONTENT */}
            <div className="relative z-10 max-w-7xl mx-auto text-center">

                {/* Heading */}
                <h2 className="text-[32px] lg:text-[48px] font-bold text-center mb-1 pt-8 sm:pt-10 md:pt-12 tracking-[-1px] bg-linear-to-r from-(--primary-color) to-[#3b82f6] bg-clip-text text-transparent">
                    Get In Touch
                </h2>

                <p className="text-(--text-light) text-sm md:text-base">
                    We'd love to hear from you. Whether you have a question or just want to say hello, our team is ready to help!
                </p>

                {/* Grid */}
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 text-left">

                    {/* LEFT - FORM */}
                    <div className="bg-(--white) backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-(--shadow-large) border border-transparent hover:border-(--primary-color) hover:shadow-lg hover:-translate-y-1 transition-all duration-300">

                        <h3 className="text-2xl font-bold text-(--primary-color) mb-5">
                            Send Us a Message
                        </h3>

                        <form className="space-y-4">

                            <input
                                type="text"
                                placeholder="Your Name *"
                                className="w-full border border-(--primary-color) rounded-lg px-3 py-3.5 text-[16px] outline-none 
                                     focus:border-(--text-light) transition text-(--text-dark)"
                            />

                            <input
                                type="email"
                                placeholder="Your Email *"
                                className="w-full border border-(--primary-color) rounded-lg px-3 py-3.5 text-[16px] outline-none focus:border-(--text-light) transition"
                            />

                            <input
                                type="text"
                                placeholder="Your Number *"
                                className="w-full border border-(--primary-color) rounded-lg px-3 py-3.5 text-[16px] outline-none 
                                     focus:border-(--text-light) transition"
                            />

                            <textarea
                                rows="4"
                                placeholder="Your Message *"
                                className="w-full border border-(--primary-color) rounded-lg px-3 py-3.5 text-[16px] outline-none 
                                     focus:border-(--text-light) transition"
                            />

                            <button
                                type="submit"
                                className="bg-[#1f2e4a] text-(--white) font-bold px-7 py-3 rounded-lg text-[16px] 
                                         hover:bg-[#1e40af] transition duration-300"
                            >
                                Send Message
                            </button>

                        </form>
                    </div>

                    {/* RIGHT - CONTACT DETAILS */}
                    <div className="bg-(--white) backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-(--shadow-large) border border-transparent hover:border-(--primary-color) hover:shadow-lg hover:-translate-y-1 transition-all duration-300">

                        <h3 className="text-2xl font-bold text-(--primary-color) mb-5">
                            Contact Details
                        </h3>

                        <div className="mb-6">
                            <h4 className="text-xl font-semibold text-(--primary-color) mb-2">
                                Connect With Us
                            </h4>

                            <p className="text-sm text-gray-600 mb-3 text-[15px]">
                                For inquiries, support, or feedback, reach out via email. We respond within 24 hours.
                            </p>

                            <div className="flex items-center gap-2 text-sm text-gray-700 mb-2 text-[15px]">
                                <FiMail /> support@qutbee.com
                            </div>

                            <div className="flex items-center gap-2 text-sm text-gray-700 text-[15px]">
                                <FiPhone /> +971 509853664
                            </div>
                        </div>

                        <div className="mb-6">
                            <h4 className="text-xl font-semibold text-(--primary-color) mb-2">
                                Where to Find Us
                            </h4>

                            <p className="text-sm text-gray-600 mb-2 text-[15px]">
                                Feel free to stop by during office hours or send us mail at your convenience.
                            </p>

                            <div className="flex items-center gap-2 text-sm text-gray-700 text-[15px]">
                                <FiMapPin /> Abu Dhabi, United Arab Emirates
                            </div>
                        </div>

                        <div className="flex gap-3 mt-4">
                            <div className="w-10 h-10 bg-[#1f2e4a] text-white flex items-center justify-center rounded-full hover:bg-[#1e40af] transition">
                                <FaWhatsapp size={18} />
                            </div>
                            <div className="w-10 h-10 bg-[#1f2e4a] text-white flex items-center justify-center rounded-full hover:bg-[#1e40af] transition">
                                <FaLinkedinIn size={18} />
                            </div>
                            <div className="w-10 h-10 bg-[#1f2e4a] text-white flex items-center justify-center rounded-full hover:bg-[#1e40af] transition">
                                <MdEmail size={18} />
                            </div>
                            <div className="w-10 h-10 bg-[#1f2e4a] text-white flex items-center justify-center rounded-full hover:bg-[#1e40af] transition">
                                <FiPhone size={18} />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}