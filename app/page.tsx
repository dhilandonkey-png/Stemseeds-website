import { ClosingCtaSection } from "@/components/home/closing-cta";
import { ContactSection } from "@/components/home/contact";
import { GallerySection } from "@/components/home/gallery";
import { HomeHero } from "@/components/home/hero";
import { HowItWorksSection } from "@/components/home/how-it-works";
import { KitPreviewSection } from "@/components/home/kit-preview";
import { LatestDeliverySection } from "@/components/home/latest-delivery";
import { RecognitionSection } from "@/components/home/recognition";
import { WhoWeAreSection } from "@/components/home/who-we-are";

export default function Home() {
  return (
    <main id="main-content">
      <HomeHero />
      <LatestDeliverySection />
      <WhoWeAreSection />
      <HowItWorksSection />
      <KitPreviewSection />
      <GallerySection />
      <RecognitionSection />
      <ClosingCtaSection />
      <ContactSection />
    </main>
  );
}
