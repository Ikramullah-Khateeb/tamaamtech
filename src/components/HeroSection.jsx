"use client";

import { useEffect, useState } from "react";

/* ── Animated counter ── */
function Counter({ target, suffix = "" }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const increment = target / (1200 / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [target]);
  return <span>{count}{suffix}</span>;
}

/* ── Browser chrome ── */
function BrowserBar({ url }) {
  return (
    <div className="flex items-center gap-1.5 mb-3">
      <span className="w-2 h-2 rounded-full bg-[#ff5f57]" />
      <span className="w-2 h-2 rounded-full bg-[#febe2e]" />
      <span className="w-2 h-2 rounded-full bg-[#01cb58]" />
      <span className="ml-2 font-mono text-[8px] truncate text-black/30">{url}</span>
    </div>
  );
}

/* ── Card Previews ── */
function LandingPreview() {
  return (
    <div className="space-y-2">
      <div className="h-2.5 rounded w-3/4 bg-white/20" />
      <div className="h-1.5 rounded w-1/2 bg-white/0.12" />
      <div className="flex gap-2 mt-3">
        <div className="h-6 w-20 rounded bg-linear-to-br from-[#01cb58] to-[#00a346]" />
        <div className="h-6 w-16 rounded border border-[rgba(1,203,88,0.3)] bg-[rgba(1,203,88,0.08)]" />
      </div>
      <div className="grid grid-cols-3 gap-1.5 mt-3">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="h-10 rounded bg-white/[0.07] border border-[rgba(1,203,88,0.15)]" />
        ))}
      </div>
    </div>
  );
}

function EcomPreview() {
  return (
    <div className="space-y-2">
      <div className="flex gap-1.5">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex-1 h-12 rounded flex flex-col items-center justify-end pb-1.5 gap-1 bg-white/[0.07] border border-white/10">
            <div className={`w-5 h-1.5 rounded ${i === 1 ? "bg-[#01cb58]" : "bg-[rgba(1,203,88,0.35)]"}`} />
            <div className="w-4 h-1 rounded bg-white/20" />
          </div>
        ))}
      </div>
      <div className="h-1 w-full rounded bg-linear-to-r from-[#01cb58] to-transparent" />
      <div className="flex justify-between items-center mt-1">
        <div className="h-2 w-1/3 rounded bg-white/0.15" />
        <div className="h-5 w-16 rounded text-[7px] font-bold flex items-center justify-center bg-[#01cb58] text-black">
          Add Cart
        </div>
      </div>
    </div>
  );
}

