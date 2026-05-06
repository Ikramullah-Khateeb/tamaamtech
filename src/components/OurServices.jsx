'use client';
import React from 'react'
import { IoHardwareChip } from "react-icons/io5";
import { FaMobileAlt, FaCloud, FaBullhorn, FaServer, FaShieldAlt } from "react-icons/fa";

const hoverOn = (e) => {
    e.currentTarget.style.transform = 'translateY(-4px)'
}

const hoverOff = (e) => {
    e.currentTarget.style.transform = 'translateY(0px)'
}

const cardClass = 'flex flex-col items-start justify-start bg-white rounded-2xl p-5 sm:p-6 md:p-8 shadow-(--shadow-large)'
const cardStyle = { transition: 'transform 0.25s ease' }

export default function OurServices() {
    return (
        <section className='bg-[#eef1f7] px-4 sm:px-6 py-14 sm:py-20'>
            <div className='max-w-7xl mx-auto text-center'>

                {/* Heading */}
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold sm:font-bold leading-tight tracking-tight heading-color ">
                    What We Engineer & Execute
                </h2>

                {/* Grid */}
                <div className=" mt-10 sm:mt-12 md:mt-14  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">

                    <div className={cardClass} style={cardStyle} onMouseEnter={hoverOn} onMouseLeave={hoverOff}>
                        <div className='mb-4'>
                            <span className='text-xl sm:text-2xl bg-(--primary-color) rounded-full p-2.5 h-12 w-12 flex items-center justify-center text-(--white)'>
                                <IoHardwareChip />
                            </span>
                        </div>
                        <h3 className='text-base sm:text-lg md:text-xl font-semibold mb-2 text-left heading-color '>
                            AI Powered Solutions
                        </h3>
                        <div className='text-sm sm:text-base font-medium text-(--text-dark) text-left leading-relaxed'>
                            We design and deploy intelligent systems that automate processes, enhance decision-making, and deliver measurable business impact.
                        </div>
                    </div>

                    <div className={cardClass} style={cardStyle} onMouseEnter={hoverOn} onMouseLeave={hoverOff}>
                        <div className='mb-4'>
                            <span className='text-xl sm:text-2xl bg-(--primary-color) rounded-full p-2.5 h-12 w-12 flex items-center justify-center text-(--white)'>
                                <FaMobileAlt />
                            </span>
                        </div>
                        <h3 className='text-base sm:text-lg md:text-xl font-semibold mb-2 text-left heading-color '>
                            Web and Mobile Apps
                        </h3>
                        <div className='text-sm sm:text-base font-medium text-(--text-dark) text-left leading-relaxed'>
                            Custom-built, user-friendly applications that combine functionality, speed, and design to deliver exceptional digital experiences.
                        </div>
                    </div>

                    <div className={cardClass} style={cardStyle} onMouseEnter={hoverOn} onMouseLeave={hoverOff}>
                        <div className='mb-4'>
                            <span className='text-xl sm:text-2xl bg-(--primary-color) rounded-full p-2.5 h-12 w-12 flex items-center justify-center text-(--white)'>
                                <FaCloud />
                            </span>
                        </div>
                        <h3 className='text-base sm:text-lg md:text-xl font-semibold mb-2 text-left heading-color '>
                            Cloud Services (Google/Azure/AWS)
                        </h3>
                        <div className='text-sm sm:text-base font-medium text-(--text-dark) text-left leading-relaxed'>
                            Secure cloud architecture, migration, and management across leading platforms to ensure scalability, reliability, and efficiency.
                        </div>
                    </div>

                    <div className={cardClass} style={cardStyle} onMouseEnter={hoverOn} onMouseLeave={hoverOff}>
                        <div className='mb-4'>
                            <span className='text-xl sm:text-2xl bg-(--primary-color) rounded-full p-2.5 h-12 w-12 flex items-center justify-center text-(--white)'>
                                <FaBullhorn />
                            </span>
                        </div>
                        <h3 className='text-base sm:text-lg md:text-xl font-semibold mb-2 text-left heading-color '>
                            Digital Marketing and Social Media
                        </h3>
                        <div className='text-sm sm:text-base font-medium text-(--text-dark) text-left leading-relaxed'>
                            Data-driven campaigns and creative strategies that boost your online presence, engage your audience, and drive conversions.
                        </div>
                    </div>

                    <div className={cardClass} style={cardStyle} onMouseEnter={hoverOn} onMouseLeave={hoverOff}>
                        <div className='mb-4'>
                            <span className='text-xl sm:text-2xl bg-(--primary-color) rounded-full p-2.5 h-12 w-12 flex items-center justify-center text-(--white)'>
                                <FaServer />
                            </span>
                        </div>
                        <h3 className='text-base sm:text-lg md:text-xl font-semibold mb-2 text-left heading-color '>
                            IT Infra and TechOps Solutions
                        </h3>
                        <div className='text-sm sm:text-base font-medium text-(--text-dark) text-left leading-relaxed'>
                            Robust infrastructure design and technology operations support to keep your business systems secure, optimized, and running smoothly.
                        </div>
                    </div>

                    <div className={cardClass} style={cardStyle} onMouseEnter={hoverOn} onMouseLeave={hoverOff}>
                        <div className='mb-4'>
                            <span className='text-xl sm:text-2xl bg-(--primary-color) rounded-full p-2.5 h-12 w-12 flex items-center justify-center text-(--white)'>
                                <FaShieldAlt />
                            </span>
                        </div>
                        <h3 className='text-base sm:text-lg md:text-xl font-semibold mb-2 text-left heading-color '>
                            Cybersecurity & Threat Protection
                        </h3>
                        <div className='text-sm sm:text-base font-medium text-(--text-dark) text-left leading-relaxed'>
                            Threat detection, network penetration testing, and cloud security assessments to safeguard your business.
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}