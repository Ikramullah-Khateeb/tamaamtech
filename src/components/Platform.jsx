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
    <section className="bg-white px-4 sm:px-6 py-14 sm:py-20">

      <div className="max-w-7xl mx-auto text-center">

        <div className="inline-flex items-center gap-2 bg-[rgba(59,130,246,0.1)] text-[#3b82f6] px-3 sm:px-4 py-1.5 sm:py-2 rounded-4xl text-xs sm:text-[0.875rem] font-medium">
          <span>ALL IN ONE PLATFORM</span>
        </div>

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold sm:font-bold leading-tight tracking-[-1px] bg-linear-to-r from-(--primary-color) to-[#3b82f6] bg-clip-text text-transparent">
          Security. Compliance. Clarity.
        </h2>

        {/* Subtext */}
        <p className="text-sm sm:text-base md:text-lg lg:text-[22px] max-w-4xl mx-auto py-4 font-medium text-(--text-light)">
          Qutbee Technologies simplifies cybersecurity by combining essential
          security and compliance tools in one interface.
          </p>

        {/* Content */}
        <div>

          {/* Sub Heading */}
          <h3 className=" mt-10 sm:mt-12 md:mt-14 text-base sm:text-2xl md:text-3xl font-semibold leading-tight tracking-[-1px] text-(--primary-color) text-left">
            Everything You Need in One Place
          </h3>

          <div className="w-8 sm:w-10 h-0.5 bg-[#20283f] mb-6 sm:mb-8"></div>

          {/* Items */}
<div className="space-y-5 sm:space-y-6">
  {items.map((item, index) => {
    const Icon = item.icon;

    return (
      <div key={index} className="flex items-start gap-3 sm:gap-4">

        {/* Icon */}
        <div className="text-base sm:text-xl font-semibold text-(--primary-color) mt-1">
          <Icon />
        </div>

        {/* Text */}
        <p className="text-base sm:text-xl text-left font-medium text-(--text-light)">
          <strong className="text-(--primary-color) font-semibold " >
            {item.title}
          </strong>{" "}
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