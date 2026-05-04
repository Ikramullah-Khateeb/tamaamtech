"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function HeroSectionNew() {
  const canvasRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);

  /* ── Animated data-rain canvas ── */
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animId;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const chars = "01アイウエオカキクケコ█▓▒░";
    const cols = Math.floor(canvas.width / 20);
    const drops = Array(cols).fill(0).map(() => Math.random() * -50);

    const draw = () => {
      // darker but still subtle trail
      ctx.fillStyle = "rgba(0,0,0,0.12)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      drops.forEach((y, i) => {
        const char = chars[Math.floor(Math.random() * chars.length)];

        // richer green
        const alpha = Math.random() * 0.5 + 0.3;
        ctx.fillStyle = `rgba(21,128,61, ${alpha})`;

        ctx.font = `${Math.random() * 6 + 14}px monospace`;
        ctx.fillText(char, i * 20, y * 20);

        if (y * 20 > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i] += 0.4;
      });

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  /* ── Parallax scroll ── */
  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = ["Work", "Stack", "Services", "Contact"];

  const stats = [
    { value: "200+", label: "Projects Delivered" },
    { value: "99.9%", label: "Uptime Guaranteed" },
    { value: "50+", label: "Enterprise Clients" },
  ];

  return (
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden bg-white flex flex-col">

      {/* Server racks */}
      <div
        className="absolute inset-0 z-[1] opacity-15"
        style={{ transform: `translateY(${scrollY * 0.15}px)` }}
      >
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute bottom-0 w-[120px] sm:w-[160px] md:w-[200px]"
            style={{
              left: `${i * 18 - 5}%`,
              height: `${55 + (i % 3) * 15}%`,
              background: `linear-gradient(to top, #d1d5db, #9ca3af, transparent)`,
            }}
          >
            {[...Array(10)].map((_, j) => (
              <div
                key={j}
                className="mx-2 sm:mx-3 my-2 h-2 rounded-sm opacity-50"
                style={{
                  background:
                    Math.random() > 0.5
                      ? "rgba(34,197,94,0.5)"
                      : "rgba(16,185,129,0.4)",
                  width: `${60 + Math.random() * 30}%`,
                }}
              />
            ))}
          </div>
        ))}
      </div>

      {/* Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-[2] w-full h-full opacity-70"
      />

      {/* Grid */}
      <div
        className="absolute inset-0 z-[3]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.08) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* CONTENT */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4 sm:px-6">

        {/* Label */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-px bg-gradient-to-r from-transparent to-green-600" />
          <span className="font-mono text-[10px] tracking-[0.3em] text-green-600 uppercase">
            AI & Cybersecurity Engineering
          </span>
          <div className="w-10 h-px bg-gradient-to-l from-transparent to-green-600" />
        </div>

        {/* Heading */}
        <h1 className="font-black text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl leading-[0.9] tracking-tight mb-6 max-w-5xl">
          <span className="text-gray-800 block">
            The Invisible Work
          </span>

          <span className="block mt-2 bg-gradient-to-r from-green-500 via-green-600 to-green-800 bg-clip-text text-transparent">
            that Keeps You Alive.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="font-mono text-sm text-gray-500 max-w-md mb-10">
          AI development, penetration testing & cloud architecture — built for enterprises that can't afford to fail.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <button className="inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-(--primary-color) text-(--white) rounded-lg shadow-(--shadow-medium) font-semibold text-sm sm:text-base transition-all duration-300 relative overflow-hidden hover:bg-[#1e40af] hover:shadow-(--shadow-large) hover:-translate-y-0.5">
              Start a Project 
            </button>

          <Link
            href="#services"
            className="w-full sm:w-auto px-8 py-3 border border-gray-400 text-gray-600 font-mono text-sm uppercase hover:border-green-600 hover:text-green-600 text-center transition"
          >
            View Services
          </Link>
        </div>
      </div>

    </section>
  );
}