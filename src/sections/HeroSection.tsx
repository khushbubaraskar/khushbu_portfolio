"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import { AuroraBackground } from "@/components/AuroraBackground";
import { ParticleField } from "@/components/ParticleField";
import { MagneticButton } from "@/components/MagneticButton";
import { SocialIcons } from "@/components/SocialIcons";
import { TextReveal, Reveal } from "@/components/Reveal";
import { scrollToSection } from "@/hooks/useLenis";
import { profile } from "@/data/profile";

export function HeroSection() {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <AuroraBackground />
      <ParticleField />

      {/* radial vignette */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 80% at 50% 0%, transparent 40%, var(--background) 95%)",
        }}
      />

      <motion.div
        style={{ y, opacity, scale }}
        className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 text-center"
      >
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-medium tracking-wide text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            {profile.role} · {profile.location}
          </span>
        </Reveal>

        <h1 className="mt-8 text-balance text-5xl font-semibold leading-[1.02] sm:text-6xl md:text-7xl lg:text-[5.5rem]">
          <TextReveal text="Crafting Modern" delay={0.1} className="block" />
          <TextReveal
            text="Digital Experiences"
            delay={0.35}
            className="mt-1 block text-gradient"
          />
        </h1>

        <Reveal delay={0.7}>
          <p className="mt-7 max-w-xl text-balance text-base leading-relaxed text-muted-foreground sm:text-lg">
            {profile.subheadline}
          </p>
        </Reveal>

        <Reveal delay={0.85}>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
            <MagneticButton onClick={() => scrollToSection("#work")}>
              Explore My Work
            </MagneticButton>
            <MagneticButton
              variant="ghost"
              onClick={() => scrollToSection("#contact")}
            >
              Get In Touch
            </MagneticButton>
          </div>
        </Reveal>

        <Reveal delay={1}>
          <SocialIcons className="mt-12 justify-center" />
        </Reveal>
      </motion.div>

      <motion.button
        onClick={() => scrollToSection("#journey")}
        aria-label="Scroll to journey"
        style={{ opacity }}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-xs uppercase tracking-[0.3em] text-muted-foreground"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        Scroll
        <ArrowDown className="h-4 w-4" />
      </motion.button>
    </section>
  );
}
