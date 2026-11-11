"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Wifi, Wind, Tv, Coffee, Utensils, BedDouble, Bath, ShieldCheck, Users } from "lucide-react";

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
          <p className="text-primary font-medium tracking-[0.2em] uppercase text-xs mb-4">Stay In Comfort</p>
          <h1 className="font-heading text-5xl md:text-6xl text-deep-navy mb-6">
            Our <span className="text-muted-foreground/60">Rooms</span>
          </h1>
          <p className="text-muted-foreground leading-relaxed text-lg">
            A calm, light-filled stay with flexible bed arrangements, private bathroom, quality linens, and the everyday comforts that matter most on the island. It works beautifully for couples, friends, and families who want a practical room with warm guesthouse service.
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
            <img src="/images/deluxe_room.png" alt="Room View" className="w-full h-full object-cover" />
          </div>
          {/* Top Right Image */}
          <div className="rounded-3xl overflow-hidden aspect-[4/3]">
            <img src="/images/deluxe_room.png" alt="Towel Swans" className="w-full h-full object-cover" />
          </div>
          {/* Bottom Right Two Images */}
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-3xl overflow-hidden aspect-square">
              <img src="/images/deluxe_room.png" alt="Room Detail" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-3xl overflow-hidden aspect-square">
              <img src="/images/deluxe_room.png" alt="Water Bottles" className="w-full h-full object-cover" />
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
              <p className="text-primary font-medium tracking-[0.2em] uppercase text-xs mb-3">Room Overview</p>
              <h2 className="font-heading text-3xl md:text-4xl text-deep-navy mb-4">Flexible Double or Twin Room</h2>
              <p className="text-muted-foreground">The room offers a calm, clean stay with thoughtful everyday comfort and easy access to the guesthouse spaces and island activities.</p>
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
              { icon: Bath, title: "PRIVATE BATHROOM", desc: "Comfortable space with shower and daily essentials." },
              { icon: Users, title: "FAMILY FRIENDLY", desc: "Great for couples, friends, and family stays." },
              { icon: Utensils, title: "RESTAURANT & BREAKFAST", desc: "On-site dining, breakfast, and easy guesthouse meals." },
              { icon: Coffee, title: "IN-ROOM COMFORTS", desc: "Tea and coffee setup in every room." }
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
            <p className="text-primary font-medium tracking-[0.2em] uppercase text-xs mb-4">Comfortable Setup</p>
            <h2 className="font-heading text-4xl text-deep-navy mb-6">A well-set room for easy island stays</h2>
            <p className="text-muted-foreground leading-relaxed">
              Beyond the room itself, the stay is shaped by practical service, shared guest spaces, and the kind of local support that makes island travel feel easy and unhurried.
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
              <h3 className="font-heading text-2xl text-deep-navy mb-8">Room essentials</h3>
              <ul className="space-y-6">
                {[
                  "Private bathroom with shower and toiletries",
                  "Air conditioning and fan",
                  "Tea and coffee setup, mini bar, and refrigerator",
                  "TV, telephone, wardrobe, and towels"
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
              <p className="text-primary font-medium tracking-[0.2em] uppercase text-xs mb-6">Why Guests Choose Us</p>
              <h3 className="font-heading text-3xl text-deep-navy mb-10">Why guests choose this room</h3>

              <div className="space-y-10 mb-12">
                {[
                  { icon: BedDouble, title: "Easy arrival flow", desc: "24-hour front desk support, wake-up service, and local guidance helps ease arrivals and departures on the island." },
                  { icon: Utensils, title: "Breakfast and guesthouse dining", desc: "Enjoy daily restaurant dining. Half board or full board options help cover both early mornings and relaxed evenings." },
                  { icon: Wind, title: "Made for island exploring", desc: "Bicycle rental, snorkeling strings, sunset guidelines, windsurfing, and local tours are all within reach when you want more than just a room." },
                  { icon: ShieldCheck, title: "Safe and easy for longer stays", desc: "Safe, ironing facilities, laundry options, ground-floor access, and family-friendly features make the stay more practical day-to-day." }
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
                <p className="text-primary font-medium tracking-[0.2em] uppercase text-xs mb-6">Key Features</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8">
                  <div className="flex justify-between items-center border-b border-border/50 pb-3">
                    <span className="text-sm text-muted-foreground">Room Style</span>
                    <span className="text-sm font-bold text-deep-navy">Double or Twin</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-border/50 pb-3">
                    <span className="text-sm text-muted-foreground">Bathroom</span>
                    <span className="text-sm font-bold text-deep-navy">Bathroom with shower</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-border/50 pb-3">
                    <span className="text-sm text-muted-foreground">Internet</span>
                    <span className="text-sm font-bold text-deep-navy">Free Wi-Fi</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-border/50 pb-3">
                    <span className="text-sm text-muted-foreground">Service</span>
                    <span className="text-sm font-bold text-deep-navy">Daily Housekeeping</span>
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
            <p className="text-primary font-medium tracking-[0.2em] uppercase text-xs mb-4">Ready To Stay</p>
            <h2 className="font-heading text-3xl md:text-4xl text-white mb-4">Tell us your dates and preferred bed setup</h2>
            <p className="text-white/70">
              We can prepare the room as a large double or as separate twin beds, and help with breakfast preferences and the right stay setup for your trip.
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
