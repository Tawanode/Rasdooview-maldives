"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function ActivitiesExcursions() {
  const activities = [
    { title: "4x4 Jeep Tours", desc: "Explore towering sandstone arches, dramatic canyons, and historic landmarks, bookable via our tour desk." },
    { title: "Camel Rides", desc: "Experience the timeless rhythm of the desert on a peaceful guided camel trek across golden dunes." },
    { title: "Sandboarding", desc: "Experience the thrill of gliding down the spectacular red sand dunes right in our desert backyard." },
    { title: "Campfire & Bedouin Music", desc: "Gather around the outdoor fireplace for evening entertainment, traditional Bedouin music, and warm mint tea." },
    { title: "Spectacular Stargazing", desc: "Marvel at crystal-clear celestial vistas and the Milky Way stretching across dark, unpolluted desert skies." },
    { title: "Fitness Center & Solarium", desc: "Keep up with your wellness routine in our fitness center and relax on the panoramic desert sun terrace." },
  ];

  const slideshowImages = [
    { src: "/images/wadirum_jeep_tour.jpg", title: "4x4 Jeep Safaris", subtitle: "Traverse towering red dunes and desert canyons." },
    { src: "/images/wadirum_camel_ride.jpg", title: "Traditional Camel Treks", subtitle: "Experience the timeless rhythm of the desert." },
    { src: "/images/wadirum_stargazing.jpg", title: "Milky Way Stargazing", subtitle: "Marvel at thousands of stars from the outdoor lounge." },
    { src: "/images/wadirum_sunset.jpg", title: "Desert Sunsets", subtitle: "Witness the magical golden hour over sandstone peaks." }
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % slideshowImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="experiences" className="py-24 md:py-32 px-4 md:px-8 bg-soft-beige/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-16">

          <h2 className="font-heading text-4xl md:text-5xl text-deep-navy mb-4 md:mb-6">Unforgettable Desert Experiences</h2>
          <p className="hidden md:block text-muted-foreground leading-relaxed">
            From thrilling 4x4 Jeep tours across red dunes to quiet evenings of Bedouin music by the open fire, our tour desk will curate your ideal desert itinerary.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex-1 w-full"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl relative group">
              {slideshowImages.map((img, idx) => (
                <div
                  key={idx}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${idx === currentImageIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                    }`}
                >
                  <img
                    src={img.src}
                    alt={img.title}
                    className="w-full h-full object-cover transition-transform duration-[5000ms] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent z-10" />
                  <div className="absolute bottom-8 left-8 right-8 z-20">
                    <h3 className="font-heading text-2xl sm:text-3xl !text-[#FAF6EE] mb-2 drop-shadow-md font-medium tracking-tight">
                      {img.title}
                    </h3>
                    <p className="text-[#FAF6EE]/90 text-sm drop-shadow-sm font-normal">
                      {img.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            {activities.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-border/50"
              >
                <h4 className="font-heading text-lg text-deep-navy mb-2">{activity.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{activity.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
