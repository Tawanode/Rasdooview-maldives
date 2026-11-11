"use client";

import { useState } from "react";
import { MessageCircle, X, Calendar, Users, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function BookingWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    checkIn: "",
    checkOut: "",
    guests: "2",
    room: "Deluxe Room",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct WhatsApp message
    const text = `Hello Tropical Beach House Praslin! I would like to request a booking.%0A%0A*Check-in:* ${formData.checkIn}%0A*Check-out:* ${formData.checkOut}%0A*Guests:* ${formData.guests}%0A*Room:* ${formData.room}%0A%0APlease let me know the availability and rates.`;
    
    const whatsappUrl = `https://wa.me/2482512515?text=${text}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <>
      {/* Floating WhatsApp Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 p-4 bg-[#25D366] text-white rounded-full shadow-lg hover:scale-110 transition-transform duration-300 flex items-center justify-center ${isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}`}
        aria-label="Book via WhatsApp"
      >
        <MessageCircle size={28} />
      </button>

      {/* Booking Form Widget */}
      <div
        className={`fixed bottom-6 right-6 z-50 w-[90vw] max-w-[400px] bg-white rounded-2xl shadow-2xl overflow-hidden transition-all duration-500 origin-bottom-right ${
          isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="bg-deep-navy p-4 flex justify-between items-center">
          <div>
            <h3 className="text-warm-sand font-heading text-xl">Request a Stay</h3>
            <p className="text-warm-sand/80 text-xs">Book directly via WhatsApp</p>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-warm-sand/80 hover:text-white transition-colors">
            <X size={20} />
          </button>
        </div>
        
        <form onSubmit={handleBooking} className="p-6 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-xs font-medium text-deep-navy flex items-center gap-1">
                <Calendar size={14} /> Check-in
              </label>
              <Input
                type="date"
                name="checkIn"
                required
                value={formData.checkIn}
                onChange={handleChange}
                className="text-sm"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-medium text-deep-navy flex items-center gap-1">
                <Calendar size={14} /> Check-out
              </label>
              <Input
                type="date"
                name="checkOut"
                required
                value={formData.checkOut}
                onChange={handleChange}
                className="text-sm"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-medium text-deep-navy flex items-center gap-1">
              <Users size={14} /> Guests (Adults & Children)
            </label>
            <Input
              type="number"
              name="guests"
              min="1"
              required
              value={formData.guests}
              onChange={handleChange}
              className="text-sm"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-medium text-deep-navy flex items-center gap-1">
              <Home size={14} /> Room Type
            </label>
            <select
              name="room"
              value={formData.room}
              onChange={handleChange}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <option value="Deluxe Room">Deluxe Room</option>
              <option value="Deluxe Suite">Deluxe Suite</option>
              <option value="Family Suite">Family Suite</option>
              <option value="Not Sure Yet">Not Sure Yet</option>
            </select>
          </div>

          <Button type="submit" className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white gap-2 font-medium mt-2">
            <MessageCircle size={18} />
            Send via WhatsApp
          </Button>
        </form>
      </div>
    </>
  );
}
