"use client";

import { FiChevronDown } from "react-icons/fi";


export default function Faq() {
  return (
    <section className="bg-[#f5f7fb] px-4 sm:px-6 py-14 sm:py-20 text-slate-800">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold sm:font-bold leading-tight tracking-tight heading-color">
            Fequently Asked Questions
          </h2>
        </div>

        {/* FAQ List */}
        <div className="space-y-0">

          <details className="group border-b border-(--border-light) py-5">
            <summary className="cursor-pointer flex items-center justify-between gap-4 text-sm sm:text-base md:text-lg lg:text-xl font-semibold heading-color">
              What Services Does Qutbee Technologies Offer In The UAE?
              <span className="transition-transform duration-300 group-open:rotate-180">
                <FiChevronDown size={20} className="text-[#0f2f24]" />
              </span>
            </summary>
            <p className="pt-3 text-sm sm:text-lg font-medium text-(--text-light)">
              We help UAE businesses build a strong digital presence...
            </p>
          </details>

          <details className="group border-b border-(--border-light) py-5">
            <summary className="cursor-pointer flex items-center justify-between gap-4 text-sm sm:text-base md:text-lg lg:text-xl font-semibold heading-color">
              How Does Qutbee Keep My Company Secure?
              <span className="transition-transform duration-300 group-open:rotate-180">
                <FiChevronDown size={20} className="text-[#0f2f24]" />
              </span>
            </summary>
            <p className="pt-3 text-sm sm:text-lg font-medium text-(--text-light)">
              We implement advanced cybersecurity solutions...
            </p>
          </details>

          <details className="group border-b border-(--border-light) py-5">
            <summary className="cursor-pointer flex items-center justify-between gap-4 text-sm sm:text-base md:text-lg lg:text-xl font-semibold heading-color">
              Do You Provide Digital Marketing And SEO In The UAE?
              <span className="transition-transform duration-300 group-open:rotate-180">
                <FiChevronDown size={20} className="text-[#0f2f24]" />
              </span>
            </summary>
            <p className="pt-3 text-sm sm:text-lg font-medium text-(--text-light)">
              Yes, we provide complete SEO services...
            </p>
          </details>

          <details className="group border-b border-(--border-light) py-5">
            <summary className="cursor-pointer flex items-center justify-between gap-4 text-sm sm:text-base md:text-lg lg:text-xl font-semibold heading-color">
              Which industries in the UAE do you serve?
              <span className="transition-transform duration-300 group-open:rotate-180">
                <FiChevronDown size={20} className="text-[#0f2f24]" />
              </span>
            </summary>
            <p className="pt-3 text-sm sm:text-lg font-medium text-(--text-light)">
              We support Real Estate, Healthcare, Fintech, Retail, Education, and Fast Moving Startups. If your work needs a clean site, a high converting app, or secure cloud, we can Help.
            </p>

          </details>

        </div>

      </div>
    </section>
  );
}