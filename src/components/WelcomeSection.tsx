"use client";

import { motion } from "framer-motion";

export default function WelcomeSection() {
  return (
    <section className="pt-36 sm:pt-40 pb-24 md:py-32 px-4 md:px-8 bg-warm-sand">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex-1 space-y-8"
          >
            <div>
              <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">About Our Camp</p>
              <h2 className="font-heading text-4xl md:text-5xl text-deep-navy leading-tight mb-6">
                Welcome to <br />
                <span className="font-accent italic text-primary">Wadi Rum Bella Rose Luxury Camp</span>
              </h2>
              <div className="w-20 h-[1px] bg-primary/30" />
            </div>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Experience the magic of the Jordanian desert at Wadi Rum Bella Rose Luxury Camp. Tucked away in the peaceful Disah area, our camp offers an intimate and exclusive alternative to massive tour-bus camps, featuring just 11 thoughtfully designed units.
              </p>
              <p className="hidden md:block">
                Designed for travelers who seek both adventure and comfort, our accommodations provide modern luxuries like air conditioning, soundproof walls, and private ensuite bathrooms right in the middle of the desert.
              </p>
              <p className="hidden md:block">
                Whether you are stargazing by the outdoor fireplace, enjoying a traditional Bedouin Zarb dinner, or exploring the red sand dunes on a 4x4 Jeep tour, we offer a peaceful and unforgettable Bedouin experience with world-class hospitality.
              </p>
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-deep-navy font-medium pt-4">
              {['Peaceful Disah Location', 'Only 11 Luxury Units', 'Stunning Mountain Views', 'Authentic Bedouin Hospitality'].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Image Grid */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex-1 relative"
          >
            <div className="aspect-[4/5] relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/images/wadirum_camp_exterior.jpg" 
                alt="Exterior of dome tents and Bedouin tents against the mountain backdrop" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-deep-navy/10" />
            </div>
            
            {/* Floating Image */}
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="absolute -bottom-12 -left-12 w-2/3 aspect-square rounded-2xl overflow-hidden shadow-xl border-4 border-warm-sand hidden md:block"
            >
              <img 
                src="/images/wadirum_room_interior.jpg" 
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "/images/wadirum_mountains.jpg";
                }}
                alt="Luxury desert tent interior with mountain view" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
