export type TeamMember = {
  name: string;
  role?: string;
  school?: string;
  state?: string;
  country: string;
  bio: string;
  image: string;
  imageAlt: string;
};

export const aboutIntro = {
  eyebrow: "Who Are We",
  title: "Student-founded, mission-driven",
  body: "STEMSeeds is a student-founded philanthropic organization based in Frisco, Texas. Our mission is to make STEM education accessible to every child, regardless of socioeconomic background or time spent in the hospital. For many of the children we serve, these moments of learning also offer a chance to step away from hospital routines and simply enjoy being curious, playful learners again. STEMSeeds is led by two Co-Founders, Ritvik Avula and Rayhan Raja, who work alongside a team of more than 36 students, each serving different roles but united by a shared purpose: supporting this mission and the children at its heart.",
} as const;

export const founders: TeamMember[] = [
  {
    name: "Ritvik Avula",
    role: "Co-Founder & CEO",
    school: "Reedy High School",
    state: "Texas",
    country: "United States",
    bio: "Ritvik Avula is the Co-Founder and CEO of STEMSeeds. He is a Senior at Reedy High School and is passionate about spreading STEM education to the underserved. He works in a cancer research lab and does art in his free time!",
    image: "/images/team/ritvikavula.avif",
    imageAlt: "Portrait of Ritvik Avula",
  },
  {
    name: "Rayhan Raja",
    role: "Co-Founder & COO",
    state: "Texas",
    country: "United States",
    bio: "Rayhan Raja is the Co-Founder and COO of STEMSeeds. He is passionate about pursuing a career in medicine and is thrilled to extend STEMSeeds' impact to the underserved. He is a Student Researcher at UTSW and plays in his local high school's varsity orchestra.",
    image: "/images/team/rayhanraja.avif",
    imageAlt: "Portrait of Rayhan Raja",
  },
];

export const coreTeam: TeamMember[] = [
  {
    name: "Eshwar Mahadevan",
    role: "Outreach Leader",
    school: "Reedy High School",
    state: "Texas",
    country: "United States",
    bio: "Eshwar Mahadevan is the Outreach Leader, focusing on expanding STEMSeeds' influence across the United States. He is a Senior at Reedy High School. Additionally, in his free time he loves to play soccer and basketball!",
    image: "/images/team/eshwarmahadevan.avif",
    imageAlt: "Portrait of Eshwar Mahadevan",
  },
  {
    name: "Rohan Balasupramanian",
    role: "Instagram Manager",
    state: "Texas",
    country: "United States",
    bio: "Rohan Balasupramanian is the Instagram Manager, using his passion for graphic design towards increasing STEMSeeds' visibility!",
    image: "/images/team/rohanbalasupramanian.avif",
    imageAlt: "Portrait of Rohan Balasupramanian",
  },
  {
    name: "Dhilan Avula",
    role: "Curriculum Director",
    school: "Reedy High School",
    state: "Texas",
    country: "United States",
    bio: "Dhilan Avula is the Curriculum Director of STEMSeeds. He focused on creating the design of the stem kits. He is a Sophomore at Reedy High School and enjoys tennis and STEM.",
    image: "/images/team/dhilanavula.avif",
    imageAlt: "Portrait of Dhilan Avula",
  },
];

