import { Hero } from "@/components/Hero";
import { OfferDetails } from "@/components/OfferDetails";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <OfferDetails />
      <FAQ />
      <FinalCTA />
    </main>
  );
};

export default Index;
