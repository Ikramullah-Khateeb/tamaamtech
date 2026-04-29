'use client'

import React, { useState } from 'react'

const hoverOn = (e) => {
    e.currentTarget.style.transform = 'translateY(-5px)'
    e.currentTarget.style.boxShadow = '0 16px 40px 0 rgba(31,38,135,0.15)'
}

const hoverOff = (e) => {
    e.currentTarget.style.transform = 'translateY(0px)'
    e.currentTarget.style.boxShadow = '0 2px 12px 0 rgba(31,38,135,0.07)'
}

const cardStyle = {
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    boxShadow: '0 2px 12px 0 rgba(31,38,135,0.07)',
}

export default function Blog() {
    const [current, setCurrent] = useState(0)
    const total = 3

    return (
        <section className='max-w-7xl mx-auto px-4 py-16'>

            {/* Heading */}
            <h2 className='text-[38px] md:text-[44px] font-bold text-center text-[#1a1a2e] mb-12'>
                Insights &amp; Trends
            </h2>

            {/* Cards wrapper — relative for arrow positioning */}
            <div className='relative'>

                {/* Left Arrow */}
                <button
                    onClick={() => setCurrent((prev) => (prev - 1 + total) % total)}
                    className='absolute -left-5 top-[38%] -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center text-gray-600 hover:bg-[#1a3c8f] hover:text-white hover:border-[#1a3c8f] transition-all duration-200'
                    aria-label='Previous'
                >
                    <svg xmlns='http://www.w3.org/2000/svg' className='w-4 h-4' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2.5}>
                        <path strokeLinecap='round' strokeLinejoin='round' d='M15 19l-7-7 7-7' />
                    </svg>
                </button>

                {/* Cards Grid */}
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7'>

                    {/* Card 1 */}
                    <div
                        className='bg-white rounded-2xl overflow-hidden border border-gray-100 cursor-pointer'
                        style={cardStyle}
                        onMouseEnter={hoverOn}
                        onMouseLeave={hoverOff}
                    >
                        <div className='relative w-full h-200px'>
                            <img
                                src='https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&q=80'
                                alt='Rebuilding UAE Digital Foundations'
                                className='w-full h-full object-cover'
                            />
                            <div className='absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent' />
                            <div className='absolute top-3 left-3 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center'>
                                <svg xmlns='http://www.w3.org/2000/svg' className='w-4 h-4 text-white' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
                                </svg>
                            </div>
                            <div className='absolute bottom-4 left-4 right-4'>
                                <p className='text-white font-bold text-[13px] uppercase tracking-wide leading-tight'>
                                    Rebuilding UAE&apos;s<br />Digital Foundations<br />in 2025
                                </p>
                            </div>
                        </div>
                        <div className='p-5'>
                            <h3 className='text-[16px] font-bold text-[#1a1a2e] leading-snug mb-2'>
                                Why 2025 Is the Year UAE Businesses Must Rebuild Their Digital Foundations
                            </h3>
                            <p className='text-[13px] text-gray-500 leading-relaxed mb-4'>
                                The UAE is no longer simply adapting to digital transformation. It is setting the pace for the rest of the world...
                            </p>
                            <a href='#' className='text-[13px] font-semibold text-[#1a3c8f] hover:underline'>
                                Read More →
                            </a>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div
                        className='bg-white rounded-2xl overflow-hidden border border-gray-100 cursor-pointer'
                        style={cardStyle}
                        onMouseEnter={hoverOn}
                        onMouseLeave={hoverOff}
                    >
                        <div className='relative w-full h-200px'>
                            <img
                                src='https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=80'
                                alt='Cybersecurity'
                                className='w-full h-full object-cover'
                            />
                            <div className='absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent' />
                        </div>
                        <div className='p-5'>
                            <h3 className='text-[16px] font-bold text-[#1a1a2e] leading-snug mb-2'>
                                What is Cybersecurity and How it Protects Your Data
                            </h3>
                            <p className='text-[13px] text-gray-500 leading-relaxed mb-4'>
                                In todays world of digitalization, where data has become the modern worlds currency and the world is unimaginable without it. Data is the lifeline of modern world businesses. We need to ensure that our data is secure and make its protection the top priority.
                            </p>
                            <a href='#' className='text-[13px] font-semibold text-[#1a3c8f] hover:underline'>
                                Read More →
                            </a>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div
                        className='bg-white rounded-2xl overflow-hidden border border-gray-100 cursor-pointer'
                        style={cardStyle}
                        onMouseEnter={hoverOn}
                        onMouseLeave={hoverOff}
                    >
                        <div className='relative w-full h-200px'>
                            <img
                                src='https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80'
                                alt='Website Trust'
                                className='w-full h-full object-cover'
                            />
                            <div className='absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent' />
                        </div>
                        <div className='p-5'>
                            <h3 className='text-[16px] font-bold text-[#1a1a2e] leading-snug mb-2'>
                                Your Website Is Losing Trust Before It Even Loads
                            </h3>
                            <p className='text-[13px] text-gray-500 leading-relaxed mb-4'>
                                The invisible power of speed, emotion, and first impressions in the UAE digital space and how Qutbee Technologies is helping the website to speak trust from the very first second.
                            </p>
                            <a href='#' className='text-[13px] font-semibold text-[#1a3c8f] hover:underline'>
                                Read More →
                            </a>
                        </div>
                    </div>

                </div>

                {/* Right Arrow */}
                <button
                    onClick={() => setCurrent((prev) => (prev + 1) % total)}
                    className='absolute -right-5 top-[38%] -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-[#1a3c8f] border border-[#1a3c8f] shadow-md flex items-center justify-center text-white hover:bg-[#152f72] transition-all duration-200'
                    aria-label='Next'
                >
                    <svg xmlns='http://www.w3.org/2000/svg' className='w-4 h-4' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2.5}>
                        <path strokeLinecap='round' strokeLinejoin='round' d='M9 5l7 7-7 7' />
                    </svg>
                </button>

            </div>
        </section>
    )
}