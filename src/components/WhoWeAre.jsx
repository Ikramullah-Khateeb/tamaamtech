import Image from "next/image";

export default function WhoWeAre() {
  return (
    <section className="bg-[#f5f7fb] py-14 sm:py-16 md:py-20 px-4 sm:px-6 md:px-16">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-[28px] sm:text-[32px] lg:text-[44.8px] font-bold text-center mb-8 sm:mb-10 md:mb-12 pt-8 sm:pt-10 md:pt-12 tracking-[-1px] bg-linear-to-br from-(--primary-color) to-[#3b82f6] bg-clip-text text-transparent">
          Who We Are
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 items-center">

          {/* LEFT SIDE */}
          <div>
            <p className="text-[1rem] sm:text-[1.1rem] lg:text-[1.25rem] text-(--text-dark) leading-[1.6] md:leading-normal text-left md:text-justify mb-4 sm:mb-5">
              <strong> Qutbee Technologies </strong>
              is a UAE-based, ISO 27001-certified technology and AI consulting firm
              delivering secure, scalable, and intelligent solutions{" "}
              <strong>from UAE to the World.</strong>
              We serve a wide range of industries including FinTech, PropTech,
              EdTech, HealthTech, RetailTech, AgriTech, and GovTech.
              <strong>Our services include</strong>
              <strong>AI development</strong>
              <strong>end-to-end Cybersecurity</strong>
              with penetration testing,
              <strong>threat detection</strong>, and incident
              response, cloud solutions, enterprise software, and digital
              transformation consulting.
            </p>

            {/* BUTTON */}
            <button className="inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-(--primary-color) text-(--white) rounded-lg shadow-(--shadow-medium) font-semibold text-sm sm:text-base transition-all duration-300 relative overflow-hidden hover:bg-[#1e40af] hover:shadow-(--shadow-large) hover:-translate-y-0.5">
              About Qutbee Tech
            </button>
          </div>

          {/* RIGHT SIDE IMAGE / SVG */}
          <div className="flex justify-center md:justify-end mt-8 md:mt-0">
            <Image
              src="/logo.png"
              alt="Qutbee Logo"
              width={380}
              height={380}
              className="object-contain drop-shadow-lg w-55 sm:w-70 md:w-85 lg:w-95 h-auto"
            />
          </div>

        </div>
      </div>
    </section>
  );
}