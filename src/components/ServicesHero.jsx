"use client";

import { useEffect, useState } from "react";

function Counter({ target, suffix = "" }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1200;
    const increment = target / (duration / 16);

    const counter = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(counter);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(counter);
  }, [target]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function ServicesHero() {
  return (
    <section className="relative overflow-hidden px-4 sm:px-6 pt-24 sm:pt-36 md:pt-52 pb-14 sm:pb-20 md:pb-28 text-center bg-white">

      {/* Grid Background (same as AboutHero) */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px)",
          backgroundSize: "55px 55px",
        }}
      />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto text-center">

        {/* Badge */}

        <div className="inline-flex items-center gap-2 bg-[#01cb58]/10 text-[#052e1a] px-3 sm:px-4 py-1.5 sm:py-2 rounded-4xl text-xs sm:text-[0.875rem] font-medium">
          <span> Our Services</span>
        </div>

        <h1 className="mt-6 text-xl sm:text-3xl md:text-5xl font-semibold sm:font-bold leading-tight tracking-[-1px] heading-color">
          We Don’t{" "}
          <span className="relative inline-block">
            <span className="absolute inset-0 blur-xl bg-[#a7f3d0]/30 rounded-full"></span>
            <span className="inline-block pr-2 bg-linear-to-r from-(--primary-color) to-(--text-dark) bg-clip-text text-transparent italic">
              Simulate
            </span>
          </span>
          <br className="hidden sm:block" />
          Threats We Expose Them
        </h1>

        <p className="text-sm sm:text-base md:text-lg lg:text-[22px] max-w-4xl mx-auto py-4 font-medium text-(--text-light)">
          From design to deployment, marketing to maintenance - we deliver end-to-end digital solutions.
        </p>


        {/* Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mt-10 sm:mt-12 px-4 sm:px-0">

          <div className="bg-gray-100 rounded-2xl py-6 sm:py-8 px-4 sm:px-6 lg:px-8 text-center shadow-sm ">
            <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#01cb58] mb-1 sm:mb-2">
              <Counter target={10} suffix="+" />
            </h3>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg font-medium text-gray-600 leading-normal">
              Service Categories
            </p>
          </div>

          <div className="bg-gray-100 rounded-2xl py-6 sm:py-8 px-4 sm:px-6 lg:px-8 text-center shadow-sm ">
            <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#01cb58] mb-1 sm:mb-2">
              <Counter target={65} suffix="+" />
            </h3>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg font-medium text-gray-600 leading-normal">
              Sub-Services
            </p>
          </div>

          <div className="bg-gray-100 rounded-2xl py-6 sm:py-8 px-4 sm:px-6 lg:px-8 text-center shadow-sm ">
            <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#01cb58] mb-1 sm:mb-2">
              <Counter target={750} suffix="+" />
            </h3>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg font-medium text-gray-600 leading-normal">
              Projects Delivered
            </p>
          </div>

          <div className="bg-gray-100 rounded-2xl py-6 sm:py-8 px-4 sm:px-6 lg:px-8 text-center shadow-sm ">
            <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#01cb58] mb-1 sm:mb-2">
              <Counter target={15} suffix="+" />
            </h3>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg font-medium text-gray-600 leading-normal">
              Countries Served
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}