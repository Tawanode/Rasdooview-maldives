"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import CustomDatePicker from "./CustomDatePicker";

export default function BookingBar() {
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



  return (
    <section className="relative z-30 -mt-8 px-4 md:px-8">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/95 backdrop-blur-xl rounded-xl shadow-2xl p-4 md:p-6 lg:p-0 flex flex-col lg:flex-row items-center justify-between border border-white/20"
        >
          {/* Check In */}
          <div className="flex-1 w-full lg:w-auto p-4 lg:p-8 lg:border-r border-border/50">
            <p className="text-xs text-muted-foreground uppercase tracking-widest font-medium mb-3">Check In</p>
            <CustomDatePicker 
              label="Check In"
              value={checkIn}
              onChange={setCheckIn}
            />
          </div>

          {/* Check Out */}
          <div className="flex-1 w-full lg:w-auto p-4 lg:p-8 lg:border-r border-border/50">
            <p className="text-xs text-muted-foreground uppercase tracking-widest font-medium mb-3">Check Out</p>
            <CustomDatePicker 
              label="Check Out"
              value={checkOut}
              onChange={setCheckOut}
              minDate={checkIn}
            />
          </div>

          {/* Guests */}
          <div className="flex-[2] w-full lg:w-auto p-4 lg:p-8 flex flex-col justify-center">
            <p className="text-xs text-muted-foreground uppercase tracking-widest font-medium mb-3">Guests</p>
            <div className="flex flex-col sm:flex-row sm:items-center gap-6">
              
              {/* Adults */}
              <div className="flex items-center gap-4">
                <span className="text-deep-navy font-medium w-12">Adults</span>
                <div className="flex items-center gap-3">
                  <button 
                    onClick={() => setAdults(Math.max(1, adults - 1))}
                    className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary transition-colors"
                  >
                    <Minus size={14} />
                  </button>
                  <span className="w-4 text-center font-medium text-deep-navy">{adults}</span>
                  <button 
                    onClick={() => setAdults(adults + 1)}
                    className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary transition-colors"
                  >
                    <Plus size={14} />
                  </button>
                </div>
              </div>

              {/* Children */}
              <div className="flex items-center gap-4">
                <span className="text-deep-navy font-medium w-16">Children</span>
                <div className="flex items-center gap-3">
                  <button 
                    onClick={() => setChildren(Math.max(0, children - 1))}
                    className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary transition-colors"
                  >
                    <Minus size={14} />
                  </button>
                  <span className="w-4 text-center font-medium text-deep-navy">{children}</span>
                  <button 
                    onClick={() => setChildren(children + 1)}
                    className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary transition-colors"
                  >
                    <Plus size={14} />
                  </button>
                </div>
              </div>

            </div>
          </div>

          {/* Book Now Button */}
          <div className="w-full lg:w-auto p-4 lg:p-8 lg:pl-4">
            <button 
              onClick={handleBookNow}
              className="w-full lg:w-auto bg-[#0b382d] hover:bg-[#07241c] text-white px-8 py-4 rounded-md font-medium tracking-wide transition-colors"
            >
              BOOK NOW
            </button>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
