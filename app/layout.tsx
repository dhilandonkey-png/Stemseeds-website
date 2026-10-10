import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { site } from "@/content/site";

import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Free STEM Kits for Kids in Hospitals`,
    template: `%s | ${site.name}`,
  },
  description:
    "STEMSeeds is a student-led 501(c)(3) nonprofit from Frisco, Texas that builds hands-on STEM kits and delivers them free to children in hospitals and underserved communities. 945+ kits delivered by 32 chapters in 6 countries.",
  keywords: [
    "STEMSeeds",
    "STEM kits",
    "STEM kits for hospitalized children",
    "pediatric patients",
    "student-led nonprofit",
    "501(c)(3)",
    "Frisco Texas",
    "start a chapter",
    "STEM education",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_US",
  },
  twitter: { card: "summary_large_image" },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "NGO",
  name: site.name,
  alternateName: "STEM Seeds",
  slogan: site.tagline,
  description: site.description,
  url: site.url,
  logo: `${site.url}/og/logo.png`,
  email: site.email,
  nonprofitStatus: "Nonprofit501c3",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Frisco",
    addressRegion: "TX",
    addressCountry: "US",
  },
  sameAs: [site.instagram.href],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${outfit.variable} h-full antialiased`}>
      <body className="min-h-full bg-background font-sans text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
        >
          Skip to content
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
        <Analytics />
      </body>
    </html>
  );
}
