import { HeroBanner } from "@/components/HeroBanner";
import { CategoryGrid } from "@/components/CategoryGrid";
import { ContactNewsletter } from "@/components/ContactNewsletter";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import { AboutSnippet } from "@/components/AboutSnippet";
import { FeaturesSection } from "@/components/FeaturesSection";
import { SensoryExperience } from "@/components/SensoryExperience";
import { MasterChocolatiers } from "@/components/MasterChocolatiers";
import { VideoShowcase } from "@/components/VideoShowcase";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <FeaturedProducts />
      <CategoryGrid />
      <AboutSnippet />
      <SensoryExperience />
      <MasterChocolatiers />
      <VideoShowcase />
      <FeaturesSection />
      <ContactNewsletter />
    </>
  );
}
