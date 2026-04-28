import Link from "next/link";
import Image from "next/image";

export default function WhoWeAre() {
  return (
    <section className="bg-[#f5f7fb] py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">

        <Link
          href="/AboutUs"
          className="inline-block bg-[#1f2e4a] text-white px-6 py-3 rounded-lg shadow-md hover:bg-[#162238] transition duration-300"
        >
          About Us page 
        </Link>

        <Link
          href="/ContactUs"
          className="inline-block bg-[#1f2e4a] ml-5 text-white px-6 py-3 rounded-lg shadow-md hover:bg-[#162238] transition duration-300"
        >
          Contact Us 
        </Link>

        <h2 className="text-[44px] font-semibold text-[#2f4f88] text-center mb-12">
          Who We Are
        </h2>

        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT SIDE */}
          <div>
            <p className="text-gray-700 leading-relaxed text-[15px] mb-6">
              <span className="font-semibold text-black">
                Qutbee Technologies
              </span>{" "}
              is a UAE-based, ISO 27001-certified technology and AI consulting firm
              delivering secure, scalable, and intelligent solutions{" "}
              <span className="font-semibold">
                from UAE to the World.
              </span>{" "}
              We serve a wide range of industries including FinTech, PropTech,
              EdTech, HealthTech, RetailTech, AgriTech, and GovTech.
            </p>

            <p className="text-gray-700 leading-relaxed text-[15px] mb-8">
              Our services include{" "}
              <span className="font-semibold">AI development</span>,{" "}
              <span className="font-semibold">end-to-end Cybersecurity</span>{" "}
              with penetration testing,{" "}
              <span className="font-semibold">threat detection</span>, and incident
              response, cloud solutions, enterprise software, and digital
              transformation consulting.
            </p>

            {/* BUTTON */}
            <button className="bg-[#1f2e4a] text-white px-6 py-3 rounded-lg shadow-md hover:bg-[#162238] transition duration-300">
              About Qutbee Tech
            </button>
          </div>

          {/* RIGHT SIDE IMAGE / SVG */}
          <div className="flex justify-center md:justify-end">
            <Image
              src="/logo.png" // or replace with SVG
              alt="Qutbee Logo"
              width={380}
              height={380}
              className="object-contain drop-shadow-lg"
            />
          </div>

        </div>
      </div>
    </section>
  );
}