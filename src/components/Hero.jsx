import React from 'react'
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0a0f1e] dots-bg">
      {/* Background glows */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-[#7b2ff7]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-[#00d4ff]/15 rounded-full blur-3xl pointer-events-none" />

      {/* Animated rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] border border-[#00d4ff]/5 rounded-full animate-[spin_30s_linear_infinite]" />
        <div className="absolute w-[800px] h-[800px] border border-[#7b2ff7]/5 rounded-full animate-[spin_45s_linear_infinite_reverse]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="flex flex-col gap-6 animate-[fadeUp_0.8s_ease_forwards]">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00d4ff]/30 bg-[#00d4ff]/5 text-[#00d4ff] text-sm font-medium w-fit">
              <span className="w-2 h-2 rounded-full bg-[#00d4ff] animate-pulse" />
              AI-Powered Digital Solutions
            </div>


            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-heading font-black leading-tight text-white">
              Transform Your{' '}
              <span className="gradient-text">Business</span>{' '}
              with Technology
            </h1>

            <p className="text-slate-400 text-lg leading-relaxed max-w-lg">
              We lead in digital innovation, cybersecurity, and cloud security —
              helping businesses scale with AI-powered, cloud-secure solutions
              built for the modern world.
            </p>

            <div className="flex flex-wrap gap-4 mt-2">
              <Link
                href="#services"
                className="px-7 py-4 rounded-xl bg-gradient-to-r from-[#00d4ff] to-[#7b2ff7] text-white font-semibold text-base shadow-xl shadow-[#7b2ff7]/20 hover:shadow-[#7b2ff7]/40 hover:scale-105 transition-all duration-300"
              >
                Explore Services
              </Link>
              <Link
                href="#about"
                className="px-7 py-4 rounded-xl border border-white/15 text-white font-semibold text-base hover:border-[#00d4ff]/50 hover:bg-[#00d4ff]/5 transition-all duration-300"
              >
                Learn More
              </Link>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 mt-4 pt-6 border-t border-white/8">
              {[
                { num: '200+', label: 'Projects Delivered' },
                { num: '50+', label: 'Global Clients' },
                { num: '5+', label: 'Years Experience' },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-heading font-black gradient-text">{stat.num}</p>
                  <p className="text-slate-400 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right visual */}
          <div className="relative hidden lg:flex items-center justify-center">
            <div className="relative w-[420px] h-[420px]">
              {/* Central orb */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-56 h-56 rounded-full bg-gradient-to-br from-[#00d4ff]/20 to-[#7b2ff7]/30 flex items-center justify-center border border-white/10 glass-card animate-[float_6s_ease-in-out_infinite]">
                  <div className="w-36 h-36 rounded-full bg-gradient-to-br from-[#00d4ff] to-[#7b2ff7] opacity-80 blur-sm" />
                  <div className="absolute text-6xl">⚡</div>
                </div>
              </div>

              {/* Orbiting icons */}
              {[
                { icon: '🤖', angle: 0, label: 'AI' },
                { icon: '☁️', angle: 72, label: 'Cloud' },
                { icon: '🔒', angle: 144, label: 'Security' },
                { icon: '📱', angle: 216, label: 'Mobile' },
                { icon: '🌐', angle: 288, label: 'Web' },
              ].map((item) => {
                const rad = (item.angle * Math.PI) / 180;
                const r = 165;
                const x = 210 + r * Math.cos(rad);
                const y = 210 + r * Math.sin(rad);
                return (
                  <div
                    key={item.label}
                    className="absolute -translate-x-1/2 -translate-y-1/2 glass-card border-gradient rounded-2xl w-16 h-16 flex flex-col items-center justify-center gap-1 card-hover"
                    style={{ left: x, top: y }}
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <span className="text-[10px] text-slate-400">{item.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0a0f1e] to-transparent" />
    </section>
  );
}
