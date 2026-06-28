"use client";

import { SocialIcons } from "@/components/SocialIcons";
import { scrollToSection } from "@/hooks/useLenis";
import { profile } from "@/data/profile";
import { navLinks } from "@/constants";

export function Footer() {
  return (
    <footer className="relative border-t border-border py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 text-center">
        <button
          onClick={() => scrollToSection("#top")}
          className="text-2xl font-semibold text-gradient"
        >
          {profile.name}
        </button>

        <nav className="flex flex-wrap items-center justify-center gap-1">
          {navLinks.map((l) => (
            <button
              key={l.target}
              onClick={() => scrollToSection(l.target)}
              className="rounded-full px-4 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </button>
          ))}
        </nav>

        <SocialIcons showEmail email={profile.email} />

        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} {profile.name}. Designed & built with
          intention.
        </p>
      </div>
    </footer>
  );
}
