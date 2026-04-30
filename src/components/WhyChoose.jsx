// WhyChoose.jsx
import React from 'react'

export default function WhyChoose() {
    const features = [
        {
            title: "Expert-Led Team",
            desc: "Certified professionals with hands-on experience across industries and technologies.",
        },
        {
            title: "Comprehensive Security",
            desc: "End-to-end protection covering networks, cloud, applications, and compliance.",
        },
        {
            title: "AI-Driven Approach",
            desc: "Leveraging intelligent automation for faster detection, smarter insights, and stronger defenses.",
        },
        {
            title: "Tailored Solutions",
            desc: "Strategies customized to your unique business needs and challenges.",
        },
        {
            title: "Global Reach, Local Presence",
            desc: "Operating from Abu Dhabi with clients across the globe.",
        },
        {
            title: "Proven Track Record",
            desc: "Trusted by organizations for delivering measurable results and lasting security.",
        },
    ];

    return (
        <section className="px-4 sm:px-6 py-14 sm:py-20">
            <div className="max-w-7xl mx-auto text-center">

                {/* Heading */}
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold sm:font-bold leading-tight tracking-[-1px] bg-linear-to-r from-(--primary-color) to-[#3b82f6] bg-clip-text text-transparent">
                    Why Choose Us?
                </h2>

                {/* Subtext */}
                <p className="text-sm sm:text-base md:text-lg lg:text-[22px] max-w-4xl mx-auto py-4 font-medium text-(--text-light)">
                    We combine advanced technology with proven expertise to deliver secure, scalable, and future-ready solutions. From AI innovation to advanced cybersecurity, our services are designed to protect, optimize, and grow your business.
                </p>

                {/* Features Grid */}
                <div className="mt-10 sm:mt-12 md:mt-14 grid grid-cols-1 md:grid-cols-2 gap-y-8 sm:gap-y-10 gap-x-8 sm:gap-x-12 text-left">
                    {features.map((card, index) => (
                        <div key={index} className="flex items-start gap-3 sm:gap-4">
                            {/* Circle Icon */}
                            <div className="mt-1.5 sm:mt-2 size-3.5 sm:size-4 shrink-0 rounded-full border-2 border-(--primary-color)"></div>

                            <div>
                                <h3 className="text-base sm:text-2xl md:text-3xl font-semibold leading-tight tracking-[-1px] text-(--primary-color)">
                                    {card.title}
                                </h3>
                                <p className="text-sm sm:text-lg pt-2 font-medium text-(--text-light)">
                                    {card.desc}
                                </p>
                            </div>

                        </div>
                    ))}
                </div>
            </div>

        </section>
    )
}