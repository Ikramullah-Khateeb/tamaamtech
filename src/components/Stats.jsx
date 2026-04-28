"use client";
import { useEffect, useState } from "react";

export default function StatsSection() {
  const stats = [
    { value: 30, suffix: "+", label: "Projects Completed" },
    { value: 1500, suffix: "+", label: "Dedicated Hours" },
    { value: 7, suffix: "+", label: "Years of Experience" },
    { value: 100, suffix: "%", label: "Client Retention" },
  ];

  return (
    <section className="bg-[#1f2e4a] py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

        {stats.map((item, index) => (
          <Counter key={index} end={item.value} suffix={item.suffix} label={item.label} />
        ))}

      </div>
    </section>
  );
}

function Counter({ end, suffix, label }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1800; // animation time
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <div>
      <h3 className="text-white text-3xl md:text-4xl font-bold mb-2">
        {count}{suffix}
      </h3>
      <p className="text-gray-300 text-sm md:text-base">
        {label}
      </p>
    </div>
  );
}