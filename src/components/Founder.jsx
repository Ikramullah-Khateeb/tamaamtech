export default function Founder() {
  return (
    <section className="bg-[#f5f7fb] py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-[#2f4f88] mb-12">
          Message From Our Founder
        </h2>

        {/* Profile + Line */}
        <div className="relative flex justify-center items-center mb-10">
          
          {/* Line */}
          <div className="absolute w-full h-0.5 bg-gray-300"></div>

          {/* Image */}
          <div className="relative z-10 bg-[#f5f7fb] px-4">
            <img
              src="/founder.jpg" // replace with real image
              alt="Founder"
              className="w-24 h-24 rounded-full object-cover shadow-md"
            />
          </div>
        </div>

        {/* Content */}
        <div className="text-left md:text-left max-w-7xl mx-auto">
          
          <h3 className="text-lg font-semibold text-[#2f4f88] mb-4">
            From Vision to Reality
          </h3>

          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            I founded <span className="font-semibold">Qutbee Technologies</span> with a vision to help businesses thrive through digital platforms that build trust and drive growth, from the UAE to the World. My journey includes contributing to the “Digital Dubai initiatives”, making the city paperless, and later adding to my expertise by leading key government projects in Abu Dhabi.
          </p>

          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            At Qutbee, we go beyond websites — we design Digital journeys powered by <span className="font-semibold">SEO, Cloud, Cybersecurity, ERP, CRM, and AI Automation</span>, keeping our clients ahead of the curve.
          </p>

          {/* Bottom Row */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

            {/* Name + Signature */}
            <div>
              <h4 className="text-lg font-semibold text-[#1f2e4a]">
                Faisal Qutbee
              </h4>
              <p className="text-gray-500 text-sm">
                Founder & CEO, Qutbee Technologies
              </p>

              <img
                src="/signature.png" // optional signature image
                alt="signature"
                className="mt-3 h-10"
              />
            </div>

            {/* Button */}
            <button className="bg-[#1f2e4a] text-white px-6 py-3 rounded-lg shadow-md hover:bg-[#162238] transition">
              Explore Founder’s Portfolio
            </button>

          </div>
        </div>
      </div>
    </section>
  );
}