const texas: TeamMember[] = [
  {
    name: "Aneesh Kotvali",
    role: "Texas President & Chapter President",
    school: "Frisco High School",
    state: "Texas",
    country: "United States",
    bio: "Aneesh Kotvali is the Texas President, and President of the STEMSeeds Frisco High School chapter. Outside the classroom, Aneesh is a top 3 nationally ranked fencer, and likes reading the Bhagavad Gita in his free time.",
    image: "/images/team/aneeshkotvali.avif",
    imageAlt: "Portrait of Aneesh Kotvali",
  },
  {
    name: "Akshaya Karuturi",
    role: "Chapter President",
    school: "Independence High School",
    state: "Texas",
    country: "United States",
    bio: "Akshaya Karuturi is the President of the STEMSeeds Independence High School Chapter. She is a senior with a strong passion for healthcare. She works as a CNA and spends time at a local hospital shadowing doctors and helping nurses.",
    image: "/images/team/akshayakaruturi.avif",
    imageAlt: "Portrait of Akshaya Karuturi",
  },
  {
    name: "Shahzaib Ahmed",
    role: "Chapter President",
    school: "Mansfield ECHS",
    state: "Texas",
    country: "United States",
    bio: "Shahzaib Ahmed is the President of the Mansfield ECHS Chapter of STEMSeeds. Passionate about healthcare, he is involved with the American Heart Association, American Red Cross, and Islamic Relief USA.",
    image: "/images/team/shahzaibahmed.avif",
    imageAlt: "Portrait of Shahzaib Ahmed",
  },
  {
    name: "Praseed Banerjee",
    role: "Chapter President",
    school: "Wylie High School",
    state: "Texas",
    country: "United States",
    bio: "Praseed Banerjee is the President of the Wylie High School chapter of STEMSeeds, where he leads outreach efforts to deliver hands-on STEMKits to underserved students in his community. Outside of this, he enjoys spending time with friends and family.",
    image: "/images/team/praseedbanerjee.avif",
    imageAlt: "Portrait of Praseed Banerjee",
  },
  {
    name: "Ella Hsu",
    role: "Chapter Co-President",
    school: "Stephen F. Austin High School",
    state: "Texas",
    country: "United States",
    bio: "Ella Hsu is a sophomore at Stephen F. Austin High School and co-president of the STEMseeds chapter. She's passionate about healthcare and plans to pursue dentistry. Outside of STEMseeds, she enjoys dance, traveling, and baking.",
    image: "/images/team/ellahsu.avif",
    imageAlt: "Portrait of Ella Hsu",
  },
  {
    name: "Aiza Jalal",
    role: "Chapter Co-President",
    school: "Stephen F. Austin High School",
    state: "Texas",
    country: "United States",
    bio: "Aiza Jalal is a sophomore at Stephen F. Austin High School and co-president of the STEMseeds chapter. She's passionate about healthcare and hopes to pursue a career that combines creativity, research, and helping others. In her free time, she enjoys nature walks and giving back to her community.",
    image: "/images/team/aizajalal.avif",
    imageAlt: "Portrait of Aiza Jalal",
  },
  {
    name: "Mekyle Alam",
    role: "Chapter President",
    school: "Centennial High School",
    state: "Texas",
    country: "United States",
    bio: "Mekyle Alam is the president of the Centennial High School chapter. He's passionate about STEM and has leadership experience in rocketry competitions and hospital volunteering. He's also interested in business and enjoys exploring innovation at the intersection of STEM and entrepreneurship.",
    image: "/images/team/mekylealam.avif",
    imageAlt: "Portrait of Mekyle Alam",
  },
  {
    name: "Rohan Anand Raja Rajeshwaran",
    role: "Chapter President",
    school: "Coppell High School",
    state: "Texas",
    country: "United States",
    bio: "Rohan Anand Raja Rajeshwaran is the president of the Coppell High School chapter. He's passionate about engineering and enjoys programming in Java and Python, as well as participating in VEX Robotics. Outside of school, he likes playing soccer, ping pong, and chess.",
    image: "/images/team/rohananandrajarajeshwaran.avif",
    imageAlt: "Portrait of Rohan Anand Raja Rajeshwaran",
  },
  {
    name: "Shreyas Choudhary",
    role: "Chapter President",
    school: "Argyle High School",
    state: "Texas",
    country: "United States",
    bio: "Shreyas Choudhary is a junior at Argyle High School with a strong passion for STEM. He's involved in DECA, MUN, NHS, and Robotics, and plans to major in Data Science or Business. Outside of school, he enjoys playing the piano and spending time with friends.",
    image: "/images/team/shreyaschoudhary.avif",
    imageAlt: "Portrait of Shreyas Choudhary",
  },
  {
    name: "Hasini Yalavarthi",
    role: "Chapter President",
    school: "Wakeland High School",
    state: "Texas",
    country: "United States",
    bio: "Hasini Yalavarthi is a sophomore at Wakeland High School with a strong passion for STEM. She's a DECA officer, participates in the robotics club, and tutors math at school. She plans to major in physics and minor in business. Outside of school, she enjoys playing volleyball and painting.",
    image: "/images/team/hasiniyalavarthi.avif",
    imageAlt: "Portrait of Hasini Yalavarthi",
  },
  {
    name: "Kaulini Chakraborty",
    role: "Chapter President",
    school: "Emerson High School",
    state: "Texas",
    country: "United States",
    bio: "Kaulini Chakraborty is the president of the Emerson High School chapter. Bio Coming Soon.",
    image: "/images/team/kaulinichakraborty.avif",
    imageAlt: "Portrait of Kaulini Chakraborty",
  },
];

