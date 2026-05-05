"use client";

import {
  FaBug,
  FaShieldAlt,
  FaCloud,
  FaNetworkWired,
  FaUserLock,
  FaClipboardCheck,
  FaGraduationCap,
  FaCrosshairs,
} from "react-icons/fa";

export default function CyberSecurity() {
  const items = [
    {
      icon: FaBug,
      title: "Vulnerability Assessment & Penetration Testing",
      text: "We identify and exploit potential weaknesses in your systems to uncover risks before attackers do. Our in-depth testing ensures your defenses are resilient and up to date.",
    },
    {
      icon: FaCrosshairs,
      title: "Advanced Threat Detection & Protection",
      text: "Advanced monitoring tools detect threats in real-time, allowing us to neutralize risks before they escalate. Stay one step ahead with proactive defense.",
    },
    {
      icon: FaCloud,
      title: "Advanced Cloud Security Assessments",
      text: "We evaluate your cloud environment for security gaps and compliance risks. From configuration to access controls, we ensure your data remains safe in the cloud.",
    },
    {
      icon: FaNetworkWired,
      title: "Network Infrastructure Testing",
      text: "Our testing uncovers vulnerabilities in routers, firewalls, and internal networks. We ensure your infrastructure is built to resist intrusions and performance issues.",
    },
    {
      icon: FaUserLock,
      title: "Secure Access Control Management",
      text: "We design and implement robust access policies to protect sensitive systems and data. Ensuring only authorized users get the right access at the right time.",
    },
    {
      icon: FaClipboardCheck,
      title: "Regulatory Compliance Services",
      text: "From GDPR to ISO standards, we help your organization meet regulatory and industry-specific requirements. Ensuring continuous compliance with evolving standards.",
    },
  ];

  return (
    <section className="bg-white px-4 sm:px-6 py-14 sm:py-20 text-[#1e293b]">

      {/* Container */}
      <div className="max-w-7xl text-center mx-auto">

        <div className="inline-flex items-center gap-2 bg-[rgba(59,130,246,0.1)] text-[#3b82f6] px-3 sm:px-4 py-1.5 sm:py-2 rounded-4xl text-xs sm:text-[0.875rem] font-medium">
          <span>The Complete Cybersecurity Platform</span>
        </div>

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold sm:font-bold leading-tight tracking-[-1px] bg-linear-to-r from-(--primary-color) to-[#3b82f6] bg-clip-text text-transparent">
          All Your Security Tools.<br />
          One Unified Platform

        </h2>

        {/* Subtext */}
        <p className="text-sm sm:text-base md:text-lg lg:text-[22px] max-w-4xl mx-auto py-4 font-medium text-(--text-light)">
          Qutbee Technologies brings essential security and compliance features into a single, streamlined interface.
        </p>

        {/* Grid */}
        <div className=" mt-10 sm:mt-12 md:mt-14  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {items.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="
                  flex flex-col items-start justify-start
                  p-5 sm:p-6 md:p-8
                  bg-white
                  border border-gray-200
                  rounded-2xl
                  shadow-(--shadow-large)
                  transition-all duration-300
                  hover:-translate-y-1
                "
              >
                <div>

                  {/* Top Row: Icon + Title */}
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-[#20283f] text-white shrink-0">
                      <Icon size={16} />
                    </div>

                    <h3 className="text-base sm:text-lg md:text-xl font-semibold text-left">
                      {item.title}
                    </h3>
                  </div>

                  {/* Full-width paragraph */}
                  <p className="mt-2 text-sm sm:text-base font-medium text-(--text-dark) leading-relaxed text-left">
                    {item.text}
                  </p>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}