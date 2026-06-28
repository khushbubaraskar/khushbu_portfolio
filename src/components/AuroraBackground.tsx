import { cn } from "@/lib/utils";

/**
 * Layered aurora gradient blobs with slow drift. Purely decorative.
 * `variant` shifts the palette emphasis between sections to keep a
 * connected-yet-evolving feel down the page.
 */
export function AuroraBackground({
  className,
  variant = "default",
}: {
  className?: string;
  variant?: "default" | "violet" | "magenta";
}) {
  const palettes = {
    default: ["var(--aurora-1)", "var(--aurora-2)", "var(--aurora-3)"],
    violet: ["var(--aurora-2)", "var(--aurora-3)", "var(--aurora-1)"],
    magenta: ["var(--aurora-3)", "var(--aurora-1)", "var(--aurora-2)"],
  } as const;
  const [a, b, c] = palettes[variant];

  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className,
      )}
    >
      <div
        className="absolute -left-[10%] top-[-15%] h-[55vh] w-[55vh] rounded-full blur-[120px] animate-aurora"
        style={{ background: a, opacity: 0.28 }}
      />
      <div
        className="absolute right-[-10%] top-[10%] h-[50vh] w-[50vh] rounded-full blur-[130px] animate-aurora"
        style={{ background: b, opacity: 0.22, animationDelay: "-6s" }}
      />
      <div
        className="absolute bottom-[-20%] left-[30%] h-[55vh] w-[55vh] rounded-full blur-[140px] animate-aurora"
        style={{ background: c, opacity: 0.2, animationDelay: "-12s" }}
      />
    </div>
  );
}