const arizona: TeamMember[] = [
  {
    name: "Chetana Beegala",
    role: "Chapter President",
    school: "University High School, Tolleson",
    state: "Arizona",
    country: "United States",
    bio: "Chetana Beegala is a sophomore at University High School in Tolleson with a strong passion for neuroscience and public health. She's the founder and president of RedCrossTUHS and CEO of NeuroCardi Aware. Outside of school, she loves hiking and spending time in nature with her family.",
    image: "/images/team/chetanabeegala.avif",
    imageAlt: "Portrait of Chetana Beegala",
  },
];

const california: TeamMember[] = [
  {
    name: "Hilda Dehdilani",
    role: "Chapter President",
    school: "Oak Park High School",
    state: "California",
    country: "United States",
    bio: "Hilda Dehdilani is the president of the Oak Park High School STEMseeds chapter, where she helps expand the organization's mission to more students. She's passionate about medicine and research and is involved in several health-focused clubs as well as her school's speech and debate team. Outside of academics, she holds a first-degree black belt in hapkido and practices MMA.",
    image: "/images/team/hildadehdilani.avif",
    imageAlt: "Portrait of Hilda Dehdilani",
  },
];

const florida: TeamMember[] = [
  {
    name: "Ehab El-Ahmed",
    role: "Chapter President",
    school: "West Shore High School",
    state: "Florida",
    country: "United States",
    bio: "Ehab El-Ahmed is the President of the West Shore High School Chapter. Bio Coming Soon...",
    image: "/images/team/ehabel-ahmed.avif",
    imageAlt: "Portrait of Ehab El-Ahmed",
  },
];

const newYork: TeamMember[] = [
  {
    name: "Chloe Li",
    role: "NYC Chapter President",
    school: "Bronx High School of Science",
    state: "New York",
    country: "United States",
    bio: "Chloe Li is the president of the NYC STEMseeds chapter and a senior at the Bronx High School of Science. She's passionate about making STEM exciting and hands-on for students, having conducted research at City College of New York and tutored through Scientific Minds of America. She hopes to partner with libraries, schools, and hospitals to bring interactive STEM experiences to her community. Outside of academics, she enjoys art, reading, and competing in track and field and badminton, and plans to pursue a pre-med path in college.",
    image: "/images/team/chloeli.avif",
    imageAlt: "Portrait of Chloe Li",
  },
];

