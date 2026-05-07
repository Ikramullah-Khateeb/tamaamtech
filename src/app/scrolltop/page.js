"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";

export default function ScrollProgress() {
  const [scrollPercent, setScrollPercent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const percent = Math.round((scrollTop / docHeight) * 100);

      setScrollPercent(percent);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const radius = 20;
  const circumference = 2 * Math.PI * radius;

  const offset =
    circumference -
    (scrollPercent / 100) * circumference;

  return (
    <button
      onClick={scrollToTop}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="
        fixed bottom-14 right-6 z-50
        w-13 h-13 rounded-full

        flex items-center justify-center

        bg-transparent

        transition-all duration-300

        hover:scale-110
      "
    >

      {/* Progress Ring */}
      <svg
        className="absolute inset-0 -rotate-90"
        width="52"
        height="52"
      >
        {/* Background Ring */}
        <circle
          cx="26"
          cy="26"
          r={radius}
          stroke="#b7f7d0"
          strokeWidth="3"
          fill="transparent"
        />

        {/* Active Ring */}
        <circle
          cx="26"
          cy="26"
          r={radius}
          stroke="#01cb58"
          strokeWidth="3"
          fill="transparent"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className="transition-all duration-200"
        />
      </svg>

      {/* Center Content */}
      <div className="relative flex items-center justify-center">

        {isHovered ? (
          <FaArrowUp className="text-[#01cb58] text-sm" />
        ) : (
          <span className="text-[#01cb58] text-[11px] font-bold">
            {scrollPercent}%
          </span>
        )}

      </div>
    </button>
  );
}