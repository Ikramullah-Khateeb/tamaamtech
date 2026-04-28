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
        <section className="bg-[#f4f6fb] py-20 px-6 md:px-16">
            <div className="max-w-7xl mx-auto text-center">

                {/* Heading */}
                <h2 className="text-3xl md:text-4xl font-semibold text-[#2f4f88]">
                    Why Choose Us?
                </h2>

                {/* Subtext */}
                <p className="text-gray-600 mt-4 max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
                    We combine advanced technology with proven expertise to deliver secure, scalable, and future-ready solutions. From AI innovation to advanced cybersecurity, our services are designed to protect, optimize, and grow your business.
                </p>

                {/* Features Grid */}
                <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-12 text-left">
                    {features.map((card, index) => (
                        <div key={index} className="flex items-start gap-4">
                            {/* Circle Icon */}
                            <div className="mt-1 w-4 h-4 rounded-full border-2 border-[#2f4f88]"></div>
                            <div>
                                <h3 className="text-[#1f2e4a] font-semibold text-lg">
                                    {card.title}
                                </h3>
                                <p className="text-gray-600 text-sm mt-1 leading-relaxed">
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
