export const profile = {
  name: "Khushbu Baraskar",
  role: "Full Stack Developer",
  headline: "Crafting Modern Digital Experiences",
  subheadline:
    "Full Stack Developer specializing in React, Node.js, Flutter Development.",
  email: "khushbubaraskar2608@gmail.com",
  github: "https://github.com/khushbubaraskar",
  linkedin: "https://linkedin.com/in/khushbu-baraskar",
  location: "Kolhapur, Maharashtra, India",
} as const;

export const socials = [
  { label: "GitHub", href: profile.github, icon: "github" as const },
  { label: "LinkedIn", href: profile.linkedin, icon: "linkedin" as const },
];
