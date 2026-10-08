import type { FloatingPhotoSpec } from "@/components/ui/floating-photo";

export const kitIntro = {
  eyebrow: "STEMKits",
  title: "What's inside a STEMKit?",
  subtitle: "3-in-1 Experiment Kits",
  body: "Each STEMSeeds kit is hand-designed and carefully packaged by our team to provide engaging, hands-on learning experiences. Explore motion and movement with our three classic engineering projects: a paper rocket, a pom-pom catapult, and a robotic hand! All materials are hospital-safe, free of latex and sharp objects, ensuring a fun and safe experience for all children. Each experiment also includes an easy-to-follow educational flyer which we personally designed that explains the science behind the activity, helping students connect what they build to real scientific concepts.",
} as const;

export type Experiment = {
  name: string;
  tagline: string;
  difficulty: "Easy" | "Medium" | "Hard";
  image: { src: string; alt: string };
  flyer: { src: string; alt: string };
  /** Which animated demo to show on the STEM Kit page. */
  demo: "rocket" | "catapult" | "hand";
  /** Step-by-step build instructions from the official manual. */
  steps: string[];
  /** Pages of the official manual for this project, in order. */
  stepImages: { src: string; alt: string }[];
  /** Science concepts from the experiment's flyer, as readable text. */
  concepts: { term: string; text: string }[];
};

