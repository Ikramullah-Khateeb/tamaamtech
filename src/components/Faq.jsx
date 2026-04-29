export default function Faq() {
  return (
    <section className="bg-[#f5f7fb] py-14 sm:py-16 md:py-20 px-4 sm:px-6 md:px-16">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-8 sm:mb-10 gap-4">

          <h2 className="text-[28px] sm:text-[32px] lg:text-[44.8px] font-bold text-center md:text-left tracking-[-1px] bg-linear-to-r from-(--primary-color) to-[#3b82f6] bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>

          <button className="inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-(--primary-color) text-(--white) rounded-lg shadow-(--shadow-medium) font-semibold text-sm sm:text-base transition-all duration-300 relative overflow-hidden hover:bg-[#1e40af] hover:shadow-(--shadow-large) hover:-translate-y-0.5">
            View FAQs
          </button>

        </div>

        {/* FAQ Card */}
        <div className="bg-(--white) rounded-2xl shadow-(--shadow-medium) p-5 sm:p-6 md:p-10 space-y-4">

            <details className="border-b border-(--border-light) pb-4 group">
            <summary className="cursor-pointer text-base text-[1rem] sm:text-[1.1rem] md:text-[1.25rem] font-semibold text-(--primary-color) flex justify-between items-center gap-4">
              What Services Does Qutbee Technologies Offer In The UAE?
              <span className="group-open:rotate-180 transition-transform duration-300">↓</span>
            </summary>
            <p className="mt-3 text-[0.8rem] sm:text-[1rem] md:text-[1.1rem] text-(--text-dark) leading-[1.6] md:leading-normal text-left md:text-justify">
              We help UAE businesses build a strong digital presence...
            </p>
          </details>

          <details className="border-b border-(--border-light) pb-4 group">
            <summary className="cursor-pointer text-base text-[1rem] sm:text-[1.1rem] md:text-[1.25rem] font-semibold text-(--primary-color) flex justify-between items-center gap-4">
              How Does Qutbee Keep My Company Secure?
              <span className="group-open:rotate-180 transition-transform duration-300">↓</span>
            </summary>
            <p className="mt-3 text-[0.8rem] sm:text-[1rem] md:text-[1.1rem] text-(--text-dark) leading-[1.6] md:leading-normal text-left md:text-justify">
              We implement advanced cybersecurity solutions...
            </p>
          </details>

          <details className="border-b border-(--border-light) pb-4 group">
            <summary className="cursor-pointer text-base text-[1rem] sm:text-[1.1rem] md:text-[1.25rem] font-semibold text-(--primary-color) flex justify-between items-center gap-4">
              Do You Provide Digital Marketing And SEO In The UAE?
              <span className="group-open:rotate-180 transition-transform duration-300">↓</span>
            </summary>
            <p className="mt-3 text-[0.8rem] sm:text-[1rem] md:text-[1.1rem] text-(--text-dark) leading-[1.6] md:leading-normal text-left md:text-justify">
              Yes, we provide complete SEO services...
            </p>
          </details>

          <details className="border-b border-(--border-light) pb-4 group">
            <summary className="cursor-pointer text-base text-[1rem] sm:text-[1.1rem] md:text-[1.25rem] font-semibold text-(--primary-color) flex justify-between items-center gap-4">
              Which industries in the UAE do you serve?
              <span className="group-open:rotate-180 transition-transform duration-300">↓</span>
            </summary>
            <p className="mt-3 text-[0.8rem] sm:text-[1rem] md:text-[1.1rem] text-(--text-dark) leading-[1.6] md:leading-normal text-left md:text-justify">
              We support Real Estate, Healthcare, Fintech, Retail, Education, and Fast Moving Startups. If your work needs a clean site, a high converting app, or secure cloud, we can Help.
            </p>
          </details>

        </div>
      </div>
    </section>
  )
}