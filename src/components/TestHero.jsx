"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const ROLES = [
  "AI Engineering.",
  "Penetration Testing.",
  "Cloud Architecture.",
  "Cybersecurity Audits.",
];

export default function TestHero() {
  const canvasRef = useRef(null);
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  /* ── Orb canvas ── */
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

    const orbs = [
      { x: 0.75, y: 0.25, r: 320, color: "34,197,94", speed: 0.0004 },
      { x: 0.85, y: 0.65, r: 240, color: "16,185,129", speed: 0.0006 },
      { x: 0.6,  y: 0.1,  r: 180, color: "74,222,128", speed: 0.0005 },
    ];

    let t = 0;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      t += 1;

      orbs.forEach((orb, i) => {
        const ox = (orb.x + Math.sin(t * orb.speed + i) * 0.07) * canvas.width;
        const oy = (orb.y + Math.cos(t * orb.speed + i) * 0.07) * canvas.height;

        const grad = ctx.createRadialGradient(ox, oy, 0, ox, oy, orb.r);
        grad.addColorStop(0, `rgba(${orb.color},0.18)`);
        grad.addColorStop(1, `rgba(${orb.color},0)`);

        ctx.beginPath();
        ctx.arc(ox, oy, orb.r, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();
      });

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  /* ── Typewriter ── */
  useEffect(() => {
    const current = ROLES[roleIndex];
    let timeout;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 35);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  /* ── Scroll parallax ── */
  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const stats = [
    { value: "200+", label: "Projects" },
    { value: "99.9%", label: "Uptime" },
    { value: "50+", label: "Clients" },
  ];

  const alerts = [
    { type: "success", msg: "Threat neutralised — 03:42 AM", icon: "✓" },
    { type: "warn",    msg: "Anomaly detected — scanning…",  icon: "⚠" },
    { type: "info",    msg: "AI model deployed — v2.4.1",    icon: "↑" },
  ];

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-white flex flex-col">

      {/* Orb canvas — right half only */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full z-0 pointer-events-none"
      />

      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 z-1 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.08) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Main content — split */}
      <div className="relative z-10 flex-1 grid lg:grid-cols-2 gap-12 items-center px-6 sm:px-10 lg:px-16 py-16 lg:py-0 min-h-[calc(100vh-80px)]">

        {/* LEFT — Copy */}
        <div className="flex flex-col justify-center">

          {/* Heading */}
          <h1 className="font-black text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-none tracking-tight text-gray-900 mb-4 pt-24">
            We Build The<br />
            Backbone of<br />
            <span className="text-green-600">
              {displayed}
              <span className="animate-pulse">|</span>
            </span>
          </h1>

          {/* Sub */}
          <p className="text-gray-500 text-base sm:text-lg max-w-md mt-4 mb-10 leading-relaxed">
            Enterprise-grade AI systems, red-team security testing, and cloud infrastructure — engineered to protect and scale your business.
          </p>

          {/* CTA row */}
          <div className="flex flex-col sm:flex-row gap-3 mb-14">
            <button className="px-7 py-3.5 bg-gray-900 text-white font-semibold text-sm rounded-xl hover:bg-green-600 transition-colors duration-300 shadow-lg shadow-gray-900/10">
              Start a Project →
            </button>
            <Link
              href="#services"
              className="px-7 py-3.5 border border-gray-200 text-gray-700 font-semibold text-sm rounded-xl hover:border-green-500 hover:text-green-600 transition text-center bg-white/60 backdrop-blur-sm"
            >
              View Services
            </Link>
          </div>

        </div>

        {/* RIGHT — Floating dashboard card */}
        <div
          className="hidden lg:flex items-center justify-center"
          style={{ transform: `translateY(${scrollY * -0.05}px)` }}
        >
          <div className="w-full max-w-sm rounded-2xl border border-gray-100 bg-white/80 backdrop-blur-md shadow-2xl shadow-gray-200/60 overflow-hidden">

            {/* Card header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
              <div>
                <p className="font-bold text-sm text-gray-800">Security Dashboard</p>
                <p className="text-xs text-gray-400 mt-0.5">Live threat monitoring</p>
              </div>
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
              </div>
            </div>

            {/* Threat meter */}
            <div className="px-5 py-4 border-b border-gray-100">
              <div className="flex justify-between text-xs text-gray-500 mb-2">
                <span>Threat Level</span>
                <span className="text-green-600 font-semibold">LOW — 4%</span>
              </div>
              <div className="w-full h-1.5 rounded-full bg-gray-100">
                <div className="h-1.5 rounded-full bg-linear-to-r from-green-400 to-green-600 w-[4%]" />
              </div>
            </div>

            {/* AI score ring + metrics */}
            <div className="px-5 py-4 flex items-center gap-5 border-b border-gray-100">
              <div className="relative w-16 h-16 shrink-0">
                <svg viewBox="0 0 64 64" className="w-full h-full -rotate-90">
                  <circle cx="32" cy="32" r="26" fill="none" stroke="#f3f4f6" strokeWidth="6" />
                  <circle
                    cx="32" cy="32" r="26"
                    fill="none" stroke="#16a34a" strokeWidth="6"
                    strokeDasharray={`${2 * Math.PI * 26 * 0.94} ${2 * Math.PI * 26}`}
                    strokeLinecap="round"
                  />
                </svg>
                <span className="absolute inset-0 flex items-center justify-center font-black text-sm text-gray-800">94</span>
              </div>
              <div className="flex-1 grid grid-cols-2 gap-3">
                {[
                  { label: "Requests/s", val: "12.4k" },
                  { label: "Blocked",    val: "1,203" },
                  { label: "AI Score",   val: "94/100" },
                  { label: "Latency",    val: "18ms" },
                ].map((m) => (
                  <div key={m.label} className="bg-gray-50 rounded-lg px-2.5 py-2">
                    <p className="text-[10px] text-gray-400">{m.label}</p>
                    <p className="font-bold text-xs text-gray-800 mt-0.5">{m.val}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Alert feed */}
            <div className="px-5 py-3 space-y-2.5">
              {alerts.map((a, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0
                    ${a.type === "success" ? "bg-green-100 text-green-700" :
                      a.type === "warn"    ? "bg-yellow-100 text-yellow-700" :
                                             "bg-blue-100 text-blue-700"}`}
                  >
                    {a.icon}
                  </div>
                  <p className="text-[11px] text-gray-500 leading-snug">{a.msg}</p>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="px-5 py-3 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
              <span className="text-[10px] text-gray-400 font-mono">POWERED BY TECHCORE AI</span>
              <span className="text-[10px] text-green-600 font-semibold">● All systems normal</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}