export const experiments: Experiment[] = [
  {
    name: "Paper Rocket",
    demo: "rocket",
    steps: [
      "Fold the construction paper into fourths and cut along the folds.",
      "Wrap one rectangle around a straw to form a cylinder.",
      "Close the cylinder with tape so it doesn't come apart, then take the straw out.",
      "Pinch one end to make the nose and tape it shut.",
      "Fold another rectangle in half and cut out triangles to make fins.",
      "Tape the two fins to the bottom end of the cylinder.",
      "Place the rocket on the straw and blow!",
    ],
    stepImages: [
      {
        src: "/images/stemkits/steps/rocket-1.avif",
        alt: "Paper Rocket instruction manual, page 1 of 3",
      },
      {
        src: "/images/stemkits/steps/rocket-2.avif",
        alt: "Paper Rocket instruction manual, page 2 of 3",
      },
      {
        src: "/images/stemkits/steps/rocket-3.avif",
        alt: "Paper Rocket instruction manual, page 3 of 3",
      },
    ],
    tagline: "Launch a rocket into the air while learning about physics!",
    difficulty: "Easy",
    image: {
      src: "/images/stemkits/paperrocket.avif",
      alt: "Paper rocket experiment from the STEMKit",
    },
    flyer: {
      src: "/images/stemkits/paperrocketflyer.avif",
      alt: "Educational flyer explaining the science behind the paper rocket",
    },
    concepts: [
      {
        term: "Thrust",
        text: "The force that pushes the rocket forward, created by your breath pushing air out of the straw.",
      },
      {
        term: "Lift",
        text: "The upward force that opposes gravity, created by the rocket's shape as it moves through the air.",
      },
      {
        term: "Drag",
        text: "The force that slows the rocket down, caused by friction between the rocket and the air.",
      },
      {
        term: "Gravity",
        text: "The force that pulls the rocket back down to the ground after it launches.",
      },
      {
        term: "Newton's third law",
        text: "For every action there is an equal and opposite reaction: blowing air into the straw pushes the rocket forward.",
      },
    ],
  },
  {
    name: "Pom-Pom Catapult",
    demo: "catapult",
    steps: [
      "Place both paper cups upside down.",
      "Cut your straw into two pieces about the same length as the diameter of the cups.",
      "Tape one straw piece to the top of each cup.",
      "Insert the skewer through both straws.",
      "Fold the paper in half, keeping it at a 90-degree angle.",
      "Tape the paper to the popsicle stick.",
      "Tape the popsicle stick to the skewer.",
      "Load a pom-pom into the paper, then push down on the other end of the popsicle stick to launch!",
    ],
    stepImages: [
      {
        src: "/images/stemkits/steps/catapult-1.avif",
        alt: "Pom-Pom Catapult instruction manual, page 1 of 3",
      },
      {
        src: "/images/stemkits/steps/catapult-2.avif",
        alt: "Pom-Pom Catapult instruction manual, page 2 of 3",
      },
      {
        src: "/images/stemkits/steps/catapult-3.avif",
        alt: "Pom-Pom Catapult instruction manual, page 3 of 3",
      },
    ],
    tagline: "Fire a pom-pom into the sky by building a pom-pom catapult!",
    difficulty: "Medium",
    image: {
      src: "/images/stemkits/pompomcatapult.avif",
      alt: "Pom-pom catapult experiment from the STEMKit",
    },
    flyer: {
      src: "/images/stemkits/pompomcatapultflyer.avif",
      alt: "Educational flyer explaining the science behind the pom-pom catapult",
    },
    concepts: [
      {
        term: "Lever",
        text: "A catapult is a type of lever, a simple machine that helps you move things.",
      },
      {
        term: "Potential energy",
        text: "Pulling back the catapult's arm stores energy.",
      },
      {
        term: "Kinetic energy",
        text: "Releasing the arm turns that stored energy into motion that launches the pom-pom.",
      },
      {
        term: "Gravity",
        text: "The invisible force that pulls the pom-pom back down to the ground.",
      },
      {
        term: "Newton's laws of motion",
        text: "Explain how objects move, including catapults and the things they launch.",
      },
    ],
  },
  {
    name: "Robotic Hand",
    demo: "hand",
    steps: [
      "Spread your hand out on the construction paper and trace it.",
      "Draw lines on your traced hand along each finger and across the palm.",
      "Cut your straws into pieces the same size as each line on the traced hand.",
      "Tape each straw piece onto its matching line, then cut out the traced hand.",
      "Cut out a 6-inch rectangle as wide as the wrist of the hand.",
      "Lay the hand upside down, place the rectangle halfway onto the wrist, and tape it.",
      "Flip the hand back over.",
      "Wrap one end of a string tightly around the skewer.",
      "Use the skewer to thread the string through the straw pieces, starting from the top of the finger.",
      "Bend the string over the top straw and tape it down. Make sure the string reaches the end of the wrist.",
      "Repeat steps 8 to 10 for the rest of the fingers.",
      "Cut a 1-inch piece of straw and thread all of the strings at the bottom of the hand through it.",
      "Tape that straw to the paper. Pull the strings at the bottom and watch the fingers close!",
    ],
    stepImages: [
      {
        src: "/images/stemkits/steps/hand-1.avif",
        alt: "Robotic Hand instruction manual, page 1 of 4",
      },
      {
        src: "/images/stemkits/steps/hand-2.avif",
        alt: "Robotic Hand instruction manual, page 2 of 4",
      },
      {
        src: "/images/stemkits/steps/hand-3.avif",
        alt: "Robotic Hand instruction manual, page 3 of 4",
      },
      {
        src: "/images/stemkits/steps/hand-4.avif",
        alt: "Robotic Hand instruction manual, page 4 of 4",
      },
    ],
    tagline: "Build a moving robotic hand and discover how tendons work.",
    difficulty: "Hard",
    image: {
      src: "/images/stemkits/robotichand.avif",
      alt: "Paper robotic hand experiment from the STEMKit",
    },
    flyer: {
      src: "/images/stemkits/robotichandflyer.avif",
      alt: "Educational flyer explaining the science behind the robotic hand",
    },
    concepts: [
      {
        term: "Lever",
        text: "The straws act as levers that move the fingers of the hand.",
      },
      {
        term: "Fulcrum",
        text: "The point where a lever pivots; here, the bamboo skewer.",
      },
      {
        term: "Force",
        text: "A push or pull: pulling the strings moves the fingers, just like tendons in your hand.",
      },
      {
        term: "Structure",
        text: "The hand is a structure that supports the weight of the fingers.",
      },
      {
        term: "Design",
        text: "The process of creating something. In this project, you are designing a robotic hand.",
      },
    ],
  },
];

/**
 * Desktop positions are relative to the hero's right-hand cluster column
 * (not the whole section), so the screenshots read as one intentional collage.
 */
export const kitManual = {
  pdf: "/downloads/STEMSeeds-STEMKits-Instruction-Manual.pdf",
  video: "https://youtu.be/svMXxXSEJoY",
} as const;

export const kitSafety = {
  title: "Safety and supervision",
  points: [
    "All materials are hospital-safe and latex-free, with no sharp objects.",
    "Each kit includes step-by-step instruction manuals with QR codes to video tutorials.",
    "We recommend an adult helper for younger children, especially when using straws, string, and skewers.",
  ],
} as const;

