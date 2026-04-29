export default function AboutHero() {
    const capabilities = [
        "AI Development",
        "Cybersecurity",
        "Penetration Testing",
        "Threat Detection",
        "Cloud Solutions",
        "Enterprise Software",
        "Digital Transformation",
    ];

    return (
        <section className="relative overflow-hidden bg-[#f5f7fb] mt-20 py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-16">

            {/* Grid Background */}
            <div className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                    backgroundImage:
                        "linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px)",
                    backgroundSize: "55px 55px",
                }}
            />

            <div className="relative max-w-7xl mx-auto text-center">

                {/* Eyebrow */}
                <div className="flex items-center justify-center gap-3 text-[10px] sm:text-xs tracking-[0.3em] uppercase text-(--text-light)">
                    <span className="w-8 h-px bg-(--border-light)"></span>
                    <span>About The Company</span>
                    <span className="w-8 h-px bg-(--border-light)"></span>
                </div>

                {/* Main Heading */}
                <h2 className="mt-6 text-[28px] sm:text-[36px] md:text-[48px] lg:text-[56px] font-bold leading-tight tracking-[-1px] bg-linear-to-r from-(--primary-color) to-[#3b82f6] bg-clip-text text-transparent ">

                    We engineer the{" "}

                    <span className="relative inline-block">
                        <span className="absolute inset-0 blur-xl bg-[#3b82f6]/30 rounded-full"></span>
                        <span className="relative bg-linear-to-r from-(--primary-color) to-(--text-light) bg-clip-text text-transparent italic">
                            intelligentt
                        </span>
                    </span>

                    <br className="hidden sm:block" />
                    & secure backbone of modern business.
                </h2>

                {/* Card */}
                <div className="mt-10 sm:mt-12 bg-(--white)/80 backdrop-blur-md border border-(--border-light) rounded-2xl shadow-(--shadow-medium) p-6 sm:p-8 md:p-10 text-left">

                    {/* Accent line */}
                    <span className="absolute left-0 top-6 bottom-6 w-0.75 rounded-full bg-linear-to-b from-(--primary-color) to-transparent" />

                    <p className="text-[1rem] sm:text-[1.1rem] md:text-[1.2rem] text-(--text-dark) leading-normal md:leading-normal text-left md:text-justify">
                        We partner with ambitious teams across{" "}
                        <span className="font-semibold">
                            FinTech, PropTech, EdTech, HealthTech, RetailTech, AgriTech, and GovTech
                        </span>{" "}
                        — turning complex problems into resilient digital products. Our
                        practice spans AI, cybersecurity with penetration testing and threat detection,
                        cloud architecture, and enterprise transformation.
                    </p>

                    {/* Pills */}
                    <ul className="mt-6 flex flex-wrap gap-2">
                        {capabilities.map((c) => (
                            <li
                                key={c}
                                className="px-3 py-1.5 text-xs sm:text-sm rounded-full border border-(--border-light) bg-(--off-white) text-(--text-dark) transition hover:border-(--primary-color)"
                            >
                                {c}
                            </li>
                        ))}
                    </ul>

                    {/* Buttons */}
                    <div className="mt-8 flex flex-col sm:flex-row gap-3">

                        <a className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-(--primary-color) text-(--white) rounded-full text-sm font-semibold transition-all duration-300 hover:bg-[#1e40af]">
                            About Qutbee Tech →
                        </a>

                        <a className="inline-flex items-center justify-center px-5 py-2.5 border border-(--border-light) rounded-full text-sm text-var(--text-dark)] transition hover:bg-(--off-white)">
                            Explore Services
                        </a>

                    </div>
                </div>

            </div>
        </section>
    );
}