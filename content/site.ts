export const site = {
  name: "STEMSeeds",
  tagline: "Where Learning Takes Root",
  description:
    "STEMSeeds is a student-led philanthropic organization focused on bringing hands-on STEM education to children of all backgrounds, including pediatric patients and underserved communities.",
  instagram: {
    handle: "stemseeds.initiative",
    href: "https://www.instagram.com/stemseeds.initiative",
  },
  applyHref:
    "https://docs.google.com/forms/d/e/1FAIpQLScN6nRW2X84GEM7-O82CPEoxv8j3EBt0-WIJEweOy6tfe9wfA/viewform?usp=sharing",
  donateHref:
    "https://www.gofundme.com/f/stemseeds-help-sponsor-underprivileged-kids-with-stem-kits",
  logo: {
    src: "/images/brand/stemseeds-logo.avif",
    alt: "STEMSeeds logo: a plant growing inside a lightbulb",
  },
} as const;

export const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Team", href: "/team" },
  { label: "Join Us", href: "/join-us" },
  { label: "Impact", href: "/impact" },
  { label: "STEM Kit", href: "/stem-kit" },
  { label: "Donate", href: "/donate" },
] as const;

export const stats = [
  { value: 720, suffix: "+", label: "Kits Delivered" },
  { value: 36, suffix: "", label: "Active Chapters" },
  { value: 6, suffix: "", label: "Countries" },
] as const;
