export const joinIntro = {
  question: "Want to run kit drives at your school?",
  body: "A STEMSeeds chapter is a group of students who fund, pack, and deliver STEMKits to a hospital or school near them. We send you the kit design, the instruction manual, the science flyers, and a guide to your first delivery. Most chapters start with one or two students."
} as const;

export const joinSteps = [
  {
    number: "01",
    title: "Apply",
    icon: "apply",
    text: "Fill out the official chapter enrollment form.",
  },
  {
    number: "02",
    title: "Get Approved",
    icon: "approved",
    text: "The STEMSeeds team reviews your application and welcomes you aboard.",
  },
  {
    number: "03",
    title: "Receive Resources",
    icon: "resources",
    text: "Get step-by-step guidance and exclusive chapter resources.",
  },
  {
    number: "04",
    title: "Build Your Chapter",
    icon: "build",
    text: "Recruit a few classmates to help with fundraising and packing.",
  },
  {
    number: "05",
    title: "Assemble Kits",
    icon: "assemble",
    text: "Create and package hands-on 3-in-1 STEMKits.",
  },
  {
    number: "06",
    title: "Deliver",
    icon: "impact",
    text: "Bring the kits to a local hospital or school, in person."
  },
] as const;

export const joinFanImages = [
  {
    src: "/images/stemseeds/stemseedspicture10.png",
    alt: "Three chapter members holding assembled STEM kits",
  },
  {
    src: "/images/stemseeds/stemseedspicture2.png",
    alt: "STEMSeeds members holding a ribbon at a Cook Children's epilepsy awareness event",
  },
  {
    src: "/images/stemseeds/stemseedspicture11.png",
    alt: "Students loading STEM kits from the back of a car",
  },
  {
    src: "/images/stemseeds/stemseedspicture4.png",
    alt: "Four STEMSeeds members delivering kits beside a Child Life cart in a children's hospital",
  },
  {
    src: "/images/stemseeds/stemseedspicture7.png",
    alt: "Two STEMSeeds chapter members in Bangladesh holding Where Learning Takes Root stickers",
  },
  {
    src: "/images/stemseeds/stemseedspicture5.png",
    alt: "Two students unloading boxed STEM kits from a car trunk",
  },
  {
    src: "/images/stemseeds/stemseedspicture12.png",
    alt: "STEMSeeds members and a hospital staff member standing with a wagon of STEM kits",
  },
  {
    src: "/images/stemseeds/stemseedspicture6.png",
    alt: "Two STEMSeeds members holding kits outside a Cook Children's clinic",
  },
] as const;

export const joinCta = {
  title: "Start a chapter at your school",
  body: "Applying is free and takes about five minutes."
} as const;

export const chapterNetwork = {
  title: "A chapter network across six countries",
  body: "STEMSeeds is led by a team of more than 50 students across the United States, India, Bangladesh, the Philippines, Sweden, and Canada, each serving different roles but united by a shared purpose.",
  countries: [
    "United States",
    "India",
    "Bangladesh",
    "Philippines",
    "Sweden",
    "Canada",
  ],
} as const;

export const chapterFaq = [
  {
    question: "Who can start a chapter?",
    answer:
      "Any student who wants to bring hands-on STEM to kids in their community. Most of our chapters are run by high school students, and we have chapters across the United States and in Canada, India, Bangladesh, Sweden, and the Philippines.",
  },
  {
    question: "Do I need a team to apply?",
    answer:
      "No. You can apply on your own. Many chapters start with one or two founders and grow into a small team of officers, such as outreach, marketing, and finance, as they plan more deliveries.",
  },
  {
    question: "How much does it cost to start?",
    answer:
      "Applying is free. Each STEMKit costs about $5 in materials, and chapters raise money through donations and student-run fundraisers like volleyball and pickleball tournaments.",
  },
  {
    question: "How much time does it take?",
    answer:
      "It's flexible. Your chapter sets its own schedule around each kit drive: a few sessions to assemble kits, then a delivery to a local hospital or school.",
  },
  {
    question: "What happens after I apply?",
    answer:
      "Our team reviews your application and reaches out by email with next steps, resources, and how to get your chapter started.",
  },
  {
    question: "What support will my chapter get?",
    answer:
      "You'll get our kit designs, instruction manuals and science flyers, a step-by-step guide to assembling kits and delivering them to hospitals, and help from the STEMSeeds team. Your chapter is also featured on our Team page and Instagram.",
  },
] as const;
