export default function Apart() {
  return (
    <section className="bg-[#f4f6fb] py-14 sm:py-16 md:py-20 px-4 sm:px-6 md:px-16">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h2 className="text-center text-[28px] sm:text-[32px] lg:text-[44.8px] font-bold mb-8 sm:mb-10 md:mb-12 pt-8 sm:pt-10 md:pt-12 tracking-[-1px] bg-linear-to-r from-(--primary-color) to-[#3b82f6] bg-clip-text text-transparent">
          What Sets Us Apart?
        </h2>

        {/* Cards */}
        <div className="space-y-4 sm:space-y-6">

          {/* Card 1 */}
          <div className="bg-[#eef1f7] rounded-2xl p-5 sm:p-6 md:p-8 shadow-(--shadow-light)">
            <p className="text-[1rem] sm:text-[1.1rem] md:text-[1.25rem] text-(--text-dark) leading-normal md:leading-normal text-left md:text-justify">
              What makes <strong>Qutbee</strong> stand out is our ability to blend creativity with technology. Our expert team delivers solutions tailored to each client’s unique goals, combining innovation, security, and functionality in every project.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#eef1f7] rounded-2xl p-5 sm:p-6 md:p-8 shadow-(--shadow-light)">
            <p className="text-[1rem] sm:text-[1.1rem] md:text-[1.25rem] text-(--text-dark) leading-normal md:leading-normal text-left md:text-justify">
              Headquartered in <strong>Abu Dhabi</strong> and serving clients worldwide, we bring global expertise with a deep understanding of the <strong>UAE market</strong>.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#eef1f7] rounded-2xl p-5 sm:p-6 md:p-8 shadow-(--shadow-light)">
            <p className="text-[1rem] sm:text-[1.1rem] md:text-[1.25rem] text-(--text-dark) leading-normal md:leading-normal text-left md:text-justify">
              At <strong>Qutbee Technologies</strong>, we don’t just build IT systems—we craft digital ecosystems that drive growth, strengthen trust, and make businesses future-ready. With every website we create and every solution we deliver, we are shaping the future of digital transformation in the UAE.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}