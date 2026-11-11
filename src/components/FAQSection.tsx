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
      question: "Do the apartments have kitchens?",
      answer: "Yes, every apartment features a fully equipped kitchenette including a refrigerator, microwave, stove, electric kettle, and all necessary kitchenware."
    },
    {
      question: "Is the property directly on the beach?",
      answer: "Yes! Tropical Beach House Praslin is located directly on Amitié Beach, offering immediate beach access and stunning ocean views."
    },
    {
      question: "Is Wi-Fi available?",
      answer: "Yes, complimentary high-speed Wi-Fi is available in all apartments and throughout the property."
    },
    {
      question: "Is parking free?",
      answer: "Yes, we provide free private parking on-site for all our guests."
    },
    {
      question: "Do you provide airport transfers?",
      answer: "We can assist in arranging airport transfers from Praslin Airport or the ferry terminal upon request."
    },
    {
      question: "Can I book island tours?",
      answer: "Yes, our team can help you book various excursions including snorkeling trips, boat tours, and visits to Vallée de Mai."
    },
    {
      question: "Is BBQ available?",
      answer: "Yes, we have outdoor BBQ facilities in our tropical garden that are free for guests to use."
    },
    {
      question: "Is the property family friendly?",
      answer: "Absolutely. We offer spacious two-bedroom family apartments and our beach is perfect for children."
    }
  ];

  return (
    <section id="faq" className="py-24 px-4 md:px-8 bg-soft-beige/30">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">Got Questions?</p>
          <h2 className="font-heading text-4xl md:text-5xl text-deep-navy">Frequently Asked Questions</h2>
        </div>

        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
          <Accordion className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-border/50 last:border-0">
                <AccordionTrigger className="text-left font-heading text-lg text-deep-navy hover:text-primary transition-colors py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
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
