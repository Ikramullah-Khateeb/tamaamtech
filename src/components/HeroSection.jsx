"use client";

import { useEffect, useState } from "react";
import Popup from "./Popup";
import { FiArrowRight } from "react-icons/fi";
import Link from "next/link";

const CARDS = [
  { label: "Landing Page Websites", url: "landingpage-studio.ae" },
  { label: "E-Commerce Websites", url: "webapp.platform.io" },
  { label: "Single Page Websites", url: "portfolio-showcase.design" },
  { label: "Web Applications", url: "startup-saas.io" },
];

const AVATAR_COLORS = ["#065f46", "#047857", "#059669", "#10b981"];

function BrowserBar({ url }) {
  return (
    <div className="flex items-center gap-1.5 mb-3">
      <span className="w-2 h-2 rounded-full bg-[#ff5f57]" />
      <span className="w-2 h-2 rounded-full bg-[#febe2e]" />
      <span className="w-2 h-2 rounded-full bg-[#01cb58]" />
      <span className="ml-2 font-mono text-[8px] truncate text-white/30">{url}</span>
    </div>
  );
}

function CardPreview({ index }) {
  const mod = index % 4;

  if (mod === 0) {
    return (
      <div className="space-y-2">
        <div className="h-2.5 rounded w-3/4 bg-white/20" />
        <div className="h-1.5 rounded w-1/2 bg-white/10" />
        <div className="flex gap-2 mt-3">
          <div className="h-6 w-20 rounded bg-linear-to-br from-[#01cb58] to-[#00a346]" />
          <div className="h-6 w-16 rounded border border-[rgba(1,203,88,0.3)] bg-[rgba(1,203,88,0.08)]" />
        </div>
        <div className="grid grid-cols-3 gap-1.5 mt-3">
          {[0, 1, 2].map((i) => (
            <div key={i} className="h-10 rounded bg-white/[0.07] border border-[rgba(1,203,88,0.15)]" />
          ))}
        </div>
      </div>
    );
  }

  if (mod === 1) {
    return (
      <div className="space-y-2">
        <div className="flex gap-1.5">
          {[0, 1, 2].map((i) => (
            <div key={i} className="flex-1 h-12 rounded flex flex-col items-center justify-end pb-1.5 gap-1 bg-white/[0.07] border border-white/10">
              <div className={`w-5 h-1.5 rounded ${i === 1 ? "bg-[#01cb58]" : "bg-[rgba(1,203,88,0.35)]"}`} />
              <div className="w-4 h-1 rounded bg-white/20" />
            </div>
          ))}
        </div>
        <div className="h-1 w-full rounded bg-linear-to-r from-[#01cb58] to-transparent" />
        <div className="flex justify-between items-center mt-1">
          <div className="h-2 w-1/3 rounded bg-white/10" />
          <div className="h-5 w-16 rounded text-[7px] font-bold flex items-center justify-center bg-[#01cb58] text-black">
            Add Cart
          </div>
        </div>
      </div>
    );
  }

  if (mod === 2) {
    return (
      <div className="space-y-2">
        <div className="flex items-center justify-between mb-1">
          <div className="h-2 w-8 rounded bg-[#01cb58]" />
          <div className="flex gap-1.5">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-1.5 w-5 rounded bg-white/10" />
            ))}
          </div>
        </div>
        <div className="h-8 w-full rounded bg-[rgba(1,203,88,0.08)] border border-[rgba(1,203,88,0.25)]" />
        <div className="grid grid-cols-2 gap-1.5">
          <div className="h-7 rounded bg-white/[0.07] border border-white/10" />
          <div className="h-7 rounded bg-[rgba(1,203,88,0.1)] border border-[rgba(1,203,88,0.25)]" />
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      <div className="flex items-end gap-1 h-14">
        {[45, 70, 55, 85, 60].map((h, i) => (
          <div
            key={i}
            className={`flex-1 rounded-t ${i === 3
              ? "bg-linear-to-t from-[#00a346] to-[#01cb58] shadow-[0_0_12px_rgba(1,203,88,0.5)]"
              : "bg-white/10"
              }`}
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
      <div className="h-px bg-white/10" />
      <div className="flex justify-between">
        <div className="h-1.5 w-1/4 rounded bg-white/10" />
        <div className="h-1.5 w-1/5 rounded bg-[rgba(1,203,88,0.6)]" />
      </div>
    </div>
  );
}

function ServiceCard({ card, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`relative rounded-2xl overflow-hidden cursor-pointer border transition-all duration-300 bg-[rgba(18,18,18,0.97)] 
        ${hovered
          ? "border-[rgba(1,203,88,0.6)] -translate-y-1"
          : "border-white/10"
        }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className={`flex items-center justify-between px-3 py-2.5 transition-colors duration-300 ${hovered
          ? "bg-linear-to-r from-[#01cb58] to-[#00a346]"
          : "bg-linear-to-r from-[#00a346] to-[#007a35]"
          }`}
      >
        <span className="text-[10px] font-bold tracking-widest text-black uppercase">
          {card.label}
        </span>
        <span className="text-black/50 text-sm">→</span>
      </div>

      <div className="px-4 pt-4 pb-5 min-h-45">
        <BrowserBar url={card.url} />
        <CardPreview index={index} />
      </div>

      {hovered && (
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(1,203,88,0.06),transparent_70%)]" />
      )}
    </div>
  );
}

export default function HeroSection() {
  const [visible, setVisible] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative overflow-hidden px-4 sm:px-6 pt-24 sm:pt-28 bg-white">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow+Condensed:wght@600;700;800&family=Barlow:wght@300;400;500;600&display=swap');

        @keyframes scroll-up {
          from { transform: translateY(0); }
          to   { transform: translateY(-50%); }
        }
        @keyframes scroll-down {
          from { transform: translateY(-50%); }
          to   { transform: translateY(0); }
        }
        @keyframes shimmer-green {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        @keyframes badge-glow {
          0%,100% { box-shadow: 0 0 0 0 rgba(1,203,88,.35); }
          50%      { box-shadow: 0 0 0 7px rgba(1,203,88,0); }
        }

        .hero-font-body    { font-family: 'Barlow', sans-serif; }
        .hero-font-heading { font-family: 'Barlow Condensed', 'Barlow', sans-serif; }

        .hero-shimmer {
          background: linear-gradient(90deg,#00a346 0%,#000 30%,#01cb58 50%,#000 70%,#00a346 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer-green 5s linear infinite;
        }
        .hero-badge-glow {
          animation: badge-glow 2.8s ease-in-out infinite;
        }
        .hero-scroll-up {
          animation: scroll-up 40s linear infinite;
        }
        .hero-scroll-down {
          animation: scroll-down 40s linear infinite;
        }
      `}</style>

      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right,rgba(0,0,0,0.05) 1px,transparent 1px),linear-gradient(to bottom,rgba(0,0,0,0.05) 1px,transparent 1px)",
          backgroundSize: "55px 55px",
        }}
      />

      <div className="absolute top-[-10%] right-[-5%] w-[55%] h-[80%] pointer-events-none bg-[radial-gradient(ellipse_60%_50%_at_70%_40%,rgba(1,203,88,0.08)_0%,transparent_65%)]" />
      <div className="absolute bottom-[-5%] left-[-5%] w-[40%] h-[55%] pointer-events-none bg-[radial-gradient(ellipse_at_20%_80%,rgba(1,203,88,0.05)_0%,transparent_60%)]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div
          className={`grid grid-cols-1 min-[840px]:grid-cols-[1fr_320px] lg:grid-cols-2 gap-6 lg:gap-16 items-start transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
        >

          {/* ── LEFT: Text content ── */}
          <div className="flex flex-col gap-3 sm:gap-2 pb-12 pt-20 hero-font-body items-center text-center min-[840px]:items-start min-[840px]:text-left">
            <div className="hero-badge-glow inline-flex w-fit items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-[rgba(1,203,88,0.08)] border border-[rgba(1,203,88,0.35)] text-[#00a346] mb-2 sm:mb-1">
              Our Web Development – Fast, Scalable &amp; Maintainable.
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.15] tracking-tight text-gray-900 hero-font-heading mt-1 mb-2 sm:mb-1">
              Web Design{" "}
              <span className="relative inline-block">
                <span className="absolute inset-0 blur-xl rounded-full bg-[rgba(1,203,88,0.2)]" />
                <span className="hero-shimmer italic pr-2">Company</span>
              </span>
              <br className="hidden sm:block" />
              {" "}in Dubai
            </h1>

            <p className="text-sm sm:text-base mb-4 sm:mb-3 md:text-lg lg:text-xl max-w-xl font-medium leading-relaxed text-gray-500">
              Tamaam Technologies is Dubai&apos;s leading web design company, with{" "}
              <span className="text-[#00a346] font-semibold">15 years of expertise</span> in
              cutting-edge website design, web development, custom WordPress, scalable
              eCommerce, branding, and results-driven SEO services.
            </p>

            <div className="flex flex-wrap gap-5 mb-3 pt-1">
              <button
                onClick={() => setShowPopup(true)}
                className="px-8 py-4 rounded-xl inline-flex items-center gap-2 text-base font-bold text-white 
                bg-linear-to-br from-[#01cb58] to-[#00a346] 
                shadow-[0_4px_24px_rgba(1,203,88,0.35)] 
                transition-all duration-300 
                hover:shadow-[0_8px_40px_rgba(1,203,88,0.6)] 
                hover:-translate-y-1 hover:scale-[1.03] active:scale-[0.98]"
              >
                Start your project
                <FiArrowRight className="text-xl transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <Link
                href="/services"
                className="px-8 py-4 rounded-xl text-base font-semibold 
                border-[1.5px] border-[rgba(1,203,88,0.5)] text-[#00a346] 
                transition-all duration-300 inline-flex items-center justify-center
                hover:bg-[rgba(1,203,88,0.06)] 
                hover:border-[#01cb58] hover:-translate-y-0.5"
              >
                Explore Services
              </Link>
            </div>

            <div className="flex items-center gap-3 pt-1">
              <div className="flex -space-x-2">
                {AVATAR_COLORS.map((color, i) => (
                  <div
                    key={i}
                    className="w-7 h-7 rounded-full border-2 border-white flex items-center justify-center text-white text-[9px] font-bold"
                    style={{ background: color, zIndex: 4 - i }}
                  >
                    {String.fromCharCode(65 + i * 4)}
                  </div>
                ))}
              </div>
              <span className="text-sm font-medium text-gray-400">
                Trusted by{" "}
                <span className="text-[#00a346] font-semibold">200+ businesses</span> across UAE
              </span>
            </div>
          </div>

          {/* ── RIGHT SECTION ── */}
          <div className="hidden min-[840px]:block h-175 overflow-hidden">

            {/* 840px–1023px → 1 scrolling column */}
            <div className="block lg:hidden h-full overflow-hidden">
              <div className="flex flex-col gap-4 hero-scroll-up">
                {[...CARDS, ...CARDS].map((card, i) => (
                  <ServiceCard key={i} card={card} index={i} />
                ))}
              </div>
            </div>

            {/* ≥1024px → 2 scrolling columns */}
            <div className="hidden lg:grid grid-cols-2 gap-4 h-full">
              <div className="relative h-full overflow-hidden">
                <div className="flex flex-col gap-4 hero-scroll-up">
                  {[...CARDS, ...CARDS].map((card, i) => (
                    <ServiceCard key={i} card={card} index={i} />
                  ))}
                </div>
              </div>
              <div className="relative h-full overflow-hidden">
                <div className="flex flex-col gap-4 hero-scroll-down">
                  {[...CARDS, ...CARDS].map((card, i) => (
                    <ServiceCard key={i} card={card} index={i} />
                  ))}
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Popup Modal */}
      {showPopup && <Popup onClose={() => setShowPopup(false)} />}

    </section>
  );
}