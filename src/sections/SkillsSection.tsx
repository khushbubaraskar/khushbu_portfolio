"use client";

import { useCallback, useLayoutEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { AuroraBackground } from "@/components/AuroraBackground";
import { Reveal } from "@/components/Reveal";
import { skills, skillCategories, type Skill } from "@/data/skills";
import { cn } from "@/lib/utils";

interface Line {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  key: string;
}

export function SkillsSection() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const nodeRefs = useRef<Map<string, HTMLButtonElement>>(new Map());
  const [active, setActive] = useState<string | null>(null);
  const [lines, setLines] = useState<Line[]>([]);

  const setNodeRef = useCallback(
    (id: string) => (el: HTMLButtonElement | null) => {
      if (el) nodeRefs.current.set(id, el);
      else nodeRefs.current.delete(id);
    },
    [],
  );

  const computeLines = useCallback((id: string | null) => {
    if (!id || !containerRef.current) {
      setLines([]);
      return;
    }
    const skill = skills.find((s) => s.id === id);
    if (!skill) return;
    const cRect = containerRef.current.getBoundingClientRect();
    const fromEl = nodeRefs.current.get(id);
    if (!fromEl) return;
    const fr = fromEl.getBoundingClientRect();
    const fx = fr.left + fr.width / 2 - cRect.left;
    const fy = fr.top + fr.height / 2 - cRect.top;

    const next: Line[] = [];
    for (const rel of skill.related) {
      const el = nodeRefs.current.get(rel);
      if (!el) continue;
      const r = el.getBoundingClientRect();
      next.push({
        key: `${id}-${rel}`,
        x1: fx,
        y1: fy,
        x2: r.left + r.width / 2 - cRect.left,
        y2: r.top + r.height / 2 - cRect.top,
      });
    }
    setLines(next);
  }, []);

  useLayoutEffect(() => {
    computeLines(active);
  }, [active, computeLines]);

  const isRelated = (s: Skill) =>
    active === s.id ||
    (active != null &&
      (s.related.includes(active) ||
        skills.find((x) => x.id === active)?.related.includes(s.id)));

  return (
    <section id="skills" className="relative section-pad">
      <AuroraBackground variant="magenta" className="opacity-50" />
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Skills Ecosystem"
          title="Technologies I've used to build real products"
          description="A collection of technologies, frameworks and tools I've used across web, mobile and full-stack projects."
        />

        <div ref={containerRef} className="relative mt-14">
          {/* relationship lines */}
          <svg
            className="pointer-events-none absolute inset-0 z-0 h-full w-full"
            aria-hidden
          >
            <defs>
              <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="oklch(0.72 0.17 200)" />
                <stop offset="100%" stopColor="oklch(0.68 0.19 340)" />
              </linearGradient>
            </defs>
            {lines.map((l) => (
              <motion.line
                key={l.key}
                x1={l.x1}
                y1={l.y1}
                x2={l.x2}
                y2={l.y2}
                stroke="url(#lineGrad)"
                strokeWidth={1.5}
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.8 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />
            ))}
          </svg>

          <div className="relative z-10 grid gap-5 md:grid-cols-3 lg:grid-cols-5">
            {skillCategories.map((cat, ci) => (
              <Reveal
                key={cat.name}
                delay={ci * 0.06}
                className="rounded-3xl glass p-5"
              >
                <div className="mb-4">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-foreground">
                    {cat.name}
                  </h3>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {cat.blurb}
                  </p>
                </div>
                <div className="flex flex-col gap-2.5">
                  {skills
                    .filter((s) => s.category === cat.name)
                    .map((s) => {
                      const related = isRelated(s);
                      const dim = active != null && !related;
                      return (
                        <button
                          key={s.id}
                          ref={setNodeRef(s.id)}
                          data-cursor="hover"
                          onMouseEnter={() => setActive(s.id)}
                          onMouseLeave={() => setActive(null)}
                          onFocus={() => setActive(s.id)}
                          onBlur={() => setActive(null)}
                          className={cn(
                            "group relative rounded-2xl border px-4 py-3 text-left text-sm font-medium transition-all duration-300",
                            related
                              ? "border-primary/50 bg-primary/10 text-foreground glow-primary"
                              : "border-border bg-foreground/[0.02] text-muted-foreground hover:text-foreground",
                            dim && "opacity-30 blur-[1px]",
                          )}
                        >
                          {s.name}
                        </button>
                      );
                    })}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
