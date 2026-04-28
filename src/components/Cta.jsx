"use client";

import { FiArrowUpRight, FiPhone } from "react-icons/fi";

export default function CTASection() {
    return (
        <section className="w-full bg-gradient-to-b from-[#2f4f88] to-[#243a73] py-24 px-6 md:px-16 rounded-b-2xl relative">

            <div className="max-w-5xl mx-auto text-center">

                {/* Heading */}
                <h1 className="text-white text-3xl md:text-5xl font-semibold leading-tight">
                    Ready to Transform Your Business?
                </h1>

                {/* Subtext */}
                <p className="text-gray-200 mt-6 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
                    Let's discuss how our innovative technology solutions can accelerate
                    your growth and drive success. Get started today with a free
                    consultation.
                </p>

                {/* Buttons */}
                <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">

                    {/* Get Free Consultation */}
                    <button className="group bg-[#e5e7eb] text-[#1f2e4a] px-6 py-3 rounded-lg flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all duration-300">

                        <span className="transition-transform duration-300 group-hover:-translate-x-1">
                            Get Free Consultation
                        </span>

                        <FiArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    </button>

                    {/* Contact Us Today */}
                    <button className="group border border-white text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-white hover:text-[#1f2e4a] transition-all duration-300">

                        <span className="transition-transform duration-300 group-hover:-translate-x-1">
                            Contact Us Today
                        </span>

                        <FiPhone className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    </button>

                </div>
            </div>

            {/* Scroll To Top Button */}
            <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="fixed bottom-6 right-6 bg-[#1f2e4a] text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition"
            >
                ↑
            </button>

        </section>
    );
}