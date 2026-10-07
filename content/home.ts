export const whoWeAre = {
  eyebrow: "Who We Are",
  title: "Helping kids feel like kids again",
  paragraphs: [
    "STEMSeeds is a student-led philanthropic organization focused on bringing hands-on STEM education to children of all backgrounds, including pediatric patients and underserved communities. Our team designs and packages custom 3-in-1 STEM activity kits called STEMKits, each containing multiple hands-on experiments that allow children to explore scientific concepts through building, testing, and play.",
    "What matters most to us is helping kids feel like kids again. For children facing long or difficult hospital stays, our STEM kits offer a sense of normalcy, curiosity, and joy during moments that are often stressful or isolating.",
    "Founded by high school students in Frisco, Texas, STEMSeeds has grown from a small local idea into a global initiative. So far, we have distributed over 900 STEM kits and raised around $5.2K to support our work. Our kits have reached children across the DFW Metroplex and Michigan, as well as in India, Bangladesh, Sweden, and Canada.",
    "As our impact continues to grow, new chapters are currently being developed in the Philippines and China, allowing us to reach even more children around the world and remind them that learning and creativity do not stop, even in the hardest moments.",
  ],
  images: [
    {
      src: "/images/who-we-are/whoarewe2.avif",
      alt: "STEMKit boxes labeled with Paper Rocket, Pom-Pom Catapult, and Paper Robotic Hand experiment cards",
      width: 702,
      height: 468,
    },
    {
      src: "/images/who-we-are/whoarewe1.avif",
      alt: "Open kit boxes packed with STEM Kits instruction manuals",
      width: 528,
      height: 330,
    },
    {
      src: "/images/who-we-are/whoarewe3.avif",
      alt: "Three STEMSeeds members pulling a wagon of kits outside a hospital campus",
      width: 533,
      height: 692,
    },
  ],
} as const;

export const howItWorks = {
  eyebrow: "How It Works",
  title: "From our hands to theirs",
  steps: [
    {
      number: "01",
      title: "Design",
      icon: "design",
      text: "Our team designs custom 3-in-1 STEMKits, each packed with hands-on experiments.",
    },
    {
      number: "02",
      title: "Build",
      icon: "build",
      text: "Kits are hand-assembled and carefully packaged with hospital-safe, latex-free materials.",
    },
    {
      number: "03",
      title: "Deliver",
      icon: "deliver",
      text: "Chapters deliver kits to pediatric patients and underserved communities, across the DFW Metroplex and around the world.",
    },
    {
      number: "04",
      title: "Inspire",
      icon: "inspire",
      text: "Children explore scientific concepts through building, testing, and play.",
    },
  ],
} as const;

export const galleryPhotos = [
  {
    src: "/images/stemseeds/stemseedspicture2.png",
    alt: "STEMSeeds members holding a ribbon at a Cook Children's epilepsy awareness event",
  },
  {
    src: "/images/stemseeds/stemseedspicture9.png",
    alt: "STEMSeeds kits stacked on a table during a delivery to a community partner",
  },
  {
    src: "/images/stemseeds/stemseedspicture10.png",
    alt: "Three chapter members holding assembled STEM kits",
  },
  {
    src: "/images/stemseeds/stemseedspicture11.png",
    alt: "Students loading STEM kits from the back of a car",
  },
] as const;

export const partnersSection = {
  eyebrow: "Our Partners",
  title: "Bringing science within reach for every child",
  lead: "At STEMSeeds, we proudly partner with hospitals, nonprofits, schools, and community organizations that share our vision of bringing science within reach for every child. Through these collaborations, we've helped hundreds of young learners rediscover joy, curiosity, and confidence, giving them moments to laugh, explore, and feel like kids again beyond the IVs and monitors.",
  logos: [
    { src: "/images/partners/partner1.avif", alt: "Children's Health" },
    { src: "/images/partners/partner2.avif", alt: "Scottish Rite for Children" },
    { src: "/images/partners/partner3.avif", alt: "Pediatric People" },
    {
      src: "/images/partners/partner4.avif",
      alt: "Mar Thoma Residential School, Tiruvalla, Kerala",
    },
    {
      src: "/images/partners/partner5.avif",
      alt: "Holland Bloorview Kids Rehabilitation Hospital",
    },
    { src: "/images/partners/partner6.avif", alt: "Hazi Abul Kalam School" },
    { src: "/images/partners/partner7.avif", alt: "Cook Children's" },
    { src: "/images/partners/partner8.avif", alt: "American Red Cross" },
    { src: "/images/partners/partner9.avif", alt: "Medical City" },
  ],
} as const;

export const sponsorsSection = {
  eyebrow: "Our Sponsors",
  title: "The support behind every kit",
  lead: "Our sponsors make this work possible. Their support directly funds STEM kits, expands our reach, and ensures that more children can experience moments of joy, curiosity, and learning when they need it most.",
  logos: [
    {
      src: "/images/sponsors/sponsor1.avif",
      alt: "SIROCo — Technology for Smarter Life",
    },
    {
      src: "/images/sponsors/sponsor2.avif",
      alt: "Palm India — The Authentic South Indian Food Experience",
    },
  ],
} as const;

export const recognitionSection = {
  eyebrow: "Mayoral Recognition",
  title: "Recognized by the mayors of Frisco and Mansfield",
  body: "STEMSeeds has been formally recognized by city leadership for its commitment to thoughtful, student-led community impact. Our work was honored with certificates of recognition from the mayors of Frisco and Mansfield, acknowledging the care, intention, and consistency behind our service efforts. These recognitions reflect not just the scale of our outreach, but the genuine impact our programs have had on children and families within the community. Being acknowledged by local leaders reaffirmed our belief that meaningful change can begin with students who lead with purpose and empathy.",
  images: [
    {
      src: "/images/recognition/mayoralrecognition2.avif",
      alt: "STEMSeeds founders holding a City of Frisco certificate of recognition",
    },
    {
      src: "/images/recognition/mayoralrecognition1.avif",
      alt: "STEMSeeds members receiving a certificate of recognition at Mansfield City Hall",
    },
  ],
} as const;

export const closingCta = {
  title: "Help learning take root",
  body: "Start a chapter at your school, or fund the next round of STEMKits for children who need them most.",
  primary: { label: "Start a Chapter", href: "/join-us" },
  secondary: { label: "Donate", href: "/donate" },
} as const;
