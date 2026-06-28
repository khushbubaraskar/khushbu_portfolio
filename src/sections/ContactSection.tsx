"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { AuroraBackground } from "@/components/AuroraBackground";
import { ParticleField } from "@/components/ParticleField";
import { MagneticButton } from "@/components/MagneticButton";
import { Stagger, staggerItem } from "@/components/Reveal";
import { profile } from "@/data/profile";

const cards = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "in/khushbu-baraskar",
    href: profile.linkedin,
    icon: Linkedin,
  },
  {
    label: "GitHub",
    value: "@khushbubaraskar",
    href: profile.github,
    icon: Github,
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="relative section-pad">
    <AuroraBackground className="opacity-60" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <SectionHeading
          align="center"
          eyebrow="Contact"
          title="Let's Build Something Exceptional"
          description="Have a project, a role, or an idea worth shipping? I'm one message away — let's make it real."
        />

        <Stagger className="mt-12 grid gap-4 sm:grid-cols-3">
          {cards.map((c) => {
            const Icon = c.icon;
            return (
              <motion.a
                key={c.label}
                variants={staggerItem}
                href={c.href}
                target={c.label === "Email" ? undefined : "_blank"}
                rel="noreferrer noopener"
                data-cursor="hover"
                whileHover={{ y: -8 }}
                className="group relative flex flex-col items-center gap-3 overflow-hidden rounded-3xl glass p-7 transition-all duration-500 hover:glass-strong"
              >
                <span className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-aurora-1/20 to-aurora-2/20 text-primary transition-transform duration-500 group-hover:scale-110">
                  <Icon className="h-6 w-6" />
                </span>
                <div>
                  <div className="text-sm font-semibold">{c.label}</div>
                  <div className="mt-0.5 flex items-center justify-center gap-1 text-xs text-muted-foreground">
                    {c.value}
                    <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                  </div>
                </div>
              </motion.a>
            );
          })}
        </Stagger>

        <div className="mt-12 flex justify-center">
          <MagneticButton href={`mailto:${profile.email}`} strength={0.4}>
            <Mail className="h-4 w-4" /> Start a conversation
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
