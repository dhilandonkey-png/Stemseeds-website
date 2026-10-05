import type { FloatingPhotoSpec } from "@/components/ui/floating-photo";

export const kitIntro = {
  eyebrow: "STEM Kits",
  title: "What's inside a STEMKit?",
  subtitle: "3-in-1 Experiment Kits",
  body: "Each STEM Seeds kit is hand-designed and carefully packaged by our team to provide engaging, hands-on learning experiences. Explore motion and movement with our three classic engineering projects: a paper rocket, a pom-pom catapult, and a robotic hand! All materials are hospital-safe, free of latex and sharp objects, ensuring a fun and safe experience for all children. Each experiment also includes an easy-to-follow educational flyer which we personally designed that explains the science behind the activity, helping students connect what they build to real scientific concepts.",
} as const;

export type Experiment = {
  name: string;
  tagline: string;
  difficulty: "Easy" | "Medium" | "Hard";
  image: { src: string; alt: string };
  flyer: { src: string; alt: string };
};

export const experiments: Experiment[] = [
  {
    name: "Paper Rocket",
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
  },
  {
    name: "PomPom Catapult",
    tagline: "Fire a pompom into the sky by building a pompom catapult!",
    difficulty: "Medium",
    image: {
      src: "/images/stemkits/pompomcatapult.avif",
      alt: "Pom-pom catapult experiment from the STEMKit",
    },
    flyer: {
      src: "/images/stemkits/pompomcatapultflyer.avif",
      alt: "Educational flyer explaining the science behind the pom-pom catapult",
    },
  },
  {
    name: "Robotic Hand",
    tagline:
      "Create a retractable robotic hand w/ harnessing engineering concepts!",
    difficulty: "Hard",
    image: {
      src: "/images/stemkits/robotichand.avif",
      alt: "Paper robotic hand experiment from the STEMKit",
    },
    flyer: {
      src: "/images/stemkits/robotichandflyer.avif",
      alt: "Educational flyer explaining the science behind the robotic hand",
    },
  },
];

/**
 * Desktop positions are relative to the hero's right-hand cluster column
 * (not the whole section), so the screenshots read as one intentional collage.
 */
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
