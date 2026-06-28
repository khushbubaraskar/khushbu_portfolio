export const navLinks = [
  { label: "Journey", target: "#journey" },
  { label: "Skills", target: "#skills" },
  { label: "Work", target: "#work" },
  { label: "Experience", target: "#experience" },
  // { label: "GitHub", target: "#github" },
  { label: "Contact", target: "#contact" },
];

export const accentMap = {
  cyan: {
    text: "text-aurora-1",
    glow: "shadow-[0_0_60px_-12px_oklch(0.72_0.17_200/0.7)]",
    from: "var(--aurora-1)",
    to: "var(--aurora-2)",
  },
  violet: {
    text: "text-aurora-2",
    glow: "shadow-[0_0_60px_-12px_oklch(0.62_0.21_295/0.7)]",
    from: "var(--aurora-2)",
    to: "var(--aurora-3)",
  },
  magenta: {
    text: "text-aurora-3",
    glow: "shadow-[0_0_60px_-12px_oklch(0.68_0.19_340/0.7)]",
    from: "var(--aurora-3)",
    to: "var(--aurora-1)",
  },
  emerald: {
    text: "text-aurora-1",
    glow: "shadow-[0_0_60px_-12px_oklch(0.82_0.14_160/0.7)]",
    from: "oklch(0.82 0.14 160)",
    to: "var(--aurora-1)",
  },
} as const;

export type AccentKey = keyof typeof accentMap;
