import {
    FaBug,
    FaBullseye,
    FaCloud,
    FaNetworkWired,
    FaUserShield,
    FaClipboardCheck,
} from "react-icons/fa";

export default function Tools() {
    const tools = [
        {
            icon: FaBug,
            title: "Vulnerability Assessment & Penetration Testing",
            text: "We identify and exploit potential weaknesses in your systems to uncover risks before attackers do. Our in-depth testing ensures your defenses are resilient and up to date.",
        },
        {
            icon: FaBullseye,
            title: "Threat Detection & Protection",
            text: "Advanced monitoring tools detect threats in real-time, allowing us to neutralize risks before they escalate. Stay one step ahead with proactive defense.",
        },
        {
            icon: FaCloud,
            title: "Cloud Security Assessments",
            text: "We evaluate your cloud environment for security gaps and compliance risks. From configuration to access controls, we ensure your data remains safe in the cloud.",
        },
        {
            icon: FaBug,
            title: "Vulnerability Assessment & Penetration Testing",
            text: "We identify and exploit potential weaknesses in your systems to uncover risks before attackers do. Our in-depth testing ensures your defenses are resilient and up to date.",
        },
        {
            icon: FaBug,
            title: "Vulnerability Assessment & Penetration Testing",
            text: "We identify and exploit potential weaknesses in your systems to uncover risks before attackers do. Our in-depth testing ensures your defenses are resilient and up to date.",
        },
        {
            icon: FaBug,
            title: "Vulnerability Assessment & Penetration Testing",
            text: "We identify and exploit potential weaknesses in your systems to uncover risks before attackers do. Our in-depth testing ensures your defenses are resilient and up to date.",
        },
        {
            icon: FaBug,
            title: "Vulnerability Assessment & Penetration Testing",
            text: "We identify and exploit potential weaknesses in your systems to uncover risks before attackers do. Our in-depth testing ensures your defenses are resilient and up to date.",
        },
    ];

    return (
        <section className="bg-gray-50 py-24 px-6">
            {/* Header */}
            <div className="max-w-7xl mx-auto text-center">
                <span className="inline-block px-4 py-1 text-xs font-semibold tracking-widest text-gray-600 uppercase bg-gray-200 rounded-full">
                    The Complete Cybersecurity Platform
                </span>

                <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-gray-900">
                    All Your Security Tools. One Unified Platform
                </h2>

                <p className="mt-4 text-gray-600">
                    Outbee Technologies brings essential security and compliance features
                    into a single, streamlined interface.
                </p>
            </div>

            {/* Grid */}
            <div className="max-w-6xl mx-auto mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {tools.map((tool, index) => {
                    const Icon = tool.icon;
                    return (
                        <div
                            key={index}
                            className="bg-white rounded-2xl p-6 shadow-sm border border-transparent hover:border-black hover:shadow-md transition-all duration-300"
                        >
                            <div className="flex items-start gap-4">
                                <div className="text-gray-800 text-lg mt-1">
                                    <Icon />
                                </div>

                                <div>
                                    <h3 className="text-base font-semibold text-gray-900">
                                        {tool.title}
                                    </h3>
                                    <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                                        {tool.text}
                                    </p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}