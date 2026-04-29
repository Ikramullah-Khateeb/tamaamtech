"use client";

import { useRef } from "react";

const partners = [
  {
    name: "Wix",
    svg: (
      <svg viewBox="0 0 60 30" className="w-12 h-8" xmlns="http://www.w3.org/2000/svg">
        <text x="0" y="24" fontSize="26" fontWeight="900" fontFamily="serif" fill="#1a1a2e">Wix</text>
      </svg>
    ),
  },
  {
    name: "WordPress",
    svg: (
      <svg viewBox="0 0 24 24" className="w-9 h-9" fill="#21759b" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zM3.6 12c0-1.077.202-2.106.569-3.054L7.48 19.48A8.406 8.406 0 013.6 12zm8.4 8.4a8.41 8.41 0 01-2.39-.347l2.538-7.374 2.6 7.122a.414.414 0 00.031.061A8.418 8.418 0 0112 20.4zm1.164-12.389c.508-.027.966-.08.966-.08.455-.054.401-.722-.054-.695 0 0-1.366.107-2.249.107-.829 0-2.222-.107-2.222-.107-.455-.027-.509.668-.054.695 0 0 .431.053.885.08l1.314 3.6-1.846 5.536-3.071-9.136c.508-.027.966-.08.966-.08.455-.054.401-.722-.054-.695 0 0-1.366.107-2.249.107a9.354 9.354 0 01-.56-.018A8.406 8.406 0 0112 3.6c2.204 0 4.217.845 5.723 2.226a.38.38 0 00-.049-.004c-.829 0-1.417.722-1.417 1.497 0 .695.401 1.283.829 1.978.321.562.696 1.283.696 2.329 0 .722-.277 1.56-.642 2.729l-.842 2.81-3.134-9.314zm3.425 11.615l2.587-7.48c.482-1.204.643-2.168.643-3.025 0-.311-.021-.6-.059-.872A8.405 8.405 0 0120.4 12a8.41 8.41 0 01-3.811 7.026z" />
      </svg>
    ),
  },
  {
    name: "Shopify",
    svg: (
      <svg viewBox="0 0 24 24" className="w-9 h-9" fill="#96bf48" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.337 23.979l7.216-1.561s-2.604-17.613-2.625-17.73c-.018-.116-.116-.192-.213-.192s-1.889-.133-1.889-.133-.981-.999-1.406-1.406v-.036c-.385-1.059-1.059-2.035-2.252-2.035-.039 0-.077.001-.116.003C13.626.327 13.118 0 12.669 0c-3.456 0-5.111 4.326-5.629 6.52-.999.307-1.927.596-1.927.596L4.014 8.23s-1.464 17.961-1.484 18.152L15.337 23.98v-.001zM17.4 4.823s-.713.211-1.6.481c-.02-.405-.082-.984-.269-1.485-.664 1.271-.934 2.524-1.041 3.345l-2.574.769c.5-1.884 1.693-3.952 4.166-3.952.617 0 1.041.211 1.318.842zm-2.485 8.271c-.051 2.098-.577 3.21-1.425 3.21-.827 0-1.425-1.559-1.425-3.21 0-1.561.616-2.389 1.425-2.389.847 0 1.425.828 1.425 2.389zm-1.425-4.595c-1.907 0-3.468 2.098-3.468 4.595 0 2.893 1.561 4.942 3.468 4.942 1.907 0 3.468-2.049 3.468-4.942 0-2.497-1.561-4.595-3.468-4.595z" />
      </svg>
    ),
  },
  {
    name: "Google",
    svg: (
      <svg viewBox="0 0 24 24" className="w-9 h-9" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
      </svg>
    ),
  },
  {
    name: "Amazon",
    svg: (
      <svg viewBox="0 0 24 24" className="w-9 h-9" fill="#FF9900" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.958 10.09c0 1.232.029 2.256-.591 3.351-.502.891-1.301 1.438-2.186 1.438-1.214 0-1.922-.924-1.922-2.292 0-2.692 2.415-3.182 4.699-3.182v.685zm3.186 7.705c-.209.189-.512.201-.748.074-1.052-.872-1.238-1.276-1.814-2.106-1.734 1.767-2.962 2.297-5.209 2.297-2.66 0-4.731-1.641-4.731-4.927 0-2.565 1.391-4.309 3.37-5.164 1.715-.754 4.11-.891 5.942-1.095v-.41c0-.753.06-1.642-.384-2.294-.385-.577-1.124-.816-1.776-.816-1.208 0-2.284.619-2.547 1.903-.054.285-.261.567-.549.582l-3.061-.333c-.259-.056-.548-.266-.472-.66C5.57 1.747 8.015 1 10.218 1c1.129 0 2.605.301 3.495 1.158 1.127 1.053 1.02 2.458 1.02 3.988v3.612c0 1.086.451 1.562.876 2.148.149.211.183.463-.01.62-.475.396-1.319 1.136-1.784 1.549l-.671-.28zM20.947 19.118C18.725 20.818 15.5 21.721 12.731 21.721c-4.008 0-7.614-1.479-10.346-3.942-.214-.193-.023-.458.235-.308 2.946 1.715 6.589 2.745 10.35 2.745 2.537 0 5.324-.527 7.892-1.617.387-.165.711.254.085.519zM21.921 17.953c-.293-.376-1.938-.178-2.677-.09-.225.028-.26-.168-.057-.309 1.311-.921 3.462-.655 3.713-.347.251.31-.065 2.462-1.296 3.489-.189.158-.369.074-.285-.135.277-.691.897-2.234.602-2.608z" />
      </svg>
    ),
  },
  {
    name: "Microsoft",
    svg: (
      <svg viewBox="0 0 24 24" className="w-9 h-9" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.4 2H2v9.4h9.4V2z" fill="#F25022" />
        <path d="M22 2h-9.4v9.4H22V2z" fill="#7FBA00" />
        <path d="M11.4 12.6H2V22h9.4v-9.4z" fill="#00A4EF" />
        <path d="M22 12.6h-9.4V22H22v-9.4z" fill="#FFB900" />
      </svg>
    ),
  },
  {
    name: "Apple",
    svg: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#1a1a2e" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09z" />
        <path d="M15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701z" />
      </svg>
    ),
  },
  {
    name: "AWS",
    svg: (
      <svg viewBox="0 0 80 40" className="w-14 h-10" xmlns="http://www.w3.org/2000/svg">
        <text x="4" y="26" fontSize="18" fontWeight="700" fontFamily="'Amazon Ember', Arial, sans-serif" fill="#232F3E" letterSpacing="1.5">aws</text>
        <path d="M2 33 Q40 24 78 33" stroke="#FF9900" strokeWidth="3" fill="none" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: "WordPress 2",
    svg: (
      <svg viewBox="0 0 24 24" className="w-9 h-9" fill="#21759b" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zM3.6 12c0-1.077.202-2.106.569-3.054L7.48 19.48A8.406 8.406 0 013.6 12zm8.4 8.4a8.41 8.41 0 01-2.39-.347l2.538-7.374 2.6 7.122a.414.414 0 00.031.061A8.418 8.418 0 0112 20.4zm1.164-12.389c.508-.027.966-.08.966-.08.455-.054.401-.722-.054-.695 0 0-1.366.107-2.249.107-.829 0-2.222-.107-2.222-.107-.455-.027-.509.668-.054.695 0 0 .431.053.885.08l1.314 3.6-1.846 5.536-3.071-9.136c.508-.027.966-.08.966-.08.455-.054.401-.722-.054-.695 0 0-1.366.107-2.249.107a9.354 9.354 0 01-.56-.018A8.406 8.406 0 0112 3.6c2.204 0 4.217.845 5.723 2.226a.38.38 0 00-.049-.004c-.829 0-1.417.722-1.417 1.497 0 .695.401 1.283.829 1.978.321.562.696 1.283.696 2.329 0 .722-.277 1.56-.642 2.729l-.842 2.81-3.134-9.314zm3.425 11.615l2.587-7.48c.482-1.204.643-2.168.643-3.025 0-.311-.021-.6-.059-.872A8.405 8.405 0 0120.4 12a8.41 8.41 0 01-3.811 7.026z" />
      </svg>
    ),
  },
];

