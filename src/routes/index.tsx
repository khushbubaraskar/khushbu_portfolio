import { createFileRoute } from "@tanstack/react-router";
import { PortfolioLayout } from "@/layouts/PortfolioLayout";
import { HeroSection } from "@/sections/HeroSection";
import { JourneySection } from "@/sections/JourneySection";
import { SkillsSection } from "@/sections/SkillsSection";
import { ProjectsSection } from "@/sections/ProjectsSection";
import { ExperienceSection } from "@/sections/ExperienceSection";
// import { GithubSection } from "@/sections/GithubSection";
import { ContactSection } from "@/sections/ContactSection";

const title = "Khushbu Baraskar — Full Stack Developer";
const description =
  "Full Stack Developer specializing in React, Node.js, Flutter and MongoDB. Crafting modern, performant digital experiences for web and mobile.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <PortfolioLayout>
      <HeroSection />
      <JourneySection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      {/* <GithubSection /> */}
      <ContactSection />
    </PortfolioLayout>
  );
}
