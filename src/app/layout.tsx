import type { Metadata } from "next";
import { Inter, Playfair_Display, Cormorant_Garamond } from "next/font/google";
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

export const metadata: Metadata = {
  title: {
    template: "%s | Tropical Beach House Praslin",
    default: "Tropical Beach House Praslin | Beachfront Self-Catering Apartments in Seychelles",
  },
  description: "Stay at Tropical Beach House Praslin, a charming self-catering beachfront guesthouse on Amitié Beach, Seychelles featuring spacious apartments, tropical gardens, direct beach access, and easy access to Praslin's top attractions.",
  keywords: "Tropical Beach House Praslin, Praslin Self Catering, Beachfront Apartments Seychelles, Praslin Guest House, Amitié Beach Accommodation, Seychelles Vacation Rental, Self Catering Seychelles, Grand Anse Accommodation, Beach House Seychelles, Praslin Holiday Apartment",
  openGraph: {
    title: "Tropical Beach House Praslin | Beachfront Self-Catering Apartments in Seychelles",
    description: "Stay at Tropical Beach House Praslin, a charming self-catering beachfront guesthouse on Amitié Beach, Seychelles featuring spacious apartments, tropical gardens, direct beach access, and easy access to Praslin's top attractions.",
    url: "https://tropicalbeachhousepraslin.com",
    siteName: "Tropical Beach House Praslin",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tropical Beach House Praslin",
    description: "Experience authentic beachfront self-catering living in Seychelles.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden max-w-[100vw] w-full">
      <body 
        className={`${inter.variable} ${playfair.variable} ${cormorant.variable} min-h-screen flex flex-col font-sans antialiased overflow-x-hidden max-w-[100vw] w-full`}
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
