export interface Skill {
  id: string;
  name: string;
  category: SkillCategory;
  /** ids of related skills, used to draw relationships on hover */
  related: string[];
}

export type SkillCategory =
  | "Frontend"
  | "Backend"
  | "Database"
  | "Mobile"
  | "Tools";

export const skillCategories: {
  name: SkillCategory;
  blurb: string;
}[] = [
  {
    name: "Frontend",
    blurb: "Building responsive user experiences",
  },
  {
    name: "Backend",
    blurb: "APIs and application logic",
  },
  {
    name: "Database",
    blurb: "Structured and NoSQL storage",
  },
  {
    name: "Mobile",
    blurb: "Cross-platform application development",
  },
  {
    name: "Tools",
    blurb: "Development workflow & deployment",
  },
];

export const skills: Skill[] = [
  // =========================
  // FRONTEND
  // =========================
  {
    id: "react",
    name: "React",
    category: "Frontend",
    related: ["javascript", "tailwind", "node"],
  },
  {
    id: "javascript",
    name: "JavaScript",
    category: "Frontend",
    related: ["react", "node", "express"],
  },
  {
    id: "html",
    name: "HTML5",
    category: "Frontend",
    related: ["css", "javascript"],
  },
  {
    id: "css",
    name: "CSS3",
    category: "Frontend",
    related: ["html", "tailwind"],
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    category: "Frontend",
    related: ["react", "css"],
  },

  // =========================
  // BACKEND
  // =========================
  {
    id: "node",
    name: "Node.js",
    category: "Backend",
    related: ["express", "mongodb", "mysql", "postman"],
  },
  {
    id: "express",
    name: "Express.js",
    category: "Backend",
    related: ["node", "mongodb", "postman"],
  },
  {
    id: "restapi",
    name: "REST API",
    category: "Backend",
    related: ["node", "express", "postman"],
  },

  // =========================
  // DATABASE
  // =========================
  {
    id: "mongodb",
    name: "MongoDB",
    category: "Database",
    related: ["node", "express"],
  },
  {
    id: "mysql",
    name: "MySQL",
    category: "Database",
    related: ["node"],
  },
  {
    id: "hive",
    name: "Hive DB",
    category: "Database",
    related: ["flutter"],
  },

  // =========================
  // MOBILE
  // =========================
  {
    id: "flutter",
    name: "Flutter",
    category: "Mobile",
    related: ["hive", "androidstudio"],
  },
  {
    id: "androidstudio",
    name: "Android Studio",
    category: "Mobile",
    related: ["flutter"],
  },

  // =========================
  // TOOLS
  // =========================
  {
    id: "git",
    name: "Git",
    category: "Tools",
    related: ["github", "vscode"],
  },
  {
    id: "github",
    name: "GitHub",
    category: "Tools",
    related: ["git", "vercel", "netlify"],
  },
  {
    id: "postman",
    name: "Postman",
    category: "Tools",
    related: ["node", "express", "restapi"],
  },
  {
    id: "vscode",
    name: "VS Code",
    category: "Tools",
    related: ["git", "github"],
  },
  {
    id: "vercel",
    name: "Vercel",
    category: "Tools",
    related: ["github"],
  },
  {
    id: "netlify",
    name: "Netlify",
    category: "Tools",
    related: ["github"],
  },
];