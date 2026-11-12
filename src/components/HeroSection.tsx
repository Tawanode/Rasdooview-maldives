"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import BookingBar from "./BookingBar";

export default function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative w-full flex flex-col md:min-h-[100svh] md:justify-between overflow-visible z-20 bg-warm-sand"
    >
      {/* 1. Full-Bleed Background Image with Parallax & Slow Cinematic Zoom */}
      <div className="relative h-[72svh] sm:h-[78svh] md:h-auto md:absolute md:inset-0 w-full overflow-hidden z-0 flex flex-col justify-between">
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: 1.04 }}
          transition={{ duration: 18, ease: "easeOut" }}
          style={{ y }}
          className="absolute inset-0 w-full h-[116%] -top-[8%] z-0 origin-center pointer-events-none"
        >
          <img
            src="/images/wadirum_hero.jpg"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "/images/wadirum_camp_exterior.jpg";
            }}
            alt="Wadi Rum Bella Rose Luxury Camp with Dome Tents and Sandstone Mountains"
            className="w-full h-full object-cover object-[center_60%] md:object-[center_56%]"
          />
        </motion.div>

        {/* 15% overall black overlay for crisp white text legibility without heavy drop shadows */}
        <div className="absolute inset-0 bg-black/15 z-10 pointer-events-none" />

        {/* Subtle multi-directional gradients for cinematic atmosphere */}
        <div className="absolute inset-x-0 top-0 h-36 md:h-44 bg-gradient-to-b from-black/60 via-black/20 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/35 z-10 pointer-events-none" />

        {/* Top Spacer for Fixed Navigation */}
        <div className="h-24 sm:h-28 shrink-0 relative z-20" />

        {/* Center Hero Content on mobile (in-flow) & desktop (absolute center) */}
        <div className="relative md:absolute md:inset-0 flex items-center justify-center z-20 px-4 md:px-8 pointer-events-none my-auto md:my-0">
          <motion.div
            style={{ opacity }}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="pointer-events-auto text-center text-white flex flex-col items-center max-w-4xl mx-auto md:-translate-y-12"
          >
            {/* Eyebrow / Kicker */}
            <span className="font-[family-name:var(--font-montserrat)] text-xs sm:text-sm uppercase tracking-[0.34em] text-white/95 font-semibold mb-3 sm:mb-4 block drop-shadow-sm">
              WELCOME TO WADI RUM BELLA ROSE
            </span>

            {/* Main Headline (The Premium Stack: El Messiri, ALL CAPS, Upright, Tight Leading) */}
            <h1 className="font-[family-name:var(--font-el-messiri)] text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem] xl:text-[3.75rem] font-medium tracking-[0.06em] uppercase text-white leading-[1.08] sm:leading-[1.05] drop-shadow-sm">
              <span className="block">A DESERT ESCAPE</span>
              <span className="block mt-1 sm:mt-1.5 text-white/95">
                BEYOND THE ORDINARY
              </span>
            </h1>
          </motion.div>
        </div>

        {/* Bottom spacer on mobile for visual breathing room */}
        <div className="h-8 md:hidden relative z-20" />
      </div>

      {/* Bottom Floating Booking Bar:
          Mobile: Sits flat in natural flow on bg-warm-sand, pushing following content down cleanly.
          PC / Desktop: Floats at the fold line with md:translate-y-[82%] overlapping hero and welcome section.
      */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.85, delay: 0.5 }}
        className="relative z-30 w-full max-w-6xl mx-auto px-4 md:px-8 pt-5 pb-2 md:pt-0 md:pb-0 md:translate-y-[82%] shrink-0 pointer-events-auto md:mt-auto"
      >
        <BookingBar embedded />
      </motion.div>
    </section>
  );
}
