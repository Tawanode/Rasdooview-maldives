"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Plane, Car, MapPin } from "lucide-react";

export default function DiscoverWadiRum() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 3);
    }, 2000); // Change active step every 2 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 md:py-32 bg-deep-navy text-warm-sand overflow-hidden">
      <div className="container mx-auto max-w-6xl px-4 md:px-8">

        {/* Storytelling Section */}
        <div className="flex flex-col lg:flex-row gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex-1 space-y-6"
          >

            <h2 className="font-heading text-4xl md:text-5xl leading-tight text-white">
              Explore the Wonders <br />
              <span className="font-accent italic text-primary bg-white px-3 py-1 inline-block mt-2">of Wadi Rum</span>
            </h2>
            <p className="text-warm-sand/80 leading-relaxed text-lg pt-4">
              Perfectly positioned in the Disah district of the Wadi Rum Protected Area, our camp serves as the ultimate base for exploring iconic red sand dunes and ancient rock formations.
            </p>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex-1 w-full"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <img
                src="/images/wadirum_mountains.jpg"
                alt="Wadi Rum Protected Area dramatic red sandstone mountains"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Getting There Timeline */}
        <div id="getting-here" className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h3 className="font-heading text-3xl md:text-4xl text-white mb-4">Reaching Our Desert Camp</h3>
            <p className="text-warm-sand/80">Located on Wadi Rum Road, Disah Area, Wadi Rum Protected Area, Jordan.</p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-[2px] bg-primary/30 md:-translate-x-1/2" />

            <div className="space-y-12">
              {/* Step 1 */}
              <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-0">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="md:w-[45%] md:text-right pl-20 md:pl-0"
                >
                  <h4 className="font-heading text-xl text-white">King Hussein Int'l Airport (Aqaba)</h4>
                  <p className="text-sm text-warm-sand/60 mt-1">61 km from our camp in Wadi Rum</p>
                </motion.div>
                <div className="absolute left-0 top-0 md:top-1/2 md:-translate-y-1/2 md:left-1/2 md:-translate-x-1/2 z-10">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
                    className={`w-14 h-14 rounded-full border-2 border-primary flex items-center justify-center transition-colors transition-shadow duration-700 ease-in-out ${activeStep === 0
                      ? "bg-primary text-white shadow-[0_0_30px_rgba(0,163,163,0.8)]"
                      : "bg-deep-navy text-primary shadow-none"
                      }`}
                  >
                    <Plane size={24} />
                  </motion.div>
                </div>
                <div className="md:w-[45%] pl-20 md:pl-0 hidden md:block" />
              </div>

              {/* Step 2 */}
              <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-0 mt-12 md:mt-0">
                <div className="md:w-[45%] md:text-right pl-20 md:pl-0 hidden md:block" />
                <div className="absolute left-0 top-0 md:top-1/2 md:-translate-y-1/2 md:left-1/2 md:-translate-x-1/2 z-10">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6, type: "spring" }}
                    className={`w-14 h-14 rounded-full border-2 border-primary flex items-center justify-center transition-colors transition-shadow duration-700 ease-in-out ${activeStep === 1
                      ? "bg-primary text-white shadow-[0_0_30px_rgba(0,163,163,0.8)]"
                      : "bg-deep-navy text-primary shadow-none"
                      }`}
                  >
                    <Car size={24} />
                  </motion.div>
                </div>
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="md:w-[45%] pl-20 md:pl-0 text-left"
                >
                  <h4 className="font-heading text-xl text-white">Disah Desert Gateway</h4>
                  <p className="text-sm text-warm-sand/80 mt-1">Scenic desert drive with free on-site private parking</p>
                </motion.div>
              </div>

              {/* Step 3 */}
              <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-0 mt-12 md:mt-0">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                  className="md:w-[45%] md:text-right pl-20 md:pl-0"
                >
                  <h4 className="font-heading text-xl text-white">Wadi Rum Bella Rose Luxury Camp</h4>
                  <p className="text-sm text-warm-sand/60 mt-1">Bedouin welcome tea, 24-hour reception & check-in</p>
                </motion.div>
                <div className="absolute left-0 top-0 md:top-1/2 md:-translate-y-1/2 md:left-1/2 md:-translate-x-1/2 z-10">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 1.0, type: "spring" }}
                    className={`w-14 h-14 rounded-full border-2 border-primary flex items-center justify-center transition-colors transition-shadow duration-700 ease-in-out ${activeStep === 2
                      ? "bg-primary text-white shadow-[0_0_30px_rgba(0,163,163,0.8)]"
                      : "bg-deep-navy text-primary shadow-none"
                      }`}
                  >
                    <MapPin size={24} />
                  </motion.div>
                </div>
                <div className="md:w-[45%] pl-20 md:pl-0 hidden md:block" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
