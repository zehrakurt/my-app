import { HeroBanner } from "@/components/HeroBanner";
import { CategoryGrid } from "@/components/CategoryGrid";
import { ContactNewsletter } from "@/components/ContactNewsletter";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <CategoryGrid />
      <ContactNewsletter />
    </>
  );
}
