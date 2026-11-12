"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import CustomDatePicker from "./CustomDatePicker";

export default function BookingBar({ embedded = false }: { embedded?: boolean }) {
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);

  const [checkIn, setCheckIn] = useState<Date | null>(null);
  const [checkOut, setCheckOut] = useState<Date | null>(null);

  const handleBookNow = () => {
    window.dispatchEvent(
      new CustomEvent("open-booking-modal", {
        detail: {
          checkIn,
          checkOut,
          adults,
          children
        }
      })
    );
  };

  const content = (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: embedded ? 0.9 : 0.2 }}
      className="bg-[#fbf9f5]/95 backdrop-blur-xl rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.22)] p-4 md:p-6 lg:p-0 flex flex-col lg:flex-row items-center justify-between border border-white/60 transition-all duration-300"
    >
      {/* Check In */}
      <div className="flex-1 w-full lg:w-auto p-3.5 sm:p-4 lg:p-6 lg:border-r border-[#e8dfd1]/80">
        <p className="text-[11px] text-[#8c8273] uppercase tracking-widest font-semibold mb-2">Check In</p>
        <CustomDatePicker 
          label="Check In"
          value={checkIn}
          onChange={setCheckIn}
        />
      </div>

      {/* Check Out */}
      <div className="flex-1 w-full lg:w-auto p-3.5 sm:p-4 lg:p-6 lg:border-r border-[#e8dfd1]/80">
        <p className="text-[11px] text-[#8c8273] uppercase tracking-widest font-semibold mb-2">Check Out</p>
        <CustomDatePicker 
          label="Check Out"
          value={checkOut}
          onChange={setCheckOut}
          minDate={checkIn}
        />
      </div>

      {/* Guests */}
      <div className="flex-[1.6] w-full lg:w-auto p-3.5 sm:p-4 lg:p-6 flex flex-col justify-center">
        <p className="text-[11px] text-[#8c8273] uppercase tracking-widest font-semibold mb-2">Guests</p>
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
          
          {/* Adults */}
          <div className="flex items-center gap-3">
            <span className="text-deep-navy text-sm font-medium w-12">Adults</span>
            <div className="flex items-center gap-2.5">
              <button 
                type="button"
                onClick={() => setAdults(Math.max(1, adults - 1))}
                aria-label="Decrease adults"
                className="w-7 h-7 rounded-full border border-[#d8cfbe] flex items-center justify-center text-[#6e6556] hover:border-[#0b382d] hover:text-[#0b382d] hover:bg-[#ede5d6]/50 transition-colors"
              >
                <Minus size={13} />
              </button>
              <span className="w-4 text-center font-semibold text-deep-navy text-sm">{adults}</span>
              <button 
                type="button"
                onClick={() => setAdults(adults + 1)}
                aria-label="Increase adults"
                className="w-7 h-7 rounded-full border border-[#d8cfbe] flex items-center justify-center text-[#6e6556] hover:border-[#0b382d] hover:text-[#0b382d] hover:bg-[#ede5d6]/50 transition-colors"
              >
                <Plus size={13} />
              </button>
            </div>
          </div>

          {/* Children */}
          <div className="flex items-center gap-3">
            <span className="text-deep-navy text-sm font-medium w-14">Children</span>
            <div className="flex items-center gap-2.5">
              <button 
                type="button"
                onClick={() => setChildren(Math.max(0, children - 1))}
                aria-label="Decrease children"
                className="w-7 h-7 rounded-full border border-[#d8cfbe] flex items-center justify-center text-[#6e6556] hover:border-[#0b382d] hover:text-[#0b382d] hover:bg-[#ede5d6]/50 transition-colors"
              >
                <Minus size={13} />
              </button>
              <span className="w-4 text-center font-semibold text-deep-navy text-sm">{children}</span>
              <button 
                type="button"
                onClick={() => setChildren(children + 1)}
                aria-label="Increase children"
                className="w-7 h-7 rounded-full border border-[#d8cfbe] flex items-center justify-center text-[#6e6556] hover:border-[#0b382d] hover:text-[#0b382d] hover:bg-[#ede5d6]/50 transition-colors"
              >
                <Plus size={13} />
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Book Now Button */}
      <div className="w-full lg:w-auto p-3.5 sm:p-4 lg:p-6 lg:pl-2">
        <button 
          type="button"
          onClick={handleBookNow}
          className="w-full lg:w-auto bg-[#0b382d] hover:bg-[#07241c] text-white px-8 py-3.5 rounded-lg text-xs md:text-sm font-medium tracking-[0.1em] transition-all duration-300 hover:shadow-lg hover:scale-[1.02] uppercase"
        >
          BOOK NOW
        </button>
      </div>

    </motion.div>
  );

  if (embedded) {
    return content;
  }

  return (
    <section className="relative z-30 -mt-8 px-4 md:px-8">
      <div className="container mx-auto max-w-6xl">
        {content}
      </div>
    </section>
  );
}
