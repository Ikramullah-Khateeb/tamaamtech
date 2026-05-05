// Stats.jsx
"use client";

import { useEffect, useState } from "react";

export default function Stats() {
  const stats = [
    { value: 30, suffix: "+", label: "Projects Completed" },
    { value: 1500, suffix: "+", label: "Dedicated Hours" },
    { value: 7, suffix: "+", label: "Years of Experience" },
    { value: 100, suffix: "%", label: "Client Retention" },
  ];

  return (
    <section className="bg-gradient-to-r from-green-600 to-green-800 px-4 sm:px-6 py-8 sm:py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">

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
    const duration = 1800;
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
    <div className="flex flex-col items-center justify-center gap-1 sm:gap-0">
      <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold text-(--white) mb-1 sm:mb-2">
        {count}{suffix}
      </h3>
      <p className="text-xs sm:text-sm md:text-base lg:text-lg font-medium text-(--off-white) leading-normal">
        {label}
      </p>
    </div>
  );
}