"use client";

import { motion } from "framer-motion";

export default function WelcomeSection() {
  return (
    <section className="py-24 md:py-32 px-4 md:px-8 bg-warm-sand">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex-1 space-y-8"
          >
            <div>
              <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">Our Story</p>
              <h2 className="font-heading text-4xl md:text-5xl text-deep-navy leading-tight mb-6">
                Your Island Home <br />
                <span className="font-accent italic text-primary">Away From Home</span>
              </h2>
              <div className="w-20 h-[1px] bg-primary/30" />
            </div>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Located directly on the stunning shores of Amitié Beach, Tropical Beach House Praslin offers spacious self-catering apartments surrounded by lush tropical gardens and breathtaking ocean views.
              </p>
              <p>
                Whether you're planning a romantic escape or a family holiday, you'll enjoy the freedom, comfort, and authentic Seychellois hospitality that make every stay unforgettable.
              </p>
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-deep-navy font-medium pt-4">
              {['Beachfront Location', 'Self-Catering Freedom', 'Tropical Gardens', 'Direct Beach Access'].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Image Grid */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex-1 relative"
          >
            <div className="aspect-[4/5] relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/images/seychelles_bbq_garden.png" 
                alt="Authentic beachfront living experience" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-deep-navy/10" />
            </div>
            
            {/* Floating Image */}
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="absolute -bottom-12 -left-12 w-2/3 aspect-square rounded-2xl overflow-hidden shadow-xl border-4 border-warm-sand hidden md:block"
            >
              <img 
                src="/images/seychelles_apartment.png" 
                alt="Spacious self-catering apartments" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