const michigan: TeamMember[] = [
  {
    name: "Rishan Patel",
    role: "Chapter President",
    school: "Northville High School",
    state: "Michigan",
    country: "United States",
    bio: "Rishan Patel is the president of the Northville High School STEMseeds chapter and a rising junior at Northville High School. He's passionate about medicine and participates in HOSA and DECA. Outside of school, he volunteers at the Detroit Veterans Affairs and shadows at local clinics. He plans to pursue a career in medicine, specifically in anesthesiology, with the goal of helping others.",
    image: "/images/team/rishanpatel.avif",
    imageAlt: "Portrait of Rishan Patel",
  },
  {
    name: "Avishkar Nisham",
    role: "Chapter President",
    school: "Northville High School",
    state: "Michigan",
    country: "United States",
    bio: "Avishkar Nisham is a rising junior at Northville High School and a member of HOSA with a strong interest in medicine. He has shadowed nephrologists, volunteered at the local Veterans Hospital, coached Special Olympics teams, and taught Science Olympiad to elementary students. Outside of school, he's an avid sports fan, a national award-winning cricket player, and a supporter of the Browns and Cavaliers.",
    image: "/images/team/avishkarnisham.avif",
    imageAlt: "Portrait of Avishkar Nisham",
  },
];

const northCarolina: TeamMember[] = [
  {
    name: "Val Okafor",
    role: "Greensboro Chapter Co-President",
    school: "The STEM Early College at NC A&T SU",
    state: "North Carolina",
    country: "United States",
    bio: "Val Okafor is a sophomore at the STEM Early College and the co-president of the Greensboro Chapter. He serves as a DECA officer for his school and participates in the service learning club. He's passionate about engineering and hopes to pursue a career that combines innovation and helping others. Outside of school, he volunteers at his local library and enjoys playing basketball.",
    image: "/images/team/valokafor.avif",
    imageAlt: "Portrait of Val Okafor",
  },
  {
    name: "Levi Snyder",
    role: "Greensboro Chapter Co-President",
    school: "The STEM Early College at NC A&T SU",
    state: "North Carolina",
    country: "United States",
    bio: "Levi Snyder is a student at the STEM Early College at NC A&T SU and co-president of Greensboro Chapter who is extremely passionate about STEM-related fields, managing the mechanical engineering of FTC Team 731 WannaBee Strange while also pursuing his dreams in engineering through an internship at Brilliant Aerospace. He hopes to connect with others in the community through STEM and innovation.",
    image: "/images/team/levisnyder.avif",
    imageAlt: "Portrait of Levi Snyder",
  },
];

const pennsylvania: TeamMember[] = [
  {
    name: "Aditi Ramamurthi",
    role: "Chapter President",
    school: "Central Bucks High School East",
    state: "Pennsylvania",
    country: "United States",
    bio: "Aditi Ramamurthi is the president of the Central Bucks High School East STEMseeds chapter, where she works to expand STEM opportunities for students. She's passionate about medicine, research, and law, and builds her leadership skills through mock trial and speech and debate. She's also a varsity cross-country and track runner dedicated to growing the STEMseeds mission.",
    image: "/images/team/aditiramamurthi.avif",
    imageAlt: "Portrait of Aditi Ramamurthi",
  },
];

const maryland: TeamMember[] = [
  {
    name: "Akshaya Kotha",
    role: "Chapter President",
    school: "Downingtown STEM Academy",
    state: "Maryland",
    country: "United States",
    bio: "Akshaya Kotha is a sophomore at Downingtown STEM Academy with a strong passion for health policy and pharmacy. She's involved in mock trial, FBLA, and serves as secretary for Speak Your Spirit. She's also starting a health-focused club to promote opportunities in the medical field. Outside of school, she participates in Bollywood dance, volunteers at a local food pantry, and tutors students locally and abroad. In her free time, she enjoys hiking, traveling, cooking, and doing her nails, with hopes to advance women's health and healthcare equity in the future.",
    image: "/images/team/akshayakotha.avif",
    imageAlt: "Portrait of Akshaya Kotha",
  },
];

const alabama: TeamMember[] = [
  {
    name: "Oluwatofunmi Adojutelegan",
    role: "Chapter President",
    state: "Alabama",
    country: "United States",
    bio: "Bio Coming Soon...",
    image: "/images/team/oluwatofunmiadojutelegan.avif",
    imageAlt: "Portrait of Oluwatofunmi Adojutelegan",
  },
];

