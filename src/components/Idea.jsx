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
    icon: HiOutlineRocketLaunch, // ✅ FIXED
  },
];

export default function Idea() {
  return (
    <section className="bg-[#eef1f7]  px-4 sm:px-6 py-14 sm:py-20 text-slate-800">
      <div className="max-w-7xl mx-auto text-center">

        {/* Header */}
        <div className="max-w-5xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold sm:font-bold leading-tight tracking-tight bg-linear-to-r from-[#20283f] to-[#01cb58] bg-clip-text text-transparent">
            From idea to launch
          </h2>

          <p className="mt-4 text-sm sm:text-base md:text-lg font-medium text-(--text-light)">
            A proven five-step methodology that delivers results on time, every time.
          </p>

          <p className="mt-5 text-sm sm:text-base md:text-lg font-medium text-(--text-light)">
            At Zentroa, a premier web development company in Dubai, we offer full-cycle web design and
            development, delivering end-to-end web development solutions from concept to launch and beyond.
            Our in-house team of designers and developers crafts AI-powered, cutting-edge digital solutions
            tailored to your unique needs. We manage every phase—from initial analysis, planning, and design
            through to development—for a seamless execution. With our rigorous end-to-end methodology, each
            stage is delivered with precision and efficiency, ensuring exceptional outcomes for your business.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          <div className="hidden md:block absolute top-10 left-0 right-0 h-px bg-slate-400" />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 md:gap-6">
            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <div key={step.id} className="relative flex flex-col items-center text-center">

                  <div className="relative">
                    <div
                      className="
                        w-20 h-20 rounded-full bg-white border border-(--border-light)
                        flex items-center justify-center
                        text-(--primary-color) [&>svg]:w-7 [&>svg]:h-7

                        transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]
                        hover:bg-[#01cb58]/10 hover:border-[#01cb58]
                        hover:text-[#01cb58]
                        hover:-translate-y-2 hover:scale-[1.08]
                        hover:shadow-[0_12px_30px_rgba(1,203,88,0.25)]
                      "
                    >
                      <Icon />
                    </div>

                    <span className="absolute -top-2 -right-2 text-xs font-bold text-white bg-[#20283f] rounded-full w-7 h-7 flex items-center justify-center">
                      {step.id}
                    </span>
                  </div>

                  <h3 className="mt-5 text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-(--primary-color)">
                    {step.title}
                  </h3>

                  <p className="mt-5 text-sm sm:text-base md:text-lg font-normal text-(--text-light)">
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