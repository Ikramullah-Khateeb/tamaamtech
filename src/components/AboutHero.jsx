// AboutHero.jsx
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

    const sectors = ["FinTech", "PropTech", "EdTech", "HealthTech", "RetailTech", "AgriTech", "GovTech"];

    const stats = [
        { value: "200+", label: "Projects Delivered" },
        { value: "99.9%", label: "Uptime Guaranteed" },
        { value: "50+", label: "Enterprise Clients" },
        { value: "24/7", label: "Threat Monitoring" },
    ];

    return (
        <section className="relative overflow-hidden px-4 sm:px-6 pt-24 sm:pt-36 md:pt-52 pb-14 sm:pb-20 md:pb-28">

            {/* Grid Background */}
            <div className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                    backgroundImage:
                        "linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px)",
                    backgroundSize: "55px 55px",
                }}
            />

            <div className="relative max-w-7xl mx-auto pt-12 sm:pt-0 text-center">

                {/* Badge */}
                <div className="inline-flex items-center bg-[#01cb58]/10 text-[#052e1a] px-3 sm:px-4 py-1.5 sm:py-2 rounded-4xl text-xs sm:text-[0.875rem] font-medium">
                    <span>About the Company</span>
                </div>

                {/* ─── Main Heading — UNCHANGED ─── */}
                <h2 className="mt-6 text-xl sm:text-3xl md:text-5xl font-semibold sm:font-bold leading-tight tracking-[-1px] heading-color">
                    We Engineer the{" "}
                    <span className="relative inline-block">
                        <span className="absolute inset-0 blur-xl bg-[#a7f3d0]/30 rounded-full"></span>
                        <span className="inline-block pr-2 bg-linear-to-r from-(--primary-color) to-(--text-dark) bg-clip-text text-transparent italic">
                            Intelligent
                        </span>
                    </span>
                    <br className="hidden sm:block" />
                    & Secure Backbone of Modern Business.
                </h2>

                <p className="text-sm sm:text-base md:text-lg lg:text-[22px] max-w-4xl mx-auto py-4 font-medium text-(--text-light)">
                    We work with teams across FinTech, EdTech, HealthTech and GovTech - building reliable digital products. Our focus includes AI, cybersecurity, cloud architecture, and enterprise transformation.
                </p>

                <ul className="flex flex-wrap justify-center gap-2 sm:gap-3 max-w-4xl mx-auto mt-4">
                    {capabilities.map((c) => (
                        <li
                            key={c}
                            className="px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm rounded-full border border-(--border-light) bg-(--off-white) text-(--text-dark) transition hover:border-(--primary-color) hover:bg-blue-50/50"
                        >
                            {c}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}