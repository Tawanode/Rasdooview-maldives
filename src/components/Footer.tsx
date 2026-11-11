import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-deep-navy text-warm-sand pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <div>
              <h3 className="font-heading text-3xl mb-1">Tropical Beach House</h3>
              <p className="text-xs uppercase tracking-widest text-primary font-medium">Praslin</p>
            </div>
            <p className="text-warm-sand/80 text-sm leading-relaxed max-w-sm">
              Relax, explore, and experience authentic beachfront living on the beautiful island of Praslin, Seychelles.
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
                <span>Amitié Beach,<br />Grand Anse, Praslin Island, Seychelles</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary shrink-0" />
                <a href="https://wa.me/2482512515" className="hover:text-white transition-colors">+248 2 512 515</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary shrink-0" />
                <a href="mailto:info@tropicalbeachhousepraslin.com" className="hover:text-white transition-colors">info@tropicalbeachhousepraslin.com</a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-heading text-xl">Quick Links</h4>
            <ul className="space-y-3 text-sm text-warm-sand/80">
              <li><Link href="#accommodations" className="hover:text-white transition-colors">Accommodations</Link></li>
              <li><Link href="#dining" className="hover:text-white transition-colors">Dining</Link></li>
              <li><Link href="#experiences" className="hover:text-white transition-colors">Activities & Excursions</Link></li>
              <li><Link href="#gallery" className="hover:text-white transition-colors">Gallery</Link></li>
              <li><Link href="#faq" className="hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Location / Newsletter */}
          <div className="space-y-6">
            <h4 className="font-heading text-xl">Getting Here</h4>
            <p className="text-sm text-warm-sand/80 leading-relaxed">
              Praslin Island is accessible via a short scenic flight from Mahé or a relaxing ferry ride. We are perfectly located on Amitié Beach.
            </p>
            <Link href="#contact" className="inline-block text-sm font-medium text-primary hover:text-white transition-colors underline underline-offset-4">
              Get Directions
            </Link>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-warm-sand/50">
          <p>&copy; {new Date().getFullYear()} Tropical Beach House Praslin. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
