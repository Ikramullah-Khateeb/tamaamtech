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
      title: "Threat Detection & Protection",
      text: "Advanced monitoring tools detect threats in real-time, allowing us to neutralize risks before they escalate. Stay one step ahead with proactive defense.",
    },
    {
      icon: FaCloud,
      title: "Cloud Security Assessments",
      text: "We evaluate your cloud environment for security gaps and compliance risks. From configuration to access controls, we ensure your data remains safe in the cloud.",
    },
    {
      icon: FaNetworkWired,
      title: "Network Infrastructure Testing",
      text: "Our testing uncovers vulnerabilities in routers, firewalls, and internal networks. We ensure your infrastructure is built to resist intrusions and performance issues.",
    },
    {
      icon: FaUserLock,
      title: "Access Control Management",
      text: "We design and implement robust access policies to protect sensitive systems and data.",
    },
    {
      icon: FaClipboardCheck,
      title: "Compliance Services",
      text: "From GDPR to ISO standards, we help your organization meet regulatory and industry-specific requirements.",
    },
    {
      icon: FaGraduationCap,
      title: "Cybersecurity Training",
      text: "We empower your team with knowledge to identify, prevent, and respond to cyber threats.",
    },
  ];

  return (
    <section className="bg-white text-[#1e293b] py-16 sm:py-20 lg:py-24 px-4 sm:px-6">
      
      {/* Container */}
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          
          <span className="inline-block py-1.5 px-3 text-xs sm:text-sm font-medium text-[#20283f] bg-black/10 uppercase rounded-full mb-4">
            The Complete Cybersecurity Platform
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            All Your Security Tools.{" "}
            <span className="bg-gradient-to-br from-[#20283f] to-[#3b82f6] bg-clip-text text-transparent">
              One Unified Platform
            </span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#475569] leading-relaxed">
            Qutbee Technologies brings essential security and compliance
            features into a single, streamlined interface.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {items.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="
                  backdrop-blur-xl bg-white/70
                  border border-gray-200 hover:border-black
                  rounded-2xl
                  p-5 sm:p-6
                  shadow-[0_8px_32px_rgba(0,0,0,0.08)]
                  hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)]
                  transition-all duration-300
                  hover:-translate-y-1
                "
              >
                <div className="flex items-start gap-3 sm:gap-4">

                  {/* Icon */}
                  <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-[#20283f] to-[#3b82f6] text-white shrink-0">
                    <Icon size={18} />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-1 sm:mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
                      {item.text}
                    </p>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}