export const usChapters: { state: string; members: TeamMember[] }[] = [
  { state: "Texas", members: texas },
  { state: "Arizona", members: arizona },
  { state: "California", members: california },
  { state: "Florida", members: florida },
  { state: "New York", members: newYork },
  { state: "Michigan", members: michigan },
  { state: "North Carolina", members: northCarolina },
  { state: "Pennsylvania", members: pennsylvania },
  { state: "Maryland", members: maryland },
  { state: "Alabama", members: alabama },
];

export const internationalChapters: {
  country: string;
  members: TeamMember[];
}[] = [
  {
    country: "Bangladesh",
    members: [
      {
        name: "Miftahul Jannah Nowsheen",
        country: "Bangladesh",
        bio: "Miftahul Jannah Nowsheen is a Class 10 student from Bangladesh and a bronze winner of the 2024 Queen's Commonwealth Essay Competition. She loves drawing and writing and volunteers as a content writer while serving as her class captain. She's passionate about medicine and aspires to become a neurosurgeon.",
        image: "/images/team/miftahul-jannah-nowsheen.avif",
        imageAlt: "Portrait of Miftahul Jannah Nowsheen",
      },
    ],
  },
  {
    country: "India",
    members: [
      {
        name: "Anandi Gaurav Sharma",
        country: "India",
        bio: "Bio Coming Soon...",
        image: "/images/team/anandi-gaurav-sharma.avif",
        imageAlt: "Portrait of Anandi Gaurav Sharma",
      },
    ],
  },
  {
    country: "Philippines",
    members: [
      {
        name: "Kenzo Taka",
        country: "Philippines",
        bio: "Bio Coming Soon...",
        image: "/images/team/kenzo-taka.avif",
        imageAlt: "Portrait of Kenzo Taka",
      },
    ],
  },
  {
    country: "Sweden",
    members: [
      {
        name: "Medha Sridar",
        role: "Chapter President",
        school: "International School of Helsingborg",
        country: "Sweden",
        bio: "Medha Sridar is the President of the International School of Helsingborg STEMSeeds Chapter. She is passionate about serving underserved communities through medicine and hopes to pursue a career that combines patient care with meaningful community impact.",
        image: "/images/team/medha-sridar.avif",
        imageAlt: "Portrait of Medha Sridar",
      },
    ],
  },
  {
    country: "Canada",
    members: [
      {
        name: "Maisey Zhao",
        role: "UTS Chapter Co-President",
        school: "University of Toronto Schools",
        country: "Canada",
        bio: "Maisey Zhao is a rising junior at the University of Toronto Schools and co-president of the UTS STEMseeds chapter. A senior piano student at the Taylor Academy, she's passionate about biomedical research and has studied the effects of climate change on tropical diseases. She's earned awards in writing, science, and music and serves as Director of Medical Programs at SIMtern and National Project Director at the Project Apollo Association.",
        image: "/images/team/maisey-zhao-and-isabel-tian.avif",
        imageAlt: "Maisey Zhao and Isabel Tian, co-presidents of the UTS chapter",
      },
      {
        name: "Isabel Tian",
        role: "UTS Chapter Co-President",
        school: "University of Toronto Schools",
        country: "Canada",
        bio: "Isabel Tian is a freshman at the University of Toronto Schools and co-president of the UTS STEMseeds chapter. Passionate about medical science, she's conducted research in comparative immunology studying bat and human immune systems. She also serves on student council as an event coordinator and enjoys baking, drawing, reading, dancing, and singing.",
        image: "/images/team/maisey-zhao-and-isabel-tian.avif",
        imageAlt: "Maisey Zhao and Isabel Tian, co-presidents of the UTS chapter",
      },
    ],
  },
];

export const usStatesList = usChapters.map((group) => group.state);
