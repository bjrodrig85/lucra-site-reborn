import { Hero } from "@/components/Hero";
import { OfferDetails } from "@/components/OfferDetails";
import { BookContent } from "@/components/BookContent";
import { Bonuses } from "@/components/Bonuses";
import { ValueStack } from "@/components/ValueStack";
import { WhyThisOffer } from "@/components/WhyThisOffer";
import { Author } from "@/components/Author";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <OfferDetails />
      <BookContent />
      <Bonuses />
      <ValueStack />
      <WhyThisOffer />
      <Author />
      <FAQ />
      <FinalCTA />
    </main>
  );
};

export default Index;
