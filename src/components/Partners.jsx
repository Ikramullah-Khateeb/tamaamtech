"use client";

const partners = [
  {
    name: "Wix",
    svg: (
      <svg viewBox="0 0 80 36" width="72" height="32" xmlns="http://www.w3.org/2000/svg">
        <text x="4" y="28" fontSize="30" fontWeight="900" fontFamily="Georgia, 'Times New Roman', serif" fill="#0059FF" letterSpacing="-1">Wix</text>
      </svg>
    ),
  },
  {
    name: "WordPress",
    svg: (
      <svg viewBox="0 0 120 36" width="110" height="36" xmlns="http://www.w3.org/2000/svg">
        <circle cx="18" cy="18" r="16" fill="#21759B" />
        <path d="M18 4C10.27 4 4 10.27 4 18s6.27 14 14 14 14-6.27 14-14S25.73 4 18 4zM5.6 18c0-1.08.2-2.11.57-3.05L10.48 25.48A12.41 12.41 0 015.6 18zm12.4 12.4a12.41 12.41 0 01-2.39-.35l2.54-7.37 2.6 7.12a.41.41 0 00.03.06A12.42 12.42 0 0118 30.4zm1.16-12.39c.51-.03.97-.08.97-.08.46-.05.4-.72-.05-.7 0 0-1.37.11-2.25.11-.83 0-2.22-.11-2.22-.11-.46-.03-.51.67-.05.7 0 0 .43.05.89.08l1.31 3.6-1.85 5.54-3.07-9.14c.51-.03.97-.08.97-.08.46-.05.4-.72-.05-.7 0 0-1.37.11-2.25.11a9.35 9.35 0 01-.56-.02A12.41 12.41 0 0118 5.6c2.2 0 4.22.85 5.72 2.23a.38.38 0 00-.05-.01c-.83 0-1.42.72-1.42 1.5 0 .7.4 1.28.83 1.98.32.56.7 1.28.7 2.33 0 .72-.28 1.56-.64 2.73l-.84 2.81-3.13-9.31zm3.42 11.62l2.59-7.48c.48-1.2.64-2.17.64-3.02 0-.31-.02-.6-.06-.87A12.4 12.4 0 0130.4 18a12.41 12.41 0 01-3.81 7.03z" fill="white" transform="scale(0.9) translate(2,2)" />
        <text x="38" y="23" fontSize="13" fontWeight="700" fontFamily="'Helvetica Neue', Arial, sans-serif" fill="#21759B">WordPress</text>
      </svg>
    ),
  },
  {
    name: "Shopify",
    svg: (
      <svg viewBox="0 0 100 36" width="95" height="36" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(2, 4)">
          <path d="M20 3c-0.3 0-0.6 0.1-0.8 0.3C18.5 2.5 17.4 2 16 2c-2.8 0-4.5 2.8-5 5.3L8 8.3V26l12 2 12-2V9l-11.2-6h-0.8zM16 4c0.9 0 1.7 0.4 2.2 1L15 6.5C15.5 5 15.8 4 16 4zM14 8.5l6-2.5c-0.1 1.5-0.4 3.5-1 5.5-0.4 0-0.9-0.1-1-0.1C18 11.4 18 11.2 18 11c0-1.1-0.9-2-2-2s-2 0.9-2 2c0 1.1 0.9 2 2 2 0.1 0 0.6 0 1 0.1V16H14V8.5z" fill="#96BF48" />
        </g>
        <text x="32" y="23" fontSize="14" fontWeight="700" fontFamily="'Helvetica Neue', Arial, sans-serif" fill="#96BF48" letterSpacing="0.3">Shopify</text>
      </svg>
    ),
  },
  {
    name: "Google",
    svg: (
      <svg viewBox="0 0 100 36" width="95" height="36" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(2, 4)">
          <path d="M14 5.38C9.58 5.38 6 8.96 6 13.38s3.58 8 8 8c3.83 0 7-2.71 7-8h-7v3h3.75c-.4 1.95-2.1 3-3.75 3-2.49 0-4.5-2.01-4.5-4.5S11.51 10.5 14 10.5c1.24 0 2.36.46 3.22 1.21l2.23-2.23C18.12 8.15 16.19 7.38 14 7.38c-3.59 0-6.62 2.1-8 5.13" fill="#EA4335" />
        </g>
        <text x="32" y="23" fontSize="15" fontWeight="400" fontFamily="'Product Sans', 'Google Sans', Arial, sans-serif" fill="#5F6368">
          <tspan fill="#4285F4">G</tspan>
          <tspan fill="#EA4335">o</tspan>
          <tspan fill="#FBBC05">o</tspan>
          <tspan fill="#4285F4">g</tspan>
          <tspan fill="#34A853">l</tspan>
          <tspan fill="#EA4335">e</tspan>
        </text>
      </svg>
    ),
  },
  {
    name: "Amazon",
    svg: (
      <svg viewBox="0 0 110 36" width="100" height="36" xmlns="http://www.w3.org/2000/svg">
        <text x="4" y="22" fontSize="16" fontWeight="800" fontFamily="'Amazon Ember', 'Helvetica Neue', Arial, sans-serif" fill="#232F3E" letterSpacing="0.5">amazon</text>
        <path d="M4 28 Q35 20 70 28" stroke="#FF9900" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M65 25 L70 28 L63 29" fill="#FF9900" />
      </svg>
    ),
  },
  {
    name: "Microsoft",
    svg: (
      <svg viewBox="0 0 120 36" width="115" height="36" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="6" width="11" height="11" fill="#F25022" />
        <rect x="17" y="6" width="11" height="11" fill="#7FBA00" />
        <rect x="4" y="19" width="11" height="11" fill="#00A4EF" />
        <rect x="17" y="19" width="11" height="11" fill="#FFB900" />
        <text x="35" y="23" fontSize="13" fontWeight="600" fontFamily="'Segoe UI', 'Helvetica Neue', Arial, sans-serif" fill="#737373" letterSpacing="0.2">Microsoft</text>
      </svg>
    ),
  },
  {
    name: "Apple",
    svg: (
      <svg viewBox="0 0 90 36" width="85" height="36" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(4, 2) scale(1.1)">
          <path d="M10.15 5.9c-.95 0-2.41-1.08-3.96-1.04C4.15 4.88 2.28 6.04 1.23 7.87-0.89 11.55.68 16.98 2.74 19.96c1.01 1.45 2.21 3.09 3.79 3.04 1.52-.07 2.09-.99 3.94-.99 1.83 0 2.35.99 3.96.95 1.64-.03 2.68-1.48 3.68-2.95 1.16-1.69 1.64-3.32 1.66-3.41-.04-.01-3.18-1.22-3.22-4.86C16.51 9.65 19.02 8.2 19.14 8.13 17.71 6.04 15.51 5.8 14.75 5.75c-2-.16-3.67 1.09-4.6 1.09zm3.38-2.07c.84-1.01 1.4-2.43 1.25-3.83-1.21.05-2.66.81-3.53 1.82-.78.9-1.45 2.34-1.27 3.71 1.34.1 2.71-.69 3.55-1.7z" fill="#1a1a2e" />
        </g>
        <text x="30" y="23" fontSize="14" fontWeight="500" fontFamily="'-apple-system', 'SF Pro Display', 'Helvetica Neue', Arial, sans-serif" fill="#1a1a2e" letterSpacing="0.3">Apple</text>
      </svg>
    ),
  },
  {
    name: "AWS",
    svg: (
      <svg viewBox="0 0 80 36" width="75" height="36" xmlns="http://www.w3.org/2000/svg">
        <text x="6" y="22" fontSize="18" fontWeight="800" fontFamily="'Amazon Ember', 'Helvetica Neue', Arial, sans-serif" fill="#232F3E" letterSpacing="2">aws</text>
        <path d="M4 30 Q37 22 70 30" stroke="#FF9900" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M65 27.5 L70 30 L63 31.5" fill="#FF9900" />
      </svg>
    ),
  },
];

