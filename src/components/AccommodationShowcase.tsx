"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Wifi, Wind, Tv, Coffee } from "lucide-react";

export default function AccommodationShowcase() {
  const rooms = [
    {
      title: "Ground Floor Beachfront Apartments",
      description: "Step right out onto Amitié Beach from your private terrace. These apartments offer direct beach access, comfortable bedding, and a fully equipped kitchenette.",
      image: "/images/seychelles_apartment.png",
      amenities: ["Air Conditioning", "Free WiFi", "Kitchenette", "Beach Access"],
    },
    {
      title: "Two-Bedroom Family Apartments",
      description: "Designed for families, this expansive apartment provides multiple beds, extra space, a large living area, and a private balcony with ocean views.",
      image: "/images/seychelles_apartment.png",
      amenities: ["Spacious Living Area", "Private Balcony", "Kitchenette", "Ocean Views"],
    },
    {
      title: "Garden View Apartments",
      description: "Enjoy peaceful moments surrounded by lush tropical gardens. These apartments offer a serene escape with modern self-catering facilities.",
      image: "/images/seychelles_apartment.png",
      amenities: ["Tropical Gardens", "Private Terrace", "Kitchenette", "Dining Area"],
    }
  ];

  return (
    <section id="accommodations" className="py-24 md:py-32 px-4 md:px-8 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">Our Apartments</p>
          <h2 className="font-heading text-4xl md:text-5xl text-deep-navy mb-6">Comfortable Apartments Designed for Island Living</h2>
          <p className="text-muted-foreground leading-relaxed">
            Every apartment at Tropical Beach House Praslin is designed to be your serene sanctuary after a day of island adventures. Clean, spacious, and fully equipped for self-catering.
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
                
                <div className="grid grid-cols-2 gap-4 py-6 border-y border-border">
                  {room.amenities.map((amenity, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-deep-navy font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {amenity}
                    </div>
                  ))}
                </div>

                <Button 
                  variant="link" 
                  className="text-primary hover:text-deep-navy p-0 h-auto font-medium tracking-wide group"
                  onClick={() => {
                    const widget = document.getElementById("booking-widget");
                    widget?.scrollIntoView({ behavior: "smooth", block: "center" });
                  }}
                >
                  Request This Room
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
