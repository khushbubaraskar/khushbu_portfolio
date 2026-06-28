"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { AuroraBackground } from "@/components/AuroraBackground";
import { journey } from "@/data/journey";

function JourneyNode({ step, index }: { step: (typeof journey)[number]; index: number }) {
  const isLeft = index % 2 === 0;
  return (
    <div className="relative grid grid-cols-[1fr] gap-4 md:grid-cols-2 md:gap-12">
      {/* connector dot */}
      <motion.span
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-[-1.65rem] top-2 z-10 grid h-5 w-5 place-items-center rounded-full bg-background md:left-1/2 md:-translate-x-1/2"
      >
        <span className="h-3 w-3 rounded-full bg-gradient-to-br from-aurora-1 to-aurora-2 glow-primary" />
      </motion.span>

      <motion.div
        initial={{ opacity: 0, x: isLeft ? -40 : 40, y: 20 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true, margin: "-15%" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={
          isLeft
            ? "md:col-start-1 md:text-right"
            : "md:col-start-2 md:row-start-1"
        }
      >
        <div className="group relative rounded-3xl glass p-6 transition-all duration-500 hover:glass-strong sm:p-7">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            {step.year}
          </span>
          <h3 className="mt-2 text-xl font-semibold sm:text-2xl">
            {step.title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {step.description}
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export function JourneySection() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 60%"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="journey" className="relative section-pad">
      <AuroraBackground variant="violet" className="opacity-60" />
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="My Journey"

          title="Building my path as a full-stack developer"

          description="My journey through mobile development, backend engineering and building complete digital products."
        />

        <div ref={ref} className="relative mt-16 md:mt-24">
          {/* track */}
          <div className="absolute left-0 top-0 h-full w-px bg-border md:left-1/2 md:-translate-x-1/2">
            <motion.div
              style={{ height: lineHeight }}
              className="w-px bg-gradient-to-b from-aurora-1 via-aurora-2 to-aurora-3"
            />
          </div>

          <div className="flex flex-col gap-12 pl-8 md:gap-20 md:pl-0">
            {journey.map((step, i) => (
              <JourneyNode key={step.title} step={step} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
