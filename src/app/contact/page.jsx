"use client";

import { RiMapPin2Fill } from "react-icons/ri";
import { FaPhoneAlt, FaWhatsapp, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function ContactPage() {
    return (
        <section className="relative bg-(--white) px-4 sm:px-6 py-26 sm:py-32 overflow-hidden">

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
                <rect width="100%" height="100%" fill="url(#pattern)" />
            </svg>

            {/* CONTENT */}
            <div className="relative z-10 max-w-7xl mx-auto text-center">

                {/* Heading */}
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold sm:font-bold text-center mb-1 pt-6 sm:pt-8 md:pt-10 leading-tight tracking-[-1px] heading-color">
                    Get In Touch
                </h2>

                <p className="text-sm sm:text-base md:text-lg lg:text-[22px] max-w-4xl mx-auto py-4 font-medium text-(--text-light)">
                    We'd love to hear from you. Whether you have a question or just want to say hello, our team is ready to help!
                </p>

                {/* Grid */}
                <div className="mt-10 sm:mt-12 md:mt-14 grid grid-cols-1 md:grid-cols-2 gap-y-8 sm:gap-y-10 gap-x-8 sm:gap-x-12 text-left">

                    {/* LEFT - FORM */}
                    <div className="bg-white/50  rounded-2xl p-5 sm:p-6 md:p-8 shadow-(--shadow-large) border border-transparent hover:border-(--primary-color) hover:shadow-lg hover:-translate-y-1 transition-all duration-300">

                        <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold leading-tight tracking-[-1px] heading-color mb-4 sm:mb-5">
                            Send Us a Message
                        </h3>

                        <form className="space-y-3 sm:space-y-4">

                            <input
                                type="text"
                                placeholder="Your Name *"
                                className="w-full border border-(--primary-color) rounded-lg px-3 py-2 text-sm sm:text-base outline-none focus:border-(--text-light) transition text-(--text-dark)"
                            />

                            <input
                                type="email"
                                placeholder="Your Email *"
                                className="w-full border border-(--primary-color) rounded-lg px-3 py-2 text-sm sm:text-base outline-none focus:border-(--text-light) transition"
                            />

                            <input
                                type="text"
                                placeholder="Your Number *"
                                className="w-full border border-(--primary-color) rounded-lg px-3 py-2 text-sm sm:text-base outline-none focus:border-(--text-light) transition"
                            />

                            <textarea
                                rows="4"
                                placeholder="Your Message *"
                                className="w-full border border-(--primary-color) rounded-lg px-3 py-3 sm:py-3.5 text-sm sm:text-base outline-none focus:border-(--text-light) transition"
                            />

                            <button
                                type="submit"
                                className="
                                    px-5 sm:px-7 py-2 sm:py-3 rounded-xl
                                    inline-flex items-center gap-2
                                    text-sm sm:text-base font-bold text-white
                                    bg-linear-to-br from-[#01cb58] to-[#00a346]
                                    shadow-[0_4px_24px_rgba(1,203,88,0.35),inset_0_1px_0_rgba(255,255,255,0.25)]
                                    transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]

                                    hover:from-[#00e66a] hover:to-[#00b84d]
                                    hover:shadow-[0_8px_40px_rgba(1,203,88,0.6),inset_0_1px_0_rgba(255,255,255,0.3)]
                                    hover:-translate-y-1 hover:scale-[1.03]
                                    active:scale-[0.98]
                                "
                            >
                                Send Message
                            </button>

                        </form>
                    </div>

                    {/* RIGHT - CONTACT DETAILS */}
                    <div className="bg-white/60 rounded-2xl p-5 sm:p-6 md:p-8 shadow-(--shadow-large) border border-transparent hover:border-(--primary-color) hover:shadow-lg hover:-translate-y-1 transition-all duration-300">

                        <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold leading-tight tracking-[-1px] heading-color mb-4 sm:mb-5">
                            Contact Details
                        </h3>

                        <div className="mb-5 sm:mb-6">
                            <h4 className="text-base sm:text-xl font-semibold heading-color mb-2">
                                Connect With Us
                            </h4>

                            <p className="text-sm sm:text-base font-medium text-(--text-light) mb-3">
                                For inquiries, support, or feedback, reach out via email. We respond within 24 hours.
                            </p>

                            <div className="flex items-center gap-2 text-sm sm:text-base font-medium text-(--text-light) mb-2">
                                <MdEmail className="shrink-0 text-green-500" /> support@qutbee.com
                            </div>

                            <div className="flex items-center gap-2 text-sm sm:text-base font-medium text-(--text-light)">
                                <FaPhoneAlt className="shrink-0 text-green-500" /> <span className="font-['Nata_Sans',sans-serif]">+971 509853664</span>
                            </div>
                        </div>

                        <div className="mb-5 sm:mb-6">
                            <h4 className="text-base sm:text-xl font-semibold heading-color mb-2">
                                Where to Find Us
                            </h4>

                            <p className="text-sm sm:text-base font-medium text-(--text-light) mb-2">
                                Feel free to stop by during office hours or send us mail at your convenience.
                            </p>

                            <div className="flex items-center gap-2 text-sm sm:text-base font-medium text-(--text-light)">
                                <RiMapPin2Fill className="shrink-0 text-green-500" /> Abu Dhabi, United Arab Emirates
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-3 mt-4">
                            <div className="w-9 h-9 sm:w-10 sm:h-10 bg-green-500 text-white flex items-center justify-center rounded-full hover:bg-green-700 transition cursor-pointer">
                                <FaWhatsapp size={16} />
                            </div>
                            <div className="w-9 h-9 sm:w-10 sm:h-10 bg-green-500 text-white flex items-center justify-center rounded-full hover:bg-green-700 transition cursor-pointer">
                                <FaLinkedinIn size={16} />
                            </div>
                            <div className="w-9 h-9 sm:w-10 sm:h-10 bg-green-500 text-white flex items-center justify-center rounded-full hover:bg-green-700 transition cursor-pointer">
                                <MdEmail size={16} />
                            </div>
                            <div className="w-9 h-9 sm:w-10 sm:h-10 bg-green-500 text-white flex items-center justify-center rounded-full hover:bg-green-700 transition cursor-pointer">
                                <FaPhoneAlt size={16} />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}