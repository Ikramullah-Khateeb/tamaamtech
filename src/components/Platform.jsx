import { FaVideo, FaShieldAlt, FaBug, FaListUl } from "react-icons/fa";

export default function Platform() {
  const items = [
    {
      icon: FaVideo,
      title: "Scoping Call.",
      text: "We’ll start by doing a scoping call to learn about your infrastructure, security concerns, & compliance needs.",
    },
    {
      icon: FaShieldAlt,
      title: "Security Program.",
      text: "Then we’ll build you out a custom security program that is stage appropriate (the RIGHT amount of security for your size).",
    },
    {
      icon: FaBug,
      title: "Penetration Test.",
      text: "Our team uses advanced techniques to identify exploitable weaknesses and strengthen your security posture.",
    },
    {
      icon: FaListUl,
      title: "Action Plan.",
      text: "We deliver a clear, prioritized action plan based on your scoping call and assessment results to strengthen your security and compliance posture.",
    },
  ];

  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <span className="text-xs font-semibold tracking-widest text-gray-500 uppercase">
          All in One Platform
        </span>

        <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-gray-900">
          Security. Compliance. Clarity.
        </h2>

        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Outbee Technologies simplifies cybersecurity by combining essential
          security and compliance tools in one interface.
        </p>
      </div>

      <div className="max-w-4xl mx-auto mt-16">
        <h3 className="text-xl font-semibold text-gray-900">
          Everything You Need in One Place
        </h3>
        <div className="w-10 h-[2px] bg-gray-800 mt-2 mb-8"></div>

        <div className="space-y-8">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="flex items-start gap-4">
                <div className="mt-1 text-gray-800 text-lg">
                  <Icon />
                </div>
                <p className="text-gray-700 leading-relaxed">
                  <span className="font-semibold text-gray-900">
                    {item.title}{" "}
                  </span>
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}