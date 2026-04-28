"use client";

export default function ServicesHero() {
  return (
    <section className="relative flex items-center min-h-screen overflow-hidden bg-gradient-to-br from-[#f8fafc] to-[#ffffff]">

      {/* SVG Background (UNCHANGED) */}
      <div className="absolute inset-0 pointer-events-none">
        <svg viewBox="0 0 960 540" className="absolute w-full h-full">
          <g strokeWidth="1" strokeLinejoin="bevel">
            <path d="M422.4 405L532.6 540L542.6 401Z" fill="#ffffff" />
            <path d="M542.6 401L688.7 389L544.6 281Z" fill="#ffffff" />
            <path d="M280.3 416L423.4 540L422.4 405Z" fill="#ffffff" />
            <path d="M422.4 405L423.4 540L532.6 540Z" fill="#ffffff" />
            <path d="M699.7 540L688.7 389L542.6 401Z" fill="#ffffff" />
            <path d="M532.6 540L699.7 540L542.6 401Z" fill="#ffffff" />
            <path d="M688.7 389L810.9 257L671.7 267Z" fill="#ffffff" />
            <path d="M152.1 540L260.3 540L280.3 416Z" fill="#ffffff" />
            <path d="M280.3 416L260.3 540L423.4 540Z" fill="#ffffff" />
            <path d="M261.3 260L147.1 394L280.3 416Z" fill="#ffffff" />
            <path d="M138.1 279L147.1 394L261.3 260Z" fill="#ffffff" />
            <path d="M836.9 420L810.9 257L688.7 389Z" fill="#ffffff" />
          </g>
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-[20px] text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-[0.5rem] bg-[rgba(59,130,246,0.1)] text-[#3b82f6] px-[1rem] py-[0.5rem] rounded-[2rem] text-[0.875rem] font-[500] mb-[2rem]">
          <svg viewBox="0 0 24 24" className="w-[1rem] h-[1rem]" fill="none" stroke="currentColor" strokeWidth="2">
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
          </svg>
          <span>ISO27001</span>
        </div>

        {/* 🔥 UPDATED HEADING */}
        <h1 className="text-[1.9rem] sm:text-[2.5rem] md:text-[3.5rem] font-[700] leading-[1.2] mb-[16px] text-[#1e293b]">
          We Don’t Simulate Threats <br />
          <span className="bg-[linear-gradient(135deg,#20283f,#3b82f6)] bg-clip-text text-transparent">
            We Expose Them
          </span>
        </h1>

        {/* 🔥 UPDATED SUBTEXT */}
        <p className="text-[16px] sm:text-[18px] text-[#64748b] mb-[36px] max-w-[700px] mx-auto font-[500]">
          Our experts go beyond surface-level scans to identify real-world vulnerabilities attackers are most likely to exploit.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4 flex-wrap mt-4">

          {/* Primary Button */}
          <button className="
    group flex items-center gap-2
    px-7 py-3
    bg-[#1e293b] text-white
    rounded-lg font-medium
    shadow-[0_10px_25px_rgba(0,0,0,0.15)]
    hover:shadow-[0_15px_35px_rgba(0,0,0,0.25)]
    hover:-translate-y-0.5
    transition-all duration-300
  ">
            See How We Work
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </button>

          {/* Secondary Button */}
          <button className="
    px-7 py-3
    border border-[#1e293b]
    text-[#1e293b]
    rounded-lg font-medium
    bg-white
    shadow-[0_4px_12px_rgba(0,0,0,0.05)]
    hover:bg-[#1e293b]
    hover:text-white
    hover:shadow-[0_10px_25px_rgba(0,0,0,0.15)]
    hover:-translate-y-0.5
    transition-all duration-300
  ">
            Get Free Consultation
          </button>

        </div>

        {/* 🔥 Arrow FIX */}
        <div className="mt-14 flex justify-center animate-bounce">
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#1e293b"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 9l6 6 6-6" />
            <path d="M6 15l6 6 6-6" />
          </svg>
        </div>


      </div>
    </section>
  );
}