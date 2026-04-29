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
        <section className="bg-[#f4f6fb] py-14 sm:py-16 md:py-20 px-4 sm:px-6 md:px-16">
            <div className="max-w-7xl mx-auto text-center">

                {/* Heading */}
                <h2 className="text-[28px] sm:text-[32px] lg:text-[44.8px] font-bold tracking-[-1px] pt-8 sm:pt-10 md:pt-12 bg-linear-to-r from-(--primary-color) to-[#3b82f6] bg-clip-text text-transparent">
                    Why Choose Us?
                </h2>

                {/* Subtext */}
                <p className="mt-4 max-w-3xl mx-auto text-[1rem] sm:text-[1.1rem] md:text-[1.2rem] text-(--text-dark) leading-normal md:leading-normal md:text-center">
                    We combine advanced technology with proven expertise to deliver secure, scalable, and future-ready solutions. From AI innovation to advanced cybersecurity, our services are designed to protect, optimize, and grow your business.
                </p>

                {/* Features Grid */}
                <div className="mt-10 sm:mt-12 md:mt-14 grid grid-cols-1 md:grid-cols-2 gap-y-8 sm:gap-y-10 gap-x-8 sm:gap-x-12 text-left">
                    {features.map((card, index) => (
                        <div key={index} className="flex items-start gap-3 sm:gap-4">

                            
                            
                            {/* Circle Icon */}
                            <div className="mt-3 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full border-2 border-(--primary-color)"></div>

                            <div>
                                <h3 className="text-[16px] sm:text-[18px] md:text-[24px] lg:text-[28px] font-bold md:font-semibold text-(--primary-color)">
                                    {card.title}
                                </h3>
                                <p className="text-[0.85rem] sm:text-[1rem] md:text-[1.2rem] text-(--text-dark mt-1 leading-normal md:leading-normal">
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