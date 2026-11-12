"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQSection() {
  const faqs = [
    {
      question: "Where is Wadi Rum Bella Rose Luxury Camp located?",
      answer: "Our camp is located on Wadi Rum Road in the peaceful Disah district of the Wadi Rum Protected Area, Jordan. Our location offers an intimate desert escape away from large tour-bus crowds."
    },
    {
      question: "How many units are at the camp?",
      answer: "Wadi Rum Bella Rose Luxury Camp is an intimate and exclusive desert escape featuring only 11 thoughtfully designed luxury units with breathtaking mountain views."
    },
    {
      question: "Do the rooms feature air conditioning and private ensuite bathrooms?",
      answer: "Yes, every unit features individual air conditioning (crucial for desert heat), soundproof walls for tranquility, and a private ensuite bathroom with a walk-in shower, bathrobes, bidet, and complimentary toiletries."
    },
    {
      question: "What dining experiences and breakfasts are offered?",
      answer: "We feature a family-friendly on-site restaurant serving Middle Eastern, African, and Catalan cuisines, traditional slow-cooked Bedouin Zarb dinners, outdoor BBQ facilities, room service, and Continental, Full English/Irish, or Buffet breakfast options."
    },
    {
      question: "Can we book 4x4 Jeep tours and camel rides at the camp?",
      answer: "Yes, classic 4x4 Jeep desert tours, camel rides across the red dunes, and sandboarding are available and easily booked via our front desk and tour services."
    },
    {
      question: "How far is the camp from King Hussein International Airport?",
      answer: "Our camp is located 61 km from King Hussein International Airport (Aqaba) with direct access along Wadi Rum Road."
    },
    {
      question: "Is Wi-Fi available at the camp?",
      answer: "Yes, exceptional free Wi-Fi is provided for all guests across the camp and inside all private units."
    },
    {
      question: "Is parking available at the camp?",
      answer: "Yes, we provide free on-site private parking for all guests driving to the camp."
    }
  ];

  return (
    <section id="faq" className="py-16 sm:py-24 px-4 md:px-8 bg-[#FAF6F0] border-t border-[#E3DAC9]">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12 sm:mb-16">
          <p className="font-[family-name:var(--font-montserrat)] text-xs uppercase tracking-[0.28em] font-semibold text-[#A8582C] mb-3">
            Got Questions?
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl text-[#221C18] font-normal tracking-tight">
            Frequently Asked Questions
          </h2>
          <div className="w-12 h-[1px] bg-[#A8582C]/40 mx-auto mt-4" />
        </div>

        <div className="bg-[#F5EFEB] rounded-3xl p-6 sm:p-10 border border-[#E3DAC9] shadow-sm">
          <Accordion className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-[#E3DAC9]/70 last:border-0">
                <AccordionTrigger className="text-left font-[family-name:var(--font-playfair)] text-base sm:text-lg text-[#221C18] hover:text-[#A8582C] transition-colors py-5 sm:py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="font-[family-name:var(--font-outfit)] text-sm sm:text-[15px] text-[#5B4C43] leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
