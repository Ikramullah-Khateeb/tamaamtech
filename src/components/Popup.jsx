"use client";
import { useState } from "react";

export default function Popup({ onClose }) {
    const [form, setForm] = useState({
        name: "", email: "", phone: "", company: "",
        service: "", budget: "", details: "",
    });

    const handleChange = (e) =>
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form);
    };

    return (
        <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4">
            <div className="bg-white w-full max-w-xl rounded-2xl shadow-2xl overflow-hidden">

                {/* Header */}
                <div className="px-7 pt-7 pb-0">
                    <div className="flex items-start justify-between mb-1">
                        <h2 className="text-2xl font-bold text-gray-900">
                            Get a <span className="text-green-600">Quote</span>
                        </h2>
                        <button
                            onClick={onClose}
                            className="text-gray-400 hover:text-gray-800 text-xl leading-none mt-1"
                        >
                            ✕
                        </button>
                    </div>
                    <p className="text-sm text-gray-500 mb-5">
                        Fill in the details below and we'll get back to you within 24 hours.
                    </p>
                    <hr className="border-gray-100" />
                </div>

                {/* Body */}
                <form onSubmit={handleSubmit} className="px-7 py-6 space-y-4">

                    {/* Row 1 */}
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                                Full Name <span className="text-red-500">*</span>
                            </label>
                            <input
                                name="name" type="text" placeholder="John Doe"
                                value={form.name} onChange={handleChange} required
                                className="w-full px-3.5 py-2.5 text-sm border border-gray-200 rounded-xl outline-none focus:border-green-500 transition placeholder-gray-400"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                                Email Address <span className="text-red-500">*</span>
                            </label>
                            <input
                                name="email" type="email" placeholder="john@company.com"
                                value={form.email} onChange={handleChange} required
                                className="w-full px-3.5 py-2.5 text-sm border border-gray-200 rounded-xl outline-none focus:border-green-500 transition placeholder-gray-400"
                            />
                        </div>
                    </div>

                    {/* Row 2 */}
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                                Phone Number
                            </label>
                            <input
                                name="phone" type="tel" placeholder="+971 5X XXX XXXX"
                                value={form.phone} onChange={handleChange}
                                className="w-full px-3.5 py-2.5 text-sm border border-gray-200 rounded-xl outline-none focus:border-green-500 transition placeholder-gray-400"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                                Company Name
                            </label>
                            <input
                                name="company" type="text" placeholder="Your Company"
                                value={form.company} onChange={handleChange}
                                className="w-full px-3.5 py-2.5 text-sm border border-gray-200 rounded-xl outline-none focus:border-green-500 transition placeholder-gray-400"
                            />
                        </div>
                    </div>

                    {/* Row 3 */}
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                                Service Required
                            </label>
                            <select
                                name="service" value={form.service} onChange={handleChange}
                                className="w-full px-3.5 py-2.5 text-sm border border-gray-200 rounded-xl outline-none focus:border-green-500 transition text-gray-700 appearance-none bg-white cursor-pointer"
                            >
                                <option value="">Select a service</option>
                                <option>AI Engineering</option>
                                <option>Penetration Testing</option>
                                <option>Cloud Architecture</option>
                                <option>Cybersecurity Audit</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                                Estimated Budget
                            </label>
                            <select
                                name="budget" value={form.budget} onChange={handleChange}
                                className="w-full px-3.5 py-2.5 text-sm border border-gray-200 rounded-xl outline-none focus:border-green-500 transition text-gray-700 appearance-none bg-white cursor-pointer"
                            >
                                <option value="">Select budget range</option>
                                <option>Under ₹4,000</option>
                                <option>₹4,000 – ₹12,000</option>
                                <option>₹12,000 – ₹15,000</option>
                                <option>₹15,000+</option>
                            </select>
                        </div>
                    </div>

                    {/* Project Details */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                            Project Details <span className="text-red-500">*</span>
                        </label>
                        <textarea
                            name="details" rows={4} required
                            placeholder="Tell us about your project requirements, goals, and timeline…"
                            value={form.details} onChange={handleChange}
                            className="w-full px-3.5 py-2.5 text-sm border border-gray-200 rounded-xl outline-none focus:border-green-500 transition placeholder-gray-400 resize-none"
                        />
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="w-full py-3.5 bg-green-600 hover:bg-green-700 text-white font-bold text-sm rounded-xl transition-colors duration-200 flex items-center justify-center gap-2"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <line x1="22" y1="2" x2="11" y2="13" />
                            <polygon points="22 2 15 22 11 13 2 9 22 2" />
                        </svg>
                        Submit Request
                    </button>

                </form>
            </div>
        </div>
    );
}