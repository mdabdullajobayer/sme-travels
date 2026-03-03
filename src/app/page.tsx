import Hero from "@/components/Hero";
import Promotions from "@/components/Promotions";
import PopularDestinations from "@/components/PopularDestinations";
import WhyChooseUs from "@/components/WhyChooseUs";
import DownloadApp from "@/components/DownloadApp";
import TravelPartners from "@/components/TravelPartners";

export default function Home() {
  return (
    <div className="flex flex-col gap-8 min-h-screen">
      <Hero />

      <Promotions />

      <PopularDestinations />

      <WhyChooseUs />

      <TravelPartners />

      <DownloadApp />

      {/* <Newsletter /> */}

    </div>
  );
}
