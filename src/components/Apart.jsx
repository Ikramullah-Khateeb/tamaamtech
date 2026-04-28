export default function Apart() {
  return (
    <section className="bg-[#f4f6fb] py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h2 className="text-center text-3xl md:text-4xl font-semibold text-[#2f4f88] mb-12">
          What Sets Us Apart?
        </h2>

        {/* Cards */}
        <div className="space-y-6">

          {/* Card 1 */}
          <div className="bg-[#eef1f7] rounded-2xl p-6 md:p-8 shadow-sm">
            <p className="text-gray-700 text-[15px] leading-relaxed">
              What makes <span className="font-semibold text-black">Qutbee</span> stand out is our ability to blend creativity with technology. Our expert team delivers solutions tailored to each client’s unique goals, combining innovation, security, and functionality in every project.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#eef1f7] rounded-2xl p-6 md:p-8 shadow-sm">
            <p className="text-gray-700 text-[15px] leading-relaxed">
              Headquartered in <span className="font-semibold text-black">Abu Dhabi</span> and serving clients worldwide, we bring global expertise with a deep understanding of the <span className="font-semibold text-black">UAE market</span>.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#eef1f7] rounded-2xl p-6 md:p-8 shadow-sm">
            <p className="text-gray-700 text-[15px] leading-relaxed">
              At <span className="font-semibold text-black">Qutbee Technologies</span>, we don’t just build IT systems—we craft digital ecosystems that drive growth, strengthen trust, and make businesses future-ready. With every website we create and every solution we deliver, we are shaping the future of digital transformation in the UAE.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}