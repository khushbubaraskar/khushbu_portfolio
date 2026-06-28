export interface Project {
  id: string;
  title: string;
  tagline: string;
  problem: string;
  solution: string;
  features: string[];
  tech: string[];
  github: string;
  demo: string;
  accent: "cyan" | "violet" | "magenta" | "emerald";
}

export const projects: Project[] = [
{
  id: "hotel-website",
  title: "Hotel Adi Pure Veg",
  tagline:
    "Designing a premium digital identity for a well-established family restaurant.",

  problem:
    "Hotel Adi Pure Veg, a popular family restaurant in Jaysingpur since 2013, had a strong offline reputation but lacked a dedicated premium web presence. Customers depended mainly on Google Maps, Instagram and third-party platforms to discover the restaurant, view menus and access business information.",

  solution:
    "Researched the business, analyzed customer touchpoints and designed a premium, mobile-first restaurant website focused on brand storytelling, menu accessibility, event promotion and customer engagement. Built a fully responsive experience with modern animations, interactive sections and production deployment.",

  features: [
    "Premium hospitality-focused UI/UX design",
    "Fully responsive mobile-first experience",
    "Interactive food & beverages menu system",
    "Event hall and lawn showcase sections",
    "Instagram integration",
    "Google Maps and contact integration",
    "Smooth animations and micro-interactions",
    "SEO-friendly semantic structure",
    "Production deployment on Vercel"
  ],

  tech: [
    "HTML5",
    "CSS3",
    "JavaScript",
    "Tailwind CSS",
    "GitHub",
    "Vercel"
  ],

  github: "https://github.com/khushbubaraskar/hotel_aadi",

  demo: "https://hotel-aadi.vercel.app",

  accent: "cyan",
},
{
  id: "slot-track",
  title: "SlotTrack — IoT Smart Parking System",

  tagline:
    "An intelligent parking management platform combining IoT hardware, mobile applications and real-time monitoring.",

  problem:
    "Traditional parking systems provide limited visibility into parking availability, resulting in congestion, inefficient space utilization and poor user experience.",

  solution:
    "Designed and developed an end-to-end IoT-based parking management system integrating hardware sensors, backend APIs, mobile applications and web dashboards to provide real-time parking monitoring and administration.",

  features: [
    "Real-time parking slot detection using IR sensors",
    "ESP32 and Arduino hardware integration",
    "Mobile application for live parking monitoring",
    "Interactive web dashboard",
    "User authentication and profile management",
    "Admin notification management system",
    "Parking history and reporting",
    "Continuous live tracking functionality"
  ],

  tech: [
    "Flutter",
    "React",
    "Node.js",
    "MySQL",
    "Arduino",
    "ESP32"
  ],

  github: "https://github.com/khushbubaraskar/Slot-Track",
  demo: "https://slottrack.netlify.app/",
  accent: "violet",
},
 {
  id: "lifetrack",

  title: "LifeTrack — Personal Productivity & Wellness App",

  tagline:
    "A unified personal productivity platform for habits, focus, finance and well-being management.",

  problem:
    "Managing habits, productivity, expenses and personal wellness often requires using multiple disconnected applications, creating friction and reducing long-term consistency.",

  solution:
    "Developed a comprehensive mobile application that combines productivity tracking, personal finance management and wellness monitoring into a single intuitive platform.",

  features: [
    "Habit tracker with streak monitoring",
    "Pomodoro timer for productivity",
    "Expense tracking and analysis",
    "Mood journal and emotional tracking",
    "Unified dashboard experience",
    "Local offline data storage",
    "Responsive mobile-first interface",
    "Efficient state management"
  ],

  tech: [
    "Flutter",
    "Hive Database",
    "Android Studio",
    "Dart"
  ],

  github:
    "https://github.com/khushbubaraskar/Khushbu-s_Lifetrack",

  demo: "#",

  accent: "magenta",
},
{
  id: "portfolio",

  title: "Personal Developer Portfolio",

  tagline:
    "An interactive digital experience showcasing projects, skills and professional identity.",

  problem:
    "Traditional resumes provide limited opportunities to demonstrate technical expertise, design capability and real-world project experience.",

  solution:
    "Designed and developed a premium portfolio platform featuring advanced animations, interactive case studies, smooth scrolling experiences and modern UI/UX principles.",

  features: [
    "Single-page application architecture",
    "Interactive project case studies",
    "Advanced animations with Framer Motion",
    "GSAP-powered transitions",
    "Responsive mobile-first design",
    "Smooth scrolling experience",
    "Dark premium visual identity",
    "SEO and performance optimization"
  ],

  tech: [
    "React 19",
    "TypeScript",
    "Tailwind CSS",
    "Framer Motion",
    "GSAP",
    "Vite",
    "TanStack Router",
    "Bun"
  ],

  github:
    "https://github.com/khushbubaraskar/portfolio",

  demo: "#",

  accent: "emerald",
}
];
