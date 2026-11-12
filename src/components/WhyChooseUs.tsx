"use client";

import { motion } from "framer-motion";

export default function WhyChooseUs() {
  const features = [
    { num: "01", title: "Climate Control" },
    { num: "02", Private: false, title: "Private Terraces" },
    { num: "03", title: "Authentic Dining" },
    { num: "04", title: "Desert Excursions" },
    { num: "05", title: "Premium Wi-Fi" },
    { num: "06", title: "24/7 Concierge" },
  ];

  return (
    <section className="py-14 sm:py-16 md:py-20 px-4 md:px-8 bg-[#F5EFEB]">
      <div className="container mx-auto max-w-5xl">
        {/* Header Stack */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-14">
          <p className="font-[family-name:var(--font-montserrat)] text-xs sm:text-[13px] font-semibold tracking-[0.32em] uppercase text-[#A8582C] mb-3">
            5-STAR DESERT LIVING
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl text-[#221C18] font-normal tracking-tight">
            Luxuries of the Desert
          </h2>
          <div className="w-12 h-[1px] bg-[#A8582C]/35 mx-auto mt-4" />
        </div>

        {/* 3-Column x 2-Row Ultra-Concise Editorial Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 sm:gap-x-12 lg:gap-x-16 gap-y-8 sm:gap-y-10 md:gap-y-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group flex flex-col items-center text-center cursor-default"
            >
              {/* Editorial Numeral (Rich Terracotta, High-End Magazine Style) */}
              <span className="font-[family-name:var(--font-playfair)] text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#A8582C] mb-2.5 transition-transform duration-200 group-hover:scale-105">
                {feature.num}
              </span>

              {/* Clean Geometric Sans in Medium Weight (Outfit) */}
              <h3 className="font-[family-name:var(--font-outfit)] text-base sm:text-lg md:text-[1.125rem] font-medium text-[#221C18] tracking-tight leading-snug transition-colors duration-200 group-hover:text-[#A8582C]">
                {feature.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
