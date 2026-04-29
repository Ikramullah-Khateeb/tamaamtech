export default function Tools() {
  const cards = [
    {
      title: "Vulnerability Assessment & Penetration Testing",
      desc: "We identify and exploit potential weaknesses in your systems to uncover risks before attackers do. Our in-depth testing ensures your defenses are resilient and up to date.",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6">
          <circle cx="12" cy="12" r="3" />
          <path d="M13 4.069V2h-2v2.069A8.008 8.008 0 0 0 4.069 11H2v2h2.069A8.007 8.007 0 0 0 11 19.931V22h2v-2.069A8.007 8.007 0 0 0 19.931 13H22v-2h-2.069A8.008 8.008 0 0 0 13 4.069zM12 18c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6z" />
        </svg>
      ),
    },
    {
      title: "Threat Detection & Protection",
      desc: "Advanced monitoring tools detect threats in real-time, allowing us to neutralize risks before they escalate. Stay one step ahead with proactive defense.",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-current stroke-2">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      ),
    },
    {
      title: "Cloud Security Assessments",
      desc: "We evaluate your cloud environment for security gaps and compliance risks. From configuration to access controls, we ensure your data remains safe in the cloud.",
      icon: (
        <svg viewBox="0 0 16 16" className="w-6 h-6">
          <path d="M5.338 1.59..." />
        </svg>
      ),
    },
    {
      title: "Network Infrastructure Testing",
      desc: "Our testing uncovers vulnerabilities in routers, firewalls, and internal networks. We ensure your infrastructure is built to resist intrusions and performance issues.",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-current stroke-2">
          <rect width="7" height="9" x="3" y="3" rx="1" />
          <rect width="7" height="5" x="14" y="3" rx="1" />
          <rect width="7" height="9" x="14" y="12" rx="1" />
          <rect width="7" height="5" x="3" y="16" rx="1" />
        </svg>
      ),
    },
    {
      title: "Access Control Management",
      desc: "We design and implement robust access policies to protect sensitive systems and data. Only the right people get the right access at the right time.",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6">
          <path d="M22 9H20V7H11.5858..." />
        </svg>
      ),
    },
    {
      title: "Compliance Services",
      desc: "From GDPR to ISO standards, we help your organization meet regulatory and industry-specific security requirements. Stay compliant and audit-ready at all times.",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6">
          <path d="M4 6h18V4H4..." />
        </svg>
      ),
    },
    {
      title: "Cybersecurity Training",
      desc: "We empower your team with the knowledge to identify, prevent, and respond to cyber threats. Practical, scenario-based training keeps your staff cyber-aware.",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6">
          <path d="M12 1 3 5v6c0 5.55..." />
        </svg>
      ),
    },
  ];

  return (
    <section id="cybersecurity" className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-xs tracking-widest uppercase text-slate-500 font-medium">
            THE COMPLETE CYBERSECURITY PLATFORM
          </span>

          <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-slate-900">
            All Your Security Tools. One Unified Platform
          </h2>

          <p className="mt-4 text-slate-500 max-w-2xl mx-auto">
            Qutbee Technologies brings essential security and compliance
            features into a single, streamlined interface.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                
                {/* Icon */}
                <div className="text-slate-700 mt-1">
                  {card.icon}
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                    {card.desc}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}