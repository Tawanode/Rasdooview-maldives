"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function GuestReviews() {
  const reviews = [
    {
      name: "Damien",
      country: "France",
      source: "Verified Guest",
      rating: 5,
      text: "A level beyond expectations. Attention to detail, excellent service, and professionalism worthy of appreciation and praise.",
    },
    {
      name: "Flora",
      country: "Venezuela",
      source: "Verified Guest",
      rating: 5,
      text: "Our stay was really lovely, and we're so grateful to the team for their warm welcome, genuine hospitality, and attention to every detail. Clean and comfortable.",
    },
    {
      name: "Lina",
      country: "Russia",
      source: "Verified Guest",
      rating: 5,
      text: "The jeep tour through Wadi Rum was one of the best parts of our trip, and watching the stars together at night was truly unforgettable. The staff were friendly...",
    }
  ];

  return (
    <section className="py-24 px-4 md:px-8 bg-deep-navy text-warm-sand overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">

            <h2 className="font-heading text-4xl md:text-5xl text-white mb-4">What Our Guests Say</h2>
            <p className="text-warm-sand/80 text-base mb-6 leading-relaxed">
              Discover why travelers rate us 9.9/10 and appreciate the peaceful surroundings, exceptional cleanliness, and warm Bedouin hospitality.
            </p>
            <div className="flex items-center gap-4 text-white">
              <div className="text-4xl font-heading font-semibold">9.9<span className="text-xl text-white/60">/10</span></div>
              <div>
                <div className="flex text-primary">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-sm text-warm-sand/80 mt-1">Exceptional &bull; Verified Guest Rating</p>
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
