"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Compass,
  Car,
  CheckCircle2,
  ArrowRight,
  Send,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import FAQSection from "@/components/FAQSection";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    interest: "Suite Reservation",
    dates: "",
    guests: "2 Guests",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="bg-[#FAF6F0] min-h-screen text-[#221C18]">
      {/* 1. Hero Banner */}
      <section className="relative min-h-[48vh] sm:min-h-[52vh] flex items-center justify-center overflow-hidden pt-28 pb-16 px-4 md:px-8">
        {/* Background Image with Cinematic Overlay */}
        <div className="absolute inset-0 w-full h-full z-0">
          <img
            src="/images/wadirum_camp_exterior.jpg"
            alt="Wadi Rum Bella Rose Luxury Camp Exterior and Desert Mountains"
            className="w-full h-full object-cover object-[center_60%]"
          />
          {/* Dark luxury gradient for crisp text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-[#FAF6F0] z-10" />
        </div>

        {/* Hero Content */}
        <div className="container mx-auto max-w-4xl text-center relative z-20 text-white">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-[family-name:var(--font-montserrat)] text-xs sm:text-sm uppercase tracking-[0.34em] font-semibold text-[#DCC7A1] mb-3 drop-shadow-sm"
          >
            CONCIERGE & GUEST SERVICES
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-[family-name:var(--font-el-messiri)] text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem] font-medium uppercase tracking-[0.05em] text-white leading-tight drop-shadow-sm mb-4"
          >
            PLAN YOUR DESERT ESCAPE
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-[family-name:var(--font-outfit)] text-sm sm:text-base md:text-lg text-white/90 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-sm"
          >
            Whether arranging bespoke 4x4 Jeep safaris, reserving our private panoramic suites, or inquiring about authentic Bedouin Zarb dining, our desert hosts are at your personal service.
          </motion.p>
        </div>
      </section>

      {/* 2. Main Content Grid */}
      <section className="py-12 sm:py-16 md:py-24 px-4 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">

            {/* Left Column (5 cols): Direct Contacts & Camp Sanctuary Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 space-y-8"
            >
              <div>
                <p className="font-[family-name:var(--font-montserrat)] text-xs uppercase tracking-[0.28em] font-semibold text-[#A8582C] mb-2">
                  5-STAR HOSPITALITY
                </p>
                <h2 className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl md:text-4xl text-[#221C18] font-normal tracking-tight">
                  At Your Service
                </h2>
                <div className="w-12 h-[1px] bg-[#A8582C]/40 mt-3" />
              </div>

              {/* Contact Information Blocks */}
              <div className="space-y-6">

                {/* 1. Property Location */}
                <div className="bg-[#F3ECE0]/60 p-6 rounded-2xl border border-[#E5DAC8] transition-all hover:bg-[#F3ECE0] hover:shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#A8582C]/10 text-[#A8582C] flex items-center justify-center shrink-0 mt-0.5">
                      <MapPin size={20} strokeWidth={1.5} />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-[family-name:var(--font-playfair)] text-lg font-medium text-[#221C18]">
                        Camp Location
                      </h3>
                      <p className="font-[family-name:var(--font-outfit)] text-sm text-[#4A3E37] leading-relaxed">
                        Wadi Rum Bella Rose Luxury Camp<br />
                        Wadi Rum Road, Disah District<br />
                        Wadi Rum Protected Area, Jordan
                      </p>
                      <a
                        href="https://www.google.com/maps/place/Wadi+Rum+Bella+Rose+Luxury+Camp/@29.6640106,35.462018,15z/data=!4m2!3m1!1s0x1500ef89cd001a5d:0x66a4738f8d42b55c"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-[#A8582C] hover:text-[#803F1E] pt-2 transition-colors"
                      >
                        Open in Google Maps <ArrowRight size={13} />
                      </a>
                    </div>
                  </div>
                </div>

                {/* 2. Direct Inquiries & WhatsApp */}
                <div className="bg-[#F3ECE0]/60 p-6 rounded-2xl border border-[#E5DAC8] transition-all hover:bg-[#F3ECE0] hover:shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#A8582C]/10 text-[#A8582C] flex items-center justify-center shrink-0 mt-0.5">
                      <Phone size={20} strokeWidth={1.5} />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-[family-name:var(--font-playfair)] text-lg font-medium text-[#221C18]">
                        Direct Inquiries & Bookings
                      </h3>
                      <p className="font-[family-name:var(--font-outfit)] text-sm text-[#4A3E37]">
                        Direct Line & WhatsApp:{" "}
                        <a
                          href="tel:+962791149240"
                          className="font-medium text-[#221C18] hover:text-[#A8582C] transition-colors underline decoration-dotted"
                        >
                          +962 7 9114 9240
                        </a>
                      </p>
                      <p className="font-[family-name:var(--font-outfit)] text-sm text-[#4A3E37]">
                        Email: <span className="font-medium text-[#221C18]">reservations@wadirumbellarose.com</span>
                      </p>
                      <div className="flex flex-wrap items-center gap-4 pt-2">
                        <a
                          href="https://wa.me/962791149240"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-[#1d4334] hover:text-[#143225] transition-colors"
                        >
                          Chat on WhatsApp &rarr;
                        </a>
                        <button
                          onClick={() => window.dispatchEvent(new CustomEvent("open-booking-modal"))}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-[#0b382d] hover:text-[#07241c] transition-colors"
                        >
                          Check Live Availability &rarr;
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 3. 24/7 Concierge & Tour Desk */}
                <div className="bg-[#F3ECE0]/60 p-6 rounded-2xl border border-[#E5DAC8] transition-all hover:bg-[#F3ECE0] hover:shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#A8582C]/10 text-[#A8582C] flex items-center justify-center shrink-0 mt-0.5">
                      <Clock size={20} strokeWidth={1.5} />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-[family-name:var(--font-playfair)] text-lg font-medium text-[#221C18]">
                        24-Hour Front Desk
                      </h3>
                      <p className="font-[family-name:var(--font-outfit)] text-sm text-[#4A3E37] leading-relaxed">
                        Check-in: <span className="font-medium text-[#221C18]">14:00 - 23:00</span> &bull; Check-out: <span className="font-medium text-[#221C18]">07:00 - 11:30</span>
                      </p>

                    </div>
                  </div>
                </div>

              </div>
            </motion.div>

            {/* Right Column (7 cols): The Bespoke Inquiry Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:col-span-7"
            >
              <div className="bg-[#F5EFEB] rounded-3xl p-8 sm:p-10 md:p-12 border border-[#E3DAC9] shadow-sm">

                <div className="mb-8">
                  <p className="font-[family-name:var(--font-montserrat)] text-xs uppercase tracking-[0.28em] font-semibold text-[#A8582C] mb-2">
                    BESPOKE INQUIRIES
                  </p>
                  <h3 className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl text-[#221C18] font-normal tracking-tight">
                    Send an Inquiry
                  </h3>

                </div>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-[#FAF6F0] p-8 sm:p-10 rounded-2xl text-center space-y-4 border border-[#A8582C]/25"
                  >
                    <div className="w-14 h-14 bg-[#0b382d]/10 rounded-full flex items-center justify-center mx-auto text-[#0b382d] mb-2">
                      <CheckCircle2 size={32} />
                    </div>
                    <h4 className="font-[family-name:var(--font-playfair)] text-2xl text-[#221C18]">
                      Inquiry Received
                    </h4>
                    <p className="font-[family-name:var(--font-outfit)] text-sm text-[#5B4C43] max-w-md mx-auto leading-relaxed">
                      Thank you for contacting Wadi Rum Bella Rose Luxury Camp. Our guest relations team is reviewing your request and will respond directly to your email shortly.
                    </p>
                    <div className="pt-4">
                      <Button
                        type="button"
                        onClick={() => setIsSubmitted(false)}
                        variant="outline"
                        className="border-[#A8582C]/40 text-[#A8582C] hover:bg-[#A8582C]/10 text-xs uppercase tracking-widest px-6"
                      >
                        Send Another Message
                      </Button>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Name & Email Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <label className="font-[family-name:var(--font-montserrat)] text-xs uppercase tracking-wider font-medium text-[#3D332D]">
                          Full Name *
                        </label>
                        <Input
                          required
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="Lord / Lady / Traveler Name"
                          className="bg-white/90 border-[#D8CEBD] text-[#221C18] focus-visible:ring-[#0b382d] h-12 text-sm rounded-xl"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="font-[family-name:var(--font-montserrat)] text-xs uppercase tracking-wider font-medium text-[#3D332D]">
                          Email Address *
                        </label>
                        <Input
                          required
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="traveler@example.com"
                          className="bg-white/90 border-[#D8CEBD] text-[#221C18] focus-visible:ring-[#0b382d] h-12 text-sm rounded-xl"
                        />
                      </div>
                    </div>

                    {/* Phone & Inquiry Type Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <label className="font-[family-name:var(--font-montserrat)] text-xs uppercase tracking-wider font-medium text-[#3D332D]">
                          Phone / WhatsApp
                        </label>
                        <Input
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+1 / +44 / +962..."
                          className="bg-white/90 border-[#D8CEBD] text-[#221C18] focus-visible:ring-[#0b382d] h-12 text-sm rounded-xl"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="font-[family-name:var(--font-montserrat)] text-xs uppercase tracking-wider font-medium text-[#3D332D]">
                          Inquiring About
                        </label>
                        <select
                          value={formData.interest}
                          onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                          className="w-full h-12 px-3.5 rounded-xl border border-[#D8CEBD] bg-white/90 text-[#221C18] text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0b382d]"
                        >
                          <option value="Suite Reservation">Suite Reservation</option>
                          <option value="4x4 Jeep Tour & Camel Ride">4x4 Jeep Tour & Camel Ride</option>
                          <option value="Traditional Zarb Dining">Traditional Zarb Dining</option>
                          <option value="Airport or Petra Transfer">Airport or Petra Transfer</option>
                          <option value="Private Camp Buyout / Events">Private Camp Buyout / Events</option>
                          <option value="Other Inquiries">Other Inquiries</option>
                        </select>
                      </div>
                    </div>

                    {/* Dates & Party Size */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <label className="font-[family-name:var(--font-montserrat)] text-xs uppercase tracking-wider font-medium text-[#3D332D]">
                          Estimated Dates
                        </label>
                        <Input
                          value={formData.dates}
                          onChange={(e) => setFormData({ ...formData, dates: e.target.value })}
                          placeholder="e.g., Nov 18 - Nov 21"
                          className="bg-white/90 border-[#D8CEBD] text-[#221C18] focus-visible:ring-[#0b382d] h-12 text-sm rounded-xl"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="font-[family-name:var(--font-montserrat)] text-xs uppercase tracking-wider font-medium text-[#3D332D]">
                          Party Size
                        </label>
                        <Input
                          value={formData.guests}
                          onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                          placeholder="e.g., 2 Adults, 1 Child"
                          className="bg-white/90 border-[#D8CEBD] text-[#221C18] focus-visible:ring-[#0b382d] h-12 text-sm rounded-xl"
                        />
                      </div>
                    </div>

                    {/* Message Area */}
                    <div className="space-y-2">
                      <label className="font-[family-name:var(--font-montserrat)] text-xs uppercase tracking-wider font-medium text-[#3D332D]">
                        Your Message / Questions *
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your planned arrival, dietary preferences, or excursions you would love to experience..."
                        className="w-full rounded-xl border border-[#D8CEBD] bg-white/90 p-3.5 text-sm text-[#221C18] placeholder:text-[#8C7E74] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0b382d]"
                      />
                    </div>

                    {/* Action Button */}
                    <Button
                      type="submit"
                      className="w-full bg-[#0b382d] hover:bg-[#07241c] text-white py-6 text-sm font-medium tracking-[0.2em] uppercase rounded-xl transition-all duration-300 shadow-md hover:shadow-lg mt-2"
                    >
                      <span className="flex items-center justify-center gap-2">
                        <Send size={16} /> Send Message to Concierge
                      </span>
                    </Button>
                  </form>
                )}

              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2.5 Desert Sanctuary Map Container */}
      <section className="pb-16 sm:pb-20 md:pb-24 px-4 md:px-8">
        <div className="container mx-auto max-w-6xl">
          {/* Section Heading */}
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <p className="font-[family-name:var(--font-montserrat)] text-xs uppercase tracking-[0.3em] font-semibold text-[#A8582C] mb-2">
              DESERT SANCTUARY LOCATION
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl md:text-4xl text-[#221C18] font-normal tracking-tight">
              Where to Find Us
            </h2>
            <div className="w-12 h-[1px] bg-[#A8582C]/40 mx-auto mt-3" />
          </div>

          {/* Interactive Map Container */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
            className="relative rounded-3xl overflow-hidden border border-[#E3DAC9] shadow-md bg-[#F5EFEB]"
          >
            {/* Embedded Google Map */}
            <div className="w-full h-[400px] sm:h-[460px] md:h-[520px] relative">
              <iframe
                title="Wadi Rum Bella Rose Luxury Camp Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6933.8458685475825!2d35.46201799357912!3d29.664010600000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1500ef89cd001a5d%3A0x66a4738f8d42b55c!2sWadi%20Rum%20Bella%20Rose%20Luxury%20Camp!5e0!3m2!1sen!2sin!4v1794499616670!5m2!1sen!2sin"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>


          </motion.div>
        </div>
      </section>

      {/* 3. Arrival & Route Logistics Guide (Peace of Mind) */}
      <section className="py-14 sm:py-18 bg-[#F3ECE0] border-t border-[#E3DAC9] px-4 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="font-[family-name:var(--font-montserrat)] text-xs uppercase tracking-[0.3em] font-semibold text-[#A8582C] mb-2">
              JOURNEY TO DISAH
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl md:text-4xl text-[#221C18] font-normal tracking-tight">
              Arriving at Bella Rose
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <div className="bg-[#FAF6F0] p-6 rounded-2xl border border-[#E3DAC9]">
              <div className="flex items-center gap-3 text-[#A8582C] mb-3">
                <Car size={20} strokeWidth={1.5} />
                <h3 className="font-[family-name:var(--font-playfair)] text-lg font-medium text-[#221C18]">
                  From Aqaba
                </h3>
              </div>
              <p className="font-[family-name:var(--font-outfit)] text-sm text-[#5B4C43] leading-relaxed">
                61 km (~50 minutes) drive via Highway 15 / Desert Highway. King Hussein International Airport is the nearest international arrival hub.
              </p>
            </div>

            <div className="bg-[#FAF6F0] p-6 rounded-2xl border border-[#E3DAC9]">
              <div className="flex items-center gap-3 text-[#A8582C] mb-3">
                <Compass size={20} strokeWidth={1.5} />
                <h3 className="font-[family-name:var(--font-playfair)] text-lg font-medium text-[#221C18]">
                  From Petra (Wadi Musa)
                </h3>
              </div>
              <p className="font-[family-name:var(--font-outfit)] text-sm text-[#5B4C43] leading-relaxed">
                115 km (~1 hour 45 minutes) via the Kings Highway. Private chauffeur transfers between Petra and our camp can be arranged upon request.
              </p>
            </div>

            <div className="bg-[#FAF6F0] p-6 rounded-2xl border border-[#E3DAC9]">
              <div className="flex items-center gap-3 text-[#A8582C] mb-3">
                <MapPin size={20} strokeWidth={1.5} />
                <h3 className="font-[family-name:var(--font-playfair)] text-lg font-medium text-[#221C18]">
                  Meeting Point & Parking
                </h3>
              </div>
              <p className="font-[family-name:var(--font-outfit)] text-sm text-[#5B4C43] leading-relaxed">
                Free on-site private parking is available right at our camp property in Disah, eliminating long shuttle delays common to crowded tourist zones.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Frequently Asked Questions */}
      <FAQSection />
    </div>
  );
}

