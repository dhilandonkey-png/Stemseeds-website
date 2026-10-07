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
    title: "Reedy High School Delivers 50 Kits to Cook Children's",
    date: "July 17, 2026",
    location: "Fort Worth, Texas",
    description:
      "Our Reedy High School chapter, led by Satvik Gundumalla, Eshan Rudravaram, Aadith Nair, Mihir Kshirsagar, and Adit Nalluri, packed and delivered 50 STEMKits to Cook Children's Medical Center in Fort Worth. Thank you to the team for the time and effort they put into bringing hands-on STEM to young patients.",
    photos: [
      {
        src: "/images/impact/cook-childrens-reedy-1.avif",
        alt: "Reedy chapter members giving a thumbs up with a Cook Children's staff member and a cart of STEMKits outside the hospital",
      },
      {
        src: "/images/impact/cook-childrens-reedy-2.avif",
        alt: "Four chapter members pointing to a stack of finished STEMKit boxes",
      },
      {
        src: "/images/impact/cook-childrens-reedy-3.avif",
        alt: "A wall of sealed STEMKit boxes with STEMSeeds tape",
      },
      {
        src: "/images/impact/cook-childrens-reedy-4.avif",
        alt: "Kit supplies laid out on tables before assembly: cups, straws, craft sticks, and instruction sheets",
      },
    ],
  },
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