export const kitFloats: FloatingPhotoSpec[] = [
  {
    src: "/images/stemkits/kit-open-boxes.png",
    alt: "Open kit boxes filled with instruction manuals and pencils",
    depth: 0.6,
    rotate: -3.5,
    duration: 12,
    delay: 0.2,
    className: "top-[0%] left-[10%] w-[44%]",
    width: 420,
    height: 540,
    sizes: "280px",
  },
  {
    src: "/images/stemkits/kit-box.png",
    alt: "A sealed STEMKit box wrapped in Where Learning Takes Root tape",
    depth: 1.15,
    rotate: 3.2,
    duration: 10,
    delay: 0.5,
    className: "top-[6%] right-[0%] w-[42%]",
    width: 440,
    height: 560,
    sizes: "260px",
  },
  {
    src: "/images/stemkits/kit-experiment-bags.png",
    alt: "Hospital-safe experiment bags with the Paper Robotic Hand instruction manual",
    depth: 1.8,
    rotate: -1.5,
    duration: 13.5,
    delay: 0.8,
    className: "top-[33%] left-[34%] z-20 w-[34%]",
    width: 320,
    height: 420,
    sizes: "220px",
  },
  {
    src: "/images/stemkits/kit-manuals-table.png",
    alt: "Manuals, educational flyers, and health cards laid out for kit assembly",
    depth: 1.45,
    rotate: 2.4,
    duration: 12.8,
    delay: 0.6,
    className: "bottom-[2%] left-[8%] w-[45%]",
    width: 410,
    height: 540,
    sizes: "290px",
  },
  {
    src: "/images/stemkits/kit-sealed-grid.png",
    alt: "Rows of packaged STEMKits ready for delivery",
    depth: 0.9,
    rotate: -4,
    duration: 11,
    delay: 0.3,
    className: "right-[2%] bottom-[0%] w-[44%]",
    width: 430,
    height: 560,
    sizes: "270px",
  },
  {
    src: "/images/stemkits/kit-open-boxes.png",
    alt: "Open kit boxes filled with instruction manuals and pencils",
    depth: 0.35,
    rotate: -3,
    duration: 11,
    delay: 0.1,
    className: "top-2 left-[4%] w-[44%] max-w-[175px]",
    width: 360,
    height: 460,
    sizes: "44vw",
    mobile: true,
  },
  {
    src: "/images/stemkits/kit-box.png",
    alt: "A sealed STEMKit box wrapped in Where Learning Takes Root tape",
    depth: 0.55,
    rotate: 3.4,
    duration: 12.5,
    delay: 0.4,
    className: "top-0 right-[6%] w-[42%] max-w-[165px]",
    width: 340,
    height: 440,
    sizes: "42vw",
    mobile: true,
  },
  {
    src: "/images/stemkits/kit-manuals-table.png",
    alt: "Manuals, educational flyers, and health cards laid out for kit assembly",
    depth: 0.7,
    rotate: 1.8,
    duration: 10.5,
    delay: 0.6,
    className: "bottom-0 left-[26%] w-[48%] max-w-[190px]",
    width: 400,
    height: 520,
    sizes: "48vw",
    mobile: true,
  },
];

export const kitGallery = [
  {
    src: "/images/stemkits/kit-photo-6.png",
    alt: "A chapter table in Sweden with STEM byggsatser instruction manuals, brochures, and kit boxes",
  },
  {
    src: "/images/stemkits/kit-photo-7.png",
    alt: "Instruction manuals translated into Bangla, laid out before packing",
  },
  {
    src: "/images/stemkits/kit-photo-8.png",
    alt: "Boxes of kits packed with PomPom Catapult instruction manuals",
  },
  {
    src: "/images/stemkits/kit-photo-9.png",
    alt: "Swedish-language STEM byggsatser manuals for the paper rocket and robotic hand",
  },
  {
    src: "/images/stemkits/kit-photo-10.png",
    alt: "Packed kits with translated instruction manuals in plastic sleeves",
  },
] as const;

export const kitReach =
  "Our kits have reached children across the DFW Metroplex, as well as in India, Bangladesh, Sweden, and Canada." as const;
