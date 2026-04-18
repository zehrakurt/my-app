import type { Metadata } from "next";
import { AboutContent } from "@/components/AboutContent";

export const metadata: Metadata = {
  title: "Hakkımızda | Doliva",
  description: "Doliva'nın butik çikolata dünyasını keşfedin. Tutku ve ustalıkla hazırlanan lezzetler.",
};

export default function HakkimizdaPage() {
  return <AboutContent />;
}
