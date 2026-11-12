"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Wifi,
  Wind,
  Coffee,
  Utensils,
  Mountain,
  Bath,
  Flame,
  ShieldCheck,
  Compass,
  Sparkles,
  Users,
  Crown,
  Snowflake
} from "lucide-react";

export default function AccommodationPage() {
  return (
    <div className="bg-warm-sand min-h-screen pt-32 pb-24 px-4 md:px-8">
      <div className="container mx-auto max-w-6xl">

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 max-w-3xl"
        >

          <h1 className="font-heading text-5xl md:text-6xl text-deep-navy mb-6">
            Our Luxury <span className="text-muted-foreground/60">Tents & Units</span>
          </h1>
          <p className="hidden md:block text-muted-foreground leading-relaxed text-lg">
            Enjoy an exclusive and relaxing stay in our thoughtfully designed desert accommodations. Featuring family and interconnected options, every unit provides a quiet, private space with stunning mountain views.
          </p>
        </motion.div>

        {/* Image Collage */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-[-80px] relative z-10"
        >
          {/* Left Large Image */}
          <div className="md:col-span-2 md:row-span-2 rounded-3xl overflow-hidden aspect-square md:aspect-auto">
            <img
              src="/images/wadirum_room_interior.jpg"
              onError={(e) => { (e.target as HTMLImageElement).src = "/images/wadirum_camp_exterior.jpg"; }}
              alt="Double Room with Mountain View at Wadi Rum Bella Rose Luxury Camp"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Top Right Image */}
          <div className="rounded-3xl overflow-hidden aspect-[4/3]">
            <img
              src="/images/wadirum_bathroom.jpg"
              onError={(e) => { (e.target as HTMLImageElement).src = "/images/wadirum_sunset.jpg"; }}
              alt="Private Ensuite Bathroom with Walk-in Shower"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Bottom Right Two Images */}
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-3xl overflow-hidden aspect-square">
              <img
                src="/images/wadirum_room_deluxe.jpg"
                onError={(e) => { (e.target as HTMLImageElement).src = "/images/wadirum_mountains.jpg"; }}
                alt="Superior Deluxe Twin Room"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-3xl overflow-hidden aspect-square">
              <img
                src="/images/wadirum_campfire.jpg"
                onError={(e) => { (e.target as HTMLImageElement).src = "/images/wadirum_stargazing.jpg"; }}
                alt="Outdoor Fireplace & Camp Grounds"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* Room Overview Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-[#FAF6F0]/95 backdrop-blur-xl rounded-3xl p-7 sm:p-10 md:p-12 shadow-[0_20px_50px_rgba(34,28,24,0.1)] border border-[#E5DAC8] relative z-20 mx-0 lg:mx-6"
        >
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 pb-8 border-b border-[#E5DAC8]/80">
            <div>
              <p className="font-[family-name:var(--font-montserrat)] text-xs uppercase tracking-[0.28em] font-semibold text-[#A8582C] mb-2.5">
                Unit Highlights
              </p>
              <h2 className="font-[family-name:var(--font-el-messiri)] text-2xl sm:text-3xl md:text-4xl text-[#221C18] font-normal tracking-tight mb-3">
                Intimate 11-Unit Desert Haven
              </h2>
              <p className="font-[family-name:var(--font-montserrat)] text-xs sm:text-sm text-[#5B4C43] max-w-2xl leading-relaxed">
                Tucked in the peaceful Disah district, every unit offers an exclusive sanctuary with individual climate control, ensuite bath, and dramatic sandstone views.
              </p>
            </div>
            <Button
              className="bg-[#0b382d] hover:bg-[#07241c] text-white rounded-xl px-7 py-6 text-xs uppercase tracking-[0.2em] font-semibold transition-all hover:shadow-lg hover:scale-[1.02] shrink-0"
              onClick={() => {
                window.dispatchEvent(new CustomEvent("open-booking-modal"));
              }}
            >
              Check Availability <ArrowRight size={15} className="ml-2.5" />
            </Button>
          </div>

          {/* 4 Feature Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 pt-8">
            {[
              {
                icon: Crown,
                title: "ONLY 11 UNITS",
                desc: "Intimate and quiet glamping experience away from large tour buses."
              },
              {
                icon: Snowflake,
                title: "INDIVIDUAL A/C",
                desc: "Custom climate control essential for daytime desert heat & cool nights."
              },
              {
                icon: Bath,
                title: "ENSUITE BATHROOM",
                desc: "Private walk-in shower, bathrobes, bidet, and toiletries in every unit."
              },
              {
                icon: Mountain,
                title: "MOUNTAIN TERRACE",
                desc: "Private outdoor terrace offering front-row views of red sandstone formations."
              }
            ].map((feature, i) => (
              <div 
                key={i} 
                className="bg-[#FAF6EE] p-5 sm:p-6 rounded-2xl border border-[#E8DFD1] hover:border-[#A8582C]/40 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-white border border-[#E2D8C7] flex items-center justify-center text-[#A8582C] mb-3.5 shadow-xs group-hover:bg-[#A8582C] group-hover:text-white transition-colors">
                  <feature.icon size={19} strokeWidth={1.6} />
                </div>
                <h4 className="font-[family-name:var(--font-montserrat)] text-xs font-bold tracking-wider text-[#221C18] mb-1.5 uppercase">
                  {feature.title}
                </h4>
                <p className="font-[family-name:var(--font-outfit)] text-xs sm:text-[13px] text-[#6E5D53] leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Detailed Information Section */}
        <div className="mt-28 md:mt-32">
          <div className="mb-12 max-w-3xl">
            <p className="font-[family-name:var(--font-montserrat)] text-xs uppercase tracking-[0.28em] font-semibold text-[#A8582C] mb-3">
              Thoughtfully Designed
            </p>
            <h2 className="font-[family-name:var(--font-el-messiri)] text-3xl md:text-4xl text-[#221C18] mb-4 font-normal">
              Four Distinct Desert Accommodations
            </h2>
            <p className="font-[family-name:var(--font-montserrat)] text-sm sm:text-base text-[#5B4C43] leading-relaxed">
              Designed for travelers who seek both adventure and comfort, our accommodations provide modern luxuries right in the middle of the Wadi Rum Protected Area.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 items-start">
            {/* Left Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/3 bg-white rounded-3xl p-8 shadow-sm border border-[#E3DAC9] sticky top-32 w-full"
            >
              <h3 className="font-[family-name:var(--font-playfair)] text-2xl text-[#221C18] mb-6">
                Unit Essentials
              </h3>
              <ul className="space-y-5">
                {[
                  "Individual air conditioning (crucial for desert heat)",
                  "Private ensuite bathroom with walk-in shower & bathrobes",
                  "Private terrace or balcony with mountain views",
                  "Soundproof walls for ultimate peace & quiet",
                  "Fireplace (available in select deluxe and luxury units)"
                ].map((item, i) => (
                  <li key={i} className="flex gap-3.5 items-start font-[family-name:var(--font-montserrat)] text-sm text-[#5B4C43]">
                    <span className="w-1.5 h-1.5 rotate-45 bg-[#A8582C] mt-2 shrink-0 rounded-[1px]" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Right Main Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-2/3 bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-[#E3DAC9] w-full"
            >
              <p className="font-[family-name:var(--font-montserrat)] text-xs uppercase tracking-[0.28em] font-semibold text-[#A8582C] mb-3">
                Property Categories
              </p>
              <h3 className="font-[family-name:var(--font-playfair)] text-3xl text-[#221C18] mb-8 font-normal">
                Our Room Categories
              </h3>

              <div className="space-y-6 mb-12">
                {[
                  {
                    icon: Mountain,
                    title: "Double Room with Mountain View",
                  },
                  {
                    icon: Sparkles,
                    title: "Superior Deluxe Double or Twin Room",
                  },
                  {
                    icon: Users,
                    title: "Triple Room with Mountain View",
                  },
                  {
                    icon: Crown,
                    title: "Luxury Triple Room",
                  }
                ].map((reason, i) => (
                  <div key={i} className="flex gap-5 sm:gap-6 items-center p-3 sm:p-3.5 rounded-2xl hover:bg-[#FAF6F0] transition-colors">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#FAF6EE] border border-[#E4D9C7] flex items-center justify-center text-[#A8582C] shrink-0 shadow-[0_2px_8px_rgba(168,88,44,0.06)]">
                      <reason.icon size={22} strokeWidth={1.6} />
                    </div>
                    <div>
                      <h4 className="font-[family-name:var(--font-playfair)] text-lg sm:text-xl text-[#221C18] font-normal tracking-tight">
                        {reason.title}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>

              {/* Key Features Box */}
              <div className="bg-warm-sand/40 rounded-2xl p-8 border border-border/50">
                <p className="text-primary font-medium tracking-[0.2em] uppercase text-xs mb-6">Key Specifications</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8">
                  <div className="flex justify-between items-center border-b border-border/50 pb-3">
                    <span className="text-sm text-muted-foreground">Property Size</span>
                    <span className="text-sm font-bold text-deep-navy">Only 11 Luxury Units</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-border/50 pb-3">
                    <span className="text-sm text-muted-foreground">Bathroom</span>
                    <span className="text-sm font-bold text-deep-navy">Ensuite Walk-in Shower</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-border/50 pb-3">
                    <span className="text-sm text-muted-foreground">Climate Control</span>
                    <span className="text-sm font-bold text-deep-navy">Individual Air Conditioning</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-border/50 pb-3">
                    <span className="text-sm text-muted-foreground">Acoustic Comfort</span>
                    <span className="text-sm font-bold text-deep-navy">Soundproof Walls</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 bg-[#121415] rounded-3xl p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden shadow-2xl"
        >
          <div className="relative z-10 max-w-2xl text-center md:text-left">
            <p className="text-primary font-medium tracking-[0.2em] uppercase text-xs mb-4">Book Your Desert Escape</p>
            <h2 className="font-heading text-3xl md:text-4xl text-white mb-4">Experience authentic Bedouin hospitality and modern luxury</h2>
            <p className="text-white/70">
              With just 11 exclusive units in the Disah district, our camp fills quickly. Tell us your travel dates and preferred unit configuration.
            </p>
          </div>

          <Button
            className="relative z-10 bg-white hover:bg-white/90 text-deep-navy rounded-md px-10 py-7 text-sm font-bold tracking-[0.15em] uppercase transition-all hover:scale-105 shrink-0"
            onClick={() => {
              window.dispatchEvent(new CustomEvent("open-booking-modal"));
            }}
          >
            BOOK NOW <ArrowRight size={18} className="ml-3" />
          </Button>
        </motion.div>

      </div>
    </div>
  );
}
