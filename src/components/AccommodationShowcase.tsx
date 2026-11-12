"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Wifi, Wind, Tv, Coffee } from "lucide-react";

export default function AccommodationShowcase() {
  const rooms = [
    {
      title: "Double Room with Mountain View",
      description: "Every unit provides a quiet, private space with individual air conditioning, private ensuite bathroom with walk-in shower, soundproof walls, and stunning mountain views from your private terrace.",
      image: "/images/wadirum_room_interior.jpg",
      fallbackImage: "/images/wadirum_camp_exterior.jpg",

    },
    {
      title: "Superior Deluxe Double or Twin Room",
      description: "A refined desert haven featuring flexible double or twin setups, soundproof walls, premium bathrobes, coffee machine, desk, and a private terrace offering dramatic views of Wadi Rum's majestic rock formations.",
      image: "/images/wadirum_room_deluxe.jpg",
      fallbackImage: "/images/wadirum_mountains.jpg",

    },
    {
      title: "Triple Room with Mountain View",
      description: "Comfortably configured for three guests or families traveling together. Enjoy private ensuite amenities and expansive desert mountain vistas.",
      image: "/images/wadirum_sand_dunes.jpg",
      fallbackImage: "/images/wadirum_sunset.jpg",

    },
    {
      title: "Luxury Triple Room",
      description: "An exceptional desert glamping experience featuring select units with an authentic fireplace, private ensuite bathroom, and a spacious terrace looking out onto the red desert sands.",
      image: "/images/wadirum_campfire.jpg",
      fallbackImage: "/images/wadirum_stargazing.jpg",

    }
  ];

  return (
    <section id="accommodations" className="py-24 md:py-32 px-4 md:px-8 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-20">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">Our Accommodations</p>
          <h2 className="font-heading text-4xl md:text-5xl text-deep-navy mb-4 md:mb-6">Exclusive 5-Star Desert Glamping</h2>
          <p className="hidden md:block text-muted-foreground leading-relaxed">
            Enjoy an exclusive and relaxing stay in our thoughtfully designed desert accommodations. Featuring family and interconnected options, every unit provides a quiet, private space with stunning mountain views.
          </p>
        </div>

        <div className="space-y-24 md:space-y-32">
          {rooms.map((room, index) => (
            <div key={index} className={`flex flex-col gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 1 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="flex-1 w-full"
              >
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl group">
                  <img
                    src={room.image}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = room.fallbackImage;
                    }}
                    alt={room.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-deep-navy/5 group-hover:bg-transparent transition-colors duration-500" />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: index % 2 === 1 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="flex-1 space-y-6 w-full lg:px-8"
              >
                <h3 className="font-heading text-3xl md:text-4xl text-deep-navy">{room.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {room.description}
                </p>



                <Button
                  variant="link"
                  className="text-primary hover:text-deep-navy p-0 h-auto font-medium tracking-wide group"
                  onClick={() => {
                    window.dispatchEvent(new CustomEvent("open-booking-modal"));
                  }}
                >
                  Request This Unit
                  <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
