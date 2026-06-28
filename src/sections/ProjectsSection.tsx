"use client";

import { useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  ArrowUpRight,
  Github,
  X,
  Target,
  Lightbulb,
  Check,
} from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { AuroraBackground } from "@/components/AuroraBackground";
import { projects, type Project } from "@/data/projects";
import { accentMap } from "@/constants";
import { cn } from "@/lib/utils";

import hotel from "@/assets/project-hotel.jpg";
import slottrack from "@/assets/project-slottrack.jpeg";
import lifetrack from "@/assets/project-lifetrack.jpeg";
import portfolio from "@/assets/portfolio.jpg";

const images: Record<string, string> = {
  "hotel-website": hotel,
  "slot-track": slottrack,
  "lifetrack": lifetrack,
  "portfolio": portfolio,
};

function ProjectCard({
  project,
  index,
  onOpen,
}: {
  project: Project;
  index: number;
  onOpen: () => void;
}) {
  const cardRef = useRef<HTMLButtonElement | null>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]), {
    stiffness: 200,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-10, 10]), {
    stiffness: 200,
    damping: 20,
  });

  const accent = accentMap[project.accent];

  function onMove(e: React.MouseEvent) {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  }
  function onLeave() {
    mx.set(0);
    my.set(0);
  }

  return (
    <motion.button
      ref={cardRef}
      data-cursor="hover"
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      onClick={onOpen}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-12%" }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      style={{ rotateX, rotateY, transformPerspective: 1200 }}
      className="group relative w-full overflow-hidden rounded-[1.75rem] border border-border glass p-2 text-left transition-shadow duration-500 hover:glass-strong"
    >
      {/* device mockup */}
      <div className="relative overflow-hidden rounded-[1.35rem]">
        <div
          className="absolute inset-0 z-10 opacity-60 mix-blend-overlay transition-opacity duration-500 group-hover:opacity-30"
          style={{
            background: `linear-gradient(140deg, ${accent.from}, transparent 60%)`,
          }}
        />
        <motion.img
          src={images[project.id]}
          alt={`${project.title} interface preview`}
          loading="lazy"
          width={1080}
          height={400}
          style={{ translateZ: 40 }}
          className="aspect-[16/8] w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <span className="absolute right-4 top-4 z-20 grid h-10 w-10 place-items-center rounded-full glass-strong text-foreground opacity-0 transition-all duration-500 group-hover:opacity-100">
          <ArrowUpRight className="h-5 w-5" />
        </span>
      </div>

      <div className="relative p-4" style={{ transform: "translateZ(30px)" }}>
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-xl font-semibold sm:text-2xl">{project.title}</h3>
          <span
            className={cn(
              "shrink-0 text-xs font-medium uppercase tracking-wider",
              accent.text,
            )}
          >
            Case study
          </span>
        </div>
        <p className="mt-1.5 text-sm text-muted-foreground">
          {project.tagline}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.slice(0, 4).map((t) => (
            <span
              key={t}
              className="rounded-full border border-border bg-foreground/[0.03] px-3 py-1 text-xs text-muted-foreground"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.button>
  );
}

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const accent = accentMap[project.accent];
  return (
    <motion.div
      className="fixed inset-0 z-[90] flex items-start justify-center overflow-y-auto bg-background/70 p-4 backdrop-blur-md sm:items-center sm:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        layout
        initial={{ opacity: 0, y: 40, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 30, scale: 0.97 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="relative my-auto w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl glass-strong"
      >
        <div className="relative">
          <img
            src={images[project.id]}
            alt={`${project.title} interface preview`}
            loading="lazy"
            width={1280}
            height={800}
            className="aspect-[16/9] w-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, var(--card), transparent 70%)",
            }}
          />
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full glass-strong text-foreground transition-colors hover:text-primary"
          >
            <X className="h-5 w-5" />
          </button>
          <div className="absolute bottom-5 left-6 right-6">
            <h3 className="text-3xl font-semibold">{project.title}</h3>
            <p className={cn("mt-1 text-sm", accent.text)}>{project.tagline}</p>
          </div>
        </div>

        <div className="space-y-6 p-6 sm:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="rounded-2xl border border-border bg-foreground/[0.02] p-5">
              <div className="flex items-center gap-2 text-sm font-semibold">
                <Target className="h-4 w-4 text-destructive" /> Problem
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {project.problem}
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-foreground/[0.02] p-5">
              <div className="flex items-center gap-2 text-sm font-semibold">
                <Lightbulb className="h-4 w-4 text-primary" /> Solution
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {project.solution}
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold">Key features</h4>
            <div className="mt-3 grid gap-2 sm:grid-cols-2">
              {project.features.map((f) => (
                <div
                  key={f}
                  className="flex items-start gap-2 text-sm text-muted-foreground"
                >
                  <Check className={cn("mt-0.5 h-4 w-4 shrink-0", accent.text)} />
                  {f}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold">Tech stack</h4>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-border bg-foreground/[0.03] px-3 py-1 text-xs text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-3 pt-1">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-full bg-foreground/10 px-5 py-2.5 text-sm font-medium transition-colors hover:bg-foreground/20"
            >
              <Github className="h-4 w-4" /> GitHub
            </a>
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-aurora-1 to-aurora-2 px-5 py-2.5 text-sm font-medium text-primary-foreground"
            >
              Live demo <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function ProjectsSection() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="work" className="relative section-pad">
      <AuroraBackground className="opacity-60" />
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Featured Work"
          title="Projects built to solve real problems"
          description="Each one started with a friction point and ended as a refined, shipped product. Tap a card for the full case study."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <ProjectCard
              key={p.id}
              project={p}
              index={i}
              onOpen={() => setActive(p)}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <ProjectModal project={active} onClose={() => setActive(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
