"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/constants";
import { scrollToSection } from "@/hooks/useLenis";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (target: string) => {
    setOpen(false);
    scrollToSection(target);
  };

  const initials = profile.name
    .split(" ")
    .map((w) => w[0])
    .join("");

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
    >
      <nav
        className={cn(
          "flex w-full max-w-6xl items-center justify-between rounded-full px-4 py-2.5 transition-all duration-500 sm:px-6",
          scrolled ? "glass-strong" : "bg-transparent",
        )}
      >
<button
  onClick={() => go("#top")}
  className="flex items-center gap-3"
  aria-label="Back to top"
>
  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-[0_0_25px_rgba(255,255,255,0.12)] transition-transform duration-300 hover:scale-105">
    <img
      src={logo}
      alt="Khushbu Baraskar Logo"
      className="h-10 w-10 object-contain"
    />
  </div>

  <span className="hidden text-sm font-medium tracking-wide sm:block">
    {profile.name}
  </span>
</button>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <button
              key={link.target}
              onClick={() => go(link.target)}
              className="relative rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </button>
          ))}
        </div>

        <button
          onClick={() => go("#contact")}
          className="hidden rounded-full bg-foreground/10 px-5 py-2 text-sm font-medium transition-colors hover:bg-foreground/20 md:block"
        >
          Let&apos;s talk
        </button>

        <button
          onClick={() => setOpen((o) => !o)}
          className="grid h-9 w-9 place-items-center rounded-full glass md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute inset-x-4 top-20 rounded-3xl glass-strong p-4 md:hidden"
          >
            <div className="flex flex-col">
              {navLinks.map((link) => (
                <button
                  key={link.target}
                  onClick={() => go(link.target)}
                  className="rounded-2xl px-4 py-3 text-left text-base text-muted-foreground transition-colors hover:bg-foreground/5 hover:text-foreground"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
