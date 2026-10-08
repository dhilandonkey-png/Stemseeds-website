export const site = {
  name: "STEMSeeds",
  tagline: "Where Learning Takes Root",
  url: "https://www.stemseeds.net",
  description:
    "STEMSeeds is a student-led nonprofit organization focused on bringing hands-on STEM education to children of all backgrounds, including pediatric patients and underserved communities.",
  instagram: {
    handle: "stemseeds.initiative",
    href: "https://www.instagram.com/stemseeds.initiative",
  },
  applyHref:
    "https://docs.google.com/forms/d/e/1FAIpQLScN6nRW2X84GEM7-O82CPEoxv8j3EBt0-WIJEweOy6tfe9wfA/viewform?usp=sharing",
  donateHref:
    "https://www.gofundme.com/f/stemseeds-help-sponsor-underprivileged-kids-with-stem-kits",
  email: "stem.seeds.org@gmail.com",
  /** When the stats below were last updated. */
  statsAsOf: "October 2026",
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
  { value: 945, suffix: "+", label: "Kits Delivered" },
  { value: 32, suffix: "", label: "Active Chapters" },
  { value: 6, suffix: "", label: "Countries with Chapters" },
] as const;

export const requestKits = {
  eyebrow: "Request Kits",
  title: "Bring STEMKits to your kids",
  body: "Hospitals, schools, and community organizations can request free STEMKits for the children they serve. Our student chapters assemble and deliver every kit.",
  steps: [
    {
      title: "Send us a request",
      text: "Fill out the form below with a few details about your organization and the children you serve.",
    },
    {
      title: "We match you with a chapter",
      text: "Our team connects you with a nearby chapter, or plans a delivery from our core team.",
    },
    {
      title: "Kits are delivered",
      text: "Students hand-pack and deliver your STEMKits, with instructions and science flyers inside.",
    },
  ],
  note: "Requests depend on chapter availability in your area, so please reach out at least a few weeks ahead. We'll reply by email to confirm.",
} as const;
