export const donateCopy = {
  eyebrow: "Donate",
  title: "Support Our Cause",
  body: "We've inspired hundreds of young scientists, and with your help, we can inspire countless more! Your donation funds the distribution of more of our signature 3-in-1 STEM kits to disadvantaged children across the globe—making the joy of STEM accessible to all.",
  ctaLabel: "Donate Now",
  note: "Donations are processed securely through our GoFundMe campaign.",
  impactPoints: [
    {
      title: "Funds more STEMKits",
      text: "Your donation funds the distribution of more of our signature 3-in-1 STEM kits.",
    },
    {
      title: "Reaches children across the globe",
      text: "Kits go to disadvantaged children across the globe — from the DFW Metroplex to India, Bangladesh, Sweden, and Canada.",
    },
    {
      title: "Makes STEM accessible to all",
      text: "Every kit makes the joy of STEM accessible to children of all backgrounds, including pediatric patients.",
    },
  ],
} as const;

export const donationImpact = {
  title: "See where your donation goes",
  lead: "Each STEMKit costs about $5 to make. Pick an amount to see how many kits, and how many children, your gift reaches.",
  costPerKit: 5,
  presets: [10, 25, 50, 100, 250],
  min: 5,
  max: 500,
  kitSummary:
    "Every kit is hand-packed by student volunteers and delivered for free to children in hospitals and underserved communities.",
  alsoIncluded: [
    "Hospital-safe, latex-free materials",
    "Step-by-step instruction manual with QR code tutorials",
    "Science flyers that explain how each experiment works",
    "Sealed STEMSeeds box, delivered by our chapters",
  ],
} as const;