function SinglePagePreview() {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between mb-1">
        <div className="h-2 w-8 rounded bg-[#01cb58]" />
        <div className="flex gap-1.5">
          {[1, 2, 3].map(i => (
            <div key={i} className="h-1.5 w-5 rounded bg-white/0.15" />
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

function WebAppPreview() {
  const bars = [45, 70, 55, 85, 60];
  return (
    <div className="space-y-2">
      <div className="flex items-end gap-1 h-14">
        {bars.map((h, i) => (
          <div
            key={i}
            className={`flex-1 rounded-t ${i === 3
                ? "bg-linear-to-t from-[#00a346] to-[#01cb58] shadow-[0_0_12px_rgba(1,203,88,0.5)]"
                : "bg-white/0.12"
              }`}
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
      <div className="h-px bg-white/0.12" />
      <div className="flex justify-between">
        <div className="h-1.5 w-1/4 rounded bg-white/0.15" />
        <div className="h-1.5 w-1/5 rounded bg-[rgba(1,203,88,0.6)]" />
      </div>
    </div>
  );
}

const CARDS = [
  { label: "Landing Page Websites", url: "landingpage-studio.ae", floatClass: "animate-float-a", Preview: LandingPreview },
  { label: "E-Commerce Websites", url: "webapp.platform.io", floatClass: "animate-float-b", Preview: EcomPreview },
  { label: "Single Page Websites", url: "portfolio-showcase.design", floatClass: "animate-float-c", Preview: SinglePagePreview },
  { label: "Web Applications", url: "startup-saas.io", floatClass: "animate-float-d", Preview: WebAppPreview },
];

function ServiceCard({ card, visible, idx }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`
        ${card.floatClass}
        relative rounded-2xl overflow-hidden cursor-pointer border
        transition-all duration: 450ms ease-[cubic-bezier(0.22,1,0.36,1)]
        ${hovered
          ? "bg-[rgba(10,10,10,0.96)] border-[rgba(1,203,88,0.6)] shadow-[0_12px_48px_rgba(1,203,88,0.18),0_4px_20px_rgba(0,0,0,0.18)] -translate-y-1.5 scale-[1.018]"
          : "bg-[rgba(18,18,18,0.94)] border-black/0.12 shadow-[0_4px_24px_rgba(0,0,0,0.1),0_1px_4px_rgba(0,0,0,0.06)]"
        }
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
      `}
      style={{ transitionDelay: visible ? `${0.35 + idx * 0.1}s` : "0s" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Card header */}
      <div className={`flex items-center justify-between px-3 sm:px-4 py-2 sm:py-2.5 transition-all duration-300 ${hovered
          ? "bg-linear-to-r from-[#01cb58] to-[#00a346]"
          : "bg-linear-to-r from-[#00a346] to-[#007a35]"
        }`}>
        <span className="text-[10px] sm:text-[11px] font-bold tracking-widest text-black"
          style={{ fontFamily: "'Bebas Neue','Barlow Condensed',sans-serif" }}>
          {card.label}
        </span>
        <span className="text-black/50 text-sm">→</span>
      </div>

      {/* Card body */}
      <div className="px-3 sm:px-4 pt-3 pb-3 sm:pb-4">
        <BrowserBar url={card.url} />
        <card.Preview />
      </div>

      {/* Hover glow overlay */}
      {hovered && (
        <div className="absolute inset-0 pointer-events-none rounded-2xl bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(1,203,88,0.08),transparent_70%)]" />
      )}
    </div>
  );
}

/* ══════════════════════════════════════════
   MAIN HERO
   ══════════════════════════════════════════ */
export default function HeroSection() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative overflow-hidden px-4 sm:px-6 pt-24 sm:pt-36 md:pt-52 pb-14 sm:pb-20 md:pb-28 bg-white">

      {/*
        ── Add to tailwind.config.js → theme.extend ──

        keyframes: {
          'float-a': { '0%,100%': { transform: 'translateY(0) rotate(0deg)' },   '50%': { transform: 'translateY(-10px) rotate(0.3deg)' } },
          'float-b': { '0%,100%': { transform: 'translateY(0)' },                 '50%': { transform: 'translateY(-7px) rotate(-0.2deg)' } },
          'float-c': { '0%,100%': { transform: 'translateY(0)' },                 '50%': { transform: 'translateY(-12px)' } },
          'float-d': { '0%,100%': { transform: 'translateY(0)' },                 '50%': { transform: 'translateY(-8px) rotate(0.35deg)' } },
          'shimmer-green': { '0%': { backgroundPosition: '-200% center' }, '100%': { backgroundPosition: '200% center' } },
          'badge-glow':    { '0%,100%': { boxShadow: '0 0 0 0 rgba(1,203,88,0.35)' }, '50%': { boxShadow: '0 0 0 7px rgba(1,203,88,0)' } },
          'live-dot':      { '0%,100%': { opacity: '0.7', transform: 'scale(1)' },     '50%': { opacity: '1', transform: 'scale(1.3)' } },
        },
        animation: {
          'float-a':       'float-a 7s ease-in-out infinite',
          'float-b':       'float-b 8.5s ease-in-out infinite 0.9s',
          'float-c':       'float-c 6.5s ease-in-out infinite 0.4s',
          'float-d':       'float-d 9s ease-in-out infinite 1.3s',
          'shimmer-green': 'shimmer-green 5s linear infinite',
          'badge-glow':    'badge-glow 2.8s ease-in-out infinite',
          'live-dot':      'live-dot 2s ease-in-out infinite',
        },
      */}

      {/* Keyframe fallback — remove once tailwind.config.js is updated */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow+Condensed:wght@600;700;800&family=Barlow:wght@300;400;500;600&display=swap');

        @keyframes float-a { 0%,100%{transform:translateY(0) rotate(0deg)} 50%{transform:translateY(-10px) rotate(.3deg)} }
        @keyframes float-b { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-7px) rotate(-.2deg)} }
        @keyframes float-c { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }
        @keyframes float-d { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px) rotate(.35deg)} }
        .animate-float-a { animation: float-a 7s ease-in-out infinite; }
        .animate-float-b { animation: float-b 8.5s ease-in-out infinite 0.9s; }
        .animate-float-c { animation: float-c 6.5s ease-in-out infinite 0.4s; }
        .animate-float-d { animation: float-d 9s ease-in-out infinite 1.3s; }

        @keyframes shimmer-green {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        .shimmer-text {
          background: linear-gradient(90deg,#00a346 0%,#000 30%,#01cb58 50%,#000 70%,#00a346 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer-green 5s linear infinite;
        }

        @keyframes badge-glow {
          0%,100% { box-shadow: 0 0 0 0 rgba(1,203,88,.35); }
          50%      { box-shadow: 0 0 0 7px rgba(1,203,88,0); }
        }
        .animate-badge-glow { animation: badge-glow 2.8s ease-in-out infinite; }

        @keyframes live-dot {
          0%,100% { opacity:.7; transform:scale(1); }
          50%      { opacity:1;  transform:scale(1.3); }
        }
        .animate-live-dot { animation: live-dot 2s ease-in-out infinite; }
      `}</style>

      {/* ── Grid background ── */}
      <div className="absolute inset-0 opacity-20 pointer-events-none [background-image:linear-linear(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] background-size:55px_55px" />

      {/* ── Radial glows ── */}
      <div className="absolute top-[-10%] right-[-5%] w-[55%] h-[80%] pointer-events-none bg-[radial-gradient(ellipse_60%_50%_at_70%_40%,rgba(1,203,88,0.08)_0%,transparent_65%)]" />
      <div className="absolute bottom-[-5%] left-[-5%] w-[40%] h-[55%] pointer-events-none bg-[radial-gradient(ellipse_at_20%_80%,rgba(1,203,88,0.05)_0%,transparent_60%)]" />

      {/* ── Main content ── */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center transition-all duration-750ms ease-[cubic-bezier(0.22,1,0.36,1)] ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}>

          {/* ════ LEFT ════ */}
          <div className="flex flex-col gap-5 sm:gap-6" style={{ fontFamily: "'Barlow',sans-serif" }}>

            {/* Badge */}
            <div className="inline-flex w-fit">
              <div className="animate-badge-glow inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium bg-[rgba(1,203,88,0.08)] border border-[rgba(1,203,88,0.35)] text-[#00a346]">
                <span className="animate-live-dot w-1.5 h-1.5 rounded-full inline-block bg-[#01cb58] shadow-[0_0_7px_#01cb58]" />
                Our Web Development – Fast, Scalable &amp; Maintainable.
              </div>
            </div>

            {/* Headline */}
            <h1
              className="mt-6 text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-[-0.5px] text-gray-900"
              style={{ fontFamily: "'Barlow Condensed','Barlow',sans-serif" }}
            >
              Web Design{" "}
              <span className="relative inline-block">
                <span className="absolute inset-0 blur-xl rounded-full bg-[rgba(1,203,88,0.2)]" />
                <span className="shimmer-text italic pr-2">Company</span>
              </span>
              <br className="hidden sm:block" />
              {" "}in Dubai
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base md:text-lg lg:text-[22px] max-w-4xl font-medium leading-relaxed text-gray-500">
              Tamaam Technologies is Dubai&apos;s leading web design company, with{" "}
              <span className="text-[#00a346] font-semibold">15 years of expertise</span> in
              cutting-edge website design, web development, custom WordPress, scalable
              eCommerce, branding, and results-driven SEO services.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 pt-1">
              <button
                className="
                    px-5 sm:px-7 py-1.5 sm:py-3 rounded-xl
                    inline-flex items-center gap-2
                    text-sm sm:text-base font-bold text-white
                    bg-linear-to-br from-[#01cb58] to-[#00a346]
                    shadow-[0_4px_24px_rgba(1,203,88,0.35),inset_0_1px_0_rgba(255,255,255,0.25)]
                    transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]

                    hover:from-[#00e66a] hover:to-[#00b84d]
                    hover:shadow-[0_8px_40px_rgba(1,203,88,0.6),inset_0_1px_0_rgba(255,255,255,0.3)]
                    hover:-translate-y-1 hover:scale-[1.03]
                    active:scale-[0.98]
                  "
              >
                Start your project
              </button>
              <button className="
                px-5 sm:px-7 py-1.5 sm:py-3 rounded-xl
                text-sm sm:text-base font-semibold
                bg-transparent border-[1.5px] border-[rgba(1,203,88,0.5)] text-[#00a346]
                transition-all duration-300
                hover:bg-[rgba(1,203,88,0.06)] hover:border-[#01cb58] hover:-translate-y-0.5
              ">
                Explore Services
              </button>
            </div>

            {/* Trust row */}
            <div className="flex items-center gap-3 pt-1">
              <div className="flex -space-x-2">
                {["#065f46", "#047857", "#059669", "#10b981"].map((c, i) => (
                  <div
                    key={i}
                    className="w-7 h-7 rounded-full border-2 border-white flex items-center justify-center text-white text-[9px] font-bold"
                    style={{ background: c, zIndex: 4 - i }}
                  >
                    {String.fromCharCode(65 + i * 4)}
                  </div>
                ))}
              </div>
              <span className="text-xs sm:text-sm font-medium text-gray-400">
                Trusted by{" "}
                <span className="text-[#00a346] font-semibold">200+ businesses</span> across UAE
              </span>
            </div>
          </div>

          {/* ════ RIGHT: Cards ════ */}
          <div className="relative mt-8 lg:mt-0">
            {/* Glow behind cards */}
            <div className="absolute inset-0 pointer-events-none scale-110 blur-3xl bg-[radial-gradient(ellipse_70%_65%_at_55%_50%,rgba(1,203,88,0.12)_0%,transparent_68%)]" />

            <div className="relative grid grid-cols-2 gap-3 sm:gap-4">
              {CARDS.map((card, idx) => (
                <ServiceCard key={card.label} card={card} visible={visible} idx={idx} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}