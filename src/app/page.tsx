import { HeroBanner } from "@/components/HeroBanner";
import { CategoryGrid } from "@/components/CategoryGrid";
import { ContactNewsletter } from "@/components/ContactNewsletter";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import { AboutSnippet } from "@/components/AboutSnippet";
import { FeaturesSection } from "@/components/FeaturesSection";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <FeaturedProducts />
      <CategoryGrid />
      <AboutSnippet />
      <ContactNewsletter />


      <FeaturesSection />
    </>
  );
}
