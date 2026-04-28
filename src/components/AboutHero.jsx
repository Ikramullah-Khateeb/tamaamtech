import Image from "next/image";

export default function AboutHero() {
    return (
        <section className="bg-[#f5f7fb] py-20 px-6 md:px-16">
            <div className="max-w-7xl mx-auto">

                <h2 className="text-[44px] font-semibold text-[#2f4f88] text-center mb-12">
                    About Us
                </h2>

                <div className="grid md:grid-cols-2 gap-10 items-center">

                    {/* LEFT SIDE */}
                    <div>
                        <p className="text-gray-700 leading-relaxed text-[18px] mb-8">
                            <span className="font-semibold text-black">
                                Qutbee Technologies
                            </span>{" "}
                            is a UAE-based, ISO 27001-certified technology and AI consulting firm delivering secure, scalable, and intelligent solutions{" "}
                            <span className="font-semibold text-black">
                                from UAE to the World.
                            </span>{" "}
                            We serve a wide range of industries including FinTech, PropTech, EdTech, HealthTech, RetailTech, AgriTech, and GovTech. Our services include{" "}
                            <span className="font-semibold text-black">AI development</span>,{" "}
                            <span className="font-semibold text-black">end-to-end Cybersecurity</span>{" "}
                            with penetration testing,{" "}
                            <span className="font-semibold text-black">threat detection</span>, and incident
                            response, cloud solutions, enterprise software, and digital
                            transformation consulting. From{" "}
                            <span className="font-semibold text-black">custom software development</span>,{" "}
                            <span className="font-semibold text-black">cloud migration</span>, to{" "}
                            <span className="font-semibold text-black">24/7 IT support</span>{" "}
                            through TechOps and SecOps, our services are designed to optimize
                            operations, protect digital assets, and accelerate business
                            performance.<span className="font-semibold text-black">At Qutbee,</span>{" "} we empower businesses to innovate, automate,
                            and grow with confidence.
                        </p>

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