const allPartners = [...partners, ...partners];

export default function Partners() {
  const trackRef = useRef(null);

  return (
    <section className="relative w-full overflow-hidden bg-white">

      <div className="absolute inset-0 pointer-events-none z-0">
        <svg
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="absolute top-0 left-0 w-full h-full"
        >
          {/* Drop-shadow filter for the ribbon depth effect */}
          <defs>
            <filter id="wave-shadow" x="-5%" y="-20%" width="110%" height="160%">
              <feDropShadow dx="0" dy="6" stdDeviation="10" floodColor="#b0b8c8" floodOpacity="0.35" />
            </filter>
          </defs>

          {/* Back ribbon — slightly darker, offset lower */}
          <path
            d="
              M-20,60
              C160,130 360,-10 580,65
              C800,140 1000,10 1200,70
              C1340,110 1420,60 1460,50
              L1460,155
              C1260,100 1060,190 860,120
              C660,50 440,170 220,130
              C80,105 -10,150 -20,160
              Z
            "
            fill="#dde2ea"
            filter="url(#wave-shadow)"
          />

          {/* Front ribbon — lighter, sits on top */}
          <path
            d="
              M-20,30
              C180,105 380,-20 600,55
              C820,130 1020,-5 1220,60
              C1360,100 1430,50 1460,40
              L1460,130
              C1240,85 1040,175 840,110
              C640,45 420,160 200,118
              C70,95 -10,135 -20,145
              Z
            "
            fill="#eaedf2"
            filter="url(#wave-shadow)"
          />
        </svg>
      </div>

      {/* ── Heading ── */}
      <div className="relative z-10 text-center px-4 pt-12 pb-6 sm:pt-16 sm:pb-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a2340]">
          Our Preferred{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #1a2340 0%, #3b82f6 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Partners
          </span>
        </h2>
        <p className="mt-3 text-sm sm:text-base text-[#64748b] max-w-xl mx-auto font-medium">
          Collaborating with industry leaders to deliver exceptional results
        </p>
      </div>

      {/* ── Scrolling logo strip ── */}
      <div className="relative z-10 w-full overflow-hidden pb-14 sm:pb-16">
        {/* Left fade */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-16 sm:w-28 z-10 bg-linear-to-r from-white to-transparent" />
        {/* Right fade */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-16 sm:w-28 z-10 bg-linear-to-l from-white to-transparent" />

        <div
          ref={trackRef}
          className="flex gap-4 sm:gap-6 w-max animate-scroll-track"
        >
          {allPartners.map((partner, i) => (
            <div
              key={`${partner.name}-${i}`}
              title={partner.name}
              className="
                flex items-center justify-center
                w-20 h-20 sm:w-24 sm:h-24
                rounded-2xl
                bg-white
                border border-gray-200
                shadow-[0_2px_12px_rgba(0,0,0,0.07)]
                hover:shadow-[0_8px_28px_rgba(0,0,0,0.13)]
                hover:-translate-y-1
                transition-all duration-300
                shrink-0 cursor-pointer
              "
            >
              {partner.svg}
            </div>
          ))}
        </div>
      </div>

      
    </section>
  );
}