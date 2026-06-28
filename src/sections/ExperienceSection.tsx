"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { experience } from "@/data/experience";
import { ArrowUpRight, Briefcase } from "lucide-react";

export function ExperienceSection() {
  const item = experience[0];

  return (
    <section id="experience" className="relative section-pad">
      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <SectionHeading
          eyebrow="Experience"
          title="Professional experience through real projects"
          description="Hands-on experience building mobile applications, backend services and full-stack solutions in a professional development environment."
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-16"
        >
          <div className="group relative overflow-hidden rounded-[2rem] border border-border glass p-8 transition-all duration-500 hover:glass-strong sm:p-10">
            
            {/* Top row */}
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  <Briefcase className="h-3.5 w-3.5" />
                  Internship Experience
                </div>

                <h3 className="text-2xl font-semibold sm:text-3xl">
                  {item.role}
                </h3>

                <p className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                  <ArrowUpRight className="h-4 w-4" />
                  {item.org}
                </p>
              </div>

              <div className="rounded-full border border-border bg-foreground/[0.03] px-4 py-2 text-sm font-medium text-primary">
                {item.period}
              </div>
            </div>

            {/* Description */}
            <p className="mt-8 max-w-3xl text-sm leading-7 text-muted-foreground sm:text-base">
              {item.summary}
            </p>

            {/* Highlights */}
            <div className="mt-8">
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.15em] text-foreground">
                Key Contributions
              </h4>

              <div className="flex flex-wrap gap-3">
                {item.highlights.map((highlight) => (
                  <div
                    key={highlight}
                    className="rounded-full border border-border bg-foreground/[0.03] px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-foreground/[0.06]"
                  >
                    {highlight}
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div className="mt-10 border-t border-border pt-6">
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.15em] text-foreground">
                Technologies
              </h4>

              <div className="flex flex-wrap gap-3">
                {[
                  "Flutter",
                  "Node.js",
                  "REST APIs",
                  "Mobile Development",
                  "Full Stack Development",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-gradient-to-r from-aurora-1/20 to-aurora-2/20 px-4 py-2 text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}