export const skillsData = [
  // Frontend
  {
    id: 1,
    technology: "HTML",
    techIcon: "/assets/icons/html5.svg",
    category: "Frontend",
  },
  {
    id: 2,
    technology: "CSS",
    techIcon: "/assets/icons/css3.svg",
    category: "Frontend",
  },
  {
    id: 3,
    technology: "JavaScript",
    techIcon: "/assets/icons/javascript.svg",
    category: "Frontend",
  },
  {
    id: 4,
    technology: "React JS",
    techIcon: "/assets/icons/react.svg",
    category: "Frontend",
  },
  {
    id: 5,
    technology: "Bootstrap",
    techIcon: "/assets/icons/bootstrap.svg",
    category: "Frontend",
  },
  {
    id: 6,
    technology: "Next JS",
    techIcon: "/assets/icons/Next.js.svg",
    category: "Frontend",
  },
  {
    id: 7,
    technology: "Tailwind CSS",
    techIcon: "/assets/icons/tailwindcss.svg",
    category: "Frontend",
  },
  {
    id: 8,
    technology: "Material UI",
    techIcon: "/assets/icons/Material UI.svg",
    category: "Frontend",
  },
  {
    id: 9,
    technology: "Redux Toolkit",
    techIcon: "/assets/icons/Redux.svg",
    category: "Frontend",
  },
  {
    id: 10,
    technology: "SCSS",
    techIcon: "/assets/icons/Sass.svg",
    category: "Frontend",
  },

  // Backend
  {
    id: 11,
    technology: "Node JS",
    techIcon: "/assets/icons/node-js.svg",
    category: "Backend",
  },
  {
    id: 12,
    technology: "Express JS",
    techIcon: "/assets/icons/expressjs.svg",
    category: "Backend",
  },
  {
    id: 13,
    technology: "MongoDB",
    techIcon: "/assets/icons/mongodb.svg",
    category: "Backend",
  },
  {
    id: 14,
    technology: "Mongoose",
    techIcon: "/assets/icons/Mongoose.svg",
    category: "Backend",
  },

  // Tools
  {
    id: 15,
    technology: "VS Code",
    techIcon: "/assets/icons/vscode.svg",
    category: "Tools",
  },
  {
    id: 16,
    technology: "Git",
    techIcon: "/assets/icons/git.svg",
    category: "Tools",
  },
  {
    id: 17,
    technology: "GitHub",
    techIcon: "/assets/icons/github-mark.svg",
    category: "Tools",
  },
];

export const projects = [
  {
    title: "Real Estate & Development Website for Land & Build UK ",
    category: "Portfolio",
    image: "/assets/projects/landandbuild.jpg?height=300&width=400",
    description:
      "I designed and developed a modern, responsive portfolio website for Land & Build UK, a company specializing in land acquisition, property sales, and home development. The website showcases their services, featured projects, and company values with a clean and user-friendly interface. The goal was to build trust with potential clients and present their work in a professional and visually appealing way. The site is optimized for performance, accessibility, and seamless navigation across all devices.",
    short:
      "A modern, responsive portfolio website for Land & Build UK, showcasing their services and projects.",
    demoLink: "https://landandbuild.uk",
    githubLink: "#",
    skills: ["Next.js", "SCSS"],
  },
  {
    title: "Code Sync station - IT consulting company",
    category: "Web Application",
    image: "/assets/projects/codeSync.jpg?height=300&width=400",
    description:
      "CodeSync Station is an IT consultancy start-up that officially began operations in January 2024. The website serves as more than just a portfolio—it includes a robust management system accessible through a user-friendly dashboard for two types of users: Normal Users and Admins..",
    short:
      " A management system for an IT consultancy start-up with user-friendly dashboard.",
    demoLink: "https://landandbuild.uk",
    githubLink: "#",
    skills: ["Next.js", "SCSS"],
  },
  {
    title: "Audio Calling Implementation",
    category: "Web Application",
    image: "/assets/projects/calling.jpg?height=300&width=400",
    description:
      "I developed a custom audio calling system for the client's TeraByte Chat application based on their requirement. The system was implemented using PeerJS for peer-to-peer communication. To ensure reliable connectivity across various network conditions, I also set up a custom TURN server using Coturn. This end-to-end solution was fully tailored to the client's needs and successfully integrated into their application.",
    short:
      "A custom audio calling system for TeraByte Chat using PeerJS and a custom TURN server.",
    demoLink: "https://chat-app-five-roan.vercel.app/login_page",
    githubLink: "#",
    skills: ["Next.js", "Bootstrap", "PeerJS", "Coturn"],
  },
  {
    title: "Digital Dropout - Learning Management System",
    category: "LMS",
    image: "/assets/projects/dropout.png?height=300&width=400",
    description: `🔍 Overview: I collaborated with Rafayat Rakib, a renowned influencer and freelancer, to develop Digital Dropout, a cutting-edge Learning Management System (LMS). This platform is designed to revolutionize online education by providing a seamless experience for content creators and learners alike.
      🎯 Objective: The goal was to create a user-friendly LMS that allows content creators to easily upload and manage their courses, while providing learners with an intuitive interface for accessing educational materials.`,
    short:
      "A Learning Management System (LMS) for content creators and learners.",
    demoLink: "https://digitaldropouts.net/",
    githubLink: "#",
    skills: ["Next.js", "SCSS", "Redux Toolkit"],
  },
  {
    title: "Zaras Properties",
    category: "Portfolio",
    image: "/assets/projects/zaras-properties.png?height=300&width=400",
    description: `"Zaras Properties" is a property development company that embraces future home standards. There are smooth animations and also have type effects. and when you message them the message go to Gmail.`,
    demoLink: "https://zarasproperties.co.uk/",
    githubLink: "#",
  },
];

const personalInfo = {
  name: "Naim Ahmad",
  dateOfBirth: "2001-11-26",
  title: "Full Stack Web Developer",
  phone: "+880 1625-366735",
  careerStartDate: "2021-02-01",
  location: "Jessore, Bangladesh",
  about: "I'm a full-stack developer specialized in MERN stack and WebRTC.",
  email: "naimahmad201103@proton.me",
  github: "https://github.com/Naim-Ahmad",
  linkedin: "https://www.linkedin.com/in/naim-ahmad-developer/",
  resume:
    "https://drive.google.com/file/d/182GSKdky8-Ba7fHNHS44QPPr3OBKxKeL/view?pli=1",
  facebook: "https://www.facebook.com/naim.ahmad.noyon",
};

export default personalInfo;
