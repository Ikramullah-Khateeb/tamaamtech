"use client"

import { useState, useEffect } from "react"

// ─── TYPEWRITER HOOK ───
function useTypewriter(phrases, typingSpeed = 60, deletingSpeed = 35, pauseTime = 2200) {
  const [displayed, setDisplayed] = useState("")
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    const current = phrases[phraseIndex]

    if (isPaused) {
      const t = setTimeout(() => {
        setIsPaused(false)
        setIsDeleting(true)
      }, pauseTime)
      return () => clearTimeout(t)
    }

    if (!isDeleting) {
      if (displayed.length < current.length) {
        const t = setTimeout(() => {
          setDisplayed(current.slice(0, displayed.length + 1))
        }, typingSpeed)
        return () => clearTimeout(t)
      } else {
        setIsPaused(true)
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => {
          setDisplayed(current.slice(0, displayed.length - 1))
        }, deletingSpeed)
        return () => clearTimeout(t)
      } else {
        setIsDeleting(false)
        setPhraseIndex((i) => (i + 1) % phrases.length)
      }
    }
  }, [displayed, isDeleting, isPaused, phraseIndex])

  return displayed
}



// ─── HERO ───
export default function HeroSection() {
  const phrases = [
    "Next-Gen SOC & Cyber Defense",
    "AI-Powered Security Operations",
    "Threat Intelligence & Response",
    "Managed Detection & Response",
  ]

  const typedText = useTypewriter(phrases)

  const lastWord = typedText.split(" ").slice(-1)
  const rest = typedText.split(" ").slice(0, -1).join(" ")

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-white px-4 text-center overflow-hidden">


      {/* ─── HERO CONTENT ─── */}
      <div className="max-w-3xl">

        {/* Badge */}
        <div className="mb-6">
          <span className="px-4 py-1 text-xs rounded-full bg-blue-50 border border-blue-200 text-blue-600 font-semibold">
            ISO 27001
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
          <span className="text-gray-900">{rest} </span>
          <span className="text-blue-600">{lastWord}</span>
          <span className="animate-pulse">|</span>
        </h1>

        {/* Subtitle */}
        <p className="text-gray-500 max-w-lg mx-auto mb-10">
          Driving AI Innovation and cybersecurity excellence from UAE to the World.
        </p>

        {/* CTA */}
        <button className="border-2 border-blue-900 text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-900 hover:text-white transition">
          Book a Free Consultation →
        </button>

        {/* Trust */}
        <div className="mt-12 flex gap-6 justify-center text-sm text-gray-400 flex-wrap">
          <span>🛡️ SOC 2 Certified</span>
          <span>🌍 UAE Based</span>
          <span>⚡ 24/7 Monitoring</span>
        </div>
      </div>
    </section>
  )
}