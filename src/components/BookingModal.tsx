"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Minus, Plus } from "lucide-react";
import { format } from "date-fns";

export default function BookingModal() {
  const [isOpen, setIsOpen] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [checkInStr, setCheckInStr] = useState("");
  const [checkOutStr, setCheckOutStr] = useState("");
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);

  useEffect(() => {
    const handleOpen = (e: any) => {
      const data = e.detail || {};
      if (data.checkIn instanceof Date && !isNaN(data.checkIn.getTime())) {
        setCheckInStr(format(data.checkIn, "yyyy-MM-dd"));
      }
      if (data.checkOut instanceof Date && !isNaN(data.checkOut.getTime())) {
        setCheckOutStr(format(data.checkOut, "yyyy-MM-dd"));
      }
      if (typeof data.adults === "number") setAdults(data.adults);
      if (typeof data.children === "number") setChildren(data.children);
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

  const handleRequestBooking = (e: React.FormEvent) => {
    e.preventDefault();

    let text = `Hello Wadi Rum Bella Rose Luxury Camp! I would like to request availability.%0A%0A`;
    if (name) text += `*Name:* ${name}%0A`;
    if (email) text += `*Email:* ${email}%0A`;
    if (phone) text += `*Phone:* ${phone}%0A%0A`;

    if (checkInStr && checkOutStr) {
      text += `*Check-in:* ${checkInStr}%0A*Check-out:* ${checkOutStr}%0A`;
    }
    text += `*Guests:* ${adults} Adults, ${children} Children.%0A%0APlease let me know the availability and rates for your luxury desert units.`;

    const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "962791149240";
    const url = `https://wa.me/${whatsappNumber}?text=${text}`;
    window.open(url, "_blank");
    setIsOpen(false);
  };

  const todayStr = new Date().toISOString().split("T")[0];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 sm:p-6 overflow-y-auto"
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 14 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 14 }}
            transition={{ type: "spring", damping: 28, stiffness: 350 }}
            className="bg-white rounded-[28px] sm:rounded-[32px] shadow-2xl w-full max-w-[515px] p-6 sm:p-8 relative flex flex-col border border-zinc-100 my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Header */}
            <div className="flex items-start justify-between mb-5 sm:mb-6">
              <div>
                <span className="font-[family-name:var(--font-montserrat)] text-[0.66rem] sm:text-xs uppercase tracking-[0.22em] font-semibold text-zinc-500 block mb-1">
                  WADI RUM BELLA ROSE
                </span>
                <h2 className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl md:text-[2.25rem] text-zinc-900 font-normal tracking-tight leading-tight">
                  Check Availability
                </h2>
              </div>

              {/* Circular Close Button */}
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-400 hover:text-zinc-700 flex items-center justify-center transition-colors shrink-0 mt-0.5"
                aria-label="Close"
              >
                <X size={16} strokeWidth={2.2} />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleRequestBooking} className="flex flex-col gap-4 sm:gap-4.5">
              
              {/* Your Name */}
              <div className="space-y-1.5">
                <label className="block text-xs sm:text-[13px] font-medium text-zinc-700">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full h-11 sm:h-12 rounded-xl border border-zinc-200 bg-white px-4 text-sm text-zinc-800 placeholder:text-zinc-400 focus:outline-none focus:border-[#1d4334] focus:ring-2 focus:ring-[#1d4334]/15 transition-all"
                />
              </div>

              {/* Email & Phone Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="space-y-1.5">
                  <label className="block text-xs sm:text-[13px] font-medium text-zinc-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full h-11 sm:h-12 rounded-xl border border-zinc-200 bg-white px-4 text-sm text-zinc-800 placeholder:text-zinc-400 focus:outline-none focus:border-[#1d4334] focus:ring-2 focus:ring-[#1d4334]/15 transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs sm:text-[13px] font-medium text-zinc-700">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+962 7 9114 9240"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full h-11 sm:h-12 rounded-xl border border-zinc-200 bg-white px-4 text-sm text-zinc-800 placeholder:text-zinc-400 focus:outline-none focus:border-[#1d4334] focus:ring-2 focus:ring-[#1d4334]/15 transition-all"
                  />
                </div>
              </div>

              {/* Check In & Check Out Grid */}
              <div className="grid grid-cols-2 gap-3.5">
                <div className="space-y-1.5">
                  <label className="block text-xs sm:text-[13px] font-medium text-zinc-700">
                    Check In
                  </label>
                  <input
                    type="date"
                    required
                    min={todayStr}
                    value={checkInStr}
                    onChange={(e) => setCheckInStr(e.target.value)}
                    className="w-full h-11 sm:h-12 rounded-xl border border-zinc-200 bg-white px-3.5 text-sm text-zinc-700 focus:outline-none focus:border-[#1d4334] focus:ring-2 focus:ring-[#1d4334]/15 transition-all cursor-pointer"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs sm:text-[13px] font-medium text-zinc-700">
                    Check Out
                  </label>
                  <input
                    type="date"
                    required
                    min={checkInStr || todayStr}
                    value={checkOutStr}
                    onChange={(e) => setCheckOutStr(e.target.value)}
                    className="w-full h-11 sm:h-12 rounded-xl border border-zinc-200 bg-white px-3.5 text-sm text-zinc-700 focus:outline-none focus:border-[#1d4334] focus:ring-2 focus:ring-[#1d4334]/15 transition-all cursor-pointer"
                  />
                </div>
              </div>

              {/* Adults & Children Pill Counters */}
              <div className="grid grid-cols-2 gap-3.5 pt-0.5">
                {/* Adults Pill */}
                <div className="h-11 sm:h-12 rounded-xl bg-[#FAF8F5] border border-zinc-200/85 px-3.5 sm:px-4 flex items-center justify-between">
                  <span className="text-xs sm:text-sm font-medium text-zinc-700">
                    Adults
                  </span>
                  <div className="flex items-center gap-2 sm:gap-2.5">
                    <button
                      type="button"
                      onClick={() => setAdults(Math.max(1, adults - 1))}
                      className="w-6.5 h-6.5 sm:w-7 sm:h-7 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-zinc-500 hover:border-zinc-400 hover:text-zinc-800 transition-colors shadow-2xs active:scale-95"
                    >
                      <Minus size={12} strokeWidth={2.2} />
                    </button>
                    <span className="w-4 text-center text-xs sm:text-sm font-semibold text-zinc-800">
                      {adults}
                    </span>
                    <button
                      type="button"
                      onClick={() => setAdults(adults + 1)}
                      className="w-6.5 h-6.5 sm:w-7 sm:h-7 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-zinc-500 hover:border-zinc-400 hover:text-zinc-800 transition-colors shadow-2xs active:scale-95"
                    >
                      <Plus size={12} strokeWidth={2.2} />
                    </button>
                  </div>
                </div>

                {/* Children Pill */}
                <div className="h-11 sm:h-12 rounded-xl bg-[#FAF8F5] border border-zinc-200/85 px-3.5 sm:px-4 flex items-center justify-between">
                  <span className="text-xs sm:text-sm font-medium text-zinc-700">
                    Children
                  </span>
                  <div className="flex items-center gap-2 sm:gap-2.5">
                    <button
                      type="button"
                      onClick={() => setChildren(Math.max(0, children - 1))}
                      className="w-6.5 h-6.5 sm:w-7 sm:h-7 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-zinc-500 hover:border-zinc-400 hover:text-zinc-800 transition-colors shadow-2xs active:scale-95"
                    >
                      <Minus size={12} strokeWidth={2.2} />
                    </button>
                    <span className="w-4 text-center text-xs sm:text-sm font-semibold text-zinc-800">
                      {children}
                    </span>
                    <button
                      type="button"
                      onClick={() => setChildren(children + 1)}
                      className="w-6.5 h-6.5 sm:w-7 sm:h-7 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-zinc-500 hover:border-zinc-400 hover:text-zinc-800 transition-colors shadow-2xs active:scale-95"
                    >
                      <Plus size={12} strokeWidth={2.2} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Action Button: Request Availability via WhatsApp */}
              <button
                type="submit"
                className="w-full bg-[#1d4334] hover:bg-[#153427] text-white h-12 sm:h-13 rounded-xl font-medium text-sm sm:text-[15px] tracking-wide transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center mt-2 active:scale-[0.99]"
              >
                Request Availability via WhatsApp
              </button>

            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
