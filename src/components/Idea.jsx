'use client';

import { FiSearch, FiTarget, FiEdit3, FiCode } from "react-icons/fi";
import { HiOutlineRocketLaunch } from "react-icons/hi2";

const steps = [
  {
    id: "01",
    title: "Discover",
    desc: "Research your market, audience, and goals to define the project scope.",
    icon: FiSearch,
  },
  {
    id: "02",
    title: "Strategy",
    desc: "Map the user journey, information architecture, and technical approach.",
    icon: FiTarget,
  },
  {
    id: "03",
    title: "Design",
    desc: "Create wireframes and high-fidelity designs that align with your brand.",
    icon: FiEdit3,
  },
  {
    id: "04",
    title: "Development",
    desc: "Build with clean code, responsive layouts, and performance optimization.",
    icon: FiCode,
  },
  {
    id: "05",
    title: "Launch & Optimize",
    desc: "Deploy, monitor analytics, and iterate for continuous improvement.",
    icon: HiOutlineRocketLaunch,
  },
];

export default function Idea() {
  return (
    <section className="bg-[#eef1f7] px-4 sm:px-6 py-14 sm:py-20">
      <div className="max-w-7xl mx-auto text-center">

        {/* Header */}
        <div className="max-w-5xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold sm:font-bold leading-tight tracking-tight heading-color">
            From Idea to Launch
          </h2>

          <p className="text-sm sm:text-base md:text-lg lg:text-[22px] max-w-4xl mx-auto py-4 font-medium text-slate-500">
            A proven five-step methodology that delivers results on time, every time.
          </p>

          <p className="text-sm sm:text-base md:text-lg font-medium text-(--text-light)">
            At Tamaam, a leading web development company in Dubai, we provide full-cycle web design and development from concept to launch and beyond. Our in-house team creates AI-powered, modern digital solutions tailored to your needs. We handle every stage, from planning and design
            to development, ensuring smooth execution and high-quality results for your business.
          </p>
        </div>

        {/* Steps */}
        <div className="relative overflow-visible">

          {/* LINE (only desktop) */}
          <div className="hidden lg:block absolute top-10 left-0 right-0 h-0.5
            bg-linear-to-r from-[#4ade80] to-[#3b7553] z-0" />

          {/* GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 md:gap-6">
            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.id}
                  className="relative z-10 flex flex-col items-center text-center"
                >
                  {/* ICON + HOVER EFFECT */}
                  <div className="relative group">

                    {/* Mask (hides line on hover) */}
                    <div className="
                      absolute inset-0 rounded-full bg-[#eef1f7]
                      scale-0 group-hover:scale-[1.4]
                      transition-all duration-300
                      z-0 pointer-events-none
                    " />

                    {/* Icon */}
                    <div
                      className="
                        relative z-10
                        w-20 h-20 rounded-full bg-white border border-gray-200
                        flex items-center justify-center
                        text-gray-700 [&>svg]:w-7 [&>svg]:h-7

                        transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]
                        hover:bg-[#01cb58]/10 hover:border-[#01cb58]
                        hover:text-[#01cb58]
                        hover:-translate-y-2 hover:scale-[1.08]
                        hover:shadow-[0_12px_30px_rgba(1,203,88,0.25)]
                      "
                    >
                      <Icon />
                    </div>

                    {/* Step Number */}
                    <span className="absolute -top-2 -right-2 z-20 text-xs font-bold text-white bg-green-500 rounded-full w-7 h-7 flex items-center justify-center">
                      {step.id}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="mt-5 text-sm sm:text-base md:text-lg lg:text-xl font-semibold heading-color">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-5 text-sm sm:text-base md:text-lg font-normal text-gray-500">
                    {step.desc}
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