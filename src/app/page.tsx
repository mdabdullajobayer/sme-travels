import Hero from "@/components/Hero";
import Promotions from "@/components/Promotions";
import PopularDestinations from "@/components/PopularDestinations";

export default function Home() {
  return (
    <div className="flex flex-col gap-8 min-h-screen">
      <Hero />

      {/* Spacer for the absolute positioned search button overlap */}
      <div className="h-8 md:h-12"></div>

      <Promotions />

      <PopularDestinations />
    </div>
  );
}
