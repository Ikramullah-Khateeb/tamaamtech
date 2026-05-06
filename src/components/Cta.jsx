"use client";

import Link from "next/link";
import { useState } from "react";
import Popup from "./Popup";

export default function Cta({
    isServices = false,
    ctaTitle,
    ctaDescription,
    serviceCtaTitle,
    highlight,
    suffix,
    primaryBtn,
    secondaryBtn,
    secondaryhref,
}) {
    const [showPopup, setShowPopup] = useState(false);

    return (
        <section
            className={`relative overflow-hidden ${isServices
                ? "bg-white text-[#1e293b]"
                : "bg-linear-to-br from-black to-[#01cb58] text-white"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-20 md:py-24">
                <div className="text-center relative z-10 flex flex-col items-center">

                    {/* Label */}
                    {isServices && (
                        <span className="inline-flex items-center gap-2 bg-[#01cb58]/10 text-[#052e1a] px-3 mb-4 sm:px-4 py-1.5 sm:py-2 rounded-4xl text-xs sm:text-[0.875rem] font-medium">
                            Go beyond compliance
                        </span>
                    )}

                    {/* Title */}
                    <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-5 ${isServices ? "text-[#1e293b]" : "text-white"}`}>
                        {isServices ? (
                            <>
                                {serviceCtaTitle}{" "}
                                <span className="text-[#01cb58]">
                                    {highlight}
                                </span>{" "}
                                {suffix}
                            </>
                        ) : (
                            ctaTitle
                        )}
                    </h2>

                    {/* Subtitle */}
                    <p className="text-sm sm:text-base md:text-lg lg:text-[22px] max-w-175 mx-auto mb-8 sm:mb-10 opacity-90 leading-relaxed">
                        {ctaDescription}
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center w-full sm:w-auto">

                        {!isServices ? (
                            <>
                                {/* ✅ Primary Button (Popup Trigger) */}
                                <button
                                    onClick={() => setShowPopup(true)}
                                    className={`w-full sm:w-auto flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-4 text-sm sm:text-base font-medium md:text-lg 
                            bg-white text-[#20283f] rounded-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}
                                >
                                    <span>{primaryBtn}</span>
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M7 17L17 7M17 7H7M17 7V17" />
                                    </svg>
                                </button>

                                {/* Secondary Button */}
                                <Link href={secondaryhref}
                                    className={`w-full sm:w-auto flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-4 text-sm sm:text-base md:text-lg font-medium border 
                           border-white text-white hover:bg-white hover:text-[#20283f]
                            rounded-md transition-all duration-300`}
                                >
                                    <span>{secondaryBtn}</span>
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                        <path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13" />
                                    </svg>
                                    {/* <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                </svg> */}
                                </Link>
                            </>
                        ) : (
                            <button
                                onClick={() => setShowPopup(true)}
                                className={`w-full sm:w-auto flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-4 text-sm sm:text-base font-medium md:text-lg 
                            bg-linear-to-br from-[#01cb58] to-[#00a346] text-white rounded-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}
                            >
                                <span>{primaryBtn}</span>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                                </svg>
                            </button>
                        )}


                    </div>
                </div>
            </div>

            {/* Background Shapes */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute w-50 h-50 bg-white/10 rounded-full -top-24 -right-24 animate-pulse" />
                <div className="absolute w-75 h-75 bg-white/10 rounded-full -bottom-32 -left-32 animate-pulse" />
                <div className="absolute w-37.5 h-37.5 bg-white/10 rounded-full top-1/2 left-[10%] animate-pulse" />
            </div>

            {/* ✅ Popup */}
            {showPopup && <Popup onClose={() => setShowPopup(false)} />}
        </section>
    );
}