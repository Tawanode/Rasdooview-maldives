import HeroSection from "@/components/HeroSection";
import WelcomeSection from "@/components/WelcomeSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import AccommodationShowcase from "@/components/AccommodationShowcase";
import RoomAmenities from "@/components/RoomAmenities";
import DiningExperience from "@/components/DiningExperience";
import DiscoverWadiRum from "@/components/DiscoverWadiRum";
import ActivitiesExcursions from "@/components/ActivitiesExcursions";
import ImageGallery from "@/components/ImageGallery";
import GuestReviews from "@/components/GuestReviews";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WelcomeSection />
      <WhyChooseUs />
      <AccommodationShowcase />
      <RoomAmenities />
      <DiningExperience />
      <DiscoverWadiRum />
      <ActivitiesExcursions />
      <ImageGallery />
      <GuestReviews />
    </>
  );
}
