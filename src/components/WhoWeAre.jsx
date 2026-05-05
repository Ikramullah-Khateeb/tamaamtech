import Image from "next/image";

export default function WhoWeAre() {
  return (
    <section className="relative bg-white px-4 sm:px-6 py-14 sm:py-20 text-slate-800">

      {/* ── Green top accent line ── */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#01cb58] to-transparent opacity-70" />

      {/* ── Subtle green radial glow ── */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[radial-gradient(ellipse_at_center_top,rgba(1,203,88,0.06)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">

        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold sm:font-bold leading-tight tracking-tight bg-linear-to-r from-[#20283f] to-[#01cb58] bg-clip-text text-transparent">
            Who We Are
          </h2>
        </div>

        <div className="flex flex-col [@media(min-width:1217px)]:grid [@media(min-width:1217px)]:grid-cols-2 gap-8 sm:gap-10 items-center">

          {/* LEFT SIDE */}
          <div className="order-2 [@media(min-width:1217px)]:order-1">
            <p className="text-[1rem] sm:text-[1.1rem] lg:text-[1.25rem] text-(--text-dark) leading-[1.7] text-left md:text-justify mb-6">
              <strong>Tamaam Technologies</strong> is a UAE-based, ISO 27001-certified technology and AI consulting firm committed to delivering secure, scalable, and intelligent digital solutions from the UAE to the world.

              We partner with organizations across industries including FinTech, PropTech, EdTech, HealthTech, RetailTech, AgriTech, and GovTech, helping them innovate and grow in an increasingly digital landscape.

              Our expertise spans <strong>AI development</strong>, <strong>end-to-end cybersecurity</strong>—including penetration testing, threat detection, and incident response—along with cloud solutions, enterprise software, and digital transformation consulting.
            </p>

            <button
              className="
                px-5 sm:px-7 py-1.5 sm:py-3 rounded-xl
                inline-flex items-center gap-2
                text-sm sm:text-base font-bold text-white
                bg-gradient-to-br from-[#01cb58] to-[#00a346]
                shadow-[0_4px_24px_rgba(1,203,88,0.35),inset_0_1px_0_rgba(255,255,255,0.25)]
                transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]

                hover:from-[#00e66a] hover:to-[#00b84d]
                hover:shadow-[0_8px_40px_rgba(1,203,88,0.6),inset_0_1px_0_rgba(255,255,255,0.3)]
                hover:-translate-y-1 hover:scale-[1.03]
                active:scale-[0.98]
              "
            >
              About Tamaam Tech
            </button>
          </div>

          {/* RIGHT SIDE */}
          <div className="order-1 [@media(min-width:1217px)]:order-2 flex justify-center [@media(min-width:1217px)]:justify-end">
            <Image
              src="/about-us.png"
              alt="About us"
              width={1200}
              height={800}
              className="w-full max-w-[520px] sm:max-w-[700px] md:max-w-[850px] lg:max-w-[1000px] h-auto object-cover rounded-2xl shadow-xl"
            />
          </div>

        </div>
      </div>
    </section>
  );
}