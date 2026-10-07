export type ImpactPhoto = {
  src: string;
  alt: string;
};

export type ImpactEvent = {
  title: string;
  /** Shown as written, e.g. "March 2026" or "March 14, 2026". */
  date?: string;
  location?: string;
  /** Hospital (or school) that received the kits. */
  recipient?: string;
  recipientType?: "hospital" | "school";
  /** Chapter that ran the event, linked to its section on the Team page. */
  chapter?: { name: string; teamId: string };
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
    title: "Argyle Chapter Delivers 100 Kits Across 6 Hospitals",
    date: "September 2026",
    location: "North Texas",
    recipient: "Health Services of North Texas",
    chapter: { name: "Argyle High School", teamId: "argyle-high-school" },
    description:
      "Our Argyle High School chapter, led by Shreyas Choudhary, Rohan Pasumarthi, Deva Amruthuluru, Sushanth Ganta, and Rohith Pasumarthi, assembled and delivered 100 STEMKits to Health Services of North Texas, which shared them among six hospitals. Thank you to the team for the time and effort they put into spreading STEM.",
    photos: [
      {
        src: "/images/impact/argyle-1.avif",
        alt: "Two chapter members loading a cart full of sealed STEMKit boxes",
      },
      {
        src: "/images/impact/argyle-2.avif",
        alt: "Chapter members sitting on the floor assembling kit supplies into bags",
      },
    ],
  },
  {
    title: "Reedy High School Delivers 50 Kits to Cook Children's",
    date: "July 17, 2026",
    location: "Fort Worth, Texas",
    recipient: "Cook Children's Medical Center",
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
    title: "Bangladesh Chapter Delivers 100 Kits",
    date: "July 6, 2026",
    location: "Bangladesh",
    recipient: "GiashUddin Model School",
    recipientType: "school",
    chapter: { name: "Bangladesh", teamId: "bangladesh" },
    description:
      "Our Bangladesh chapter, led by Miftahul Jannah Nowsheen with team members Tanha and Tahsin, delivered 100 STEMKits in partnership with GiashUddin Model School. The kits included instruction manuals translated into Bangla, bringing hands-on STEM to even more students around the world.",
    photos: [
      {
        src: "/images/impact/bangladesh-1.avif",
        alt: "Chapter members and a school representative holding a STEMSeeds Bangladesh box",
      },
      {
        src: "/images/impact/bangladesh-2.avif",
        alt: "Two chapter members standing in front of GiashUddin Model School",
      },
      {
        src: "/images/impact/bangladesh-3.avif",
        alt: "Kit supplies with paper cups, straws, craft sticks, and Bangla instruction sheets",
      },
      {
        src: "/images/impact/bangladesh-4.avif",
        alt: "A cardboard box labeled STEMSeeds Bangladesh with the STEMSeeds logo",
      },
      {
        src: "/images/impact/bangladesh-5.avif",
        alt: "Hand-painted brain and lightbulb drawings with STEMSeeds stickers on a box",
      },
    ],
  },
  {
    title: "Reedy Chapter Pickleball Tournament",
    date: "July 5, 2026",
    location: "Frisco, Texas",
    description:
      "Our Reedy High School chapter hosted a STEMSeeds pickleball tournament to raise money for its July kit delivery to Cook Children's Medical Center. Thank you to everyone who came out to play and support the next generation of young innovators.",
    photos: [
      {
        src: "/images/impact/pickleball-reedy-1.avif",
        alt: "Six players stacking hands over a pickleball in front of the courts",
      },
      {
        src: "/images/impact/pickleball-reedy-2.avif",
        alt: "Two players in the middle of a pickleball match",
      },
      {
        src: "/images/impact/pickleball-reedy-3.avif",
        alt: "Tournament players with their paddles gathered around a picnic table",
      },
      {
        src: "/images/impact/pickleball-reedy-4.avif",
        alt: "Three players smiling, one holding a $100 bill",
      },
      {
        src: "/images/impact/pickleball-reedy-5.avif",
        alt: "Three players smiling, two holding up cash",
      },
    ],
  },
  {
    title: "STEMSeeds Partners with Singularity Robotics",
    date: "June 16, 2026",
    description:
      "STEMSeeds announced a new partnership with Singularity Robotics, FRC Team 10032, joining forces to create a more unified and impactful change in the community. Together, the teams launched a GoFundMe to kickstart the collaboration, and Singularity is now planning its own upcoming STEMSeeds kit drop.",
    photos: [
      {
        src: "/images/impact/singularity-partnership.avif",
        alt: "Singularity Robotics team 10032 and STEMSeeds logos side by side over photos of both teams",
      },
    ],
  },
  {
    title: "Toronto Chapter Delivers Kits to Two Canadian Hospitals",
    date: "May 1, 2026",
    location: "Toronto, Canada",
    recipient: "Cortellucci Vaughan Hospital & Credit Valley Hospital",
    chapter: {
      name: "University of Toronto Schools",
      teamId: "university-of-toronto-schools",
    },
    description:
      "Our international chapter at University of Toronto Schools, led by Maisey Zhao and Isabel Tian, delivered STEMKits to Cortellucci Vaughan Hospital and Credit Valley Hospital. Each box was hand-packed and labeled with paper rockets, pom-pom catapults, and robotic hands, along with instruction manuals and QR codes to online tutorials. We are so grateful for their continued hard work.",
    photos: [
      {
        src: "/images/impact/toronto-uts-1.avif",
        alt: "Two chapter members and a hospital staff member holding boxes of STEMKits at Cortellucci Vaughan Hospital",
      },
      {
        src: "/images/impact/toronto-uts-2.avif",
        alt: "Chapter members and a hospital staff member holding labeled STEMKit boxes",
      },
      {
        src: "/images/impact/toronto-uts-3.avif",
        alt: "Labeled boxes of paper rockets, pom-pom catapults, and robotic hands next to STEM Kits instruction manuals",
      },
      {
        src: "/images/impact/toronto-uts-4.avif",
        alt: "Five hand-labeled STEMKit boxes lined up on a wooden floor",
      },
    ],
  },
  {
    title: "Michigan Chapter's First Delivery",
    date: "March 14, 2026",
    location: "Detroit, Michigan",
    recipient: "Children's Hospital of Michigan",
    chapter: { name: "Michigan", teamId: "michigan-chapter-leadership" },
    description:
      "Our Michigan chapter at Northville High School, led by Rishan Patel, completed its first kit drop, delivering more than 40 STEMKits to the Children's Hospital of Michigan. The team packed and sealed every box by hand, and more deliveries are on the way.",
    photos: [
      {
        src: "/images/impact/michigan-1.avif",
        alt: "Two chapter members wheeling STEMKit boxes toward the Children's Hospital of Michigan",
      },
      {
        src: "/images/impact/michigan-2.avif",
        alt: "Chapter members unloading STEMKit boxes from a car trunk into a wheelchair",
      },
      {
        src: "/images/impact/michigan-3.avif",
        alt: "Chapter members taping STEMKit boxes shut on the floor",
      },
      {
        src: "/images/impact/michigan-4.avif",
        alt: "Three chapter members sealing a box with STEMSeeds tape",
      },
      {
        src: "/images/impact/michigan-pile.avif",
        alt: "A pile of sealed STEMKit boxes on a wooden floor, ready for delivery",
      },
    ],
  },
  {
    title: "Wakeland Chapter Delivers 25 Kits to Children's Health Plano",
    date: "January 20, 2026",
    location: "Plano, Texas",
    recipient: "Children's Health Plano",
    chapter: { name: "Wakeland High School", teamId: "wakeland-high-school" },
    description:
      "Our Wakeland High School chapter, led by Hasini Yalavarthi, delivered 25 STEMKits to Children's Health Plano. Each box was packed with pom-pom catapult and robotic hand experiments, plus a QR code linking to step-by-step instructions. Everyone at STEMSeeds is grateful for the time and effort the team put into spreading STEM.",
    photos: [
      {
        src: "/images/impact/wakeland-1.avif",
        alt: "A chapter member and a Children's Health staff member holding STEMKits beside a wagon full of boxes",
      },
      {
        src: "/images/impact/wakeland-2.avif",
        alt: "Open STEMKit boxes packed with pom-pom catapult and robotic hand supplies and QR code cards",
      },
      {
        src: "/images/impact/wakeland-3.avif",
        alt: "A large pile of sealed STEMKit boxes ready for delivery",
      },
    ],
  },
  {
    title: "Argyle Chapter Delivers 75 Kits to Children's Health",
    date: "January 9, 2026",
    location: "Fort Worth, Texas",
    recipient: "Children's Health",
    chapter: { name: "Argyle High School", teamId: "argyle-high-school" },
    description:
      "Our Argyle High School chapter, led by Shreyas Choudhary, loaded up and delivered 75 STEMKits to Children's Health. Thank you to the team for the time and effort they put into bringing hands-on STEM to young patients.",
    photos: [
      {
        src: "/images/impact/argyle-childrens-1.avif",
        alt: "Four chapter members standing behind a cart of STEMKits in the Children's Health lobby",
      },
      {
        src: "/images/impact/argyle-childrens-2.avif",
        alt: "Chapter members packing sealed STEMKit boxes into a car trunk",
      },
      {
        src: "/images/impact/argyle-childrens-3.avif",
        alt: "Chapter members unloading STEMKit boxes from a car outside the hospital",
      },
    ],
  },
  {
    title: "Bangladesh Chapter Delivers 75 Kits",
    date: "December 28, 2025",
    location: "Narayanganj, Bangladesh",
    recipient: "Hazi Abul Kalam School",
    recipientType: "school",
    chapter: { name: "Bangladesh", teamId: "bangladesh" },
    description:
      "Our Bangladesh chapter, led by Miftahul Jannah Nowsheen with team members Tanha and Tahsin, delivered 75 STEMKits in partnership with Hazi Abul Kalam School. We are incredibly grateful for chapters like this one that are expanding STEMSeeds across the world and inspiring curiosity where it matters most.",
    photos: [
      {
        src: "/images/impact/bangladesh-dec-1.avif",
        alt: "Three chapter members sitting beside a STEMSeeds Bangladesh box in the school courtyard",
      },
      {
        src: "/images/impact/bangladesh-dec-2.avif",
        alt: "Chapter members and a school representative standing behind a STEMSeeds Bangladesh box",
      },
      {
        src: "/images/impact/bangladesh-dec-3.avif",
        alt: "A chapter member holding a STEMSeeds Bangladesh box outside the school",
      },
      {
        src: "/images/impact/bangladesh-dec-4.avif",
        alt: "Two chapter members holding up STEMSeeds stickers",
      },
      {
        src: "/images/impact/bangladesh-dec-5.avif",
        alt: "A STEMSeeds Bangladesh box in front of a monument in the school courtyard",
      },
    ],
  },
  {
    title: "Mansfield ECHS Chapter Delivers 75 Kits to Cook Children's",
    date: "November 21, 2025",
    location: "Fort Worth, Texas",
    recipient: "Cook Children's Medical Center",
    chapter: { name: "Mansfield ECHS", teamId: "mansfield-echs" },
    description:
      "Our Mansfield Early College High School chapter, led by Shahzaib Ahmed, worked together to prepare and deliver 75 STEMKits to the children at Cook Children's Medical Center in Fort Worth. We are so grateful for chapters like this one that work so diligently to spread the joy of learning.",
    photos: [
      {
        src: "/images/impact/mansfield-1.avif",
        alt: "Four chapter members holding Cook Children's thank-you signs beside carts of STEMKits",
      },
      {
        src: "/images/impact/mansfield-2.avif",
        alt: "Chapter members and a Cook Children's staff member holding STEMKit boxes",
      },
      {
        src: "/images/impact/mansfield-3.avif",
        alt: "Four chapter members holding a strip of STEMSeeds tape outside Cook Children's",
      },
      {
        src: "/images/impact/mansfield-4.avif",
        alt: "Chapter members loading STEMKit boxes from a car onto a cart",
      },
      {
        src: "/images/impact/mansfield-5.avif",
        alt: "Chapter members unloading STEMKit boxes from a car trunk",
      },
    ],
  },
  {
    title: "Toronto Chapter Delivers 40 Kits to Holland Bloorview",
    date: "November 20, 2025",
    location: "Toronto, Canada",
    recipient: "Holland Bloorview Kids Rehabilitation Hospital",
    chapter: {
      name: "University of Toronto Schools",
      teamId: "university-of-toronto-schools",
    },
    description:
      "Our Toronto chapter, led by Maisey Zhao and Isabel Tian from University of Toronto Schools, worked together to prepare 40 STEMKits for the children at Holland Bloorview Kids Rehabilitation Hospital. Each kit included a paper rocket, pom-pom catapult, and paper robotic hand with an instruction manual. We're so grateful for chapter leaders working hard to grow STEMSeeds' global impact and keep inspiring learning.",
    photos: [
      {
        src: "/images/impact/toronto-holland-1.avif",
        alt: "Two chapter members and a Holland Bloorview staff member with a stack of STEMKit boxes",
      },
      {
        src: "/images/impact/toronto-holland-2.avif",
        alt: "Open STEMKit boxes with instruction manuals for the paper rocket, pom-pom catapult, and paper robotic hand",
      },
    ],
  },
  {
    title: "Sweden Chapter Delivers 45 Kits with the Red Cross",
    date: "October 28, 2025",
    location: "Helsingborg, Sweden",
    recipient: "Swedish Red Cross (Röda Korset)",
    chapter: {
      name: "International School of Helsingborg",
      teamId: "international-school-of-helsingborg",
    },
    description:
      "Our Sweden chapter, led by Medha Sridar from the International School of Helsingborg, partnered with the Red Cross to prepare and deliver 45 STEMKits, which will be distributed to hospitalized pediatric patients across Sweden. The team even translated the instruction manuals into Swedish. We're proud to see STEMSeeds continuing to make a global impact.",
    photos: [
      {
        src: "/images/impact/sweden-1.avif",
        alt: "Medha Sridar and a Swedish Red Cross volunteer holding STEMKits behind a table of boxes",
      },
      {
        src: "/images/impact/sweden-2.avif",
        alt: "STEMKit boxes labeled Paper Rocket, Pom-Pom Catapult, and Paper Robotic Hand next to STEMSeeds flyers",
      },
      {
        src: "/images/impact/sweden-3.avif",
        alt: "STEMSeeds flyers, brochures, and Swedish instruction manuals laid out on a table",
      },
      {
        src: "/images/impact/sweden-4.avif",
        alt: "A spread of STEM byggsatser instruction manuals translated into Swedish",
      },
      {
        src: "/images/impact/sweden-5.avif",
        alt: "The Röda Korset (Red Cross) building in Helsingborg surrounded by white roses",
      },
    ],
  },
  {
    title: "Wylie Chapter Delivers 95 Kits to Children's Health Dallas",
    date: "October 14, 2025",
    location: "Dallas, Texas",
    recipient: "Children's Medical Center Dallas",
    chapter: { name: "Wylie High School", teamId: "wylie-high-school" },
    description:
      "Our Wylie High School chapter, led by Praseed Banerjee, delivered 95 STEMKits to Children's Health in Dallas. Thank you to everyone who made it happen as we keep working to bring a sense of joy, creativity, and normalcy to hospitalized pediatric patients during their long stays.",
    photos: [
      {
        src: "/images/impact/wylie-1.avif",
        alt: "Four chapter members holding STEMKits beside a Child Life cart inside Children's Medical Center Dallas",
      },
      {
        src: "/images/impact/wylie-2.avif",
        alt: "Four chapter members standing next to a cart of STEMKits outside the Children's Health entrance",
      },
      {
        src: "/images/impact/wylie-3.avif",
        alt: "Chapter members taking a selfie in the Children's Medical Center lobby",
      },
    ],
  },
  {
    title: "Independence Chapter Delivers Kits to Pediatric People",
    date: "August 7, 2025",
    location: "Frisco, Texas",
    recipient: "Pediatric People",
    chapter: {
      name: "Independence High School",
      teamId: "independence-high-school",
    },
    description:
      "Our Independence High School chapter, led by Akshaya Karuturi, partnered with Pediatric People for a quick drop of STEMKits for their young patients. Great work to everyone involved as we keep spreading STEM.",
    photos: [
      {
        src: "/images/impact/independence-1.avif",
        alt: "Three chapter members holding STEMKit boxes in front of the Pediatric People rocket ship",
      },
      {
        src: "/images/impact/independence-2.avif",
        alt: "Chapter members holding STEMKits at Pediatric People",
      },
      {
        src: "/images/impact/independence-3.avif",
        alt: "Two chapter members holding stacks of STEMKits beside the rocket ship display",
      },
      {
        src: "/images/impact/independence-4.avif",
        alt: "A Pediatric People staff member taking a selfie with the chapter members and their kits",
      },
      {
        src: "/images/impact/independence-5.avif",
        alt: "Stacked STEMKit boxes sealed with STEMSeeds tape",
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
