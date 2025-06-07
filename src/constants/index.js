const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 20, suffix: "+", label: "Completed Projects" },
  { value: 400, suffix: "+", label: "Questions across all platforms" },
  { value: 1600, suffix: "+", label: "Rating on CodeChef" },
  { value: 1200, suffix: "+", label: "Rating on CodeForces" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
   title: "Full-Stack Expertise",
    desc: "Building scalable, responsive apps using Modern Technologies to solve real-world problems.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Problem Solver",
    desc: "Crafting impactful solutions in healthtech, edtech, and AI, with 400+ problems solved across platforms.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "AI Integration",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review:
      "Aayush delivered an exceptional cab booking platform for us, improving both speed and user experience. His responsiveness and attention to our needs were top-notch.",
    imgPath: "/images/exp4.png",
    logoPath: "/images/logo4.png",
    title: "Freelance Developer – Naksh Cab Service",
    date: "May 2024 - June 2024",
    responsibilities: [
      "Built a React-based cab booking platform, improving booking efficiency by 40%.",
      "Optimized UI/UX to reduce bounce rate by 25%, enhancing customer engagement.",
      "Deployed and fine-tuned performance for 2x faster loading times.",
      "Maintained continuous client communication, achieving 95% satisfaction.",
    ],
  },
  {
    review:
      "HealthBuddy is transforming how patients access care. Aayush led the tech behind it, delivering complex features with real-time precision and clean UI.",
    imgPath: "/images/logo5.png",
    logoPath: "/images/logo5.png",
    title: "Lead Developer – HealthBuddy",
    date: "October 2024 – Present",
    responsibilities: [
      "Developed a full-stack health app using React, Node.js, MongoDB, and Firebase.",
      "Integrated telemedicine with WebRTC and real-time hospital queue tracking.",
      "Reduced patient wait times by 40% via live updates and optimization logic.",
      "Added Google Maps integration for dynamic hospital suggestions.",
    ],
  },
{
  review:
    "Cirqle is a standout chat platform with sleek UI and powerful real-time messaging. Aayush built it with precision and clean code — it's fast, modern, and user-friendly.",
  imgPath: "/images/exp6.png",
  logoPath: "/images/logo6.png",
  title: "Full Stack Developer – Cirqle",
  date: "January 2025 – Present ",
  responsibilities: [
    "Developed a real-time chat application using React, Node.js and Socket.io.",
    "Implemented direct messaging, group chats, typing indicators, and message read receipts.",
    "Used Socket.io SDK for scalable, secure, and low-latency communication.",
    "Designed a responsive, modern UI optimized for both mobile and desktop users.",
  ],
}

];

const expLogos = [
  {
    name: "logo4",
    imgPath: "/images/logo4.png",
  },
  {
    name: "logo5",
    imgPath: "/images/logo5.png",
  },
  {
    name: "logo6",
    imgPath: "/images/logo6.png",
  },
];


  const testimonials = [
  {
    name: "Rohit Sharma",
    mentions: "@rohit.codes",
    review:
      "Aayush is someone I’ve seen consistently build good projects. Cirqle was impressive — smooth UI and solid real-time chat using Stream.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Neha Verma",
    mentions: "@neha.dev",
    review:
      "He’s dependable in group projects. Communicates well, divides tasks clearly, and gets things done on time. Very easy to work with.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Varun Desai",
    mentions: "@varun.js",
    review:
      "Aayush has a good grip on DSA. We’ve solved problems together for contests — he thinks clearly and doesn’t panic under pressure.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Priya Singh",
    mentions: "@priyacodes",
    review:
      "HealthBuddy was a cool project — especially the hospital queue part. He explained his logic well and the implementation was clean.",
    imgPath: "/images/client4.png",
  },
  {
    name: "Rajat Mehra",
    mentions: "@rajatcp",
    review:
      "He’s consistent with both projects and practice. Whether it’s Leetcode problems or full-stack apps, Aayush handles things calmly.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Sneha Kapoor",
    mentions: "@sneha.codes",
    review:
      "Very helpful guy. He’s shared a bunch of resources with me — whether it’s Git stuff or React tricks, Aayush is always open to helping.",
    imgPath: "/images/client6.png",
  },
];



const socialImgs = [
  {
    name: "website",
    imgPath: "/images/website.png",
    link: "https://aayushsinghal-portfolio.vercel.app/", 
  },
  {
    name: "github",
    imgPath: "/images/github.png",
    link: "https://github.com/Aayushsinghal294",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    link: "https://www.linkedin.com/in/aayush-singhal-772295271/",
  },
  {
    name: "resume",
    imgPath: "/images/resume.png",
    link: "https://drive.google.com/file/d/1uNcKFh-mC3yBVbH8CNbJW8__sHpB1qwI/view?usp=sharing", 
  },
];

 

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};