"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar as CalendarIcon, Minus, Plus } from "lucide-react";
import { format } from "date-fns";
import CustomDatePicker from "./CustomDatePicker";

export default function BookingModal() {
  const [isOpen, setIsOpen] = useState(false);
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [checkIn, setCheckIn] = useState<Date | null>(null);
  const [checkOut, setCheckOut] = useState<Date | null>(null);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);

  useEffect(() => {
    const handleOpen = (e: any) => {
      const data = e.detail || {};
      if (data.checkIn) setCheckIn(data.checkIn);
      if (data.checkOut) setCheckOut(data.checkOut);
      if (data.adults !== undefined) setAdults(data.adults);
      if (data.children !== undefined) setChildren(data.children);
      setIsOpen(true);
    };

    window.addEventListener("open-booking-modal", handleOpen);
    return () => window.removeEventListener("open-booking-modal", handleOpen);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleRequestBooking = () => {
    let text = `Hello Tropical Beach House Praslin! I would like to request a booking.%0A%0A`;
    text += `*Name:* ${name}%0A`;
    text += `*Email:* ${email}%0A`;
    text += `*Phone:* ${phone}%0A%0A`;
    
    if (checkIn && checkOut) {
      text += `*Check-in:* ${checkIn.toLocaleDateString()}%0A*Check-out:* ${checkOut.toLocaleDateString()}%0A`;
    }
    text += `*Guests:* ${adults} Adults, ${children} Children.%0A%0APlease let me know the availability and rates.`;
    
    window.open(`https://wa.me/2482512515?text=${text}`, "_blank");
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          onClick={() => setIsOpen(false)}
        >
          <motion.div 
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[90vh] relative flex flex-col overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100 bg-white z-20 shrink-0">
          <h2 className="text-2xl font-heading text-deep-navy">Book Your Stay</h2>
          <button 
            onClick={() => setIsOpen(false)}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6 flex flex-col gap-5 overflow-y-auto custom-scrollbar flex-1" data-lenis-prevent="true" onWheel={(e) => e.stopPropagation()} onTouchMove={(e) => e.stopPropagation()}>
          
          {/* Name */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-gray-700">Your Name</label>
            <input 
              type="text" 
              placeholder="John Doe" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-200 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-gray-700">Email Address</label>
            <input 
              type="email" 
              placeholder="john@example.com" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-200 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
            />
          </div>

          {/* Phone */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-gray-700">Phone Number</label>
            <input 
              type="tel" 
              placeholder="+1 (555) 000-0000" 
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full border border-gray-200 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
            />
          </div>

          {/* Check In */}
          <div className="flex flex-col gap-2 relative z-[50]">
            <label className="text-sm font-semibold text-gray-700">Check In</label>
            <div className="w-full border border-gray-200 rounded-lg px-4 py-3">
              <CustomDatePicker 
                label="Check In"
                value={checkIn}
                onChange={(date) => setCheckIn(date)}
                minDate={new Date()}
              />
            </div>
          </div>

          {/* Check Out */}
          <div className="flex flex-col gap-2 relative z-[60]">
            <label className="text-sm font-semibold text-gray-700">Check Out</label>
            <div className="w-full border border-gray-200 rounded-lg px-4 py-3">
              <CustomDatePicker 
                label="Check Out"
                value={checkOut}
                onChange={(date) => setCheckOut(date)}
                minDate={checkIn || new Date()}
              />
            </div>
          </div>

          {/* Guests */}
          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center gap-4">
              <span className="font-semibold text-gray-700 w-12">Adults</span>
              <div className="flex items-center gap-3">
                <button 
                  onClick={() => setAdults(Math.max(1, adults - 1))}
                  className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:border-primary hover:text-primary transition-colors"
                >
                  <Minus size={14} />
                </button>
                <span className="w-4 text-center font-medium text-gray-900">{adults}</span>
                <button 
                  onClick={() => setAdults(adults + 1)}
                  className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:border-primary hover:text-primary transition-colors"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="font-semibold text-gray-700 w-16">Children</span>
              <div className="flex items-center gap-3">
                <button 
                  onClick={() => setChildren(Math.max(0, children - 1))}
                  className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:border-primary hover:text-primary transition-colors"
                >
                  <Minus size={14} />
                </button>
                <span className="w-4 text-center font-medium text-gray-900">{children}</span>
                <button 
                  onClick={() => setChildren(children + 1)}
                  className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:border-primary hover:text-primary transition-colors"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-6 pt-4 border-t border-gray-100 bg-white z-20 shrink-0">
          <button 
            onClick={handleRequestBooking}
            className="w-full bg-[#0b382d] hover:bg-[#07241c] text-white px-8 py-4 rounded-lg font-medium tracking-wide transition-colors shadow-lg shadow-primary/20"
          >
            Request Booking
          </button>
        </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
