"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function GuestReviews() {
  const reviews = [
    {
      name: "Sarah & Mark",
      country: "United Kingdom",
      source: "Booking.com",
      rating: 5,
      text: "Absolutely perfect stay! The beachfront location is unbeatable. Having a fully equipped kitchenette gave us the freedom we wanted, and the tropical gardens were so peaceful. Highly recommend!",
    },
    {
      name: "David M.",
      country: "Australia",
      source: "TripAdvisor",
      rating: 5,
      text: "A genuine island experience without sacrificing comfort. Our family apartment was incredibly spacious and clean. Direct beach access made our family vacation perfect.",
    },
    {
      name: "Elena P.",
      country: "Italy",
      source: "Google",
      rating: 5,
      text: "Beautiful beachfront guesthouse. We felt like family from the moment we arrived. Waking up to ocean views and enjoying the BBQ facilities made our trip unforgettable. Will definitely return.",
    }
  ];

  return (
    <section className="py-24 px-4 md:px-8 bg-deep-navy text-warm-sand overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">Testimonials</p>
            <h2 className="font-heading text-4xl md:text-5xl text-white mb-6">Loved By Guests Worldwide</h2>
            <div className="flex items-center gap-4 text-white">
              <div className="text-4xl font-heading font-semibold">4.7<span className="text-xl text-white/60">/5</span></div>
              <div>
                <div className="flex text-primary">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-sm text-warm-sand/80 mt-1">Based on 150+ reviews</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors"
            >
              <div className="flex text-primary mb-6">
                {[...Array(review.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="text-white/90 leading-relaxed mb-8 text-sm md:text-base italic">
                "{review.text}"
              </p>
              <div className="border-t border-white/10 pt-4 flex justify-between items-end">
                <div>
                  <h4 className="font-heading text-white text-lg">{review.name}</h4>
                  <p className="text-xs text-warm-sand/60">{review.country}</p>
                </div>
                <span className="text-xs font-medium px-2 py-1 bg-white/10 rounded-md text-white/80">
                  {review.source}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
