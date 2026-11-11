"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function ActivitiesExcursions() {
  const activities = [
    { title: "Snorkeling", desc: "Swim alongside graceful sea turtles and tropical fish in their natural coral reef habitat." },
    { title: "Island Hopping", desc: "Safe and thrilling excursions to explore nearby islands and their unique beauty." },
    { title: "Deep Sea Fishing", desc: "Experience the thrill of catching big game fish in the deep waters around Seychelles." },
    { title: "Hiking & Beach Walks", desc: "Discover lush trails and pristine, isolated stretches of white sand surrounded by ocean." },
    { title: "Creole Cooking", desc: "Learn to prepare authentic Seychellois cuisine with fresh local ingredients." },
    { title: "Boat Tours", desc: "Enjoy a relaxing cruise to experience spectacular sunsets and coastal views." },
  ];

  const slideshowImages = [
    { src: "/images/seychelles_snorkeling.png", title: "Marine Life Encounters", subtitle: "Experience the vibrant underwater world." },
    { src: "/images/seychelles_anse_lazio.png", title: "Spectacular Beaches", subtitle: "Explore some of the world's best coastlines." },
    { src: "/images/seychelles_vallee_de_mai.png", title: "Lush Nature", subtitle: "Discover exotic jungle reserves." },
    { src: "/images/seychelles_beach_couple.png", title: "Romantic Escapes", subtitle: "Enjoy perfect moments by the sea." }
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
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">Island Adventures</p>
          <h2 className="font-heading text-4xl md:text-5xl text-deep-navy mb-6">Explore the Best of Praslin</h2>
          <p className="text-muted-foreground leading-relaxed">
            Praslin is famous for its incredible nature and beaches. We can assist you in arranging authentic excursions with trusted local guides so you can experience the best of Seychelles.
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
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                    idx === currentImageIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                  }`}
                >
                  <img 
                    src={img.src} 
                    alt={img.title} 
                    className="w-full h-full object-cover transition-transform duration-[5000ms] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/90 via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-8 left-8 right-8 text-white">
                    <h3 className="font-heading text-3xl mb-2 drop-shadow-md">{img.title}</h3>
                    <p className="text-white/90 text-sm drop-shadow-sm">{img.subtitle}</p>
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
