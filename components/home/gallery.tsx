import { ParallaxGallery } from "@/components/ui/parallax-gallery";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { galleryPhotos } from "@/content/home";

export function GallerySection() {
  return (
    <section className="px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            eyebrow="Our Impact"
            title="Moments where learning takes root"
            align="center"
          />
        </Reveal>
        {/* Photos render at natural ratio and drift at different scroll speeds for depth. */}
        <ParallaxGallery
          className="mt-12"
          photos={galleryPhotos.map((photo) => ({
            ...photo,
            width: 1344,
            height: 1798,
          }))}
        />
      </div>
    </section>
  );
}
