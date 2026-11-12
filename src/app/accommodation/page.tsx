"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Wifi, Wind, Coffee, Utensils, Mountain, Bath, Flame, ShieldCheck, Compass } from "lucide-react";

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
          <p className="text-primary font-medium tracking-[0.2em] uppercase text-xs mb-4">5-Star Desert Glamping</p>
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
          className="bg-white/90 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-xl relative z-20 mx-0 lg:mx-12"
        >
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-12">
            <div>
              <p className="text-primary font-medium tracking-[0.2em] uppercase text-xs mb-3">Unit Highlights</p>
              <h2 className="font-heading text-3xl md:text-4xl text-deep-navy mb-4">Intimate 11-Unit Desert Haven</h2>
              <p className="text-muted-foreground">Each unit offers an intimate and exclusive alternative to tour-bus camps, equipped with individual air conditioning, soundproof walls, and private ensuite bathrooms.</p>
            </div>
            <Button
              className="bg-[#0b382d] hover:bg-[#07241c] text-white rounded-md px-8 py-6 text-sm font-medium tracking-wide transition-colors shrink-0"
              onClick={() => {
                window.dispatchEvent(new CustomEvent("open-booking-modal"));
              }}
            >
              CHECK AVAILABILITY <ArrowRight size={16} className="ml-2" />
            </Button>
          </div>

          {/* Amenities Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Bath, title: "PRIVATE BATHROOM", desc: "Ensuite walk-in shower, bathrobes, bidet, and toiletries." },
              { icon: Wind, title: "AIR CONDITIONING", desc: "Individual AC essential for desert climate and soundproof walls." },
              { icon: Mountain, title: "MOUNTAIN VIEW TERRACE", desc: "Private terrace or balcony with landmark mountain panoramas." },
              { icon: Wifi, title: "EXCEPTIONAL FREE WI-FI", desc: "Reliable high-speed connection throughout every unit." }
            ].map((feature, i) => (
              <div key={i} className="bg-warm-sand/50 p-6 rounded-2xl">
                <feature.icon className="text-primary mb-4" size={24} />
                <h4 className="text-xs font-bold tracking-wider text-deep-navy mb-2 uppercase">{feature.title}</h4>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Detailed Information Section */}
        <div className="mt-32">
          <div className="mb-12 max-w-3xl">
            <p className="text-primary font-medium tracking-[0.2em] uppercase text-xs mb-4">Thoughtfully Designed</p>
            <h2 className="font-heading text-4xl text-deep-navy mb-6">Four Distinct Desert Accommodations</h2>
            <p className="text-muted-foreground leading-relaxed">
              Designed for travelers who seek both adventure and comfort, our accommodations provide modern luxuries right in the middle of the Wadi Rum Protected Area.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 items-start">
            {/* Left Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/3 bg-white rounded-3xl p-8 shadow-sm border border-border/50 sticky top-32 w-full"
            >
              <h3 className="font-heading text-2xl text-deep-navy mb-8">Unit essentials</h3>
              <ul className="space-y-6">
                {[
                  "Individual air conditioning (crucial for desert heat)",
                  "Private ensuite bathroom with walk-in shower & bathrobes",
                  "Private terrace or balcony with mountain views",
                  "Soundproof walls for ultimate peace & quiet",
                  "Exceptional free Wi-Fi",
                  "Coffee machine and dedicated desk",
                  "Fireplace (available in select deluxe and luxury units)"
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 items-start text-muted-foreground text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
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
              className="lg:w-2/3 bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-border/50 w-full"
            >
              <p className="text-primary font-medium tracking-[0.2em] uppercase text-xs mb-6">Property Categories</p>
              <h3 className="font-heading text-3xl text-deep-navy mb-10">Our Room Categories</h3>

              <div className="space-y-10 mb-12">
                {[
                  { 
                    icon: Mountain, 
                    title: "Double Room with Mountain View", 
                    desc: "An intimate and peaceful desert escape featuring private ensuite walk-in shower, individual air conditioning, soundproof walls, coffee machine, and a private terrace overlooking the red mountains." 
                  },
                  { 
                    icon: Wind, 
                    title: "Superior Deluxe Double or Twin Room", 
                    desc: "Spacious luxury unit with flexible double or twin bedding, individual air conditioning, soundproofing, plush bathrobes, work desk, coffee station, and expansive desert rock vistas." 
                  },
                  { 
                    icon: ShieldCheck, 
                    title: "Triple Room with Mountain View", 
                    desc: "Ideal for friends or small families seeking desert comfort. Offers comfortable triple bedding, soundproof tranquility, individual air conditioning, private ensuite bath, and sweeping mountain panoramas." 
                  },
                  { 
                    icon: Flame, 
                    title: "Luxury Triple Room", 
                    desc: "Our most premium glamping category featuring a cozy fireplace in select units, private ensuite bathroom, individual air conditioning, and a private terrace overlooking the magnificent Wadi Rum cliffs." 
                  }
                ].map((reason, i) => (
                  <div key={i} className="flex gap-6 items-start">
                    <div className="bg-warm-sand p-3 rounded-full shrink-0">
                      <reason.icon className="text-primary" size={24} />
                    </div>
                    <div>
                      <h4 className="text-deep-navy font-bold text-lg mb-2">{reason.title}</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">{reason.desc}</p>
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
