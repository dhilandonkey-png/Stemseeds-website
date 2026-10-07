export type ImpactPhoto = {
  src: string;
  alt: string;
};

export type ImpactEvent = {
  title: string;
  /** Shown as written, e.g. "March 2026" or "March 14, 2026". */
  date?: string;
  location?: string;
  description: string;
  photos: ImpactPhoto[];
};

export const impactIntro = {
  eyebrow: "Our Impact",
  title: "Everything we've done so far",
  body: "From hospital deliveries to new chapters around the world, here is a look at the moments that have shaped STEMSeeds. Every event below was planned, packed, and delivered by students.",
} as const;

/** Newest first. Add a new event by copying one block and filling it in. */
export const impactEvents: ImpactEvent[] = [
  {
    title: "Recognized by the Mayor of Frisco",
    location: "Frisco, Texas",
    description:
      "STEMSeeds was honored with a certificate of recognition from the Mayor of Frisco for its commitment to thoughtful, student-led community impact.",
    photos: [
      {
        src: "/images/recognition/mayoralrecognition2.avif",
        alt: "STEMSeeds founders holding a City of Frisco certificate of recognition",
      },
    ],
  },
  {
    title: "Recognized by the Mayor of Mansfield",
    location: "Mansfield, Texas",
    description:
      "Our members received a certificate of recognition at Mansfield City Hall, acknowledging the care, intention, and consistency behind our service efforts.",
    photos: [
      {
        src: "/images/recognition/mayoralrecognition1.avif",
        alt: "STEMSeeds members receiving a certificate of recognition at Mansfield City Hall",
      },
    ],
  },
];