const allPartners = [...partners, ...partners];

export default function Partners() {
  return (
    <section className="relative bg-white px-4 sm:px-6 py-14 sm:py-20 text-slate-800 overflow-hidden">

      {/* ── Green top accent line ── */}
      <div className="absolute top-0 left-0 right-0 h-0.75 bg-linear-to-r from-transparent via-[#01cb58] to-transparent opacity-70" />

      {/* ── Heading block ── */}
      <div className="relative z-10 text-center px-6 pb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold sm:font-bold leading-tight tracking-tight bg-linear-to-r from-[#20283f] to-[#01cb58] bg-clip-text text-transparent">
          Trusted by World's Leading Brands
        </h2>
        <p className="text-sm sm:text-base md:text-lg lg:text-[22px] max-w-4xl mx-auto py-4 font-medium text-slate-500">
          Collaborating with industry leaders to deliver exceptional results
        </p>
      </div>

      {/* ── Scrolling strip ── */}
      <div className="relative overflow-hidden ">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-40 bg-linear-to-r from-white to-transparent z-10 pointer-events-none" />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-40 bg-linear-to-l from-white to-transparent z-10 pointer-events-none" />

        <div
          className="flex items-center gap-4 w-max py-3 pb-4 animate-[scrollTrack_36s_linear_infinite]"
        >
          {allPartners.map((partner, i) => (
            <div
              key={`${partner.name}-${i}`}
              title={partner.name}
              className="
                flex items-center justify-center
                min-w-42.5 h-22.5 px-6
                rounded-[14px] bg-[#fafafa] border border-[#eeeeee]
                shrink-0 cursor-pointer
                transition-all duration-250 ease-in-out
                hover:bg-[#e4e8f0] hover:border-[rgba(1,203,88,0.55)]
                hover:-translate-y-1 hover:shadow-[0_8px_28px_rgba(1,203,88,0.13)]
              "
            >
              {partner.svg}
            </div>
          ))}
        </div>
      </div>

      {/* ── Keyframe animation (added to tailwind.config or globals) ── */}
      {/* Since we can't add to tailwind.config here, use a <style> tag as a one-time exception */}
      <style>{`
        @keyframes scrollTrack {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}