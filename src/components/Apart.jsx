// Apart.jsx
export default function Apart() {
  return (
    <section className="bg-[#eef1f7] px-4 sm:px-6 py-14 sm:py-20">
      <div className="max-w-7xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold sm:font-bold leading-tight tracking-[-1px] bg-linear-to-r from-(--primary-color) to-[#3b82f6] bg-clip-text text-transparent">
          What Sets Us Apart?
        </h2>

        {/* Cards */}
        <div className="space-y-4 sm:space-y-6 mt-10 sm:mt-14">

          {/* Card 1 */}
          <div className="bg-[#ffffff] rounded-2xl p-5 sm:p-6 md:p-8 shadow-(--shadow-large)">
            <p className="text-sm sm:text-base md:text-lg lg:text-xl font-medium text-(--text-dark) text-left">
              What makes <strong>Qutbee</strong> stand out is our ability to blend creativity with technology. Our expert team delivers solutions tailored to each client's unique goals, combining innovation, security, and functionality in every project.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#ffffff] rounded-2xl p-5 sm:p-6 md:p-8 shadow-(--shadow-large)">
            <p className="text-sm sm:text-base md:text-lg lg:text-xl font-medium text-(--text-dark) text-left">
              Headquartered in <strong>Abu Dhabi</strong> and serving clients worldwide, we bring global expertise with a deep understanding of the <strong>UAE market</strong>.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#ffffff] rounded-2xl p-5 sm:p-6 md:p-8 shadow-(--shadow-large)">
            <p className="text-sm sm:text-base md:text-lg lg:text-xl font-medium text-(--text-dark) text-left">
              At <strong>Qutbee Technologies</strong>, we don't just build IT systems—we craft digital ecosystems that drive growth, strengthen trust, and make businesses future-ready. With every website we create and every solution we deliver, we are shaping the future of digital transformation in the UAE.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}