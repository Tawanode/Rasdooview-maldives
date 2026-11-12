import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-deep-navy text-warm-sand pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex flex-col items-start">
              <h3 className="font-[family-name:var(--font-el-messiri)] text-xl md:text-2xl font-medium tracking-[0.04em] uppercase text-white mb-1">
                WADI RUM BELLA ROSE
              </h3>
              <p className="font-[family-name:var(--font-montserrat)] text-[0.58rem] md:text-[0.62rem] uppercase tracking-[0.32em] text-white/80 font-medium">
                LUXURY CAMP &bull; JORDAN
              </p>
            </div>
            <p className="text-warm-sand/80 text-sm leading-relaxed max-w-sm">
              Your 5-star desert escape in Wadi Rum. Experience the perfect balance of authentic Bedouin hospitality and modern luxury.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="font-heading text-xl">Contact Us</h4>
            <ul className="space-y-4 text-sm text-warm-sand/80">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                <span>Wadi Rum Road,<br />Disah Area, Wadi Rum Protected Area, Jordan</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary shrink-0" />
                <a href="tel:+962791149240" className="hover:text-white transition-colors">
                  +962 7 9114 9240
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary shrink-0" />
                <span>24-Hour Front Desk & Tour Desk</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-heading text-xl">Quick Links</h4>
            <ul className="space-y-3 text-sm text-warm-sand/80">
              <li><Link href="/accommodation" className="hover:text-white transition-colors">Accommodations</Link></li>
              <li><Link href="/#experiences" className="hover:text-white transition-colors">Desert Experiences</Link></li>
              <li><Link href="/#gallery" className="hover:text-white transition-colors">Camp Gallery</Link></li>
              <li><Link href="/#faq" className="hover:text-white transition-colors">FAQ</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Concierge</Link></li>
            </ul>
          </div>

          {/* Location / Newsletter */}
          <div className="space-y-6">
            <h4 className="font-heading text-xl">Getting Here</h4>
            <p className="text-sm text-warm-sand/80 leading-relaxed">
              Located in the Disah district of the Wadi Rum Protected Area, 61 km from King Hussein International Airport (Aqaba) with free on-site private parking.
            </p>
            <a 
              href="https://maps.google.com/?q=Wadi+Rum+Road,+Disah+Area,+Wadi+Rum+Protected+Area,+Jordan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm font-medium text-primary hover:text-white transition-colors underline underline-offset-4"
            >
              Get Directions
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-warm-sand/50">
          <p>&copy; {new Date().getFullYear()} Wadi Rum Bella Rose Luxury Camp. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
