"use client";

import { FaVideo, FaShieldAlt, FaUserSecret, FaTasks } from "react-icons/fa";

export default function Platform() {
  const items = [
    {
      icon: FaVideo,
      title: "Scoping Call.",
      text: "We'll start by doing a scoping call to learn about your infrastructure, security concerns, & compliance needs.",
    },
    {
      icon: FaShieldAlt,
      title: "Security Program.",
      text: "Then we'll build you out a custom security program that is stage appropriate (the RIGHT amount of security for your size).",
    },
    {
      icon: FaUserSecret,
      title: "Penetration Test.",
      text: "Our team uses advanced techniques to identify exploitable weaknesses and strengthen your security posture.",
    },
    {
      icon: FaTasks,
      title: "Action Plan.",
      text: "We deliver a clear, prioritized action plan based on your scoping call and assessment results to strengthen your security and compliance posture.",
    },
  ];

  return (
    <section className="bg-white py-12 sm:py-16 md:py-15 px-4 sm:px-6">
      
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16">
          
          <span className="inline-block px-3 py-1.5 text-[11px] sm:text-xs md:text-[12px] font-semibold tracking-[1px] text-[#20283f] bg-black/10 rounded-full mb-3 sm:mb-4">
            ALL IN ONE PLATFORM
          </span>

          {/* 👇 DESKTOP SAME */}
          <h2 className="text-2xl sm:text-3xl md:text-[32px] font-bold mb-3 sm:mb-4 md:mb-4 text-[#20283f]">
            Security. Compliance. Clarity.
          </h2>

          <p className="text-sm sm:text-base md:text-[20px] text-[#64748b] leading-relaxed">
            Qutbee Technologies simplifies cybersecurity by combining essential
            security and compliance tools in one interface.
          </p>
        </div>

        {/* Content */}
        <div>
          
          {/* 👇 DESKTOP SAME */}
          <h3 className="text-xl sm:text-2xl md:text-[32px] font-bold mb-3 sm:mb-4 md:mb-4 text-[#20283f]">
            Everything You Need in One Place
          </h3>

          <div className="w-7.5 sm:w-8.75 md:w-10 h-0.5 bg-[#20283f] mb-6 sm:mb-8 md:mb-8"></div>

          {/* Cards */}
          <div className="space-y-6 sm:space-y-7 md:space-y-6">
            {items.map((item, index) => {
              const Icon = item.icon;

              return (
                <div key={index} className="flex items-start gap-4 sm:gap-5 md:gap-7">
                  
                  {/* Icon - desktop SAME */}
                  <div className="text-[#20283f] text-xl sm:text-2xl md:text-[30px] mt-1 shrink-0">
                    <Icon />
                  </div>

                  {/* Text - desktop SAME */}
                  <p className="text-base sm:text-lg md:text-[26px] text-[#64748b] leading-relaxed">
                    <span className="font-bold text-[#20283f]">
                      {item.title}{" "}
                    </span>
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}