import type { Metadata } from "next";
import { Inter, Playfair_Display, Cormorant_Garamond, El_Messiri, Montserrat, Outfit } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const elMessiri = El_Messiri({
  subsets: ["latin"],
  variable: "--font-el-messiri",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://wadirumbellarose.com"),
  title: {
    template: "%s | Wadi Rum Bella Rose Luxury Camp",
    default: "Wadi Rum Bella Rose Luxury Camp | 5-Star Desert Glamping in Jordan",
  },
  description: "Experience authentic Bedouin hospitality and modern luxury at Wadi Rum Bella Rose Luxury Camp. Enjoy 5-star glamping, private AC rooms, and unforgettable desert tours in Jordan.",
  keywords: "Wadi Rum luxury camp, 5-star desert glamping Jordan, Wadi Rum Bedouin camp, Disah accommodation Wadi Rum, Wadi Rum jeep tours and glamping, Best luxury tent Wadi Rum",
  openGraph: {
    title: "Wadi Rum Bella Rose Luxury Camp | 5-Star Desert Glamping in Jordan",
    description: "Experience authentic Bedouin hospitality and modern luxury at Wadi Rum Bella Rose Luxury Camp. Enjoy 5-star glamping, private AC rooms, and unforgettable desert tours in Jordan.",
    siteName: "Wadi Rum Bella Rose Luxury Camp",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/wadirum_hero.jpg",
        width: 1200,
        height: 630,
        alt: "Wadi Rum Bella Rose Luxury Camp - 5-Star Desert Glamping",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wadi Rum Bella Rose Luxury Camp | 5-Star Desert Glamping in Jordan",
    description: "Experience authentic Bedouin hospitality and modern luxury at Wadi Rum Bella Rose Luxury Camp.",
    images: ["/images/wadirum_hero.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  "name": "Wadi Rum Bella Rose Luxury Camp",
  "telephone": "+962791149240",
  "description": "5-Star Desert Glamping in the Disah district of Wadi Rum Protected Area, Jordan. Featuring 11 intimate luxury units with breathtaking mountain views, individual air conditioning, private ensuite bathrooms, authentic Bedouin dining, and desert tours.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Wadi Rum Road, Disah Area",
    "addressLocality": "Disah",
    "addressRegion": "Aqaba Governorate",
    "addressCountry": "JO"
  },
  "starRating": {
    "@type": "Rating",
    "ratingValue": "5"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "9.9",
    "reviewCount": "150",
    "bestRating": "10"
  },
  "numberOfRooms": 11,
  "amenityFeature": [
    { "@type": "LocationFeatureSpecification", "name": "Individual Air Conditioning", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "Soundproof Rooms", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "Private Bathroom with Walk-in Shower", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "Private Terrace with Mountain View", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "Exceptional Free Wi-Fi", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "Traditional Bedouin Zarb Dining", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "4x4 Jeep Tours & Camel Rides", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "24-Hour Front Desk", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "Free On-Site Private Parking", "value": true }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden max-w-[100vw] w-full">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body 
        className={`${inter.variable} ${playfair.variable} ${cormorant.variable} ${elMessiri.variable} ${montserrat.variable} ${outfit.variable} min-h-screen flex flex-col font-sans antialiased overflow-x-hidden max-w-[100vw] w-full`}
        suppressHydrationWarning
      >
        <BookingModal />
        <SmoothScroll>
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
