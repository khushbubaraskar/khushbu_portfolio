"use client";

import { type ReactNode } from "react";
import { useLenis } from "@/hooks/useLenis";
import { Cursor } from "@/components/Cursor";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/sections/Footer";

/**
 * Top-level shell for the portfolio: initializes Lenis smooth scrolling,
 * renders the custom cursor, sticky navbar and footer around the page content.
 */
export function PortfolioLayout({ children }: { children: ReactNode }) {
  useLenis();

  return (
    <div className="relative min-h-screen">
      <Cursor />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
