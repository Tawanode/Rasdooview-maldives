"use client";

import { motion } from "framer-motion";
import { Wind, VolumeX, Snowflake, Tv, Wifi, Shirt, Droplets, Coffee, CupSoda } from "lucide-react";

export default function RoomAmenities() {
  const categories = [
    {
      title: "Comfort",
      items: [
        { icon: <Snowflake size={20} />, name: "Air Conditioning" },
        { icon: <Wind size={20} />, name: "Ceiling Fans" },
        { icon: <VolumeX size={20} />, name: "Soundproof Rooms" },
      ]
    },
    {
      title: "Convenience",
      items: [
        { icon: <Tv size={20} />, name: "Flat Screen TV" },
        { icon: <Wifi size={20} />, name: "Free WiFi" },
        { icon: <Shirt size={20} />, name: "Wardrobe" },
      ]
    },
    {
      title: "Complimentary",
      items: [
        { icon: <Droplets size={20} />, name: "Drinking Water" },
        { icon: <Coffee size={20} />, name: "Tea & Coffee" },
        { icon: <CupSoda size={20} />, name: "Mini Fridge" },
      ]
    }
  ];

  return (
    <section className="py-16 md:py-24 px-4 md:px-8 bg-warm-sand border-y border-border">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl text-deep-navy">Every Room Includes</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {categories.map((category, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="space-y-6"
            >
              <h3 className="font-heading text-xl text-primary border-b border-border pb-2">{category.title}</h3>
              <ul className="space-y-4">
                {category.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-deep-navy">
                    <div className="bg-white p-2 rounded-lg shadow-sm text-primary">
                      {item.icon}
                    </div>
                    <span className="font-medium text-sm md:text-base">{item.name}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
