export default function TermsPage() {
    const terms = [
        {
            title: "Acceptance of Terms",
            description:
                "By accessing and using Tamaam Technologies services, you agree to comply with and be bound by these Terms & Conditions.",
        },
        {
            title: "Eligibility",
            description:
                "By utilizing our website, you are confirming that you are at least 18 years of age and possess the legal capacity to enter into these Terms of Service.",
        },
        {
            title: "Use of Services",
            description:
                "Our services are intended for lawful business purposes only. Unauthorized use may result in suspension or termination.",
        },
        {
            title: "Intellectual Property",
            description:
                "All content, branding, designs, and software remain the property of Tamaam Technologies unless otherwise stated.",
        },
        {
            title: "Contact Information",
            description: (
                <div className="space-y-4">

                    <p>
                        For questions regarding these Terms & Conditions,
                        please <strong>contact us</strong> at:
                    </p>

                    <div className="space-y-3">

                        {/* Email */}
                        <div className="flex items-center gap-3">

                            <span className="font-semibold text-[#111827]">
                                Email:
                            </span>

                            <a
                                href="mailto:tamaamtech@gmail.com"
                                className="
                                        text-[#01cb58]
                                        hover:text-[#00a346]
                                        hover:underline
                                        transition
                                        "
                            >
                                tamaamtech@gmail.com
                            </a>

                        </div>

                        {/* Phone */}
                        <div className="flex items-center gap-3">

                            <span className="font-semibold text-[#111827]">
                                Phone:
                            </span>

                            <a
                                href="tel:+9715XXXXXX"
                                className="
                                    text-[#01cb58]
                                    hover:text-[#00a346]
                                    hover:underline
                                    transition
                                    "
                            >
                                +971 XX985XXXX
                            </a>

                        </div>

                    </div>

                </div>
            ),
        }
    ];

    return (
        <section className="relative overflow-hidden pt-34 px-4 sm:px-6 md:px-8 sm:pt-40 md:pt-48 pb-14 sm:pb-20 md:pb-28">

            <div className="relative z-10 max-w-6xl mx-auto">

                {/* Heading */}
                <div className="text-center mb-10 sm:mb-14">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold sm:font-bold leading-tight tracking-tight heading-color">
                        Terms & Conditions
                    </h1>

                    <p className="text-sm sm:text-base md:text-lg lg:text-[22px] max-w-4xl mx-auto py-4 font-medium text-(--text-light)">
                        Please read our terms carefully before using our services.
                    </p>
                </div>

                {/* Intro */}
                <div className="bg-white border border-gray-100 rounded-2xl shadow-lg p-6 sm:p-8 mb-8">
                    <p className="text-[1rem] sm:text-[1.1rem] lg:text-[1.15rem] text-(--text-dark) leading-[1.8]">
                        Welcome to <strong>Tamaam Technologies</strong>. By accessing our
                        website and services, you agree to comply with these Terms &
                        Conditions, our Privacy Policy, and all applicable laws and
                        regulations.
                    </p>
                </div>

                {/* Terms Cards */}
                <div className="space-y-6">
                    {terms.map((item, index) => (
                        <div
                            key={index}
                            className="
                                    bg-white border border-gray-100 rounded-2xl
                                    shadow-lg p-6 sm:p-8
                                    transition-all duration-300
                                    hover:shadow-2xl hover:-translate-y-1
                                "
                        >
                            <div className="flex items-start gap-4">

                                <div className="flex items-center gap-3">

                                    {/* One Side Curved Line */}
                                    <svg
                                        width="14"
                                        height="36"
                                        viewBox="0 0 14 36"
                                        fill="none"
                                        className="flex-shrink-0"
                                    >
                                        <path
                                            d="M11 2C4 6 4 30 11 34"
                                            stroke="#01cb58"
                                            strokeWidth="2.2"
                                            strokeLinecap="round"
                                        />
                                    </svg>

                                </div>

                                <div>
                                    <h2 className="text-xl sm:text-2xl font-bold mb-3 heading-color">
                                        {index + 1}. {item.title}
                                    </h2>

                                    <div className="text-[0.98rem] sm:text-[1.05rem] leading-[1.8] text-(--text-dark)">
                                        {item.description}
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}