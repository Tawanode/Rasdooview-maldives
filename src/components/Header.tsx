"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isDarkText = isScrolled || pathname === "/accommodation" || isMobileMenuOpen;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Accommodations", href: "/accommodation" },
    { name: "Experiences", href: "/#experiences" },
    { name: "Gallery", href: "/#gallery" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isMobileMenuOpen
            ? "bg-transparent py-4"
            : isScrolled
            ? "bg-white/90 backdrop-blur-md shadow-sm py-4"
            : "bg-transparent py-6"
        }`}
      >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex flex-col items-start text-left z-50 relative group">
          <span className={`font-[family-name:var(--font-el-messiri)] text-lg md:text-xl lg:text-[1.35rem] font-medium tracking-[0.04em] uppercase transition-colors ${isDarkText ? "text-deep-navy" : "text-white"}`}>
            WADI RUM BELLA ROSE
          </span>
          <span className={`font-[family-name:var(--font-montserrat)] text-[0.52rem] md:text-[0.58rem] uppercase tracking-[0.34em] font-medium transition-colors mt-0.5 ${isDarkText ? "text-deep-navy/85" : "text-white/90"}`}>
            LUXURY CAMP &bull; JORDAN
          </span>
        </Link>

        {/* Right Section: Desktop Nav Links + Book Now Button */}
        <div className="flex items-center gap-6 lg:gap-8 z-50 relative">
          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-xs xl:text-sm uppercase tracking-wider font-medium transition-colors hover:text-primary ${
                  isDarkText ? "text-deep-navy/80" : "text-white/90"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <Button
            className="hidden md:flex bg-[#0b382d] hover:bg-[#07241c] text-white rounded-md px-6 font-medium tracking-wide transition-colors"
            onClick={() => {
              window.dispatchEvent(new CustomEvent("open-booking-modal"));
            }}
          >
            BOOK NOW
          </Button>

          <button
            className={`lg:hidden p-2 transition-colors ${isDarkText ? "text-deep-navy" : "text-white"}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} className={isDarkText ? "text-deep-navy" : "text-white"} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-warm-sand z-40 transition-transform duration-500 ease-in-out lg:hidden overflow-y-auto ${
          isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex flex-col items-center justify-center min-h-screen gap-8 p-8 pt-24 pb-12">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="font-heading text-4xl text-deep-navy hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Button
            className="mt-8 bg-[#0b382d] hover:bg-[#07241c] text-white rounded-md px-8 py-6 text-lg w-full max-w-sm font-medium tracking-wide transition-colors"
            onClick={() => {
              setIsMobileMenuOpen(false);
              window.dispatchEvent(new CustomEvent("open-booking-modal"));
            }}
          >
            BOOK NOW
          </Button>
        </div>
      </div>
    </>
  );
}
