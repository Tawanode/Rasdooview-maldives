"use client";

import { motion } from "framer-motion";

export default function DiningExperience() {
  const selfCatering = [
    "Fully Equipped Kitchenette", "Outdoor BBQ Area", "Nearby Creole Restaurants", "Fresh Local Seafood", "Dining Area"
  ];
  
  const kitchenAmenities = [
    "Refrigerator", "Microwave", "Stove", "Electric Kettle", "Kitchenware", "Coffee & Tea Facilities"
  ];

  return (
    <section id="dining" className="py-24 md:py-32 px-4 md:px-8 bg-white overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex-1 w-full"
          >
            <div className="relative aspect-square md:aspect-[4/3] lg:aspect-square rounded-full md:rounded-2xl lg:rounded-full overflow-hidden shadow-2xl">
              <img 
                src="/images/seychelles_bbq_garden.png" 
                alt="Self-catering and BBQ at Tropical Beach House Praslin" 
                className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-1000"
              />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex-1 space-y-8"
          >
            <div>
              <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">Dining Experience</p>
              <h2 className="font-heading text-4xl md:text-5xl text-deep-navy leading-tight mb-6">
                Cook at Your <br />
                <span className="font-accent italic text-primary">Own Pace</span>
              </h2>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              Every apartment includes a fully equipped kitchenette, giving you complete flexibility during your stay. Nearby cafés and local Creole restaurants offer delicious island cuisine, while the property's BBQ facilities are perfect for outdoor dining with family and friends.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-border">
              <div>
                <h4 className="font-heading text-xl text-deep-navy mb-4">Dining Highlights</h4>
                <ul className="space-y-2">
                  {selfCatering.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1 h-1 rounded-full bg-primary" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-heading text-xl text-deep-navy mb-4">Kitchen Includes</h4>
                <ul className="space-y-2">
                  {kitchenAmenities.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1 h-1 rounded-full bg-primary" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
