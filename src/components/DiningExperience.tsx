"use client";

import { motion } from "framer-motion";

export default function DiningExperience() {
  const diningHighlights = [
    "Traditional Bedouin Zarb Dinners",
    "Family-Friendly On-Site Restaurant",
    "Middle Eastern, African & Catalan Cuisines",
    "Continental, English/Irish & Buffet Breakfast",

  ];

  const diningServices = [
    "In-Room Grocery Delivery",
    "Room Service",
    "Communal Bedouin Tea by the Campfire",
    "Fresh Locally Prepared Ingredients",
    "Outdoor Dining Under the Stars"
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
                src="/images/wadirum_zarb_dinner.jpg"
                alt="Traditional Bedouin Zarb dinner at Wadi Rum Bella Rose Luxury Camp"
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

              <h2 className="font-heading text-4xl md:text-5xl text-deep-navy leading-tight mb-6">
                Authentic Bedouin Zarb & <br />
                <span className="font-accent italic text-primary">Desert Dining</span>
              </h2>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              Experience the true culinary soul of the desert at our family-friendly on-site restaurant. Savor our signature Bedouin Zarb dinner—tender meats and seasoned vegetables.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-border">
              <div>
                <h4 className="font-heading text-xl text-deep-navy mb-4">Dining Highlights</h4>
                <ul className="space-y-2">
                  {diningHighlights.map((item, i) => (
                    <li
                      key={i}
                      className={`items-center gap-2 text-sm text-muted-foreground ${i >= diningHighlights.length - 2 ? "hidden md:flex" : "flex"}`}
                    >
                      <div className="w-1 h-1 rounded-full bg-primary shrink-0" /> <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-heading text-xl text-deep-navy mb-4">Services & Comforts</h4>
                <ul className="space-y-2">
                  {diningServices.map((item, i) => (
                    <li
                      key={i}
                      className={`items-center gap-2 text-sm text-muted-foreground ${i >= diningServices.length - 3 ? "hidden md:flex" : "flex"}`}
                    >
                      <div className="w-1 h-1 rounded-full bg-primary shrink-0" /> <span>{item}</span>
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
