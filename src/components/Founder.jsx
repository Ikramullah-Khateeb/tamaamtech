export default function Founder() {
  return (
    <section className="bg-[#f5f7fb] py-14 sm:py-16 md:py-20 px-4 sm:px-6 md:px-16">
      <div className="max-w-7xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-[28px] sm:text-[32px] lg:text-[44.8px] font-bold text-center mb-8 sm:mb-10 md:mb-12 pt-8 sm:pt-10 md:pt-12 tracking-[-1px] bg-linear-to-r from-(--primary-color) to-[#3b82f6] bg-clip-text text-transparent">
          Message From Our Founder
        </h2>

        {/* Profile + Line */}
        <div className="relative flex justify-center items-center mb-8 sm:mb-10">
          
          {/* Line */}
          <div className="absolute w-full h-0.5 bg-gray-300"></div>

          {/* Image */}
          <div className="relative z-10 bg-[#f5f7fb] px-3 sm:px-4">
            <img
              src="/founder.jpg"
              alt="Founder"
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover shadow-md"
            />
          </div>
        </div>

        {/* Content */}
        <div className="text-left max-w-7xl mx-auto">
          
          <h3 className="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[32px] font-bold mb-3 sm:mb-4 inline-block bg-linear-to-r from-(--primary-color) to-[#3b82f6] bg-clip-text text-transparent transform transition-all duration-700 opacity-100 translate-x-0 hover:-translate-y-1">

            From Vision to Reality
          </h3>

          <p className="text-[1rem] sm:text-[1.1rem] lg:text-[1.25rem] text-(--text-dark) leading-[1.6] md:leading-normal text-left md:text-justify mb-4">
            I founded <strong>Qutbee Technologies</strong>with a vision to help businesses thrive through digital platforms that build trust and drive growth, from the UAE to the World. My journey includes contributing to the “Digital Dubai initiatives”, making the city paperless, and later adding to my expertise by leading key government projects in Abu Dhabi.These experiences shaped my belief that the <strong> UAE </strong>is already one step ahead in the global digital era.
          </p>

          <p className="text-[1rem] sm:text-[1.1rem] md:text-[1.25rem] text-(--text-dark) leading-[1.6] md:leading-normal text-left md:text-justify mb-5 sm:mb-6">
            At Qutbee, we go beyond websites — we design Digital journeys powered by <strong>SEO, Cloud, Cybersecurity, ERP, CRM, and AI Automation </strong>keeping our clients ahead of the curve.
          </p>

          {/* Bottom Row */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

            {/* Name + Signature */}
            <div>
              <h4 className="text-base sm:text-[24px] md:text-[28px] font-bold text-(--primary-color)">
                Faisal Qutbee
              </h4>
              <p className="text-sm text-(--text-light)">
                Founder & CEO, Qutbee Technologies
              </p>

              <img
                src="/signature.png"
                alt="signature"
                className="mt-3 h-8 sm:h-10"
              />
            </div>

            {/* Button */}
            <button className="inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-(--primary-color) text-(--white) rounded-lg shadow-(--shadow-medium) font-semibold text-sm sm:text-base transition-all duration-300 relative overflow-hidden hover:bg-[#1e40af] hover:shadow-(--shadow-large) hover:-translate-y-0.5">
              Explore Founder’s Portfolio
            </button>

          </div>
        </div>
      </div>
    </section>
  );
}