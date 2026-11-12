"use client";

import { motion } from "framer-motion";
import { Wind, VolumeX, Snowflake, Bath, Mountain, Utensils, Wifi, Compass, Clock, Flame, Coffee, ShieldCheck } from "lucide-react";

export default function RoomAmenities() {
  const categories = [
    {
      title: "Room Comfort",
      items: [
        { icon: <Snowflake size={20} />, name: "Individual Air Conditioning" },
        { icon: <VolumeX size={20} />, name: "Soundproof Walls" },
        { icon: <Bath size={20} />, name: "Walk-in Shower & Toiletries" },

      ]
    },
    {
      title: "Dining Experience",
      items: [
        { icon: <Utensils size={20} />, name: "Traditional Bedouin Zarb Dinners" },
        { icon: <Coffee size={20} />, name: "Continental, Irish & Buffet Breakfast" },
        { icon: <Utensils size={20} />, name: "Middle Eastern, African & Catalan Cuisine" },

      ]
    },
    {
      title: "Desert Activities & Service",
      items: [
        { icon: <Wifi size={20} />, name: "Exceptional Free Wi-Fi" },
        { icon: <Compass size={20} />, name: "4x4 Jeep Tours & Camel Rides" },
        { icon: <Flame size={20} />, name: "Evening Campfire & Bedouin Music" },

      ]
    }
  ];

  return (
    <section className="py-16 md:py-24 px-4 md:px-8 bg-warm-sand border-y border-border">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">

          <h2 className="font-heading text-3xl md:text-4xl text-deep-navy">Camp Facilities & Amenities</h2>
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
                  <li
                    key={i}
                    className={`items-center gap-4 text-deep-navy ${i === 3 ? "hidden md:flex" : "flex"}`}
                  >
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
