export const whoWeAre = {
  eyebrow: "Who We Are",
  title: "Helping kids feel like kids again",
  intro:
    "STEMSeeds is a student-led 501(c)(3) nonprofit founded in Frisco, Texas. We design 3-in-1 STEMKits packed with hands-on experiments and deliver them to pediatric patients and underserved communities, so kids in difficult moments can feel like kids again.",
  facts: [
    { value: "3", label: "hands-on experiments in every STEMKit" },
    { value: "$5K+", label: "raised by student fundraisers and donors" },
    { value: "2", label: "city recognitions, from Frisco and Mansfield" },
  ],
  link: { label: "Read our full story", href: "/about#our-story" },
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

export const ourStory = {
  eyebrow: "Our Story",
  title: "From a small local idea to a global initiative",
  paragraphs: [
    "STEMSeeds designs and packages custom 3-in-1 STEM activity kits called STEMKits, each containing multiple hands-on experiments that let children explore scientific concepts through building, testing, and play.",
    "What matters most to us is helping kids feel like kids again. For children facing long or difficult hospital stays, our STEMKits offer a sense of normalcy, curiosity, and joy during moments that are often stressful or isolating.",
    "Founded by high school students in Frisco, Texas, STEMSeeds has distributed more than 1,000 STEMKits and raised more than $5K, funded by generous donors and student-run fundraisers like our volleyball and pickleball tournaments. Our kits have reached children across the DFW Metroplex and Michigan, as well as in India, Bangladesh, Sweden, and Canada.",
    "Today we have chapters in six countries: the United States, Canada, India, Bangladesh, Sweden, and the Philippines. A new chapter is being developed in China, so we can keep reminding children that learning and creativity do not stop, even in the hardest moments.",
  ],
} as const;

export const howItWorks = {
  eyebrow: "How It Works",
  title: "How a delivery happens",
  steps: [
    {
      number: "01",
      title: "Fund",
      icon: "fund",
      text: "Chapters raise money for supplies through donations and student-run events like pickleball and volleyball tournaments.",
    },
    {
      number: "02",
      title: "Assemble",
      icon: "build",
      text: "Students hand-pack each kit with three experiments, latex-free materials, and printed step-by-step instructions.",
    },
    {
      number: "03",
      title: "Coordinate",
      icon: "coordinate",
      text: "The chapter contacts a nearby hospital or school to confirm how many kits they need and schedule a drop-off.",
    },
    {
      number: "04",
      title: "Deliver",
      icon: "deliver",
      text: "Students bring the kits in person, and hospital staff pass them on to the children they care for.",
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
    {
      src: "/images/partners/partner2.avif",
      alt: "Scottish Rite for Children",
    },
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
  lead: "Our sponsors make this work possible. Their support directly funds STEMKits, expands our reach, and ensures that more children can experience moments of joy, curiosity, and learning when they need it most.",
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
  body: "In September 2025, the City of Frisco awarded STEMSeeds a Certificate of Recognition for our kit deliveries across the city, made possible by our Frisco ISD chapters. In December 2025, the City of Mansfield recognized the work of our Mansfield ECHS chapter.",
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
