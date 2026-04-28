'use client';
import React from 'react'
import { IoHardwareChip } from "react-icons/io5";
import { FaMobileAlt, FaCloud, FaBullhorn, FaServer, FaShieldAlt } from "react-icons/fa";

const hoverOn = (e) => {
    e.currentTarget.style.transform = 'translateY(-6px)'
    e.currentTarget.style.boxShadow = '0 16px 48px 0 rgba(31,38,135,0.35)'
    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)'
}

const hoverOff = (e) => {
    e.currentTarget.style.transform = 'translateY(0px)'
    e.currentTarget.style.boxShadow = '0 8px 32px 0 rgba(31,38,135,0.2)'
    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'
}

const cardClass = 'flex flex-col items-start justify-start p-8 bg-white/15 backdrop-blur-[20px] border border-white/25 shadow-[0_8px_32px_0_rgba(31,38,135,0.2)] rounded-3xl'
const cardStyle = { transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease', cursor: 'default' }

export default function OurServices() {
    return (
        <div className='max-w-7xl mx-auto'>
            <div className="text-[44px] font-bold text-center mb-12">
                <h2>What We Engineer & Execute</h2>
            </div>
            <div className='grid grid-cols-3 gap-10'>

                <div className={cardClass} style={cardStyle} onMouseEnter={hoverOn} onMouseLeave={hoverOff}>
                    <div className='mb-6'>
                        <span className='text-[28px] bg-[#20283F] rounded-full p-3 h-15 w-15 flex items-center justify-center text-white'><IoHardwareChip /></span>
                    </div>
                    <h3 className='text-2xl font-semibold mb-2'>AI Powered Solutions</h3>
                    <div className='leading-normal text-sm'>
                        We design and deploy intelligent systems that automate processes, enhance decision-making, and deliver measurable business impact.
                    </div>
                </div>

                <div className={cardClass} style={cardStyle} onMouseEnter={hoverOn} onMouseLeave={hoverOff}>
                    <div className='mb-6'>
                        <span className='text-[28px] bg-[#20283F] rounded-full p-3 h-15 w-15 flex items-center justify-center text-white'><FaMobileAlt /></span>
                    </div>
                    <h3 className='text-2xl font-semibold mb-2'>Web and Mobile Apps</h3>
                    <div className='leading-normal text-sm'>
                        Custom-built, user-friendly applications that combine functionality, speed, and design to deliver exceptional digital experiences.
                    </div>
                </div>

                <div className={cardClass} style={cardStyle} onMouseEnter={hoverOn} onMouseLeave={hoverOff}>
                    <div className='mb-6'>
                        <span className='text-[28px] bg-[#20283F] rounded-full p-3 h-15 w-15 flex items-center justify-center text-white'><FaCloud /></span>
                    </div>
                    <h3 className='text-2xl font-semibold mb-2'>Cloud Services (Google/Azure/AWS)</h3>
                    <div className='leading-normal text-sm'>
                        Secure cloud architecture, migration, and management across leading platforms to ensure scalability, reliability, and efficiency.
                    </div>
                </div>

                <div className={cardClass} style={cardStyle} onMouseEnter={hoverOn} onMouseLeave={hoverOff}>
                    <div className='mb-6'>
                        <span className='text-[28px] bg-[#20283F] rounded-full p-3 h-15 w-15 flex items-center justify-center text-white'><FaBullhorn /></span>
                    </div>
                    <h3 className='text-2xl font-semibold mb-2'>Digital Marketing and Social Media</h3>
                    <div className='leading-normal text-sm'>
                        Data-driven campaigns and creative strategies that boost your online presence, engage your audience, and drive conversions.
                    </div>
                </div>

                <div className={cardClass} style={cardStyle} onMouseEnter={hoverOn} onMouseLeave={hoverOff}>
                    <div className='mb-6'>
                        <span className='text-[28px] bg-[#20283F] rounded-full p-3 h-15 w-15 flex items-center justify-center text-white'><FaServer /></span>
                    </div>
                    <h3 className='text-2xl font-semibold mb-2'>IT Infra and TechOps Solutions</h3>
                    <div className='leading-normal text-sm'>
                        Robust infrastructure design and technology operations support to keep your business systems secure, optimized, and running smoothly.
                    </div>
                </div>

                <div className={cardClass} style={cardStyle} onMouseEnter={hoverOn} onMouseLeave={hoverOff}>
                    <div className='mb-6'>
                        <span className='text-[28px] bg-[#20283F] rounded-full p-3 h-15 w-15 flex items-center justify-center text-white'><FaShieldAlt /></span>
                    </div>
                    <h3 className='text-2xl font-semibold mb-2'>Cybersecurity & Threat Protection</h3>
                    <div className='leading-normal text-sm'>
                        Threat detection, network penetration testing, and cloud security assessments to safeguard your business.
                    </div>
                </div>

            </div>
        </div>
    )
}