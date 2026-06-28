"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { socials } from "@/data/profile";
import { cn } from "@/lib/utils";

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
} as const;

export function SocialIcons({
  className,
  showEmail = false,
  email,
}: {
  className?: string;
  showEmail?: boolean;
  email?: string;
}) {
  const items = [
    ...socials,
    ...(showEmail && email
      ? [{ label: "Email", href: `mailto:${email}`, icon: "mail" as const }]
      : []),
  ];

  return (
    <div className={cn("flex items-center gap-3", className)}>
      {items.map((s, i) => {
        const Icon = iconMap[s.icon];
        return (
          <motion.a
            key={s.label}
            href={s.href}
            target={s.icon === "mail" ? undefined : "_blank"}
            rel="noreferrer noopener"
            aria-label={s.label}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 * i, duration: 0.5 }}
            whileHover={{ y: -4 }}
            className="group relative grid h-12 w-12 place-items-center rounded-full glass text-muted-foreground transition-colors duration-300 hover:text-primary"
          >
            <span className="absolute inset-0 -z-10 rounded-full opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100 glow-primary" />
            <Icon className="h-5 w-5" />
          </motion.a>
        );
      })}
    </div>
  );
}
