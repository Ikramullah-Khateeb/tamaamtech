export default function CtaServices() {
  return (
    <section className="bg-gray-50 py-24 px-6 text-center">
      <div className="max-w-7xl mx-auto">
        
        {/* Pill */}
        <span className="inline-block px-4 py-1 text-xs font-semibold tracking-widest text-gray-600 uppercase bg-gray-200 rounded-full">
          Go Beyond Compliance
        </span>

        {/* Heading */}
        <h2 className="mt-6 text-4xl md:text-5xl font-semibold text-gray-900 leading-tight">
          Real <span className="text-blue-600">Security</span> Not Just Compliance.
        </h2>

        {/* Subtext */}
        <p className="mt-6 text-lg text-gray-600">
          Stay ahead of evolving threats with Qutbee’s scalable, real-world security.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          
          {/* Primary Button */}
          <button className="px-6 py-3 rounded-lg text-white bg-gradient-to-r from-blue-600 to-blue-500 hover:opacity-90 transition flex items-center gap-2">
            Explore Services
            <span>↗</span>
          </button>

          {/* Secondary Button */}
          <button className="px-6 py-3 rounded-lg border border-gray-800 text-gray-900 hover:bg-gray-100 transition">
            Get Free Consultation
          </button>

        </div>
      </div>
    </section>
  );
}