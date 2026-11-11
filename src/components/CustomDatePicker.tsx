"use client";

import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon } from "lucide-react";
import { format, addMonths, subMonths, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay, isToday, startOfWeek, endOfWeek, isBefore, startOfDay } from "date-fns";

interface CustomDatePickerProps {
  value: Date | null;
  onChange: (date: Date) => void;
  minDate?: Date | null;
  label: string;
}

export default function CustomDatePicker({ value, onChange, minDate, label }: CustomDatePickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(value || new Date());
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (value) {
      setCurrentMonth(value);
    }
  }, [value]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const nextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));
  const prevMonth = () => setCurrentMonth(subMonths(currentMonth, 1));

  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart, { weekStartsOn: 1 }); // Monday start
  const endDate = endOfWeek(monthEnd, { weekStartsOn: 1 });

  const dateFormat = "d";
  const days = eachDayOfInterval({ start: startDate, end: endDate });

  const weekDays = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

  const handleDateClick = (day: Date) => {
    if (minDate && isBefore(startOfDay(day), startOfDay(minDate))) return;
    onChange(day);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full" ref={popupRef}>
      {/* Trigger */}
      <div 
        className="relative flex items-center gap-3 text-deep-navy cursor-pointer hover:text-primary transition-colors w-full"
        onClick={() => setIsOpen(!isOpen)}
      >
        <CalendarIcon size={20} className="text-primary pointer-events-none" />
        <span className="font-medium pointer-events-none select-none">
          {value ? format(value, "MMM d, yyyy") : "Select Date"}
        </span>
      </div>

      {/* Popover */}
      {isOpen && (
        <div className="absolute bottom-full left-0 mb-2 z-50 w-[180px] bg-[#f5f5f7] rounded-xl shadow-2xl p-2 border border-white/40">
          
          {/* Header */}
          <div className="flex justify-between items-center mb-2">
            <button 
              onClick={(e) => { e.stopPropagation(); prevMonth(); }}
              className="w-5 h-5 rounded-full bg-white shadow-sm flex items-center justify-center hover:bg-gray-50 transition-colors text-gray-800"
            >
              <ChevronLeft size={10} strokeWidth={2.5} />
            </button>
            
            <div className="flex gap-1">
              <div className="bg-white shadow-sm px-1.5 py-0.5 rounded text-[9px] font-bold text-gray-900 flex items-center gap-0.5 cursor-pointer">
                {format(currentMonth, "MMM")}
                <div className="w-0 h-0 border-l-[3px] border-l-transparent border-r-[3px] border-r-transparent border-b-[4px] border-b-blue-600 ml-0.5 transform rotate-180"></div>
              </div>
              <div className="bg-white shadow-sm px-1.5 py-0.5 rounded text-[9px] font-bold text-gray-900 flex items-center gap-0.5 cursor-pointer">
                {format(currentMonth, "yy")}
                <div className="w-0 h-0 border-l-[3px] border-l-transparent border-r-[3px] border-r-transparent border-b-[4px] border-b-blue-600 ml-0.5 transform rotate-180"></div>
              </div>
            </div>

            <button 
              onClick={(e) => { e.stopPropagation(); nextMonth(); }}
              className="w-5 h-5 rounded-full bg-white shadow-sm flex items-center justify-center hover:bg-gray-50 transition-colors text-gray-800"
            >
              <ChevronRight size={10} strokeWidth={2.5} />
            </button>
          </div>

          {/* Weekdays */}
          <div className="grid grid-cols-7 gap-0.5 mb-1 text-[8px]">
            {weekDays.map(day => (
              <div key={day} className="text-center font-semibold text-gray-600 uppercase tracking-tighter">
                {day[0]}
              </div>
            ))}
          </div>

          {/* Days Grid */}
          <div className="grid grid-cols-7 gap-0.5">
            {days.map((day, i) => {
              const isSelected = value ? isSameDay(day, value) : false;
              const isCurrentMonth = isSameMonth(day, currentMonth);
              const isDisabled = minDate ? isBefore(startOfDay(day), startOfDay(minDate)) : false;

              // Styles matching the image
              let bgColor = "bg-white";
              let textColor = "text-gray-800";
              let shadow = "shadow-sm";

              if (!isCurrentMonth) {
                bgColor = "bg-transparent";
                textColor = "text-gray-300";
                shadow = "shadow-none";
              }

              if (isSelected) {
                bgColor = "bg-[#0055ff]";
                textColor = "text-white";
                shadow = "shadow-md shadow-blue-500/30";
              }

              return (
                <button
                  key={i}
                  disabled={isDisabled}
                  onClick={(e) => { e.stopPropagation(); handleDateClick(day); }}
                  className={`
                    w-5 h-5 flex items-center justify-center rounded text-[9px] font-semibold transition-all
                    ${bgColor} ${textColor} ${shadow}
                    ${isDisabled && isCurrentMonth ? "opacity-50 cursor-not-allowed" : ""}
                    ${!isDisabled && !isSelected && isCurrentMonth ? "hover:bg-blue-100 hover:text-blue-700" : ""}
                  `}
                >
                  {format(day, dateFormat)}
                </button>
              );
            })}
          </div>

        </div>
      )}
    </div>
  );
}
