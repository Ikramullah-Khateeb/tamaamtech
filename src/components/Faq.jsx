export default function Faq() {
  return (
    <section className="bg-[#f5f7fb] px-4 sm:px-6 py-14 sm:py-20 text-slate-800">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold sm:font-bold leading-tight tracking-tight bg-linear-to-r from-[#20283f] to-[#01cb58] bg-clip-text text-transparent">
            Fequently Asked Questions
          </h2>
        </div>

        {/* FAQ List */}
        <div className="space-y-0">

          <details className="group border-b border-(--border-light) py-5">
            <summary className="cursor-pointer flex items-center justify-between gap-4 text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-(--primary-color)">
              What Services Does Qutbee Technologies Offer In The UAE?
              <span className="transition-transform duration-300 group-open:rotate-180">
                ↓
              </span>
            </summary>
            <p className="pt-3 text-sm sm:text-lg font-medium text-(--text-light)">
              We help UAE businesses build a strong digital presence...
            </p>
          </details>

          <details className="group border-b border-(--border-light) py-5">
            <summary className="cursor-pointer flex items-center justify-between gap-4 text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-(--primary-color)">
              How Does Qutbee Keep My Company Secure?
              <span className="transition-transform duration-300 group-open:rotate-180">
                ↓
              </span>
            </summary>
            <p className="pt-3 text-sm sm:text-lg font-medium text-(--text-light)">
              We implement advanced cybersecurity solutions...
            </p>
          </details>

          <details className="group border-b border-(--border-light) py-5">
            <summary className="cursor-pointer flex items-center justify-between gap-4 text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-(--primary-color)">
              Do You Provide Digital Marketing And SEO In The UAE?
              <span className="transition-transform duration-300 group-open:rotate-180">
                ↓
              </span>
            </summary>
            <p className="pt-3 text-sm sm:text-lg font-medium text-(--text-light)">
              Yes, we provide complete SEO services...
            </p>
          </details>

          <details className="group border-b border-(--border-light) py-5">
            <summary className="cursor-pointer flex items-center justify-between gap-4 text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-(--primary-color)">
              Which industries in the UAE do you serve?
              <span className="transition-transform duration-300 group-open:rotate-180">
                ↓
              </span>
            </summary>
            <p className="pt-3 text-sm sm:text-lg font-medium text-(--text-light)">
              We support Real Estate, Healthcare, Fintech, Retail, Education, and Fast Moving Startups. If your work needs a clean site, a high converting app, or secure cloud, we can Help.
            </p>

          </details>

          <details className="group border-b border-(--border-light) py-5">
            <summary className="cursor-pointer flex items-center justify-between gap-4 text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-(--primary-color)">
              Which industries in the UAE do you serve?
              <span className="transition-transform duration-300 group-open:rotate-180">
                ↓
              </span>
            </summary>
            <p className="pt-3 text-sm sm:text-lg font-medium text-(--text-light)">
              We support Real Estate, Healthcare, Fintech, Retail, Education, and Fast Moving Startups. If your work needs a clean site, a high converting app, or secure cloud, we can Help.
            </p>
          </details>

        </div>

        {/* Bottom Button */}
        <div className="mt-10 sm:mt-14 flex justify-center">
        <button
          className="
            px-5 sm:px-7 py-1.5 sm:py-3 rounded-xl
            inline-flex items-center gap-2
            text-sm sm:text-base font-bold text-white
            bg-linear-to-br from-[#01cb58] to-[#00a346]
            shadow-[0_4px_24px_rgba(1,203,88,0.35),inset_0_1px_0_rgba(255,255,255,0.25)]
            transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]

            hover:from-[#00e66a] hover:to-[#00b84d]
            hover:shadow-[0_8px_40px_rgba(1,203,88,0.6),inset_0_1px_0_rgba(255,255,255,0.3)]
            hover:-translate-y-1 hover:scale-[1.03]
            active:scale-[0.98]
          "
        >
          View FAQ
        </button>
        </div>

      </div>
    </section>
  );
}