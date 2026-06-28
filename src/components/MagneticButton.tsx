"use client";

import { type ReactNode } from "react";
import { motion } from "framer-motion";
import { useMagnetic } from "@/hooks/useMagnetic";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "ghost";
  className?: string;
  strength?: number;
  external?: boolean;
}

/**
 * A button/link with a magnetic pull toward the cursor and a sliding gradient
 * glow on hover. Built on the useMagnetic spring hook.
 */
export function MagneticButton({
  children,
  href,
  onClick,
  variant = "primary",
  className,
  strength = 0.35,
  external,
}: MagneticButtonProps) {
  const { ref, x, y, handleMouseMove, handleMouseLeave } =
    useMagnetic(strength);

  const base =
    "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-7 py-3.5 text-sm font-medium tracking-wide transition-colors duration-300";
  const styles =
    variant === "primary"
      ? "text-primary-foreground"
      : "glass text-foreground hover:text-primary";

  const inner = (
    <>
      {variant === "primary" && (
        <span
          aria-hidden
          className="absolute inset-0 -z-10 bg-gradient-to-r from-aurora-1 via-aurora-2 to-aurora-3 transition-transform duration-500 group-hover:scale-110"
        />
      )}
      <span
        aria-hidden
        className="absolute inset-0 -z-10 translate-y-full bg-foreground/10 transition-transform duration-500 group-hover:translate-y-0"
      />
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </>
  );

  const motionStyle = { x, y };

  if (href) {
    return (
      <motion.a
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer noopener" : undefined}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={motionStyle}
        className={cn(base, styles, className)}
      >
        {inner}
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={ref as React.Ref<HTMLButtonElement>}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={motionStyle}
      className={cn(base, styles, className)}
    >
      {inner}
    </motion.button>
  );
}
