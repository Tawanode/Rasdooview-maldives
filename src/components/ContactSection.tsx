"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24 md:py-32 px-4 md:px-8 bg-white relative">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 space-y-8"
          >
            <div>
              <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">Start Your Desert Escape</p>
              <h2 className="font-heading text-4xl md:text-5xl text-deep-navy mb-6">Plan Your Wadi Rum Stay</h2>
              <p className="text-muted-foreground leading-relaxed max-w-md">
                Whether you have questions about our 11 luxury units, authentic Bedouin Zarb dining, or wish to arrange 4x4 Jeep tours across the red dunes, our team is at your service.
              </p>
            </div>

            <div className="space-y-6 pt-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-soft-beige/50 flex items-center justify-center text-primary shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-heading text-xl text-deep-navy mb-1">Property Address</h4>
                  <p className="text-muted-foreground text-sm">
                    Wadi Rum Bella Rose Luxury Camp<br />
                    Wadi Rum Road, Disah Area<br />
                    Wadi Rum Protected Area, Jordan
                  </p>
                  <a 
                    href="https://maps.google.com/?q=Wadi+Rum+Road,+Disah+Area,+Wadi+Rum+Protected+Area,+Jordan" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-block text-xs font-semibold text-primary hover:underline mt-2 tracking-wide"
                  >
                    GET DIRECTIONS &rarr;
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-soft-beige/50 flex items-center justify-center text-primary shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-heading text-xl text-deep-navy mb-1">Contact & Inquiries</h4>
                  <a href="tel:+962791149240" className="text-muted-foreground hover:text-primary transition-colors text-sm">+962 7 9114 9240</a>
                  <button 
                    onClick={() => window.dispatchEvent(new CustomEvent("open-booking-modal"))}
                    className="text-xs font-semibold text-primary hover:underline mt-2 tracking-wide block"
                  >
                    CHECK AVAILABILITY &rarr;
                  </button>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-soft-beige/50 flex items-center justify-center text-primary shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-heading text-xl text-deep-navy mb-1">Guest Services</h4>
                  <p className="text-muted-foreground text-sm">24-Hour Front Desk & Tour Booking Desk</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 w-full"
          >
            <div className="bg-warm-sand/50 rounded-3xl p-8 md:p-10 shadow-sm border border-border/50">
              <h3 className="font-heading text-2xl text-deep-navy mb-6">Send an Inquiry</h3>
              
              {isSubmitted ? (
                <div className="bg-white p-8 rounded-2xl text-center space-y-4 border border-primary/20">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto text-primary mb-4">
                    <Send size={28} />
                  </div>
                  <h4 className="font-heading text-xl text-deep-navy">Message Sent!</h4>
                  <p className="text-sm text-muted-foreground">Thank you for reaching out. Our team will get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-deep-navy">Full Name</label>
                      <Input required className="bg-white" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-deep-navy">Email Address</label>
                      <Input required type="email" className="bg-white" placeholder="john@example.com" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-deep-navy">Subject</label>
                    <Input required className="bg-white" placeholder="Room Availability" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-deep-navy">Message</label>
                    <textarea 
                      required 
                      className="flex min-h-[120px] w-full rounded-md border border-input bg-white px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>
                  <Button type="submit" className="w-full bg-primary hover:bg-deep-navy text-white mt-4 py-6 text-base">
                    Send Message
                  </Button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
