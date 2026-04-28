export default function FAQ() {
  return (
    <section className="bg-[#f5f7fb] py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:justify-between mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#2f4f88]">
            Frequently Asked Questions
          </h2>

          <button className="mt-4 md:mt-0 bg-[#1f2e4a] text-white px-6 py-3 rounded-lg">
            View FAQs
          </button>
        </div>

        {/* FAQ Card */}
        <div className="bg-white rounded-2xl shadow-md p-6 md:p-10 space-y-4">

          <details className="border-b pb-4 group">
            <summary className="cursor-pointer text-lg font-medium text-[#1f2e4a] flex justify-between">
              What Services Does Qutbee Technologies Offer In The UAE?
              <span className="group-open:rotate-180 transition">↓</span>
            </summary>
            <p className="mt-3 text-gray-600 text-sm">
              We help UAE businesses build a strong digital presence...
            </p>
          </details>

          <details className="border-b pb-4 group">
            <summary className="cursor-pointer text-lg font-medium text-[#1f2e4a] flex justify-between">
              How Does Qutbee Keep My Company Secure?
              <span className="group-open:rotate-180 transition">↓</span>
            </summary>
            <p className="mt-3 text-gray-600 text-sm">
              We implement advanced cybersecurity solutions...
            </p>
          </details>

          <details className="border-b pb-4 group">
            <summary className="cursor-pointer text-lg font-medium text-[#1f2e4a] flex justify-between">
              Do You Provide Digital Marketing And SEO In The UAE?
              <span className="group-open:rotate-180 transition">↓</span>
            </summary>
            <p className="mt-3 text-gray-600 text-sm">
              Yes, we provide complete SEO services...
            </p>
          </details>

          <details className="border-b pb-4 group">
            <summary className="cursor-pointer text-lg font-medium text-[#1f2e4a] flex justify-between">
              Which industries in the UAE do you serve?
              <span className="group-open:rotate-180 transition">↓</span>
            </summary>
            <p className="mt-3 text-gray-600 text-sm">
              We support Real Estate, Healthcare, Fintech, Retail, Education, and Fast Moving Startups. If your work needs a clean site, a high converting app, or secure cloud, we can Help.
            </p>
          </details>

        </div>
      </div>
    </section>
  );
}