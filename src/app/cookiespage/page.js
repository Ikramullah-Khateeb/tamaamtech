export default function CookiesPage() {

    const cookies = [
    {
        title: "Introduction",
        description:
            "This Cookies Policy explains how Tamaam Technologies uses cookies and similar technologies when you visit or interact with our website and services.",
    },
    {
        title: "What Are Cookies",
        description:
            "Cookies are small text files stored on your device that help websites function properly, improve user experience, remember preferences, and analyze website performance.",
    },
    {
        title: "Why We Use Cookies",
        description:
            "We use cookies to enhance website functionality, improve security, analyze traffic, remember user preferences, and provide a smoother browsing experience.",
    },
    {
        title: "Essential Cookies",
        description:
            "Essential cookies are necessary for the operation of our website. They enable features such as secure navigation, page access, and form submissions.",
    },
    {
        title: "Analytics Cookies",
        description:
            "Analytics cookies help us understand how visitors interact with our website by collecting anonymous information such as pages visited, time spent on the site, and traffic sources.",
    },
    {
        title: "Functional Cookies",
        description:
            "Functional cookies allow the website to remember choices you make, such as language preferences or saved settings, to provide a more personalized experience.",
    },
    {
        title: "Information Collected Through Cookies",
        description:
            "Cookies may collect information including IP address, browser type, device information, operating system, pages viewed, time spent on pages, and referral sources.",
    },
    {
        title: "Third-Party Cookies",
        description:
            "Some third-party services integrated into our website, such as analytics tools or embedded content providers, may place cookies on your device in accordance with their own policies.",
    },
    {
        title: "Managing Cookies",
        description:
            "You can control or disable cookies through your browser settings. Please note that disabling certain cookies may impact the functionality and performance of our website.",
    },
    {
        title: "Policy Updates",
        description:
            "We may update this Cookies Policy from time to time to reflect changes in legal requirements, technologies, or our business operations.",
    },
    {
        title: "Contact Information",
        description: (
            <div className="space-y-4">

                <p>
                    For questions regarding this Cookies Policy,
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
                        Cookies Policy
                    </h1>

                    <p className="text-sm sm:text-base md:text-lg lg:text-[22px] max-w-4xl mx-auto py-4 font-medium text-(--text-light)">
                        Learn how Tamaam Technologies uses cookies and similar technologies to improve your browsing experience.
                    </p>

                </div>

                {/* Intro */}
                <div className="bg-white border border-gray-100 rounded-2xl shadow-lg p-6 sm:p-8 mb-8">

                    <p className="text-[1rem] sm:text-[1.1rem] lg:text-[1.15rem] text-(--text-dark) leading-[1.8]">
                        This Cookies Policy explains how <strong>Tamaam Technologies </strong>
                        uses cookies and related technologies when you visit our website.
                        By continuing to browse our website, you consent to the use of
                        cookies in accordance with this policy.
                    </p>

                </div>

                {/* Policy Cards */}
                <div className="space-y-6">

                    {cookies.map((item, index) => (

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

                                {/* Curved Accent */}
                                <div className="flex items-center gap-3">

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

                                {/* Content */}
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