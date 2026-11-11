import HeroSection from "@/components/HeroSection";
import BookingBar from "@/components/BookingBar";
import WelcomeSection from "@/components/WelcomeSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import AccommodationShowcase from "@/components/AccommodationShowcase";
import RoomAmenities from "@/components/RoomAmenities";
import DiningExperience from "@/components/DiningExperience";
import DiscoverPraslin from "@/components/DiscoverPraslin";
import ActivitiesExcursions from "@/components/ActivitiesExcursions";
import ImageGallery from "@/components/ImageGallery";
import GuestReviews from "@/components/GuestReviews";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <BookingBar />
      <WelcomeSection />
      <WhyChooseUs />
      <AccommodationShowcase />
      <RoomAmenities />
      <DiningExperience />
      <DiscoverPraslin />
      <ActivitiesExcursions />
      <ImageGallery />
      <GuestReviews />
      <FAQSection />
      <ContactSection />
    </>
  );
}
