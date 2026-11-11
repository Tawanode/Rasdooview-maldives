"use client";

import { motion } from "framer-motion";
import { Umbrella, Coffee, Wifi, CupSoda, Shirt, BellRing, Sun, Waves } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    { icon: <Umbrella size={32} />, title: "Beachfront Location" },
    { icon: <Coffee size={32} />, title: "Self-Catering Apartments" },
    { icon: <Wifi size={32} />, title: "Spacious Family Accommodation" },
    { icon: <CupSoda size={32} />, title: "Fully Equipped Kitchens" },
    { icon: <Sun size={32} />, title: "Tropical Gardens" },
    { icon: <Waves size={32} />, title: "Direct Beach Access" },
    { icon: <BellRing size={32} />, title: "Ocean Views" },
    { icon: <Shirt size={32} />, title: "Peaceful Environment" },
  ];

  return (
    <section className="py-24 px-4 md:px-8 bg-soft-beige/30">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">Our Amenities</p>
          <h2 className="font-heading text-4xl md:text-5xl text-deep-navy">Why Guests Choose Us</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 flex flex-col items-center justify-center text-center gap-4 shadow-sm hover:shadow-xl transition-all duration-300 group cursor-default hover:-translate-y-1"
            >
              <div className="text-primary group-hover:text-deep-navy transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="font-medium text-deep-navy text-sm md:text-base leading-snug">
                {feature.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
